'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type DialogContextType = {
  isOpen: (name: string) => boolean;
  activeDialog: string | null
  open: (name: string) => void;
  close: () => void;
};
const DialogContext = createContext<DialogContextType>({
  activeDialog: null,
  close: () => {},
  isOpen: () => false,
  open: () => {},
});

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const isOpen = (name: string) => {
    return activeDialog === name;
  };

  const open = (name: string) => {
    setActiveDialog(name)
  };

  const close = () => setActiveDialog(null);

  useEffect(() => {
    if (activeDialog) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [activeDialog]);

  return (
    <DialogContext.Provider value={{ isOpen, open, close, activeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
