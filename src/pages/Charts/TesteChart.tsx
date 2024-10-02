import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
// import { historyData } from "./mock";
import requestWithToken from "@/utils/request";
import { getDayOfWeek } from "@/utils/utils";

interface InterfaceData {
  cpu_usage: number | null;
  cpu_temp: number | null;
  ram_usage: number | null;
  free_disk_space: number | null;
  total_disk_space: number | null;
  day: "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab" | "Dom" | null;
}

export interface ChartsProps {
  data: InterfaceData;
  id: string;
}

const fetchData = async (id: string) => {
  try {
    const result = await requestWithToken.get(`/inventory/history/${id}`);
    if (result.data) {
      return result.data; // retorno dos dados da API
    }
  } catch (error: any) {
    console.error("Erro ao buscar os dados do agente:", error.message);
    throw new Error("Falha ao carregar o histórico.");
  }
};

const processHistoryData = (history: any) => {
  // Inicializa um array para armazenar os dados processados
  const processedDataArray: InterfaceData[] = [];

  // Itera sobre cada entrada de histórico
  history.forEach((itemsHistory: any) => {
    // Inicializa os valores para a entrada atual
    const processedData: InterfaceData = {
      cpu_usage: 0,
      cpu_temp: 0,
      ram_usage: 0,
      free_disk_space: 0,
      total_disk_space: 0,
      day: null,
    };

    // Mapeando valores do inventoryGeneral
    itemsHistory.inventoryGeneral.forEach((item: any) => {
      switch (item.path) {
        case "cpu.cpu_usage":
          processedData.cpu_usage = item.newValue.toFixed(0);
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
          processedData.free_disk_space = parseFloat(item.newValue);
          break;
        case "storage[0].total_space": // Ajuste caso o caminho seja diferente
          processedData.total_disk_space = parseFloat(item.newValue);
          break;
        default:
          break;
      }
    });

    // Adiciona os dados processados ao array
    processedDataArray.push(processedData);
  });

  // Retorna o array de dados processados
  return processedDataArray;
};

const Charts = ({ data, id }: ChartsProps) => {
  const cpuRamBarsRef = useRef<Chart | null>(null);
  const diskSpacePieRef = useRef<any>(null);
  const [historyData, setHistoryData] = useState<InterfaceData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      const historyData = await fetchData(id);
      // console.log(historyData);

      if (historyData) {
        const processed = processHistoryData(historyData);
        setHistoryData(processed);
        // if (processed) {
        // }
      }
    } catch (error: any) {
      setError(error.message || "Erro ao carregar os dados.");
    } finally {
      setLoading(false);
    }
  };

  // console.log(data);

  // Labels para o eixo X
  const labels = historyData?.map((values) => `${values.day}`);

  // Dados para os gráficos
  const historyCPUUsage =
    historyData?.map((dataItem) => dataItem.cpu_usage) || [];
  const historyRAMUsage =
    historyData?.map((dataItem) => dataItem.ram_usage) || [];
  const historyCPUTemperature =
    historyData?.map((dataItem) => dataItem.cpu_temp) || [];
  const historyDiskSpace =
    historyData?.map(
      (dataItem) =>
        (dataItem.free_disk_space || 0 / (dataItem.total_disk_space || 0)) * 100
    ) || [];

  useEffect(() => {
    loadData();

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

    // CPU and RAM Bars Chart
    const cpuRamBarsCtx = document.getElementById(
      "cpuRamBars"
    ) as HTMLCanvasElement;
    if (cpuRamBarsRef.current) {
      if (cpuRamBarsRef.current) {
        cpuRamBarsRef.current.destroy();
        // cpuRamBarsRef.current = null;
      }
    }

    // Disk Space Pie Chart
    const diskSpacePieCtx = document.getElementById(
      "diskSpacePie"
    ) as HTMLCanvasElement;
    if (diskSpacePieRef.current) {
      if (diskSpacePieRef.current) {
        diskSpacePieRef.current.destroy();
        // diskSpacePieRef.current = null;
      }
    }

    if (!cpuRamBarsCtx || !diskSpacePieCtx) {
      console.error("Canvas elements are missing");
      return;
    }

    cpuRamBarsRef.current = new Chart(cpuRamBarsCtx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "CPU Usage (%)",
            data: historyCPUUsage,
            backgroundColor: historyCPUUsage?.map((value) =>
              getColor(value || 0)
            ),
            borderColor: historyCPUUsage?.map(() => "transparent"),
            borderWidth: 1,
          },
          {
            label: "RAM Usage (%)",
            data: historyRAMUsage,
            backgroundColor: historyRAMUsage?.map((value) =>
              getColor(value || 0)
            ),
            borderColor: historyRAMUsage?.map(() => "transparent"),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    diskSpacePieRef.current = new Chart(diskSpacePieCtx, {
      type: "pie",
      data: {
        labels: ["Free Space", "Used Space"],
        datasets: [
          {
            data: [
              data.free_disk_space,
              data?.total_disk_space || 0 - (data?.free_disk_space || 0),
            ],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });

    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (cpuRamBarsRef.current) {
        cpuRamBarsRef.current.destroy();
        // cpuRamBarsRef.current = null;
      }
      if (diskSpacePieRef.current) {
        diskSpacePieRef.current.destroy();
        // diskSpacePieRef.current = null;
      }
    };
  }, [id, data]);

  // Gauge options
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

  // console.log(historyData);

  return (
    <div className="text-center max-w-screen-xl mx-auto">
      {loading && <div>Carregando...</div>}

      {/* Exibir mensagem de erro */}
      {error && <div>Erro: {error}</div>}
      {historyData && (
        <>
          <div className="flex flex-wrap justify-between mb-6 ">
            <div>
              <p className="font-bold text-2xl">Temperatura CPU</p>
              <GaugeChart
                style={{ width: 285 }}
                id="cpuTemperatureGauge"
                percent={data?.cpu_temp ? data?.cpu_temp / 100 : 0}
                {...gaugeOptions}
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Uso de Memória</p>
              <GaugeChart
                style={{ width: 285 }}
                id="memGabage"
                // percent={data?.ram_usage || 0 / 100}
                percent={data?.ram_usage ? data?.ram_usage / 100 : 0}
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
                  data?.total_disk_space
                    ? (data?.free_disk_space || 0) / data?.total_disk_space
                    : 0
                }
                {...gaugeOptions}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between h-96 mb-6 ">
            <canvas id="cpuRamBars" className="w-full md:w-1/2"></canvas>
            <canvas id="diskSpacePie" className="w-full md:w-1/2"></canvas>
          </div>
          <div className="w-full h-fit">
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "CPU Usage (%)",
                    data: historyCPUUsage,
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "RAM Usage (%)",
                    data: historyRAMUsage,
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "CPU Temperature (°C)",
                    data: historyCPUTemperature,
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Disk Space (Free/Total)",
                    data: historyDiskSpace,
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
