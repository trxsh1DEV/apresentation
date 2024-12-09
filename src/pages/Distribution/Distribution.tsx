import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import requestWithToken from "@/utils/request";
import { ArrowLeft, ArrowRight, ArrowUpDown, ChevronDown, ChevronUp, Trash2, PlusCircle, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/Context/ModalContext";
import DistributionForm from "./DistributionForm";
import { fetchDistributions, deleteDistribution } from "../../hooks/useDistribution";
import { toast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DistributionDevices from "./DistributionDevices";

type SortField = 'name' | 'creator' | 'type' | 'createdAt';
type SortOrder = 'asc' | 'desc';

export type Distribution = {
  _id: string;
  name: string;
  description: string;
  type: DistributionType;
  company: string;
  creator: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  fileNickname?: string;
  useExistingFile?: boolean;
};

enum DistributionType {
    EXECUTABLE = 'executable',
    SOFTWARE = 'software',
    COMMAND = 'command',
    SCRIPT = 'script'
  }

const getDistributionTypeLabel = (type: DistributionType): string => {
    switch (type) {
      case DistributionType.EXECUTABLE:
        return "Executável";
      case DistributionType.SOFTWARE:
        return "Software";
      case DistributionType.COMMAND:
        return "Comando";
      case DistributionType.SCRIPT:
        return "Script";
      default:
        return "Desconhecido";
    }
  };

export default function DistributionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<Distribution[]>([]);
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const { data, isLoading, isError } = useQuery<Distribution[]>({
    queryKey: ["distributions"],
    queryFn: fetchDistributions
  });

  const queryClient = useQueryClient();
  const openModal = useSetAtom(openModalAtom);

  const deleteMutation = useMutation({
    mutationFn: deleteDistribution,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["distributions"] });
      toast({
        title: "Sucesso",
        description: "Distribuição removida com sucesso",
        variant: "success"
      });
    }
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleOpenModal = () => {
    openModal({
      content: <DistributionForm />,
      title: "Adicionar Distribuição",
      size: "medium"
    });
  };

  const handleSendFile = (distribution: Distribution) => {
    openModal({
      content: <DistributionDevices distributionData={distribution} />,
      title: "Selecione os dispositivos",
      size: "large"
    });
  };

// Ajuste no arquivo Distribution.tsx

// Ajuste no arquivo Distribution.tsx

// const handleEdit = (distribution: Distribution) => {
//   openModal({
//     content: <DistributionForm 
//       initialData={{
//         ...distribution,
//         useExistingFile: distribution.useExistingFile ?? false, // Garantir que useExistingFile seja booleano
//         file: undefined, // Remover a propriedade file para evitar conflito de tipos
//         selectedFileId: distribution.useExistingFile ? distribution.file : undefined // Mapear file para selectedFileId se useExistingFile for true
//       }} 
//       isEditing 
//     />,
//     title: "Editar Distribuição",
//     size: "medium"
//   });
// };

  // const filterData = (items: Distribution[]) => {
  //   if (!searchTerm) return items;

  //   try {
  //     const regex = new RegExp(searchTerm, 'i');
  //     return items.filter(item => regex.test(item.name));
  //   } catch (e) {
  //     const term = searchTerm.toLowerCase();
  //     return items.filter(item => item.name.toLowerCase().includes(term));
  //   }
  // };
    const filterData = (items: Distribution[]) => {
    if (!searchTerm) return items;
    
    try {
      const regex = new RegExp(searchTerm, 'i');
      return items.filter(item => 
        regex.test(item.name) || 
        regex.test(item.description)
      );
    } catch (e) {
      // If invalid regex, fall back to simple includes
      const term = searchTerm.toLowerCase();
      return items.filter(item => 
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      );
    }
  };

  const sortData = (items: Distribution[]) => {
    return [...items].sort((a, b) => {
      const aValue = a[sortField].toLowerCase();
      const bValue = b[sortField].toLowerCase();

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      }
      return bValue.localeCompare(aValue);
    });
  };

  useEffect(() => {
    if (data) {
      const filteredData = filterData(data);
      const sortedData = sortData(filteredData);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPaginatedData(sortedData.slice(startIndex, endIndex));
    }
  }, [currentPage, data, sortField, sortOrder, searchTerm, itemsPerPage]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const filteredTotal = data ? filterData(data).length : 0;
  const totalPages = Math.ceil(filteredTotal / itemsPerPage);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (field !== sortField) return <ArrowUpDown className="inline ml-2" />;
    return sortOrder === 'asc' ?
      <ChevronUp className="inline ml-2" /> :
      <ChevronDown className="inline ml-2" />;
  };

  const handlePageSizeChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <section className="flex flex-col p-6 w-full">
            <div className="flex items-center gap-2 mb-4">
        <label htmlFor="input-search"><Search className="w-5 h-5 text-gray-500"/></label>
        <Input
          type="text"
          id="input-search"
          placeholder="Buscar distribuição..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
        {searchTerm && (
          <span className="text-sm text-gray-500">
            Encontrados: {filteredTotal} items
          </span>
        )}
      </div>
      <Button onClick={handleOpenModal} className="self-end mb-4 text-xl text-white bg-green-500 hover:bg-green-600">
        <PlusCircle className="mr-2 h-6 w-6" /> Adicionar
      </Button>

      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="text-xl cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Nome da Distribuição <SortIcon field="name" />
              </TableHead>
              <TableHead
                className="text-xl cursor-pointer"
                onClick={() => handleSort('creator')}
              >
                Criador <SortIcon field="creator" />
              </TableHead>
              <TableHead
                className="text-xl cursor-pointer"
                onClick={() => handleSort('type')}
              >
                Tipo <SortIcon field="type" />
              </TableHead>
              <TableHead
                className="text-xl cursor-pointer"
                onClick={() => handleSort('createdAt')}
              >
                Data de Criação <SortIcon field="createdAt" />
              </TableHead>
              <TableHead className="text-right text-xl">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((distribution: Distribution) => (
              <TableRow key={distribution._id}>
                <TableCell className="text-lg">{distribution.name}</TableCell>
                <TableCell className="text-lg">{distribution.creator}</TableCell>
                <TableCell className="text-lg">{getDistributionTypeLabel(distribution.type as DistributionType)}</TableCell>
                <TableCell className="text-lg">{new Date(distribution.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(distribution)}
                    className="mr-2 text-green-500 hover:text-green-700"
                    title="Editar Distribuição"
                  >
                    <Edit className="h-7 w-7" />
                  </Button> */}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSendFile(distribution)}
                    className="mr-2 text-purple-500 hover:text-purple-600"
                    title="Send File"
                  >
                    <FileUp className="h-7 w-7" />
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        title="Remover Distribuição"
                      >
                        <Trash2 className="h-7 w-7" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-slate-700 dark:text-white text-center">
                          Tem certeza que deseja remover esta distribuição?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta ação não pode ser desfeita. Isso irá deletar permanentemente esta distribuição.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(distribution._id)}>Excluir</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-4">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="text-lg"
          >
            <span><ArrowLeft /></span>
          </Button>

          <span>
            Página {currentPage} de {totalPages} {" "}
            ({filteredTotal} total)
          </span>

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-lg"
          >
            <span><ArrowRight /></span>
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Linhas por página:</span>
                    <Select
                        value={itemsPerPage.toString()}
                        onValueChange={handlePageSizeChange}
                    >
                        <SelectTrigger className="w-[100px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </section>
    );
}
