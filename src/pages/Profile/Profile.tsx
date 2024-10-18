import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import requestWithToken from "@/utils/request";
import { FC, useCallback, useEffect, useState } from "react";
import { logout } from "../Auth/token-methods";

type UserProfileProps = {
  username: string;
  email: string;
  company: string;
  password?: string;
  initialUsername: string;
};

const UserProfile: FC = () => {
  const [formState, setFormState] = useState<UserProfileProps | null>(null);
  const { toast } = useToast();

  const fetchUser = useCallback(async () => {
    try {
      // const resultToken = await requestWithToken.get("/auth/profile");
      const { data: user } = await requestWithToken.get(`users`);

      if (!user || !user.email || !user.username || !user.company) {
        return setFormState(null);
      }

      setFormState({
        email: user.email,
        username: user.username,
        company: user.company.name,
        password: "",
        initialUsername: user.username,
      });
    } catch (error: any) {
      console.error(
        "Error fetching user:",
        error?.response?.data?.errors?.[0] || error.message
      );
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormState((prevState) =>
      prevState
        ? {
            ...prevState,
            [id]: value,
          }
        : null
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formState) return;

    const { username, password, email, initialUsername } = formState;

    if (password) {
      try {
        const response = await requestWithToken.patch(
          "/users/update-password/" + email,
          { password }
        );

        if (!response.data || response.status !== 200) {
          throw Error("Ocorreu um erro ao atualizar a senha. Tente novamente.");
          // return;
        }
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Senha atualizada com sucesso (Redirecionando...)`,
        });

        setFormState((prevState) =>
          prevState
            ? {
                ...prevState,
                password: "",
              }
            : null
        );

        // Timer de 1 segundo
        setTimeout(() => {
          logout();
        }, 1000);
      } catch (error: any) {
        console.error(
          "Erro ao atualizar senha:",
          error.response.data.message[0]
        );
        toast({
          title: "Erro",
          // className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Falha ao atualizar senha do usuário. ${error.response?.data?.message[0] || error.message}`,
        });
      }
    }

    if (username && username !== initialUsername) {
      try {
        await requestWithToken.patch("/users/" + email, { username });
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Perfil do usuário atualizado com sucesso`,
        });
      } catch (error) {
        console.error("Erro ao atualizar perfil:", error);
        // alert("Ocorreu um erro ao atualizar o perfil. Tente novamente.");
        toast({
          title: "Erro",
          // className: "bg-success border-zinc-100",
          variant: "destructive",
          description: `Falha ao atualizar perfil do usuário`,
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Tabs defaultValue="account" className="w-[600px]">
        <h1 className="text-4xl text-center mb-6 font-bold">
          Perfil do Usuário
        </h1>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="password">Senha</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Conta</CardTitle>
              <CardDescription>
                Faça alterações na sua conta aqui. Clique em salvar quando
                terminar.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit} className="w-full bg-transparent">
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-lg" htmlFor="username">
                    Nome
                  </Label>
                  <Input
                    id="username"
                    className="ring-2 ring-slate-700 text-base" // isso agora deve funcionar
                    value={formState?.username || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-lg" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    disabled={true}
                    id="email"
                    className="ring-2 ring-slate-700 text-base" // isso agora deve funcionar
                    value={formState?.email || ""}
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-lg" htmlFor="company">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    disabled={true}
                    className="ring-2 ring-slate-700 text-base" // isso agora deve funcionar
                    value={formState?.company || ""}
                    readOnly
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="mx-auto text-lg"
                  disabled={formState?.username === formState?.initialUsername}
                >
                  Salvar alterações
                </Button>
              </CardFooter>
            </form>
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
            <form onSubmit={handleSubmit} className="w-full bg-transparent">
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-lg" htmlFor="password">
                    Nova senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="text-lg ring-2 ring-slate-700"
                    value={formState?.password || ""}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="mx-auto text-lg"
                  disabled={(formState?.password?.length || 0) <= 8}
                >
                  Salvar Senha
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
