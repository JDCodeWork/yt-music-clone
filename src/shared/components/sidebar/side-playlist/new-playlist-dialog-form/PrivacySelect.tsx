'use client'

import { useState } from "react";

const PrivacyOptions = [
  { value: 'public', label: 'Pública' },
  { value: 'private', label: 'Privada' },
  { value: 'unlisted', label: 'No listada' },
] as const;

export const PrivacySelect = () => {
  const [value, setValue] = useState<typeof PrivacyOptions[number]['value']>('public');

  return (
    <label className="relative w-1/3 h-full cursor-pointer">
      <input
        type="text"
        name="privacy"
        className="peer w-full pb-1 border-b-2 border-stone-600 bg-transparent focus:outline-none mt-2 focus:border-sky-400 caret-sky-400 transition-colors"
        placeholder=" "
      />
      <span
        className="absolute left-0 -top-4 text-sm text-stone-400 transition-all duration-200 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base select-none"
      >
        Titulo
      </span>
    </label>
  )
}
