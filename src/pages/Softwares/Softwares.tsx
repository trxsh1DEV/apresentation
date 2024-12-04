import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { toast } from "@/components/ui/use-toast";
import requestWithToken from "@/utils/request";

type TypeSoftware = {
    name: string;
    publisher: string;
    category: string;
    qtde: number;
}


const fetchSoftwares = async () => {
  const res = await requestWithToken.get('/software/all');
  return res.data.data; // Acesse a propriedade 'data' do retorno da API
};

export default function SoftwareTable() {
  const { data: softwares } = useQuery({
    queryKey: ["softwares-all"],
    queryFn: fetchSoftwares
  });

  return (
    <section className="flex flex-col p-6 w-full">
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl">Nome do Software</TableHead>
              <TableHead className="text-xl">Publisher</TableHead>
              <TableHead className="text-xl">Categoria</TableHead>
              <TableHead className="text-xl">Quantidade</TableHead>
              {/* <TableHead className="text-right text-xl">Ações</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {softwares?.map((software: TypeSoftware) => (
              <TableRow key={software.name}>
                <TableCell className="text-lg">{software.name}</TableCell>
                <TableCell className="text-lg">{software.publisher}</TableCell>
                <TableCell className="text-lg">{software.category}</TableCell>
                <TableCell className="text-lg">{software.qtde}</TableCell>
                {/* <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(software.uninstall_path, "_blank")}
                    className="mr-2 text-blue-500 hover:text-blue-700"
                    title="Desinstalar"
                  >
                    <FileText className="h-7 w-7" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mr-2 text-green-500 hover:text-green-700"
                    title="Editar"
                  >
                    <Edit className="h-7 w-7" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    title="Remover"
                  >
                    <Trash2 className="h-7 w-7" />
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}