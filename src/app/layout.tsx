import type { Metadata } from "next";
import { Geist, Geist_Mono, Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const familjen = Familjen_Grotesk({
  // subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "BOTOL",
  description: "The Ultimate Companion for Hydration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={familjen.className}>{children}</body>
    </html>
  );
}
