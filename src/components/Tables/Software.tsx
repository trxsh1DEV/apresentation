import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { formatDateString } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle, Plus } from "lucide-react";
import { sendCommand } from "@/utils/utils-react";
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/Context/ModalContext";
import { useDebounce } from "@uidotdev/usehooks";
import { useToast } from "@/components/ui/use-toast";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import requestWithToken from "@/utils/request";
import { LoadingSpinner } from "../ui/myIsLoading";

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
const apps: App[] = [
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

const handleAddSoftware = (id: string, appId: string) => {
  // Lógica para adicionar software
  sendCommand(id, "winget install -e --id " + appId);
};

const Softwares = ({
  data,
  id,
}: {
  data: InterfaceSoftwareItem[];
  id: string;
}) => {
  const [rowSelection, setRowSelection] = useState<any>({});
  const openModal = useSetAtom(openModalAtom);
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
        maxSize: 50,
      },
      {
        accessorKey: "category",
        header: "Categoria",
        enableSorting: false,
        maxSize: 100,
      },
      {
        accessorKey: "publisher",
        header: "Desenvolvedor",
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
    data,
    enableDensityToggle: false,
    enableColumnActions: false,
    getRowId: (row) => row.uninstall_path || "",
    columnFilterDisplayMode: "popover",
    muiPaginationProps: {
      shape: "rounded",
      showRowsPerPage: true,
      rowsPerPageOptions: [10, 25, 50, 100],
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

  const handleModal = () => {
    openModal({
      content: <AppStore id={id} />,
      title: "Loja de aplicativos",
      size: "1200",
    });
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
          onClick={handleModal}
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

const AppCard: FC<{ app: App; id: string }> = ({ app, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
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

  const handleAddSoftware = async (id: string, appId: string) => {
    setIsLoading(true); // Ativa o estado de carregamento
    try {
      // Lógica para adicionar software
      const result = await sendCommand(id, `winget install -e --id ${appId}`);
      const filterStrResult = result
        .substring(result.lastIndexOf("-"))
        .trim()
        .replace(/^-+\s*/, "");

      if (!result) {
        throw new Error("Comando inválido ou falha na execução.");
      }

      // Verifica se o resultado contém "success" ou "sucesso"
      if (
        ["success", "sucesso"].some((substring) =>
          result.toLowerCase().includes(substring)
        )
      ) {
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Ação realizada com sucesso para o app: ${app.name}`,
        });
        return;
      } else {
        toast({
          title: "Falha",
          duration: 1000,
          variant: "destructive",
          description: `Houve um problema na instalação do app: ${app.name}. \nErro: ${filterStrResult}`,
        });
        return;
      }
    } catch (error: any) {
      console.error("Erro ao adicionar software:", error);
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Ocorreu um erro durante a instalação do app: ${app.name}. Detalhes: ${error.message}`,
      });
    } finally {
      setIsLoading(false); // Desativa o estado de carregamento após a requisição
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-start space-y-2">
      <div className="flex items-center space-x-2">
        <img src={iconUrl} alt={`${app.name} icon`} className="w-8 h-8" />
        <h3 className="text-white font-semibold">
          {app.name.split(" ").length >= 3
            ? app.name.split(" ").slice(0, 3).join(" ")
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
      {isLoading ? (
        <LoadingSpinner className="h-6 w-6 mx-auto" />
      ) : (
        <Plus
          onClick={() => handleAddSoftware(id, app.appId)}
          className="mr-2 h-6 w-6 cursor-pointer mx-auto"
        />
      )}
    </div>
  );
};

const AppStore: FC<{ id: string }> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const searchApps = useCallback(async (term: string) => {
    if (!term) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await requestWithToken.get(
        `/software/repository/${term}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erro ao buscar aplicativos:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchApps(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, searchApps]);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Command className="mb-4">
        <CommandInput
          placeholder="Procure por algum app..."
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Resultados da Pesquisa">
            {isLoading ? (
              <CommandItem>Carregando...</CommandItem>
            ) : (
              searchResults.map((app) => (
                <CommandItem
                  className="cursor-pointer"
                  key={app.appId}
                  onSelect={() => handleAddSoftware(id, app.appId)}
                >
                  {app.name}
                </CommandItem>
              ))
            )}
          </CommandGroup>
        </CommandList>
      </Command>
      <h1 className="text-3xl font-bold text-white mb-8">
        Aplicativos Mais Utilizados
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Substitua 'apps' pela variável que contém os aplicativos mais utilizados */}
        {apps.map((app) => (
          <AppCard key={app.appId} app={app} id={id} />
        ))}
      </div>
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
