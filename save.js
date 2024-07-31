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
  {
    display_name: "Alerta Memória RAM",
    name: "",
    isActive: false,
  },
  {
    display_name: "Alerta Disco Rigído",
    name: "",
    isActive: false,
  },
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
      isActive: data.isActive,
      name: formatName(data.display_name),
    };
    console.log(resultRefine);
    console.log(apiUrl, data);
    const response = await axios.post(apiUrl, resultRefine);
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao inserir artigo:", error.response.data);
  }
}

myData.forEach((article) => {
  postData(article);
});
