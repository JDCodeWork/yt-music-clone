import { USER_PROFILE } from "@/shared/data/user.data"
import Image from "next/image"
import { MdOutlineAccountBox, MdOutlineCloudUpload, MdOutlineSwitchAccount } from "react-icons/md"
import { PiSignInBold } from "react-icons/pi"
import { NavProfileMenuItem } from "./NavProfileMenuItem"
import { IoIosArrowForward } from "react-icons/io"
import { GoHistory } from "react-icons/go"
import { IoSettingsOutline } from "react-icons/io5"
import { BiCommentError, BiShield } from "react-icons/bi"
import { TfiHelpAlt } from "react-icons/tfi"
import { useEffect, useRef } from "react"

const ACCOUNT_ITEMS = [
  { label: "Tu canal", startIcon: MdOutlineAccountBox, href: "/profile" },
  { label: "Cambiar de cuenta", startIcon: MdOutlineSwitchAccount, action: () => alert("Cambiar de cuenta"), endIcon: IoIosArrowForward },
  { label: "Salir", startIcon: PiSignInBold, href: "/logout" },
]

const OTHERS_ITEMS = [
  { label: "Subir música", href: "/upload-music", startIcon: MdOutlineCloudUpload },
  { label: "Historial", href: "/history", startIcon: GoHistory },
  { label: "Configuración", href: "/settings", startIcon: IoSettingsOutline },
  { label: "Condiciones y política de privacidad", href: "/terms-and-privacy", startIcon: BiShield },
  { label: "Ayuda", href: "/help", startIcon: TfiHelpAlt },
  { label: "Enviar comentarios", href: "/feedback", startIcon: BiCommentError },
]

interface Props {
  isOpenMenu: boolean;
  closeMenu: () => void;
}
export const NavProfileMenu = ({ isOpenMenu, closeMenu }: Props) => {
  const user = USER_PROFILE

  const menuRef = useRef<HTMLDivElement>(null);

  // Detect if the click is outside the menu
  useEffect(() => {
    if (!isOpenMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpenMenu, closeMenu]);

  if (!isOpenMenu) return null;

  return (
    <div className="absolute right-0 mt-2 w-96 bg-stone-800  rounded-md" ref={menuRef}>
      {/* Account Info */}
      <div className="p-4 flex items-center space-x-6">
        <Image
          src={user.image}
          width={48}
          height={48}
          alt="User Avatar"
          className="size-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-200">@{user.alias}</p>

          <p className="mt-2 text-sm text-sky-400 cursor-pointer hover:underline hover:underline-offset-3">Administra tu Cuenta de Google</p>
        </div>
      </div>
      <div className="border-t-2 border-stone-700" />
      {/* Account Items */}
      <ul className="py-2">
        {
          ACCOUNT_ITEMS.map((item, index) => (
            <NavProfileMenuItem key={index} {...item} />
          ))
        }
      </ul>
      <div className="border-t-2 border-stone-700" />
      {/* Others Items */}
      <ul className="py-2">
        {
          OTHERS_ITEMS.map((item, index) => (
            <NavProfileMenuItem key={index} {...item} />
          ))
        }
      </ul>
    </div>
    
  )
}
