// components/Forms/DistributionForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { queryClient } from "../../queryClient";
import { createDistribution, updateDistribution } from "../../hooks/useDistribution";
import { closeModalAtom } from "@/Context/ModalContext";
import { useSetAtom } from "jotai";
import requestWithToken from "@/utils/request";
import { Switch } from "@/components/ui/switch";

export enum DistributionType {
  EXECUTABLE = 'executable',
  SOFTWARE = 'software',
  COMMAND = 'command',
  SCRIPT = 'script'
}

const fetchFiles = async () => {
  try{
    const response = await requestWithToken.get('/files');
    return response.data;
  } catch(err: any) {
    throw new Error(err.response.data.message);
  }
};

const distributionSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  type: z.nativeEnum(DistributionType).refine((type) => type !== undefined, 'Type is required'),
  creator: z.string().optional(),
  useExistingFile: z.boolean().default(false), // Replace fileMode with boolean
  file: z.instanceof(File).refine((file) => file.size < 100000000, {
    message: 'Seu arquivo é maior que 100MB.',
  }).optional(),
  selectedFileId: z.string().optional(),
  department: z.string().optional(),
  fileNickname: z.string().optional()
}).refine((data) => {
  if (!data.useExistingFile) return data.file != null;
  if (data.useExistingFile) return data.selectedFileId != null;
  return false;
}, {
  message: "You must either upload a new file or select an existing one"
});

export type DistributionFormValues = z.infer<typeof distributionSchema>;

interface DistributionFormProps {
  initialData?: DistributionFormValues & { _id: string };
  isEditing?: boolean;
}

const DistributionForm: FC<DistributionFormProps> = ({ initialData, isEditing }) => {
  const { toast } = useToast();
  const closeModal = useSetAtom(closeModalAtom);

  const form = useForm<DistributionFormValues>({
    resolver: zodResolver(distributionSchema),
    defaultValues: initialData || {
      name: '',
      description: '',
      type: undefined,
      creator: '',
      file: undefined,
      department: ''
    }
  });

  const filesQuery = useQuery({
    queryKey: ['files'],
    queryFn: fetchFiles,
    enabled: form.watch('useExistingFile')
  });

  const mutation = useMutation({
    mutationFn: (data: DistributionFormValues) => {
      const formData = new FormData();
      formData.append("name", data.name);
      data.description && formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("creator", data?.creator || "");
      data.department && formData.append("department", data.department);
  
      if (!data.useExistingFile && data.file) {
        const file = new File([data.file], data.fileNickname || data.file.name, { type: data.file.type });
        formData.append("file", file);
      } else if (data.useExistingFile && data.selectedFileId) {
        formData.append("fileId", data.selectedFileId);
      }
  
      if (isEditing && initialData) {
        closeModal();
        return updateDistribution(formData, initialData._id);
      }
      return createDistribution(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["distributions"] });
      toast({
        title: "Sucesso",
        description: isEditing ? "Distribuição atualizada com sucesso" : "Distribuição adicionada com sucesso",
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

  const onSubmit = (data: DistributionFormValues) => {
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
          <FormLabel className="text-lg">Nome da Distribuição (Obrigatório)</FormLabel>
          <FormControl>
            <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" autoFocus={true} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">Descrição (Opcional)</FormLabel>
          <FormControl>
            <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="type"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">Tipo</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="py-6">
                <SelectValue placeholder="Tipo de Distribuição" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="executable">Executável</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="script">Script</SelectItem>
              {/* <SelectItem value="command">Comando</SelectItem> */}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="creator"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">Criador (Opcional)</FormLabel>
          <FormControl>
            <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" />
          </FormControl>
          <FormDescription>
            Por padrão é o usuário logado
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="department"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">Departamento (Opcional)</FormLabel>
          <FormControl>
            <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

<FormField
  control={form.control}
  name="useExistingFile"
  render={({ field }) => (
    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <FormLabel className="text-lg">Usar arquivo existente?</FormLabel>
        <FormDescription>
          Alterne para selecionar um arquivo já existente
        </FormDescription>
      </div>
      <FormControl>
        <Switch
          checked={field.value}
          onCheckedChange={field.onChange}
          className="bg-secondary"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

{form.watch('useExistingFile') ? (
  <FormField
    control={form.control}
    // disabled={form.getValues("type")}
    name="selectedFileId"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg">Arquivo Existente</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className="py-6">
              <SelectValue placeholder="Selecione um arquivo..." />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {filesQuery.data?.map((file: any) => (
              <SelectItem key={file._id} value={file._id}>
                {file.originalname}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
) : (
  <FormField
    control={form.control}
    name="file"
    render={({ field: { value, onChange, ...field } }) => (
      <FormItem>
        <FormLabel className="text-lg">Arquivo (.exe | .msi | .bat | .ps1)</FormLabel>
        <FormControl>
          <Input
            type="file"
            onChange={(e) => onChange(e.target.files?.[0])}
            {...field}
            className="file:mr-5 file:py-1 dark:file:text-white p-3 ring-slate-300 dark:ring-slate-700"
            accept=".exe,.msi,.bat,.ps1"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)}

    
<FormField
      control={form.control}
      name="fileNickname"
      disabled={!form.getValues("file")}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">Nome do Arquivo (Opcional)</FormLabel>
          <FormControl>
            <Input {...field} className="p-3 ring-slate-300 dark:ring-slate-700" />
          </FormControl>
          <FormDescription>
            Por padrão é o mesmo nome do arquivo original
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />

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
};

export default DistributionForm;