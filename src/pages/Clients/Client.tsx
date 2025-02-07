import { Suspense, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AgentType, CustomDataCompanie } from "../../utils/types/types";
import SearchInput from "@/components/InputSearch";
import InputComponent from "@/components/InputComponent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import TableSoftwares from "../../components/Tables/Software";
import { H1Custom } from "@/components/customerComponents/Customercomponents";
import { WrapperCharts } from "../Charts/Charts";
import { requestWithToken } from "@/utils/request";
import TableProcesses from "@/components/Tables/ProcessTable";
import AgentInfo from "@/components/customerComponents/AgentInfo";
import HistoryAgent from "@/components/customerComponents/HistoryAgent";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/data/error/ErrorFallback";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { Button } from "@/components/ui/button";
import { getDayOfWeek } from "@/utils/utils";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { useToast } from "@/components/ui/use-toast";
import ActivityMonitor from "@/components/Productivity/Productivity";

// const renderKeyValuePair = (
//   key: string,
//   value: any,
//   // eslint-disable-next-line
//   isArray: boolean = false
// ) => {
//   let displayValue: any;
//   let readOnly = true;

//   if (typeof value === "object") {
//     // Se for um array, tratar cada elemento
//     if (Array.isArray(value)) {
//       displayValue = value.map((item, index) => (
//         <div key={index}>
//           {/* Recursivamente chamar renderKeyValuePair para cada item do array */}
//           {renderKeyValuePair(index.toString(), item, true)}
//         </div>
//       ));
//     } else {
//       displayValue = Object.entries(value).map(([subKey, subValue]) => (
//         <div key={subKey}>
//           {/* Recursivamente chamar renderKeyValuePair para cada propriedade do objeto */}
//           {renderKeyValuePair(subKey, subValue)}
//         </div>
//       ));
//     }
//   } else {
//     // Se não for um objeto, apenas exibir o valor
//     displayValue = value;
//   }

//   const valuesForEdit = [
//     "bond",
//     "patrimony",
//     "date_warranty",
//     "nfe",
//     "purchase_price",
//     "department",
//     "collaborator",
//     "local",
//   ];

//   if (valuesForEdit.includes(key)) {
//     readOnly = false;
//   }

//   // const keyNew = key;

//   return (
//     <div key={key} className="flex justify-between text-[1.4rem] relative">
//       {!isArray && <label htmlFor={key}>{key}</label>}
//       {typeof displayValue === "string" || typeof displayValue === "number" ? (
//         <input
//           id={key}
//           value={displayValue}
//           readOnly={readOnly}
//           className={"text-gray-900 px-3"}
//           onClick={() => handleCopyContent(key)}
//         />
//       ) : (
//         <div
//           id={key}
//           className={"text-gray-900"}
//           onClick={() => handleCopyContent(key)}
//         >
//           {displayValue}
//         </div>
//       )}
//     </div>
//   );
// };

// const renderKeyValuePairs = (obj: any): JSX.Element[] => {
//   // Object.entries(obj).map(([key, value]) => console.log(key, value));
//   return Object.entries(obj).map(([key, value]) =>
//     renderKeyValuePair(key, value)
//   );
// };

const handleCopyContent = (inputId: string) => {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;

  if (inputElement) {
    navigator.clipboard.writeText(inputElement.value);
  }
};

export default function Client() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => location.reload()}>
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <LoadingSpinner className="w-12 h-12" />
          </div>
        }
      >
        <DataClient />
      </Suspense>
    </ErrorBoundary>
  );
}

function DataClient() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [activeTab, setActiveTab] = useState("Geral");
  const formElement = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const { data } = useSuspenseQuery<AgentType>({
    queryKey: ["inventory-data", id],
    queryFn: async () => {
      try {
        const response = await requestWithToken.get(`/clients/full/${id}`);
        return response.data;
      } catch (error: any) {
        throw new UnexpectedError("Falha ao buscar os dados: " + (error.response?.data?.message || error.message));
      }
    },
    retry: 1
  });

  const { data: companieData } = useSuspenseQuery<CustomDataCompanie>({
    queryKey: ["company-data"],
    queryFn: async () => {
      try {
        const response = await requestWithToken.get(`/company`);
        return response.data;
      } catch (error: any) {
        throw new UnexpectedError("Falha ao buscar os dados: " + (error.response?.data?.message || error.message));
      }
    },
    retry: 1
  });

  const handleEdit = async () => {
    try {
      if (!data) return;
      const updatedCustom: Record<string, string> = {};

      const form = formElement.current;
      if (!form) return;

      const readOnlyElements = form.querySelectorAll("input:not([readonly]), [data-select-type='edit-field']");

      readOnlyElements.forEach((element) => {
        const inputValue = element instanceof HTMLInputElement ? element.value : element.textContent;
        if (inputValue) {
          updatedCustom[element.id] = ["Selecione um DP", "Localizado no(a)", "Pertence ao"].includes(inputValue)
            ? ""
            : inputValue;
        }
      });

      await requestWithToken.patch(`/inventory/custom/${id}`, {
        custom: updatedCustom
      });
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: `Campo(s) atualizados com sucesso`
      });
    } catch (err: any) {
      toast({
        title: "Erro",
        // className: "bg-success border-zinc-100",
        variant: "destructive",
        description: `Ocorreu um problema para atualizar esse(s) campo(s). Erro ${err.message}`
      });
    }
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading data</div>;

  return (
    <main className="w-full py-2">
      <div className="flex justify-center space-x-1 mb-5">
        {[
          "Geral",
          "Software",
          "Geolocalização",
          "Histórico de Ocorrências",
          "Monitoramento",
          "Processos",
          "Detalhes"
        ].map((tab) => (
          <button
            key={tab}
            className={`px-4 bg py-2 rounded text-xl font-semibold transition-all duration-300 hover:opacity-80 ${
              activeTab === tab && "dark:bg-purple-700 bg-green-500 text-white"
              // : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <section className="max-w-[1400px] w-[1400px] mx-auto rounded-lg" id="FormContainer" ref={formElement}>
        {/* Renderizar conteúdo conforme a aba ativa */}
        {activeTab === "Geral" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center p-[15px]">
            <div className="text-center col-span-full text-4xl font-bold mb-5">Informações Gerais</div>

            <InputComponent
              label="SO"
              id="sys-so"
              readOnly
              value={data.inventory.inventoryGeneral.system.so}
              onClick={() => handleCopyContent("sys-so")}
            />
            <InputComponent
              label="Hostname"
              id="sys-host"
              value={data.inventory.inventoryGeneral.system.hostname}
              readOnly
              onClick={() => handleCopyContent("sys-host")}
            />
            <InputComponent
              label="Domínio"
              id="sys-domain"
              value={data.inventory.inventoryGeneral.system.domain}
              readOnly
              onClick={() => handleCopyContent("sys-domain")}
            />
            <InputComponent
              label="Usuário"
              id="sys-user"
              value={data.inventory.inventoryGeneral.system.user_logged}
              readOnly
              onClick={() => handleCopyContent("sys-user")}
            />
            <InputComponent
              label="CPU"
              id="cpu-model"
              value={data.inventory.inventoryGeneral.cpu.model}
              readOnly
              onClick={() => handleCopyContent("cpu-model")}
            />
            <InputComponent
              label="Memória RAM"
              id="cpu-arch"
              value={data.inventory.inventoryGeneral.memory.total.toFixed(2) + " GB"}
              readOnly
              onClick={() => handleCopyContent("cpu-arch")}
            />
            <InputComponent
              label="Disco Total"
              id="storage-total"
              value={data.inventory.inventoryGeneral.storage[0].total.toFixed(2) + " GB"}
              readOnly
              onClick={() => handleCopyContent("storage-total")}
            />
            <InputComponent
              label="Disco usado"
              id="storage-used"
              value={data.inventory.inventoryGeneral.storage[0].used.toFixed(2) + " GB"}
              readOnly
              onClick={() => handleCopyContent("storage-used")}
            />
            <InputComponent
              label="IP"
              id="net-ip"
              value={data.inventory.inventoryGeneral.network.principal_interface?.ipv4 || ""}
              readOnly
              onClick={() => handleCopyContent("net-ip")}
            />
            <InputComponent
              label="Mac"
              id="net-mac"
              value={data.inventory.inventoryGeneral.network.principal_interface?.mac || ""}
              readOnly
              onClick={() => handleCopyContent("net-mac")}
            />
            <InputComponent
              label="Rede Conec."
              id="net-name"
              value={data.inventory.inventoryGeneral.network.principal_interface.name}
              readOnly
              onClick={() => handleCopyContent("net-name")}
            />
            <InputComponent
              label="Fabricante"
              id="sys-manufact"
              value={data.inventory.inventoryGeneral.motherboard.manufacturer}
              readOnly
              onClick={() => handleCopyContent("sys-manufact")}
            />
            <InputComponent
              label="Placa mãe"
              id="manufacturer"
              value={data.inventory.inventoryGeneral.motherboard.model_extend}
              readOnly
              onClick={() => handleCopyContent("manufacturer")}
            />
            <InputComponent
              label="Modelo"
              id="motherboard"
              value={data.inventory.inventoryGeneral.motherboard.model}
              readOnly
              onClick={() => handleCopyContent("motherboard")}
            />

            {/* TODO testando esse componente para ser editavel */}
            <InputComponent
              label="Patrimônio"
              id="patrimony"
              // onChange={(e: any) =>
              //   handleChange("patrimony", e.target.value)
              // }
              placeholder="Ex: PC-0001"
              value={data.inventory?.custom?.patrimony}
              readOnly={false}
              onClick={() => handleCopyContent("patrimony")}
            />

            <div className="flex justify-between text-[1.4rem] relative">
              <SearchInput
                typeData={null}
                id="collaborator"
                url={`stock/search?query=`}
                placeholder="Ex: Joao Silva"
                defaultValue={data.inventory?.custom?.collaborator}
                label="Colaborador"
              />
            </div>

            <InputComponent
              label="Data Compra"
              id="date_warranty"
              value={data.inventory?.custom?.date_warranty}
              placeholder="01/01/1970"
              onClick={() => handleCopyContent("date_warranty")}
              // onChange={(e: any) =>
              //   handleChange("date_warranty", e.target.value)
              // }
              readOnly={false}
            />

            <div className="flex justify-between items-center text-[1.4rem] relative">
              <Label htmlFor="department_ref" className="text-2xl font-medium text-gray-700 dark:text-gray-300 ">
                Departamento
              </Label>

              <Select defaultValue={data.inventory?.custom?.department || ""}>
                <SelectTrigger
                  id="department_ref"
                  // className="w-[270px] bg-slate-800 ring-1 ring-ring px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground"
                  className="w-[256px] dark:bg-slate-800 px-3 py-2 text-xl ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2"
                >
                  <SelectValue id="department" data-select-type="edit-field" placeholder="Selecione um DP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Departamentos</SelectLabel>
                    {companieData?.custom?.department?.map((department) => (
                      <SelectItem key={department} value={department}>
                        {department}
                      </SelectItem>
                    ))}
                    {/* <SelectItem value="RH">RH</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Financeiro">Financeiro</SelectItem>
                    <SelectItem value="TI">TI</SelectItem>
                    <SelectItem value="Operação">Operação</SelectItem>
                    <SelectItem value="Diretoria">Diretoria</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between items-center text-[1.4rem] relative">
              <Label htmlFor="local_ref" className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                Local
              </Label>

              <Select defaultValue={data.inventory?.custom?.local || ""}>
                <SelectTrigger
                  id="local_ref"
                  className="w-[256px] dark:bg-slate-800 px-3 py-2 text-xl ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2"
                >
                  <SelectValue data-select-type="edit-field" id="local" placeholder="Localizado no(a)" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectGroup>
                    <SelectItem value="Estoque">Estoque</SelectItem>
                  </SelectGroup> */}
                  {companieData?.custom?.local?.map((local) => (
                    <SelectItem key={local} value={local}>
                      {local}
                    </SelectItem>
                  ))}
                  {/* <SelectItem value="Sala 1">Sala 1</SelectItem>
                  <SelectItem value="12°">12°</SelectItem>
                  <SelectItem value="21° Expedição">21° Expedição</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between items-center text-[1.4rem] relative">
              <Label htmlFor="bond_ref" className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                Vinculo
              </Label>

              <Select defaultValue={data.inventory?.custom?.bond || ""}>
                <SelectTrigger
                  id="bond_ref"
                  className="w-[256px] dark:bg-slate-800 px-3 py-2 text-xl ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2"
                >
                  <SelectValue data-select-type="edit-field" id="bond" placeholder="Pertence ao" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Pertence ao</SelectLabel> */}
                    <SelectItem value="Proprietario">Proprietario</SelectItem>
                    <SelectItem value="Operador">Operador</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-full flex justify-center mt-5">
              {" "}
              {/* Centralizando o botão "Salvar" */}
              <Button className="w-60 text-xl text-white bg-green-500 hover:bg-green-600" onClick={handleEdit}>
                Salvar
              </Button>
            </div>
          </div>
        )}
        {activeTab === "Software" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center ">
            <div className="text-center col-span-full font-bold">
              <span className="text-5xl">Softwares</span>
              <TableSoftwares
                // data={data.inventory.software.software}
                id={data.uid}
              />
            </div>
            {/* {renderKeyValuePairs(data.inventory.inventoryGeneral.software)} */}
          </div>
        )}
        {activeTab === "Geolocalização" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center  ">
            <div className="text-center col-span-full text-5xl font-bold">Geolocalização</div>
            <div className="col-span-full text-3xl font-bold">
              <H1Custom className="text-left">
                {data.inventory.inventoryGeneral.system.hostname}, {data.inventory.inventoryGeneral.system.last_update}
              </H1Custom>
            </div>
            <div className="col-span-full h-full w-full">
              <iframe
                className="w-full min-h-fit min-w-fit"
                height={"600px"}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${data.inventory.location}&hl=es;z=14&output=embed`}
              ></iframe>
            </div>
          </div>
        )}
        {activeTab === "Histórico de Ocorrências" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center ">
            <div className="text-center col-span-full text-5xl font-bold">
              Histórico de Ocorrências
              <div className="col-span-full flex justify-center ">
                <HistoryAgent id={id} />
              </div>
            </div>
          </div>
        )}
        {activeTab === "Processos" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center">
            <div className="text-center col-span-full font-bold">
              <div className="mb-5 text-5xl">Processos</div>
              <TableProcesses
                id={id}
                // data={data.inventory.processes.processes.apps}
              />
            </div>
          </div>
        )}
        {activeTab === "Monitoramento" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center">
            <div className="text-center col-span-full text-4xl font-bold mb-6">
              <span
                onClick={() => handleTabClick("Monitoramento")}
                className="mr-8 cursor-pointer dark:text-purple-400 text-green-500"
              >
                Monitoramento
              </span>
              <span onClick={() => handleTabClick("Produtividade")} className="cursor-pointer">
                Produtividade
              </span>
            </div>
            <WrapperCharts
              data={{
                cpu_temp: data.inventory.inventoryGeneral.cpu.cpu_temp || 0,
                cpu_usage: data.inventory.inventoryGeneral.cpu.cpu_usage,
                free_disk_space: data.inventory.inventoryGeneral.storage[0].available,
                ram_usage: data.inventory.inventoryGeneral.memory.used,
                ram_total: data.inventory.inventoryGeneral.memory.total,
                total_disk_space: data.inventory.inventoryGeneral.storage[0].total,
                day: getDayOfWeek(data.inventory.inventoryGeneral.system.last_update)
              }}
              id={data.uid}
            />
          </div>
        )}
        {activeTab === "Produtividade" && (
          <div className="w-full">
            <div className="text-center col-span-full text-4xl font-bold mb-6">
              <span onClick={() => handleTabClick("Monitoramento")} className="mr-8 cursor-pointer">
                Monitoramento
              </span>
              <span
                onClick={() => handleTabClick("Produtividade")}
                className="cursor-pointer dark:text-purple-400 text-green-500"
              >
                Produtividade
              </span>
            </div>
            <ActivityMonitor
              id={data.uid}
              hoursTotal={8}
              // hoursTotal={data.inventory.inventoryGeneral.system.time_machine_on}
            />
          </div>
        )}
        {activeTab === "Detalhes" && (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center ">
            <div className="text-center col-span-full font-bold">
              <div className="text-5xl">Detalhes da Coleta</div>
              <AgentInfo
                inventoryGeneral={data.inventory.inventoryGeneral}
                peripherals={data.inventory.peripherals}
                first_collect={data.inventory.first_collect}
              />
            </div>
            {/* {renderKeyValuePairs({
                  ...data.inventory,
                  ...data.inventory.periphericals,
                })} */}
          </div>
        )}
      </section>
    </main>
  );
}
