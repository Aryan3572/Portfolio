"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const metrics = [
  { value: "500+", label: "DSA PROBLEMS SOLVED" },
  { value: "45%", label: "FASTER API RESPONSE" },
  { value: "300+", label: "STUDENTS MENTORED" },
  { value: "99.9%", label: "BACKEND UPTIME" },
];

export default function Hero() {
  // Mouse position motion values for smooth interactive parallax
  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  // Buttery-smooth spring interpolation
  const springX = useSpring(xMotion, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(yMotion, { stiffness: 120, damping: 18, mass: 0.5 });

  // Subtle multi-layer parallax for the headline (moves slightly faster in the same direction)
  const headlineX = useTransform(springX, (val) => val * 1.35);
  const headlineY = useTransform(springY, (val) => val * 1.35);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Normalized delta from center (-1 to 1)
    const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Move in the SAME direction as cursor
    xMotion.set(relX * 36);
    yMotion.set(relY * 26);
  };

  const handleMouseLeave = () => {
    xMotion.set(0);
    yMotion.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen pt-16 pb-0 overflow-hidden bg-[#F5F4F3] flex flex-col justify-between select-none"
    >
      
      {/* Blueprint Square Line-Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top-Left Blueprint Coordinate Box (Architectural target detail) */}
      <div className="absolute top-20 left-6 sm:left-12 pointer-events-none hidden sm:block">
        <div 
          className="w-24 h-24 border border-black/10 relative"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "12px 12px",
          }}
        >
          {/* Target Center Dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-600" />
        </div>
      </div>

      {/* Main Racetrack & Headline Stage */}
      <div className="relative max-w-7xl mx-auto px-4 w-full flex-1 flex flex-col items-center justify-center my-auto pt-4">
        
        {/* Interactive Mouse-Responsive Stage (Moves in the SAME direction as cursor) */}
        <motion.div 
          style={{
            x: springX,
            y: springY,
          }}
          className="relative w-full max-w-[1140px] h-[460px] sm:h-[540px] flex items-center justify-center will-change-transform"
        >
          
          {/* SVG Racetrack Track with Animated Packets and Node Squares on the Line */}
          <svg
            viewBox="0 0 1140 520"
            className="w-full h-full drop-shadow-sm select-none"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* Architectural Racetrack Line (Stylized Continuous Loop) */}
            <path
              id="heroTrack"
              d="M 200,60 L 940,60 C 1020,60 1090,120 1090,260 C 1090,400 1020,460 940,460 L 200,460 C 120,460 50,400 50,260 C 50,120 120,60 200,60 Z"
              stroke="#D4D2CE"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Animated Glowing Orange Packets traveling directly along the track */}
            <circle r="5" fill="#FF5800">
              <animateMotion dur="20s" repeatCount="indefinite">
                <mpath href="#heroTrack" />
              </animateMotion>
            </circle>

            <circle r="5" fill="#FF5800">
              <animateMotion dur="20s" begin="-5s" repeatCount="indefinite">
                <mpath href="#heroTrack" />
              </animateMotion>
            </circle>

            <circle r="5" fill="#FF5800">
              <animateMotion dur="20s" begin="-10s" repeatCount="indefinite">
                <mpath href="#heroTrack" />
              </animateMotion>
            </circle>

            <circle r="5" fill="#FF5800">
              <animateMotion dur="20s" begin="-15s" repeatCount="indefinite">
                <mpath href="#heroTrack" />
              </animateMotion>
            </circle>

            {/* Architectural Node Labels & Squares (Visible on Tablet and Desktop) */}
            <g className="hidden sm:inline">
              {/* 1. CLIENT (x=220, y=60) */}
              <text x="220" y="34" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0A0A0A] uppercase tracking-wider">
                CLIENT
              </text>
              <text x="220" y="47" textAnchor="middle" className="font-mono text-[9px] fill-[#888888]">
                Next.js · React Native
              </text>
              <rect x="213" y="53" width="14" height="14" rx="2" fill="white" stroke="#0A0A0A" strokeWidth="1.8" />

              {/* 2. API (x=450, y=60) */}
              <text x="450" y="34" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0A0A0A] uppercase tracking-wider">
                API
              </text>
              <text x="450" y="47" textAnchor="middle" className="font-mono text-[9px] fill-[#888888]">
                Node.js · Express
              </text>
              <rect x="443" y="53" width="14" height="14" rx="2" fill="white" stroke="#0A0A0A" strokeWidth="1.8" />

              {/* 3. QUEUE (x=690, y=60) */}
              <text x="690" y="34" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0A0A0A] uppercase tracking-wider">
                QUEUE
              </text>
              <text x="690" y="47" textAnchor="middle" className="font-mono text-[9px] fill-[#888888]">
                RabbitMQ
              </text>
              <rect x="683" y="53" width="14" height="14" rx="2" fill="white" stroke="#0A0A0A" strokeWidth="1.8" />

              {/* 4. WORKERS (x=920, y=60) */}
              <text x="920" y="34" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0A0A0A] uppercase tracking-wider">
                WORKERS
              </text>
              <text x="920" y="47" textAnchor="middle" className="font-mono text-[9px] fill-[#888888]">
                Docker · k8s
              </text>
              <rect x="913" y="53" width="14" height="14" rx="2" fill="white" stroke="#0A0A0A" strokeWidth="1.8" />

              {/* 5. REDIS (x=380, y=460) */}
              <rect x="373" y="453" width="14" height="14" rx="2" fill="white" stroke="#0A0A0A" strokeWidth="1.8" />
              <text x="380" y="484" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0A0A0A] uppercase tracking-wider">
                REDIS
              </text>
              <text x="380" y="497" textAnchor="middle" className="font-mono text-[9px] fill-[#888888]">
                cache · sessions
              </text>

              {/* 6. POSTGRES (x=760, y=460) */}
              <rect x="753" y="453" width="14" height="14" rx="2" fill="white" stroke="#0A0A0A" strokeWidth="1.8" />
              <text x="760" y="484" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0A0A0A] uppercase tracking-wider">
                POSTGRES
              </text>
              <text x="760" y="497" textAnchor="middle" className="font-mono text-[9px] fill-[#888888]">
                Prisma
              </text>
            </g>
          </svg>

          {/* Center Layered Headline & CTAs (Overlaid inside the track loop with subtle depth) */}
          <motion.div 
            style={{
              x: headlineX,
              y: headlineY,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none will-change-transform"
          >
            
            {/* Name Subtitle */}
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] sm:tracking-[0.45em] text-neutral-400 uppercase font-bold mb-2.5 block pointer-events-auto">
              A R Y A N &nbsp; R A J
            </span>

            {/* Line 1: FULL-STACK ENGINEER (Solid Black) */}
            <h1 className="text-[clamp(1.75rem,7.2vw,4.25rem)] font-black tracking-tight text-[#0A0A0A] uppercase leading-[0.95] pointer-events-auto">
              FULL-STACK ENGINEER
            </h1>

            {/* Line 2: WEB3 DEVELOPER (Outlined / Stroked text) */}
            <div 
              className="text-[clamp(1.75rem,7.2vw,4.25rem)] font-black tracking-tight uppercase leading-[0.95] text-white my-1 pointer-events-auto"
              style={{
                WebkitTextStroke: "1.8px #0A0A0A",
              }}
            >
              WEB3 DEVELOPER
            </div>

            {/* Line 3: SYSTEMS ARCHITECT (Solid Vibrant Orange) */}
            <div className="text-[clamp(1.75rem,7.2vw,4.25rem)] font-black tracking-tight text-[#FF5800] uppercase leading-[0.95] pointer-events-auto">
              SYSTEMS ARCHITECT
            </div>

            {/* Action Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pointer-events-auto">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#0A0A0A] text-white text-xs sm:text-sm font-bold tracking-wide hover:bg-[#FF5800] transition-colors shadow-sm"
              >
                <span>View the work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/certificates/Internship Certificate. Aryan Raj.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#0A0A0A] border border-black/80 text-xs sm:text-sm font-bold tracking-wide hover:bg-neutral-100 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View resume</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Row: SCROLL Indicator + 4 Columns Metrics */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-end justify-between pb-6 pt-2">
        
        {/* Left: SCROLL indicator */}
        <div className="hidden md:flex flex-col items-center gap-1.5 text-neutral-400">
          <span className="text-[10px] font-mono tracking-widest uppercase">
            SCROLL
          </span>
          <div className="w-[1.5px] h-4 bg-[#FF5800]" />
        </div>

        {/* Center: 4 Metrics Columns with Vertical Dividers */}
        <div className="mx-auto grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-12 md:gap-16">
          {metrics.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-12 md:gap-16">
              <div className="flex items-baseline gap-2 sm:gap-2.5 text-left">
                <span className="text-2xl sm:text-4xl font-serif italic text-[#FF5800] leading-none">
                  {item.value}
                </span>
                <span className="text-[8.5px] sm:text-[10px] font-mono font-bold text-neutral-500 uppercase leading-tight max-w-[95px]">
                  {item.label}
                </span>
              </div>

              {/* Vertical divider between metrics */}
              {idx < metrics.length - 1 && (
                <div className="hidden sm:block w-[1px] h-8 bg-neutral-300/80" />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Very Bottom Marquee Ribbon Strip */}
      <div className="w-full bg-[#0A0A0A] text-[#FF5800] py-2.5 border-t border-black overflow-hidden select-none">
        <div className="animate-marquee-infinite flex items-center whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 mx-2 text-xs font-mono font-bold tracking-widest uppercase">
              <span>SYSTEMS ARCHITECT</span>
              <span>—</span>
              <span>FULL-STACK ENGINEER</span>
              <span>—</span>
              <span>WEB3 DEVELOPER</span>
              <span>—</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}