'use client'

import { useRef, useState } from "react";
import { BiLock, BiWorld } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { PrivacyList } from "./PrivacyList";
import { PiLinkSimpleHorizontalLight } from "react-icons/pi";

export type PrivacyOption = { value: string, label: string, icon: React.ElementType, description: string };
export const PRIVACY_OPTIONS: PrivacyOption[] = [
  { value: 'public', label: 'Pública', icon: BiWorld, description: 'Cualquier usuario puede buscarla y verla' },
  { value: 'unlisted', label: 'No listada', icon: PiLinkSimpleHorizontalLight, description: 'Cualquier usuario con el vínculo puede verla' },
  { value: 'private', label: 'Privada', icon: BiLock, description: 'Solo tú puedes verla' },
] as const;

interface Props {
  onSelect: (privacy: string) => void;
}
export const PrivacySelect = ({onSelect}: Props) => {
  const [activeOption, setActiveOption] = useState<PrivacyOption>(PRIVACY_OPTIONS[0]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (e: React.MouseEvent, option: PrivacyOption) => {
    e.stopPropagation();
    e.preventDefault();

    setActiveOption(option);
    inputRef.current?.blur();
    onSelect(option.value);
  };

  return (
    <label className="relative w-1/3 h-full cursor-pointer">
      <input
        type="text"
        name="privacy"
        className="peer pl-10 w-full pb-1 border-b-2 border-stone-600 bg-transparent focus:outline-none mt-4 focus:border-sky-400 caret-sky-400 transition-colors cursor-pointer"
        value={activeOption.label}
        ref={inputRef}
        readOnly
      />
      <activeOption.icon className="absolute size-8 left-0 top-1/2 transform -translate-y-3 pl-2 text-stone-500" />
      <IoIosArrowDown className="absolute size-8 right-0 pr-2 top-1/2 transform -translate-y-3 text-stone-500 peer-focus:text-sky-400 transition-colors" />
      <span
        className="absolute left-0 -top-4 text-sm text-stone-400 transition-all duration-200  select-none"
      >
        Privacidad
      </span>
      <PrivacyList activeOption={activeOption} onSelect={handleSelect} />
    </label>
  )
}
