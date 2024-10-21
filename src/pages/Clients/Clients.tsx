import React, { Suspense, useMemo, useRef } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
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
} from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/data/error/ErrorFallback";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { sendCommand } from "@/utils/utils-react";

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
  const fileInputRef = useRef<any>();
  const navigate = useNavigate();
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

  const openModal = useSetAtom(openModalAtom);

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

  const uploadBatFile = async (clientId: string, file: any) => {
    const formData = new FormData();
    formData.append("clientId", clientId);
    formData.append("file", file);

    try {
      await requestWithToken.post("/sockets/send-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Define o cabeçalho correto para a requisição multipart/form-data
        },
      });
      alert("Upload do arquivo .bat concluído com sucesso!");
    } catch (error: any) {
      console.error("Erro ao fazer upload do arquivo .bat:", error);
      alert(error.response.data.message);
    } finally {
      // Limpa o valor do elemento input
      fileInputRef.current.value = "";
    }
  };

  const handleCommandsPresets = (clientId: string) => {
    // Navega para a nova página, passando o clientId como parâmetro na URL
    navigate(`/remote-commands/${clientId}`);
  };

  const handleTerminal = (clientId: string) => {
    console.log(clientId);
    openModal({
      content: <BlackScreen clientId={clientId} />,
      // title: "Terminal Remoto",
      independenceMode: true,
    });
  };

  const table = useMaterialReactTable({
    columns,
    data: clients || [],
    enableDensityToggle: false,
    enableColumnActions: false,
    columnFilterDisplayMode: "popover",
    renderEmptyRowsFallback: () => (
      <div className="w-full text-center text-3xl font-semibold mt-14 overflow-hidden">
        Nenhum agente foi encontrado
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
        <button className="" onClick={handleExportData}>
          Exportar Dados
        </button>
      </div>
    ),
    paginationDisplayMode: "pages",
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showColumnFilters: true,
    },
    muiPaginationProps: {
      shape: "rounded",
      rowsPerPageOptions: [10, 25, 50],
      showRowsPerPage: false,
      variant: "outlined",
    },
    enableRowActions: true,
    getRowId: (row) => row.uid,
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "Ações", //change header text
        // size: 300, //make actions column wider
      },
    },
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex" }}>
        <Tooltip
          title={row.original.online ? "Atualizar Inventário" : "Agent Offline"}
        >
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

        <Tooltip
          title={
            row.original.online ? "Comando Personalizado" : "Agent Offline"
          }
        >
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

        <Tooltip
          title={
            row.original.online
              ? "Enviar Script (.bat | .ps1)"
              : "Agent Offline"
          }
        >
          <span>
            <IconButton
              color="warning"
              onClick={() => fileInputRef.current.click()}
              disabled={!row.original.online}
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
              <FileCode2 size={32} />
            </IconButton>
          </span>
        </Tooltip>
        {/* <Tooltip
          title={row.original.online ? "Formatar Dispositivo" : "Agent Offline"}
        >
          <span>
            <IconButton
              color="error"
              onClick={() => console.log(row.id)}
              disabled={!row.original.online}
            >
              <Eraser size={32} />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip
          title={row.original.online ? "Ativar BitLocker" : "Agent Offline"}
        >
          <span>
            <IconButton
              color="success"
              onClick={() => console.log(row.id)}
              disabled={!row.original.online}
            >
              <ShieldCheck size={32} />
            </IconButton>
          </span>
        </Tooltip> */}

        <Tooltip
          title={
            row.original.online ? "Comandos pré-configurados" : "Agent Offline"
          }
        >
          <span>
            <IconButton
              color="success"
              onClick={() => handleCommandsPresets(row.id)}
              disabled={!row.original.online}
            >
              <FileText size={32} />
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
      </Box>
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
