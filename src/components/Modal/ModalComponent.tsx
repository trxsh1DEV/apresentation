import { FC } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { closeModalAtom, modalAtom } from "../../Context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
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
        {/* <div className="backdrop" onClick={() => closeModal()} />
          <div className="content">
            <div className="close-button" onClick={() => closeModal()}>
              <X size={40} />
            </div>
            {title && <h2 className="text-center">{title}</h2>}
            div{content}
            {(onConfirm || onCancel) && renderModalActions()}
          </div> */}
      </div>
    );
  }
  console.log(typeof size, size, size ? size : 800);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => closeModal()}>
        <DialogContent
          aria-describedby="modal description"
          className={`sm:max-w-[90%] ${sizeClasses[size]} max-h-[90vh] min-w-96 bg-zinc-900 text-white border-zinc-700`}
        >
          <DialogHeader className="border-b border-zinc-700 pb-2">
            <DialogTitle className="text-2xl font-bold border-none">
              {title}
            </DialogTitle>
            <DialogDescription></DialogDescription>
            {/* <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-full p-1 hover:bg-zinc-700"
            onClick={() => closeModal()}
          >
            <X className="h-5 w-5" />
          </Button> */}
          </DialogHeader>
          <div id="modal-description" className="sr-only">
            Descrição do modal para leitores de tela.
          </div>
          {/* <div className="mt-4 flex-grow overflow-hidden">{content}</div> */}
          {/* <div className="mt-4 flex-grow overflow-auto max-h-[70vh]">
              {content}
            </div> */}
          <ScrollArea className="mt-4 flex-grow overflow-auto max-h-[70vh]">
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
      {/* {!independenceMode && (
      )} */}
    </>
  );
};

export default Modal;
