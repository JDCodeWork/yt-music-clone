"use client";

import clsx from "clsx";
import { useUiStore } from "../stores";

export const Container = ({ children }: React.PropsWithChildren) => {
  const isOpenNav = useUiStore(s => s.isOpenSideMenu)

  return (
    <main className={clsx("h-full w-screen flex flex-col gap-12 pt-24", isOpenNav ? "ml-90 pl-4" : "ml-64 pl-2")}>
      {children}
    </main>
  )
}
