"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import profilePic from "../hero/profile.jpeg";
import { GraduationCap, Award, MapPin, CheckCircle2 } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  // Directly link all animations to continuous bidirectional scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* -------------------------------------------------------------
     STAGE 1: EDITORIAL HEADLINE & STATEMENT (0.00 -> 0.48)
     - Modeled 1:1 on Abhijeet's iconic scroll-driven unblur sequence
     - Word-by-word blur-to-sharp focus, horizontal orange rule expand
     - Reverses smoothly in real time whenever user scrolls back up!
  -------------------------------------------------------------- */
  
  // College Tag unblur & rise
  const tagOpacity = useTransform(scrollYProgress, [0.0, 0.08], [0.3, 1]);
  const tagBlurVal = useTransform(scrollYProgress, [0.0, 0.08], [8, 0]);
  const tagFilter = useTransform(tagBlurVal, (v) => `blur(${v}px)`);
  const tagY = useTransform(scrollYProgress, [0.0, 0.08], [24, 0]);

  // Name unblur & rise
  const nameOpacity = useTransform(scrollYProgress, [0.03, 0.12], [0.4, 1]);
  const nameBlurVal = useTransform(scrollYProgress, [0.03, 0.12], [10, 0]);
  const nameFilter = useTransform(nameBlurVal, (v) => `blur(${v}px)`);
  const nameY = useTransform(scrollYProgress, [0.03, 0.12], [28, 0]);

  // Orange horizontal dividing rule
  const lineScaleX = useTransform(scrollYProgress, [0.08, 0.20], [0, 1]);

  // Statement phrases unblur progression
  // Chunk 1: "Bridging"
  const s1Opacity = useTransform(scrollYProgress, [0.15, 0.22], [0, 1]);
  const s1BlurVal = useTransform(scrollYProgress, [0.15, 0.22], [8, 0]);
  const s1Filter = useTransform(s1BlurVal, (v) => `blur(${v}px)`);
  const s1Y = useTransform(scrollYProgress, [0.15, 0.22], [20, 0]);

  // Chunk 2: "Full-Stack Engineering,"
  const s2Opacity = useTransform(scrollYProgress, [0.19, 0.26], [0, 1]);
  const s2BlurVal = useTransform(scrollYProgress, [0.19, 0.26], [8, 0]);
  const s2Filter = useTransform(s2BlurVal, (v) => `blur(${v}px)`);
  const s2Y = useTransform(scrollYProgress, [0.19, 0.26], [20, 0]);

  // Chunk 3: "Web3,"
  const s3Opacity = useTransform(scrollYProgress, [0.24, 0.31], [0, 1]);
  const s3BlurVal = useTransform(scrollYProgress, [0.24, 0.31], [8, 0]);
  const s3Filter = useTransform(s3BlurVal, (v) => `blur(${v}px)`);
  const s3Y = useTransform(scrollYProgress, [0.24, 0.31], [20, 0]);

  // Chunk 4: "and"
  const s4Opacity = useTransform(scrollYProgress, [0.29, 0.35], [0, 1]);
  const s4BlurVal = useTransform(scrollYProgress, [0.29, 0.35], [8, 0]);
  const s4Filter = useTransform(s4BlurVal, (v) => `blur(${v}px)`);
  const s4Y = useTransform(scrollYProgress, [0.29, 0.35], [20, 0]);

  // Chunk 5: "Systems Architecture."
  const s5Opacity = useTransform(scrollYProgress, [0.33, 0.40], [0, 1]);
  const s5BlurVal = useTransform(scrollYProgress, [0.33, 0.40], [8, 0]);
  const s5Filter = useTransform(s5BlurVal, (v) => `blur(${v}px)`);
  const s5Y = useTransform(scrollYProgress, [0.33, 0.40], [20, 0]);

  // Whole Stage 1 exit transition
  const stage1Opacity = useTransform(scrollYProgress, [0.42, 0.48], [1, 0]);
  const stage1Y = useTransform(scrollYProgress, [0.42, 0.48], [0, -80]);
  const stage1Scale = useTransform(scrollYProgress, [0.42, 0.48], [1, 0.94]);
  const stage1Display = useTransform(scrollYProgress, (v) => (v >= 0.49 ? "none" : "flex"));
  const stage1PointerEvents = useTransform(scrollYProgress, (v) => (v > 0.44 ? "none" : "auto"));

  /* -------------------------------------------------------------
     STAGE 2: TWO-COLUMN BIO, CGPA & PHOTO (0.48 -> 1.00)
     - Ascends cleanly into place once Stage 1 has exited
     - Vertical center divider draws down dynamically
     - Photo card has subtle parallax shift
     - Fully reversible upon scrolling back up!
  -------------------------------------------------------------- */
  const stage2Opacity = useTransform(scrollYProgress, [0.49, 0.58], [0, 1]);
  const stage2Y = useTransform(scrollYProgress, [0.49, 0.58], [70, 0]);
  const stage2Scale = useTransform(scrollYProgress, [0.49, 0.58], [0.96, 1]);
  const stage2Display = useTransform(scrollYProgress, (v) => (v < 0.47 ? "none" : "block"));
  const stage2PointerEvents = useTransform(scrollYProgress, (v) => (v < 0.49 ? "none" : "auto"));

  // Center vertical line draw
  const dividerHeight = useTransform(scrollYProgress, [0.55, 0.88], ["0%", "100%"]);

  // Photo inner parallax shift
  const photoParallaxY = useTransform(scrollYProgress, [0.50, 0.95], [25, -25]);
  const photoCardRotate = useTransform(scrollYProgress, [0.50, 0.68], [-3, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full h-[380vh] bg-[#F5F4F3] border-t-2 border-black select-none"
    >
      {/* Blueprint square line-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Sticky Viewport Stage (offset by pt-16 to give room under fixed navbar) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center pt-16 sm:pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">

          {/* ========================================================
              STAGE 1: EDITORIAL STATEMENT REVEAL (ABHIJEET STYLE)
             ======================================================== */}
          <motion.div
            style={{
              opacity: stage1Opacity,
              y: stage1Y,
              scale: stage1Scale,
              display: stage1Display,
              pointerEvents: stage1PointerEvents,
            }}
            className="absolute inset-x-0 z-20 mx-auto max-w-5xl px-6 flex-col justify-center"
          >
            {/* College subhead */}
            <motion.span
              style={{
                opacity: tagOpacity,
                filter: tagFilter,
                y: tagY,
              }}
              className="inline-block font-mono text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] text-neutral-500 font-bold"
            >
              Bharati Vidyapeeth College of Engineering
            </motion.span>

            {/* Giant Name */}
            <motion.h1
              style={{
                opacity: nameOpacity,
                filter: nameFilter,
                y: nameY,
              }}
              className="mt-3 sm:mt-6 text-[clamp(2.4rem,8.5vw,6.8rem)] font-black uppercase tracking-tighter leading-[0.88] text-[#0A0A0A]"
            >
              <span>Aryan </span>
              <span className="text-[#FF5800]">Raj</span>
            </motion.h1>

            {/* Expanding Orange Divider */}
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="my-4 sm:my-8 h-[2.5px] sm:h-[3px] w-full origin-left bg-[#FF5800]"
            />

            {/* Editorial Statement with progressive unblur */}
            <div className="max-w-4xl font-serif text-[clamp(1.25rem,3.4vw,2.5rem)] italic leading-[1.3] text-[#0A0A0A]/90">
              {/* Word 1: Bridging */}
              <motion.span
                style={{
                  opacity: s1Opacity,
                  filter: s1Filter,
                  y: s1Y,
                }}
                className="inline-block mr-2"
              >
                Bridging
              </motion.span>

              {/* Word 2: Full-Stack Engineering */}
              <motion.span
                style={{
                  opacity: s2Opacity,
                  filter: s2Filter,
                  y: s2Y,
                }}
                className="inline-block mr-1 box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold not-italic text-black"
              >
                Full-Stack Engineering
              </motion.span>

              <motion.span
                style={{ opacity: s2Opacity }}
                className="inline-block mr-2"
              >
                ,
              </motion.span>

              {/* Word 3: Web3 */}
              <motion.span
                style={{
                  opacity: s3Opacity,
                  filter: s3Filter,
                  y: s3Y,
                }}
                className="inline-block mr-1 box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold not-italic text-black"
              >
                Web3
              </motion.span>

              <motion.span
                style={{ opacity: s3Opacity }}
                className="inline-block mr-2"
              >
                ,
              </motion.span>

              {/* Word 4: and */}
              <motion.span
                style={{
                  opacity: s4Opacity,
                  filter: s4Filter,
                  y: s4Y,
                }}
                className="inline-block mr-2"
              >
                and
              </motion.span>

              {/* Word 5: Systems Architecture */}
              <motion.span
                style={{
                  opacity: s5Opacity,
                  filter: s5Filter,
                  y: s5Y,
                }}
                className="inline-block box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold not-italic text-black"
              >
                Systems Architecture
              </motion.span>

              <motion.span
                style={{ opacity: s5Opacity }}
                className="inline-block"
              >
                .
              </motion.span>
            </div>
          </motion.div>

          {/* ========================================================
              STAGE 2: TWO-COLUMN BIO & PHOTO (CONTINUOUS SCROLL)
             ======================================================== */}
          <motion.div
            style={{
              opacity: stage2Opacity,
              y: stage2Y,
              scale: stage2Scale,
              display: stage2Display,
              pointerEvents: stage2PointerEvents,
            }}
            className="relative z-10 w-full"
          >
            {/* Center Vertical Divider (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block w-px -translate-x-1/2 bg-black/10 pointer-events-none">
              <motion.div
                style={{ height: dividerHeight }}
                className="w-full bg-[#FF5800]/60 origin-top"
              />
            </div>

            {/* Mobile View (< md): High-Impact Compact Layout (Zero Clipping) */}
            <div className="md:hidden flex flex-col gap-3.5 max-w-xl mx-auto">
              
              {/* Header Row: Tag, Headline + Compact Photo Card */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs font-black text-[#FF5800]">01</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold">
                      ABOUT
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black leading-tight tracking-tight text-[#0A0A0A]">
                    Building at the edge of{" "}
                    <span className="font-serif italic font-normal text-[#FF5800]">infra</span>{" "}
                    <span className="text-neutral-400 font-normal">&amp;</span>{" "}
                    <span className="font-serif italic font-normal text-black">interfaces</span>.
                  </h2>
                </div>

                {/* Mobile Photo Badge */}
                <div className="relative shrink-0 w-20 sm:w-24 aspect-[4/5] rounded-2xl border-2 border-black bg-white shadow-[3px_3px_0_0_#FF5800] overflow-hidden">
                  <Image
                    src={profilePic}
                    alt="Aryan Raj"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-1 text-center">
                    <span className="text-[9px] font-mono font-bold text-white block leading-none">Aryan Raj</span>
                    <span className="text-[8px] font-mono text-[#FF5800] block mt-0.5">8.50 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Editorial Quote */}
              <p className="font-serif text-sm italic leading-snug text-neutral-800">
                “Building systems that are fast, deterministic, and architecturally resilient.”
              </p>

              {/* Bio Snippet */}
              <p className="text-[11.5px] leading-relaxed text-neutral-700 font-medium line-clamp-3">
                B.Tech in Information Technology at{" "}
                <span className="font-semibold text-black">BVPCOE Pune</span> (CGPA{" "}
                <span className="font-semibold text-[#FF5800]">8.50/10</span>). Work focuses on full-stack engineering, smart contracts, and distributed backend infrastructure.
              </p>

              {/* Credentials Detail Bar */}
              <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[10.5px] font-mono">
                <div>
                  <span className="text-neutral-400 block text-[8.5px] uppercase font-bold">STUDYING</span>
                  <span className="font-bold text-[#0A0A0A]">B.Tech IT · BVPCOE Pune</span>
                </div>
                <div className="text-right">
                  <span className="text-neutral-400 block text-[8.5px] uppercase font-bold">ACADEMIC CGPA</span>
                  <span className="font-serif text-lg italic font-bold text-[#FF5800] leading-none">
                    8.50<span className="text-[9px] text-neutral-500 font-mono not-italic ml-0.5">/ 10</span>
                  </span>
                </div>
              </div>

              {/* 3 Principles Chips */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {[
                  { title: "Systems", desc: "ACID & Queues" },
                  { title: "Deterministic", desc: "Audited Web3" },
                  { title: "Speed", desc: "Sub-100ms UX" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-2 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#0A0A0A] flex flex-col"
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#FF5800]" />
                      <span className="text-[9px] font-black uppercase text-[#0A0A0A] tracking-wider leading-none">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[8px] text-neutral-600 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Desktop & Tablet View (md:grid) */}
            <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-14 items-center">

              {/* Left Column: Bio, Credentials & Principles */}
              <div className="md:col-span-7 flex flex-col gap-4 sm:gap-5">

                {/* Section Tag */}
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-black text-[#FF5800]">01</span>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
                    ABOUT
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black leading-[1.08] tracking-tighter text-[#0A0A0A]">
                  Building at the edge of<br />
                  <span className="font-serif italic font-normal text-[#FF5800]">infra</span>{" "}
                  <span className="text-neutral-400 font-normal">&amp;</span>{" "}
                  <span className="font-serif italic font-normal text-black">interfaces</span>.
                </h2>

                {/* Editorial Quote */}
                <p className="font-serif text-lg sm:text-xl italic leading-snug text-neutral-800">
                  “Building systems that are fast, deterministic, and architecturally resilient.”
                </p>

                {/* Bio Paragraphs with Highlighted Spans */}
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 font-medium">
                  I&apos;m currently pursuing a Bachelor of Technology in Information Technology at the{" "}
                  <span className="box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold text-black">
                    Bharati Vidyapeeth College of Engineering (BVPCOE), Pune
                  </span>
                  , maintaining a CGPA of{" "}
                  <span className="box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold text-black">
                    8.50/10.00
                  </span>
                  . My work sits at the intersection of{" "}
                  <span className="box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold text-black">
                    full-stack engineering
                  </span>
                  ,{" "}
                  <span className="box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold text-black">
                    decentralized smart contracts
                  </span>
                  , and{" "}
                  <span className="box-decoration-clone bg-gradient-to-t from-[#FF5800]/25 to-[#FF5800]/25 bg-[length:100%_0.38em] bg-bottom bg-no-repeat font-semibold text-black">
                    distributed backend infrastructure
                  </span>
                  .
                </p>

                {/* Credentials Details Row */}
                <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row gap-5 sm:gap-10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                      CURRENTLY STUDYING
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-black text-[#0A0A0A]">
                      B.Tech in Information Technology
                    </p>
                    <p className="mt-0.5 text-[11px] text-neutral-600">
                      Bharati Vidyapeeth College of Engineering, Pune (2022–2026)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                      ACADEMIC CGPA
                    </p>
                    <p className="mt-1 font-serif text-2xl sm:text-3xl italic font-bold leading-none text-[#FF5800]">
                      8.50
                      <span className="text-xs text-neutral-500 font-mono not-italic ml-1 font-bold">
                        / 10.00
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] text-neutral-500">
                      Top-tier academic standing
                    </p>
                  </div>
                </div>

                {/* Principles Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {[
                    { title: "Systems Thinking", desc: "ACID transactions & queue decoupling." },
                    { title: "Deterministic Code", desc: "Type-safety & audited smart contracts." },
                    { title: "Speed & Polish", desc: "Sub-100ms render & rich micro-UX." },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#0A0A0A] flex flex-col"
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5800]" />
                        <span className="text-[10px] font-black uppercase text-[#0A0A0A] tracking-wider">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[9.5px] text-neutral-600 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Portrait Photo with Offset Neobrutalist Frame & Parallax */}
              <div className="md:col-span-5 flex flex-col items-center">
                <motion.div
                  style={{ rotate: photoCardRotate }}
                  className="relative w-full max-w-[320px] sm:max-w-[350px]"
                >
                  {/* Neobrutalist Orange Offset Frame */}
                  <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-[#FF5800] bg-transparent pointer-events-none sm:-bottom-5 sm:-right-5" />

                  {/* Main Card */}
                  <div className="relative z-10 w-full bg-white rounded-3xl border-2 border-black p-3.5 shadow-[8px_8px_0_0_#0A0A0A] flex flex-col">
                    
                    {/* Top Pill Badge */}
                    <span className="absolute -top-3 left-6 z-20 rounded-full bg-[#FF5800] px-3.5 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-white border-2 border-black shadow-[2px_2px_0_0_#0A0A0A]">
                      BVPCOE PUNE · IT
                    </span>

                    {/* Image Container with Parallax inner shift */}
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-black bg-neutral-100 group">
                      <motion.div
                        style={{ y: photoParallaxY }}
                        className="absolute inset-0 -m-6"
                      >
                        <Image
                          src={profilePic}
                          alt="Aryan Raj"
                          fill
                          priority
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Photo Bottom Tag */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div>
                          <span className="text-sm font-black tracking-wide block">Aryan Raj</span>
                          <span className="text-[10px] font-mono text-white/80 block">Software Engineer</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono">
                          <MapPin className="w-3 h-3 text-[#FF5800]" />
                          <span>Pune, IN</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Sub-Banner */}
                    <div className="mt-3 pt-2 flex items-center justify-between px-2 text-xs font-mono text-neutral-600">
                      <span className="flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Open for Roles
                      </span>
                      <span className="font-bold text-[#0A0A0A]">2026 Grad</span>
                    </div>

                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}