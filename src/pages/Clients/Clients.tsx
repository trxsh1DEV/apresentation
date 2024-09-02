import React, {
  useCallback,
  useEffect,
  useMemo,
  // useRef,
  useState,
} from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useSetAtom } from "jotai";
import { formatDateString } from "../../utils/utils";
import { TypePeripheral } from "../../utils/types/types";
import { Link } from "react-router-dom";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { requestWithToken } from "../../utils/request";
import BlackScreen from "./Shell";
import { openModalAtom } from "../../Context/ModalContext";
import { Code, Eraser, Eye, Package, ShieldCheck } from "lucide-react";

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

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const Clients: React.FC = () => {
  const [clients, setClients] = useState<InventoryTypeEspecified[] | null>([]);
  // const fileInputRef = useRef<any>();

  const openModal = useSetAtom(openModalAtom);

  const handleExportData = () => {
    if (!clients || clients.length <= 0) return;
    console.log(clients);

    // Mapeie os clientes para o formato adequado antes de gerar o CSV
    const clientsData = clients.map((client: any) => ({
      ...client.inventory.system,
      // patrimony: client.custom.patrimony,
      categoria: client.inventory.system.type_machine,
      "Data de inclusão": formatDateString(client.createdAt),
      RAM: client.inventory.memory.total + " GB",
      Armazenamento: client.inventory.storage.total + " GB",
    }));

    const csv = generateCsv(csvConfig)(clientsData);
    download(csvConfig)(csv);
  };
  if (clients) {
    // console.log(clients[0].inventory);
  }

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
        Cell: ({ cell }: any) => cell.getValue() + " GB",
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
        Cell: ({ cell }: any) => cell.getValue() + " GB",
      },
    ],
    []
  );

  const fetchClients = useCallback(async () => {
    {
      try {
        const response = await requestWithToken.get("/clients");
        // console.log(response.data);
        if (!response.data || response.data.length <= 0)
          return setClients(null);
        setClients(response.data);
      } catch (error: any) {
        console.error(
          "Error fetching clients:",
          error?.response?.data?.errors?.[0] || error.message
        );
      }
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, []);

  const sendCommand = async (clientId: string, command: string) => {
    console.log("oi", clientId);
    try {
      const result = await requestWithToken.post("/sockets/send-command", {
        clientId,
        command,
      });
      console.log(result.data);
    } catch (error: any) {
      console.error(
        `Error sending ${command} command:`,
        error?.response?.data.errors[0]
      );
    }
  };

  // const uploadBatFile = async (clientId: string, file: any) => {
  //   const formData = new FormData();
  //   formData.append("clientId", clientId);
  //   formData.append("file", file);

  //   try {
  //     await requestWithToken.post("/sockets/send-file", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data", // Define o cabeçalho correto para a requisição multipart/form-data
  //       },
  //     });
  //     alert("Upload do arquivo .bat concluído com sucesso!");
  //   } catch (error: any) {
  //     console.error("Erro ao fazer upload do arquivo .bat:", error);
  //     alert(error.response.data.message);
  //   } finally {
  //     // Limpa o valor do elemento input
  //     fileInputRef.current.value = "";
  //   }
  // };

  const handleTerminal = (clientId: string) => {
    console.log(clientId);
    openModal({
      // title: "Dynamic Modal",
      content: <BlackScreen clientId={clientId} />,
      // onConfirm: () => console.log("Confirmed!"),
      // onCancel: () => console.log("Cancelled!"),
    });
  };
  // if (clients) {
  //   console.log(clients[0].inventory.inventoryGeneral.storage[0].total);
  // }

  const table = useMaterialReactTable({
    columns,
    data: clients || [],
    enableDensityToggle: false,
    enableColumnActions: false,
    columnFilterDisplayMode: "popover",
    renderTopToolbarCustomActions: () => (
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={handleExportData}>Exportar Dados</button>
      </div>
    ),
    paginationDisplayMode: "pages",
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showColumnFilters: true,
    },
    muiPaginationProps: {
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    enableRowActions: true,
    getRowId: (row) => row.uid,

    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex" }}>
        <Tooltip
          title={row.original.online ? "Obter Inventário" : "Agent Offline"}
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
              <Code size={32} />
            </IconButton>
          </span>
        </Tooltip>
        {/* <Tooltip
          title={
            row.original.online
              ? "Enviar Script (.bat | .ps1)"
              : "Agent Offline"
          }
        >
          <span>
            <IconButton
              color="primary"
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
              <Upload size={32} />
            </IconButton>
          </span>
        </Tooltip> */}
        <Tooltip
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
      <h1>Connected Clients</h1>
      {!clients && <div>Nenhum dado disponível</div>}
      {clients && clients.length > 0 && <MaterialReactTable table={table} />}
    </>
  );
};

export const TableInventoryDevices = () => {
  return <Clients />;
};

export default TableInventoryDevices;
