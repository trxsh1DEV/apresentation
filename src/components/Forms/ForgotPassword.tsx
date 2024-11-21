import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import { BASE_URL } from "@/utils/request"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const forgotPasswordSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
})

type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>

export function ForgotPasswordForm() {
  const { toast } = useToast()

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const { mutate: sendResetEmail, isPending } = useMutation({
    mutationFn: async (data: ForgotPasswordInput) => {
      const response = await axios.post(`${BASE_URL}/auth/forgot-password`, {
        email: data.email,
      })
      return response.data
    },
    onSuccess: () => {
      toast({
        title: "E-mail enviado",
        className: "bg-success border-zinc-100",
        description: "Verifique sua caixa de entrada para redefinir sua senha",
      })
      form.reset()
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Falha ao enviar e-mail: ${error.response?.data?.message || error.message}`,
      })
    },
  })

  const onSubmit = (data: ForgotPasswordInput) => {
    sendResetEmail(data)
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Esqueceu sua senha?</h1>
        <p className="text-muted-foreground">
          Digite seu e-mail para receber um link de redefinição
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6 mx-auto w-full bg-slate-200 dark:bg-secondary">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...field}
                    className="p-3 ring-slate-300 dark:ring-slate-700"
                    autoFocus={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-slate-700 dark:hover:opacity-90"
            disabled={isPending}
          >
            {isPending ? "Enviando..." : "Enviar e-mail"}
          </Button>
        </form>
      </Form>
    </div>
  )
}