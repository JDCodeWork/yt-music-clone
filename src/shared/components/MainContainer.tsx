"use client";

import clsx from "clsx";
import { useUiStore } from "../stores";
import { twMerge } from 'tailwind-merge';


export const MainContainer = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  const isOpenNav = useUiStore(s => s.isOpenSideMenu)

  return (
    <main
      className={twMerge(clsx(
        "h-full flex flex-1 flex-col gap-12 pt-24 transition-margin duration-300 pr-12",
        isOpenNav ? "ml-90 pl-4 " : "ml-64 pl-2",
      ), className)}
    >
      {children}
    </main>
  )
}
