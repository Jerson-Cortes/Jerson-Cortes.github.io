import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
