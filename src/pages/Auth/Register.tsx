// Register.tsx
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/request";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="w-[500px] p-4">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-slate-700 dark:text-white font-bold mb-4">
            Cadastrar empresa
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <Input
            type="email"
            value={email}
            className="ring-slate-300 px-4 py-3 dark:ring-slate-200 dark:text-slate-600 mb-4"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: name@company.com"
            autoFocus={true}
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={sendMagicLink}
            disabled={loading}
            className="w-full text-xl bg-green-500 dark:bg-purple-500 text-white py-3 rounded-lg hover:bg-green-600 dark:hover:bg-purple-600 transition duration-200"
          >
            {loading ? <LoadingSpinner /> : "Confirmar e-mail"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
};

export default Register;
