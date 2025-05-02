import { IoIosSearch } from "react-icons/io"

interface Props {
  name: string
}
export const ResultSuggest = ({ name }: Props) => {
  return (
    <div className="flex gap-6 pl-5 pr-6 text-stone-400 items-center hover:bg-stone-800 py-4 cursor-pointer">
      <IoIosSearch className="size-6" />
      <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
    </div>
  )
}