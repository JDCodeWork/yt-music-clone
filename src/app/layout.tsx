import "./globals.css";

import type { Metadata } from "next";
import { bodyFont } from "@/app/configs/fonts";
import { DemoAlert, Navbar, Sidebar } from "@/shared/components";
import { DialogProvider } from "@/shared/context/DialogContext";

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
        className={`${bodyFont.className} antialiased overflow-x-hidden w-screen h-screen`}
      >
        <DialogProvider>
          <Sidebar />
          <Navbar />
          {children}

          <div id="portal-root" />
          <DemoAlert />
        </DialogProvider>
      </body>
    </html>
  );
}
