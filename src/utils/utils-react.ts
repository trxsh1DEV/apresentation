import requestWithToken from "./request";

export const sendCommand = async (clientId: string, command: string) => {
  try {
    if (command.length < 1 || command == "") return "Digite algum comando";

    console.log(clientId, command);
    const result = await requestWithToken.post("/sockets/send-command", {
      clientId,
      command,
    });
    return result.data;
  } catch (error: any) {
    // console.error(
    //   `Error sending ${command} command:`,
    //   error?.response?.data.errors[0]
    // );
    return error.message;
  }
};
