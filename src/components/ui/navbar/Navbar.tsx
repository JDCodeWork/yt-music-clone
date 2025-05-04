import { NavBackground } from "./NavBackground"
import { NavHeader } from "./NavHeader"
import { SearchBar } from "./SearchBar"

export const Navbar = () => {
  return (
    <div
      className="fixed w-screen h-17 z-10 py-2 px-3 flex gap-8"
    >
      <NavBackground />
      <NavHeader />
      {/* Nav Body */}
      <div className="ml-8 flex-1 py-1">
        <SearchBar />
      </div>
    </div>
  )
}