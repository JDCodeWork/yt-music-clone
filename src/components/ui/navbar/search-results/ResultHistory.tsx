"use client";

import { setSearchValue } from "@/stores"
import type React from "react";
import { GoHistory } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"

interface Props {
  name: string
}
export const ResultHistory = ({ name }: Props) => {
  const handleSearch = () => {

    setSearchValue(name)
  }

  const handleDelete = () => alert("TODO: delete history")

  return (
    <div
      className="flex gap-6 pl-5 pr-6 text-stone-400 items-center hover:bg-stone-800 py-4 cursor-pointer"
      onClick={handleSearch}
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
        onClick={handleDelete}
      >
        <RiDeleteBin6Line className="size-5 scale-y-125" />
      </button>
    </div>
  )
}