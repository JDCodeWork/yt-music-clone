import Link from "next/link";
import { IconType } from "react-icons";

type NavButtonItemProps = {
  action: () => void;
  href?: never;
};

type NavLinkItemProps = {
  href: string;
  action?: never;
};

type NavItemBase = {
  label: string;
  startIcon: IconType;
  endIcon?: IconType;
};

type Props = NavItemBase & (NavButtonItemProps | NavLinkItemProps);

export const NavProfileMenuItem = ({ label, startIcon: StartIcon, endIcon: EndIcon, action, href }: Props) => {
  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center px-6 py-3 hover:bg-stone-700 cursor-pointer"
      >
        <StartIcon className="size-6 mr-4 text-lg text-stone-400" />
        {label}
        {EndIcon && <EndIcon className="ml-auto size-5 text-lg" />}
      </Link>
    );
  }
  return (
    <button
      onClick={action}
      className="flex items-center px-6 py-3 hover:bg-stone-700 cursor-pointer w-full text-left"
    >
      <StartIcon className="size-6 mr-4 text-lg text-stone-400" />
      {label}
      {EndIcon && <EndIcon className="ml-auto size-6 text-lg text-stone-400" />}
    </button>
  );
}
