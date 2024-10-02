import { Pie, Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
} from "chart.js";
import { mockSoftwaresCategories } from "@/utils/mocks/mocks";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title
);

const generateRandomValue = () => Math.floor(Math.random() * 50) + 1;

const mapToGeneralCategories = (softwareCategories: {
  [key: string]: string;
}) => {
  const categoryMapping: { [key: string]: string } = {
    Navegador: "Navegadores",
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
  };

  return Object.entries(softwareCategories).reduce(
    (acc, [software, specificCategory]) => {
      const generalCategory = categoryMapping[specificCategory] || "Outros";
      acc[generalCategory] = (acc[generalCategory] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );
};

const aggregateCategories = (categories: { [key: string]: number }) =>
  Object.keys(categories).reduce((acc: { [key: string]: number }, category) => {
    acc[category] = (acc[category] || 0) + generateRandomValue();
    return acc;
  }, {});

// Exemplo de uso
// const mockSoftwaresCategories: { [key: string]: string } = {
//   Chrome: "Navegador",
//   Word: "Suíte de Escritório",
//   Photoshop: "Edição de Imagens",
//   Zoom: "Comunicação e Videoconferência",
//   WinRAR: "Compressão de Arquivos",
// };

const generalCategories = mapToGeneralCategories(mockSoftwaresCategories);
const categoryCount = aggregateCategories(generalCategories);

const Dashboard = () => {
  // Dados estáticos de exemplo
  const pieData = {
    labels: ["Notebook"],
    datasets: [
      {
        data: [12],
        backgroundColor: ["#007bff"],
        borderColor: ["#007bff"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Notebook"],
    datasets: [
      {
        label: "Não Inventariados",
        data: [4],
        backgroundColor: "#ff4d4f",
      },
    ],
  };

  const lineData = {
    labels: [
      "Jan/2024",
      "Feb/2024",
      "Mar/2024",
      "Abr/2024",
      "Mai/2024",
      "Jun/2024",
      "Jul/2024",
      "Ago/2024",
      "Set/2024",
      "Out/2024",
      "Nov/2024",
      "Dez/2024",
    ],
    datasets: [
      {
        label: "Horas de Computadores Ligados",
        data: [1133, 994, 1072, 1582, 1673, 948],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.3,
      },
    ],
  };

  const doughnutData = {
    labels: ["DELL", "ASUSTEK", "ACER", "SAMSUNG", "LENOVO"],
    datasets: [
      {
        data: [4, 4, 2, 1, 1],
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

  const softwareData = {
    labels: Object.keys(categoryCount),
    datasets: [
      {
        data: Object.values(categoryCount),
        backgroundColor: [
          "#007bff",
          "#ff4d4f",
          "#ffc107",
          "#28a745",
          "#6610f2",
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

  const options = {
    plugins: {
      //   datalabels: {
      //     color: "#fff", // Cor do texto
      //     formatter: (value: number, context: any) => {
      //       const total = context.dataset.data.reduce(
      //         (sum: number, val: number) => sum + val,
      //         0
      //       );
      //       const percentage = ((value / total) * 100).toFixed(2); // Calcular porcentagem
      //       return `${percentage}%`; // Retornar a porcentagem formatada
      //     },
      //   },
      //   legend: {
      //     display: true,
      //     position: "bottom",
      //   },
    },
  };

  return (
    <div className="p-8 grid grid-cols-3 gap-8">
      <div className=" shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Computadores por Classe
        </h2>
        <Doughnut data={pieData} />
      </div>

      <div className=" shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Equipamentos Não Inventariados
        </h2>
        <Bar data={barData} />
      </div>

      <div className=" shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Horas de Computadores Ligados
        </h2>
        <Line data={lineData} />
      </div>

      <div className=" shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Computadores por Fabricante
        </h2>
        <Doughnut data={doughnutData} />
      </div>

      <div className=" shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Softwares por Classe
        </h2>
        <Doughnut data={softwareData} options={options} />
      </div>

      {/* Adicione mais gráficos aqui conforme necessário */}
    </div>
  );
};

export default Dashboard;
