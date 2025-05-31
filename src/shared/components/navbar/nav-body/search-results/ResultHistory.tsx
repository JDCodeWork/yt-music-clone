"use client";

import { setSearchValue } from "@/shared/stores"
import clsx from "clsx";
import type React from "react";
import { GoHistory } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"

interface Props {
  name: string
  isSelected: boolean
}
export const ResultHistory = ({ name, isSelected }: Props) => {
  const handleSearch = () => {
    setSearchValue(name);
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    alert("TODO: Delete")
  }

  return (
    <div
      className={clsx("flex gap-6 pl-5 pr-6 text-stone-400 items-center hover:bg-stone-800 py-4 cursor-pointer border-l-3 border-transparent", isSelected && "bg-stone-800 border-l-sky-600")}
      onMouseDown={handleSearch}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch()
        }
      }}
    >
      <GoHistory className="size-6" />
      <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
      <button
        type="button"
        className="hover:text-stone-200 ml-auto"
        onMouseDown={handleDelete}
      >
        <RiDeleteBin6Line className="size-5 scale-y-125" />
      </button>
    </div>
  )
}