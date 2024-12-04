import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import requestWithToken from "@/utils/request";
import { ArrowLeft, ArrowRight, ArrowUpDown, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SortField = 'name' | 'publisher' | 'category' | 'qtde';
type SortOrder = 'asc' | 'desc';

type TypeSoftware = {
  name: string;
  publisher: string;
  category: string;
  qtde: number;
};

interface ApiResponse {
  data: TypeSoftware[];
  meta: {
    totalRowCount: number;
    totalDocuments: number;
    page: number;
    pageSize: number;
  };
}

const fetchSoftwares = async () => {
  const res = await requestWithToken.get('/software/all');
  return res.data;
};

export default function SoftwareTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<TypeSoftware[]>([]);
  const [sortField, setSortField] = useState<SortField>('qtde');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(50);

  const { data, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ["softwares-all"],
    queryFn: fetchSoftwares
  });

  // const filterData = (items: TypeSoftware[]) => {
  //   if (!searchTerm) return items;
    
  //   try {
  //     const regex = new RegExp(searchTerm, 'i');
  //     return items.filter(item => 
  //       regex.test(item.name) || 
  //       regex.test(item.publisher) || 
  //       regex.test(item.category) || 
  //       regex.test(item.qtde.toString())
  //     );
  //   } catch (e) {
  //     // If invalid regex, fall back to simple includes
  //     const term = searchTerm.toLowerCase();
  //     return items.filter(item => 
  //       item.name.toLowerCase().includes(term) ||
  //       item.publisher.toLowerCase().includes(term) ||
  //       item.category.toLowerCase().includes(term) ||
  //       item.qtde.toString().includes(term)
  //     );
  //   }
  // };

  const filterData = (items: TypeSoftware[]) => {
    if (!searchTerm) return items;
    
    try {
      const regex = new RegExp(searchTerm, 'i');
      return items.filter(item => regex.test(item.name));
    } catch (e) {
      // If invalid regex, fall back to simple includes
      const term = searchTerm.toLowerCase();
      return items.filter(item => item.name.toLowerCase().includes(term));
    }
  };

  const sortData = (items: TypeSoftware[]) => {
    return [...items].sort((a, b) => {
      if (sortField === 'qtde') {
        return sortOrder === 'asc' ? a.qtde - b.qtde : b.qtde - a.qtde;
      }
      
      const aValue = a[sortField].toLowerCase();
      const bValue = b[sortField].toLowerCase();
      
      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      }
      return bValue.localeCompare(aValue);
    });
  };

  useEffect(() => {
    if (data?.data) {
      const filteredData = filterData(data.data);
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
    setCurrentPage(1); // Reset to first page when sorting
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
    setCurrentPage(1); // Reset to first page when searching
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const filteredTotal = data ? filterData(data.data).length : 0;
  const totalPages = Math.ceil(filteredTotal / itemsPerPage);
  
  const SortIcon = ({ field }: { field: SortField }) => {
    if (field !== sortField) return <ArrowUpDown className="inline ml-2" />;
    return sortOrder === 'asc' ? 
      <ChevronUp className="inline ml-2" /> : 
      <ChevronDown className="inline ml-2" />;
  };

  const handlePageSizeChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <section className="flex flex-col p-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="input-search"><Search className="w-5 h-5 text-gray-500"/></label>
        <Input
          type="text"
          id="input-search"
          placeholder="Buscar software (por nome)..."
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

      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="text-xl cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Nome do Software <SortIcon field="name" />
              </TableHead>
              <TableHead 
                className="text-xl cursor-pointer"
                onClick={() => handleSort('publisher')}
              >
                Desenvolvedor <SortIcon field="publisher" />
              </TableHead>
              <TableHead 
                className="text-xl cursor-pointer"
                onClick={() => handleSort('category')}
              >
                Categoria <SortIcon field="category" />
              </TableHead>
              <TableHead 
                className="text-xl cursor-pointer"
                onClick={() => handleSort('qtde')}
              >
                Quantidade <SortIcon field="qtde" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((software: TypeSoftware) => (
              <TableRow key={software.name}>
                <TableCell className="text-lg">{software.name}</TableCell>
                <TableCell className="text-lg">{software.publisher}</TableCell>
                <TableCell className="text-lg">{software.category}</TableCell>
                <TableCell className="text-lg">{software.qtde}</TableCell>
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