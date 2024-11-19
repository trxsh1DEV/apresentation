import React, { FC, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import requestWithToken from "@/utils/request";
import { useToast } from "@/components/ui/use-toast";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { useDebounce } from "@uidotdev/usehooks";
import { Label } from "@/components/ui/label";

interface App {
  name: string;
  appId: string;
  version: string;
}

const ProhibitedSoftwareInput: FC<{ onSelect: (name: string) => void }> = ({
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apps, setApps] = useState<App[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchApps = async () => {
        const response = await requestWithToken.get(
          `/software/repository/${debouncedSearchTerm}`
        );
        setApps(response.data);
      };

      fetchApps();
    } else {
      setApps([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="mb-4">
      <Command>
        <CommandInput
          placeholder="Softwares Proibidos..."
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          {apps.length > 0 && (
            <>
              <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
              <CommandGroup
                heading="Resultados da Pesquisa"
                className="bg-background absolute"
              >
                {apps.map((app) => (
                  <CommandItem
                    key={app.name}
                    onSelect={() => {
                      onSelect(app.name);
                      setSearchTerm(app.name);
                    }}
                  >
                    {app.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
};

const AddItemPage: React.FC = () => {
  const customTypeRef = useRef<any>(null); // useRef para type
  const customValueRef = useRef<any>(null); // useRef para value
  const telegramChatIdRef = useRef<HTMLInputElement>(null); // useRef para chatId
  const telegramTokenRef = useRef<HTMLInputElement>(null);
  const [prohibitedSoftware, setProhibitedSoftware] = useState<string>("");
  const { toast } = useToast();

  const handleSelectChange = (value: string) => {
    customTypeRef.current = value; // Atualiza o valor da referência
  };

  // const handleAddCustom = async () => {
  //   console.log("oi");
  //   const customValue = customValueRef.current?.value;
  //   const customType = customTypeRef.current;
  //   console.log(customType);
  //   console.log(customValue);

  //   if (!customType || !customValue) return;

  //   try {
  //     await requestWithToken.post("/company/custom", {
  //       customType: customType,
  //       value: [customValue],
  //     });
  //     // customTypeRef.current = ""; // Limpar ref após o uso
  //     customValueRef.current = ""; // Limpar ref após o uso
  //     toast({
  //       title: "Sucesso",
  //       className: "bg-success border-zinc-100",
  //       variant: "destructive",
  //       description: `Item '${customValue}' adicionado com sucesso`,
  //     });
  //   } catch (error: any) {
  //     console.log(error.message);
  //     toast({
  //       title: "Erro",
  //       variant: "destructive",
  //       description: `Ocorreu um problema para adicionar esse item. Erro ${error.message}`,
  //     });
  //   }
  // };
  const handleAddCustom = async () => {
    const customValue = customValueRef.current?.value;
    const customType = customTypeRef.current;

    if (!customValue || !customType) return; // Checa se ambos têm valores válidos

    try {
      await requestWithToken.post("/company/custom", {
        customType: customType,
        value: [customValue],
      });

      // Ao invés de limpar as referências diretamente, apenas limpamos o input no DOM
      if (customValueRef.current) {
        customValueRef.current.value = ""; // Limpa o campo de input após o envio
      }

      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: `Item '${customValue}' adicionado com sucesso`,
      });
    } catch (error: any) {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Ocorreu um problema para adicionar esse item. Erro ${error.message}`,
      });
    }
  };

  const handleUpdateIntegration = async () => {
    const telegramChatId = telegramChatIdRef.current?.value;
    const telegramToken = telegramTokenRef.current?.value;

    if (!telegramChatId || !telegramToken) {
      toast({
        title: "Erro",
        variant: "destructive",
        description: "Por favor, preencha todos os campos de integração.",
      });
      return;
    }

    try {
      await requestWithToken.patch("/company", {
        telegramToken: telegramToken,
        telegramChatId: telegramChatId,
      });
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: "Integração atualizada com sucesso",
      });
    } catch (error: any) {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Ocorreu um problema ao atualizar a integração. Erro: ${error.message}`,
      });
    }
  };

  const handleProhibitedSoftwareSelect = (name: string) => {
    setProhibitedSoftware(name);
  };

  const handleAddProhibitedSoftware = () => {
    if (!prohibitedSoftware) return;
    // Lógica para adicionar o software proibido
    console.log("Software Proibido adicionado:", prohibitedSoftware);
    setProhibitedSoftware("");
    toast({
      title: "Sucesso",
      className: "bg-success border-zinc-100",
      variant: "destructive",
      description: `Software '${prohibitedSoftware}' adicionado à lista de proibidos`,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Adicionar Customizações
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card para Customização Geral */}
        <Card className="flex flex-col text-center min-w-[400px]">
          <CardHeader>
            <CardTitle>Customização Geral</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <Select
              onValueChange={handleSelectChange}
              // defaultValue=""
            >
              <SelectTrigger className="mb-4">
                <SelectValue placeholder="Selecione uma das opções" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Escolha sua customização</SelectLabel>
                  <SelectItem value="local">Local</SelectItem>
                  <SelectItem value="department">Departamento</SelectItem>
                  <SelectItem value="collaborator">Colaborador</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              ref={customValueRef} // Atribui a referência ao input
              placeholder="Digite o valor que quer adicionar"
              className="mb-4 ring-slate-300 dark:ring-slate-700"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddCustom} className="w-full text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90">
              Adicionar Customização
            </Button>
          </CardFooter>
        </Card>

        {/* Card para Softwares Proibidos */}
        <Card className="flex flex-col text-center">
          <CardHeader>
            <CardTitle>Softwares Proibidos</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ProhibitedSoftwareInput
              onSelect={handleProhibitedSoftwareSelect}
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleAddProhibitedSoftware}
              className="w-full text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
            >
              Adicionar Software
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col ">
          <CardHeader>
            <CardTitle className="text-center">Integrações</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <Label htmlFor="telegramChatId">Telegram Chat ID</Label>
            <Input
              ref={telegramChatIdRef}
              id="telegramChatId"
              placeholder="Ex: -12529385471"
              className="my-2 ring-slate-300 dark:ring-slate-700"
            />
            <Label htmlFor="telegramToken">Telegram Token</Label>
            <Input
              ref={telegramTokenRef}
              id="telegramToken"
              placeholder="Ex: 7505460897:AAHpRFILmlzefeJ_KzA2ywtZgpXx2uvRMLW"
              className="mb-4 mt-2 ring-slate-300 dark:ring-slate-700"
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleUpdateIntegration}
              className="w-full text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
            >
              Atualizar Integração
            </Button>
          </CardFooter>
        </Card>
        {/* Card para Futuras Customizações */}
        {/* <Card className="flex flex-col text-center">
          <CardHeader>
            <CardTitle>Futuras Customizações</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>Espaço reservado para futuras opções de customização.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg" disabled>
              Em breve
            </Button>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  );
};

export default AddItemPage;
