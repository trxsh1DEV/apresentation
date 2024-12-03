import { useMemo, useState, FC } from "react";
import {
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef
} from "material-react-table";
import { TypePeripherical } from "../../utils/types/types";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { csvConfig, formatDateString } from "../../utils/utils";
import { download, generateCsv } from "export-to-csv";
import { requestWithToken } from "../../utils/request";
import { Download, MoreHorizontal, Pen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { openModalAtom } from "@/Context/ModalContext";
import { useSetAtom } from "jotai";
import FormPeripherals from "./FormPeripherals";
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
import { useToast } from "@/components/ui/use-toast";
// import { queryClient } from "@/queryClient";
import { deletePeripherical } from "@/hooks/usePeriphericals";
import { IconButton, Menu, MenuItem } from "@mui/material";

type UserApiResponse = {
  data: Array<TypePeripherical>;
  meta: {
    totalRowCount: number;
  };
};

const CombinedRowActions = ({ row }: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openModal = useSetAtom(openModalAtom);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (item: any) => {
    openModal({
      content: <FormPeripherals initialData={item} isEditing />,
      title: "Editar Equipamento",
      size: "medium"
    });
    handleClose();
  };

  const deleteMutation = useMutation({
    mutationFn: deletePeripherical,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-stock-data"] });
      toast({
        title: "Sucesso",
        description: "Periférico removido com sucesso",
        variant: "success"
      });
    }
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
    handleClose();
  };

  return (
    <div className="relative flex items-center">
      <IconButton
        onClick={handleClick}
        className="p-2 hover:text-white hover:bg-gray-600 rounded-full transition-colors"
      >
        <MoreHorizontal className="w-5 h-5 transition-color dark:text-gray-200 " />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} className="mt-2">
        <div className="py-1 min-w-32 rounded-md shadow-lg">
          <MenuItem
            onClick={() => handleEdit(row.original)}
            className="w-full px-4 py-2 flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Pen size={24} className="text-teal-400" />
            <span className="text-base">Editar</span>
          </MenuItem>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <MenuItem className="w-full px-4 py-2 flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Trash size={24} className="text-red-500" />
                <span className="text-base">Deletar</span>
              </MenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-slate-700 dark:text-white text-center">
                  Tem certeza que deseja remover este periférico?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso irá deletar permanentemente este periférico.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete(row.original?._id || row.id)}>Excluir</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Menu>
    </div>
  );
};

const Peripherical: FC = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<MRT_SortingState>([{ id: "createdAt", desc: true }]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 25
  });
  const openModal = useSetAtom(openModalAtom);
  // const { toast } = useToast();
  const {
    data: { data = [], meta } = {},
    isError,
    isRefetching,
    isLoading
  } = useQuery<UserApiResponse>({
    queryKey: ["table-stock-data"],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("start", `${pagination.pageIndex * pagination.pageSize}`);
      params.append("size", `${pagination.pageSize}`);
      params.append("filters", JSON.stringify(columnFilters ?? []));
      params.append("sorting", JSON.stringify(sorting ?? []));

      try {
        const response = await requestWithToken.get("/equipament", {
          params
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    placeholderData: keepPreviousData
  });

  const handleExportData = () => {
    if (!data || data.length <= 0) return;

    const transformedData = data.map(({ createdAt, _id, updatedAt, __v, ...rest }) => ({
      ...rest,
      category: rest.category.join(", ")
    }));

    const csv = generateCsv(csvConfig)(transformedData);
    download(csvConfig)(csv);
  };

  // const handleEdit = (item: TypePeripherical) => {
  //   console.log(item);
  //   openModal({
  //     content: <FormPeripherals initialData={item} isEditing />,
  //     title: "Editar Equipamento",
  //     size: "medium"
  //   });
  // };

  // const handleDelete = (id: string) => {
  //   deleteMutation.mutate(id);
  // };

  // Adicione a mutação para deletar periféricos
  // const deleteMutation = useMutation({
  //   mutationFn: deletePeripherical,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["table-stock-data"] });
  //     toast({
  //       title: "Sucesso",
  //       description: "Periférico removido com sucesso",
  //       variant: "success"
  //     });
  //   }
  // });

  const columns = useMemo<MRT_ColumnDef<TypePeripherical>[]>(
    () => [
      {
        accessorKey: "status",
        header: "Situação",
        enableSorting: false
      },
      { accessorKey: "host", header: "Host" },
      {
        accessorKey: "class",
        header: "Classe",
        enableColumnFilter: false,
        enableSorting: false
      },
      {
        accessorKey: "sample",
        header: "Modelo/Versão",
        enableColumnFilter: false,
        enableSorting: false
      },
      { accessorKey: "manufacturer", header: "Fabricante" },
      { accessorKey: "department", header: "Departamento" },
      { accessorKey: "local", header: "Local" },
      {
        accessorKey: "person",
        header: "Pessoa",
        enableSorting: false
      },
      {
        accessorKey: "category",
        header: "Categoria",
        Cell: ({ cell }: any) => {
          const value = cell.getValue()?.join(", ");
          return (
            <div className="truncate" title={value}>
              {value}
            </div>
          );
        }
      },
      {
        accessorKey: "in_stock",
        header: "Em estoque",
        Cell: ({ cell }: any) => (cell.getValue() ? "Sim" : "Não"),
        enableColumnFilter: false
      },
      {
        accessorKey: "createdAt",
        header: "Data",
        Cell: ({ cell }: any) => formatDateString(cell.getValue()),
        enableColumnFilter: false
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
        }
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: (row) => row._id || "",
    enableRowActions: true,
    renderRowActions: ({ row }) => <CombinedRowActions row={row} />,
    rowCount: meta?.totalRowCount ?? 0,
    initialState: { showColumnFilters: true },
    localization: MRT_Localization_PT_BR,
    state: {
      columnFilters,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showSkeletons: isRefetching,
      sorting
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
      showRowsPerPage: true
    },
    muiToolbarAlertBannerProps: isError ? { color: "error", children: "Error loading data" } : undefined,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    defaultColumn: { maxSize: 150 },
    renderTopToolbarCustomActions: () => (
      <Button variant="outline" size="icon" onClick={handleExportData}>
        <Download />
      </Button>
    )
  });

  const handleOpenModal = () => {
    openModal({
      content: <FormPeripherals />,
      title: "Adicionar Equipamento",
      size: "medium"
    });
  };

  return (
    <main>
      <MaterialReactTable table={table} />
      {/* <TablePeriphericals /> */}
      <div className="flex justify-center mb-4">
        <Button
          onClick={handleOpenModal}
          className="mt-14 text-2xl text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
        >
          Adicionar
        </Button>
      </div>
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
