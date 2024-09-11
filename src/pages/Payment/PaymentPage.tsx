import { LoadingSpinner } from "@/components/ui/myIsLoading";
import requestWithToken from "@/utils/request";
import React, { useState } from "react";

const PaymentPage: React.FC = () => {
  const [agentCount, setAgentCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Inicializa isLoading como false

  const handleSubscription = async () => {
    setIsLoading(true); // Ativa o loading antes de iniciar a requisição
    try {
      const response = await requestWithToken.post(
        "/payment/create-checkout-session",
        { agentCount }
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
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Assinatura</h1>
      <div className="mb-4">
        <label htmlFor="agentCount" className="block text-lg font-medium">
          Quantidade de Agentes
        </label>
        <input
          type="number"
          id="agentCount"
          value={agentCount}
          onChange={(e) => setAgentCount(Math.max(1, parseInt(e.target.value)))}
          className="mt-1 block dark:text-zinc-800 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          min="1"
          max="2000"
        />
      </div>

      {/* Exibe o botão ou o spinner dependendo do estado isLoading */}
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingSpinner className="w-8 h-8 text-blue-500" />{" "}
          {/* Mostra o spinner enquanto carrega */}
        </div>
      ) : (
        <button
          onClick={handleSubscription}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Subscribe Now
        </button>
      )}
    </div>
  );
};

export default PaymentPage;
