import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { formatDateString } from "@/utils/utils";

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

export type InterfaceSoftwareItem = LicensedSoftware | UnlicensedSoftware;

export type InterfaceSoftware = {
  host_ref: string;
  software: InterfaceSoftwareItem;
};

const Softwares = ({ data }: { data: InterfaceSoftwareItem[] }) => {
  // console.log("soft", data);

  const columns = useMemo<MRT_ColumnDef<InterfaceSoftwareItem>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Nome",
        size: 150,
        Cell: ({ cell }: any) => {
          const value = cell.getValue();
          return value.length > 24 ? value.slice(0, 24) + "..." : value;
        },
      },
      {
        accessorKey: "version",
        header: "Versão",
        size: 50,
        enableColumnFilter: false,
        enableSorting: false,
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
        size: 100,
        // enableSorting: false,
      },
      {
        accessorKey: "have_license",
        header: "Possui licença",
        Cell: ({ cell }: any) => (cell.getValue() ? "Sim" : "Não"),
        size: 50,
      },
      {
        accessorKey: "createdAt",
        header: "Primeiro inventário",
        size: 100,
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
    // initialState: { density: "compact" },
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

export const TableSoftwares = ({ data }: { data: InterfaceSoftwareItem[] }) => {
  console.log("tst", data);
  return (
    <main className="w-full">
      <Softwares data={data} />
    </main>
  );
};

export default TableSoftwares;
