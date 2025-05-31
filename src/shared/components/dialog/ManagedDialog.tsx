import { useDialog } from "@/shared/context/DialogContext";
import { DialogPortal } from "./DialogPortal";
import { useEffect } from "react";

type ManagedDialogProps = {
  name: string;
  children: React.ReactNode;
};

export const ManagedDialog = ({ name, children }: ManagedDialogProps) => {
  const { isOpen, close } = useDialog();

  if (!isOpen(name)) return null;

  return (
    <DialogPortal>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={close}>
        <div onClick={(e) => e.stopPropagation()} >
          {children}
        </div>
      </div>
    </DialogPortal>
  );
};