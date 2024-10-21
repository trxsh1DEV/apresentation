import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/utils/request";
import { useToast } from "@/components/ui/use-toast";
import { LoadingSpinner } from "@/components/ui/myIsLoading";

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

const ConfirmRegistration: React.FC = () => {
  const { search } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ConfirmRegistrationData>();
  const { toast } = useToast();

  const params = new URLSearchParams(search);
  const email = params.get("email");
  const token = params.get("token");

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

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Confirmar Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="nameCompany" className="block mb-1">
            Nome da Empresa
          </label>
          <input
            type="text"
            id="nameCompany"
            {...register("nameCompany", { required: true })}
            className="border p-2 w-full dark:text-slate-700"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="border p-2 w-full dark:text-slate-700"
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending || isSubmitting}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {mutation.isPending || isSubmitting ? (
            <LoadingSpinner />
          ) : (
            "Confirm Registration"
          )}
        </button>
      </form>
      {/* {mutation.isError && (
        <p className="text-red-500">
          Error:{" "}
          {mutation.error?.response?.data?.message || mutation.error?.message}
        </p>
      )} */}
      {/* {mutation.isSuccess && (
        <p className="text-green-500">Registration confirmed!</p>
      )} */}
    </div>
  );
};

export default ConfirmRegistration;
