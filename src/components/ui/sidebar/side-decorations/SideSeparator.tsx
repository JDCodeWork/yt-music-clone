"use client";

import { useUiStore } from "@/stores";

export const SideSeparator = () => {
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)

  if (isOpenMenu) return (
    <div className="my-6 w-[90%] mx-auto h-0.5 bg-stone-800 rounded-xl"></div>
  )
}