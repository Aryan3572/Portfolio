"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "01",
    name: "FRONT-END",
    skills: [
      { name: "React.js", short: "Re", color: "#61DAFB", textColor: "#000", icon: "https://cdn.simpleicons.org/react/000000" },
      { name: "Next.js", short: "Nx", color: "#000000", textColor: "#FFF", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tanstack Start", short: "Ta", color: "#FF4154", textColor: "#FFF", icon: "https://cdn.simpleicons.org/reactquery/white" },
      { name: "Tailwind CSS", short: "Tw", color: "#06B6D4", textColor: "#FFF", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
      { name: "Framer Motion", short: "Fr", color: "#FF0055", textColor: "#FFF", icon: "https://cdn.simpleicons.org/framer/white" },
    ]
  },
  {
    id: "02",
    name: "BACK-END",
    skills: [
      { name: "Node.js", short: "No", color: "#339933", textColor: "#FFF", icon: "https://cdn.simpleicons.org/nodedotjs/white" },
      { name: "Express.js", short: "Ex", color: "#000000", textColor: "#FFF", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "Flask", short: "Fl", color: "#000000", textColor: "#FFF", icon: "https://cdn.simpleicons.org/flask/white" },
      { name: "Zod", short: "Zd", color: "#3E67B1", textColor: "#FFF", icon: "https://cdn.simpleicons.org/zod/white" },
      { name: "WebRTC", short: "RTC", color: "#333333", textColor: "#FFF", icon: "https://cdn.simpleicons.org/webrtc/white" },
      { name: "WebSockets", short: "WS", color: "#FF9900", textColor: "#FFF", icon: "https://cdn.simpleicons.org/socketdotio/white" },
      { name: "Cloudflare Workers", short: "Cf", color: "#F38020", textColor: "#FFF", icon: "https://cdn.simpleicons.org/cloudflare/white" },
    ]
  },
  {
    id: "03",
    name: "DATABASES",
    skills: [
      { name: "PostgreSQL", short: "Pg", color: "#336791", textColor: "#FFF", icon: "https://cdn.simpleicons.org/postgresql/white" },
      { name: "MongoDB", short: "Mg", color: "#47A248", textColor: "#FFF", icon: "https://cdn.simpleicons.org/mongodb/white" },
      { name: "Prisma ORM", short: "Pr", color: "#2D3748", textColor: "#FFF", icon: "https://cdn.simpleicons.org/prisma/white" },
      { name: "Redis", short: "Rd", color: "#DC382D", textColor: "#FFF", icon: "https://cdn.simpleicons.org/redis/white" },
      { name: "Neon", short: "Ne", color: "#00E599", textColor: "#000", icon: "https://cdn.simpleicons.org/neon/000000" },
      { name: "Aiven", short: "Ai", color: "#FF3366", textColor: "#FFF", icon: "https://cdn.simpleicons.org/aiven/white" },
      { name: "Supabase", short: "Su", color: "#3ECF8E", textColor: "#000", icon: "https://cdn.simpleicons.org/supabase/000000" },
    ]
  },
  {
    id: "04",
    name: "DEVOPS & CLOUD",
    skills: [
      { name: "Git", short: "Gt", color: "#F05032", textColor: "#FFF", icon: "https://cdn.simpleicons.org/git/white" },
      { name: "GitHub", short: "GH", color: "#181717", textColor: "#FFF", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "GitHub Actions", short: "GA", color: "#2088FF", textColor: "#FFF", icon: "https://cdn.simpleicons.org/githubactions/white" },
      { name: "Vercel", short: "Vc", color: "#000000", textColor: "#FFF", icon: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Render", short: "Rn", color: "#46E3B7", textColor: "#000", icon: "https://cdn.simpleicons.org/render/000000" },
      { name: "Railway", short: "Rw", color: "#0B0D0E", textColor: "#FFF", icon: "https://cdn.simpleicons.org/railway/white" },
      { name: "Heroku", short: "He", color: "#430098", textColor: "#FFF", icon: "https://cdn.simpleicons.org/heroku/white" },
    ]
  },
  {
    id: "05",
    name: "WEB3 & BLOCKCHAIN",
    skills: [
      { name: "Web3", short: "W3", color: "#F16822", textColor: "#FFF", icon: "https://cdn.simpleicons.org/web3dotjs/white" },
      { name: "Solidity", short: "So", color: "#363636", textColor: "#FFF", icon: "https://cdn.simpleicons.org/solidity/white" },
      { name: "Ethereum", short: "Eth", color: "#3C3C3D", textColor: "#FFF", icon: "https://cdn.simpleicons.org/ethereum/white" },
      { name: "Smart Contracts", short: "SC", color: "#8A2BE2", textColor: "#FFF", icon: "https://cdn.simpleicons.org/polkadot/white" },
    ]
  },
  {
    id: "06",
    name: "LANGUAGES",
    skills: [
      { name: "JavaScript", short: "JS", color: "#F7DF1E", textColor: "#000", icon: "https://cdn.simpleicons.org/javascript/000000" },
      { name: "TypeScript", short: "TS", color: "#3178C6", textColor: "#FFF", icon: "https://cdn.simpleicons.org/typescript/white" },
      { name: "C++", short: "C++", color: "#00599C", textColor: "#FFF", icon: "https://cdn.simpleicons.org/cplusplus/white" },
      { name: "SQL", short: "SQL", color: "#CC2927", textColor: "#FFF", icon: "https://cdn.simpleicons.org/mysql/white" },
    ]
  }
];

function SkillBubble({ skill, index }: { skill: any, index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.3, zIndex: 100 }}
      style={{ zIndex: 50 - index }}
      className="relative group cursor-pointer"
    >
      {/* Tooltip */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex flex-col items-center">
         <div className="bg-[#ff5500] text-white text-[10px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full border-[3px] border-black whitespace-nowrap shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
           {skill.name}
         </div>
      </div>

      {/* Circle Container */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_#ff5500] transition-shadow duration-300">
         <div 
           className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-lg md:text-2xl border-2 border-black/10 overflow-hidden"
           style={{ backgroundColor: skill.color, color: skill.textColor }}
         >
           {!imgError && skill.icon ? (
             <img 
               src={skill.icon} 
               alt={skill.name} 
               className="w-6 h-6 md:w-8 md:h-8 object-contain"
               onError={() => setImgError(true)}
             />
           ) : (
             skill.short
           )}
         </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-white py-32 overflow-hidden border-t-[3px] border-black">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mx-auto w-full max-w-7xl px-6 mb-24 text-center flex flex-col items-center"
      >
        <span className="mb-4 block text-sm font-bold tracking-widest text-[#ff5500]">04 SKILLS</span>
        <h2 className="text-5xl font-black leading-tight tracking-tight text-black md:text-7xl">
          The stack I reach for.
        </h2>
        <p className="mt-4 text-xl font-medium text-neutral-500">
          Organized by domain. Hover a mark to see what it is.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="mx-auto w-full max-w-5xl px-6 flex flex-col gap-16 md:gap-20">
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={category.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 lg:gap-32"
          >
            
            {/* Category Title */}
            <div className="md:w-48 flex-shrink-0">
              <span className="text-[#ff5500] font-black text-sm tracking-widest">{category.id}</span>
              <h3 className="text-sm font-bold tracking-[0.2em] text-neutral-400 mt-1 uppercase">
                {category.name}
              </h3>
            </div>
            
            {/* Overlapping Bubbles */}
            <div className="flex -space-x-6 md:-space-x-8 px-4 py-8 -my-8 md:px-0 md:py-12 md:-my-12">
              {category.skills.map((skill, i) => (
                <SkillBubble key={skill.name} skill={skill} index={i} />
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
