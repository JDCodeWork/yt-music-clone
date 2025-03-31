import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
        className={`${bodyFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
