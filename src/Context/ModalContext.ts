import { atom } from "jotai";
import { ReactNode } from "react";

export interface ModalProps {
  title?: string;
  content: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface ModalState {
  isOpen: boolean;
  modalProps: ModalProps | null;
}

export const modalAtom = atom<ModalState>({
  isOpen: false,
  modalProps: null,
});

export const openModalAtom = atom(null, (get, set, modalProps: ModalProps) => {
  set(modalAtom, { isOpen: true, modalProps });
});

export const closeModalAtom = atom(null, (get, set) => {
  set(modalAtom, { isOpen: false, modalProps: null });
});
