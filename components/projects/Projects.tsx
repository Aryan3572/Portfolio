"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

import tripchainImg from "./Tripchain-web.png";
import sonicScribeImg from "./SonicScribe.png";
import smartOnboardingImg from "./Smart Onboarding Portal.png";
import mangoClassifierImg from "./Mango-Classifier.png";
import swipeHireImg from "./SwipeHire.jpg";

const projects = [
  {
    id: "01",
    title: "TripChain",
    subtitle: "AI & Web3 Travel Infrastructure",
    desc: "A decentralized travel ecosystem ensuring transparent itineraries, immutable booking records, and secure peer-to-peer interactions across blockchain smart contracts.",
    tags: ["Solidity", "Ethereum", "Redis", "Ethers.js", "Smart Contracts", "ERC-20"],
    repo: "https://github.com/Aryan3572/TripChain-web",
    live: "https://trip-chain-web.vercel.app",
    image: tripchainImg,
    badgeColor: "#FF5800",
  },
  {
    id: "02",
    title: "SonicScribe",
    subtitle: "AI Medical Audio Intelligence",
    desc: "Production-grade medical audio analysis platform. Employs Whisper API and LangChain pipelines to automate clinical transcriptions and extract structured diagnostic insights.",
    tags: ["Next.js 15", "Flask", "PostgreSQL", "Docker", "LangChain", "Whisper API"],
    repo: "https://github.com/Aryan3572/SonicScribe",
    live: "https://sonic-scribe-zfha.vercel.app",
    image: sonicScribeImg,
    badgeColor: "#3B82F6",
  },
  {
    id: "03",
    title: "Smart Onboarding",
    subtitle: "Enterprise HR Lifecycle Platform",
    desc: "A streamlined, automated employee onboarding portal featuring real-time compliance checklists, HR management analytics, and strict role-based access control.",
    tags: ["TypeScript", "Next.js", "TanStack Start", "Tailwind CSS", "REST APIs", "Prisma"],
    repo: "https://github.com/Aryan3572/Smart-onboarding-portal",
    live: "https://smart-onboarding-portal.vercel.app",
    image: smartOnboardingImg,
    badgeColor: "#EAB308",
  },
  {
    id: "04",
    title: "Mango-Classifier",
    subtitle: "AgriTech Computer Vision Model",
    desc: "High-accuracy convolutional deep learning model trained to detect, segment, and classify 6 distinct varieties of agricultural yields with state-of-the-art precision.",
    tags: ["Python", "Computer Vision", "Deep Learning", "AgriTech", "PyTorch", "OpenCV"],
    repo: "https://github.com/Aryan3572/mango-classifier",
    live: "https://mango-classifier-ti28.vercel.app",
    image: mangoClassifierImg,
    badgeColor: "#10B981",
  },
  {
    id: "05",
    title: "SwipeHire",
    subtitle: "Gesture-Driven Career Matching",
    desc: "A swipe-based recruitment engine modernizing talent discovery through intuitive gesture-driven matching, fast filtering, and responsive candidate profiles.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Framer Motion"],
    repo: "https://github.com/Aryan3572/SwipeHire-clean",
    live: null,
    image: swipeHireImg,
    badgeColor: "#EC4899",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#F5F4F3] py-28 sm:py-36 overflow-hidden border-t-2 border-black select-none"
    >
      {/* Background blueprint dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#0A0A0A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5800]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase">
              03 / PROJECTS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0A0A0A] uppercase leading-[0.95]">
            Things I&apos;ve <span className="text-[#FF5800]">built</span> and shipped.
          </h2>

          <p className="mt-4 text-base sm:text-xl text-neutral-600 max-w-2xl font-medium">
            A mix of AI systems, full-stack platforms, and on-chain infrastructure.
          </p>
        </div>

        {/* 3D Left-Right Project Carousel Stage */}
        <div className="relative w-full max-w-6xl mx-auto h-[600px] sm:h-[660px] md:h-[680px] flex items-center justify-center [perspective:1200px]">
          
          {/* Left Arrow Button (Desktop Only) */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="hidden lg:flex absolute left-2 lg:left-4 xl:-left-6 z-40 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-black items-center justify-center text-[#0A0A0A] shadow-[3px_3px_0_0_#FF5800] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button (Desktop Only) */}
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="hidden lg:flex absolute right-2 lg:right-4 xl:-right-6 z-40 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-black items-center justify-center text-[#0A0A0A] shadow-[3px_3px_0_0_#FF5800] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Project Cards Stack */}
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((proj, idx) => {
              // Calculate relative offset from active card
              let offset = idx - activeIndex;

              // Handle wrap-around for visual layering
              if (offset < -2) offset += projects.length;
              if (offset > 2) offset -= projects.length;

              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === -1;
              const isHidden = Math.abs(offset) > 1;

              // Compute transforms
              let xTransform = "0%";
              let scaleTransform = 1;
              let rotateTransform = 0;
              let opacityTransform = 1;
              let zIndexTransform = 30;

              if (isActive) {
                xTransform = "0%";
                scaleTransform = 1;
                rotateTransform = 0;
                opacityTransform = 1;
                zIndexTransform = 30;
              } else if (isNext) {
                xTransform = "68%";
                scaleTransform = 0.88;
                rotateTransform = 2.5;
                opacityTransform = 0.65;
                zIndexTransform = 20;
              } else if (isPrev) {
                xTransform = "-68%";
                scaleTransform = 0.88;
                rotateTransform = -2.5;
                opacityTransform = 0.65;
                zIndexTransform = 20;
              } else {
                xTransform = offset > 0 ? "130%" : "-130%";
                scaleTransform = 0.75;
                opacityTransform = 0;
                zIndexTransform = 10;
              }

              return (
                <motion.div
                  key={proj.id}
                  animate={{
                    x: xTransform,
                    scale: scaleTransform,
                    rotate: rotateTransform,
                    opacity: opacityTransform,
                    zIndex: zIndexTransform,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  onClick={() => {
                    if (isNext) handleNext();
                    if (isPrev) handlePrev();
                  }}
                  className={`absolute w-[88%] sm:w-[84%] max-w-[560px] md:max-w-[580px] bg-white rounded-[24px] sm:rounded-[32px] border-2 border-black p-3.5 sm:p-6 shadow-[5px_5px_0_0_#FF5800] sm:shadow-[8px_8px_0_0_#FF5800] flex flex-col justify-between ${
                    !isActive ? "cursor-pointer" : "cursor-grab active:cursor-grabbing"
                  } ${isHidden ? "pointer-events-none" : "pointer-events-auto"}`}
                >
                  {/* Top Image & Browser Window Mockup */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden border-2 border-black bg-neutral-100 group">
                    
                    {/* Mockup Browser Tab Bar */}
                    <div className="absolute top-0 left-0 right-0 z-20 h-7 bg-white/95 backdrop-blur-sm border-b border-black/15 px-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/20" />
                      </div>
                      <div className="px-3 py-0.5 rounded-full bg-neutral-200/70 text-[9.5px] font-mono text-neutral-600 truncate max-w-[200px]">
                        {proj.live ? proj.live.replace("https://", "") : `${proj.title.toLowerCase()}.internal`}
                      </div>
                      <span className="w-2.5 h-2.5" />
                    </div>

                    {/* Screenshot Image */}
                    <div className="relative w-full h-full pt-7">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        priority={isActive}
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="mt-5 flex flex-col gap-3">
                    
                    {/* Title & Action Links */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0A0A0A] tracking-tight leading-snug">
                          {proj.title} <span className="font-serif italic font-normal text-neutral-500 text-lg sm:text-xl">— {proj.subtitle}</span>
                        </h3>
                      </div>

                      {/* Action Icon Buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        {/* GitHub Source Button */}
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code on GitHub"
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center text-black hover:bg-[#FF5800] hover:text-white shadow-[2px_2px_0_0_#0A0A0A] hover:scale-105 transition-all"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>

                        {/* Live Demo Button (if available) */}
                        {proj.live && (
                          <a
                            href={proj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open live application"
                            onClick={(e) => e.stopPropagation()}
                            className="w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center text-black hover:bg-[#FF5800] hover:text-white shadow-[2px_2px_0_0_#0A0A0A] hover:scale-105 transition-all"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal line-clamp-3">
                      {proj.desc}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-1 flex flex-wrap gap-1.5 sm:gap-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-[#F5F4F3] border border-neutral-300 text-[10px] sm:text-[11px] font-mono text-neutral-800 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Counter and Thumbnail Navigator */}
        <div className="mt-8 flex flex-col items-center gap-5">
          
          {/* Numeric Indicator & Mobile/Tablet Quick Arrows */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Left Arrow (Mobile & Tablet) */}
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="lg:hidden w-11 h-11 rounded-full bg-white border-2 border-black flex items-center justify-center text-[#0A0A0A] shadow-[2px_2px_0_0_#FF5800] active:scale-95 transition-transform cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="flex items-center gap-3 text-sm font-mono font-bold">
              <span className="text-[#FF5800]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="w-10 h-px bg-neutral-400" />
              <span className="text-neutral-500">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* Right Arrow (Mobile & Tablet) */}
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="lg:hidden w-11 h-11 rounded-full bg-white border-2 border-black flex items-center justify-center text-[#0A0A0A] shadow-[2px_2px_0_0_#FF5800] active:scale-95 transition-transform cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Miniature Thumbnail Previews Strip */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to ${proj.title}`}
                className={`relative w-14 sm:w-16 md:w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeIndex === idx
                    ? "border-[#FF5800] shadow-[2px_2px_0_0_#FF5800] scale-105"
                    : "border-black/30 opacity-60 hover:opacity-100 hover:border-black"
                }`}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Bottom GitHub CTA Banner */}
        <div className="mt-12 w-full flex justify-center">
          <a
            href="https://github.com/Aryan3572?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#0A0A0A] text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[4px_4px_0_0_#FF5800] hover:shadow-[6px_6px_0_0_#FF5800] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View all projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF5800]" />
          </a>
        </div>

      </div>
    </section>
  );
}
