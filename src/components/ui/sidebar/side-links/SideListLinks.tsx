import { FaRegCompass } from "react-icons/fa6"
import { MdHomeFilled, MdOutlineLibraryMusic } from "react-icons/md"
import { SideLink, Props as SideItemProps } from "./SideLink"

const SECTIONS: SideItemProps[] = [
  { icon: MdHomeFilled, title: "Principal", to: "/" },
  { icon: FaRegCompass, title: "Explorar", to: "/explore" },
  { icon: MdOutlineLibraryMusic, title: "Biblioteca", to: "/library" }
]

export const SideListLinks = () => {
  return (
    <nav className="mt-20">
      {
        SECTIONS.map(section => (
          <SideLink key={section.title.toLowerCase()} {...section} />
        ))
      }
    </nav>
  )
}