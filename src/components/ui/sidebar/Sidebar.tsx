"use client";

import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegCompass } from "react-icons/fa6"
import { MdHomeFilled, MdOutlineLibraryMusic } from "react-icons/md"
import { SideItem, Props as SideItemProps } from "./SideItem"
import clsx from "clsx";
import { toggleSideMenu, useUiStore } from "@/stores";

const SECTIONS: SideItemProps[] = [
  { icon: MdHomeFilled, title: "Principal", to: "/" },
  { icon: FaRegCompass, title: "Explorar", to: "/explore" },
  { icon: MdOutlineLibraryMusic, title: "Biblioteca", to: "/library" }
]

export const Sidebar = () => {
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)

  return (
    <aside
      className={clsx(
        "fixed p-2 h-screen", isOpenMenu
        ? "w-auto"
        : "w-48"
      )}
    >
      <div
        className={clsx("absolute top-0 left-0 border-r -z-10 ", isOpenMenu
          ? "inset-0 bg-stone-950 border-stone-800"
          : "bg-transparent border-transparent"
        )}
      />
      <header className="flex gap-2 absolute">
        <button
          className="mx-2 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-600/25 transition-colors"
          onClick={toggleSideMenu}
        >
          <AiOutlineMenu className="size-6" />
        </button>
        <Link href="/" className="my-2">
          <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="YouTube Music Logo" className="h-8" />
        </Link>
      </header>
      <nav className="h-full mt-20">
        {
          SECTIONS.map(section => (
            <SideItem key={section.title.toLowerCase()} {...section} />
          ))
        }
      </nav>
    </aside>
  )
}