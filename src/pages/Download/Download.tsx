import requestWithToken from "@/utils/request";
import { useCallback, useEffect, useState } from "react";

const DownloadPage = () => {
  const [company, setCompany] = useState<any | null>();
  const fetchUser = useCallback(async () => {
    try {
      const resultToken = await requestWithToken.get("/auth/profile");

      const { data: user } = await requestWithToken.get(
        `users/${resultToken.data.email}`
      );
      console.log(user.company.companyCode);

      if (!user || !user.email || !user.username || !user.company) {
        return setCompany(null);
      }

      setCompany({
        email: user.email,
        username: user.username,
        company: user.company.name,
        companyCode: user.company.companyCode, // Inicialize password como uma string vazia
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
  if (!company) return null;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Download do Programa</h1>
      <p className="text-lg mb-8">
        Clique no link abaixo para baixar o programa
      </p>
      <p className="text-lg mb-8 text-center">
        E insira o código da sua empresa na hora da instalação
        <br></br>
        <span className="font-bold text-2xl">{company.companyCode}</span>
      </p>
      <a
        href="https://drive.google.com/uc?export=download&id=1VzhreJhhOvdr1RznQ4gf-FIYXmN2lqvi"
        // https://drive.google.com/file/d/1VzhreJhhOvdr1RznQ4gf-FIYXmN2lqvi/view?usp=sharing
        download
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Baixar Programa
      </a>
    </div>
  );
};

export default DownloadPage;
