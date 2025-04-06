"use client";

import Link from "next/link"
import type { IconType } from "react-icons"
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface Props {
  icon: IconType
  title: string
  to: string
}
export const SideItem = ({ icon: Icon, title, to }: Props) => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false) 
  }, []);

  return (
    <Link href={to} className={clsx("block w-16 mb-4 py-4 px-1 rounded-xl hover:bg-slate-400/25 transition-colors", (!isLoading && pathname == to) ? " bg-slate-600/25" : "")}>
      <div className="flex flex-col justify-center items-center gap-1">
        <Icon className="size-6" />
        <span className="text-xs text-center">{title}</span>
      </div>
    </Link>
  )
}