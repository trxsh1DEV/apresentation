import React, { FC, useEffect, useState } from "react";
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
  const [customInputValue, setCustomInputValue] = useState<string>("");
  const [selectedField, setSelectedField] = useState<string>("");
  const [prohibitedSoftware, setProhibitedSoftware] = useState<string>("");
  const { toast } = useToast();

  const handleCustomInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomInputValue(event.target.value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedField(value);
  };

  const handleProhibitedSoftwareSelect = (name: string) => {
    setProhibitedSoftware(name);
  };

  const handleAddCustom = async () => {
    if (!customInputValue || !selectedField) return;

    try {
      await requestWithToken.post("/company/custom", {
        customType: selectedField,
        value: [customInputValue],
      });
      setCustomInputValue("");
      setSelectedField("");
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: `Item '${customInputValue}' adicionado com sucesso`,
      });
    } catch (error: any) {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Ocorreu um problema para adicionar esse item. Erro ${error.message}`,
      });
    }
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
        <Card className="flex flex-col text-center">
          <CardHeader>
            <CardTitle>Customização Geral</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <Select onValueChange={handleSelectChange}>
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
              value={customInputValue}
              onChange={handleCustomInputChange}
              placeholder="Digite o valor que quer adicionar"
              className="mb-4"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddCustom} className="w-full text-lg">
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
              className="w-full text-lg"
            >
              Adicionar Software
            </Button>
          </CardFooter>
        </Card>

        {/* Card para Futuras Customizações */}
        <Card className="flex flex-col text-center">
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
        </Card>
      </div>
    </div>
  );
};

export default AddItemPage;
