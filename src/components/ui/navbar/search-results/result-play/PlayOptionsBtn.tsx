"use client";

import clsx from "clsx";
import { SlOptionsVertical } from "react-icons/sl"

interface Props {
  isVisible?: boolean
}
export const PlayOptionsBtn = ({ isVisible }: Props) => {
  const handleOptions = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    alert("TODO: Options")
  }

  return (
    <button
      type="button"
      className={clsx("invisible group-hover/play:visible ml-auto hover:bg-stone-600 p-3 rounded-full cursor-pointer", isVisible && "visible")}
      onMouseDown={handleOptions}
    >
      <SlOptionsVertical className="size-4" />
    </button>
  )
}