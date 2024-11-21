import { useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import { Skull } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import requestWithToken from "@/utils/request";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { sendCommand } from "@/utils/utils-react";
import { LoadingSpinner } from "../ui/myIsLoading";
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';

// Dados dos processos
interface ProcessItem {
  name: string;
  pid: number;
  exe: string;
}

const useProcessData = (id: string) => {
  return useQuery<ProcessItem[], UnexpectedError>({
    queryKey: ["processes", id],
    queryFn: async () => {
      try {
        const result = await requestWithToken.get(`/process/${id}`);
        return result.data.processes.apps;
      } catch (error: any) {
        throw new UnexpectedError(
          "Falha ao buscar os dados: " +
            (error.response?.data?.message || error.message)
        );
      }
    },
  });
};

const TableProcesses = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useProcessData(id);
  const { toast } = useToast();

  const killMutation = useMutation({
    mutationFn: async (pid: number) => {
      return await sendCommand(id, `taskkill /PID ${pid} /F`);
    },
    onSuccess: (response) => {
      if (response.includes("SUCCESS") || response.includes("ÊXITO")) {
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Processo encerrado com sucesso`,
        });
        queryClient.invalidateQueries({ queryKey: ["processes", id] });
        // queryClient.refetchQueries({ queryKey: ["processes", id] });
      } else {
        throw new Error(response);
      }
    },
    onError: (err: UnexpectedError) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Houve um problema para encerrar o processo: ${err.message}`,
      });
    },
  });

  const columns = useMemo<MRT_ColumnDef<ProcessItem>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Nome do Processo",
        size: 150,
        Cell: ({ cell }: any) => {
          const value = cell.getValue();
          return value.length > 24 ? value.slice(0, 24) + "..." : value;
        },
      },
      {
        accessorKey: "pid",
        header: "PID",
        size: 100,
      },
      {
        accessorKey: "exe",
        header: "Caminho do Executável",
        size: 300,
        Cell: ({ cell }: any) => {
          const value = cell.getValue();
          return value.length > 50 ? value.slice(0, 50) + "..." : value;
        },
      },
    ],
    []
  );

  const handleCommandAsync = (pid: number) => {
    killMutation.mutate(pid);
  };

  const table = useMaterialReactTable({
    columns,
    data: data || [],
    enableDensityToggle: false,
    enableColumnActions: false,
    getRowId: (row) => row.pid + "",
    muiSkeletonProps: {
      animation: "pulse",
      height: 28,
    },
    muiCircularProgressProps: {
      Component: <LoadingSpinner className="w-32 h-32" />,
    },
    columnFilterDisplayMode: "popover",
    muiPaginationProps: {
      shape: "rounded",
      showRowsPerPage: true,
      rowsPerPageOptions: [10, 25, 50, 100],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
    enableRowActions: true,
    // displayColumnDefOptions: {
    //   "mrt-row-actions": {
    //     header: "Ações",
    //     size: 50,
    //   },
    // },
    positionActionsColumn: "last",
    renderRowActions: ({ row }) => (
      <div className="flex flex-nowrap gap-2">
        <Tooltip title={"Encerrar Processo"}>
          <span>
            <IconButton
              color="error"
              onClick={() => handleCommandAsync(row.original.pid)}
            >
              <Skull size={32} />
            </IconButton>
          </span>
        </Tooltip>
      </div>
    ),
    state: {
      isLoading,
      showAlertBanner: !!error,
      // showProgressBars: isLoading,
    },
    initialState: { pagination: { pageSize: 25, pageIndex: 0 } },
    localization: MRT_Localization_PT_BR,
  });

  if (error) return <div>Erro ao carregar os processos: {error.message}</div>;

  return (
    <main className="w-full">
      <MaterialReactTable table={table} />
    </main>
  );
};

export default TableProcesses;
