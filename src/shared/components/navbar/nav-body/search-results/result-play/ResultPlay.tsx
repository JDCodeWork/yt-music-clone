"use client";

import { FaPlay } from "react-icons/fa"
import { separateAuthors } from "@/shared/lib/separate-authors";
import { PlayOptionsBtn } from "./PlayOptionsBtn";
import { ArtistsLinks } from "./ArtistsLinks";
import { setSearchValue } from "@/shared/stores";
import clsx from "clsx";
import type { SearchPlayItem } from "@/shared/data/search.data";
import Image from "next/image";

interface Props {
  data: SearchPlayItem
  isSelected: boolean
}
export const ResultPlay = ({
  data,
  isSelected
}: Props) => {
  const { name, artist: rawAuthors, image, views } = data

  const handlePlay = () => {
    setSearchValue(name)

    alert("TODO: Play song")
  }

  // TODO: Make artist a link
  const artists = separateAuthors(rawAuthors)

  return (
    <div
      className={clsx("flex gap-5 px-4 text-stone-200 items-center hover:bg-stone-800 py-2 cursor-pointer group/play border-l-2 border-transparent", isSelected && "bg-stone-800 border-l-sky-600")}
      onMouseDown={handlePlay}
    >
      {/* Image */}
      <div className="relative size-8 rounded-xs">
        <Image src={image} alt={name} className="size-full object-center" width={32} height={32} />
        <div className="hidden absolute inset-0 bg-stone-950/90 group-hover/play:block" />
        <FaPlay className="hidden absolute top-2 left-[10px] group-hover/play:block" />
      </div>
      {/* Data */}
      <div className="overflow-hidden">
        <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
        <p className="text-stone-400 text-sm flex place-items-center gap-2 cursor-text">
          Canción
          <ArtistsLinks artists={artists} />
          <span className="inline-block max-w-[60%] items-center overflow-hidden whitespace-nowrap text-ellipsis">• {views}</span>
        </p>
      </div>
      <PlayOptionsBtn isVisible={isSelected} />
    </div >
  )
}