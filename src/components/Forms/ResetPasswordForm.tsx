import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { Eye, EyeOff } from "lucide-react"
import { useToast } from "@/components/ui/use-toast";

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
import { useLocation } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "@/utils/request"

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase and numbers"
    ),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type ResetPasswordInput = z.infer<typeof resetPasswordSchema>

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false)
  const { search } = useLocation();
  const { toast } = useToast();
  
  const params = new URLSearchParams(search);
  const email = params.get("email");
  const token = params.get("token");

  const form = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: async (data: ResetPasswordInput) => {
      const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
        email,
        token,
        newPassword: data.password,
      })
      return response.data
    },
    onSuccess: () => {
        toast({
            title: "Sucesso",
            className: "bg-success border-zinc-100",
            variant: "destructive",
            description: `Senha alterada com sucesso`,
          });
    },
    onError: (error: any) => {
      toast({
        title: "Falha",
        variant: "destructive",
        description: `Falha ao alterar senha: ${error.response?.data?.message || error.message}`,
      });
    },
  })

  const onSubmit = (data: ResetPasswordInput) => {
    if (!email || !token) {
    //   toast.error("Missing email or token parameters")
    toast({
        title: "Falha",
        variant: "destructive",
        description: `Parâmetros de email ou token faltando`,
      });
      return
    }
    resetPassword(data)
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Altere sua senha</h1>
        <p className="text-muted-foreground">
          Digite sua nova senha abaixo
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6 mx-auto w-full bg-slate-200 dark:bg-secondary">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="new-password">Nova senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Insira sua nova senha"
                      {...field}
                      className="p-3 ring-slate-300 dark:ring-slate-700"
                      autoFocus={true}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme a senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Repita sua nova senha"
                    {...field}
                    className="p-3 ring-slate-300 dark:ring-slate-700"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-slate-700 dark:hover:opacity-90"
            disabled={isPending}
          >
            {isPending ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </Form>
    </div>
  )
}