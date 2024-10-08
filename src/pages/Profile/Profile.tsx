import InputCommom from "@/components/InputCommom";
import requestWithToken from "@/utils/request";
import { FC, useCallback, useEffect, useState } from "react";

type UserProfileProps = {
  username: string;
  email: string;
  company: string;
  password?: string; // Inclua password como opcional
};

const UserProfile: FC = () => {
  const [formState, setFormState] = useState<UserProfileProps | null>(null); // Inicialize com null

  const fetchUser = useCallback(async () => {
    try {
      const resultToken = await requestWithToken.get("/auth/profile");

      const { data: user } = await requestWithToken.get(
        `users/${resultToken.data.email}`
      );

      if (!user || !user.email || !user.username || !user.company) {
        return setFormState(null);
      }

      setFormState({
        email: user.email,
        username: user.username,
        company: user.company.name,
        password: "", // Inicialize password como uma string vazia
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
  }, [fetchUser]); // Adicione fetchUser como dependência

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormState((prevState: any) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formState) return;

    const { username, password, email } = formState;

    if (password) {
      try {
        const response = await requestWithToken.patch(
          "/users/update-password/" + email,
          {
            password,
          }
        );

        if (!response.data || response.status !== 200) {
          alert("Ocorreu um erro ao atualizar a senha. Tente novamente.");
          return;
        }
        alert("Senha atualizada com sucesso!");
        setFormState((prevState: any) => ({
          ...prevState,
          password: "", // Limpa o campo de senha após a atualização
        }));
      } catch (error: any) {
        console.error("Erro ao atualizar senha:", error.message);
        alert("Ocorreu um erro ao atualizar a senha. Tente novamente.");
      }
    }

    if (username && username) {
      try {
        await requestWithToken.patch("/users/" + email, {
          username,
        });

        alert("Nome do usuário atualizado com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar perfil:", error);
        alert("Ocorreu um erro ao atualizar o perfil. Tente novamente.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-3xl w-full p-6 rounded-lg shadow-md flex items-center justify-center flex-col">
        <h1 className="text-4xl text-black dark:text-slate-200 font-semibold mb-4">
          Perfil do Usuário
        </h1>
        <form
          className=" space-y-4 min-w-[600px] w-4/5 p-6 bg-transparent"
          onSubmit={handleSubmit}
        >
          <div>
            <InputCommom
              label="Nome"
              id="username"
              value={formState?.username || ""}
              placeholder="Nome"
              readOnly={false}
              onChange={handleChange}
            />
          </div>
          <div>
            <InputCommom
              label="Email"
              id="email"
              value={formState?.email || ""}
              placeholder="Email"
              readOnly={true}
            />
          </div>
          <div>
            <InputCommom
              label="Empresa"
              id="company"
              value={formState?.company || ""}
              placeholder="Empresa"
              readOnly={true}
            />
          </div>
          <div>
            <InputCommom
              label="Nova Senha"
              type="password"
              id="password"
              value={formState?.password || ""}
              placeholder="Nova Senha"
              readOnly={false}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
