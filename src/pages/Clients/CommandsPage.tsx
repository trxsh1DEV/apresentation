import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import requestWithToken from "@/utils/request";
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/Context/ModalContext";
import TerminalConsole from "./TerminalConsole";

interface InterfaceCommandCard {
  name: string;
  description: string;
  command: string;
  onSend: any;
}

const commands = [
  {
    name: "IPCONFIG",
    description:
      "Exibe informações detalhadas sobre a configuração de rede do computador, incluindo endereço IP, máscara de sub-rede e gateway padrão.",
    command: "ipconfig /all",
  },
  {
    name: "Verificar Disco",
    description:
      "Verifica a integridade do disco rígido e corrige erros de sistema de arquivos.",
    command: "chkdsk C: /f",
  },
  {
    name: "Listar Processos",
    description:
      "Exibe uma lista de todos os processos em execução no sistema.",
    command: "tasklist",
  },
  {
    name: "Verificar Serviços",
    description: "Lista todos os serviços em execução no sistema.",
    command: "net start",
  },
  {
    name: "Exibir Informações do Sistema",
    description: "Exibe informações detalhadas sobre o sistema.",
    command: "systeminfo",
  },
  {
    name: "Exibir detalhes de disco",
    description:
      "Exibe detalhes do disco como modelo, nome, serialnumber e status",
    command: "wmic diskdrive get model,name,serialnumber,status",
  },
  {
    name: "Configurar IP Estático",
    description: "Define um endereço IP estático para uma interface de rede.",
    command:
      "netsh interface ipv4 set address name='Ethernet' static 192.168.1.10 255.255.255.0 192.168.1.1",
  },
  {
    name: "Limpar DNS",
    description: "Limpa o cache do resolvedor DNS.",
    command: "ipconfig /flushdns",
  },
  {
    name: "Pingar Endereço",
    description: "Verifica a conectividade com um endereço IP específico.",
    command: "ping 8.8.8.8",
  },
  // {
  //   name: "Verificar Status de Energia",
  //   description: "Exibe informações sobre o status de energia do sistema.",
  //   command:
  //     'powercfg /batteryreport /output "C:\\Windows\\Temp\\battery_report.html" && type C:\\Windows\\Temp\\battery_report.html',
  // },
  {
    name: "Ver Rotas de Rede",
    description: "Exibe a tabela de rotas do sistema.",
    command: "route print",
  },
  {
    name: "Desligar Computador",
    description: "Desliga o computador após um determinado tempo.",
    command: "shutdown /s /t 60",
  },
  {
    name: "Reiniciar Computador",
    description: "Reinicia o computador após um determinado tempo.",
    command: "shutdown /r /t 60",
  },
  {
    name: "Verificar Espaço em Disco",
    description: "Mostra o espaço livre e utilizado em todas as unidades.",
    command: "wmic logicaldisk get size,freespace,caption",
  },
  {
    name: "Verificar Firewall",
    description: "Mostra o status do firewall no sistema.",
    command: "netsh advfirewall show allprofiles",
  },
  {
    name: "Ver Adaptadores de Rede",
    description: "Lista todos os adaptadores de rede e suas configurações.",
    command: "netsh interface ipv4 show config",
  },
  {
    name: "Listar Drivers",
    description: "Exibe todos os drivers instalados no sistema.",
    command: "driverquery",
  },
  {
    name: "Exibir Tabela ARP",
    description: "Mostra a tabela de endereços IP e MAC do cache ARP.",
    command: "arp -a",
  },
  {
    name: "Verificar Arquivos do Sistema",
    description:
      "Verifica a integridade de todos os arquivos protegidos do sistema e repara arquivos com problemas.",
    command: "sfc /scannow",
  },
  {
    name: "Análise de Componentes do Sistema",
    description:
      "Verifica problemas de componentes do Windows e restaura arquivos corrompidos.",
    command: "DISM /Online /Cleanup-Image /RestoreHealth",
  },
  {
    name: "Rastrear Rota de Rede",
    description:
      "Mostra o caminho que um pacote percorre até chegar ao destino.",
    command: "tracert google.com",
  },
  {
    name: "Informações de Hardware",
    description: "Exibe informações detalhadas sobre o hardware do computador.",
    command: "msinfo32",
  },
  {
    name: "Criar Usuário",
    description:
      "Cria um novo usuário e o adiciona ao grupo de Administradores.",
    command:
      "net user NomeUsuario SenhaUsuario /add && net localgroup Administradores NomeUsuario /add",
  },
  // {
  //   "name": "Definir Senha de Usuário",
  //   "description": "Define uma nova senha para um usuário existente.",
  //   "command": "net user NomeUsuario NovaSenha"
  // },
  {
    name: "Liberar e Renovar IP",
    description:
      "Libera a configuração IP atual e solicita uma nova ao servidor DHCP.",
    command: "ipconfig /release && ipconfig /renew",
  },
  {
    name: "Verificar Portas Abertas",
    description:
      "Lista todas as portas TCP e UDP abertas e os processos associados.",
    command: "netstat -ab",
  },
  {
    name: "Histórico de Atualizações do Windows",
    description: "Mostra o histórico de atualizações instaladas no Windows.",
    command: "wmic qfe list brief /format:table",
  },
  {
    name: "Informações da BIOS",
    description: "Exibe informações detalhadas sobre a BIOS do sistema.",
    command: "wmic bios get manufacturer,name,version",
  },
  {
    name: "Verificar Integridade da Imagem do Windows",
    description:
      "Verifica se há corrupção na imagem do sistema operacional Windows.",
    command: "DISM /Online /Cleanup-Image /CheckHealth",
  },
  {
    name: "Listar Programas Inicializados",
    description:
      "Mostra uma lista de programas configurados para iniciar com o Windows.",
    command: "wmic startup get caption,command",
  },
  {
    name: "Verificar Uso de Memória",
    description: "Exibe informações detalhadas sobre o uso de memória RAM.",
    command: "wmic OS get FreePhysicalMemory,TotalVisibleMemorySize /Value",
  },
  {
    name: "Desativar Hibernação",
    description: "Desativa o recurso de hibernação e libera espaço em disco.",
    command: "powercfg -h off",
  },
  {
    name: "Limpar Arquivos Temporários",
    description:
      "Remove arquivos temporários do sistema para liberar espaço em disco.",
    command: "del /q/f/s %TEMP%\\*",
  },
  {
    name: "Verificar Erros de Rede",
    description:
      "Executa uma série de testes para diagnosticar problemas de rede.",
    command: "netsh winsock reset",
  },
  // Adicione mais comandos conforme necessário
];

const CommandCard = ({
  name,
  description,
  command,
  onSend,
}: InterfaceCommandCard) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <code className="bg-gray-100 p-2 rounded-md block text-zinc-800">
        {command}
      </code>
    </CardContent>
    <CardFooter>
      <Button onClick={() => onSend(command)}>Enviar Comando</Button>
    </CardFooter>
  </Card>
);

export const RemoteCommandPage = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const navigate = useNavigate();

  if (!clientId) {
    return <div>ID do agente não fornecido</div>;
  }

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="container mx-auto p-4">
      <Button onClick={handleBack} className="mb-4 py-2 px-12">
        Voltar
      </Button>
      <RemoteCommandInterface clientId={clientId} />
    </div>
  );
};

const RemoteCommandInterface = ({ clientId }: { clientId: string }) => {
  //   const [command, setCommand] = useState("");
  const [, setOutput] = useState<string>(""); // Armazena a saída do comando
  const openModal = useSetAtom(openModalAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(clientId);
  const handleSendCommand = async (command: string) => {
    setIsLoading(true);
    switch (command) {
      case "Criar Usuário":
        alert("oi");
        break;

      default:
        break;
    }
    try {
      const result = await requestWithToken.post("/sockets/send-command", {
        clientId,
        command,
      });
      setOutput(result.data);
      openModal({
        content: <TerminalConsole data={result.data} isLoading={false} />,
        title: "Resultado do Comando",
      });
    } catch (error: any) {
      openModal({
        content: (
          <TerminalConsole
            data={`Erro: ${error.message}`}
            isLoading={isLoading}
          />
        ),
        // size: "200",
        title: "Erro ao Executar Comando",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Interface de Comandos Remotos</h1>
      <ScrollArea className="h-[calc(100vh-150px)] w-full">
        {commands.map((cmd, index) => (
          <CommandCard
            key={index}
            name={cmd.name}
            description={cmd.description}
            command={cmd.command}
            onSend={handleSendCommand}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default RemoteCommandInterface;
