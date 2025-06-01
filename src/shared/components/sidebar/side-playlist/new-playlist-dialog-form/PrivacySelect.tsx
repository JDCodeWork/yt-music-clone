'use client'

import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

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
        className="peer pl-10 w-full pb-1 border-b-2 border-stone-600 bg-transparent focus:outline-none mt-4 focus:border-sky-400 caret-sky-400 transition-colors cursor-pointer"
        value={PrivacyOptions.find(option => option.value === value)?.label || ''}
      />
      <BiWorld className="absolute size-8 left-0 top-1/2 transform -translate-y-3 pl-2 text-stone-500" />
      <IoIosArrowDown className="absolute size-8 right-0 pr-2 top-1/2 transform -translate-y-3 text-stone-500 peer-focus:text-sky-400 transition-colors" />
      <span
        className="absolute left-0 -top-4 text-sm text-stone-400 transition-all duration-200  select-none"
      >
        Privacidad
      </span>
    </label>
  )
}
