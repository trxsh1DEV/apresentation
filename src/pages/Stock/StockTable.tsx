import { useMemo, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import {
  MRT_ActionMenuItem,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { TypeStockAutomatic } from "../../utils/types/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { requestWithToken } from "../../utils/request";
import { Pen, RefreshCcw, Trash } from "lucide-react";

type UserApiResponse = {
  data: Array<TypeStockAutomatic>;
  meta: {
    totalRowCount: number;
  };
};

const StockAutomatic = () => {
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
    refetch,
  } = useQuery<UserApiResponse>({
    queryKey: [
      "table-data",
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
        const response = await requestWithToken.get("/stock", { params });
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    placeholderData: keepPreviousData,
  });

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      // {
      //   accessorKey: "host_ref",
      //   header: "Host",
      // },
      {
        accessorKey: "hostname",
        header: "Hostname",
      },
      {
        accessorKey: "device_id",
        header: "Identificador",
      },
      {
        accessorKey: "device_type",
        header: "Tipo de Periférico",
        Cell: ({ renderedCellValue }) => (
          <span style={{ textTransform: "capitalize" }}>
            {renderedCellValue}
          </span>
        ),
      },
    ],
    []
    //end
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableExpanding: true,
    // filterFromLeafRows: false, //apply filtering to all rows instead of just parent rows
    getSubRows: (row) => row.devices, //default
    // paginateExpandedRows: true, //When rows are expanded, do not count sub-rows as number of rows on the page towards pagination
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
    renderTopToolbarCustomActions: () => (
      <>
        <Tooltip arrow title="Refresh Data">
          <IconButton onClick={() => refetch()}>
            <RefreshCcw />
          </IconButton>
        </Tooltip>
        <button>Exportar Dados</button>
        {/* <button onClick={() => handleModal()}>Adicionar novo</button> */}
      </>
    ),
    rowCount: meta?.totalRowCount ?? 0,
    initialState: { showColumnFilters: false },
    manualFiltering: true,
    manualPagination: true, // problema para exibir as subRows de devices, junto com a prop paginateExpandedRows
    manualSorting: true,
    enableGlobalFilter: false,
    enableDensityToggle: false,
    enableColumnActions: false,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    muiPaginationProps: {
      shape: "rounded",
      SelectProps: { hiddenLabel: false },
      rowsPerPageOptions: [10, 25, 50],
      variant: "outlined",
      showRowsPerPage: false,
    },
    muiToolbarAlertBannerProps: isError
      ? { color: "error", children: "Error loading data" }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showSkeletons: isRefetching,
      sorting,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default StockAutomatic;
