import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Menu } from "../componentes/Menu";
import { MenuJS } from "../componentes/MenuJS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sistema Logado",
  description: "sistema Logado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        <Menu menuForm="Fomulario Menu" menuUser="Usuario Mennu" menuFormUser="Form Usuarios" />
        <br />
        {/* <MenuJS menuForm={"Fomulario Menu"} menuUser="Usuario Mennu" menuFormUser="Form Usuarios" /> */}


        <div className="">

          {children}
        </div>
      </body>
    </html>
  );
}
