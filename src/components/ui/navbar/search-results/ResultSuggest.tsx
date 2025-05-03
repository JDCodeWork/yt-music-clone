import { setSearchValue } from "@/stores";
import clsx from "clsx";
import { IoIosSearch } from "react-icons/io"

interface Props {
  name: string
  isSelected: boolean
}
export const ResultSuggest = ({ name, isSelected }: Props) => {
  const handleSearch = () => {
    setSearchValue(name);
  }

  return (
    <div
      className={clsx("flex gap-6 pl-5 pr-6 text-stone-400 items-center hover:bg-stone-800 py-4 cursor-pointer border-l-3 border-transparent", isSelected && "bg-stone-800 border-l-sky-600")}
      onMouseDown={handleSearch}
    >
      <IoIosSearch className="size-6" />
      <p className="w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
    </div>
  )
}