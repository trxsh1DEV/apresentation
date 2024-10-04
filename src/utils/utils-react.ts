import requestWithToken from "./request";

export const sendCommand = async (clientId: string, command: string) => {
  try {
    if (command.length < 1 || command == "" || command == "winget install ")
      return alert("Digite algo");
    console.log("oi");
    const result = await requestWithToken.post("/sockets/send-command", {
      clientId,
      command,
    });
    console.log(result.data);
  } catch (error: any) {
    console.error(
      `Error sending ${command} command:`,
      error?.response?.data.errors[0]
    );
  }
};
