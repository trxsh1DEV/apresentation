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
  Title,
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
  history: any,
  totalDiskSpace: number
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
      ram_usage: 0,
      ram_total: 0,
      free_disk_space: 0,
      total_disk_space: 0,
      day: null,
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
      processedData.total_disk_space = totalDiskSpace;
      // processedData.ram_total = totalMemory;
    });

    // Adiciona os dados processados ao array
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
        const result = await requestWithToken.get(`/inventory/history/${id}`);
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

export const WrapperCharts = ({ data, id }: OmitHistoryData<ChartsProps>) => {
  const { data: historyData, isLoading, isError } = useHistoryData(id);

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

  if (!historyData) {
    return <div>Erro ao obter os dados</div>;
  }

  const processedData = processHistoryData(
    historyData,
    data?.total_disk_space || 1
    // data?.ram_total || 0
  );

  return <Charts data={data} historyData={processedData} id={id} />;
};

const Charts = ({ data, historyData }: ChartsProps) => {
  // console.log(data,historyData);

  const {
    labels,
    historyCPUUsage,
    historyRAMUsage,
    historyCPUTemperature,
    // historyDiskSpace, // Espaço livre em GB
    historyDiskSpacePercentage, // Espaço livre em porcentagem
  } = historyData.reduce(
    (acc: any, dataItem: any) => {
      acc.labels.push(`${dataItem.day}`);

      acc.historyCPUUsage.push(dataItem.cpu_usage);
      acc.historyRAMUsage.push(dataItem.ram_usage);
      acc.historyCPUTemperature.push(dataItem.cpu_temp);

      // Cálculo do espaço em disco em GB
      const freeDiskSpace = dataItem.free_disk_space || 0;
      const totalDiskSpace = dataItem.total_disk_space || 1; // Prevenir divisão por zero

      // Guardar o valor do espaço livre em GB
      // acc.historyDiskSpace.push(freeDiskSpace); // Em GB

      // Guardar a porcentagem de espaço livre em disco
      const freeDiskSpacePercentage = (freeDiskSpace / totalDiskSpace) * 100;
      acc.historyDiskSpacePercentage.push(Math.round(freeDiskSpacePercentage)); // Em %

      return acc;
    },
    {
      labels: [] as string[],
      historyCPUUsage: [] as number[],
      historyRAMUsage: [] as number[],
      historyCPUTemperature: [] as number[],
      // historyDiskSpace: [] as number[], // Espaço livre em GB
      historyDiskSpacePercentage: [] as number[], // Espaço livre em porcentagem
    }
  );

  const getColor = (value: number) => {
    let red, green, blue;

    if (value < 50) {
      if (value < 20) {
        value = 40;
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

  const barCpuData = {
    labels: labels, // Seu array de labels existente
    datasets: [
      {
        label: "Uso de CPU (%)",
        data: historyCPUUsage,
        customData: historyCPUUsage.map((value: number) => value), // Exemplo de valor personalizado
        backgroundColor: historyCPUUsage?.map((value: any) =>
          getColor(value || 0)
        ),
        borderColor: historyCPUUsage?.map(() => "transparent"),
        borderWidth: 1,
      },
      {
        label: "Uso de Memória (%)",
        data: historyRAMUsage,
        customData: historyRAMUsage.map(
          (value: number) => `${((value / 100) * data.ram_total).toFixed(2)} GB`
        ), // Exemplo de valor personalizado
        backgroundColor: historyRAMUsage?.map((value: any) =>
          getColor(value || 0)
        ),
        borderColor: historyRAMUsage?.map(() => "transparent"),
        borderWidth: 1,
      },
    ],
  };

  const barCpuOptions: any = {
    scales: {
      x: {
        // stacked: true,
        beginAtZero: true,
      },
      y: {
        // stacked: true,
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        // position: "bottom",
        labels: {
          color: "white",
          font: {
            size: 14,
          },
          // padding: 20,
        },
      },
      datalabels: {
        color: "white",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value: number) => {
          // const total = context.dataset.data.reduce(
          //   (sum: number, dataValue: number) => sum + dataValue,
          //   0
          // );
          // if (value > 0) {
          //   return value + "%";
          // }
          return value + "%";
          // return ""; // Retorna uma string vazia se o valor for 0 ou menor
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              if (label == "Uso de Memória (%)") {
                label = "Uso de Memória (GB)";
              }
              label += ": ";
            }
            if (context.parsed.y !== null) {
              // Exibe o valor personalizado ao invés da porcentagem
              const customValue = context.dataset.customData[context.dataIndex];
              label += customValue;
            }
            return label;
          },
        },
      },
    },
  };

  const barDiskData = {
    labels: ["Espaço Livre", "Espaço Usado"],
    datasets: [
      {
        data: [
          (data?.free_disk_space ?? 0) || 0,
          (data?.total_disk_space ?? 0) - (data?.free_disk_space ?? 0) || 0,
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const barDiskOptions: any = (value: number | string) => {
    return {
      plugins: {
        legend: {
          // position: "bottom",
          labels: {
            color: "white",
            font: {
              size: 14,
            },
            // padding: 20,
          },
        },
        datalabels: {
          color: "white",
          font: {
            weight: "bold",
            size: 14,
          },
        },
        title: {
          display: true,
          position: "bottom",
          text: `Tamanho Total: ${value}`,
        },
      },
    };
  };
  const gaugeOptions = {
    minValue: 0,
    maxValue: 100,
    // arcPadding: 0.08,
    // cornerRadius: 3,
    // arcsLength: [0.3, 0.5, 0.2],
    nrOfLevels: 20,
    colors: ["#7DDA58", "#FF5F6D"],
    // colors: ["#7DDA58", "#FFDD57", "#FF5F6D"], // Verde, Amarelo, Vermelho
    arcWidth: 0.3,
  };

  return (
    <div className="text-center max-w-screen-xl mx-auto">
      {/* {loading && <div>Carregando...</div>} */}

      {/* Exibir mensagem de erro */}
      {/* {error && <div>Erro: {error}</div>} */}
      {historyData && (
        <>
          <div className="flex flex-wrap justify-between mb-6 ">
            <div>
              <p className="font-bold text-2xl">Temperatura CPU</p>
              <GaugeChart
                style={{ width: 285 }}
                id="cpuTemperatureGauge"
                percent={data?.cpu_temp ? data?.cpu_temp / 100 : 0}
                formatTextValue={(val) => Number(val).toFixed(0) + "°C"}
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de Memória</p>
              <GaugeChart
                style={{ width: 285 }}
                id="memGabage"
                // percent={data?.ram_usage || 0 / 100}
                percent={
                  data?.ram_usage ? data?.ram_usage / data?.ram_total : 0
                }
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de CPU</p>
              <GaugeChart
                style={{ width: 285 }}
                id="cpuUsage"
                // percent={data.cpu_usage || 0 / 100}
                percent={data?.cpu_usage ? data?.cpu_usage / 100 : 0}
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de Disco</p>
              <GaugeChart
                style={{ width: 285 }}
                id="diskUsage"
                // percent={data?.free_disk_space || 0 / (data?.total_disk_space || 0)}
                percent={
                  (data?.total_disk_space - data?.free_disk_space) /
                  data?.total_disk_space
                }
                {...gaugeOptions}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between h-96 mb-6 ">
            <Bar data={barCpuData} options={barCpuOptions} />
            <Pie
              data={barDiskData}
              options={barDiskOptions(data?.total_disk_space)}
            />
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
                    borderWidth: 1,
                  },
                  {
                    label: "Uso de Memória (%)",
                    data: historyRAMUsage,
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Temperatura CPU (°C)",
                    data: historyCPUTemperature,
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Espaço Livre (%)",
                    data: historyDiskSpacePercentage,
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    // beginAtZero: true,
                  },
                },
                plugins: {
                  // title: {
                  //   display: false,
                  //   text: "Users Gained between 2016-2020",
                  // },
                  legend: {
                    display: true,
                  },
                },
              }}
              className="h-[1200px]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Charts;
