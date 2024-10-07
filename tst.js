/* eslint-disable no-useless-escape */
const response =
  "   -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -        |    /    -                                                                                                                             1024 KB / 2.87 MB    2.00 MB / 2.87 MB    2.87 MB / 2.87 MB                                                                                                                           -                                                                                                                         No package found matching input criteria.";

// Extrair a substring a partir do último traço até o final
const result = response.substring(response.lastIndexOf("-")).trim();

// Agora, remover tudo antes da frase final
const finalResult = result.replace(/^-+\s*/, "").trim(); // Remove o traço e os espaços antes da frase final

console.log(finalResult);
