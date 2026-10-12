"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

const achievements = [
  {
    id: "01",
    title: "Database Management Systems",
    authority: "NPTEL / IIT Kharagpur",
    badge: "DBMS MASTERY",
    date: "Certified",
    color: "#FF5800",
    description: "In-depth certification covering relational database design, B+ tree indexing, transaction ACID durability, concurrency control protocols, and complex SQL query optimization.",
    link: "/certificates/DBMS.pdf",
    skills: ["Relational Algebra", "Normalization", "Concurrency Control", "SQL Performance"],
  },
  {
    id: "02",
    title: "Data Science for Engineers",
    authority: "NPTEL / IIT Madras",
    badge: "DATA SCIENCE",
    date: "Certified",
    color: "#3B82F6",
    description: "Rigorous analytical credential exploring multivariate data modeling, statistical hypothesis testing, linear algebra for ML, and regression analysis.",
    link: "/certificates/Data Science for Engineers (1).pdf",
    skills: ["Statistical Modeling", "Linear Algebra", "Python Analytics", "Machine Learning"],
  },
  {
    id: "03",
    title: "Professional Internship Certificate",
    authority: "Ipsator",
    badge: "INDUSTRY INTERNSHIP",
    date: "Verified",
    color: "#10B981",
    description: "Official industry internship credential recognizing hands-on software development, production UI component architectures, and dynamic REST API integrations.",
    link: "/certificates/Internship Certificate. Aryan Raj.pdf",
    skills: ["Production React", "TypeScript", "REST Integration", "Component Libraries"],
  },
  {
    id: "04",
    title: "Aashya Legal Experience Certificate",
    authority: "Aashya Legal, Advocates & Consultants",
    badge: "FIRM WEB & ENGINEERING",
    date: "Verified",
    color: "#D97706",
    description: "Official certificate recognizing technical competence, creativity, and dedicated full-stack engineering contribution to the design, development, and deployment of the firm's official web platform.",
    link: "/certificates/Certificate of Experience_Aryan_Raj.pdf",
    skills: ["Full-Stack Web", "Consultation Portals", "Production Rollout", "UI/UX Architecture"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-[#F5F4F3] py-20 sm:py-28 lg:py-36 overflow-hidden border-t-2 border-black select-none">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#0A0A0A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5800]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase">
              05 / CREDENTIALS & ACHIEVEMENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] uppercase leading-[0.95]">
            Verified, not just <span className="text-[#FF5800]">claimed</span>.
          </h2>

          <p className="mt-4 text-lg sm:text-2xl font-serif italic text-neutral-700 max-w-xl">
            Official engineering credentials and NPTEL certifications backed by verifiable source documents.
          </p>
        </motion.div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border-2 border-black p-5 sm:p-7 shadow-[4px_4px_0_0_#0A0A0A] sm:shadow-[6px_6px_0_0_#0A0A0A] hover:shadow-[8px_8px_0_0_#FF5800] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Bolt Accents */}
              <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-neutral-200 border border-black/40" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-neutral-200 border border-black/40" />
              <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-neutral-200 border border-black/40" />
              <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-neutral-200 border border-black/40" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-2.5 py-1 rounded-full text-[9.5px] font-mono font-black uppercase text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 font-bold">
                    {item.id} / 04
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0A0A0A] tracking-tight uppercase leading-snug">
                  {item.title}
                </h3>

                <span className="text-xs font-mono font-bold text-neutral-500 block mt-1">
                  Issued by {item.authority}
                </span>

                <p className="mt-3.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-lg bg-[#F5F4F3] border border-black/15 text-[10px] font-mono font-bold text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate CTA Button */}
              <div className="mt-7 pt-5 border-t-2 border-neutral-100">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#0A0A0A] text-white text-[11px] font-black tracking-widest uppercase hover:bg-[#FF5800] transition-colors border-2 border-black shadow-[3px_3px_0_0_#FF5800] active:translate-x-[1px] active:translate-y-[1px]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>VIEW CREDENTIAL PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
