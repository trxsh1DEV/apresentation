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
          className={`${sizeClasses[size]} max-h-[99vh] bg-gray-100 dark:bg-zinc-900 dark:text-white border-zinc-700 overflow-hidden p-4`}
        >
          <DialogHeader className="border-b border-zinc-700">
            <DialogTitle className="text-2xl font-bold border-none text-center text-slate-700 dark:text-white">
              {title}
            </DialogTitle>
            {/* <DialogDescription></DialogDescription> */}
          </DialogHeader>
          <ScrollArea className="flex-grow overflow-hidden">
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