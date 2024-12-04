import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "@/utils/request";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { userIsLogged } from "./token-methods";

const loginSchema = z.object({
  email: z.string().min(3, "O email deve ter pelo menos 3 caracteres"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const { toast } = useToast();

  useEffect(() => {
    if (userIsLogged()) {
      window.location.href = "/";
    }
    return;
  }, []);

  const onSubmit = async ({ email, password }: LoginFormValues) => {
    if (!email || !password) return;

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        toast({
          title: "Falha ao tentar autenticar",
          description: "Revise seu e-mail e senha",
        });
        throw new Error(`Error: ${response.status}`);
      }

      const data: { token: string; expireIn: string } = await response.json();

      Cookies.set("token", data.token, {
        expires: Number(data.expireIn.slice(0, -1)) / 24,
      });

      const params = new URLSearchParams(location.search);
      if (params.get("first") === "true") {
        fetch(`${BASE_URL}/leads/first-login`,  { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({email}) }); // Salvar o primeiro login no backend
      }

      window.location.href = "/";
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
  <div className="flex h-screen w-full overflow-hidden">
    {/* Left side - Login Form */}
    <div className="w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Bem vindo(a)!</h2>
            <p className="text-gray-500 mt-2">
              Acesse o Agente Track informando seu usuário e senha no formulário abaixo.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full bg-transparent">
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-purple-500 focus:border-transparent bg-slate-200 dark:bg-slate-700"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Senha"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-purple-500 focus:border-transparent bg-slate-200 dark:bg-slate-700"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="text-right">
              <a href="/forgot-password" className="text-green-500 dark:text-purple-500 hover:text-green-600 dark:hover:text-purple-600 text-sm">
                Esqueci minha senha
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 dark:bg-purple-500 text-white py-3 rounded-lg hover:bg-green-600 dark:hover:bg-purple-600 transition duration-200"
            >
              Entrar
            </button>

            <div className="text-center text-sm text-gray-500">
              Ainda não possui conta?{" "}
              <a href="/register" className="text-green-500 dark:text-purple-500 dark:hover:text-purple-600 hover:text-green-500">
                Cadastre-se!
              </a>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-4">
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <a href="/privacy-policy" target="_blank" className="hover:opacity-80">Política de Privacidade</a>
              {/* <span>•</span> */}
              <a href="/terms-of-use" target="_blank" className="hover:opacity-80">Termos de Uso</a>
              {/* <span>•</span> */}
              <a href="https://infonova.com.br/agente-track/" target="_blank" className="hover:opacity-80">Conheça o Agente Track</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 bg-green-500 dark:bg-purple-500 flex items-center justify-center p-8 text-white">
        <div className="max-w-2xl space-y-8">
        <div className="flex items-center justify-center space-x-2 mb-20">
            <img 
              src="/icon.svg" 
              alt="Agente Track Logo" 
              className="w-20 h-20"
            />
            <span className="text-5xl font-bold">Agente Track</span>
          </div>
          <h1 className="text-4xl font-bold">
            Gestão Inteligente de Ativos de TI
          </h1>
          <p className="text-2xl opacity-90">
            Plataforma completa para inventário e gerenciamento de ativos de TI. 
            Monitore hardware, software, licenças, abas ativas e muito mais. 
            Tome decisões baseadas em dados com relatórios detalhados e alertas automáticos.
          </p>
          <ul className="space-y-4 text-lg opacity-90">
            <li>✓ Inventário automático de hardware e software</li>
            <li>✓ Gestão de licenciamento e conformidade</li>
            <li>✓ Monitoramento e dashboards</li>
            <li>✓ Controle de ativos e geolocalização</li>
            <li>✓ Gestão remota e suporte</li>
          </ul>
          <div className="relative mt-6">
            {/* <img
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;