"use client";

import { cva } from "class-variance-authority";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const simpleBtnStyles = cva(
  "bg-stone-800/15 cursor-pointer border-2 border-stone-700/50 text-stone-100 transition-all hover:bg-stone-800/50 hover:border-stone-700  disabled:border-stone-400/5 disabled:bg-transparent disabled:text-stone-800 disabled:hover:border-stone-800/50 disabled:cursor-default ",
  {
    variants: {
      size: {
        icon: "p-3 rounded-full",
        default: "px-4 py-2 rounded-3xl",
      }
    },
    defaultVariants: {
      size: "default",
    }
  }
)

interface Props extends PropsWithChildren<BtnProps> {
  size?: "icon" | "default";
}

export const SimpleBtn = ({ children, size, ...props }: Props) => {
  return (
    <button
      {...props}
      className={twMerge(
        simpleBtnStyles({ size }),
        props.className,
        !props.disabled && "active:scale-90 active:bg-stone-800 active:border-stone-800"
      )}
    >
      {children}
    </button>
  )
}
