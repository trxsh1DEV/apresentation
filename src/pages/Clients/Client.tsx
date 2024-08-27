import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// import "./style.css";
import { AgentType } from "../../utils/types/types";
import SearchInput from "@/components/InputCommom";
import InputComponent from "@/components/InputComponent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import TableSoftwares from "../Software/Software";
import { H1Custom } from "@/components/customerComponents/Customercomponents";
import Charts from "../Charts/Charts";
import { requestWithToken } from "@/utils/request";
import TableProcesses from "@/components/Tables/ProcessTable";
import AgentInfo from "@/components/customerComponents/AgentInfo";

const renderKeyValuePair = (
  key: string,
  value: any,
  // eslint-disable-next-line
  isArray: boolean = false
) => {
  let displayValue: any;
  let readOnly = true;

  if (typeof value === "object") {
    // Se for um array, tratar cada elemento
    if (Array.isArray(value)) {
      displayValue = value.map((item, index) => (
        <div key={index}>
          {/* Recursivamente chamar renderKeyValuePair para cada item do array */}
          {renderKeyValuePair(index.toString(), item, true)}
        </div>
      ));
    } else {
      displayValue = Object.entries(value).map(([subKey, subValue]) => (
        <div key={subKey}>
          {/* Recursivamente chamar renderKeyValuePair para cada propriedade do objeto */}
          {renderKeyValuePair(subKey, subValue)}
        </div>
      ));
    }
  } else {
    // Se não for um objeto, apenas exibir o valor
    displayValue = value;
  }

  const valuesForEdit = [
    "bond",
    "patrimony",
    "date_warranty",
    "nfe",
    "purchase_price",
    "department",
    "collaborator",
    "local",
  ];

  if (valuesForEdit.includes(key)) {
    readOnly = false;
  }

  // const keyNew = key;

  return (
    <div key={key} className="flex justify-between text-[1.4rem] relative">
      {!isArray && <label htmlFor={key}>{key}</label>}
      {typeof displayValue === "string" || typeof displayValue === "number" ? (
        <input
          id={key}
          value={displayValue}
          readOnly={readOnly}
          className={"text-gray-900 px-3"}
          onClick={() => handleCopyContent(key)}
        />
      ) : (
        <div
          id={key}
          className={"text-gray-900"}
          onClick={() => handleCopyContent(key)}
        >
          {displayValue}
        </div>
      )}
    </div>
  );
};

const renderKeyValuePairs = (obj: any): JSX.Element[] => {
  // Object.entries(obj).map(([key, value]) => console.log(key, value));
  return Object.entries(obj).map(([key, value]) =>
    renderKeyValuePair(key, value)
  );
};

const handleCopyContent = (inputId: string) => {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;

  if (inputElement) {
    navigator.clipboard.writeText(inputElement.value);
  }
};

export default function Client() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [agent, setAgent] = useState<AgentType | null>(null);
  const [activeTab, setActiveTab] = useState("Geral");
  const formElement = useRef(null);

  const handleEdit = async () => {
    try {
      if (!agent) return;
      const updatedCustom: any = {};

      const form =
        formElement.current || document.getElementById("FormContainer");
      if (!form) return;
      // console.log(form.querySelector("#department > span")?.textContent);
      const readOnlyElements = form.querySelectorAll(
        "input:not([readonly]), [data-select-type='edit-field']"
      );

      // Itera sobre os elementos encontrados
      readOnlyElements.forEach((element) => {
        console.log("el", element);
        const inputValue =
          element instanceof HTMLInputElement
            ? element.value
            : element.textContent;
        updatedCustom[element.id] = inputValue;
      });

      await requestWithToken.patch(`/clients/${id}`, {
        custom: {
          ...updatedCustom,
          // id,
        },
      });

      setAgent((prevUserData: any) => ({
        ...prevUserData,
        custom: {
          ...updatedCustom,
        },
      }));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleChange = (field: string, value: string) => {
    setAgent((prevState: any): any => ({
      ...prevState,
      custom: {
        ...prevState.custom,
        [field]: value,
      },
    }));
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const fetchData = useCallback(async () => {
    try {
      const [resultInventory, resultSoftware] = await Promise.all([
        requestWithToken.get(`/clients/full/${id}`),
        requestWithToken.get(`/softwares/${id}`),
      ]);

      if (!resultInventory) return setAgent(null);
      console.log(resultInventory.data.inventory);
      // console.log(resultSoftware.data.software);

      // Unificar os resultados em um único objeto
      const unifiedData = {
        ...resultInventory.data,
        softwares: resultSoftware.data.software,
      };

      setAgent(unifiedData);
    } catch (error) {
      console.error("Erro ao buscar os dados do agente:", error);
      setAgent(null);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(agent?.inventory.inventoryHardware.software[0])
  // console.log(agent?.inventory.software);

  return (
    <main className="ProfileContainer">
      <div className="flex justify-center space-x-1 mb-5">
        {[
          "Geral",
          "Software",
          "Geolocalização",
          "Histórico de Ocorrências",
          "Monitoramento",
          "Processos",
          "Detalhes",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-4 bg py-2 rounded text-xl font-semibold transition-all duration-300 hover:opacity-80 ${
              activeTab === tab
                ? "dark:bg-purple-700 bg-green-500 text-white"
                : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {!agent ? (
        <div>Loading...</div>
      ) : (
        <>
          <section
            className="max-w-[1400px] w-[1200px] h-max mx-auto my-0 px-5 rounded-lg"
            id="FormContainer"
            ref={formElement}
          >
            {/* Renderizar conteúdo conforme a aba ativa */}
            {activeTab === "Geral" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px]">
                <div className="text-center col-span-full text-4xl font-bold mb-5">
                  Informações Gerais
                </div>

                <InputComponent
                  label="SO"
                  id="sys-so"
                  readOnly
                  value={agent.inventory.inventoryHardware.system.so}
                  onClick={() => handleCopyContent("sys-so")}
                />
                <InputComponent
                  label="Hostname"
                  id="sys-host"
                  value={agent.inventory.inventoryHardware.system.hostname}
                  readOnly
                  onClick={() => handleCopyContent("sys-host")}
                />
                <InputComponent
                  label="Domínio"
                  id="sys-domain"
                  value={agent.inventory.inventoryHardware.system.domain}
                  readOnly
                  onClick={() => handleCopyContent("sys-domain")}
                />
                <InputComponent
                  label="Usuário"
                  id="sys-user"
                  value={agent.inventory.inventoryHardware.system.user_logged}
                  readOnly
                  onClick={() => handleCopyContent("sys-user")}
                />
                <InputComponent
                  label="CPU"
                  id="cpu-model"
                  value={agent.inventory.inventoryHardware.cpu.model}
                  readOnly
                  onClick={() => handleCopyContent("cpu-model")}
                />
                <InputComponent
                  label="Memória RAM"
                  id="cpu-arch"
                  value={agent.inventory.inventoryHardware.memory.total + " GB"}
                  readOnly
                  onClick={() => handleCopyContent("cpu-arch")}
                />
                <InputComponent
                  label="Disco Total"
                  id="storage-total"
                  value={
                    agent.inventory.inventoryHardware.storage.total + " GB"
                  }
                  readOnly
                  onClick={() => handleCopyContent("storage-total")}
                />
                <InputComponent
                  label="Disco usado"
                  id="storage-used"
                  value={agent.inventory.inventoryHardware.storage.used + " GB"}
                  readOnly
                  onClick={() => handleCopyContent("storage-used")}
                />
                <InputComponent
                  label="IP"
                  id="net-ip"
                  value={agent.inventory.inventoryHardware.network.ipv4}
                  readOnly
                  onClick={() => handleCopyContent("net-ip")}
                />
                <InputComponent
                  label="Mac"
                  id="net-mac"
                  value={agent.inventory.inventoryHardware.network.mac}
                  readOnly
                  onClick={() => handleCopyContent("net-mac")}
                />
                <InputComponent
                  label="Rede Conec."
                  id="net-name"
                  value={agent.inventory.inventoryHardware.network.network}
                  readOnly
                  onClick={() => handleCopyContent("net-name")}
                />
                <InputComponent
                  label="Fabricante"
                  id="sys-manufact"
                  value={
                    agent.inventory.inventoryHardware.motherboard.manufacturer
                  }
                  readOnly
                  onClick={() => handleCopyContent("sys-manufact")}
                />
                <InputComponent
                  label="Placa mãe"
                  id="manufacturer"
                  value={
                    agent.inventory.inventoryHardware.motherboard.model_extend
                  }
                  readOnly
                  onClick={() => handleCopyContent("manufacturer")}
                />
                <InputComponent
                  label="Modelo"
                  id="motherboard"
                  value={agent.inventory.inventoryHardware.motherboard.model}
                  readOnly
                  onClick={() => handleCopyContent("motherboard")}
                />

                {/* TODO testando esse componente para ser editavel */}
                <InputComponent
                  label="Patrimônio"
                  id="patrimony"
                  onChange={(e: any) =>
                    handleChange("patrimony", e.target.value)
                  }
                  placeholder="Ex: PC-0001"
                  value={agent.custom?.patrimony}
                  readOnly={false}
                  onClick={() => handleCopyContent("patrimony")}
                />

                <div className="flex justify-between text-[1.4rem] relative">
                  <SearchInput
                    typeData={null}
                    id="collaborator"
                    url={`stock/search?query=`}
                    placeholder="Ex: Joao Silva"
                    defaultValue={agent.custom?.collaborator}
                    label="Colabrador"
                  />
                </div>

                <InputComponent
                  label="Data Compra"
                  id="date_warranty"
                  value={agent.custom?.date_warranty}
                  placeholder="01/01/1970"
                  onClick={() => handleCopyContent("date_warranty")}
                  onChange={(e: any) =>
                    handleChange("date_warranty", e.target.value)
                  }
                  readOnly={false}
                />

                <div className="flex justify-between items-center text-[1.4rem] relative">
                  <Label
                    htmlFor="department_ref"
                    className="text-2xl font-medium text-gray-700 dark:text-gray-300 "
                  >
                    Departamento
                  </Label>

                  <Select defaultValue={agent.custom?.department}>
                    <SelectTrigger
                      id="department_ref"
                      // className="w-[252px] bg-slate-800 ring-1 ring-ring px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground"
                      className="w-[252px] dark:bg-slate-800 px-3 py-2 text-xl ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue
                        id="department"
                        data-select-type="edit-field"
                        placeholder="Selecione um DP"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Departamentos</SelectLabel>
                        <SelectItem value="RH">RH</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Financeiro">Financeiro</SelectItem>
                        <SelectItem value="TI">TI</SelectItem>
                        <SelectItem value="Operação">Operação</SelectItem>
                        <SelectItem value="Diretoria">Diretoria</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between items-center text-[1.4rem] relative">
                  <Label
                    htmlFor="local_ref"
                    className="text-2xl font-medium text-gray-700 dark:text-gray-300"
                  >
                    Local
                  </Label>

                  <Select defaultValue={agent.custom?.local}>
                    <SelectTrigger
                      id="local_ref"
                      className="w-[252px] dark:bg-slate-800 px-3 py-2 text-xl ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue
                        data-select-type="edit-field"
                        id="local"
                        placeholder="Localizado no(a)"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Pertence ao</SelectLabel> */}
                        <SelectItem value="Estoque">Estoque</SelectItem>
                      </SelectGroup>
                      <SelectItem value="Sala 1">Sala 1</SelectItem>
                      <SelectItem value="Sala do TI">Sala do TI</SelectItem>
                      <SelectItem value="12°">12°</SelectItem>
                      <SelectItem value="21° Expedição">
                        21° Expedição
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between items-center text-[1.4rem] relative">
                  <Label
                    htmlFor="bond_ref"
                    className="text-2xl font-medium text-gray-700 dark:text-gray-300"
                  >
                    Vinculo
                  </Label>

                  <Select defaultValue={agent.custom?.bond}>
                    <SelectTrigger
                      id="bond_ref"
                      className="w-[252px] dark:bg-slate-800 px-3 py-2 text-xl ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue
                        data-select-type="edit-field"
                        id="bond"
                        placeholder="Pertence ao"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Pertence ao</SelectLabel> */}
                        <SelectItem value="Proprietario">
                          Proprietario
                        </SelectItem>
                        <SelectItem value="Operador">Operador</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <button onClick={handleEdit}>Salvar</button>
              </div>
            )}
            {activeTab === "Software" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px]">
                <div className="text-center col-span-full text-5xl font-bold mb-5">
                  Softwares
                </div>
                {/* {renderKeyValuePairs(agent.inventory.inventoryHardware.software)} */}
                <TableSoftwares data={agent.inventory.software.software} />
              </div>
            )}
            {activeTab === "Geolocalização" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px] ">
                <div className="text-center col-span-full text-5xl font-bold mb-5">
                  Geolocalização
                </div>
                <div className="col-span-full text-3xl font-bold">
                  <H1Custom className="text-left">
                    {agent.inventory.inventoryHardware.system.hostname},{" "}
                    {agent.inventory.inventoryHardware.system.last_update}
                  </H1Custom>
                </div>
                <div className="col-span-full h-full w-full">
                  <iframe
                    className="w-full min-h-fit min-w-fit"
                    height={"600px"}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=-23.6039,-46.9192&hl=es;z=14&output=embed"
                  ></iframe>
                </div>
              </div>
            )}
            {activeTab === "Histórico de Ocorrências" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px]">
                <div className="text-center col-span-full text-5xl font-bold mb-5">
                  Histórico de Ocorrências
                </div>
              </div>
            )}
            {activeTab === "Processos" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px]">
                <div className="text-center col-span-full text-5xl font-bold mb-5">
                  <div className="mb-5">Processos</div>
                  <TableProcesses data={agent.inventory.processes.apps} />
                </div>
              </div>
            )}
            {activeTab === "Monitoramento" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px]">
                <div className="text-center col-span-full text-5xl font-bold mb-5">
                  Monitoramento
                </div>
                <Charts />
              </div>
            )}
            {activeTab === "Detalhes" && (
              <div className="grid grid-cols-[repeat(2,1fr)] gap-[15px_40px] items-center mb-0 p-[15px]">
                <div className="text-center col-span-full font-bold mb-5">
                  <div className="text-5xl">Detalhes da Coleta</div>
                  <div>
                    <AgentInfo
                      inventoryHardware={agent.inventory.inventoryHardware}
                      peripherals={agent.inventory.peripherals}
                    />
                  </div>
                </div>
                {/* {renderKeyValuePairs({
                  ...agent.inventory,
                  ...agent.inventory.periphericals,
                })} */}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
