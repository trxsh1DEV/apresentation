import React, { useState, useEffect, useCallback } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Filter } from "lucide-react";
import { BASE_URL, request } from "@/utils/request";

interface Alert {
  _id: string;
  display_name: string;
  name: string;
  isActive: boolean;
}

const formatName = (displayName: string): string => {
  return displayName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .replace(/\s+/g, "_");
};

const AlertTrigger: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const fetchAlerts = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/triggers/all`);
      if (!response.ok) {
        throw new Error("Falha ao buscar alertas da API");
      }
      const data = await response.json();
      console.log(data);
      setAlerts(data);
    } catch (err) {
      console.error("Erro ao buscar alertas:", err);
    }
  }, []);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  const addNewAlert = (displayName: string) => {
    const newAlert: Alert = {
      _id: String(alerts.length + 1),
      display_name: displayName,
      name: formatName(displayName),
      isActive: true,
    };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  const toggleAlert = async (id: string) => {
    setAlerts((prevAlerts) => {
      const updatedAlerts = prevAlerts.map((alert) =>
        alert._id === id ? { ...alert, isActive: !alert.isActive } : alert
      );

      // Encontre o alerta atualizado
      const updatedAlert = updatedAlerts.find((alert) => alert._id === id);
      console.log("new", updatedAlert);

      if (updatedAlert) {
        // Faça a requisição PUT para a API
        request
          .patch(`${BASE_URL}/triggers/${id}`, {
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
    <div className="p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Configuração de Alertas</h1>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert._id}
            className="flex items-center justify-between bg-gray-800 p-3 rounded"
          >
            <span>{alert.display_name}</span>
            <div className="flex items-center space-x-2">
              <span>{alert.isActive ? "Ativado" : "Desativado"}</span>
              <Toggle
                variant="outline"
                pressed={alert.isActive}
                onPressedChange={() => toggleAlert(alert._id)}
                aria-label={`Toggle ${alert.display_name}`}
              >
                <Filter
                  className={`h-4 w-4 transition text-gray-500 ${alert.isActive && "text-gray-100"}`}
                  size={20}
                />
              </Toggle>
            </div>
          </div>
        ))}
        <div>Add</div>
      </div>
    </div>
  );
};

export default AlertTrigger;
