"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import CodeWorkLogoImg from "@/assets/code-work-logo.svg";

export const DemoAlert = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const closeDemoAlert = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto"
  }, [isOpen])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])


  if (isOpen) return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-40 flex items-center justify-center">
      <div
        className="flex flex-col gap-6 w-full max-w-[50%] max-h-[50%] bg-stone-900 px-4 py-6 z-50 rounded-lg"
      >
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium text-stone-200 flex gap-4 justify-center items-center">
            <Image alt="CodeWorkLogo" src={CodeWorkLogoImg} className="size-8" />
            Aviso importante
          </h2>
          <button onClick={closeDemoAlert} className="mr-2 text-stone-50 cursor-pointer disabled:cursor-progress disabled:animate-pulse disabled:text-stone-500 transition-colors" disabled={isLoading}>
            <IoClose className="size-6" />
          </button>
        </header>
        <div className="">
          <h3 className="text-xl font-bold text-stone-300">Esta no es la aplicación oficial</h3>
          <p className="text-stone-300 mt-2">
            Este es un proyecto de código abierto con el fin de aprender y practicar. No está afiliado a YouTube Music ni a Google. Si deseas ver como funciona el código, puedes visitar el repositorio en <a href="https://github.com/JDCodeWork/yt-music-clone" className="text-stone-50 font-medium hover:underline hover:decoration-1" target="_blank" rel="noreferrer">GitHub</a>.
          </p>

          <div className="mt-8 flex gap-6">
            <button
              onClick={closeDemoAlert}
              disabled={isLoading}
              className="px-6 py-2 bg-stone-600 text-stone-200 rounded-full  hover:bg-stone-700 transition-colors cursor-pointer disabled:cursor-progress disabled:animate-pulse disabled:bg-stone-700 disabled:text-stone-300"
            >Continuar</button>
            <a href="https://music.youtube.com" className="px-4 py-2 border border-transparent bg-stone-800 text-stone-400 rounded-full hover:bg-stone-900 hover:border-stone-800 transition-colors">Ir a la aplicación Oficial</a>
          </div>
        </div>
        <p className="text-stone-400 text-xs mt-2">
          Este proyecto es solo una demostración y no está afiliado a YouTube Music. Todos los derechos de autor y marcas registradas son propiedad de sus respectivos dueños.
        </p>
      </div>
    </div>
  )
}