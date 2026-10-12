"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Calendar, MapPin, Building2, CheckCircle2, Trophy, Code2, Sparkles } from "lucide-react";

const experiences = [
  {
    id: "01",
    year: "2026",
    title: "Full-Stack Web Developer",
    company: "Aashya Legal, Advocates & Consultants",
    location: "Ranchi, Jharkhand (Remote)",
    period: "Jun 2026",
    category: "Full-Stack Development",
    color: "#D97706",
    metrics: ["Official Firm Website", "Client Intake Portal", "100% Production Delivery"],
    points: [
      "Spearheaded the design, full-stack development, and end-to-end implementation of the official production website for AASHYA LEGAL, Advocates & Consultants.",
      "Collaborated closely with Managing Partner Adv. Aastha Prakash to structure complex legal practice domains, service listings, and advocate profiles into an intuitive interface.",
      "Architected secure consultation intake forms and optimized frontend loading speeds to adhere to legal industry confidentiality and professional standards.",
      "Recognized with formal certification of excellence for technical competence, creativity, and 100% dedication in delivering the production platform."
    ]
  },
  {
    id: "02",
    year: "2026",
    title: "Software Engineer UI Intern",
    company: "Ipsator",
    location: "Remote",
    period: "Feb 2026 – Apr 2026",
    category: "Technical Experience",
    color: "#FF5800",
    metrics: ["30% UI Speedup", "40% Code Reuse", "25% API Boost"],
    points: [
      "Engineered high-performance, responsive interfaces using React.js and TypeScript, increasing UI rendering efficiency by ~30%.",
      "Architected reusable, modular UI design tokens and components, cutting redundant frontend code across repositories by 40%.",
      "Integrated complex REST APIs dynamically into React state machines, elevating overall web client responsiveness by 25%.",
      "Collaborated seamlessly across frontend and backend boundaries to elevate code maintainability and overall DX by 35%."
    ]
  },
  {
    id: "03",
    year: "2025",
    title: "Event Management Head",
    company: "Financity, BVPCOE",
    location: "Pune, India",
    period: "Jan 2025 – Present",
    category: "Leadership & Management",
    color: "#3B82F6",
    metrics: ["30% More Engagement", "8-Member Lead", "100% On-Time"],
    points: [
      "Spearheaded student outreach and technical initiatives, boosting active participation in academic events by 30% through direct mentorship of 20+ peers.",
      "Directed an 8-member organizing committee to deliver 5+ flagship university-level events, reducing manual cross-team friction by 50%.",
      "Maintained a flawless 100% on-time execution track record across university conferences and workshops."
    ]
  },
  {
    id: "04",
    year: "2025",
    title: "Machine Learning Researcher",
    company: "Bharati Vidyapeeth College of Engineering",
    location: "Pune, India",
    period: "2025",
    category: "Research & Development",
    color: "#10B981",
    metrics: ["6 Varieties Analyzed", "Published Research", "Computer Vision"],
    points: [
      "Pioneered an academic computer vision research initiative focusing on AgriTech, creating the 'Mango-Classifier' deep learning model.",
      "Curated datasets and trained neural networks to detect and classify 6 distinct varieties of agricultural yields with state-of-the-art accuracy.",
      "Authored research documentation bridging modern convolutional models with automated agricultural quality inspection."
    ]
  },
  {
    id: "05",
    year: "2024",
    title: "Event Manager & Student Mentor",
    company: "Buzzent",
    location: "Pune, India",
    period: "2024",
    category: "Operations & Leadership",
    color: "#8B5CF6",
    metrics: ["100+ Live Events", "Student Mentorship", "Vendor Logistics"],
    points: [
      "Coordinated end-to-end stage logistics, crowd safety, and technical execution for 100+ premier live entertainment and standup shows across Pune.",
      "Mentored junior coordinators in crisis resolution, on-site contingency management, and rapid technical debugging under live show pressure.",
      "Liaised with celebrity artists, production vendors, and venue authorities to deliver seamless audience experiences."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t-2 border-black"
    >
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24 lg:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5800]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF5800] uppercase">
              02 / WORK & LEADERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.95]">
            Where I&apos;ve made an <span className="text-[#FF5800]">impact</span>.
          </h2>

          <p className="mt-4 text-lg sm:text-2xl font-serif italic text-neutral-400 max-w-2xl">
            5 high-impact roles spanning full-stack development, consultancy, and leadership.
          </p>
        </div>

        {/* Central S-Curve Track + Timeline Cards */}
        <div className="relative flex flex-col items-center">
          
          {/* Background Animated SVG Connector Track (Desktop) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 0 C 85 5, 85 15, 50 20 C 15 25, 15 35, 50 40 C 85 45, 85 55, 50 60 C 15 65, 15 75, 50 80 C 85 85, 85 95, 50 100"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="4"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
              <motion.path
                d="M 50 0 C 85 5, 85 15, 50 20 C 15 25, 15 35, 50 40 C 85 45, 85 55, 50 60 C 15 65, 15 75, 50 80 C 85 85, 85 95, 50 100"
                stroke="#FF5800"
                strokeWidth="4"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                style={{
                  pathLength: scrollYProgress,
                  filter: "drop-shadow(0px 0px 8px #FF5800)"
                }}
              />
            </svg>
          </div>

          {/* Timeline Milestones */}
          <div className="w-full flex flex-col gap-12 sm:gap-20 lg:gap-36">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="relative w-full flex flex-col lg:flex-row items-center justify-between"
                >
                  {/* Giant Translucent Year Watermark in Background */}
                  <div 
                    className={`absolute hidden lg:block text-[140px] font-black tracking-tighter text-white/[0.03] select-none pointer-events-none -top-16 ${
                      isEven ? "right-12" : "left-12"
                    }`}
                  >
                    {exp.year}
                  </div>

                  {/* Left Slot (Desktop) */}
                  <div className={`w-full lg:w-[46%] ${!isEven ? "lg:block" : "lg:hidden"}`}>
                    {!isEven && <ExperienceCard exp={exp} direction="left" />}
                  </div>

                  {/* Center Node Milestone Marker */}
                  <div className="hidden lg:flex w-[8%] justify-center items-center z-20">
                    <div className="relative w-12 h-12 rounded-full bg-neutral-900 border-2 border-[#FF5800] shadow-[0_0_16px_rgba(255,88,0,0.4)] flex items-center justify-center">
                      <span className="text-xs font-mono font-black text-white">{exp.id}</span>
                      <div className="absolute -inset-1 rounded-full border border-[#FF5800]/40 animate-pulse" />
                    </div>
                  </div>

                  {/* Right Slot (Desktop) */}
                  <div className={`w-full lg:w-[46%] ${isEven ? "lg:block" : "lg:hidden"}`}>
                    {isEven && <ExperienceCard exp={exp} direction="right" />}
                  </div>

                  {/* Mobile Display */}
                  <div className="w-full lg:hidden">
                    <ExperienceCard exp={exp} direction="up" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  direction = "up"
}: {
  exp: (typeof experiences)[0];
  direction?: "left" | "right" | "up";
}) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -45, y: 20 }
      : direction === "right"
      ? { opacity: 0, x: 45, y: 20 }
      : { opacity: 0, y: 30 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#141414] rounded-2xl sm:rounded-3xl border-2 border-neutral-800 hover:border-neutral-700 p-5 sm:p-8 md:p-10 shadow-[4px_4px_0_0_#FF5800] sm:shadow-[6px_6px_0_0_#FF5800] transition-all duration-300"
    >
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6">
        <span
          className="px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-mono font-black tracking-wider uppercase text-white shadow-sm"
          style={{ backgroundColor: exp.color }}
        >
          {exp.category}
        </span>
        <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
          <Calendar className="w-3.5 h-3.5 text-[#FF5800]" />
          {exp.period}
        </span>
      </div>

      {/* Role & Company */}
      <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
        {exp.title}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm font-bold text-neutral-400">
        <span className="flex items-center gap-1.5 text-neutral-300">
          <Building2 className="w-4 h-4 text-[#FF5800]" />
          {exp.company}
        </span>
        <span className="text-neutral-600">·</span>
        <span className="flex items-center gap-1.5 font-normal">
          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
          {exp.location}
        </span>
      </div>

      {/* Metric Highlights Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {exp.metrics.map((m, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs font-mono font-bold text-neutral-300"
          >
            ✦ {m}
          </span>
        ))}
      </div>

      {/* Bullet Points */}
      <div className="mt-6 pt-6 border-t border-neutral-800/80 flex flex-col gap-3.5">
        {exp.points.map((pt, i) => (
          <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            <span
              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ backgroundColor: exp.color }}
            />
            <span>{pt}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
