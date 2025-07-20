import { SimpleBtn } from "@/shared/components"
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
      <div className="flex items-center gap-8">
        <SimpleBtn>
          Más
        </SimpleBtn>
        <div className="flex items-center gap-3">
          <SimpleBtn size="icon" disabled>
            <IoIosArrowBack className="size-4" />
          </SimpleBtn>
          <SimpleBtn size="icon">
            <IoIosArrowForward className="size-4" />
          </SimpleBtn>
        </div>
      </div>
    </div>
  )
}
