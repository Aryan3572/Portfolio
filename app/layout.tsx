import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { ScrollProvider } from "@/components/providers/ScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Aryan Raj | Full Stack Developer",
  description:
    "Portfolio of Aryan Raj - Full Stack Developer, Backend Engineer and System Architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#F7F7F5]
          text-black
          selection:bg-black
          selection:text-white
        "
      >
        <ScrollProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ScrollProvider>
      </body>
    </html>
  );
}