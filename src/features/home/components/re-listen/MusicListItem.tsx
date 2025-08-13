import { FaPlay } from "react-icons/fa6"
import { SlOptionsVertical } from "react-icons/sl"

interface Props {
  title: string
  thumbnail: string
  author: string
  details: string
}
export const MusicListItem = ({ title, thumbnail, author, details }: Props) => {
  return (
    <div className="shrink-0">
      <div className="relative group cursor-pointer">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-lg h-48 w-full object-cover min-w-48"
        />
        <FaPlay className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-8 shadow-2xl" />
        <div className="absolute inset-0 z-10 rounded-lg bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-50" />
        <button className="hidden group-hover:block absolute z-20 top-2 right-2 hover:bg-stone-700/50 p-2 rounded-full cursor-pointer">
          <SlOptionsVertical className="size-4" />
        </button>
      </div>
      <div className="mt-2">
        <p className="font-bold tracking-wide">{title}</p>
        <p className="tracking-wider flex gap-2">
          <span className="inline-block max-w-[160px] overflow-hidden whitespace-nowrap text-ellipsis">{details}</span> • {author} </p>
      </div>
    </div>
  )
}
