'use client'

import { Header } from "./Header"
import { MusicList } from "./MusicList"
import { SliderProvider } from "./SliderContext"

export const ReListen = () => {
  return (
    <SliderProvider>
      <div className="flex flex-col gap-6">
        <Header />
        <MusicList />
      </div>
    </SliderProvider>
  )
}
