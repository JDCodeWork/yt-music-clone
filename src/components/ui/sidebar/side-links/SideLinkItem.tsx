"use client";

import { useEffect, useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons"
import clsx from "clsx";

import { useUiStore } from "@/stores";

export const styles = {
  container: {
    base: "block  mb-2 rounded-xl hover:bg-stone-400/25 transition-colors",

    status: {
      default: "w-16 px-1 py-4",
      expanded: "w-56 px-4 py-3",
      active: "bg-stone-600/25 font-medium",
    }
  },
  body: {
    base: "flex",

    status: {
      default: "flex-col justify-center items-center gap-1",
      expanded: "gap-6 items-center"
    }
  },
  title: {
    status: {
      default: "text-xs text-center",
      expanded: "text-lg"
    }
  }
}

export interface Props {
  icon: IconType
  title: string
  to: string
}
export const SideLinkItem = ({ icon: Icon, title, to }: Props) => {
  const pathname = usePathname()

  const isOpenMenu = useUiStore(s => s.isOpenSideMenu)

  // Informs if it is loading on its first rendering
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, []);

  return (
    <Link
      aria-label={`navigate to ${title.toLowerCase()} page`}
      href={to}
      className={clsx(
        styles.container.base,
        (!isLoading && pathname === to) && styles.container.status.active,
        !isLoading && isOpenMenu
          ? styles.container.status.expanded
          : styles.container.status.default
      )}>
      <div
        className={clsx(
          styles.body.base,
          !isLoading && isOpenMenu
            ? styles.body.status.expanded
            : styles.body.status.default
        )}
      >
        <Icon className="size-7" />
        <span
          className={clsx(isOpenMenu ? styles.title.status.expanded : styles.title.status.default)}
        >{title}</span>
      </div>
    </Link>
  )
}