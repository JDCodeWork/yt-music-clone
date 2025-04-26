import { GoHistory } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"

interface Props {
  name: string
}
export const SearchHistory = ({ name }: Props) => {
  return (
    <div className="flex gap-4 px-6 text-stone-400 items-center hover:bg-stone-800 py-4 cursor-pointer">
      <GoHistory className="size-6" />
      <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
      <button
        className="hover:text-stone-200 ml-auto"
        onClick={() => {/* Add delete functionality here */ }}
      >
        <RiDeleteBin6Line className="size-5 scale-y-125" />
      </button>
    </div>
  )
}