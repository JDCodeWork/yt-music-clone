import { SearchBar } from "./SearchBar"

export const Navbar = () => {
  return (
    <div className="fixed w-5xl top-0 lg:right-8 xl:right-28 flex z-10 py-3">
      <SearchBar />
    </div>
  )
}