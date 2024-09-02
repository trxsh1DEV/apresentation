import React from "react";
import "./style.css"; // Adicione estilos para o modal

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="backdrop" />
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.07 4.93l-1.41-1.41L12 9.17 6.34 3.51 4.93 4.93l5.66 5.66-5.66 5.66 1.41 1.41 5.66-5.66 5.66 5.66 1.41-1.41-5.66-5.66 5.66-5.66z"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
