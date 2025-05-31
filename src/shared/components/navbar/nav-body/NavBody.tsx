'use client'

import { useUiStore } from "@/shared/stores"
import { SearchBar } from "./SearchBar"
import clsx from "clsx"
import { NavProfile } from "./NavProfile"

export const NavBody = () => {
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)

  return (
    <div
      className={clsx("flex flex-1 py-1 justify-between pr-10 z-10", isOpenMenu ? "ml-36" : "ml-8")}
    >
      <SearchBar />
      <NavProfile />
    </div>
  )
}