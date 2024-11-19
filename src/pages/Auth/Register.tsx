// Register.tsx
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/request";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMagicLink = async () => {
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/auth/magic-link`, { email });
      alert("Link de confirmação de cadastro enviado para o e-mail informado!");
    } catch (error) {
      alert(
        "Erro ao enviar link de confirmação de registro! Revise seu e-mail"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <form className="min-w-96 text-center bg-transparent">
        <h2 className="text-3xl mb-4 text-slate-700 dark:text-white font-bold">Cadastrar empresa</h2>
        <Input
          type="email"
          value={email}
          className="bg-slate-200 px-4 py-3 dark:ring-slate-200 dark:text-slate-600"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ex: name@company.com"
          autoFocus={true}
        />
        <Button
          onClick={sendMagicLink}
          disabled={loading}
          className="text-xl mt-3 bg-green-500 dark:bg-purple-500 text-white py-3 rounded-lg hover:bg-green-600 dark:hover:bg-purple-600 transition duration-200"
        >
          {loading ? <LoadingSpinner /> : "Cadastrar e-mail"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
