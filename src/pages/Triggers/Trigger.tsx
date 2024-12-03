import React, { useState, useEffect, useCallback } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Filter } from "lucide-react";
import { BASE_URL, requestWithToken } from "@/utils/request";
import { H1Custom } from "@/components/customerComponents/Customercomponents";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

interface Alert {
  name: string;
  isActive: boolean;
  parameter?: number;
}

const editableParameter = ["Consumo de CPU", "Consumo de RAM", "HD Sobrecarregado"];

const AlertTrigger: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const {toast} = useToast();

  const fetchAlerts = useCallback(async () => {
    try {
      const response = await requestWithToken.get(`${BASE_URL}/triggers`);
      if (!response?.data) {
        throw new Error("Falha ao buscar alertas da API");
      }
      const data = await response.data;
      setAlerts(data.triggers);
    } catch (err: Error | any) {
      console.error("Erro ao buscar alertas:", err.message);
      toast({
        title: "Falha",
        description: "Erro ao buscar alertas" + err.message,
        variant: "destructive"
      });
    }
  }, []);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  const toggleAlert = async (name: string) => {
    setAlerts((prevAlerts) => {
      const updatedAlerts = prevAlerts.map((alert) =>
        alert.name === name ? { ...alert, isActive: !alert.isActive } : alert
      );

      const updatedAlert = updatedAlerts.find((alert) => alert.name === name);
      if (updatedAlert) {
        requestWithToken
          .patch(`${BASE_URL}/triggers/${name}`, {
            isActive: updatedAlert.isActive,
          })
          .then(() => {
            toast({
              title: "Sucesso",
              description: "Alerta alterado com sucesso",
              variant: "success"
            });
          })
          .catch((error) => {
            console.error("Erro:", error.message);
            toast({
              title: "Falha",
              description: "Erro ao tentar alterar alerta" + error.message,
              variant: "destructive"
            });
          });
      }

      return updatedAlerts;
    });
  };

  const updateParameter = async (name: string, parameter: number) => {
    setAlerts((prevAlerts) => {
      const updatedAlerts = prevAlerts.map((alert) =>
        alert.name === name ? { ...alert, parameter } : alert
      );

      const updatedAlert = updatedAlerts.find((alert) => alert.name === name);
      if (updatedAlert) {
        requestWithToken
          .patch(`${BASE_URL}/triggers/${name}`, {
            parameter: updatedAlert.parameter,
          })
          .then(() => {
            toast({
              title: "Sucesso",
              description: "Parâmetro atualizado com sucesso",
              variant: "success"
            });
          })
          .catch((error) => {
            console.error("Erro:", error.message);
            toast({
              title: "Falha",
              description: "Erro ao tentar atualizar parâmetro do alerta" + error.message,
              variant: "destructive"
            });
          });
      }

      return updatedAlerts;
    });
  };

  return (
    <div className="p-4 bg-gray-900 text-white mx-auto min-w-max max-w-5xl">
      <H1Custom className="text-center mb-6">Configuração de Alertas</H1Custom>
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl">Nome</TableHead>
              <TableHead className="text-xl">Parâmetros</TableHead>
              <TableHead className="text-xl">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.name}>
                <TableCell className="text-lg">{alert.name}</TableCell>
                {/* <TableCell className="text-lg"> */}
                  {editableParameter.includes(alert.name) ? (
                   <TableCell>
                    <input
                    type="number"
                    min={1}
                    max={100}
                    // defaultValue={95}
                    value={alert?.parameter ?? 95}
                    disabled={!alert.isActive}
                    onChange={(e) => setAlerts((prevAlerts) =>
                      prevAlerts.map((a) =>
                        a.name === alert.name ? { ...a, parameter: Number(e.target.value) } : a
                      )
                    )}
                    onBlur={(e) => updateParameter(alert.name, Number(e.target.value))}
                    className="bg-gray-800 text-white p-2 rounded"
                  />
                  <span className="ml-2">%</span>
                   </TableCell>
                  ):(
                    <TableCell className="text-lg">{alert.parameter ?? ""}</TableCell>
                  )}
                {/* </TableCell> */}
                <TableCell className="text-lg">
                  <div className="flex items-center justify-between">
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AlertTrigger;