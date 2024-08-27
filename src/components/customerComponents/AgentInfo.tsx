import { AgentInventoryType } from "@/utils/types/types";
import { FC } from "react";

const AgentInfo: FC<AgentInventoryType> = ({
  inventoryHardware,
  peripherals,
}) => {
  console.log("peripherals", peripherals);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1 text-gray-700">Hardware</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">
              Placa Mãe
            </h3>
            <p>Fabricante: {inventoryHardware.motherboard.manufacturer}</p>
            <p>Modelo: {inventoryHardware.motherboard.model}</p>
            <p>
              Extensão do Modelo: {inventoryHardware.motherboard.model_extend}
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">CPU</h3>
            <p>Modelo: {inventoryHardware.cpu.model}</p>
            <p>Arquitetura: {inventoryHardware.cpu.architecture}</p>
            <p>Frequência: {inventoryHardware.cpu.cpu_freq} MHz</p>
            <p>Núcleos Físicos: {inventoryHardware.cpu.physical_cores}</p>
            <p>Núcleos Lógicos: {inventoryHardware.cpu.logic_cores}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">Memória</h3>
            <p>Total: {inventoryHardware.memory.total.toFixed(2)} GB</p>
            <p>
              Disponível: {inventoryHardware.memory.available.toFixed(2)} GB
            </p>
            <p>Utilizada: {inventoryHardware.memory.used} GB</p>
            <p>
              Porcentagem: {inventoryHardware.memory.percentage.toFixed(2)}%
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-600">
              Armazenamento
            </h3>
            <p>Total: {inventoryHardware.storage.total.toFixed(2)} GB</p>
            <p>Utilizado: {inventoryHardware.storage.used.toFixed(2)} GB</p>
            <p>
              Disponível: {inventoryHardware.storage.available.toFixed(2)} GB
            </p>
            <p>
              Porcentagem: {inventoryHardware.storage.percentage.toFixed(2)}%
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h2 className="text-2xl font-semibold mb-1 text-gray-700">
              Sistema
            </h2>
            <p>SO: {inventoryHardware.system.so}</p>
            <p>Versão: {inventoryHardware.system.version}</p>
            <p>Arquitetura: {inventoryHardware.system.architecture}</p>
            <p>Domínio: {inventoryHardware.system.domain}</p>
            <p>Tipo de Máquina: {inventoryHardware.system.type_machine}</p>
            <p>Hostname: {inventoryHardware.system.hostname}</p>
            <p>Usuário Logado: {inventoryHardware.system.user_logged}</p>
            <p>Última Atualização: {inventoryHardware.system.last_update}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h2 className="text-2xl font-semibold mb-1 text-gray-700">Rede</h2>
            <p>MAC: {inventoryHardware.network.mac}</p>
            <p>IP Público: {inventoryHardware.network.ip_public}</p>
            <p>IPv4: {inventoryHardware.network.ipv4}</p>
            <p>Rede: {inventoryHardware.network.network}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h2 className="text-2xl font-semibold mb-1 text-gray-700">
              Periféricos
            </h2>
            <p>Teclado: {peripherals.keyboard.name}</p>
            <p>Mouse: {peripherals.mouse.name}</p>
            <h3 className="text-lg font-medium mt-2 mb-1 text-gray-600">
              Monitores:
            </h3>
            <ul className="list-disc list-inside">
              {peripherals.monitors.map((monitor, index) => (
                <li key={index}>{monitor.device_id}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1 text-gray-700">Sistema</h2>
        <div className="bg-gray-50 p-3 rounded-md">
          <p>SO: {inventoryHardware.system.so}</p>
          <p>Versão: {inventoryHardware.system.version}</p>
          <p>Arquitetura: {inventoryHardware.system.architecture}</p>
          <p>Domínio: {inventoryHardware.system.domain}</p>
          <p>Tipo de Máquina: {inventoryHardware.system.type_machine}</p>
          <p>Hostname: {inventoryHardware.system.hostname}</p>
          <p>Usuário Logado: {inventoryHardware.system.user_logged}</p>
          <p>Última Atualização: {inventoryHardware.system.last_update}</p>
        </div>
      </section> */}

      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1 text-gray-700">Rede</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p>MAC: {inventoryHardware.network.mac}</p>
          <p>IP Público: {inventoryHardware.network.ip_public}</p>
          <p>IPv4: {inventoryHardware.network.ipv4}</p>
          <p>Rede: {inventoryHardware.network.network}</p>
        </div>
      </section> */}
    </div>
  );
};

export default AgentInfo;
