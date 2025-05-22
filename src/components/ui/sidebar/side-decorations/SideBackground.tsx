"use client";

import React, { useEffect, useState } from "react";
import { useUiStore } from "@/stores";
import clsx from "clsx";

export const styles = {
  base: "absolute top-0 left-0 border-r-2 -z-20 transition-colors duration-300 h-full w-[82px]",
  active: "bg-stone-950 border-stone-900",
  inactive: "bg-transparent border-transparent",
  expanded: "transition-none w-auto inset-0"
}


export const SideBackground = () => {
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    console.log("scrollY ", window.scrollY)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div
      role="presentation"
      aria-label="sidebar background"
      className={clsx(
        styles.base,
        isOpenMenu || isScrolled
          ? styles.active
          : styles.inactive,
        isOpenMenu && styles.expanded,
      )}
    />
  )
}