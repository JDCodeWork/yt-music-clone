import { FaRegCompass } from "react-icons/fa6"
import { MdHomeFilled, MdOutlineLibraryMusic } from "react-icons/md"

import type { Props as LinkItemProps } from '@/shared/components/sidebar/side-links/SideLinkItem'

export const SECTIONS: LinkItemProps[] = [
  { icon: MdHomeFilled, title: "Principal", to: "/" },
  { icon: FaRegCompass, title: "Explorar", to: "/explore" },
  { icon: MdOutlineLibraryMusic, title: "Biblioteca", to: "/library" }
]