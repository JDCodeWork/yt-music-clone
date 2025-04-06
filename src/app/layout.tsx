import "./globals.css";

import type { Metadata } from "next";
import { bodyFont } from "@/configs/fonts";

export const metadata: Metadata = {
  title: "YouTube Music",
  description: "Clon de la mejor plataforma para escuchar música",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bodyFont.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
