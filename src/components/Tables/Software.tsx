import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { formatDateString } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle } from "lucide-react";
import { sendCommand } from "@/utils/utils-react";

//example data type
interface BaseSoftware {
  name: string;
  version?: string;
  publisher: string;
  install_path?: string;
  first_inventory: Date;
  category?: string;
  have_license: boolean;
  uninstall_path?: string;
  createdAt: string;
}

interface LicensedSoftware extends BaseSoftware {
  have_license: true;
  license_key: string; // Obrigatório se have_license for true
}

interface UnlicensedSoftware extends BaseSoftware {
  have_license: false;
  license_key?: never; // Não deve existir se have_license for false
}

export type InterfaceSoftware = {
  host_ref: string;
  software: InterfaceSoftwareItem;
};
export type InterfaceSoftwareItem = LicensedSoftware | UnlicensedSoftware;

const Softwares = ({
  data,
  id,
}: {
  data: InterfaceSoftwareItem[];
  id: string;
}) => {
  const [rowSelection, setRowSelection] = useState<any>({});
  // data.forEach((item) => {
  //   if (item.name.includes("Microsoft")) {
  //     console.log(item);
  //   }
  // });

  const columns = useMemo<MRT_ColumnDef<InterfaceSoftwareItem>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Nome",
        size: 200,
        Cell: ({ cell }: any) => {
          const value = cell.getValue();
          return value.split(" ").length >= 3
            ? value.split(" ").slice(0, 3).join(" ")
            : value.length > 24
              ? value.slice(0, 24) + "..."
              : value;
        },
      },
      {
        accessorKey: "version",
        header: "Versão",
        enableColumnFilter: false,
        enableSorting: false,
        size: 50,
      },
      {
        accessorKey: "category",
        header: "Categoria",
        enableSorting: false,
        size: 100,
      },
      {
        accessorKey: "publisher",
        header: "Desenvolvedor",
        maxSize: 200,
      },
      // {
      //   accessorKey: "uninstall_path",
      //   header: "Desinstalação",
      //   size: 200,
      // },
      {
        accessorKey: "have_license",
        header: "Possui licença",
        Cell: ({ cell }: any) => (cell.getValue() ? "Sim" : "Não"),
        size: 50,
      },
      {
        accessorKey: "createdAt",
        header: "Primeiro inventário",
        Cell: ({ cell }: any) => formatDateString(cell.getValue()),
      },
      {
        accessorKey: "license_key",
        header: "Chave da licença",
        size: 100,
        enableColumnFilter: false,
        enableSorting: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableDensityToggle: false,
    enableColumnActions: false,
    getRowId: (row) => row.uninstall_path || "",
    columnFilterDisplayMode: "popover",
    muiPaginationProps: {
      shape: "rounded",
      showRowsPerPage: true,
      rowsPerPageOptions: [10, 25, 50],
      variant: "outlined",
    },
    enableRowSelection: true,
    paginationDisplayMode: "pages",
    // Clicar na linha inteira para selecionar
    // muiTableBodyRowProps: ({ row }) => ({
    //implement row selection click events manually
    // onClick: () =>
    //   setRowSelection((prev: any) => ({
    //     ...prev,
    //     [row.id]: !prev[row.id], //this is a simple toggle implementation
    //   })),
    // selected: rowSelection[row.id],
    // sx: {
    //   cursor: "pointer",
    // },
    // }),
    // muiTableProps: {
    //   sx: {
    //     "& .MuiTableCell-root": {
    //       fontSize: "16px", // Tamanho da fonte
    //       fontWeight: "bold", // Fonte mais forte
    //       fontFamily: "'Roboto', sans-serif", // Alterar font-family
    //     },
    //     "& .MuiTableCell-head": {
    //       backgroundColor: "#f5f5f5", // Cor de fundo para o cabeçalho
    //       fontSize: "16px", // Tamanho da fonte no cabeçalho
    //       fontWeight: "bold", // Fonte forte no cabeçalho
    //       fontFamily: "sans-serif", // Alterar font-family no cabeçalho
    //       color: "#333", // Cor do texto do cabeçalho
    //     },
    //   },
    // },
    // muiTableBodyProps: {
    //   sx: {
    //     "& tr:nth-of-type(odd) > td": {
    //       backgroundColor: "#b700ff",
    //     },
    //   },
    // },
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
  });

  const handleAddSoftware = () => {
    // Lógica para adicionar software
    const input = prompt();
    sendCommand(id, "winget install " + (input || ""));
  };

  const handleRemoveSoftware = () => {
    // Lógica para remover software selecionado
    sendCommand(
      id,
      "uninstall__winget" +
        Object.keys(rowSelection)
          .map((cmd) => cmd.replace(/"/g, ""))
          .join(";")
    );
    // const selectedSoftware = Object.entries(rowSelection)
    //   .map(([index, name]) => `${index}: ${name}`)
    //   .join(", ");
    // console.log(selectedSoftware);
  };

  return (
    <div>
      <div className="flex justify-end space-x-4 mb-4">
        <Button
          onClick={handleAddSoftware}
          className="bg-green-500 hover:bg-green-600 text-lg"
        >
          <PlusCircle className="mr-2 h-6 w-6" /> Adicionar Software
        </Button>
        <Button
          onClick={handleRemoveSoftware}
          className="bg-red-500 hover:bg-red-600 text-lg"
          disabled={Object.keys(rowSelection).length === 0}
        >
          <MinusCircle className="mr-2 h-6 w-6" /> Remover Software
        </Button>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
};

export const TableSoftwares = ({
  data,
  id,
}: {
  data: InterfaceSoftwareItem[];
  id: string;
}) => {
  return (
    <main className="w-full h-full mt-5">
      <Softwares data={data} id={id} />
    </main>
  );
};

export default TableSoftwares;
