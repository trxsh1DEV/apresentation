import { z } from "zod";

// Schema para o formulário de empresa
export const companySchema = z.object({
  name: z.string().min(2, { message: "Nome da empresa é obrigatório" })
  // domain: z.string().min(2, { message: "O domínio deve ser um e-mail válido" }),
});

// Schema para o formulário de usuário
export const userSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  nameCompany: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
  token: z.string().min(9, "ObjectID do token inválido")
});

// Tipos derivados dos schemas
export type CompanyFormData = z.infer<typeof companySchema>;
export type UserFormData = z.infer<typeof userSchema>;
