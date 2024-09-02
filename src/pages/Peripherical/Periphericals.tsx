import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  FormPropsPeripherical,
  schemaPeripherical,
} from "../../utils/Schemas/PeriphericalSchema";
import { queryClient } from "../../queryClient";
import { createPeripherical } from "../../hooks/usePeriphericals";
import FormPeripherical from "./FormPeripherical";
import "./clients.css";
import Modal from "@/components/Modal/ModalUseState";
import { Button } from "@/components/ui/button";

export default function TablePeriphericals() {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormPropsPeripherical>({
    mode: "onBlur",
    resolver: zodResolver(schemaPeripherical),
  });

  const mutation = useMutation({
    mutationFn: createPeripherical,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-data"] });
    },
  });

  const handleForm = async (data: any) => {
    try {
      mutation.mutate(data);
      reset();
      closeModal(); // Fecha o modal após o envio
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleOpenModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <main className="flex justify-center">
      <Button onClick={handleOpenModal} className="mt-14 text-2xl">
        Adicionar
      </Button>
      {showModal && (
        <Modal onClose={closeModal} isOpen={showModal}>
          <FormPeripherical
            errors={errors}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            register={register}
          />
        </Modal>
      )}
    </main>
  );
}
