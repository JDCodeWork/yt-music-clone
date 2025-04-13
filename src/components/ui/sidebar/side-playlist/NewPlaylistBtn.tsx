import { TfiPlus } from "react-icons/tfi"

export const NewPlaylistBtn = () => {
  return (
    <button
      className="w-full flex gap-2 justify-center bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium rounded-4xl py-2 transition-colors cursor-pointer"
    >
      <TfiPlus className="size-6"/>
      Nueva playlist
    </button>
  )
}