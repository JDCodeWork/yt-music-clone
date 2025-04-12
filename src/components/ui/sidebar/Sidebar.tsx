"use client";

import Link from "next/link";
import clsx from "clsx";
import { AiOutlineMenu } from "react-icons/ai";
import { toggleSideMenu, useUiStore } from "@/stores";
import { SideListLinks } from "./side-links/SideListLinks";
import { SideBackground } from "./side-decorations/SideBackground";
import { SideSeparator } from "./side-decorations/SideSeparator";

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
      <SideBackground />
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
      <SideListLinks />
      <SideSeparator />
    </aside>
  )
}