using Microsoft.Win32;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Sockets;
using System.ServiceProcess;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using SystemInfo;
using System.Configuration;

namespace InventoryWindowsService
{
    public partial class InventoryService : ServiceBase
    {
        private CancellationTokenSource _cts;
        //private static readonly string serverIp = "192.168.0.6";
        //private static readonly int serverPort = 7777;
        //private static readonly string END_OF_MESSAGE = "\n\n";
        private static readonly string serverIp = ConfigurationManager.AppSettings["ServerIp"];
        private static readonly int serverPort = int.Parse(ConfigurationManager.AppSettings["ServerPort"]);
        private static readonly string END_OF_MESSAGE = ConfigurationManager.AppSettings["EndOfMessage"]?.Replace("\\n", "\n");

        public InventoryService()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            _cts = new CancellationTokenSource();
            Task.Run(() => RunServiceAsync(_cts.Token));
        }

        protected override async void OnStop()
        {
            _cts.Cancel();
            await Task.Delay(5000); // Use await em vez de Thread.Sleep
        }

        private async Task RunServiceAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await RunClient(); // Não reconectar desnecessariamente
                }
                catch (Exception ex)
                {
                    EventLog.WriteEntry("InventoryService", $"Erro: {ex.Message}", EventLogEntryType.Error);
                    // Em caso de falha, aguarde alguns segundos antes de tentar reconectar
                    await Task.Delay(TimeSpan.FromSeconds(30), cancellationToken);
                }
            }
        }
        private static async Task RunClient()
        {
            //string uid = Registrya.ReadFromRegistry("identity") ?? RegistryAccess.WriteToRegistry(Guid.NewGuid().ToString());
            //string companyCode = RegistryAccess.ReadFromRegistry("company");
            string uid = "005ac5a6-2674-48c5-bb20-35412866e60d";
            string companyCode = "E0G1-K4A3";

            if (string.IsNullOrEmpty(uid))
                throw new ArgumentException("UID não encontrado no registro.");
            if (string.IsNullOrEmpty(companyCode))
                throw new ArgumentException("companyCode não encontrado no registro.");
            try
            {
                using var client = new TcpClient();
                await client.ConnectAsync(serverIp, serverPort);
                using var stream = client.GetStream();
                string dataFull = $"uid={uid}&companyCode={companyCode}{END_OF_MESSAGE}";
                byte[] data = Encoding.UTF8.GetBytes(dataFull);
                await stream.WriteAsync(data, 0, data.Length);
                using var cts = new CancellationTokenSource();
                await StartCollectTask(uid, companyCode, cts.Token);
                byte[] buffer = new byte[client.ReceiveBufferSize];
                while (!cts.Token.IsCancellationRequested)
                {
                    try
                    {
                        int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length, cts.Token);
                        if (bytesRead == 0) break;
                        string command = Encoding.UTF8.GetString(buffer, 0, bytesRead).Trim().ToLower();
                        string result = "";
                        switch (command)
                        {
                            case "shutdown_now":
                                Shutdown();
                                result = "Desligamento iniciado.";
                                break;
                            case "get_inventory":
                                await StartCollect(uid, companyCode);
                                result = "Coleta de inventário iniciada.";
                                break;
                            case "active_bitlocker":
                                ActiveBitlocker();
                                result = "Ativação do Bitlocker iniciada.";
                                break;
                            case "get_users_domain":
                                result = GetDomainUsers();
                                break;
                            case "quit":
                                cts.Cancel();
                                result = "Encerrando conexão.";
                                break;
                            case "winget_install":
                                EventLog.WriteEntry("InventoryService", "Install winget", EventLogEntryType.Information);
                                result = "Instalação do winget iniciada.";
                                break;
                            case "remove_agent":
                                result = RunCommand("wmic product where name='nameApp' call uninstall");
                                break;
                            default:
                                result = RunCommand(command);
                                break;
                        }

                        // Enviar o resultado de volta para o servidor
                        if (!string.IsNullOrEmpty(result))
                        {
                            byte[] response = Encoding.UTF8.GetBytes(result + END_OF_MESSAGE);
                            await stream.WriteAsync(response, 0, response.Length);
                        }
                    }
                    catch (IOException)
                    {
                        await Task.Delay(5000, cts.Token);
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                EventLog.WriteEntry("InventoryService", $"Erro ao executar: {ex.Message}", EventLogEntryType.Error);
            }
        }

        // Método auxiliar para executar comandos e capturar a saída
        //private static async Task<string> RunCommandAsync(string command)
        //{
        //    return await Task.Run(() =>
        //    {
        //        using var process = new Process
        //        {
        //            StartInfo = new ProcessStartInfo
        //            {
        //                FileName = "cmd.exe",
        //                Arguments = $"/c {command}",
        //                RedirectStandardOutput = true,
        //                RedirectStandardError = true,
        //                UseShellExecute = false,
        //                CreateNoWindow = true
        //            }
        //        };

        //        process.Start();
        //        string output = process.StandardOutput.ReadToEnd();
        //        string error = process.StandardError.ReadToEnd();
        //        process.WaitForExit();

        //        if (process.ExitCode != 0)
        //        {
        //            return $"Erro ao executar o comando: {error}";
        //        }
        //        return output;
        //    });
        //}

        private static string RunCommand(string command)
        {
            using var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "cmd.exe",
                    Arguments = $"/c {command}",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };

            process.Start();
            string output = process.StandardOutput.ReadToEnd();
            string error = process.StandardError.ReadToEnd();
            process.WaitForExit();

            if (process.ExitCode != 0)
            {
                return $"Erro ao executar o comando: {error}";
            }
            return output;
        }

        static Task StartCollectTask(string uid, string companyCode, CancellationToken token)
        {
            return Task.Run(async () =>
            {
                Random random = new Random();
                //int interval = 3 * 60 * 60 + random.Next(1, 60) * 60;
                int baseInterval = 3 * 60 * 60; // 3 horas
                int jitter = random.Next(0, 60 * 60); // Jitter de até 1 hora
                int interval = baseInterval + jitter;

                while (!token.IsCancellationRequested)
                {
                    await StartCollect(uid, companyCode);
                    await Task.Delay(interval * 1000, token);
                }
            });
        }

        static async Task StartCollect(string uid, string companyCode)
        {
            string FileName = "general_data.json";
            EventLog.WriteEntry("InventoryService", $"Coletando inventário para UID: {uid} e CompanyCode: {companyCode}", EventLogEntryType.Information);

            try
            {
                await Collector.InitializeIpInfoAsync();
                // Paralelizar a coleta de dados
                var generalInventoryTask = Task.Run(() => new Dictionary<string, object>
        {
            { "inventoryGeneral", new Dictionary<string, object>
                {
                    { "cpu", Collector.CollectCpuInfo() },
                    { "memory", Collector.CollectMemoryInfo() },
                    { "system", Collector.GetSoInfo() },
                    { "storage", Collector.GetDiskInfo() },
                    { "users", new Dictionary<string, object>
                        {
                            { "users_can_login", Collector.UsersCanLogin() },
                            { "users_already_logged", Collector.GetLocalGroupUsers() }
                        }
                    },
                    { "motherboard", Collector.GetMotherboard() },
                    { "network", Collector.GetNetworkInfo() },
                    { "printers", Collector.GetInstalledPrinters() }
                }
            },
            { "location", Collector.Geolocation() },
            { "peripherals", Collector.GetDeviceInfo() },
            { "identifiers", Collector.CollectHardwareIdentifiers() },
            { "client", uid },
            { "companyCode", companyCode }
        });

                var processesTask = Task.Run(() => ProcessCollector.ListProcesses());
                var softwareTask = Task.Run(() => SoftwareCollector.GetInstalledSoftware());

                await Task.WhenAll(generalInventoryTask, processesTask, softwareTask);

                var generalInventory = generalInventoryTask.Result;
                var processes = processesTask.Result;
                var installedSoftware = softwareTask.Result;

                var processInventory = new Dictionary<string, object>
        {
            { "processes", processes },
            { "host_ref", uid },
            { "companyCode", companyCode }
        };

                var softwareInventory = new Dictionary<string, object>
        {
            { "software", installedSoftware },
            { "host_ref", uid },
            { "companyCode", companyCode }
        };

                var previousGeneralData = Utils.LoadJsonFromFile<Dictionary<string, object>>(FileName);

                if (previousGeneralData != null)
                {

                    // Converter previousGeneralData para JObject
                    var previousGeneralDataJObject = JObject.FromObject(previousGeneralData);

                    // Criar o objeto de requisição
                    var requestBody = new
                    {
                        inventoryGeneral = generalInventory,
                        previousGeneralData = previousGeneralDataJObject,
                        uid,
                        companyCode
                    };

                    //    var tasks = new[]
                    //    {
                    //    HttpRequestHelper.SendPostRequestAsync("/inventory/general", generalInventory),
                    //    HttpRequestHelper.SendPostRequestAsync("/software/inventory", softwareInventory),
                    //    HttpRequestHelper.SendPostRequestAsync("/process/inventory", processInventory),
                    //};

                    //    await Task.WhenAll(tasks);
                    await HttpRequestHelper.SendPostRequestAsync("/inventory/general/history/test", requestBody);
                }
                else
                {
                    var clientData = new Dictionary<string, object>
                    {
                        { "uid", uid },
                        { "companyCode", companyCode }
                    };
                    await HttpRequestHelper.SendPostRequestAsync("/clients", clientData);
                }

                var tasks = new[]
                {
                    HttpRequestHelper.SendPostRequestAsync("/inventory/general", generalInventory),
                    HttpRequestHelper.SendPostRequestAsync("/software/inventory", softwareInventory),
                    HttpRequestHelper.SendPostRequestAsync("/process/inventory", processInventory)
                };

                await Task.WhenAll(tasks);
                Utils.SaveJsonToFile(generalInventory, FileName);

                EventLog.WriteEntry("InventoryService", "Dados de inventário enviados com sucesso.", EventLogEntryType.Information);
            }
            catch (Exception ex)
            {
                EventLog.WriteEntry("InventoryService", $"Erro: {ex.Message}", EventLogEntryType.Error);
            }
        }

        static void Shutdown()
        {
            EventLog.WriteEntry("InventoryService", "Shutting down...", EventLogEntryType.Information);
            Process.Start("shutdown", "/s /t 0");
        }

        static void ActiveBitlocker()
        {
            EventLog.WriteEntry("InventoryService", "Activating Bitlocker...", EventLogEntryType.Information);
            // Implementar a ativação do Bitlocker
        }

        static string GetDomainUsers()
        {
            EventLog.WriteEntry("InventoryService", "Getting domain users...", EventLogEntryType.Information);
            // Implementar lógica de obtenção de usuários de domínio
            return "domain_user_1, domain_user_2";
        }

    }
}