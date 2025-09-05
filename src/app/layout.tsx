import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

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
