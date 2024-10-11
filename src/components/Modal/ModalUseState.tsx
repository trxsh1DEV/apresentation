import { FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large"; // Tamanhos predefinidos
}

const sizeClasses = {
  small: "max-w-[400px]",
  medium: "max-w-[800px]",
  large: "max-w-[1200px]",
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium", // Default size if not provided
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        aria-describedby="modal description"
        className={`flex bg-gray-800 flex-col items-center justify-center border-4 border-slate-600 ${sizeClasses[size]}`}
      >
        <DialogHeader className="w-full flex justify-between h-14">
          <DialogTitle className="text-2xl font-bold border-none h-in text-center">
            {title}
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <ScrollArea className="w-full flex flex-col items-center justify-center max-h-[75vh]">
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
