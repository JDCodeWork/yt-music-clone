import { USER_PROFILE } from "@/shared/data/user.data"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export const Header = () => {
  const user = USER_PROFILE

  return (
    <div className="flex w-full max-w-[1200px] justify-between items-center">
      {/* User Profile */}
      <div className="flex items-center gap-4">
        <img src={user.image} alt={user.name} className="size-16 rounded-full" />
        <p className="flex flex-col gap-1">
          <span className="text-stone-400 uppercase">{user.name}</span>
          <span className="text-stone-100 text-3xl font-bold tracking-wide">Volver a escuchar</span>
        </p>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center gap-12">
        <button className="bg-stone-800/15 border-2 border-stone-800 rounded-4xl text-stone-100 px-4 py-2 hover:bg-stone-800 transition-colors">
          Más
        </button>
        <div className="flex items-center gap-4">
          <button className="bg-stone-800/15 cursor-pointer border-2 border-stone-800 rounded-4xl text-stone-100 p-3 hover:bg-stone-800 transition-colors disabled:border-stone-400/5 disabled:bg-transparent disabled:text-stone-800 disabled:hover:border-stone-800/50 disabled:cursor-default" disabled>
            <IoIosArrowBack className="size-4" />
          </button>
          <button className="bg-stone-800/15 cursor-pointer border-2 border-stone-800 rounded-4xl text-stone-100 p-3 hover:bg-stone-800 transition-colors disabled:border-stone-400/5 disabled:bg-transparent disabled:text-stone-800 disabled:hover:border-stone-800/50 disabled:cursor-default">
            <IoIosArrowForward className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
