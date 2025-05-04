'use client'

import { AiOutlineMenu } from "react-icons/ai"
import Link from "next/link"
import { toggleSideMenu } from "@/stores"

export const NavHeader = () => {
  return (
    <header className="flex gap-1 z-10 ">
      <button
        type="button"
        className="mx-2 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-600/25 transition-colors"
        onClick={toggleSideMenu}
      >
        <AiOutlineMenu className="size-6" />
      </button>
      <Link href="/" className="my-2">
        <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="YouTube Music Logo" className="h-8" />
      </Link>
    </header>
  )
}