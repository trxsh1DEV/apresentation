import { FC } from "react";
import { AgentInventoryType } from "@/utils/types/types";

const AgentInfo: FC<AgentInventoryType> = ({
  inventoryGeneral,
  peripherals,
}) => {
  return (
    <div className="mx-auto p-6 shadow-lg rounded-lg">
      <section className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-4 ">Hardware</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" p-4 rounded-md text-left">
            <h2 className="text-2xl font-medium mb-2 text-center text-zinc-800 dark:text-slate-50">
              Placa Mãe
            </h2>
            <p>Fabricante: {inventoryGeneral.motherboard.manufacturer}</p>
            <p>Modelo: {inventoryGeneral.motherboard.model}</p>
            <p>Modelo detalhado: {inventoryGeneral.motherboard.model_extend}</p>
            <p>BIOS: {inventoryGeneral.motherboard.bios}</p>
            <p>
              Data de lançamento da BIOS:{" "}
              {inventoryGeneral.motherboard.bios_release}
            </p>
          </div>

          <div className=" p-4 rounded-md text-left">
            <h2 className="text-2xl font-medium mb-2 text-center text-zinc-800 dark:text-slate-50">
              CPU
            </h2>
            <p>Modelo: {inventoryGeneral.cpu.model}</p>
            <p>Arquitetura: {inventoryGeneral.cpu.architecture}</p>
            <p>Frequência: {inventoryGeneral.cpu.cpu_freq} MHz</p>
            <p>Núcleos Físicos: {inventoryGeneral.cpu.physical_cores}</p>
            <p>Núcleos Lógicos: {inventoryGeneral.cpu.logic_cores}</p>
            {inventoryGeneral.cpu.cpu_temp && (
              <p>Temperatura: {inventoryGeneral.cpu.cpu_temp}°C</p>
            )}
          </div>

          <div className=" p-4 rounded-md text-left">
            <h2 className="text-2xl font-medium mb-2 text-center text-zinc-800 dark:text-slate-50">
              Memória
            </h2>
            <p>Total: {inventoryGeneral.memory.total.toFixed(2)} GB</p>
            <p>Disponível: {inventoryGeneral.memory.available.toFixed(2)} GB</p>
            <p>Utilizada: {inventoryGeneral.memory.used.toFixed(2)} GB</p>
            <p>Porcentagem: {inventoryGeneral.memory.percentage.toFixed(2)}%</p>
          </div>

          <div className=" p-4 rounded-md text-left">
            <h2 className="text-2xl font-medium mb-2 text-center text-zinc-800 dark:text-slate-50">
              Sistema
            </h2>
            <p>SO: {inventoryGeneral.system.so}</p>
            <p>Versão: {inventoryGeneral.system.version}</p>
            <p>Arquitetura: {inventoryGeneral.system.architecture}</p>
            <p>Domínio: {inventoryGeneral.system.domain}</p>
            <p>Tipo de Máquina: {inventoryGeneral.system.type_machine}</p>
            <p>
              Tempo ligado (Hoje): {inventoryGeneral.system.time_machine_on}{" "}
              Horas
            </p>
            <p>Hostname: {inventoryGeneral.system.hostname}</p>
            <p>Usuário Logado: {inventoryGeneral.system.user_logged}</p>
            <p>Última Atualização: {inventoryGeneral.system.last_update}</p>
            <p>
              Chave Windows:{" "}
              {inventoryGeneral.system.windows_key
                ? inventoryGeneral.system.windows_key
                : "N/A"}
            </p>
            <p>
              Secure Boot:{" "}
              {inventoryGeneral.system.secure_boot ? "Ativado" : "Desativado"}
            </p>
            <p>
              Data de Instalação do SO:{" "}
              {inventoryGeneral.system.data_install_so}
            </p>
            <p>Usuário Atual: {inventoryGeneral.system.user_logged}</p>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Nome</th>
                  <th className="border p-2">Grupo</th>
                </tr>
              </thead>
              <tbody>
                {inventoryGeneral.users.users_already_logged.administrators.map(
                  (item, index) => (
                    <tr key={index}>
                      <th className="border p-2">{item}</th>
                      <th className="border p-2">Administrador</th>
                    </tr>
                  )
                )}
                {inventoryGeneral.users.users_already_logged.users.map(
                  (item, index) => (
                    <tr key={index}>
                      <th className="border p-2">{item}</th>
                      <th className="border p-2">Usuário</th>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {inventoryGeneral.printers &&
            inventoryGeneral.printers.length > 0 && (
              <div className=" p-4 rounded-md text-left">
                <h2 className="text-2xl font-medium mb-2 text-center text-zinc-800 dark:text-slate-50">
                  Impressoras
                </h2>
                <ul>
                  {inventoryGeneral.printers.map((printer, index) => (
                    <li key={index}>{printer}</li>
                  ))}
                </ul>
              </div>
            )}

          {/* TABLES */}
          <div className="p-4 rounded-md text-left">
            <h2 className="text-2xl text-center font-medium mb-2">
              Armazenamento
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Disco</th>
                  <th className="border p-2">Letra</th>
                  <th className="border p-2">Identificador</th>
                  <th className="border p-2">Tamanho (GB)</th>
                  <th className="border p-2">Espaço disponível (GB)</th>
                  <th className="border p-2">Bitlocker</th>
                </tr>
              </thead>
              <tbody>
                {inventoryGeneral.storage.map((drive, index) => (
                  <tr key={index}>
                    <td className="border p-2">{drive.name}</td>
                    <td className="border p-2">
                      {drive?.letter?.split(":")[0]}
                    </td>
                    <td className="border p-2">XXXX-XXXX</td>
                    <td className="border p-2">
                      {drive.total.toFixed(1) + " GB"}
                    </td>
                    <td className="border p-2">
                      {drive.available.toFixed(1) + " GB"}
                    </td>
                    <td className="border p-2">
                      {drive.bitlocker ? "Ativado" : "Desativado"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Updated Peripherals section */}
          <div className="p-4 rounded-md">
            <h2 className="text-2xl font-medium mb-2">Periféricos</h2>
            <h3 className="text-lg mb-2">Monitores</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Dispositivo</th>
                  <th className="border p-2">Resolução</th>
                  <th className="border p-2">GPU</th>
                </tr>
              </thead>
              <tbody>
                {peripherals.monitors.map((monitor, index) => (
                  <tr key={index}>
                    <td className="border p-2">{monitor.device_id}</td>
                    <td className="border p-2">{monitor.resolution}</td>
                    <td className="border p-2">{monitor.gpu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="font-medium mt-4 text-lg mb-2">
              Outros Periféricos
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Tipo</th>
                  <th className="border p-2">Nome</th>
                  <th className="border p-2">ID do Dispositivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Teclado</td>
                  <td className="border p-2">{peripherals.keyboard.name}</td>
                  <td className="border p-2">
                    {peripherals.keyboard.device_id}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Mouse</td>
                  <td className="border p-2">{peripherals.mouse.name}</td>
                  <td className="border p-2">{peripherals.mouse.device_id}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Updated Network section */}
          <div className="p-4 rounded-md">
            <h2 className="text-2xl font-medium mb-2">Rede</h2>
            <h3 className="text-lg mb-2">Interface principal</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Adaptador</th>
                  <th className="border p-2">MAC</th>
                  <th className="border p-2">TCP/IP</th>
                  <th className="border p-2">Rede</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">
                    {inventoryGeneral.network.principal_interface.interface}
                  </td>
                  <td className="border p-2">
                    {inventoryGeneral.network.principal_interface.mac}
                  </td>
                  <td className="border p-2">
                    {inventoryGeneral.network.principal_interface.ipv4}
                  </td>
                  <td className="border p-2">
                    {inventoryGeneral.network.principal_interface.name}
                  </td>
                </tr>
                {/* You can add more network interfaces here if available in the data */}
              </tbody>
            </table>

            <h3 className="font-medium mt-4 text-lg mb-2">Outras interfaces</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Adaptador</th>
                  <th className="border p-2">MAC</th>
                  <th className="border p-2">TCP/IP</th>
                </tr>
              </thead>
              <tbody>
                {inventoryGeneral.network.interfaces.map((adaptor, index) => (
                  <tr key={index}>
                    <td className="border p-2">{adaptor.interface}</td>
                    <td className="border p-2">{adaptor.mac}</td>
                    <td className="border p-2">{adaptor.ipv4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-2xl mt-1">
              IP Público: {inventoryGeneral.network.public_ip}
            </p>
          </div>
          {/* FIM */}
        </div>
      </section>
    </div>
  );
};

export default AgentInfo;
