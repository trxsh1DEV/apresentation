import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { tableTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";

// Dados dos processos
interface ProcessItem {
  name: string;
  pid: number;
  exe: string;
}

const Processes = ({ data }: { data: ProcessItem[] }) => {
  // Definindo as colunas da tabela
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

  const table = useMaterialReactTable({
    columns,
    data,
    enableDensityToggle: false,
    enableColumnActions: false,
    columnFilterDisplayMode: "popover",
    muiPaginationProps: {
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });

  return <MaterialReactTable table={table} />;
};

export const TableProcesses = ({ data }: { data: ProcessItem[] }) => {
  return (
    <ThemeProvider theme={tableTheme()}>
      <main className="w-full">
        <Processes data={data} />
      </main>
    </ThemeProvider>
  );
};

export default TableProcesses;
