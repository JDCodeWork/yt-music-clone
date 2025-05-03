"use client";

import { SlOptionsVertical } from "react-icons/sl"

export const PlayOptionsBtn = () => {
  const handleOptions = () => alert("TODO: Show options")

  return (
    <button
      type="button"
      className="invisible group-hover/play:visible ml-auto hover:bg-stone-600 p-3 rounded-full cursor-pointer"
      onClick={(e) => {
        e.stopPropagation()
        handleOptions()
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.stopPropagation()
          handleOptions()
        }
      }}
    >
      <SlOptionsVertical className="size-4" />
    </button>
  )
}