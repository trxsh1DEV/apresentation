import { z } from "zod";
export const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Texto minimo de 5 caracteres" })
    .max(100, { message: "Texto máximo de 100 caracteres" }),
  price: z.number().min(5, { message: "Menor que 5" }),
  description: z
    .string()
    .min(1, { message: "Texto minimo de 5 caracteres" })
    .trim(),
});
