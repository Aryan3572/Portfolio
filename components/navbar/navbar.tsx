"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, User, Briefcase, Award, FolderGit2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  const { scrollY } = useScroll();

  // Smart auto-hide on scroll down, reappear on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastYRef.current;
    const diff = latest - previous;

    // Keep visible near the top of the page
    if (latest <= 60) {
      setHidden(false);
    } else if (diff > 6 && !mobileMenuOpen) {
      // User is scrolling down -> disappear
      setHidden(true);
    } else if (diff < -6) {
      // User is scrolling back up -> reappear
      setHidden(false);
    }

    lastYRef.current = latest;
  });

  return (
    <motion.header
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-115%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 select-none will-change-transform"
    >
      {/* Top Orange Header Bar */}
      <div className="relative w-full bg-[#FF5800] text-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          
          {/* Mobile Left Brand */}
          <Link href="/" className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white text-[#FF5800] flex items-center justify-center text-xs font-black shadow-sm">
              AR
            </div>
            <span className="text-sm font-black text-white uppercase tracking-wider">Aryan Raj</span>
          </Link>

          {/* Center Notch Nav (Desktop) */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <div className="relative flex items-center gap-6 xl:gap-8 px-6 py-2">
              
              {/* Left Nav Links */}
              <div className="flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-wide text-neutral-900">
                <Link
                  href="/"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>

                <Link
                  href="#about"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>About</span>
                </Link>

                <Link
                  href="#experience"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Experience</span>
                </Link>
              </div>

              {/* Center White Avatar Circle */}
              <Link
                href="/"
                className="w-8 h-8 rounded-full bg-white text-[#FF5800] flex items-center justify-center text-xs font-black shadow-sm hover:scale-105 transition-transform"
              >
                AR
              </Link>

              {/* Right Nav Links */}
              <div className="flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-wide text-neutral-900">
                <Link
                  href="#achievements"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Achievements</span>
                </Link>

                <Link
                  href="#projects"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Projects</span>
                </Link>
              </div>

              {/* Far Right "Get in touch" White Pill Button */}
              <Link
                href="#contact"
                className="ml-2 px-5 py-2 rounded-full bg-white text-[#0A0A0A] hover:bg-neutral-900 hover:text-white text-xs font-bold transition-all shadow-sm"
              >
                Get in touch
              </Link>

            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-black/15 text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Curved Swoop Notch Bottom Extension (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 -bottom-2 -translate-x-1/2 pointer-events-none">
          <div className="flex items-start">
            {/* Left Concave Curve */}
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="text-[#FF5800] fill-current">
              <path d="M0 0 H18 V8 C18 3.58 10 0 0 0 Z" />
            </svg>
            {/* Center Curved Base */}
            <div className="w-[580px] h-2 bg-[#FF5800] rounded-b-2xl shadow-sm -mt-[1px]" />
            {/* Right Concave Curve */}
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="text-[#FF5800] fill-current">
              <path d="M18 0 H0 V8 C0 3.58 8 0 18 0 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] text-white border-b-2 border-[#FF5800] px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 border-b border-neutral-800 text-sm font-bold"
            >
              <Home className="w-4 h-4 text-[#FF5800]" />
              <span>Home</span>
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 border-b border-neutral-800 text-sm font-bold"
            >
              <User className="w-4 h-4 text-[#FF5800]" />
              <span>About</span>
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 border-b border-neutral-800 text-sm font-bold"
            >
              <Briefcase className="w-4 h-4 text-[#FF5800]" />
              <span>Experience</span>
            </Link>
            <Link
              href="#achievements"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 border-b border-neutral-800 text-sm font-bold"
            >
              <Award className="w-4 h-4 text-[#FF5800]" />
              <span>Achievements</span>
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 border-b border-neutral-800 text-sm font-bold"
            >
              <FolderGit2 className="w-4 h-4 text-[#FF5800]" />
              <span>Projects</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-white text-black py-3 rounded-full text-xs font-bold uppercase"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}