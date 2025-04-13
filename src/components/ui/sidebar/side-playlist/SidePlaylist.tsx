import { USER_PLAYLIST } from "@/data/playlist.data"
import { NewPlaylistBtn } from "./NewPlaylistBtn"
import { PlaylistLink } from "./PlaylistLink"

export const SidePlaylist = () => {
  return (
    <>
      <div className="px-2">
        <NewPlaylistBtn />
      </div>
      <nav className="mt-4 h-full max-h-1/2">
        <ul className="h-full overflow-y-scroll flex flex-col gap-2">
          {
            USER_PLAYLIST.map(playlist => (
              <li key={playlist.id} > <PlaylistLink {...playlist} /> </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}