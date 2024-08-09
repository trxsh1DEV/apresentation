import fs from "fs";
import axios from "axios";
// eslint-disable

// Lê o arquivo JSON
// fs.readFile("./gpu.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Erro ao ler o arquivo JSON:", err);
//     return;
//   }

//   // Converte o conteúdo do arquivo JSON em um array de objetos JavaScript
//   const data = JSON.parse(data);

//   // Define a URL da sua API
//   const apiUrl = "http://localhost:3000/hardware/gpu";

//   // Função para enviar um objeto para a API
//   async function postArticle(article) {
//     try {
//       //   console.log(article);
//       const response = await axios.post(apiUrl, article);
//       // console.log(article);
//     } catch (error) {
//       console.error("Erro ao inserir artigo:", error.response.data);
//     }
//   }

//   // Itera sobre cada objeto e o envia para a API
//   data.forEach((article) => {
//     postArticle(article);
//   });
// });

const apiUrl = "http://localhost:3000/triggers";
const myData = [
  { display_name: "Alerta de cerca virtual" },
  { display_name: "Alteração de hardware" },
  { display_name: "Alteração de software" },
  { display_name: "Atraso de manutenção" },
  { display_name: "Atraso de devolução" },
  { display_name: "BitLocker desativado" },
  { display_name: "Checagem de antivírus" },
  { display_name: "Consumo de CPU" },
  { display_name: "Consumo de RAM" },
  { display_name: "Contrato a vencer" },
  { display_name: "Equipamentos com garantia a vencer" },
  { display_name: "Equipamentos desativados" },
  { display_name: "Equipamentos com garantia vencida Alerta" },
  { display_name: "Equipamentos não localizados" },
  { display_name: "Estoque abaixo do mínimo" },
  { display_name: "HD com saúde critica" },
  { display_name: "HD sobrecarregado" },
  { display_name: "Inventário em estoque" },
  { display_name: "Logon simultâneo" },
  { display_name: "Manutenção preventiva a vencer" },
  { display_name: "Manutenção preventiva vencida" },
  { display_name: "Mudança de hostname" },
  { display_name: "Mudança de logon" },
  { display_name: "Mudança de SIM Card" },
  { display_name: "Número de série coincidente" },
  { display_name: "Pacotes com licença a vencer" },
  { display_name: "Pacotes com licença vencida" },
  { display_name: "Pacotes com suporte vencido" },
  { display_name: "Secure boot desativado" },
  { display_name: "Softwares desatualizados" },
  { display_name: "Softwares proibidos" },
  { display_name: "Softwares sem licença" },
  { display_name: "Possui Antivirus" },
];

const formatName = (displayName) => {
  return displayName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
    .replace(/[^\w\s]/gi, "") // Remove caracteres especiais
    .toLowerCase()
    .replace(/\s+/g, "_");
};

// Função para enviar um objeto para a API
async function postData(data) {
  try {
    const resultRefine = {
      display_name: data.display_name,
      isActive: false,
      name: formatName(data.display_name),
    };
    console.log(resultRefine);
    const response = await axios.post(apiUrl, resultRefine);
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao inserir artigo:", error.response.data);
  }
}

myData.forEach((article) => {
  postData(article);
});
