"use client";

import { useEffect, useState } from "react";
import { useUiStore } from "@/stores";
import clsx from "clsx";

export const SideBackground = () => {
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 border-r-2 -z-10 transition-colors duration-300 h-full w-[82px]",
        isOpenMenu || isScrolled
          ? "bg-stone-950 border-stone-900"
          : "bg-transparent border-transparent",
        isOpenMenu && "transition-none duration-150 w-auto inset-0",
        !isOpenMenu && isScrolled && ""
      )}
    />
  )
}