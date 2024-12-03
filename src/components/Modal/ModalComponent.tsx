import { FC } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { closeModalAtom, modalAtom } from "../../Context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import "./style.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogDescription } from "@radix-ui/react-dialog";

const sizeClasses = {
  small: "max-w-[400px]",
  medium: "max-w-[800px]",
  large: "max-w-[1000px]",
};

const Modal: FC = () => {
  const { isOpen, modalProps } = useAtomValue(modalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  if (!isOpen || !modalProps) return null;

  const {
    title,
    content,
    size = "medium",
    onConfirm,
    onCancel,
    independenceMode,
  } = modalProps;

  if (independenceMode) {
    return (
      <div className="modal-container">
        {content}
      </div>
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => closeModal()}>
        <DialogContent
          aria-describedby="modal description"
          className={`${sizeClasses[size]} max-h-[90vh] bg-gray-100 min-w-96 dark:bg-zinc-900 dark:text-white border-zinc-700 overflow-hidden`}
        >
          <DialogHeader className="border-b border-zinc-700 pb-2">
            <DialogTitle className="text-2xl font-bold border-none text-center text-slate-700 dark:text-white">
              {title}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ScrollArea className="mt-2 flex-grow overflow-hidden max-h-[70vh] p-4">
            {content}
          </ScrollArea>
        </DialogContent>
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
      </Dialog>
    </>
  );
};

export default Modal;