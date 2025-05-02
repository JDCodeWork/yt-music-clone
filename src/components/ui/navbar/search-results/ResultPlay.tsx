import { SlOptionsVertical } from "react-icons/sl"
import type { ResultItem } from "./SearchResults"
import { FaPlay } from "react-icons/fa"

export const ResultPlay = ({
  name,
  image = "",
  artist = "",
  views = ""
}: ResultItem) => {
  return (
    <div className="flex gap-5 px-4 text-stone-200 items-center hover:bg-stone-800 py-2 cursor-pointer group/play">
      {/* Image */}
      <div className="relative size-8 overflow-hidden rounded-xs">
        <img src={image} alt={name} className="size-full object-center" width={32} height={32} />
        <div className="hidden absolute inset-0 bg-stone-950/90 group-hover/play:block" />
        <FaPlay className="hidden absolute top-2 left-[10px] group-hover/play:block" />
      </div>
      {/* Data */}
      <div className="overflow-hidden">
        <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
        <p className="text-stone-400 text-sm flex place-items-center gap-2">
          Canción
          <span className="inline-block max-w-[80%] items-center overflow-hidden whitespace-nowrap text-ellipsis">• {artist}</span>
          <span className="inline-block max-w-[60%] items-center overflow-hidden whitespace-nowrap text-ellipsis">• {views}</span>
        </p>
      </div>
      {/* Action */}
      <button
        type="button"
        className="invisible group-hover/play:visible ml-auto hover:bg-stone-600 p-3 rounded-full cursor-pointer"
      >
        <SlOptionsVertical className="size-4" />
      </button>
    </div>
  )
}