const obj = {
  '"C:\\Program Files\\7-Zip\\Uninstall.exe"': true,
  '"C:\\Program Files\\AMD\\CIM\\BIN64\\AMDSoftwareInstaller.exe" /EXPRESS_UNINSTALL /IGNORE_UPGRADE /ON_REBOOT_MESSAGE:NO': true,
};

// Obter as chaves e remover as aspas
const commandsArray = Object.keys(obj).map((cmd) => cmd.replace(/"/g, ""));

// Se você precisar separar os comandos por espaços ou outro delimitador
// const separatedCommands = commandsArray.map((cmd) => cmd.split(" ")); // Isso separa por espaço

console.log(commandsArray); // Exibe o array com os comandos sem as aspas
// console.log(separatedCommands); // Exibe o array com comandos separados
