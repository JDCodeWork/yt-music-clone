import "./globals.css";

import type { Metadata } from "next";
import { bodyFont } from "@/app/configs/fonts";
import { DemoAlert, Sidebar } from "@/shared/components";
import { Navbar } from "@/shared/components/navbar/Navbar";
import { DialogProvider } from "@/shared/context/DialogContext";
import { NewPlaylistDialogForm } from "@/shared/components/sidebar/side-playlist/NewPlaylistDialogForm";

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
