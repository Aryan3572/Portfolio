"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import profilePic from "../hero/profile.jpeg";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // 0.0 = Section top enters viewport from bottom
  // 0.33 = Section top reaches viewport top (it becomes sticky)
  // 1.0 = Section bottom reaches viewport bottom (it unsticks)

  // Animate from 3D to flat at the top
  const rotateX = useTransform(scrollYProgress, [0, 0.25], [50, 0]);
  
  // Shrink the text to become a header while moving up. Must finish by 0.45 before lower section enters!
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.45], [1.6, 1, 1, 0.45]);
  
  // Draw the vertical line between the columns as you scroll down
  const lineHeight = useTransform(scrollYProgress, [0.45, 0.6], ["0%", "100%"]);
  
  const y = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.35, 0.45], 
    ["50vh", "25vh", "25vh", "-15vh"]
  );

  return (
    <>
      <section
        id="about"
        ref={containerRef}
        className="relative h-[300vh] bg-[#F7F7F5]"
      >
        <div className="sticky top-0 flex h-screen w-full items-start justify-center overflow-hidden pt-[15vh] [perspective:1000px]">

          {/* 3D Text */}
          <motion.div
            style={{
              rotateX,
              scale,
              y,
              transformStyle: "preserve-3d",
            }}
            className="w-full max-w-5xl px-6 text-center"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black italic leading-[0.95] tracking-tighter text-neutral-800">
              Aryan Raj — Bridging Full-Stack Engineering, Web3, and Systems Architecture.
            </h2>
          </motion.div>

        </div>
      </section>

      {/* 
        The Lower Part
        By using negative margin, this section starts scrolling into view 
        while the 3D text is STILL sticky in the section above it.
      */}
      <section className="relative z-10 -mt-[50vh] w-full bg-transparent pb-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-6 md:flex-row">
          
          {/* Left Side */}
          <div className="relative flex-1 md:pr-16">
            {/* Animated Vertical Line */}
            <motion.div 
              className="absolute right-0 top-0 hidden w-[1px] bg-neutral-200 md:block"
              style={{ height: lineHeight, originY: 0 }}
            />
            
            <span className="mb-4 block text-sm font-bold tracking-widest text-[#ff5500]">01 ABOUT</span>
            <h3 className="mb-6 text-5xl font-black leading-tight tracking-tight text-neutral-900">
              Building at the edge of<br />infra <span className="text-[#ff5500]">&</span> interfaces.
            </h3>
            <p className="mb-12 max-w-lg text-lg leading-relaxed text-neutral-500 font-medium">
              I&apos;m currently pursuing a Bachelor of Technology in Information Technology at the Bharati Vidyapeeth College of Engineering (Deemed to be University), Pune, maintaining a CGPA of 8.50/10.00. My work sits at the intersection of full-stack engineering, decentralized systems, and beautiful UI/UX.
            </p>

            {/* Stats section */}
            <div className="flex flex-col gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="mb-2 block text-xs font-bold tracking-widest text-neutral-400">CURRENTLY STUDYING</span>
                <p className="font-bold text-neutral-900">B.Tech in Information Technology</p>
                <p className="text-sm text-neutral-500">Bharati Vidyapeeth College of Engineering, Pune</p>
              </div>
              <div>
                <span className="mb-2 block text-xs font-bold tracking-widest text-neutral-400">CGPA</span>
                <p className="text-3xl font-black text-[#ff5500]">8.50/10.00</p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="mt-16 flex flex-1 justify-center md:mt-0 md:justify-end md:pl-16">
            {/* The outer container establishes the dimensions */}
            <div className="relative h-[450px] w-full max-w-[360px]">
              
              {/* Offset Orange Border (The background outline) */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-[#ff5500]"></div>
              
              {/* Main Image Card */}
              <div className="group relative z-10 h-full w-full rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                
                {/* Top-Left Badge (pill shape overlapping top edge) */}
                <div className="absolute left-6 top-0 z-20 -translate-y-1/2 rounded-full bg-[#ff5500] px-4 py-1.5 text-xs font-bold tracking-wider text-white">
                  BVPCOE PUNE
                </div>
                
                {/* Image */}
                <Image
                  src={profilePic}
                  alt="Aryan Raj"
                  fill
                  className="rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}