import React from "react";
import "./style.css";
import { useAtomValue, useSetAtom } from "jotai";
import { closeModalAtom, modalAtom } from "../../Context/ModalContext";
import { X } from "lucide-react";

const Modal: React.FC = () => {
  const { isOpen, modalProps } = useAtomValue(modalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  if (!isOpen || !modalProps) return null;

  const { title, content, onConfirm, onCancel } = modalProps;

  return (
    <div className="modal-container">
      <div className="backdrop" onClick={() => closeModal()} />
      <div className="content">
        <div className="close-button" onClick={() => closeModal()}>
          <X size={40} />
        </div>
        {title && <h2 className="text-center">{title}</h2>}
        <div className="modal-content">{content}</div>
        {(onConfirm || onCancel) && (
          <div className="modal-actions">
            {onCancel && (
              <button
                onClick={() => {
                  onCancel();
                  closeModal();
                }}
              >
                Cancel
              </button>
            )}
            {onConfirm && (
              <button
                onClick={() => {
                  onConfirm();
                  closeModal();
                }}
              >
                Confirm
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
