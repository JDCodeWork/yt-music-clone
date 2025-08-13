import { SimpleBtn } from "@/shared/components"
import { USER_PROFILE } from "@/shared/data/user.data"
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useSlider } from "./SliderContext"
import Link from "next/link"

export const Header = () => {
  const {
    totalPages,
    canGoPrevious,
    canGoNext,
    goToPreviousPage,
    goToNextPage
  } = useSlider()

  const user = USER_PROFILE

  return (
    <div className="flex w-full justify-between items-center ">
      {/* User Profile */}
      <div className="flex items-center gap-4">
        <Image src={user.image} alt={user.name} className="size-16 rounded-full" width={64} height={64} />
        <p className="flex flex-col gap-0.5">
          <span className="text-stone-400 uppercase">{user.name}</span>
          <span className="text-stone-100 text-3xl font-black tracking-wide">Volver a escuchar</span>
        </p>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center gap-8">
        <Link href='/listen_again'>
          <SimpleBtn>
            Más
          </SimpleBtn>
        </Link>
        {totalPages > 1 && (
          <div className="flex items-center gap-3">
            <SimpleBtn size="icon" disabled={!canGoPrevious} onClick={goToPreviousPage}>
              <IoIosArrowBack className="size-4" />
            </SimpleBtn>
            <SimpleBtn size="icon" disabled={!canGoNext} onClick={goToNextPage}>
              <IoIosArrowForward className="size-4" />
            </SimpleBtn>
          </div>
        )}
      </div>
    </div>
  )
}
