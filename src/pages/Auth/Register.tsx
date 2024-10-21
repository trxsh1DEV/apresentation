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
    <div className="flex flex-col items-center justify-center">
      <form className="min-w-96 text-center">
        <h2 className="text-2xl mb-4">Registrar Usuário</h2>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ex: name@company.com"
          autoFocus={true}
        />
        <Button
          onClick={sendMagicLink}
          disabled={loading}
          className="text-xl mt-3"
        >
          {loading ? <LoadingSpinner /> : "Cadastrar e-mail"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
