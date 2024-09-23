import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import { data, historyData } from "./mock";

const Charts = ({ datas }: any) => {
  const cpuRamBarsRef = useRef<Chart | null>(null);
  const diskSpacePieRef = useRef<any>(null);
  console.log(datas);

  // Labels para o eixo X
  const labels = historyData.map((values) => `${values.day}`);

  // Dados para os gráficos
  const historyCPUUsage = historyData.map((data) => data.cpu_usage);
  const historyRAMUsage = historyData.map((data) => data.ram_usage);
  const historyCPUTemperature = historyData.map((data) => data.cpu_temperature);
  const historyDiskSpace = historyData.map(
    (data) => (data.free_disk_space / data.total_disk_space) * 100
  );
  /* TODO - Criar uma request que retorne os seguites campos
    cpu_usage: 70,
    ram_usage: 92,
    cpu_temperature: 85,
    disk_health: 60,
    free_disk_space: 120,
    total_disk_space: 240,
    day: "Dom",
  */

  useEffect(() => {
    const getColor = (value: number) => {
      let red, green, blue;

      if (value < 50) {
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
      cpuRamBarsRef.current.destroy();
    }
    cpuRamBarsRef.current = new Chart(cpuRamBarsCtx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "CPU Usage (%)",
            data: historyCPUUsage,
            backgroundColor: historyCPUUsage.map((value) => getColor(value)),
            borderColor: historyCPUUsage.map(() => "transparent"),
            borderWidth: 1,
          },
          {
            label: "RAM Usage (%)",
            data: historyRAMUsage,
            backgroundColor: historyRAMUsage.map((value) => getColor(value)),
            borderColor: historyRAMUsage.map(() => "transparent"),
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

    // Disk Space Pie Chart
    const diskSpacePieCtx = document.getElementById(
      "diskSpacePie"
    ) as HTMLCanvasElement;
    if (diskSpacePieRef.current) {
      diskSpacePieRef.current.destroy();
    }
    diskSpacePieRef.current = new Chart(diskSpacePieCtx, {
      type: "pie",
      data: {
        labels: ["Free Space", "Used Space"],
        datasets: [
          {
            data: [
              data.free_disk_space,
              data.total_disk_space - data.free_disk_space,
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
      }
      if (diskSpacePieRef.current) {
        diskSpacePieRef.current.destroy();
      }
    };
  }, [labels, historyCPUUsage, historyRAMUsage]);

  // Gauge options
  const gaugeOptions = {
    minValue: 0,
    maxValue: 100,
    // arcPadding: 0.08,
    // cornerRadius: 3,
    // arcsLength: [0.3, 0.5, 0.2],
    nrOfLevels: 20,
    colors: ["#FF5F6D", "#7DDA58"],
    arcWidth: 0.3,
  };

  return (
    <div className="text-center max-w-screen-xl mx-auto">
      <div className="flex flex-wrap justify-between mb-6 ">
        <div>
          <p className="font-bold text-2xl">Temperatura CPU</p>
          <GaugeChart
            style={{ width: 285 }}
            id="cpuTemperatureGauge"
            percent={data.cpu_temperature / 100}
            {...gaugeOptions}
          />
        </div>
        <div>
          <p className="font-bold text-2xl">Uso de Memória</p>
          <GaugeChart
            style={{ width: 285 }}
            id="memGabage"
            percent={data.ram_usage / 100}
            {...gaugeOptions}
          />
        </div>
        <div>
          <p className="font-bold text-2xl">Uso de CPU</p>
          <GaugeChart
            style={{ width: 285 }}
            id="cpuUsage"
            percent={data.cpu_usage / 100}
            {...gaugeOptions}
          />
        </div>
        <div>
          <p className="font-bold text-2xl">Uso de Disco</p>
          <GaugeChart
            style={{ width: 285 }}
            id="diskUsage"
            percent={data.free_disk_space / data.total_disk_space}
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
              title: {
                display: false,
                text: "Users Gained between 2016-2020",
              },
              legend: {
                display: true,
              },
            },
          }}
          className="h-[1200px]"
        />
      </div>
    </div>
  );
};

export default Charts;
