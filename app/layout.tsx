import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { ScrollProvider } from "@/components/providers/ScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF5800",
};

export const metadata: Metadata = {
  title: "Aryan Raj — Full-Stack Engineer & Systems Architect",
  description:
    "Portfolio of Aryan Raj — Full-Stack Developer, Web3 Engineer, and Systems Architect. Specializing in high-performance web applications, distributed systems, and modern UI/UX.",
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
        inter.variable,
        instrumentSerif.variable,
        jetbrainsMono.variable,
        "font-sans"
      )}
    >
      <body
        suppressHydrationWarning
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#F5F4F3]
          text-[#0A0A0A]
          selection:bg-[#FF5800]
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