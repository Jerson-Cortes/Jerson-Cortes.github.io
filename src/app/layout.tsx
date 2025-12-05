import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import ThemeProvider from "@/components/theme";

const switzer = localFont({
  src: '../../public/fonts/switzer/Switzer-Light.woff2',
  variable: "--font-geist-sans",
})

const gambarino = localFont({
  src: '../../public/fonts/gambarino/Gambarino-Regular.woff2',
  variable: "--font-gambarino-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerson Cortes P.",
  description: "Personal presentation website.",
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${switzer.variable} ${geistMono.variable} ${gambarino.variable}`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
