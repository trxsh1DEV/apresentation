import React, { Suspense, useMemo, useRef, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { IconButton, Menu, Tooltip } from "@mui/material";
import { useSetAtom } from "jotai";
import { csvConfig, formatDateString } from "../../utils/utils";
import { TypePeripheral } from "../../utils/types/types";
import { Link, useNavigate } from "react-router-dom";
import { generateCsv, download } from "export-to-csv";
import { requestWithToken } from "../../utils/request";
import BlackScreen from "./Shell";
import { openModalAtom } from "../../Context/ModalContext";
import {
  FileText,
  // Eraser,
  // Forward,
  Package,
  Eye,
  // ShieldCheck,
  FileCode2,
  Code2,
  ScreenShare,
  Download,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/data/error/ErrorFallback";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { sendCommand } from "@/utils/utils-react";
// import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
// import ShowRemoteUrl from "../ShowRemoteUrl";

type InventoryTypeEspecified = {
  hostname: string;
  so: string;
  typeMachine: string;
  userLogged: string;
  memoryTotal: number;
  diskTotal: number;
  createdAt: string;
  updatedAt: string;
  peripherals: TypePeripheral;
  online: boolean;
  uid: string;
};

const DataTableAgents: React.FC = () => {
  // const [clients, setClients] = useState<InventoryTypeEspecified[] | null>([]);
  const { data: clients } = useSuspenseQuery<InventoryTypeEspecified[] | null>({
    queryKey: ["agent-table-data"],
    queryFn: async () => {
      try {
        const response = await requestWithToken.get("/clients");
        return response.data;
      } catch (error: any) {
        throw new UnexpectedError(
          "Falha ao buscar os dados: " +
            (error.response?.data?.message || error.message)
        ); // Ou retorne um valor padrão que você gostaria de usar em caso de erro
      }
    },
    retry: 1,
  });

  const handleExportData = () => {
    if (!clients || clients.length <= 0) return;
    // console.log(clients.map((item) => item.));

    // Mapeie os clientes para o formato adequado antes de gerar o CSV
    const clientsData = clients.map(
      ({
        createdAt,
        diskTotal,
        hostname,
        memoryTotal,
        online,
        so,
        typeMachine,
        uid,
        userLogged,
      }) => ({
        // patrimony: client.custom.patrimony,
        uid,
        hostname,
        userLogged,
        so,
        online,
        Tipo: typeMachine,
        "Data de inclusão": formatDateString(createdAt),
        RAM: memoryTotal,
        "Armazenamento (GB)": diskTotal,
      })
    );

    const csv = generateCsv(csvConfig)(clientsData);
    download(csvConfig)(csv);
  };

  const columns = useMemo<MRT_ColumnDef<InventoryTypeEspecified>[]>(
    () => [
      {
        accessorKey: "hostname",
        header: "Hostname",
      },
      {
        accessorKey: "so",
        header: "SO",
      },
      // {
      //   accessorKey: "uid",
      //   header: "UID",
      // },
      {
        accessorKey: "typeMachine",
        header: "Categoria",
      },
      {
        accessorKey: "userLogged",
        header: "Usuário",
        grow: false, //don't allow this column to grow to fill in remaining space - new in v2.8
        size: 50, //small column
      },
      {
        accessorFn: (row) => row.diskTotal,
        header: "Armazenamento",
        Cell: ({ cell }: any) => cell.getValue().toFixed(2) + " GB",
      },
      // {
      //   accessorKey: "inventory.custom.patrimony",
      //   header: "Patrimônio",
      //   Cell: ({ cell }: any) =>
      //     cell.getValue() === undefined || !cell.getValue()
      //       ? "N/A"
      //       : cell.getValue(),
      // },
      {
        accessorKey: "createdAt",
        header: "Data de inclusão",
        Cell: ({ cell }: any) => formatDateString(cell.getValue()),
      },
      {
        accessorKey: "memoryTotal",
        header: "RAM",
        Cell: ({ cell }: any) => cell.getValue().toFixed(2) + " GB",
      },
    ],
    []
  );

  // const handleCommandsPresets = (clientId: string) => {
  //   navigate(`/remote-commands/${clientId}`);
  // };
  
  // const handleAccessRemote = async (clientId: string) => {
  //   try {
  //     const result = await axios.post(
  //       "http://localhost:3333/sockets/remote-connection", 
  //       { clientId },
  //       {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //       },
  //     );
  //     console.log(result.data);
      
  //     // Aqui você pode redirecionar para a interface do Guacamole
  //     // ou abrir em uma nova janela usando o token recebido
  //   } catch (err: any) {
  //     console.error('Error accessing remote connection:', err);
  //   }
  // };

  const table = useMaterialReactTable({
    columns,
    data: clients || [],
    enableDensityToggle: false,
    enableColumnActions: false,
    columnFilterDisplayMode: "popover",
    renderEmptyRowsFallback: () => (
      <div className="w-full text-center text-2xl font-semibold my-10 overflow-hidden">
        Nenhum agente foi encontrado, baixe seu primeiro agente abaixo<br /><a className="text-green-500 dark:text-purple-500 hover:underline" href="/download">Download</a>
      </div>
    ),
    renderTopToolbarCustomActions: () => (
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
            <Button variant="outline" size="icon" onClick={handleExportData}>
              <Download />
            </Button>
      </div>
    ),
    paginationDisplayMode: "pages",
    initialState: {
      pagination: { pageSize: 25, pageIndex: 0 },
      sorting: [{id: 'createdAt', desc: true}],
      showColumnFilters: true,
    },
    localization: MRT_Localization_PT_BR,
    muiPaginationProps: {
      shape: "rounded",
      rowsPerPageOptions: [10, 25, 50, 100],
      showRowsPerPage: true,
      variant: "outlined",
    },
    enableRowActions: true,
    getRowId: (row) => row.uid,
    // displayColumnDefOptions: {
    //   "mrt-row-actions": {
    //     header: "Ações", //change header text
    //     // size: 300, //make actions column wider
    //   },
    // },
    renderRowActions: ({ row }) => (
      <CombinedRowActions row={row} />
    ),
  });

  return (
    <>
      <main>
        {/* <h1>Connected Clients</h1> */}
        <MaterialReactTable table={table} />
      </main>
    </>
  );
};

const deleteClient = async (clientId: string): Promise<void> => {
  try{
    const response = await requestWithToken.delete(`/clients/${clientId}`);
    if (response?.status !== 200) {
      throw new Error('Failed to delete client');
    }
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message);
  }
};

const CombinedRowActions = ({ row }: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const fileInputRef = useRef<any>();
  const openModal = useSetAtom(openModalAtom);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const open = Boolean(anchorEl);

  const handleTerminal = (clientId: string) => {
    openModal({
      content: <BlackScreen clientId={clientId} />,
      independenceMode: true,
    });
  };

  const loginAndLaunchRemoteControl = async (_email: string, _password: string, deviceID: string) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const controlResponse = await axios.get(`https://remote.infonova.com.br/api/RemoteControl/${deviceID}`, {
        withCredentials: true,
        headers: {
          "X-Api-Key": apiKey
        }
      });

      if (controlResponse.status !== 200) {
        throw new Error('Failed to launch remote control');
      }

      const url = controlResponse.data.split("Viewer")[1];
      sessionStorage.setItem("remoteControlUrl", url);
      window.open(`/remote-control`, "_blank");
    } catch (err: any) {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Erro ao realizar conexão com o dispositivo. Erro: "${err.response.data || err.message}"`,
      });
    }
  };

  const { mutate: deleteClientMutation } = useMutation({
    mutationFn: deleteClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["agent-table-data"] });
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: "Cliente deletado com sucesso",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Erro ao deletar cliente. Erro: "${error.message}"`,
      });
    },
  });

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const uploadBatFile = async (clientId: string, file: any) => {
    const formData = new FormData();
    formData.append("clientId", clientId);
    formData.append("file", file);

    try {
      await requestWithToken.post("/sockets/send-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload do arquivo .bat concluído com sucesso!");
    } catch (error: any) {
      console.error("Erro ao fazer upload do arquivo .bat:", error);
      alert(error.response.data.message);
    } finally {
      fileInputRef.current.value = "";
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleClick}
        className="p-2 hover:text-white hover:bg-gray-600 rounded-full transition-colors"
      >
        <MoreHorizontal className="w-5 h-5 transition-color dark:text-gray-200 " />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="mt-2"
      >
        <div className="py-1 min-w-32 rounded-md shadow-lg">
          <button
            onClick={() => {
              fileInputRef.current.click();
              handleClose();
            }}
            disabled={true}
            className="w-full px-4 py-2 flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <input
              type="file"
              accept=".bat"
              ref={fileInputRef}
              onChange={(e: any) =>
                uploadBatFile(row.id, e?.target?.files[0])
              }
              style={{ display: "none" }}
            />
            <FileCode2 size={24} className="text-teal-400" />
            <span className="text-base">Upload</span>
          </button>

          <button
            onClick={() => {
              navigate(`/remote-commands/${row.id}`);
              handleClose();
            }}
            disabled={!row.original.online}
            className="w-full px-4 py-2 flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <FileText size={24} className="text-indigo-500" />
            <span className="text-base">Scripts</span>
          </button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Trash2 size={24} className="text-red-500" />
                <span className="text-base">Deletar</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que deseja remover este cliente?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso irá deletar permanentemente este cliente!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteClientMutation(row.id)}>
                  Excluir Cliente
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Menu>

      <Tooltip title={row.original.online ? "Atualizar Inventário" : "Agent Offline"}>
        <span>
          <IconButton
            color="secondary"
            onClick={() => sendCommand(row.id, "get_inventory")}
            disabled={!row.original.online}
          >
            <Package size={32} />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title={row.original.online ? "Terminal Remoto" : "Agent Offline"}>
        <span>
          <IconButton
            color="info"
            onClick={() => handleTerminal(row.id)}
            disabled={!row.original.online}
          >
            <Code2 size={32} />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title={row.original.online ? "Acesso remoto" : "Agent Offline"}>
        <span>
          <IconButton
            color="success"
            onClick={() => loginAndLaunchRemoteControl("", "", row.id)}
            disabled={!row.original.online}
          >
            <ScreenShare size={32} />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title="Mais detalhes">
        <Link to={`/agent/${row.id}`}>
          <IconButton color="default">
            <Eye size={32} />
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
};

export default function TableAgents() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback || "Ocorreu um erro no servidor"}
      onReset={() => location.reload()}
    >
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <LoadingSpinner className="w-12 h-12" />
          </div>
        }
      >
        <DataTableAgents />
      </Suspense>
    </ErrorBoundary>
  );
}
