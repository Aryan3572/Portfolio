"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Event Management Head",
    company: "Financity, BVPCOE",
    location: "Pune, India",
    date: "Jan 2025 – Present",
    type: "Leadership Experience",
    color: "#3b82f6", // Contrast Blue
    points: [
      "Increased student participation in academic and extracurricular activities by approximately 30% by mentoring and coordinating 20+ students.",
      "Planned and delivered 5+ college-level events by leading an 8-member organizing team, reducing manual coordination effort by nearly 50%.",
      "Achieved 100% on-time execution of scheduled events by streamlining communication and task allocation across teams."
    ]
  },
  {
    id: 2,
    title: "Software Engineer UI Intern",
    company: "Ipsator",
    location: "Remote",
    date: "Feb 2026 – Apr 2026",
    type: "Technical Experience",
    color: "#ff5500", // Signature Orange
    points: [
      "Developed responsive user interfaces using React.js and TypeScript, improving UI rendering performance by approximately 30%.",
      "Built reusable and modular UI components, reducing redundant frontend code by 40%.",
      "Connected REST APIs to frontend components to load data dynamically, improving application speed by 25%.",
      "Handled both frontend and backend work, improving UI structure and increasing maintainability and development efficiency by approximately 35%."
    ]
  },
  {
    id: 3,
    title: "Machine Learning Researcher",
    company: "Bharati Vidyapeeth College of Engineering",
    location: "Pune, India",
    date: "2025",
    type: "Research & Development",
    color: "#10b981", // Contrast Green for ML/AI
    points: [
      "Spearheaded an academic research project focused on agricultural technology, developing an advanced AI/ML model named 'Mango-classifier'.",
      "Trained custom machine learning algorithms to accurately classify and provide detailed analytics on 6 distinct varieties of mangoes.",
      "Published research findings based on the high accuracy of the classification model, bridging the gap between computer vision and practical agricultural applications."
    ]
  },
  {
    id: 4,
    title: "Event Manager & Student Mentor",
    company: "Buzzent",
    location: "Pune, India",
    date: "2024",
    type: "Leadership Experience",
    color: "#8b5cf6", // Contrast Purple for creative events
    points: [
      "Successfully managed and coordinated logistics for 100+ live events across Pune, including standup comedy shows, large-scale concerts, and creative functions.",
      "Served as a Student Mentor, guiding junior team members in event execution, crowd management, and rapid on-site problem-solving.",
      "Collaborated closely with local vendors, artists, and venue managers to ensure seamless operations and high-quality audience experiences."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <section 
      id="experience"
      ref={containerRef}
      className="relative z-10 w-full bg-[#111] px-6 py-32 text-neutral-200 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Header */}
        <div className="mb-32 text-center flex flex-col items-center">
          <span className="mb-4 block text-sm font-bold tracking-widest text-[#ff5500]">02 EXPERIENCE & LEADERSHIP</span>
          <h2 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Where I&apos;ve<br />made an impact.
          </h2>
        </div>

        {/* Zig-Zag Alternating Timeline Container */}
        <div className="relative flex flex-col items-center pb-20">
          
          {/* Background Animated S-Curve (Desktop) */}
          <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
            <svg 
              viewBox="0 0 100 100" 
              className="h-full w-full" 
              preserveAspectRatio="none"
            >
              {/* Background Track */}
              <path 
                d="M 50 0 C 0 8, 0 16, 50 25 C 100 33, 100 41, 50 50 C 0 58, 0 66, 50 75 C 100 83, 100 91, 50 100" 
                stroke="#222" 
                strokeWidth="6" 
                fill="none" 
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
              {/* Animated Fill Track */}
              <motion.path 
                d="M 50 0 C 0 8, 0 16, 50 25 C 100 33, 100 41, 50 50 C 0 58, 0 66, 50 75 C 100 83, 100 91, 50 100" 
                stroke="#ff5500" 
                strokeWidth="6" 
                fill="none" 
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                style={{ 
                  pathLength: scrollYProgress,
                  filter: "drop-shadow(0px 0px 8px #ff5500)"
                }}
              />
            </svg>
          </div>

          {experiences.map((exp, index) => {
            // First item (Leadership) on the Right, Second item (Technical) on the Left.
            const isRightSide = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex w-full items-center justify-between mb-24 last:mb-0 md:mb-40">
                
                {/* Desktop Left Side */}
                <div className="hidden md:flex w-[45%] justify-end z-10 relative">
                  {!isRightSide && <ExperienceCard exp={exp} direction="left" />}
                </div>

                {/* Desktop Right Side */}
                <div className="hidden md:flex w-[45%] justify-start z-10 relative">
                  {isRightSide && <ExperienceCard exp={exp} direction="right" />}
                </div>

                {/* Mobile Layout (Full Width, Line on Left) */}
                <div className="flex w-full relative md:hidden">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-neutral-800" />
                  <div className="absolute -left-[7px] top-14 h-4 w-4 rounded-full border-2 border-[#111] bg-[#ff5500]" />
                  <div className="w-full pl-8">
                    <ExperienceCard exp={exp} direction="right" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ExperienceCard({ exp, direction }: { exp: any, direction: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="w-full max-w-2xl flex flex-col justify-between gap-10 rounded-[2.5rem] border border-neutral-800 bg-[#1a1a1a] p-8 shadow-2xl transition-all duration-300 hover:border-neutral-600 md:p-12"
    >
      <div className="flex flex-col">
        <span 
          className="mb-6 inline-block w-fit rounded-full px-4 py-1.5 text-xs font-black tracking-widest text-white shadow-lg"
          style={{ backgroundColor: exp.color }}
        >
          {exp.type.toUpperCase()}
        </span>
        <h3 className="mb-3 text-3xl font-black leading-tight text-white">{exp.title}</h3>
        <p className="mb-6 text-xl font-bold text-neutral-400">{exp.company}</p>
        
        <div className="flex flex-col gap-2 text-sm font-bold tracking-widest text-neutral-500">
          <p className="flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
            {exp.date}
          </p>
          <p className="flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
            {exp.location}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <ul className="flex flex-col gap-5">
          {exp.points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-4 text-base leading-relaxed text-neutral-300">
              <span 
                className="mt-2.5 flex h-2 w-2 shrink-0 rounded-full" 
                style={{ backgroundColor: exp.color }}
              ></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
