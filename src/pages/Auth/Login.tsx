import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "@/utils/request";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().min(3, "email must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
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

  const navigate = useNavigate();

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
        throw new Error(`Error: ${response.status}`);
      }

      const data: { token: string; expireIn: string } = await response.json();
      console.log(Number(data.expireIn.slice(0, -1)) / 24);
      console.log(data.token);

      Cookies.set("token", data.token, {
        expires: Number(data.expireIn.slice(0, -1)) / 24,
        // sameSite: "strict",
        // secure: true,
      });

      // Redireciona para a página inicial após o login bem-sucedido
      navigate("/");
    } catch (error) {
      console.error("An error occurred:", error);
      // Aqui você pode adicionar uma lógica para mostrar uma mensagem de erro ao usuário
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center bg-transparent shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-4xl font-extrabold mb-6">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-lg font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="text"
              {...register("email")}
              className={`w-full text-black font-semibold border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 ${
                errors.email ? "border-red-500" : ""
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email?.message}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`w-full text-black font-semibold border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 ${
                errors.password ? "border-red-500" : ""
              }`}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password?.message}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
