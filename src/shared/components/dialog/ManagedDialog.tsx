'use client'

import { useDialog } from "@/shared/context/DialogContext";
import { DialogPortal } from "./DialogPortal";
import { useEffect, useState } from "react";

type DialogCloseOpts = {
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}

type ManagedDialogProps = {
  name: string;
  children: React.ReactNode;
  closeOpts?: DialogCloseOpts;
};

export const ManagedDialog = ({ name, children, closeOpts }: ManagedDialogProps) => {
  const { closeOnEscape = false, closeOnOutsideClick = false } = closeOpts || {};
  const { isOpen, close } = useDialog();
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen(name)) {
      setDialogIsOpen(true);
    } else {
      setDialogIsOpen(false);
    }
  }, [isOpen, name]);

  useEffect(() => {
    if (!dialogIsOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dialogIsOpen, closeOnEscape]);

  if (dialogIsOpen) return (
    <DialogPortal>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={() => closeOnOutsideClick && close()}
      >
        <div onClick={(e) => e.stopPropagation()} >
          {children}
        </div>
      </div>
    </DialogPortal>
  );
};