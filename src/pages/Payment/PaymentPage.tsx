import { LoadingSpinner } from "@/components/ui/myIsLoading";
import requestWithToken from "@/utils/request";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Plan = {
  name: string;
  price: number;
  agentLimit: number;
  description: string[];
};

const plans: Plan[] = [
  {
    name: "Plano Free",
    price: 0,
    agentLimit: 5,
    description: [
      "Até 5 agentes para testar",
      "Comandos e scripts remotos",
      "Inventário de dispositivos",
      "Controle de estoque",
      "Acesso total ao painel",
    ],
  },
  {
    name: "Starter",
    price: 5.99,
    agentLimit: 250,
    description: [
      "Até 250 agentes para implementar",
      "Bloqueio e reset remoto",
      "Depreciação de hardware",
      "Alertas automáticos",
      "Geolocalização",
      "Controle de Perda e/ou Furto",
      "Cerca eletrônica",
      "Gerenciamento total de softwares",
      "Blacklist de Softwares",
      "Suporte para implementação",
      "Exportação de Relatórios",
    ],
  },
  {
    name: "Enterprise",
    price: 7.99,
    agentLimit: 10000,
    description: [
      "Agentes ilimitados",
      "Relatórios com sugestões",
      "Inventário de ativos de rede",
      "Licenciamento de Software",
      "Geolocalização com histórico",
      "Configuração de Dispositivos",
      "Conformidade de políticas de T.I",
      "Mensageria e Campanhas Informativas",
      "API para integrações",
      "Gerenciamento Multiempresa",
      "Análise de maturidade",
    ],
  },
];

const PaymentPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [agentCount, setAgentCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setAgentCount(1); // Inicia o contador de agentes com 1
  };

  const handleSubscription = async () => {
    setIsLoading(true); // Ativa o loading antes de iniciar a requisição
    try {
      if (!selectedPlan?.price) return;
      const price = selectedPlan?.price;

      // const formattedPriceBRL = new Intl.NumberFormat("pt-BR", {
      //   style: "currency",
      //   currency: "BRL",
      // }).format(selectedPlan?.price);

      if (+price <= 0) {
        return navigate("/trial");
      }

      const response = await requestWithToken.post(
        "/payment/create-checkout-session",
        { agentCount, plan: selectedPlan?.name }
      );
      window.location.href = response.data.url; // Redireciona para a URL do Stripe
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Failed to create checkout session. Please try again.");
    } finally {
      setIsLoading(false); // Mesmo em caso de erro, desativa o loading
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Escolha seu Plano</h1>

      {/* Responsividade ajustada */}
      <div className="flex flex-wrap justify-around gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-lg shadow-lg cursor-pointer flex flex-col justify-between 
              ${selectedPlan?.name === plan.name ? "border-4 border-indigo-500" : "border border-gray-300"}`}
            style={{ minWidth: "250px", maxWidth: "300px" }} // Limita a largura do card
            onClick={() => handlePlanSelect(plan)}
          >
            <div>
              <h2 className="text-3xl font-bold mb-2 text-center">
                Plano {plan.name}
              </h2>
              <p className="text-2xl font-bold mb-4 text-center">
                {plan.price == 0
                  ? "GRÁTIS"
                  : `R$ ${plan.price.toString().replace(".", ",")}`}
              </p>
              <ul className="mb-4">
                {plan.description.map((desc, index) => (
                  <li
                    key={index}
                    className="text-base mb-1 capitalize font-semibold"
                  >
                    ✅ {desc}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none mt-auto
              ${selectedPlan?.name === plan.name ? "" : "opacity-50"}`}
              disabled={selectedPlan?.name !== plan.name}
            >
              Selecionar
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-6 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            ({selectedPlan.name}) Selecionado
          </h2>

          <div className="mb-4">
            <label htmlFor="agentCount" className="block text-lg font-medium">
              Quantidade de Agentes (máx: {selectedPlan.agentLimit})
            </label>
            <input
              type="number"
              id="agentCount"
              value={agentCount || ""}
              onChange={(e) =>
                setAgentCount(
                  Math.max(
                    1,
                    Math.min(
                      selectedPlan.agentLimit,
                      parseInt(e.target.value || "1")
                    )
                  )
                )
              }
              className="text-zinc-800 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              min="1"
              max={selectedPlan.agentLimit}
            />
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <button
              onClick={handleSubscription}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Assine agora
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
