// 23/09/2024 17:42:05
export const formatDateString = (dateString: string | undefined) => {
  if (!dateString) return;
  return new Date(dateString).toLocaleString().replace(/,/g, "");
};

export function getDayOfWeek(
  dateString: string
): "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab" | "Dom" {
  // Cria um objeto Date a partir da string
  const [day, month, yearAndTime] = dateString.split("/");
  const [year, time] = yearAndTime.split(" ");
  const formattedDate = `${year}-${month}-${day}T${time}`;
  const date = new Date(formattedDate);

  // Dias da semana no formato desejado
  const daysOfWeek: Array<
    "Dom" | "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab"
  > = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  // Retorna o dia da semana correspondente
  return daysOfWeek[date.getDay()];
}

export const generateRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const findValueInString = (inputStr: string, valuesSearch: string[]) => {
  // Cria a regex combinando as marcas, ignorando maiúsculas e minúsculas
  const regex = new RegExp(valuesSearch.join("|"), "i");
  // Retorna o primeiro match encontrado ou null se nenhum for encontrado
  const match = inputStr.match(regex);

  return match ? match[0] : "Outros";
};

export const test = (inputStr: string, valuesSearch: string[]) => {
  // Cria a regex combinando as marcas, ignorando maiúsculas e minúsculas
  const regex = new RegExp(valuesSearch.join("|"), "i");
  let cpuModel = null;

  // Retorna o primeiro match encontrado ou null se nenhum for encontrado
  const match = inputStr.match(regex);
  if (match) {
    if (match[0] === "Intel") {
      // Regex para Intel: pega dois caracteres à esquerda do traço e cinco à direita
      const intelRegex = /(.{2})-(.{5})/;
      const intelMatch = inputStr.match(intelRegex);
      if (intelMatch) {
        console.log(`Intel Result: ${intelMatch[1]}-${intelMatch[2]}`);
        cpuModel = `${intelMatch[1]}-${intelMatch[2]}`;
      }
    } else if (match[0] === "AMD") {
      // Regex para AMD: pega oito caracteres à esquerda e quatro números
      const amdRegex = /(.{8})(\d{4})/;
      const amdMatch = inputStr.match(amdRegex);
      if (amdMatch) {
        console.log(`AMD Result: ${amdMatch[1]}${amdMatch[2]}`);
        cpuModel = `${amdMatch[1]}-${amdMatch[2]}`;
      }
    }
  }
  console.log(cpuModel ?? cpuModel);
  return match ? match[0] : "Outros";
};

type DataItem = {
  [key: string]: string;
};

type CountResult = {
  [key: string]: number;
};

export function countByField(data: DataItem[], field: string): CountResult {
  const count: CountResult = {};

  data.forEach((item) => {
    const fieldValue = item[field];
    if (fieldValue) {
      // Se a chave já existir, incrementa o contador, senão inicializa com 1
      count[fieldValue] = (count[fieldValue] || 0) + 1;
    }
  });

  return count;
}

export const countByManufacturers = (
  data: DataItem[],
  field: string,
  valueSearch: string[]
): { [brand: string]: number } => {
  return data.reduce((acc: { [brand: string]: number }, item: DataItem) => {
    const brand = findValueInString(item[field], valueSearch);
    if (brand) {
      acc[brand] = (acc[brand] || 0) + 1; // Incrementa o contador da marca
    }
    return acc;
  }, {});
};
