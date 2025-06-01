'use client'
import { useDialog } from "@/shared/context/DialogContext";
import { useRef, useEffect, useState } from "react";
import { DialogPortal } from "./DialogPortal";

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
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen(name)) {
      setDialogIsOpen(true);
    } else {
      setDialogIsOpen(false);
    }
  }, [isOpen, name, ]);

  // Detect if the click is outside the dialog
  useEffect(() => {
    if (!dialogIsOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dialogIsOpen, closeOnOutsideClick, close]);

  // Escape key
  useEffect(() => {
    if (!dialogIsOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dialogIsOpen, closeOnEscape, close]);

  if (!dialogIsOpen) return null;

  return (
    <DialogPortal>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div ref={dialogRef}>
          {children}
        </div>
      </div>
    </DialogPortal>
  );
};
