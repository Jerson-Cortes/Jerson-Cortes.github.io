import type { Metadata } from "next";
import "./globals.css";

import { amulya_Bold, amulya_BoldItalic, synonym_Regular, mochiyPopPOne_Regular } from "./styles/fonts"

export const metadata: Metadata = {
  title: "Jerson Cortes",
  description: "A brief summary of me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amulya_Bold.variable} ${amulya_BoldItalic.variable} ${synonym_Regular.variable} ${mochiyPopPOne_Regular.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
