import { NavBackground } from "./NavBackground"
import { NavBody } from "./nav-body/nav-body/NavBody"
import { NavHeader } from "./NavHeader"

export const Navbar = () => {
  return (
    <div
      className="fixed w-screen h-17 z-10 py-2 px-3 flex gap-8"
    >
      <NavBackground />
      <NavHeader />
      <NavBody />
    </div>
  )
}