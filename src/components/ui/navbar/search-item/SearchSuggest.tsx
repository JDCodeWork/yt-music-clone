import { IoIosSearch } from "react-icons/io"

interface Props {
  name: string
}
export const SearchSuggest = ({ name }: Props) => {
  return (
    <div className="flex gap-4 px-6 text-stone-400 items-center hover:bg-stone-800 py-4 cursor-pointer">
      <IoIosSearch className="size-6" />
      <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
    </div>
  )
}