import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "@/components/ui/use-toast"
import { LoadingSpinner } from "@/components/ui/myIsLoading"
import requestWithToken from "@/utils/request"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Plan = {
  name: string;
  price: number;
  agentLimit: number;
  description: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    price: 0,
    agentLimit: 20,
    description: [
      "Até 20 agentes para testar",
      "Comandos e scripts remotos",
      "Inventário de dispositivos",
      "Controle de estoque",
      "Acesso total ao painel",
    ],
  },
  {
    name: "Starter",
    price: 3.99,
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
    price: 4.99,
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

const subscriptionSchema = z.object({
  planName: z.string().min(1, "Selecione um plano"),
  agentCount: z.number()
    .min(1, "Mínimo de 1 agente")
    .max(10000, "Máximo de 10000 agentes")
})

type SubscriptionInput = z.infer<typeof subscriptionSchema>

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const hasExistingPlan = useRef(false);
  const { toast } = useToast();
  // const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<SubscriptionInput>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      planName: "",
      agentCount: 1,
    },
  })

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await requestWithToken.get("/company");
        const { plan, quantityAgents } = response.data;
        const existingPlan = plans.find(planItem => planItem.name === plan);
        console.log('oi', existingPlan)
        if (existingPlan) {
          handlePlanSelect(existingPlan, quantityAgents);
          if(quantityAgents > 0 && plan !== "Free") {
            hasExistingPlan.current = true;
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados da empresa:", error);
      }
    };

    fetchCompanyData();
  }, []);

  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: async (data: SubscriptionInput) => {
      // Add null check for selectedPlan
      if (!selectedPlan) {
        throw new Error("Nenhum plano selecionado");
      }

      if (selectedPlan.price <= 0) {
        return await requestWithToken.patch("/company", {
          plan: data.planName,
          quantityAgents: 20 // Force 20 for free plan
        });
      }

      const response = await requestWithToken.post("/payment/create-checkout-session", {
        agentCount: data.agentCount,
        plan: data.planName
      });
      return response.data;
    },
    onSuccess: (data) => {
      // Add null check for selectedPlan
      if (!selectedPlan) return;

      if (selectedPlan.price > 0) {
        window.location.href = data.url;
      } else {
        toast({
          title: "Sucesso",
          className: "bg-success border-zinc-100",
          description: "Plano gratuito ativado com sucesso",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        variant: "destructive",
        description: `Falha ao processar assinatura: ${error.message}`,
      });
    },
  });

  const handlePlanSelect = (plan: Plan, qtdeAgents: number | null = null) => {
    setSelectedPlan(plan);
    form.setValue("planName", plan.name);
    // Set agent count based on plan type
    if (plan.name === "Free") {
      form.setValue("agentCount", 20);
    } else {
      form.setValue("agentCount", qtdeAgents || 1);
    }

    setTimeout(() => {
      const input = document.querySelector('input[name="agentCount"]');
      if (input) {
        (input as HTMLInputElement).focus();
      }
    }, 0);
  };

  const onSubmit = (data: SubscriptionInput) => {
    subscribe(data);
  }

  return (
    <div className="max-w-5xl mx-auto p-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Escolha seu Plano</h1>

      <div className="flex flex-wrap justify-around gap-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`px-6 p-4 rounded-lg shadow-lg cursor-pointer flex flex-col justify-between 
              ${selectedPlan?.name === plan.name ? "border-4 border-indigo-500" : "border border-gray-300"}`}
            style={{ minWidth: "250px", maxWidth: "300px" }}
            onClick={() => handlePlanSelect(plan)}
          >
            <div>
              <h2 className="text-3xl font-bold text-center text-black dark:text-white p-0 mb-2">
                Plano {plan.name}
              </h2>
              <p className="text-2xl font-bold text-center mb-3">
                {plan.price === 0 ? "GRÁTIS" : `R$ ${plan.price.toString().replace(".", ",")}`}
              </p>
              <ul className="mb-4">
                {plan.description.map((desc, index) => (
                  <li key={index} className="text-base mb-1 capitalize font-semibold">
                    ✅ {desc}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              variant={selectedPlan?.name === plan.name ? "default" : "outline"}
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none
                ${selectedPlan?.name === plan.name ? "" : "opacity-50"}`}
              onClick={() => handlePlanSelect(plan)}
            >
              {selectedPlan?.name === plan.name ? "Selecionado" : "Selecionar"}
            </Button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full bg-white mt-6 p-6 rounded-lg shadow-2xl dark:bg-slate-800">
            <h2 className="text-2xl font-bold mb-4 text-slate-700 dark:text-white p-1">
              Plano <span className="font-bold text-gray-800 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-0.5">{selectedPlan.name}</span> Selecionado
            </h2>

            <FormField
              control={form.control}
              name="agentCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-lg font-medium text-slate-700 dark:text-white">
                    Quantidade de Agentes (máx: {selectedPlan.agentLimit})
                  </FormLabel>
                  <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={selectedPlan.agentLimit}
                    {...field}
                    ref={field.ref} // Use field.ref instead of inputRef
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      field.onChange(selectedPlan.name === "Free" ? 20 : value);
                    }}
                    value={selectedPlan.name === "Free" ? 20 : field.value}
                    disabled={selectedPlan.name === "Free"}
                    className="dark:text-white mt-1 block w-full rounded-md border-gray-300 shadow-sm ring-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    autoFocus={true}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className={`w-full mt-4 text-2xl text-white bg-green-500 hover:bg-green-600 dark:bg-slate-700 dark:hover:opacity-90 font-bold py-2 rounded focus:outline-none focus:shadow-outline`}
            >
              {isPending ? <LoadingSpinner /> : hasExistingPlan.current ? "Trocar assinatura" : "Assine agora"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}