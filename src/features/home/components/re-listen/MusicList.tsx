import { REPLAY } from "@/shared/data/music.data"
import { MusicListItem } from "./MusicListItem"
import { useSlider } from "./SliderContext"

export const MusicList = () => {
  const { scrollContainerRef } = useSlider()

  return (
    <div
      ref={scrollContainerRef}
      className="w-full overflow-x-auto scrollbar-hide"
    >
      <div className="flex gap-4 pb-2">
        {REPLAY.map(m => (
          <MusicListItem
            key={m.title}
            {...m}
          />
        ))}
      </div>
    </div>
  )
}
