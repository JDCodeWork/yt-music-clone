import { BasePlaylist } from "@/types/playlist.types"
import Link from "next/link"
import { IoPlayCircle } from "react-icons/io5"

export const PlaylistLink = ({ author, id, name }: BasePlaylist) => {
  return (
    <Link
      href={`/playlist?list=${id}`}
      className="max-w-[225px] flex p-3 justify-between items-center group rounded-lg transition-colors relative hover:bg-stone-800 before:contents before:bottom-0 before:bg-stone-900/25 before:h-[1px] before:w-[90%] before:absolute before:-z-10"
    >
      <div className="max-w-4/5 text-sm *:w-[190px] *:group-hover:w-full *:overflow-hidden *:whitespace-nowrap *:text-ellipsis">
        <p className="font-bold ">{name}</p>
        <p className="text-stone-400">{author}</p>
      </div>
      <IoPlayCircle className="size-8 transition-[opacity,color] opacity-0 group-hover:opacity-100 hover:text-stone-400" />
    </Link>
  )
}