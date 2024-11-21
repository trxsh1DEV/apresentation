import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  companySchema,
  userSchema,
  CompanyFormData,
  UserFormData,
} from "./type";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/utils/request";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

interface ConfirmRegistrationData {
  email: string | null;
  password: string;
  nameCompany: string;
  token: string | null;
}

// Função para enviar os dados da requisição
const confirmRegistration = async (data: ConfirmRegistrationData) => {
  const response = await axios.post(
    `${BASE_URL}/auth/confirm-registration`,
    data
  );
  return response.data;
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [companyData, setCompanyData] = useState<CompanyFormData | null>(null);
  const { search } = useLocation();
  const { toast } = useToast();

  const companyForm = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      domain: "",
    },
  });

  const params = new URLSearchParams(search);
  const email = params.get("email");
  const token = params.get("token");

  const userForm = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: email || "",
      password: "",
      nameCompany: companyData?.name || "", // Set initial value here
      token: token || "",
    },
  });

  useEffect(() => {
    if (companyData) {
      userForm.reset({
        ...userForm.getValues(),
        nameCompany: companyData.name
      });
    }
  }, [companyData]);

  // Mutação para lidar com a requisição de confirmação
  const mutation = useMutation({
    mutationFn: confirmRegistration,
    onError: (error: any) => {
      console.log(error.response?.data?.message || error.message); // Log para depuração
      toast({
        title: "Falha",
        variant: "destructive",
        description: `Não foi possível criar registro: ${error.response?.data?.message || error.message}`,
      });
    },
    onSuccess: () => {
      toast({
        title: "Sucesso",
        className: "bg-success border-zinc-100",
        variant: "destructive",
        description: `Usuário criado com sucesso`,
      });
    },
  });

  // Função chamada ao submeter o formulário
  const onSubmit = (formData: ConfirmRegistrationData) => {
    mutation.mutate({
      email,
      token,
      password: formData.password,
      nameCompany: formData.nameCompany,
    });
  };

  // Submissão do formulário da empresa
  const handleCompanySubmit = async (data: CompanyFormData) => {
    try {
      // console.log("Dados da empresa:", data);
      await axios.post(`${BASE_URL}/company`, data);
      setCompanyData(data);
      // console.log("companyData definido:", data);
      setStep(2);
    } catch (error: any) {
      console.error("Erro ao cadastrar empresa:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {step === 1 && (
        <Form {...companyForm}>
          <form
            onSubmit={companyForm.handleSubmit(handleCompanySubmit)}
            className="w-full bg-gray-200 dark:bg-secondary"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-slate-700 dark:text-white">Cadastrar Empresa</h2>

            <FormField
              control={companyForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome da Empresa"
                      {...field}
                      autoFocus={true}
                      className="ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={companyForm.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domínio</FormLabel>
                  <FormControl>
                    <Input placeholder="example.com" {...field} className="ring-0"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="text-xl text-white bg-green-500 hover:bg-green-600 dark:bg-slate-600 dark:hover:opacity-90" type="submit">
              Próximo
            </Button>
          </form>
        </Form>
      )}

      {step === 2 && companyData && (
        <Form {...userForm}>
          <form onSubmit={userForm.handleSubmit(onSubmit)} className="w-full bg-gray-200 dark:bg-secondary">
            <h2 className="text-2xl font-bold mb-4 text-center text-slate-700 dark:text-white">Cadastrar Usuário</h2>

            <FormField
              control={userForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} readOnly className="bg-gray-300 dark:bg-slate-700 ring-0"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={userForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                      autoFocus={true}
                      className="ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={userForm.control}
              name="nameCompany"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da empresa</FormLabel>
                  <FormControl>
                  <Input
                    type="text"
                    placeholder="Nome da empresa"
                    {...field}
                    readOnly className="bg-gray-300 ring-0 dark:bg-slate-700"
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="text-xl  text-white bg-green-500 hover:bg-green-600 dark:bg-slate-600 dark:hover:opacity-90" type="submit">
              Cadastrar Usuário
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default MultiStepForm;
