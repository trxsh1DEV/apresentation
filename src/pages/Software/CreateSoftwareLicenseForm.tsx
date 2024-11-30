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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";

interface CreateSoftwareFormProps {
  initialData?: FormValues & { name: string };
  isEditing?: boolean;
}

const formSchema = z.object({
  name: z.string().min(1, "O Nome é obrigatório"),
  total_licenses: z.number().min(0, "Total de licenças deve ser maior ou igual a 0"),
  used_licenses: z.number().min(0, "Licenças usadas deve ser maior ou igual a 0"),
  provider: z.string().min(0, "Insira um fornecedor").optional(),
  due_date: z
  .date({
    required_error: "Insira uma data de vencimento.",
  })
  .optional(),
  file: z.any().optional(),
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
      used_licenses: 0,
      provider: "",
      due_date: undefined,
      file: null,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("total_licenses", data.total_licenses.toString());
      formData.append("used_licenses", data.used_licenses.toString());

      if (data.provider) {
        formData.append("provider", data.provider.toString());
      }

      if (data.due_date) {
        formData.append("due_date", data.due_date.toString());
      }

      if (data.file) {
        formData.append("file", data.file[0]);
      }

      if (isEditing && initialData) {
        closeModal();
        return updateSoftware({...data}, initialData.name);
      }
      return createSoftware(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["softwares-licenses"] });
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto p-4 bg-white dark:bg-transparent">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Nome do Software (Obrigatório)</FormLabel>
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

        <FormField
          control={form.control}
          name="provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Fornecedor (Opcional)</FormLabel>
              <FormControl>
                <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="due_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                Data de vencimento (Opcional)
              </FormLabel>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <FormControl className="p-[1.6rem]">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        new Intl.DateTimeFormat("pt-BR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(field.value))
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date()
                    }
                    locale={ptBR}
                    // initialFocus
                  />
                </PopoverContent>
              </Popover>
              {/* <FormDescription>Ou data de recebimento</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {!isEditing && (
          <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">NF-e (Opcional)</FormLabel>
              <FormControl>
                <Input type="file" accept="application/pdf" onChange={(e) => field.onChange(e.target.files)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        )}

        <Button 
          type="submit"
          className="w-full text-xl text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Salvando..." : isEditing ? "Atualizar" : "Adicionar"}
        </Button>
      </form>
    </Form>
  );
}
