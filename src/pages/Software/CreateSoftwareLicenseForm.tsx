// components/Forms/CreateSoftwareForm.tsx
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
import { queryClient } from "../../queryClient";
import { createSoftware, updateSoftware } from "../../hooks/useSoftwares";
import { closeModalAtom } from "@/Context/ModalContext";
import { useSetAtom } from "jotai";

interface CreateSoftwareFormProps {
  initialData?: FormValues & { name: string };
  isEditing?: boolean;
}

const formSchema = z.object({
  name: z.string().min(1, "O Nome é obrigatório"),
  total_licenses: z.number().min(0, "Total de licenças deve ser maior ou igual a 0"),
  used_licenses: z.number().min(0, "Licenças usadas deve ser maior ou igual a 0"),
});

export type FormValues = z.infer<typeof formSchema>;

export default function CreateSoftwareForm({ initialData, isEditing }: CreateSoftwareFormProps) {
  const { toast } = useToast();
  const closeModal = useSetAtom(closeModalAtom);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      total_licenses: 0,
      used_licenses: 0
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      if (isEditing && initialData) {
        closeModal();
        return updateSoftware({ ...data }, initialData.name);
      }
      return createSoftware(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["softwares"] });
      toast({
        title: "Sucesso",
        description: isEditing ? "Software atualizado com sucesso" : "Software adicionado com sucesso",
        variant: "success",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Nome do Software</FormLabel>
              <FormControl>
                <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" autoFocus={true}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="total_licenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Total de Licenças</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="p-3 ring-slate-300 dark:ring-slate-700" 
                min={0}
                onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="used_licenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Licenças Usadas</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="p-3 ring-slate-300 dark:ring-slate-700"
                min={0}
                onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit"
          className="w-full text-xl text-white bg-green-500 hover:bg-green-600 dark:bg-slate-700 dark:hover:opacity-90"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Salvando..." : isEditing ? "Atualizar" : "Adicionar"}
        </Button>
      </form>
    </Form>
  );
}