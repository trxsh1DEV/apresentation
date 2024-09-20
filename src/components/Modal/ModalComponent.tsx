import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { closeModalAtom, modalAtom } from "../../Context/ModalContext";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
import "./style.css";

const Modal: React.FC = () => {
  const { isOpen, modalProps } = useAtomValue(modalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  if (!isOpen || !modalProps) return null;

  const { title, content, onConfirm, onCancel, independenceMode } = modalProps;
  console.log(independenceMode);

  return (
    // <div className="modal-container">
    //   <div className="backdrop" onClick={() => closeModal()} />
    //   <div className="content">
    //     <div className="close-button" onClick={() => closeModal()}>
    //       <X size={40} />
    //     </div>
    //     {title && <h2 className="text-center">{title}</h2>}
    //     <div className="modal-content">{content}</div>
    //     {(onConfirm || onCancel) && (
    //       <div className="modal-actions">
    //         {onCancel && (
    //           <button
    //             onClick={() => {
    //               onCancel();
    //               closeModal();
    //             }}
    //           >
    //             Cancel
    //           </button>
    //         )}
    //         {onConfirm && (
    //           <button
    //             onClick={() => {
    //               onConfirm();
    //               closeModal();
    //             }}
    //           >
    //             Confirm
    //           </button>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
    <>
      {independenceMode ? (
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
      ) : (
        <Dialog open={isOpen} onOpenChange={() => closeModal()}>
          <DialogContent className="sm:max-w-[90%] md:max-w-[800px] max-h-[90vh] min-w-96 bg-zinc-900 text-white border-zinc-700">
            <DialogHeader className="border-b border-zinc-700 pb-2">
              <DialogTitle className="text-xl font-bold border-none">
                {title}
              </DialogTitle>
              {/* <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-full p-1 hover:bg-zinc-700"
            onClick={() => closeModal()}
          >
            <X className="h-5 w-5" />
          </Button> */}
            </DialogHeader>
            {/* <div className="mt-4 flex-grow overflow-hidden">{content}</div> */}
            <div className="mt-4 flex-grow overflow-auto max-h-[70vh]">
              {content}
            </div>
            {/* <ScrollArea className="mt-4 flex-grow overflow-auto max-h-[70vh]">
          {content}
        </ScrollArea> */}
          </DialogContent>
        </Dialog>
      )}
      {/* {!independenceMode && (
      )} */}
    </>
  );
};

export default Modal;
