import React, { useState, useEffect, useCallback } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Filter } from "lucide-react";
import { BASE_URL, requestWithToken } from "@/utils/request";
import { H1Custom } from "@/components/customerComponents/Customercomponents";

interface Alert {
  name: string;
  isActive: boolean;
}

// const formatName = (displayName: string): string => {
//   return displayName
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/[^\w\s]/gi, "")
//     .toLowerCase()
//     .replace(/\s+/g, "_");
// };

const AlertTrigger: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const fetchAlerts = useCallback(async () => {
    try {
      const response = await requestWithToken.get(`${BASE_URL}/triggers`);
      if (!response?.data) {
        throw new Error("Falha ao buscar alertas da API");
      }
      const data = await response.data;
      setAlerts(data.triggers);
    } catch (err) {
      console.error("Erro ao buscar alertas:", err);
    }
  }, []);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  // const addNewAlert = (displayName: string) => {
  //   const newAlert: Alert = {
  //     display_name: displayName,
  //     name: formatName(displayName),
  //     isActive: true,
  //   };
  //   setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  // };

  const toggleAlert = async (name: string) => {
    setAlerts((prevAlerts) => {
      const updatedAlerts = prevAlerts.map((alert) =>
        alert.name === name ? { ...alert, isActive: !alert.isActive } : alert
      );

      // Encontre o alerta atualizado
      const updatedAlert = updatedAlerts.find((alert) => alert.name === name);
      if (updatedAlert) {
        // Faça a requisição PUT para a API
        requestWithToken
          .patch(`${BASE_URL}/triggers/${name}`, {
            isActive: updatedAlert.isActive,
          })
          .then((response) => {
            console.log("Alerta atualizado com sucesso", response.data);
          })
          .catch((error) => {
            console.error("Erro:", error);
          });
      }

      return updatedAlerts;
    });
  };

  return (
    <div className="p-4 bg-gray-900 text-white mx-auto min-w-max max-w-5xl">
      <H1Custom className="text-center mb-6">Configuração de Alertas</H1Custom>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.name}
            className="flex items-center justify-between bg-gray-800 p-3 rounded"
          >
            <span className="text-2xl">{alert.name}</span>
            <div className="flex items-center space-x-2">
              <span className="text-xl ml-4">
                {alert.isActive ? "Ativado" : "Desativado"}
              </span>
              <Toggle
                variant="outline"
                pressed={alert.isActive}
                onPressedChange={() => toggleAlert(alert.name)}
                aria-label={`Toggle ${alert.name}`}
                size={"lg"}
              >
                <Filter
                  className={`transition ${alert.isActive ? "text-green-500" : "text-red-500"}`}
                  size={28}
                />
              </Toggle>
            </div>
          </div>
        ))}
        {/* <Button>Adi</Button> */}
      </div>
    </div>
  );
};

export default AlertTrigger;
