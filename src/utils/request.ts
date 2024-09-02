import axios from "axios";
import Cookies from "js-cookie";

export const BASE_URL = "https://agentezero-api.infonova.com.br";

export const requestWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adiciona um interceptor para atualizar o token em cada requisição
requestWithToken.interceptors.request.use(
  async (config) => {
    try {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        throw new Error("Usuário não autenticado.");
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requestWithToken;
