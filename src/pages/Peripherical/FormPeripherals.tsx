import { createPeripherical, updatePeripheral } from "@/hooks/usePeriphericals";
import { queryClient } from "@/queryClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import MultipleSelector, { Option } from "@/components/ui/select-multiple";
import { Textarea } from "@/components/ui/textarea";
import requestWithToken from "@/utils/request";
import { CustomDataCompanie } from "@/utils/types/types";
import { UnexpectedError } from "@/data/error/UnexpectedError";
import { Button } from "@/components/ui/button";
import { closeModalAtom } from "@/Context/ModalContext";
import { useSetAtom } from "jotai";

const OPTIONS_CATEGORY: Option[] = [
  { label: "Computadores e Laptops", value: "Computadores e Laptops" },
  { label: "Servidores", value: "Servidores" },
  { label: "Monitores", value: "Monitores" },
  { label: "Impressoras e Scanners", value: "Impressoras e Scanners" },
  { label: "Roteadores e Switches", value: "Roteadores e Switches" },
  { label: "Armazenamento Externo", value: "Armazenamento Externo" },
  { label: "Dispositivos de Rede", value: "Dispositivos de Rede" },
  { label: "Periféricos", value: "Periféricos" },
  { label: "Software e Licenças", value: "Software e Licenças" },
  {
    label: "Nobreaks e Estabilizadores",
    value: "Nobreaks e Estabilizadores"
  },
  // {
  //   label: "Projetores e Telas de Projeção",
  //   value: "projetores-telas",
  //   disable: true,
  // },
  {
    label: "Equipamentos de Videoconferência",
    value: "Equipamentos de Videoconferência"
  },
  { label: "Telefonia IP", value: "Telefonia IP" },
  { label: "Cabos e Adaptadores", value: "Cabos e Adaptadores" },
  { label: "Dispositivos Móveis", value: "Dispositivos Móveis" },
  { label: "Outros", value: "Outros" }
];

const formSchema = z.object({
  host: z.string().optional(),
  purchase_price: z.number().min(0, "Digite um número maior").optional(),
  class: z.string().optional(),
  department: z.string().optional(),
  person: z.string().optional(),
  manufacturer: z.string().optional(),
  sample: z.string().optional(),
  nfe: z.string().optional(),
  // category: z
  //   .array(z.enum(["Informática", "Periféricos", "Outros"]))
  //   .min(1, "Selecione uma categoria"),
  category: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        disable: z.boolean().optional()
      })
    )
    .min(1, "Selecione ao menos uma categoria"),
  patrimony: z.string().optional(),
  date_buy: z
    .date({
      required_error: "A data de compra é obrigatória."
    })
    .optional(),
  local: z.string().optional(),
  status: z.enum(["Normal", "Atenção", "Critico"]).optional(),
  in_stock: z.boolean(),
  observation: z
    .string()
    .min(0, {
      message: "O campo deve ter mais de 2 caracteres"
    })
    .max(300, {
      message: "O campo deve ter menos de 300 caracteres"
    })
    .optional()
});

export type FormPropsPeripherical = z.infer<typeof formSchema>;
export type FormPropsPeriphericalExtended = FormPropsPeripherical & { _id: string };

interface createPeriphericalProps {
  initialData?: FormPropsPeriphericalExtended & { id: string };
  isEditing?: boolean;
}

export default function FormPeripherals({ initialData, isEditing }: createPeriphericalProps) {
  const { toast } = useToast();
  const closeModal = useSetAtom(closeModalAtom);
  //   console.log("oi", initialData);

  const { data: companieData } = useQuery<CustomDataCompanie>({
    queryKey: ["company-data"],
    queryFn: async () => {
      try {
        const response = await requestWithToken.get(`/company`);
        return response.data;
      } catch (error: any) {
        throw new UnexpectedError("Falha ao buscar os dados: " + (error.response?.data?.message || error.message));
      }
    },
    retry: 1
  });

  const formattedInitialData = initialData
    ? {
        ...initialData,
        category:
          initialData.category?.map((item: any) => ({
            label: item,
            value: item
          })) || []
      }
    : null;

  const form = useForm<FormPropsPeripherical>({
    resolver: zodResolver(formSchema),
    defaultValues: formattedInitialData || {
      purchase_price: 0,
      status: "Normal",
      department: undefined,
      category: [],
      class: "",
      in_stock: false,
      date_buy: undefined,
      host: "",
      local: "",
      manufacturer: "",
      nfe: "",
      patrimony: "",
      person: "",
      sample: "",
      observation: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: FormPropsPeripherical) => {
      if (isEditing && initialData) {
        closeModal();
        return updatePeripheral({ ...data }, initialData._id);
      }
      return createPeripherical(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-stock-data"] });
      toast({
        title: "Sucesso",
        variant: "success",
        description: `Periférico ${isEditing ? "atualizado" : "criado"} com sucesso`
      });
      form.reset();
    },
    onError: (err: any) => {
      toast({
        title: "Falha",
        variant: "destructive",
        description: `Periférico não foi ${isEditing ? "atualizado" : "criado"}: ${err.response.data.message[0] || err.message}`
      });
    }
  });

  const onSubmit = async (data: FormPropsPeripherical) => {
    mutation.mutate(data);
    form.reset();
    // closeModal(); // Fecha o modal após o envio
  };

  return (
    // <div className="flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 py-5 px-10 bg-gray-200 dark:bg-gray-700 text-center w-full"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="host"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">Host</FormLabel>
                  <FormControl>
                    <Input className="p-3 ring-0" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="purchase_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Preço de compra
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-3 ring-0"
                      type="number"
                      {...field}
                      min={0}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Classe
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-3 ring-0"
                      {...field}
                      value={field.value ?? ""}
                      placeholder="Ex: Notebook ou Impressora"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Departamento
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="p-[1.6rem]">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um departamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Departamentos</SelectLabel>
                        {companieData?.custom?.department?.map((department) => (
                          <SelectItem key={department} value={department}>
                            {department}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="person"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Pessoa Responsável
                  </FormLabel>
                  <FormControl>
                    <Input className="p-3 ring-0" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="manufacturer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Fabricante
                  </FormLabel>
                  <FormControl>
                    <Input className="p-3 ring-0" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="sample"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Modelo/Versão
                  </FormLabel>
                  <FormControl>
                    <Input className="p-3 ring-0" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nfe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">NF-e</FormLabel>
                  <FormControl>
                    <Input className="p-3 ring-0" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="patrimony"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Patrimônio
                  </FormLabel>
                  <FormControl>
                    <Input className="p-3 ring-0" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date_buy"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem] ">
                    Data de Compra
                  </FormLabel>
                  <Popover modal={true}>
                    <PopoverTrigger asChild>
                      <FormControl className="p-[1.6rem]">
                        <Button
                          variant={"outline"}
                          className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? (
                            new Intl.DateTimeFormat("pt-BR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
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
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        locale={ptBR}
                        // initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Ou data de recebimento</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Categoria(s)
                  </FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      defaultOptions={OPTIONS_CATEGORY}
                      hidePlaceholderWhenSelected
                      placeholder="Selecione ao menos uma categoria"
                      emptyIndicator={
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                          Nenhum resultado encontrado.
                        </p>
                      }
                      className="bg-background p-[0.45rem]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="local"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">Local</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="p-[1.6rem]">
                      <SelectTrigger>
                        <SelectValue placeholder="Localizado no(a)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Locais</SelectLabel>
                        {companieData?.custom?.local?.map((local) => (
                          <SelectItem key={local} value={local}>
                            {local}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Status / Situação
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="p-[1.6rem]">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a situação" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="Atenção">Atenção</SelectItem>
                      <SelectItem value="Critico">Critico</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="in_stock"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Em estoque?
                  </FormLabel>
                  <br />
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} className="bg-secondary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="observation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 text-xl tracking-[0.12rem]">
                    Observações
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Faça alguma observação sobre o equipamento"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="text-xl text-white bg-green-500 hover:bg-green-600 dark:bg-secondary dark:hover:opacity-90"
          >
            {mutation.isPending ? "Salvando..." : "Salvar"}
          </Button>
        </form>
      </Form>
    // </div>
  );
}
