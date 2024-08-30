// import { useDispatch, useSelector } from "react-redux";
// import { toggleModal } from "../../redux/modalSlice";
// import Peripherical from "./TablePeriphericals";
import FormPeripherical from "./FormPeripherical";
import {
  FormPropsPeripherical,
  schemaPeripherical,
} from "../../utils/Schemas/PeriphericalSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./clients.css";
// import Modal from "../../components/Modal/Modal";
import { queryClient } from "../../queryClient";
import { useMutation } from "@tanstack/react-query";
import { createPeripherical } from "../../hooks/usePeriphericals";
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/Context/ModalContext";

export default function TablePeriphericals() {
  const openModal = useSetAtom(openModalAtom);
  const handleModal = () =>
    openModal({
      title: "Adicionar item ao estoque",
      content: (
        <FormPeripherical
          errors={errors}
          handleForm={handleForm}
          handleSubmit={handleSubmit}
          register={register}
        />
      ),
      // onConfirm: () => console.log("Confirmed!"),
      // onCancel: () => console.log("Cancelled!"),
    });

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
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["table-data"] });
    },
  });

  const handleForm = async (data: any) => {
    console.log(data);
    queryClient.setQueriesData({ queryKey: ["table-data"] }, data);
    const state = queryClient.getQueriesData({ queryKey: ["table-data"] });
    console.log(state);
    try {
      mutation.mutate(data);
      reset();
      handleModal();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // useEffect(() => {
  //   console.log("rendering");
  // }, [showModal]);
  return (
    <>
      <button style={{ marginTop: "30px" }} onClick={handleModal}>
        Adicionar novo
      </button>
      {/* {showModal && (
        <Modal onClose={handleCreateNewClick} isOpen={showModal}>
          <FormPeripherical
            errors={errors}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            register={register}
          />
        </Modal>
      )} */}
    </>
  );
}
