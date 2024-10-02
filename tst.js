export function getDayOfWeek(dateString) {
  const [datePart] = dateString.split(" ");
  const dateFormatted = datePart.split("/").reverse().join("-");
  const date = new Date(dateFormatted);

  // Dias da semana no formato desejado
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  // Retorna o dia da semana correspondente
  return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek("23/09/2024 17:42:05"));
