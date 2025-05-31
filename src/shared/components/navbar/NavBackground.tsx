'use client'

import { useEffect, useState } from "react"
import clsx from "clsx"

export const NavBackground = () => {
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
      className={clsx("absolute inset-0 border-b-2 transition-colors", isScrolled ? "bg-stone-950 border-stone-800" : "bg-transparent border-transparent")}
    />
  )
}