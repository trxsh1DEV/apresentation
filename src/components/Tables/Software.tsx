import { FC, useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { csvConfig, formatDateString, sanitizedSearch } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle, Plus, Download } from "lucide-react";
import { sendCommand } from "@/utils/utils-react";
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/Context/ModalContext";
import { useDebounce } from "@uidotdev/usehooks";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { LoadingSpinner } from "../ui/myIsLoading";
import requestWithToken from "@/utils/request";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { download, generateCsv } from "export-to-csv";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';

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

interface App {
  name: string;
  appId: string;
  version: string;
}
const appsStatic: App[] = [
  {
    name: "Google Chrome",
    appId: "Google.Chrome",
    version: "129.0.6668.90",
  },
  {
    name: "Mozilla Firefox",
    appId: "Mozilla.Firefox",
    version: "131",
  },
  {
    name: "Microsoft Edge",
    appId: "Microsoft.Edge",
    version: "129.0.2792.65",
  },
  {
    name: "LibreOffice",
    appId: "TheDocumentFoundation.LibreOffice",
    version: "24.8.2.1",
  },
  {
    name: "Adobe Acrobat Reader DC",
    appId: "Adobe.Acrobat.Reader.32-bit",
    version: "24.003.20112",
  },
  {
    name: "Foxit PDF Reader",
    appId: "Foxit.FoxitReader",
    version: "2024.3.0.26795",
  },
  {
    name: "GIMP",
    appId: "GIMP.GIMP",
    version: "2.10.38",
  },
  {
    name: "AnyDesk",
    appId: "AnyDeskSoftwareGmbH.AnyDesk",
    version: "8.1.0",
  },
  {
    name: "7-Zip",
    appId: "7zip.7zip",
    version: "24.08",
  },
  {
    name: "WinRAR",
    appId: "RARLab.WinRAR",
    version: "7.01.0",
  },
  {
    name: "TeamViewer",
    appId: "TeamViewer.TeamViewer",
    version: "15.58.5",
  },
  {
    name: "UltraViewer",
    appId: "DucFabulous.UltraViewer",
    version: "6.6.108",
  },
  {
    name: "Adobe Creative Cloud",
    appId: "Adobe.CreativeCloud",
    version: "6.4.0.361",
  },
  {
    name: "VLC media player",
    appId: "VideoLAN.VLC",
    version: "3.0.21",
  },
  {
    name: "Spotify",
    appId: "Spotify.Spotify",
    version: "1.2.47.366.g0â€¦",
  },
  {
    name: "Zoom Workplace",
    appId: "Zoom.Zoom",
    version: "6.2.47507",
  },
  {
    name: "Microsoft Teams",
    appId: "Microsoft.Teams",
    version: "24243.1309.31â€¦",
  },
  {
    name: "Slack",
    appId: "SlackTechnologies.Slack",
    version: "4.40.128",
  },
  {
    name: "Telegram Desktop",
    appId: "Telegram.TelegramDesktop",
    version: "5.5.5",
  },
  {
    name: "Discord",
    appId: "Discord.Discord",
    version: "1.0.9165",
  },
  {
    name: "Skype",
    appId: "Microsoft.Skype",
    version: "8.129",
  },
  {
    name: "Blender",
    appId: "BlenderFoundation.Blender",
    version: "4.2.2",
  },
  {
    name: "Notepad++",
    appId: "Notepad++.Notepad++",
    version: "8.7",
  },
  {
    name: "CCleaner",
    appId: "Piriform.CCleaner",
    version: "6.28",
  },
  {
    name: "CPUID CPU-Z",
    appId: "CPUID.CPU-Z",
    version: "2.11",
  },
  {
    name: "Google Drive",
    appId: "Google.GoogleDrive",
    version: "97.0.1.0",
  },
  {
    name: "Dropbox",
    appId: "Dropbox.Dropbox",
    version: "209.4.3661",
  },
  {
    name: "OBS Studio",
    appId: "OBSProject.OBSStudio",
    version: "30.2.3",
  },
  {
    name: "Miro",
    appId: "Miro.Miro",
    version: "0.8.72",
  },
  {
    name: "WinSCP",
    appId: "WinSCP.WinSCP",
    version: "6.3.5",
  },
  {
    name: "PuTTY",
    appId: "PuTTY.PuTTY",
    version: "0.81.0.0",
  },
  {
    name: "Microsoft Visual Studio Code",
    appId: "Microsoft.VisualStudioCode",
    version: "1.93.1",
  },
];
let softwareNameList: string[] = [""];

const filterSoftwareNames = (data: string[], searchString: string) => {
  // Usa a função sanitizedSearch para obter a string sanitizada
  const sanitized = sanitizedSearch(searchString);

  // Cria uma regex case-insensitive com a string de busca sanitizada
  const regex = new RegExp(sanitized, "i");

  // Filtra os itens, removendo '+' de cada item antes de comparar
  return data.some((item) => item.replace(/\+/g, "").match(regex));
};
const useSoftwaresData = (uid: string) => {
  return useQuery<InterfaceSoftwareItem[]>({
    queryKey: ["softwares", uid],
    queryFn: async () => {
      try {
        const result = await requestWithToken.get(`/software/${uid}`);
        return result.data.software;
      } catch (error: any) {
        throw new UnexpectedError(
          "Falha ao buscar os dados: " +
            (error.response?.data?.message || error.message)
        );
      }
    },
    // onError: (error: any) => {
    //   console.error('Erro ao buscar os dados do agente:', error.message);
    // },
  });
};

const TableSoftwares = ({ id }: { id: string }) => {
  const { data: softwaresData, isLoading, isError } = useSoftwaresData(id);
  const [rowSelection, setRowSelection] = useState<any>({});
  const openModal = useSetAtom(openModalAtom);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleExportData = () => {
    if (!softwaresData || softwaresData.length <= 0) return;

    // Transforma os dados antes de gerar o CSV
    const transformedSoftwaresData = softwaresData.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ first_inventory, ...rest }) => ({
        ...rest,
      })
    );

    const csv = generateCsv(csvConfig)(transformedSoftwaresData); // Gera o CSV com os dados transformados
    download(csvConfig)(csv); // Faz o download do arquivo
  };

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
        maxSize: 50,
      },
      {
        accessorKey: "category",
        header: "Categoria",
        enableColumnFilter: false,
        maxSize: 100,
      },
      {
        accessorKey: "publisher",
        header: "Desenvolvedor",
        enableColumnFilter: false,
        maxSize: 200,
      },
      // {
      //   accessorKey: "uninstall_path",
      //   header: "Desinstalação",
      //   maxSize: 200,
      // },
      {
        accessorKey: "have_license",
        header: "Possui licença",
        enableColumnFilter: false,
        Cell: ({ cell }: any) => (cell.getValue() ? "Sim" : "Não"),
        maxSize: 50,
      },
      {
        accessorKey: "createdAt",
        header: "Primeiro inventário",
        Cell: ({ cell }: any) => formatDateString(cell.getValue()),
      },
      {
        accessorKey: "license_key",
        header: "Chave da licença",
        maxSize: 100,
        enableColumnFilter: false,
        enableSorting: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: softwaresData || [], // Usando o estado local
    enableDensityToggle: false,
    enableColumnActions: false,
    getRowId: (row) => row.uninstall_path || "",
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
    enableRowSelection: true,
    paginationDisplayMode: "pages",
    onRowSelectionChange: setRowSelection,
    state: { rowSelection, isLoading },
    initialState: { pagination: { pageSize: 25, pageIndex: 0 } },
    localization: MRT_Localization_PT_BR,
    renderTopToolbarCustomActions: () => (
      <TooltipProvider
      // sx={{
      //   display: 'flex',
      //   gap: '16px',
      //   padding: '8px',
      //   flexWrap: 'wrap',
      // }}
      >
        <Tooltip>
          <TooltipTrigger asChild className="ml-6">
            {/* Remova o botão extra */}
            <Button variant="outline" size="icon" onClick={handleExportData}>
              <Download />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Exportar tudo</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  });

  softwareNameList =
    softwaresData?.map((software) => software.name) || [].filter(Boolean);
  const handleModal = () => {
    openModal({
      content: (
        <AppStore
          id={id}
          // softwareName={
          //   softwaresData?.map((software) => software.name) ||
          //   [].filter(Boolean)
          // }
        />
      ),
      title: "Loja de aplicativos",
      size: "large",
    });
  };

  const removeSoftwareMutation = useMutation({
    mutationFn: async (selectedSoftware: string[]) => {
      return await sendCommand(
        id,
        "uninstall__winget" +
          selectedSoftware.map((cmd) => cmd.replace(/"/g, "")).join(";")
      );
    },
    onSuccess: (response) => {
      if (response.includes("Desinstalação bem-sucedida")) {
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Desinstalação bem sucedida para o(s) app(s): ${Object.keys(rowSelection)}`,
        });
        setRowSelection({});
        queryClient.invalidateQueries({ queryKey: ["softwares", id] });
      } else {
        throw new Error(response);
      }
    },
    onError: (err: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Houve um problema na desinstalação do(s) app(s): ${Object.keys(rowSelection)}. \nErro: ${err.message}`,
      });
    },
  });

  const handleRemoveSoftware = () => {
    const selectedSoftware = Object.keys(rowSelection);
    removeSoftwareMutation.mutate(selectedSoftware);
  };

  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  //       <LoadingSpinner className="w-12 h-12" />
  //     </div>
  //   );
  // }

  if (isError) {
    return <div>Erro ao carregar dados.</div>;
  }

  return (
    <main className="w-full h-full mt-5">
      <div className="flex justify-end space-x-4 mb-4">
        <Button
          onClick={handleModal}
          className="bg-green-500 hover:bg-green-600 text-lg"
        >
          <PlusCircle className="mr-2 h-6 w-6" /> Adicionar Software
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              // onClick={handleRemoveSoftware}
              className="bg-red-500 hover:bg-red-600 text-lg"
              disabled={Object.keys(rowSelection).length === 0}
            >
              <MinusCircle className="mr-2 h-6 w-6" /> Remover Software
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Tem certeza que deseja remover esse app?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Está ação não pode ser desfeita. Isso irá deletar
                permanentemente esse aplicativo! (Ele poderá ser reinstalado
                posteriormente)
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleRemoveSoftware}>
                Excluir App
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <MaterialReactTable table={table} />
    </main>
  );
};

const AppCard: FC<{ app: App; id: string }> = ({ app, id }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  let iconUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${app.name.split(" ")[0].toLowerCase()}.com&size=32`;
  switch (app.name) {
    case "7-Zip":
      iconUrl =
        "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.7-zip.org&size=32";
      break;
    case "GIMP":
      iconUrl =
        "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.gimp.org&size=32";
      break;
    case "UltraViewer":
      iconUrl =
        "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.ultraviewer.net&size=32";
      break;
    case "Notepad++":
      iconUrl =
        "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.notepad-plus-plus.org&size=32";
      break;
    case "Steam":
      iconUrl =
        "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://store.steampowered.com/&size=32";
      break;
    case "Skype":
      iconUrl =
        "https://img.icons8.com/?size=32&id=117566&format=png&color=000000";
      break;
    case "WinSCP":
      iconUrl =
        "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://winscp.net/&size=32";
      break;
    default:
      break;
  }

  const installSoftwareMutation = useMutation({
    mutationFn: async () => {
      return await sendCommand(id, `winget install -e --id ${app.appId}`);
    },
    onSuccess: (result) => {
      if (
        ["success", "sucesso"].some((substring) =>
          result.toLowerCase().includes(substring)
        )
      ) {
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Instalação bem sucedida para o app: ${app.name}`,
        });
        queryClient.invalidateQueries({ queryKey: ["softwares", id] });
      } else {
        const filterStrResult = result
          .substring(result.lastIndexOf("-"))
          .trim()
          .replace(/^-+\s*/, "");
        throw new Error(filterStrResult);
      }
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Ocorreu um erro durante a instalação do app: ${app.name}. Detalhes: ${error}`,
      });
    },
  });
  // console.log(softwareNameList);
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-start space-y-2">
      <div className="flex items-center space-x-2">
        <img src={iconUrl} alt={`${app.name} icon`} className="w-8 h-8" />
        <h3 className="text-white font-semibold">
          {app.name.split(" ").length >= 3
            ? app.name.split(" ").slice(0, 4).join(" ")
            : app.name.length > 24
              ? app.name.slice(0, 24) + "..."
              : app.name}
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
        {app.appId.split(" ").length >= 3
          ? app.appId.split(" ").slice(0, 3).join(".")
          : app.appId.length > 23
            ? app.appId.slice(0, 23) + "..."
            : app.appId}
      </p>
      <p className="text-gray-400 text-xs">Version: {app.version}</p>

      {/* Ícone de Plus ou LoadingSpinner dependendo do estado de carregamento */}
      {installSoftwareMutation.isPending ? (
        <LoadingSpinner className="h-6 w-6 mx-auto" />
      ) : (
        !filterSoftwareNames(softwareNameList, app.name) && (
          <Plus
            onClick={() => installSoftwareMutation.mutate()}
            className="mr-2 h-6 w-6 cursor-pointer mx-auto"
          />
        )
      )}
    </div>
  );
};

const AppStore: FC<{ id: string }> = ({
  id,
  // softwareName,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apps, setApps] = useState<App[]>(appsStatic);
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["appSearch", debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm) return appsStatic;
      const response = await requestWithToken.get(
        `/software/repository/${debouncedSearchTerm}`
      );
      return response.data;
    },
    enabled: debouncedSearchTerm.length > 0,
  });

  useEffect(() => {
    if (data) {
      setApps(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm == "") {
      setApps(appsStatic);
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && debouncedSearchTerm) {
        refetch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [debouncedSearchTerm]);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Command className="mb-4">
        <CommandInput
          placeholder="Procure por algum app..."
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          {/* <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty> */}
          {/* <CommandGroup heading="Resultados da Pesquisa">
            {isLoading ? (
              <CommandItem>Carregando...</CommandItem>
            ) : (
              apps.map((app) => (
                <CommandItem
                  className="cursor-pointer"
                  key={app.appId}
                  onSelect={() => {
                    setSearchTerm(app.name); // Atualiza o termo de busca
                    searchApps(app.name); // Chama a pesquisa com o nome do aplicativo
                  }}
                >
                  {app.name}
                </CommandItem>
              ))
            )}
          </CommandGroup> */}
        </CommandList>
      </Command>
      <h1 className="text-3xl font-bold text-white mb-8">
        Aplicativos Mais Utilizados
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <LoadingSpinner className="w-12 h-12" />
          </div>
        ) : (
          apps.map((app) => <AppCard key={app.appId} app={app} id={id} />)
        )}
      </div>
    </div>
  );
};

// export const TableSoftwares = ({
//   // data,
//   id,
// }: {
//   // data: InterfaceSoftwareItem[];
//   id: string;
// }) => {
//   return (
//     <main className="w-full h-full mt-5">
//       <Softwares id={id} />
//     </main>
//   );
// };

export default TableSoftwares;
