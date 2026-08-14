"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="fixed inset-x-0 top-6 z-50 flex flex-col items-center pointer-events-none"
    >
      {/* Floating Glass Pill Container */}
      <div className="relative bg-white/75 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full px-6 py-2 pointer-events-auto flex items-center justify-center gap-6 md:gap-8 transition-all hover:bg-white/90">
        
        {/* Links Left */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <NavLink title="Experience" href="#experience" />
        </div>

        {/* Breakout Center Logo */}
        {/* Using negative margin and absolute sizing to make it pop out of the pill boundaries */}
        <Link 
          href="/" 
          className="relative z-10 w-14 h-14 -mx-2 -my-4 rounded-full bg-[#ff5500] border-4 border-[#F7F7F5] flex items-center justify-center shadow-lg shadow-[#ff5500/40] group hover:scale-110 transition-transform duration-300"
        >
          <span className="text-white font-black text-lg tracking-tighter">AR</span>
        </Link>

        {/* Links Right */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink title="Achievements" href="#achievements" />
          <NavLink title="Projects" href="#projects" />
        </div>

        {/* Contact Button */}
        <Link 
          href="#contact" 
          className="bg-neutral-900 text-white px-5 py-2 rounded-full font-bold text-xs tracking-wider hover:bg-[#ff5500] transition-colors ml-2 md:ml-4"
        >
          LET'S TALK
        </Link>
      </div>
    </motion.header>
  );
}

function NavLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative text-sm font-extrabold text-neutral-800 tracking-wide transition-colors hover:text-[#ff5500]"
    >
      {title}
      <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#ff5500] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}