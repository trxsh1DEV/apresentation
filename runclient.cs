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
                //var collectTask = StartCollectTask(uid, companyCode, cts.Token);
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