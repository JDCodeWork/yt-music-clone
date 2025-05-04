import { FaRegCompass } from "react-icons/fa6"
import { MdHomeFilled, MdOutlineLibraryMusic } from "react-icons/md"
import { SideLinkItem, type Props as SideItemProps } from "./SideLinkItem"

const SECTIONS: SideItemProps[] = [
  { icon: MdHomeFilled, title: "Principal", to: "/" },
  { icon: FaRegCompass, title: "Explorar", to: "/explore" },
  { icon: MdOutlineLibraryMusic, title: "Biblioteca", to: "/library" }
]

export const SideLinks = () => {
  return (
    <nav className="mt-20">
      <ul>
        {
          SECTIONS.map(section => (
            <li key={section.title.toLowerCase()} >
              <SideLinkItem {...section} />
            </li>
          ))
        }
      </ul>
    </nav>
  )
}