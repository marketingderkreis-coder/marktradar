import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DER KREIS MarktRadar",
  description: "Marketing intelligence voor de keuken- en sanitairbranche",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
