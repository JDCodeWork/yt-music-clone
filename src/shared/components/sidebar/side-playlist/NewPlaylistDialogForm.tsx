'use client';

import { IoClose } from "react-icons/io5";
import { ManagedDialog } from "../../dialog/ManagedDialog";
import { useDialog } from "@/shared/context/DialogContext";

export const NewPlaylistDialogForm = () => {
  const dialogName = 'new-playlist-form'

  const { close } = useDialog()

  return (
    <ManagedDialog name={dialogName}>
      <div
        className="flex flex-col gap-6 w-full max-w-2xl max-h-xl bg-stone-900 px-4 py-6 z-50 rounded-lg"
      >
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium text-stone-200 flex gap-4 justify-center items-center">
            Aviso importante
          </h2>
          <button type="button" onClick={close} className=" text-stone-50 cursor-pointer transition-colors">
            <IoClose className="size-6" />
          </button>
        </header>
      </div>
    </ManagedDialog>
  )
}
