const containsString = (text, searchString) => {
  const regex = new RegExp(searchString, "i"); // Cria uma regex case-insensitive
  return regex.test(text); // Verifica se a string contém a busca
};

// Array de strings para testar a regex
const softwareList = [
  "AMD 1",
  "Test AMD",
  "123 AMD 567",
  "testamdww",
  "Intel i7 amd",
  "AmdProcessor",
];

// Teste da função containsString
softwareList.forEach((software) => {
  console.log(`${software}: ${containsString(software, "AMD")}`);
});
