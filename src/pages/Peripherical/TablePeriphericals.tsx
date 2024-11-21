import { useMemo, useState, FC } from "react";
// import { IconButton, Tooltip } from "@mui/material";
import {
  MRT_ActionMenuItem,
  // MRT_ActionMenuItem,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { TypePeripherical } from "../../utils/types/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { csvConfig, formatDateString } from "../../utils/utils";
import { download, generateCsv } from "export-to-csv";
import { requestWithToken } from "../../utils/request";
// import { ArrowsClockwise, Pen, Trash } from "phosphor-react";
import TablePeriphericals from "./Periphericals";
import { Download, Pen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
// import { Pen, RefreshCcw, Trash } from "lucide-react";


type UserApiResponse = {
  data: Array<TypePeripherical>;
  meta: {
    totalRowCount: number;
  };
};

// const transformDataForCsv = (data: TypePeripherical[]) => {
//   return data.map((item) => ({
//     ...item,
//     category: item.category.join(", "), // Transforma o array em string
//   }));
// };

const Peripherical: FC = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = useState<MRT_SortingState>([
    { id: "createdAt", desc: true },
  ]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  });

  const {
    data: { data = [], meta } = {},
    isError,
    isRefetching,
    isLoading,
    // refetch,
  } = useQuery<UserApiResponse>({
    queryKey: [
      "table-stock-data",
      columnFilters,
      pagination.pageIndex,
      pagination.pageSize,
      sorting,
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("start", `${pagination.pageIndex * pagination.pageSize}`);
      params.append("size", `${pagination.pageSize}`);
      params.append("filters", JSON.stringify(columnFilters ?? []));
      params.append("sorting", JSON.stringify(sorting ?? []));

      try {
        const response = await requestWithToken.get("/equipament", {
          params,
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    placeholderData: keepPreviousData,
  });

  const handleExportData = () => {
    if (!data || data.length <= 0) return;

    // Transforma os dados antes de gerar o CSV
    const transformedData = data.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ createdAt, _id, updatedAt, __v, ...rest }) => ({
        ...rest,
        category: rest.category.join(", "), // Transforma o array em string
      })
    );

    const csv = generateCsv(csvConfig)(transformedData); // Gera o CSV com os dados transformados
    download(csvConfig)(csv); // Faz o download do arquivo
  };

  const columns = useMemo<MRT_ColumnDef<TypePeripherical>[]>(
    () => [
      {
        accessorKey: "status",
        header: "Situação",
        enableSorting: false,
      },
      { accessorKey: "host", header: "Host" },
      {
        accessorKey: "class",
        header: "Classe",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        accessorKey: "sample",
        header: "Modelo/Versão",
        enableColumnFilter: false,
        enableSorting: false,
      },
      { accessorKey: "manufacturer", header: "Fabricante" },
      { accessorKey: "department", header: "Departamento" },
      {
        accessorKey: "person",
        header: "Pessoa",
        enableSorting: false,
      },
      {
        accessorKey: "category",
        header: "Categoria",
        Cell: ({ cell }: any) => {
          const value = cell.getValue()?.join(", ");
          // return value?.length > 29 ? value?.slice(0, 29) + "..." : value;
          return (
            <div className="truncate" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: "in_stock",
        header: "Em estoque",
        Cell: ({ cell }: any) => (cell.getValue() ? "Sim" : "Não"),
        enableColumnFilter: false,
      },
      {
        accessorKey: "createdAt",
        header: "Data",
        Cell: ({ cell }: any) => formatDateString(cell.getValue()),
        enableColumnFilter: false,
      },
      {
        accessorKey: "observation",
        header: "Observação",
        enableColumnFilter: false,
        enableSorting: false,
        Cell: ({ cell }: any) => {
          const value = cell.getValue();
          return (
            <div className="truncate" title={value}>
              {value}
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowActions: true,
    renderRowActionMenuItems: ({ table }) => [
      <MRT_ActionMenuItem
        icon={<Pen />}
        key="edit"
        label="Edit"
        onClick={() => console.info("Edit")}
        table={table}
      />,
      <MRT_ActionMenuItem
        icon={<Trash />}
        key="delete"
        label="Delete"
        onClick={() => console.info("Delete")}
        table={table}
      />,
    ],
    rowCount: meta?.totalRowCount ?? 0,
    initialState: { showColumnFilters: true },
    localization: MRT_Localization_PT_BR,
    state: {
      columnFilters,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showSkeletons: isRefetching,
      sorting,
    },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    enableGlobalFilter: false,
    enableDensityToggle: false,
    enableColumnActions: false,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    muiPaginationProps: {
      shape: "rounded",
      SelectProps: { hiddenLabel: false },
      rowsPerPageOptions: [10, 25, 50, 100],
      variant: "outlined",
      showRowsPerPage: true,
    },
    muiToolbarAlertBannerProps: isError
      ? { color: "error", children: "Error loading data" }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    defaultColumn: { maxSize: 150 },
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "Ações",
      },
    },
    renderTopToolbarCustomActions: () => (
      // <TooltipProvider
      // sx={{
      //   display: 'flex',
      //   gap: '16px',
      //   padding: '8px',
      //   flexWrap: 'wrap',
      // }}
      // >
      //         <Tooltip>
      //     <TooltipTrigger asChild className="ml-2">
      //       <Button variant="outline" size="icon" onClick={handleExportData}>
      //         <Download />
      //       </Button>
      //     </TooltipTrigger>
      //     <TooltipContent>
      //       <p>Exportar tudo</p>
      //     </TooltipContent>
      //   </Tooltip>
      // </TooltipProvider>
            <Button variant="outline" size="icon" onClick={handleExportData}>
      <Download />
    </Button>
    ),
  });

  return (
    <main>
      {/* <h1 onClick={() => handleExportData()}>Equipamentos</h1> */}
      {/* <ScrollArea> */}
      <MaterialReactTable table={table} />
      {/* </ScrollArea> */}
      <TablePeriphericals />
    </main>
  );
};

export const TablePeripherals = () => {
  return (
    <main className="w-full">
      <Peripherical />
    </main>
  );
};
export default TablePeripherals;
