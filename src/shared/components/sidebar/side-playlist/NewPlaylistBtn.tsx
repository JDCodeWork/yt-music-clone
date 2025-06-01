'use client';

import { useDialog } from "@/shared/context/DialogContext"
import { TfiPlus } from "react-icons/tfi"
import { NewPlaylistDialogForm } from "./new-playlist-dialog-form/NewPlaylistDialogForm";

export const NewPlaylistBtn = () => {
  const { open } = useDialog()

  return (
    <>
      <button
        className="w-full flex gap-2 justify-center bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium rounded-4xl py-2 transition-colors cursor-pointer"
        onClick={() => open('new-playlist-form')}
      >
        <TfiPlus className="size-6" />
        Nueva playlist
      </button>
      <NewPlaylistDialogForm />
    </>
  )
}