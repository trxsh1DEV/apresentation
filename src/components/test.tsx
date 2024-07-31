import React from "react";
import { useSetAtom } from "jotai";
import { openModalAtom } from "../Context/ModalContext";

const TestModal: React.FC = () => {
  const openModal = useSetAtom(openModalAtom);
  const handleOpenModal = () => {
    openModal({
      title: "Dynamic Modal",
      content: (
        <div>
          <p>This is dynamic content passed to the modal.</p>
          <input type="text" placeholder="Enter some text" />
        </div>
      ),
      onConfirm: () => console.log("Confirmed!"),
      onCancel: () => console.log("Cancelled!"),
    });
  };

  return (
    <div>
      <p>
        Test content. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button onClick={handleOpenModal}>Abrir Modal</button>
    </div>
  );
};

export default TestModal;
