import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import requestWithToken from "@/utils/request";
import { logout } from "../Auth/token-methods";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { ModeToggle } from "@/components/customerComponents/mode-toggle";

const accountSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email(),
  company: z.string(),
});

const passwordSchema = z.object({
  currentPassword: z
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
    ),
    newPassword: z
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
    ),
});

type AccountFormData = z.infer<typeof accountSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const UserProfile = () => {
  const { toast } = useToast();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const { data } = await requestWithToken.get(`users`);
      return data;
    },
  });
  // console.log(userData)

  const accountForm = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      username: userData?.username || "",
      email: userData?.email || "",
      company: userData?.company?.name || "",
    },
  });

  useEffect(() => {
    if (userData) {
      accountForm.reset({
        username: userData.username,
        email: userData.email,
        company: userData.company?.name,
      });
    }
  }, [userData]);

  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (data: { username: string }) => {
      return await requestWithToken.patch(`/users/${userData.email}`, data);
    },
    onSuccess: () => {
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: "Perfil atualizado com sucesso",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Falha ao atualizar perfil: ${error.response?.data?.message || error.message}`,
      });
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: async (data: { currentPassword: string; newPassword: string }) => {
      return await requestWithToken.patch("/users/update-password", data);
    },
    onSuccess: () => {
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: "Senha atualizada com sucesso (Redirecionando...)",
      });
      setTimeout(logout, 1000);
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Falha ao atualizar senha: ${error.response?.data?.message || error.message}`,
      });
    },
  });

  const onSubmitAccount = (data: AccountFormData) => {
    if (data.username !== userData?.username) {
      updateProfileMutation.mutate({ username: data.username });
    }
  };

  const onSubmitPassword = (data: PasswordFormData) => {
    updatePasswordMutation.mutate({ 
      currentPassword: data.currentPassword,
      newPassword: data.newPassword
    });
  };

  if (isLoading) {
    return <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <LoadingSpinner className="w-24 h-24" />
  </div>;
  }

  return (
    <>
    <ModeToggle />
    <div className="flex items-center justify-center h-screen">
      <Tabs defaultValue="account" className="w-[600px]">
        <h1 className="text-4xl text-center mb-6 font-bold">Perfil do Usuário</h1>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="password">Senha</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Conta</CardTitle>
              <CardDescription>
                Faça alterações na sua conta aqui. Clique em salvar quando terminar.
              </CardDescription>
            </CardHeader>
            <Form {...accountForm}>
              <form onSubmit={accountForm.handleSubmit(onSubmitAccount)} className="w-full bg-transparent">
                <CardContent className="space-y-4">
                  <FormField
                    control={accountForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input {...field} className="ring-slate-300 dark:ring-slate-700" autoFocus={true}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={accountForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} disabled className="ring-slate-300 dark:ring-slate-700" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={accountForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input {...field} disabled className="ring-slate-300 dark:ring-slate-700" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="mx-auto text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
                    disabled={updateProfileMutation.isPending}
                  >
                    {updateProfileMutation.isPending ? "Salvando..." : "Salvar alterações"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Senha</CardTitle>
              <CardDescription>
                Altere sua senha aqui. Após salvar, você será desconectado.
              </CardDescription>
            </CardHeader>
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onSubmitPassword)} className="w-full bg-transparent">
                <CardContent className="space-y-4">
                  <FormField
                    control={passwordForm.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha atual</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Digite sua senha atual"
                            {...field}
                            className="ring-slate-300 dark:ring-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nova senha</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Digite sua nova senha"
                            {...field}
                            className="ring-slate-300 dark:ring-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="mx-auto text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
                    disabled={updatePasswordMutation.isPending}
                  >
                    {updatePasswordMutation.isPending ? "Salvando..." : "Alterar Senha"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </>
  );
};

export default UserProfile;