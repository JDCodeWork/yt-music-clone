'use client'

import { USER_PROFILE } from "@/shared/data/user.data"
import Image from "next/image"
import { NavProfileMenu } from "./NavProfileMenu"
import { useState } from "react"

export const NavProfile = () => {
  const user = USER_PROFILE

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => setIsOpenMenu(prev => !prev)

  return (
    <div className="relative">
      <button
        className="mt-1 size-9 rounded-full overflow-hidden relative cursor-pointer before:hidden before:content-[''] before:absolute before:inset-0 before:bg-stone-400/25 before:z-20 hover:before:block"
        onClick={toggleMenu}
      >
        <Image width={36} height={36} src={user.image} alt="user-image" />
      </button>
      <NavProfileMenu isOpenMenu={isOpenMenu} closeMenu={toggleMenu} />
    </div>
  )
}