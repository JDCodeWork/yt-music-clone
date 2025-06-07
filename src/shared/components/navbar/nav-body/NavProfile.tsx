'use client'

import { USER_PROFILE } from "@/shared/data/user.data"
import Image from "next/image"

export const NavProfile = () => {
  const user = USER_PROFILE

  const onOpenProfileSettings = () => {
    alert("TODO: Open profile settings menu")
  }

  const handleClick = () => {
    onOpenProfileSettings()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }

  return (
    <div
      className="mt-1 size-9 rounded-full overflow-hidden relative cursor-pointer before:hidden before:content-[''] before:absolute before:inset-0 before:bg-stone-400/25 before:z-20 hover:before:block"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <Image width={36} height={36} src={user.image || ""} alt="user-image" />
    </div>
  )
}