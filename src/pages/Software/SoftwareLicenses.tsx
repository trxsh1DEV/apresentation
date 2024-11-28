// SoftwareLicenses.tsx
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteSoftware, fetchSoftwares } from "../../hooks/useSoftwares";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/Context/ModalContext";
import CreateSoftwareForm, { FormValues } from "./CreateSoftwareLicenseForm";
import { Edit, PlusCircle, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function SoftwareLicenses() {
  const openModal = useSetAtom(openModalAtom);
  const queryClient = useQueryClient();

  const { data: softwares } = useQuery({
    queryKey: ["softwares"], 
    queryFn: fetchSoftwares
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSoftware,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["softwares"] });
      toast({
        title: "Sucesso",
        description: "Software removido com sucesso",
        variant: "success",
      });
    },
  });

  const handleDelete = (id: string) => {
      deleteMutation.mutate(id);
  };

  const handleOpenModal = () => {
    openModal({
      content: <CreateSoftwareForm />,
      title: "Adicionar Licença",
      size: "medium",
    });
  };


  const handleEdit = (software: FormValues & { name: string }) => {
    openModal({
      content: <CreateSoftwareForm initialData={software} isEditing />,
      title: "Editar Licença",
      size: "medium",
    });
  };

  return (
    <main className="flex flex-col p-6 w-full">
      <Button 
        onClick={() => handleOpenModal()} 
        className="self-end mb-4 text-xl text-white bg-green-500 hover:bg-green-600"
      >
        <PlusCircle className="mr-2 h-6 w-6" /> Adicionar
      </Button>
      
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl">Nome do Software</TableHead>
              <TableHead className="text-xl">Total de Licenças</TableHead>
              <TableHead className="text-xl">Licenças Usadas</TableHead>
              <TableHead className="text-xl">Status</TableHead>
              <TableHead className="text-right text-xl">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {softwares?.licenses?.map((software: FormValues & { name: string }) => (
              <TableRow key={software.name}>
                <TableCell className="text-lg">{software.name}</TableCell>
                <TableCell className="text-lg">{software.total_licenses}</TableCell>
                <TableCell className="text-lg">{software.used_licenses}</TableCell>
                <TableCell className="text-lg">{software.total_licenses >= software.used_licenses ? "OK" : "Alerta"}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(software)}
                    className="mr-2 text-green-500 hover:text-green-700"
                  >
                    <Edit className="h-7 w-7" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-7 w-7" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                      <AlertDialogTitle className="text-slate-700 dark:text-white text-center">
                          Tem certeza que deseja remover esta licença?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta ação não pode ser desfeita. Isso irá deletar permanentemente esta licença.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(software.name)}>Excluir</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}