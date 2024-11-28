import { useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/myIsLoading";
import requestWithToken from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

type TypeCompany = {
  email: string;
  username: string;
  company: string;
  companyCode: string;
  quantityAgents: number;
  plan: string;
};

const DownloadPage = () => {
  const { data: company, error: userError, isPending: isUserLoading } = useQuery<TypeCompany | null>({
    queryKey: ["user"],
    queryFn: async (): Promise<TypeCompany | null> => {
      const { data: user } = await requestWithToken.get(`users`);

      if (!user || !user.email || !user.company) {
        return null;
      }

      return {
        email: user.email,
        username: user.username,
        company: user.company.name,
        companyCode: user.company.companyCode,
        quantityAgents: user.company.quantityAgents,
        plan: user.company.plan,
      };
    },
  });

  const { data: activeClients, error: clientsError, isPending: isClientsLoading } = useQuery<number>({
    queryKey: ["clients-count"],
    queryFn: async () => {
      const { data } = await requestWithToken.get("/clients/count");
      return data;
    },
    enabled: !!company,
  });

  useEffect(() => {
    if (userError || clientsError) {
      return;
    }
  }, [userError, clientsError]);

  if (isUserLoading || isClientsLoading || !company || activeClients === undefined) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <LoadingSpinner className="w-24 h-24" />
      </div>
    );
  }

  const availableLicenses = company.quantityAgents - (activeClients || 0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Download do Programa</h1>
      <p className="text-lg mb-8">Clique no link abaixo para baixar o programa</p>
      <p className="text-lg mb-8 text-center">
        E insira o código da sua empresa na hora da instalação
        <br />
        <span className="font-bold text-2xl">{company.companyCode}</span>
      </p>
      <a
        href={`${import.meta.env.VITE_BASE_URL}/updates/download-installer`}
        download
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Baixar Agente Track
      </a>
      <p className="text-3xl mt-8">
        Plano atual: <span className="font-bold">{company.plan}</span>
      </p>
      <p className="text-xl mt-8">
        Total de licenças: <span className="font-bold">{company.quantityAgents}</span>
      </p>
      <p className="text-xl mt-4">
        Licenças disponíveis: <span className="font-bold">{availableLicenses}</span>
      </p>
    </div>
  );
};

export default DownloadPage;