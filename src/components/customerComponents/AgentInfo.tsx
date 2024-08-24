import { AgentInventoryType } from "@/utils/types/types";
import { FC } from "react";

export const mockAgentData = {
  inventoryHardware: {
    motherboard: {
      manufacturer: "ASUS",
      model_extend: "ROG STRIX B550-F GAMING",
      model: "B550-F",
    },
    cpu: {
      model: "AMD Ryzen 7 5800X",
      architecture: "x86_64",
      cpu_freq: 3800,
      physical_cores: 8,
      logic_cores: 16,
    },
    memory: {
      total: 34359738368, // 32 GB em bytes
      available: 17179869184, // 16 GB em bytes
      used: 17179869184, // 16 GB em bytes
      percentage: 50,
    },
    system: {
      so: "Windows",
      version: "10 Pro",
      architecture: "64-bit",
      domain: "WORKGROUP",
      type_machine: "Desktop",
      hostname: "DESKTOP-ABC123",
      user_logged: "JohnDoe",
      last_update: "2024-08-23T10:30:00Z",
    },
    storage: {
      total: 1000204886016, // 1 TB em bytes
      used: 500102443008, // 500 GB em bytes
      available: 500102443008, // 500 GB em bytes
      percentage: 50,
    },
    network: {
      mac: "00:11:22:33:44:55",
      ip_public: "203.0.113.1",
      ipv4: "192.168.1.100",
      network: "Ethernet",
    },
  },
  periphericals: {
    keyboard: "Logitech G915 TKL",
    mouse: "Razer DeathAdder V2",
    monitors: ['Dell S2719DGF 27" 1440p 155Hz', 'LG 27UL500-W 27" 4K 60Hz'],
  },
};
const AgentInfo: FC<{ agent: AgentInventoryType }> = ({ agent }) => {
  const { inventoryHardware, periphericals } = agent;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Informações do Agente
      </h1> */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hardware</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">
              Placa Mãe
            </h3>
            <p>Fabricante: {inventoryHardware.motherboard.manufacturer}</p>
            <p>Modelo: {inventoryHardware.motherboard.model}</p>
            <p>
              Extensão do Modelo: {inventoryHardware.motherboard.model_extend}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">CPU</h3>
            <p>Modelo: {inventoryHardware.cpu.model}</p>
            <p>Arquitetura: {inventoryHardware.cpu.architecture}</p>
            <p>Frequência: {inventoryHardware.cpu.cpu_freq} MHz</p>
            <p>Núcleos Físicos: {inventoryHardware.cpu.physical_cores}</p>
            <p>Núcleos Lógicos: {inventoryHardware.cpu.logic_cores}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">Memória</h3>
            <p>
              Total:{" "}
              {(inventoryHardware.memory.total / 1024 / 1024 / 1024).toFixed(2)}{" "}
              GB
            </p>
            <p>
              Disponível:{" "}
              {(
                inventoryHardware.memory.available /
                1024 /
                1024 /
                1024
              ).toFixed(2)}{" "}
              GB
            </p>
            <p>
              Utilizada:{" "}
              {(inventoryHardware.memory.used / 1024 / 1024 / 1024).toFixed(2)}{" "}
              GB
            </p>
            <p>
              Porcentagem: {inventoryHardware.memory.percentage.toFixed(2)}%
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">
              Armazenamento
            </h3>
            <p>
              Total:{" "}
              {(inventoryHardware.storage.total / 1024 / 1024 / 1024).toFixed(
                2
              )}{" "}
              GB
            </p>
            <p>
              Utilizado:{" "}
              {(inventoryHardware.storage.used / 1024 / 1024 / 1024).toFixed(2)}{" "}
              GB
            </p>
            <p>
              Disponível:{" "}
              {(
                inventoryHardware.storage.available /
                1024 /
                1024 /
                1024
              ).toFixed(2)}{" "}
              GB
            </p>
            <p>
              Porcentagem: {inventoryHardware.storage.percentage.toFixed(2)}%
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Sistema</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p>SO: {inventoryHardware.system.so}</p>
          <p>Versão: {inventoryHardware.system.version}</p>
          <p>Arquitetura: {inventoryHardware.system.architecture}</p>
          <p>Domínio: {inventoryHardware.system.domain}</p>
          <p>Tipo de Máquina: {inventoryHardware.system.type_machine}</p>
          <p>Hostname: {inventoryHardware.system.hostname}</p>
          <p>Usuário Logado: {inventoryHardware.system.user_logged}</p>
          <p>Última Atualização: {inventoryHardware.system.last_update}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Rede</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p>MAC: {inventoryHardware.network.mac}</p>
          <p>IP Público: {inventoryHardware.network.ip_public}</p>
          <p>IPv4: {inventoryHardware.network.ipv4}</p>
          <p>Rede: {inventoryHardware.network.network}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Periféricos
        </h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p>Teclado: {periphericals.keyboard}</p>
          <p>Mouse: {periphericals.mouse}</p>
          <h3 className="text-lg font-medium mt-2 mb-1 text-gray-600">
            Monitores:
          </h3>
          <ul className="list-disc list-inside">
            {periphericals.monitors.map((monitor, index) => (
              <li key={index}>{monitor}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AgentInfo;
