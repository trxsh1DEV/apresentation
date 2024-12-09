import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox"; // Assumindo que você tem um componente de checkbox
import requestWithToken from "@/utils/request";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { Distribution } from "./Distribution";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Client = {
  uid: string;
  hostname: string;
  userLogged: string;
};


interface DistributionDevicesProps {
    distributionData: Distribution;
  }

  export default function DistributionDevices({ distributionData }: DistributionDevicesProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const {toast} = useToast();
  const [parameters, setParameters] = useState<string>("");
  const { data, isLoading, isError, error } = useQuery<Client[]>({
    queryKey: ["devices"],
    queryFn: async () => {
      try {
        const response = await requestWithToken.get("/clients");
        return response.data;
      } catch (error: any) {
        throw new UnexpectedError("Falha ao buscar os dados: " + (error.response?.data?.message || error.message));
      }
    },
    retry: 1
  });

  const handleSendToSelected = async () => {
    try {
      await requestWithToken.post('/sockets/send-file-all', {
        clientIds: selectedIds,
        fileId: distributionData.file,
        parameters: parameters // Now using the parameters state
      });
      
      toast({
        title: "Success",
        description: "File sent to selected devices",
        variant: "success"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send file to devices",
        variant: "destructive"
      });
    }
  };

  const handleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      // Select all items
      setSelectedIds(data?.map(client => client.uid) || []);
    } else {
      // Deselect all items
      setSelectedIds([]);
    }
  };

  if (isLoading) return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <LoadingSpinner className="w-24 h-24" />
  </div>
  );
//   console.log(isError)
  if (isError) return <div className="text-3xl flex items-center justify-center h-screen">{error.message}</div>;
  if (!data) return <div className="text-3xl flex items-center justify-center h-screen">Nenhum dispositivo disponível</div>;

  return (
    <section className="flex flex-col w-full">
      <div className="w-full overflow-x-auto">
      <div className="m-4">
  <Label htmlFor="parameters">Parâmetros (Opcional)</Label>
  <Input
    id="parameters"
    value={parameters}
    onChange={(e) => setParameters(e.target.value)}
    placeholder="Digite os parâmetros aqui..."
    className="mt-1"
  />
</div>
        <Table>
          <TableHeader>
            <TableRow>
                <TableHead className="text-xl">
                    <Checkbox
                        checked={data?.length === selectedIds.length && data?.length > 0}
                        onCheckedChange={handleSelectAll}
                    />
                </TableHead>
              <TableHead className="text-xl">Hostname</TableHead>
              <TableHead className="text-xl">Usuário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((client: Client) => (
              <TableRow key={client.uid}>
                <TableCell className="text-lg">
                  <Checkbox
                    checked={selectedIds.includes(client.uid)}
                    onCheckedChange={() => handleSelect(client.uid)}
                  />
                </TableCell>
                <TableCell className="text-lg">{client.hostname}</TableCell>
                <TableCell className="text-lg">{client.userLogged}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <div className="mt-4">
        <span className="text-lg">Quantidade: {selectedIds.length}</span>
      </div> */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg">Selecionados: {selectedIds.length}</span>
        <Button 
          onClick={handleSendToSelected}
          disabled={selectedIds.length === 0}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Enviar para os dispositivos selecionados
        </Button>
      </div>
    </section>
  );
}