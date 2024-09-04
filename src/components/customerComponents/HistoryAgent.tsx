import React, { FC, useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  Check,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  Users,
  ReplaceIcon,
  Laptop,
  Clock,
} from "lucide-react";
import requestWithToken from "@/utils/request";

const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case "added":
      return <Check className="text-green-500" />;
    case "removed":
      return <AlertCircle className="text-red-500" />;
    case "change":
      return <AlertCircle className="text-yellow-500" />;
    case "replaced":
      return <ReplaceIcon className="text-purple-500" />;
    default:
      return null;
  }
};

const renderValue = (value: any): React.ReactNode => {
  if (value === null || value === undefined) {
    return <span className="text-gray-400">Nulo</span>;
  }
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside">
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    }
    return (
      <div className="pl-4 border-l-2 border-gray-600 dark:border-gray-300">
        {Object.entries(value).map(([key, val]) => (
          <div key={key} className="mb-1">
            <span className="font-medium">{key}: </span>
            {renderValue(val)}
          </div>
        ))}
      </div>
    );
  }
  return String(value);
};

const DataItem: React.FC<{
  label: string;
  oldValue: any;
  newValue: any;
  status: string;
}> = ({ label, oldValue, newValue, status }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-2">
      <span className="font-medium text-lg">{label}:</span>
      <StatusIcon status={status} />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <span className="text-lg text-gray-500">Valor Anterior:</span>
        <div className="mt-1 text-lg">{renderValue(oldValue)}</div>
      </div>
      <div>
        <span className="text-lg text-gray-500">Novo Valor:</span>
        <div className="mt-1 text-lg">{renderValue(newValue)}</div>
      </div>
    </div>
  </div>
);

const Section: React.FC<{
  title: string;
  icon: React.ReactNode;
  data: any[];
}> = ({ title, icon, data }) => {
  if (!data || data.length === 0 || Object.keys(data[0]).length <= 0)
    return null;
  // data.map((item, index) => {
  //   console.log(item.status);
  // });
  return (
    <div className="p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        {icon} {title}
      </h2>
      {data.map((item, index) => {
        if (item?.path && typeof item.path === "string") {
          // if (item.path === "") {
          //   console.log(item.path);
          // }
          const pathParts = item.path?.split(".");

          //   const label = pathParts[pathParts.length - 1]
          //     .replace(/([A-Z])/g, " $1")
          //     .toLowerCase();
          return (
            <DataItem
              key={index}
              label={pathParts[0] + (pathParts[1] ? " - " + pathParts[1] : "")}
              oldValue={item.oldValue}
              newValue={item.newValue}
              status={item.status}
            />
          );
        }
      })}
    </div>
  );
};

const HistoryEntry: FC<{ entry: any; index: number }> = ({ entry, index }) => {
  const sections = [
    {
      title: "Sistema",
      icon: <Laptop className="mr-2" />,
      data: entry.inventoryGeneral?.filter((item: any) =>
        item.path?.startsWith("system")
      ),
    },
    {
      title: "CPU e Memória",
      icon: <Cpu className="mr-2" />,
      data: entry.inventoryGeneral?.filter(
        (item: any) =>
          item.path?.startsWith("cpu") || item.path?.startsWith("memory")
      ),
    },
    {
      title: "Periféricos",
      icon: <Monitor className="mr-2" />,
      data: entry.peripherals,
    },
    {
      title: "Usuários e Identificadores",
      icon: <Users className="mr-2" />,
      data: entry.usersAndIdentifiers,
    },
    { title: "Rede", icon: <Network className="mr-2" />, data: entry.network },
    {
      title: "Armazenamento",
      icon: <HardDrive className="mr-2" />,
      data: entry.storage,
    },
  ];
  // entry.storage.map((item: any, index: any) => {
  //   console.log(item, index);
  // });

  // if (["storage[0]", "storage[1]", "storage[3]"].includes(item.path)) {
  //   console.log()
  // }

  return (
    <div className="border-l-2 border-blue-500 pl-4 mb-8">
      <div className="flex items-center mb-4">
        <Clock className="mr-3 mt-1 text-blue-500" />
        <span className="text-2xl font-semibold p-2 border-b-2 border-blue-500">
          {new Date(entry.createdAt).toLocaleString()}
        </span>
      </div>
      {sections.map((section, sectionIndex) => (
        <Section
          key={`${index}-${sectionIndex}`}
          title={section.title}
          icon={section.icon}
          data={section.data}
        />
      ))}
    </div>
  );
};

const HistoryAgent: FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await requestWithToken.get(`/inventory/history/${id}`);
      if (result.data) {
        setData(result.data);
      }
    } catch (error: any) {
      console.error("Erro ao buscar os dados do agente:", error.message);
      setError(
        "Falha ao carregar o histórico. Por favor, tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div className="p-6 text-center">Carregando...</div>;
  }

  if (error) {
    return <div className="p-6 text-2xl text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 min-h-screen w-full max-w-screen-2xl">
      {/* <h1 className="text-3xl font-bold mb-6">
        Histórico de Monitoramento do Sistema
      </h1> */}
      {data.length === 0 ? (
        <p className="text-center">Nenhum histórico disponível.</p>
      ) : (
        data.map((entry, index) => (
          <main key={entry._id}>
            <HistoryEntry entry={entry} index={index} />
            <div className="border-t-2 border-zinc-700 dark:border-neutral-100 my-6"></div>
          </main>
        ))
      )}
    </div>
  );
};

export default HistoryAgent;
