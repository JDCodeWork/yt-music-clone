import { SECTIONS } from "@/shared/data/routes.data"

import { SideLinkItem } from "./SideLinkItem"

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