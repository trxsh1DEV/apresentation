import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import requestWithToken from "@/utils/request";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

const createUser = async (data: FormValues) => {
  try {
    const response = await requestWithToken.get("/company");
    // Create a new object with all data plus the company name
    const userData = {
      ...data,
      nameCompany: response.data.name
    };
    // Now use userData instead of data for the POST request
    await requestWithToken.post("/users", userData);
  } catch(error: any) {
    console.log(error);
    throw new Error(error?.response?.data?.message || error.message);
  }
}

export default function CreateUserRegistration() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast({
        title: "Sucesso",
        description: "Usuário cadastrado com sucesso",
        className: "bg-success border-zinc-100",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto p-4 bg-white dark:bg-secondary">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="username@email.com" 
                  type="email"
                  className="p-3 ring-slate-300 dark:ring-slate-700"
                  {...field} 
                  autoFocus={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Senha</FormLabel>
              <FormControl>
                <Input 
                  placeholder="******" 
                  type="password"
                  className="p-3 ring-slate-300 dark:ring-slate-700"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <Button 
          type="submit" 
          className="w-full text-lg text-white bg-green-500 hover:bg-green-600 dark:bg-slate-700 dark:hover:opacity-90"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </form>
    </Form>
  );
}