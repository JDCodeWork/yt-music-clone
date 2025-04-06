"use client";

import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegCompass } from "react-icons/fa6"
import { MdHomeFilled, MdOutlineLibraryMusic } from "react-icons/md"
import { SideItem, Props as SideItemProps } from "./SideItem"

const SECTIONS: SideItemProps[] = [
  { icon: MdHomeFilled, title: "Principal", to: "/" },
  { icon: FaRegCompass, title: "Explorar", to: "/explore" },
  { icon: MdOutlineLibraryMusic, title: "Biblioteca", to: "/library" }
]

export const Sidebar = () => {
  return (
    <aside className="fixed p-2 h-screen w-44">
      <header className="flex gap-2">
        <button className="mx-2 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-600/25 transition-colors">
          <AiOutlineMenu className="size-6" />
        </button>
        <Link href="/" className="my-2">
          <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="YouTube Music Logo" className="h-8" />
        </Link>
      </header>
      <nav className="mt-4">
        {
          SECTIONS.map(section => (
            <SideItem key={section.title.toLowerCase()} {...section} />
          ))
        }
      </nav>
    </aside>
  )
}