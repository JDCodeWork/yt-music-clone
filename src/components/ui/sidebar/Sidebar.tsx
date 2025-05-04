"use client";

import Link from "next/link";
import clsx from "clsx";
import { AiOutlineMenu } from "react-icons/ai";
import { toggleSideMenu, useUiStore } from "@/stores";
import { SideLinks } from "./side-links/SideLinks";
import { SideBackground } from "./side-decorations/SideBackground";
import { SideSeparator } from "./side-decorations/SideSeparator";
import { SidePlaylist } from "./side-playlist/SidePlaylist";

export const Sidebar = () => {
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)

  return (
    <aside
      className={clsx(
        "fixed p-2 h-screen z-10", isOpenMenu
        ? "w-auto"
        : "w-48"
      )}
    >
      <SideBackground />
      <SideLinks />
      {
        isOpenMenu && (
          <>
            <SideSeparator />
            <SidePlaylist />
          </>
        )
      }
    </aside>
  )
}