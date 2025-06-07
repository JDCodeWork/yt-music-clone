'use client';

import { ManagedDialog } from "@/shared/components";
import { useDialog } from "@/shared/context/DialogContext";
import { PrivacySelect } from "./PrivacySelect";
import { useState } from "react";

type FormValues = {
  title: string;
  description: string;
  privacy: string;
}

export const NewPlaylistDialogForm = () => {
  const dialogName = 'new-playlist-form'
  const [formValues, setFormValues] = useState<Partial<FormValues>>({})
  const [formErrors, setFormErrors] = useState<Partial<keyof FormValues>[]>([])

  const { close } = useDialog()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }

  const handleCreatePlaylist = () => {
    if (!formValues.title) {
      setFormErrors(prev => [...prev, 'title']);
      return;
    }

    alert('TODO: Implement create playlist logic');
    close()
  }

  return (
    <ManagedDialog
      name={dialogName}
      closeOpts={{ closeOnOutsideClick: true, closeOnEscape: true }}
    >
      <div
        className="flex flex-col gap-6 w-2xl max-h-xl bg-stone-900 border-2 border-stone-800 pl-8 py-6 rounded-lg"
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
              className={`peer w-full pb-1 border-b-2 ${formErrors.includes('title') ? 'border-red-400' : 'border-stone-600 focus:border-sky-400'} bg-transparent focus:outline-none mt-2  caret-sky-400 transition-colors`}
              placeholder=" "
              value={formValues?.title || ''}
              onChange={(e) => {
                handleInputChange(e)
                if (formErrors.includes('title')) {
                  setFormErrors(prev => prev.filter(error => error !== 'title'));
                }
              }}
              autoFocus
            />
            {formErrors.includes('title') && (
              <span className="text-red-400 text-sm">Este campo es obligatorio</span>
            )}
            <p
              className={`absolute left-0 -top-4 text-sm ${formErrors.includes('title') ? "text-red-400" : "text-stone-400"} transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base select-none`}
            >
              Titulo
            </p>
          </label>
          <label className="relative w-full h-full cursor-text">
            <textarea
              name="description"
              className="peer w-full pb-1 border-b-2 border-stone-600 bg-transparent focus:outline-none mt-2 focus:border-sky-400 caret-sky-400 transition-colors resize-none overflow-hidden"
              placeholder=" "
              rows={1}
              value={formValues?.description || ''}
              onChange={handleInputChange}
              onInput={(e) => {
                const target = e.currentTarget;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
            <p
              className="absolute left-0 -top-4 text-sm text-stone-400 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base select-none"
            >
              Descripción
            </p>
          </label>

          <PrivacySelect onSelect={(privacy) => setFormValues(prev => ({ ...prev, privacy }))} />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 hover:bg-stone-700 text-stone-200 rounded-full  transition-colors cursor-pointer"
            >Cancelar</button>
            <button
              className="px-4 py-2 bg-stone-200 text-stone-800 font-bold hover:bg-stone-300 rounded-full  transition-colors cursor-pointer"
              onClick={handleCreatePlaylist}
            >Crear</button>
          </div>
        </div>
      </div>
    </ManagedDialog>
  )
}
