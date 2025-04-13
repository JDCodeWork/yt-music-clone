"use client";

import Link from "next/link"
import type { IconType } from "react-icons"
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUiStore } from "@/stores";

export interface Props {
  icon: IconType
  title: string
  to: string
}
export const SideLinkItem = ({ icon: Icon, title, to }: Props) => {
  const pathname = usePathname()
  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, []);

  return (
    <Link
      href={to}
      className={clsx(
        "block  mb-2 rounded-xl hover:bg-stone-400/25 transition-colors",
        (!isLoading && pathname == to)
          ? "bg-stone-600/25 font-medium"
          : "",
        !isLoading && isOpenMenu
          ? "w-56 px-4 py-3"
          : "w-16 px-1 py-4"
      )}>
      <div
        className={clsx(
          "flex",
          !isLoading && isOpenMenu
            ? "gap-6 items-center"
            : "flex-col justify-center items-center gap-1"
        )}
      >
        <Icon className="size-7" />
        <span
          className={clsx(isOpenMenu ? "text-lg" : "text-xs text-center")}
        >{title}</span>
      </div>
    </Link>
  )
}