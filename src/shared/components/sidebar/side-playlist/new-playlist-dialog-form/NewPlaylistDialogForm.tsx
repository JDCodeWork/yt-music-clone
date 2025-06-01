'use client';

import { ManagedDialog } from "@/shared/components";
import { useDialog } from "@/shared/context/DialogContext";
import { PrivacySelect } from "./PrivacySelect";

export const NewPlaylistDialogForm = () => {
  const dialogName = 'new-playlist-form'

  const { close } = useDialog()

  return (
    <ManagedDialog
      name={dialogName}
      closeOpts={{ closeOnOutsideClick: true, closeOnEscape: true }}
    >
      <div
        className="flex flex-col gap-6 w-2xl max-h-xl bg-stone-900 pl-8 py-6 rounded-lg"
      >
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-black text-stone-200 flex gap-4 justify-center items-center">
            Nueva playlist
          </h2>
        </header>
        <div className="pr-10 flex flex-col gap-12">
          <label className="relative w-full h-full cursor-text">
            <input
              type="text"
              name="title"
              className="peer w-full pb-1 border-b-2 border-stone-600 bg-transparent focus:outline-none mt-2 focus:border-sky-400 caret-sky-400 transition-colors"
              placeholder=" "
            />
            <span
              className="absolute left-0 -top-4 text-sm text-stone-400 transition-all duration-200 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base select-none"
            >
              Titulo
            </span>
          </label>
          <label className="relative w-full h-full cursor-text">
            <textarea
              name="description"
              className="peer w-full pb-1 border-b-2 border-stone-600 bg-transparent focus:outline-none mt-2 focus:border-sky-400 caret-sky-400 transition-colors resize-none overflow-hidden"
              placeholder=" "
              rows={1}
              onInput={(e) => {
                const target = e.currentTarget;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
            <span
              className="absolute left-0 -top-4 text-sm text-stone-400 transition-all duration-200 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base select-none"
            >
              Descripción
            </span>
          </label>

          <PrivacySelect />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 hover:bg-stone-700 text-stone-200 rounded-full  transition-colors cursor-pointer"
            >Cancelar</button>
            <button
              className="px-4 py-2 bg-stone-200 text-stone-800 font-bold hover:bg-stone-300 rounded-full  transition-colors cursor-pointer"
            >Crear</button>
          </div>
        </div>
      </div>
    </ManagedDialog>
  )
}
