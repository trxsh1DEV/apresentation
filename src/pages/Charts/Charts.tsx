// import Chart from "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
} from "chart.js";
import GaugeChart from "react-gauge-chart";
// import { historyData } from "./mock";
import requestWithToken from "@/utils/request";
import { getDayOfWeek } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { OmitHistoryData } from "@/utils/types/types";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { LoadingSpinner } from "@/components/ui/myIsLoading";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  ChartDataLabels
);

interface InterfaceData {
  cpu_usage: number;
  cpu_temp: number;
  ram_usage: number;
  ram_total: number;
  free_disk_space: number;
  total_disk_space: number;
  day: "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab" | "Dom" | null;
}

export interface ChartsProps {
  data: InterfaceData;
  id: string;
  historyData: InterfaceData[];
}

const processHistoryData = (
  history: any
  // totalDiskSpace: number
  // totalMemory: number
) => {
  // Inicializa um array para armazenar os dados processados
  const processedDataArray: InterfaceData[] = [];

  // Itera sobre cada entrada de histórico
  history.forEach((itemsHistory: any) => {
    // Inicializa os valores para a entrada atual
    const processedData: InterfaceData = {
      cpu_usage: 0,
      cpu_temp: 0,
      ram_total: 0,
      ram_usage: 0,
      free_disk_space: 0,
      total_disk_space: 0,
      day: null
    };

    // Mapeando valores do inventoryGeneral
    itemsHistory.inventoryGeneral.forEach((item: any) => {
      switch (item.path) {
        case "cpu.cpu_usage":
          processedData.cpu_usage = parseFloat(item.newValue) || 0; // Garantir conversão para número
          break;
        case "cpu.cpu_temp":
          processedData.cpu_temp = parseFloat(item.newValue);
          break;
        case "memory.percentage":
          processedData.ram_usage = parseFloat(item.newValue);
          break;
        case "system.last_update":
          processedData.day = getDayOfWeek(item.newValue); // Converte para o dia da semana
          break;
        default:
          break;
      }
    });

    // Mapeando valores do storage para o disco
    itemsHistory.storage.forEach((item: any) => {
      switch (item.path) {
        case "storage[0].used":
          processedData.free_disk_space = parseFloat(item.newValue) || 0;
          break;
        default:
          break;
      }
      // processedData.ram_total = totalMemory;
    });

    // Adiciona os dados processados ao array
    // processedData.total_disk_space = totalDiskSpace;
    processedDataArray.push(processedData);
  });

  // Retorna o array de dados processados
  return processedDataArray;
};

const useHistoryData = (id: string) => {
  return useQuery({
    queryKey: ["historyData", id],
    queryFn: async () => {
      try {
        const result = await requestWithToken.get(`/inventory/history/${id}?length=10`);
        return result.data;
      } catch (error: any) {
        throw new UnexpectedError("Falha ao buscar os dados: " + (error.response?.data?.message || error.message));
      }
    }
    // onError: (error: any) => {
    //   console.error('Erro ao buscar os dados do agente:', error.message);
    // },
  });
};

export const WrapperCharts = ({ data, id }: OmitHistoryData<ChartsProps>) => {
  const { data: historyData, isLoading, isError } = useHistoryData(id);

  if (isLoading) {
    return (
      <div>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner className="w-12 h-12" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Erro ao carregar os dados</div>;
  }

  if (!historyData) {
    return <div>Erro ao obter os dados</div>;
  }

  const processedData = processHistoryData(
    historyData
    // data?.total_disk_space || 1
    // data?.ram_total || 0
  );

  return <Charts data={data} historyData={processedData} id={id} />;
};

const Charts = ({ data, historyData }: ChartsProps) => {
  const {
    labels,
    historyCPUUsage,
    historyRAMUsage,
    historyCPUTemperature,
    // historyDiskSpace, // Espaço livre em GB
    historyDiskSpacePercentage // Espaço livre em porcentagem
  } = historyData.reduce(
    (acc: any, dataItem: any) => {
      acc.labels.push(`${dataItem.day}`);

      acc.historyCPUUsage.push(Math.round(dataItem.cpu_usage * 100) / 100);
      acc.historyRAMUsage.push(Math.round(dataItem.ram_usage * 100) / 100);
      acc.historyCPUTemperature.push(Math.round(dataItem.cpu_temp * 100) / 100);

      // Cálculo do espaço em disco em GB
      const freeDiskSpace = dataItem.free_disk_space || 0;
      const totalDiskSpace = data.total_disk_space || 1; // Prevenir divisão por zero
      // Guardar o valor do espaço livre em GB
      // acc.historyDiskSpace.push(freeDiskSpace); // Em GB
      // Guardar a porcentagem de espaço livre em disco
      acc.historyDiskSpacePercentage.push(((freeDiskSpace / totalDiskSpace) * 100).toPrecision(4)); // Em %

      return acc;
    },
    {
      labels: [] as string[],
      historyCPUUsage: [] as number[],
      historyRAMUsage: [] as number[],
      historyCPUTemperature: [] as number[],
      // historyDiskSpace: [] as number[], // Espaço livre em GB
      historyDiskSpacePercentage: [] as number[] // Espaço livre em porcentagem
    }
  );
  // console.log(historyData);

  const findAlternativeValue = (currentIndex: number, historyConsult: number[]): number => {
    // Busca um valor não-zero anterior
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (historyConsult[i] !== 0) {
        return historyConsult[i];
      }
    }

    // Se não encontrar um valor anterior, busca um valor posterior
    for (let i = currentIndex + 1; i < historyConsult.length; i++) {
      if (historyConsult[i] !== 0) {
        return historyConsult[i];
      }
    }

    // Se não encontrar nenhum valor não-zero, retorna 0
    return 0;
  };
  const getAlternativeValue = (value: number, context: any, historyConsult: number[]) => {
    if (value !== 0) return value;

    const currentIndex = context.dataIndex;
    return findAlternativeValue(currentIndex, historyConsult);
  };

  const formatMemoryValue = (value: number, ramTotal: number) => {
    return `${value}% (${((value / 100) * ramTotal).toFixed(2)} GB)`;
  };

  const getColor = (value: number) => {
    let red, green, blue;

    if (value < 50) {
      if (value < 20) {
        value = 20;
      }
      red = 0;
      green = 255 * (value / 50);
      blue = 0;
    } else if (value <= 80) {
      red = 255 * ((value - 50) / 30);
      green = 255;
      blue = 0;
    } else {
      red = 255;
      green = 255 - 255 * ((value - 80) / 20);
      blue = 0;
    }

    const alpha = Math.min(1, value / 20); // Limite máximo de opacidade em 1

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const barCpuAndMemoryData = {
    labels: labels, // Seu array de labels existente
    datasets: [
      {
        label: "Uso de CPU (%)",
        // data: historyCPUUsage,
        data: historyCPUUsage.map((value: any, index: any) => {
          if (value === 0) {
            // Encontra o valor anterior não-zero
            value = findAlternativeValue(index, historyCPUUsage);
          }
          return value;
        }),
        customData: historyCPUUsage.map((value: number) => value), // Exemplo de valor personalizado
        backgroundColor: historyCPUUsage?.map((value: number, index: number) => {
          if (value === 0) {
            value = findAlternativeValue(index, historyCPUUsage);
          }
          return getColor(value || 0); // Retorna a cor do valor atual
        }),
        // borderColor: historyCPUUsage?.map(() => "transparent"),
        borderWidth: 1
      },
      {
        label: "Uso de Memória (%)",
        // data: historyRAMUsage,
        data: historyRAMUsage.map((value: number, index: number) => {
          if (value === 0) {
            // Encontra o valor anterior não-zero
            value = findAlternativeValue(index, historyRAMUsage);
          }
          return value;
        }),
        customData: historyRAMUsage.map((value: number) => `${((value / 100) * data.ram_total).toFixed(2)} GB`), // Exemplo de valor personalizado
        // backgroundColor: historyRAMUsage?.map((value: any) =>
        //   getColor(value || 0)
        // ),
        backgroundColor: historyRAMUsage?.map((value: number, index: number) => {
          if (value === 0) {
            value = findAlternativeValue(index, historyRAMUsage);
          }
          return getColor(value || 0); // Retorna a cor do valor atual
        }),
        // borderColor: historyRAMUsage?.map(() => "transparent"),
        borderWidth: 1
      }
    ]
  };

  const barCpuAndMemoryOptions: any = {
    scales: {
      x: {
        // stacked: true,
        beginAtZero: true
      },
      y: {
        // stacked: true,
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      legend: {
        // position: "bottom",
        labels: {
          // color: "white",
          font: {
            size: 16
          }
        }
      },
      datalabels: {
        color: "white",
        font: {
          // weight: "bold",
          // size: 14,
        },
        textStrokeColor: "black", // Cor do contorno
        textStrokeWidth: 3, // Largura do contorno
        formatter: (value: number, context: any) => {
          const label = context.dataset.label || "";
          const historyConsult = label === "Uso de CPU (%)" ? historyCPUUsage : historyRAMUsage;
          const alternativeValue = getAlternativeValue(value, context, historyConsult);

          // if (label === "Uso de Memória (%)") {
          //   return formatMemoryValue(alternativeValue, data.ram_total);
          // }
          return `${alternativeValue}%`;
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            const value = context.parsed.y;
            const historyConsult = label === "Uso de CPU (%)" ? historyCPUUsage : historyRAMUsage;
            const alternativeValue = getAlternativeValue(value, context, historyConsult);

            if (label === "Uso de Memória (%)") {
              label = "Uso de Memória";
              return `${label}: ${formatMemoryValue(alternativeValue, data.ram_total)}`;
            }

            return `${label}: ${alternativeValue}%`;
          }
        }
      }
    }
  };

  const barDiskData = {
    labels: ["Espaço Livre", "Espaço Usado"],
    datasets: [
      {
        data: [
          (data?.free_disk_space ?? 0) || 0,
          ((data?.total_disk_space ?? 0) - (data?.free_disk_space ?? 0)).toPrecision(4) || 0
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1
      }
    ]
  };

  const barDiskOptions: any = (value: number | string) => {
    return {
      plugins: {
        legend: {
          // position: "bottom",
          labels: {
            // color: "white",
            font: {
              size: 16
            }
            // padding: 20,
          }
        },
        datalabels: {
          color: "white",
          font: {
            size: 14
          },
          textStrokeColor: "black", // Cor do contorno
          textStrokeWidth: 3 // Largura do contorno
        },
        title: {
          display: true,
          position: "bottom",
          text: `Tamanho Total: ${value}`
        }
      }
    };
  };
  const gaugeOptions = {
    minValue: 0,
    maxValue: 100,
    textColor: "#888",
    // arcPadding: 0.08,
    // cornerRadius: 3,
    // arcsLength: [0.3, 0.5, 0.2],
    nrOfLevels: 20,
    colors: ["#7DDA58", "#FF5F6D"],
    // colors: ["#7DDA58", "#FFDD57", "#FF5F6D"], // Verde, Amarelo, Vermelho
    arcWidth: 0.3
  };

  return (
    <div className="text-center max-w-screen-xl mx-auto">
      {/* {loading && <div>Carregando...</div>} */}

      {/* Exibir mensagem de erro */}
      {/* {error && <div>Erro: {error}</div>} */}
      {historyData && (
        <>
          <div className="flex flex-wrap justify-between mb-6">
            <div>
              <p className="font-bold text-2xl">Temperatura CPU</p>
              <GaugeChart
                style={{ width: 280 }}
                id="cpuTemperatureGauge"
                percent={data?.cpu_temp ? data?.cpu_temp / 100 : 0}
                formatTextValue={(val) => Number(val).toFixed(0) + "°C"}
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de Memória</p>
              <GaugeChart
                style={{ width: 280 }}
                id="memGabage"
                // percent={data?.ram_usage || 0 / 100}
                percent={data?.ram_usage ? data?.ram_usage / data?.ram_total : 0}
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de CPU</p>
              <GaugeChart
                style={{ width: 280 }}
                id="cpuUsage"
                // percent={data.cpu_usage || 0 / 100}
                percent={data?.cpu_usage ? data?.cpu_usage / 100 : 0}
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de Disco</p>
              <GaugeChart
                style={{ width: 280 }}
                id="diskUsage"
                // percent={data?.free_disk_space || 0 / (data?.total_disk_space || 0)}
                percent={(data?.total_disk_space - data?.free_disk_space) / data?.total_disk_space}
                {...gaugeOptions}
              />
            </div>
            {/* <div>
              <p className="font-bold text-2xl">Saúde do Disco</p>
              <GaugeChart
                style={{ width: 250 }}
                id="cpuTemperatureGauge"
                percent={data?.cpu_temp ? data?.cpu_temp / 100 : 0}
                formatTextValue={(val) => Number(val).toFixed(0) + "°C"}
                {...gaugeOptions}
              />
            </div> */}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between h-96 mb-6 ">
            <Bar data={barCpuAndMemoryData} options={barCpuAndMemoryOptions} />
            <Pie data={barDiskData} options={barDiskOptions(data?.total_disk_space)} />
          </div>
          <div className="w-full h-fit">
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Uso de CPU (%)",
                    data: historyCPUUsage,
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                    // datalabels: { // posso colocar as configurações abaixo em cada um dos objetos de datasets e cada um ter uma config
                    //   align: "top", // Move os labels para cima dos pontos
                    //   color: "white", // Cor dos valores
                    //   font: {
                    //     size: 12,
                    //     weight: "bold",
                    //   },
                    //   anchor: "end", // Controla a posição do rótulo
                    //   offset: -5, // Ajusta o deslocamento para empurrar o texto para cima
                    // },
                  },
                  {
                    label: "Uso de Memória (%)",
                    data: historyRAMUsage,
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                  },
                  {
                    label: "Temperatura CPU (°C)",
                    data: historyCPUTemperature,
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1
                  },
                  {
                    label: "Espaço Ocupado (%)",
                    data: historyDiskSpacePercentage,
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                  }
                ]
              }}
              options={{
                scales: {
                  x: {
                    ticks: {
                      // color: "white",
                      font: { size: 14 }
                    },
                    grid: { color: "rgba(204, 204, 204, 0.4)" }
                  },
                  y: {
                    ticks: {
                      // color: "white",
                      font: { size: 14 }
                    },
                    grid: { color: "rgba(204, 204, 204, 0.4)" }
                  }
                },
                elements: {
                  point: {
                    radius: 5
                  },
                  line: {
                    // tension: 0.2,
                  }
                },
                plugins: {
                  legend: {
                    display: true,
                    labels: {
                      // color: "white",
                      font: {
                        size: 15
                        // weight: "bold",
                      }
                    }
                  },
                  datalabels: {
                    display: true, // Ativa os rótulos de dados
                    align: "top",
                    anchor: "end",
                    color: "gray",
                    offset: -5, // Controla o espaçamento do valor acima dos pontos
                    // textStrokeColor: "white",
                    // textStrokeWidth: 1,
                    font: {
                      size: 14
                      // weight: "bold",
                    }
                  }
                }
              }}
              plugins={[ChartDataLabels]} // Adiciona o plugin de datalabels
              className="h-[1200px]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Charts;
