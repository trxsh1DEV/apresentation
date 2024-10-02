// import { Line, Bar, Doughnut, PolarArea, Radar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  ChartConfiguration,
  LineController,
  BarController,
  DoughnutController,
  PolarAreaController,
  RadarController,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import requestWithToken from "@/utils/request";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { countByField, countByManufacturers } from "@/utils/utils";
import { FC, useEffect, useRef } from "react";

ChartJS.register(
  LineController,
  BarController,
  DoughnutController,
  PolarAreaController,
  RadarController,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

interface MachineData {
  hostname: string;
  so: string;
  typeMachine: string;
  memoryTotal: number;
  cpuModel: string;
  manufacturer: string;
  memoryType: string;
  hoursOnMonth: string[];
}

interface ChartWrapperProps {
  type: "line" | "bar" | "doughnut" | "polarArea" | "radar";
  data: any;
  options: any;
}

const ChartWrapper: FC<ChartWrapperProps> = ({ type, data, options }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new ChartJS(ctx, {
          type,
          data,
          options,
        } as ChartConfiguration);
      }
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

// interface HistoryDataItem {
//   categorySoftwares: { [software: string]: string };
// }

const mapToGeneralCategories = (
  softwareCount: { [key: string]: number },
  softwareCategories: { [key: string]: string }
) => {
  const categoryMapping: { [key: string]: string } = {
    Navegador: "Navegadores e Web",
    "Suíte de Escritório": "Gerenciamento de Arquivos",
    "Leitor de PDF": "Gerenciamento de Arquivos",
    "Edição de Imagens": "Design e Edição",
    "Edição & Design": "Design e Edição",
    "Edição de Vídeo": "Design e Edição",
    "Reprodutor de Mídia": "Mídia e Streaming",
    "Streaming de Música": "Mídia e Streaming",
    "Gerenciamento de Mídia": "Mídia e Streaming",
    "Comunicação e Videoconferência": "Comunicação",
    "Comunicação e Colaboração": "Comunicação",
    "Comunicação e VoIP": "Comunicação",
    "Plataforma de Jogos": "Entretenimento",
    "Torrent e Downloads": "Entretenimento",
    "Compressão de Arquivos": "Gerenciamento de Arquivos",
    "Edição de Texto/Código": "Desenvolvimento e IDEs",
    "IDE/Editor de Código": "Desenvolvimento e IDEs",
    "IDE/Desenvolvimento": "Desenvolvimento e IDEs",
    Virtualização: "Desenvolvimento e IDEs",
    Segurança: "Segurança e Otimização",
    "Manutenção e Otimização": "Segurança e Otimização",
    "Monitoramento de Hardware": "Segurança e Otimização",
    "Armazenamento em Nuvem": "Gerenciamento de Arquivos",
    "Gerenciamento de Projetos": "Ferramentas de Produtividade",
    "Ferramenta de API": "Ferramentas de Produtividade",
    "Design de Interface": "Design e Edição",
    "Ferramenta de Colaboração": "Ferramentas de Produtividade",
    "Criação de Diagramas": "Ferramentas de Produtividade",
    "Banco de Dados": "Desenvolvimento e IDEs",
    "Modelagem 3D": "Design e Edição",
    "Edição de Áudio": "Mídia e Streaming",
    "Streaming e Gravação": "Mídia e Streaming",
    "Controle de Versão": "Desenvolvimento e IDEs",
    "Emulador Mobile": "Entretenimento",
    "Acesso Remoto": "Ferramentas de TI",
  };

  // Mapeia a contagem de softwares para categorias gerais
  return Object.keys(softwareCount).reduce(
    (acc, softwareName) => {
      const specificCategory = softwareCategories[softwareName] || "Outros";
      const generalCategory = categoryMapping[specificCategory] || "Outros";
      acc[generalCategory] =
        (acc[generalCategory] || 0) + softwareCount[softwareName];
      return acc;
    },
    {} as { [key: string]: number }
  );
};

interface Disk {
  diskTotal: number; // Tamanho do disco em alguma unidade (GB, MB, etc.)
}
interface MemoryRam {
  memoryTotal: number; // Tamanho do disco em alguma unidade (GB, MB, etc.)
  memoryType: string;
}

interface DiskGroup {
  count: number;
  total: number;
}
interface MemoryGroup extends DiskGroup {
  memoryTypes: string[]; // Tipos de memória presentes no grupo
  percentPerMemoryType: { [key: string]: number }; // Porcentagem de cada tipo de memória em relação ao total
}

// Interface para dados agrupados
interface GroupedSizes {
  labels: string[]; // Rótulos para o gráfico
  data: number[]; // Contadores de cada grupo
  totalSizes: string[]; // Totais dos tamanhos por grupo
}

// Interface para dados agrupados de memória que herda de GroupedSizes
interface GroupedSizesMemory extends GroupedSizes {
  memoryTypes: string[][]; // Tipos de memória para cada grupo
  percentPerMemoryType: { [key: string]: { [type: string]: string | number } }; // Porcentagens por tipo de memória para cada grupo
}

function groupMemorySize(memorys: MemoryRam[]): GroupedSizesMemory {
  const groups: { [key: string]: MemoryGroup } = {};

  memorys.forEach((memory) => {
    const size = memory.memoryTotal;
    const type = memory.memoryType;
    let groupKey: string;

    // Lógica de agrupamento por faixas específicas
    if (size < 4) {
      groupKey = "0-4";
    } else if (size < 8) {
      groupKey = "4-8";
    } else if (size < 16) {
      groupKey = "8-16";
    } else {
      groupKey = "16+";
    }

    // Inicializa o grupo se não existir
    if (!groups[groupKey]) {
      groups[groupKey] = {
        count: 0,
        total: 0,
        memoryTypes: [],
        percentPerMemoryType: {},
      };
    }

    // Incrementa o contador e o total do grupo
    groups[groupKey].count++;
    groups[groupKey].total += size;

    // Adiciona o tipo de memória ao grupo, se ainda não estiver no array
    if (!groups[groupKey].memoryTypes.includes(type)) {
      groups[groupKey].memoryTypes.push(type);
      // Inicializa a porcentagem para esse tipo de memória
      groups[groupKey].percentPerMemoryType[type] = 0;
    }

    // Incrementa a contagem do tipo de memória
    groups[groupKey].percentPerMemoryType[type] += size; // Soma o tamanho ao tipo correspondente
  });

  // Calcula a porcentagem para cada tipo de memória em cada grupo
  for (const key in groups) {
    const totalSize = groups[key].total;
    for (const type of groups[key].memoryTypes) {
      const typeSize = groups[key].percentPerMemoryType[type];
      groups[key].percentPerMemoryType[type] = Number(
        ((typeSize / totalSize) * 100).toFixed(2)
      ); // Calcula a porcentagem
    }
  }

  // Ordena as chaves para garantir que o gráfico fique em ordem crescente
  const sortedKeys = Object.keys(groups).sort((a, b) => {
    return parseInt(a.split("-")[0]) - parseInt(b.split("-")[0]);
  });

  return {
    labels: sortedKeys,
    data: sortedKeys.map((key) => groups[key].count),
    totalSizes: sortedKeys.map((key) => groups[key].total.toFixed(2)),
    memoryTypes: sortedKeys.map((key) => groups[key].memoryTypes),
    percentPerMemoryType: sortedKeys.reduce(
      (acc, key) => {
        acc[key] = groups[key].percentPerMemoryType; // Atribui o objeto de porcentagens para cada grupo
        return acc;
      },
      {} as { [key: string]: { [type: string]: number } }
    ), // Certifique-se de que o tipo está correto aqui
  };
}

function groupDiskSizes(disks: Disk[]): GroupedSizes {
  const groups: { [key: string]: DiskGroup } = {};

  disks.forEach((disk) => {
    const size = disk.diskTotal;
    let groupKey: string;

    // Lógica de agrupamento por faixas específicas
    if (size < 130) {
      groupKey = "0-130";
    } else if (size < 280) {
      groupKey = "130-280";
    } else if (size < 520) {
      groupKey = "280-520";
    } else if (size < 730) {
      groupKey = "520-730";
    } else if (size < 1000) {
      groupKey = "730-1000+";
    } else {
      groupKey = "1000+";
    }

    // Inicializa o grupo se não existir
    if (!groups[groupKey]) {
      groups[groupKey] = { count: 0, total: 0 };
    }

    // Incrementa o contador e o total do grupo
    groups[groupKey].count++;
    groups[groupKey].total += size;
  });

  // Ordena as chaves para garantir que o gráfico fique em ordem crescente
  const sortedKeys = Object.keys(groups).sort((a, b) => {
    return parseInt(a.split("-")[0]) - parseInt(b.split("-")[0]);
  });

  return {
    labels: sortedKeys,
    data: sortedKeys.map((key) => groups[key].count),
    totalSizes: sortedKeys.map((key) => groups[key].total.toFixed(2)),
  };
}

// const aggregateCategories = (
//   categories: { [key: string]: number },
//   softwareCount: { [key: string]: number }
// ) => {
//   return Object.keys(categories).reduce(
//     (acc: { [key: string]: number }, category) => {
//       acc[category] = (acc[category] || 0) + (softwareCount[category] || 0);
//       return acc;
//     },
//     {}
//   );
// };

const useDashboardData = () => {
  return useQuery<MachineData[]>({
    queryKey: ["dashboardData"],
    queryFn: async () => {
      try {
        const result = await requestWithToken.get(`/clients/dashboard/all`);
        return result.data;
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

const countMachineTypes = (data: Array<{ typeMachine: string }>) => {
  return data.reduce(
    (acc, curr) => {
      if (curr.typeMachine === "Desktop") {
        acc.desktop += 1;
      } else if (curr.typeMachine === "Notebook") {
        acc.notebook += 1;
      } else {
        acc.servidor += 1;
      }
      return acc;
    },
    { desktop: 0, notebook: 0, servidor: 0 } // Inicializando o contador
  );
};

// Função para formatar horas e meses
const formatHoursMonth = (
  hoursOnMonthData: { hoursOnMonth: string[] }[]
): [string[], number[]] => {
  const totals: { [key: string]: number } = {}; // Objeto para acumular horas
  const labels: string[] = [];
  const data: number[] = [];

  // Itera sobre os dados de entrada
  hoursOnMonthData.forEach((item) => {
    item.hoursOnMonth.forEach((entry) => {
      const [month, hours] = entry.split(", ").map((part) => part.trim());
      const key = month; // Chave única para o mês/ano

      // Acumula as horas
      if (totals[key]) {
        totals[key] += Number(hours); // Se já existe, soma as horas
      } else {
        totals[key] = Number(hours); // Caso contrário, inicializa com as horas
      }
    });
  });

  // Prepara os rótulos e dados para retorno
  for (const month in totals) {
    labels.push(month);
    data.push(totals[month]);
  }

  return [labels, data];
};

const Dashboard = () => {
  const { data: historyData, isLoading, isError } = useDashboardData();
  //   let machineCounts;

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div>Erro ao carregar os dados</div>;
  }
  if (!historyData || historyData.length < 2) return;
  //   if (!isLoading && !isError && historyData) {
  const {
    machineTypes,
    brandManufactures,
    SystemOperation,
    cpuModelName,
    diskTotal,
    memoryTotal,
    hoursOnMonthData,
    combinedCategories,
    softwareCount,
  } = historyData.reduce(
    (acc: any, item: any) => {
      // Populando machineTypes, brandManufactures e hoursOnMonthData
      acc.machineTypes.push({ typeMachine: item.typeMachine });
      acc.brandManufactures.push({ manufacturer: item.manufacturer });
      acc.hoursOnMonthData.push({ hoursOnMonth: item.hoursOnMonth });
      acc.SystemOperation.push({
        so: item.so
          .replace(/^Microsoft\s+/, "")
          .split(" ")
          .slice(0, 3)
          .join(" "),
        // .trim(),
      });
      acc.cpuModelName.push({ cpuModel: item.cpuModel });
      acc.diskTotal.push({ diskTotal: item.diskTotal });
      acc.memoryTotal.push({
        memoryTotal: item.memoryTotal,
        memoryType: item.memoryType,
      });

      // Processando categorySoftwares para combinedCategories e softwareCount
      Object.entries(item.categorySoftwares).forEach(([software, category]) => {
        // Verifica se o software já existe no combinedCategories
        if (!acc.combinedCategories[software]) {
          acc.combinedCategories[software] = category; // Adiciona se não existir
        }
        // Incrementa o contador de software em softwareCount
        acc.softwareCount[software] = (acc.softwareCount[software] || 0) + 1;
      });

      return acc;
    },
    {
      machineTypes: [],
      brandManufactures: [],
      SystemOperation: [],
      hoursOnMonthData: [],
      diskTotal: [],
      memoryTotal: [],
      cpuModelName: [],
      combinedCategories: {} as { [key: string]: string },
      softwareCount: {} as { [key: string]: number },
    }
  );
  const groupedData = groupDiskSizes(diskTotal);

  const generalCategories = mapToGeneralCategories(
    softwareCount,
    combinedCategories
  );

  const groupedMemoryData = groupMemorySize(memoryTotal);

  // Extraindo apenas o campo "typeMachine" de cada item
  const filteredSoftwareCount = Object.entries(softwareCount)
    .sort(([, countA]: any, [, countB]: any) => countB - countA)
    .reduce(
      (acc: any, [software, count]) => {
        // Pega até a terceira palavra, ou o nome completo se tiver menos de 3 palavras
        const softwareName = software.split(" ").slice(0, 2).join(" ");
        switch (softwareName) {
          case "Microsoft Visual":
            // console.log("oi", software.split(" ").slice(0, 3).join(" "));
            // softwareName = software.split(" ").slice(0, 3).join(" ");
            return acc;
          case "Microsoft Edge":
            if (
              software.split(" ").slice(0, 3).join(" ") !== "Microsoft Edge"
            ) {
              return acc; // Pula a iteração retornando o acumulador
            }
            // sof
            break;

          default:
            break;
        }

        if (acc[softwareName]) {
          acc[softwareName] += count;
        } else {
          acc[softwareName] = count;
        }

        return acc;
      },
      {} as { [key: string]: number }
    );

  const topRankSoftwares = Object.entries(filteredSoftwareCount)
    .slice(0, 16)
    .reduce(
      (acc: any, [software, count]) => {
        acc[software] = count;
        return acc;
      },
      {} as { [key: string]: number }
    );

  const machineCounts = countMachineTypes(machineTypes);
  const brandCounts = countByManufacturers(
    brandManufactures,
    Object.keys(brandManufactures[0])[0] || "manufacturer",
    [
      "DELL",
      "ASUS",
      "ACER",
      "SAMSUNG",
      "LENOVO",
      "ELSA",
      "MAXSUN",
      "GIGABYTE",
      "ASROCK",
      "MSI",
      "SUPERFRAME",
      "BIOSTAR",
    ]
  );
  const cpuModelCounts = countByManufacturers(
    cpuModelName,
    Object.keys(cpuModelName[0])[0] || "cpuModel",
    ["Intel", "AMD"]
  );

  const [labelsHoursMonth, dataHoursMonth] = formatHoursMonth(hoursOnMonthData);

  const diskTotalChart = {
    labels: groupedData.labels,
    datasets: [
      {
        label: "Número de Discos",
        data: groupedData.data,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const memoryTotalChart = {
    labels: groupedMemoryData.labels,
    datasets: [
      {
        label: "Quantidade de Memória",
        data: groupedMemoryData.data,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Dados estáticos de e
  const pieData = {
    labels: ["Desktop", "Notebook", "Servidor"], // Rotulos para os tipos de máquina
    datasets: [
      {
        data: [
          //   machineCounts?.desktop,
          //   machineCounts?.notebook,
          //   machineCounts?.servidor,
          machineCounts?.desktop && machineCounts?.desktop > 0
            ? machineCounts?.desktop
            : null,
          machineCounts?.notebook && machineCounts?.notebook > 0
            ? machineCounts?.notebook
            : null,
          machineCounts?.servidor && machineCounts?.servidor > 0
            ? machineCounts?.servidor
            : null,
        ], // Quantidade de Desktops e Notebooks
        backgroundColor: ["#007bff", "#28a745", "#fffb00"], // Cores para Desktop e Notebook
        // borderColor: ["#007bff", "#28a745", "#fffb00"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Notebook", "Desktop", "Impressora", "Servidor", "Tablet"],
    datasets: [
      {
        label: "Inventariados",
        data: [20, 15, 10, 5, 7], // Quantidade de itens inventariados
        backgroundColor: "#4caf50", // Cor para inventariados (verde)
        // borderColor: ["rgb(54, 235, 78, 1)"],
      },
      {
        label: "Em Estoque",
        data: [8, 3, 5, 2, 4], // Quantidade de itens em estoque
        backgroundColor: "#2196f3", // Cor para em estoque (azul)
        // borderColor: ["rgba(54, 162, 235, 1)"],
      },
    ],
  };

  const lineData = {
    labels: labelsHoursMonth,
    datasets: [
      {
        label: "Horas de Computadores Ligados",
        data: dataHoursMonth,
        // fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        // tension: 0.5,
      },
    ],
  };

  const brandChart = {
    labels: Object.keys(brandCounts),
    datasets: [
      {
        data: Object.values(brandCounts),
        backgroundColor: [
          "#007bff",
          "#ff4d4f",
          "#ffc107",
          "#28a745",
          "#6610f2",
        ],
        borderWidth: 1,
      },
    ],
  };

  const soData = countByField(SystemOperation, "so");

  const systemOperationData = {
    labels: Object.keys(soData),
    datasets: [
      {
        data: Object.values(soData),
        backgroundColor: [
          "#20c997",
          "#0dcaf0",
          "#6f42c1",
          "#ff4d4f",
          "#28a745",
          "#ffc107",
        ],
        borderWidth: 1,
      },
    ],
  };

  const cpuModelChart: any = {
    labels: ["AMD", "Intel"],
    datasets: [
      {
        label: "Processadores",
        data: Object.values(cpuModelCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Cor para AMD (vermelho mais escuro)
          "rgba(54, 162, 235, 0.2)", // Cor para Intel (azul mais escuro)
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const softwareData = {
    labels: Object.keys(topRankSoftwares),
    datasets: [
      {
        label: "Quantidade de Software",
        data: Object.values(topRankSoftwares),
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        pointBackgroundColor: "rgb(0, 123, 255)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(0, 123, 255)",
      },
    ],
  };

  const categorySoftwareData = {
    labels: Object.keys(generalCategories),
    datasets: [
      {
        data: Object.values(generalCategories),
        backgroundColor: [
          "#007bff",
          "#ff4d4f",
          "#28a745",
          "#6610f2",
          "#ffc107",
          "#6f42c1",
          "#20c997",
          "#e83e8c",
          "#fd7e14",
          "#17a2b8",
          "#0dcaf0",
        ],
        borderWidth: 1,
      },
    ],
  };

  const baseOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          font: {
            size: 14,
          },
          // padding: 20,
        },
      },
      // tooltip: {
      //   callbacks: {
      //     label: (tooltipItem: any) => {
      //       const total = tooltipItem.dataset.data.reduce(
      //         (sum: number, value: number) => sum + value,
      //         0
      //       );
      //       const value = tooltipItem.raw;
      //       const percentage = ((value / total) * 100).toFixed(2) + "%";
      //       return `${tooltipItem.label}: ${percentage}`;
      //     },
      //   },
      // },
      datalabels: {
        color: "white",
        font: {
          weight: "bold",
          size: 16,
        },
        formatter: (value: number, context: any) => {
          const total = context.dataset.data.reduce(
            (sum: number, dataValue: number) => sum + dataValue,
            0
          );
          if (value > 0) {
            return ((value / total) * 100).toFixed(2) + "%";
          }
          return ""; // Retorna uma string vazia se o valor for 0 ou menor
          // return ((value / total) * 100).toFixed(2) + "%";
        },
      },
    },
    layout: {
      // padding: {
      //   top: 10,
      //   bottom: 10,
      //   left: 10,
      //   right: 10,
      // },
    },
  };

  const doughnutOptions: any = {
    ...baseOptions,
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          const total = tooltipItem.dataset.data.reduce(
            (sum: number, value: number) => sum + value,
            0
          );
          const value = tooltipItem.raw;
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `${tooltipItem.label}: ${percentage}`;
        },
      },
    },
    cutout: "40%",
  };

  const barOptionsDisk = (title: string, display: boolean) => {
    return {
      ...baseOptions,
      scales: {
        // y: {
        //   beginAtZero: true,
        //   title: {
        //     display: true,
        //     text: "Quantidade de Discos",
        //   },
        // },
        x: {
          title: {
            display: true,
            text: `Tamanho do ${title} (GB)`,
          },
        },
      },
      plugins: {
        ...baseOptions.plugins,
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const label = context.dataset.label || "";
              const value = context.parsed.y;
              const totalSize =
                title == "Disco"
                  ? groupedData.totalSizes[context.dataIndex]
                  : groupedMemoryData.totalSizes[context.dataIndex];

              const memoryGroup = context.label; // ex: '4-8' ou '8-16'
              const memoryTypes =
                groupedMemoryData.memoryTypes[context.dataIndex];
              const percentPerMemoryType =
                groupedMemoryData.percentPerMemoryType[memoryGroup];

              // Iniciando o array de linhas com a primeira linha
              const lines = [`${label}: ${value} (Total: ${totalSize} GB)`];

              // Adicionando as porcentagens como linhas separadas
              memoryTypes.forEach((memoryType: string) => {
                const percentage = percentPerMemoryType[memoryType];
                lines.push(`${memoryType}: ${percentage}%`);
              });

              return lines;
            },
          },
        },
        title: {
          display,
          text: `Distribuição de Tamanhos de ${title}`,
        },
      },
    };
  };

  const barOptions = (indexAxios: string) => {
    return {
      ...baseOptions,
      devicePixelRatio: 2, // Garante que a densidade de pixels se ajuste ao dispositivo
      indexAxis: indexAxios,
      scales: {
        x: {
          beginAtZero: true,
          ticks: { color: "white", font: { size: 16 } },
          grid: { color: "rgba(255, 255, 255, 0.1)" },
        },
        y: {
          ticks: { color: "white", font: { size: 16 } },
          grid: { color: "rgba(255, 255, 255, 0.1)" },
        },
      },
      plugins: {
        ...baseOptions.plugins,
        // tooltip: {
        //   callbacks: {
        //     label: (tooltipItem: any) => {
        //       const total = tooltipItem.dataset.data.reduce(
        //         (sum: number, value: number) => sum + value,
        //         0
        //       );
        //       const value = tooltipItem.raw;
        //       const percentage = ((value / total) * 100).toFixed(2) + "%";
        //       return `${tooltipItem.label}: ${percentage}`;
        //     },
        //   },
        // },
      },
    };
  };

  const lineOptions: any = {
    ...baseOptions,
    tension: 0.3,
    scales: {
      x: {
        ticks: { color: "white", font: { size: 14 } },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: { color: "white", font: { size: 14 } },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        // suggestedMin: 20, // Definindo o valor mínimo baseado nos dados
      },
    },
    elements: {
      point: {
        radius: 5,
      },
      line: {
        // tension: 0.2,
      },
    },
    plugins: {
      ...baseOptions.plugins,
      legend: {
        display: true,
        labels: {
          color: "white",
          font: {
            size: 15,
            // weight: "bold",
          },
        },
      },
      datalabels: {
        // ...baseOptions.plugins.datalabels,
        display: true, // Ativa os rótulos de dados
        align: "top",
        anchor: "end",
        offset: -5, // Controla o espaçamento do valor acima dos pontos
        color: "white",
        textStrokeColor: "black", // Cor do contorno
        textStrokeWidth: 3, // Largura do contorno
        font: {
          size: 16,
          weight: "bold",
        },
      },
      // Adiciona o plugin de datalabels sem sobrescrever a chave plugins
      datalabelsPlugin: ChartDataLabels,
    },
  };

  const polarOptions = {
    ...baseOptions,
    scales: {
      r: {
        ticks: {
          display: false, // Remover números no gráfico para ficar mais limpo
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Ajuste no grid
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)", // Cor das linhas de divisão
        },
      },
    },
    plugins: {
      ...baseOptions.plugins,
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const radarOptions: any = {
    ...baseOptions,
    // tension: 0.1,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          backdropColor: "transparent",
          // backdropPadding: {
          // x: 43,
          // y: 7,
          // },
          color: "white",
          font: {
            size: 14,
          },
          stepSize: 2, // Ajuste este valor conforme necessário
        },
        pointLabels: {
          color: "white",
          font: {
            size: 16,
            // weight: "bold"
          },
        },
        suggestedMin: 1,
        // suggestedMax: 14, // Ajuste este valor conforme necessário
      },
    },
    plugins: {
      ...baseOptions.plugins,
      datalabels: {
        display: false,
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
        // padding: 12, // Aumenta o espaçamento dos rótulos de dados
        // formatter: (value) => value.toString(),
      },
    },
  };

  const ChartContainer = ({ title, children }: any) => (
    <div className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col h-[600px]">
      <h2 className="text-2xl font-semibold text-center mb-4 text-white">
        {title}
      </h2>
      <div className="flex-grow relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <ChartContainer title="Processadores">
        <ChartWrapper
          type="bar"
          data={cpuModelChart}
          options={barOptions("x")}
        />
      </ChartContainer>

      <ChartContainer title="Equipamentos Não Inventariados">
        <ChartWrapper type="bar" data={barData} options={barOptions("y")} />
      </ChartContainer>

      <ChartContainer title="Horas de Computadores Ligados">
        <ChartWrapper type="line" data={lineData} options={lineOptions} />
      </ChartContainer>

      <ChartContainer title="Computadores por Categoria">
        <ChartWrapper
          type="doughnut"
          data={pieData}
          options={doughnutOptions}
        />
      </ChartContainer>

      <ChartContainer title="Computadores por Sistema">
        <ChartWrapper
          type="doughnut"
          data={systemOperationData}
          options={doughnutOptions}
        />
      </ChartContainer>

      <ChartContainer title="Computadores por Fabricante">
        <ChartWrapper
          type="polarArea"
          data={brandChart}
          options={polarOptions}
        />
      </ChartContainer>
      <ChartContainer title="Softwares por Categoria">
        <ChartWrapper
          type="doughnut"
          data={categorySoftwareData}
          options={doughnutOptions}
        />
      </ChartContainer>

      <ChartContainer title="Principais Softwares">
        <ChartWrapper type="radar" data={softwareData} options={radarOptions} />
      </ChartContainer>

      <ChartContainer title="Armazenamento de Discos">
        <ChartWrapper
          type="bar"
          data={diskTotalChart}
          options={barOptionsDisk("Disco", true)}
        />
      </ChartContainer>

      <ChartContainer title="Memória RAM">
        <ChartWrapper
          type="bar"
          data={memoryTotalChart}
          options={barOptionsDisk("Memória", false)}
        />
      </ChartContainer>
    </div>
  );
};

export default Dashboard;
