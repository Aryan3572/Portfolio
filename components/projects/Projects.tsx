"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import sonicScribeImg from "./SonicScribe.png";
import smartOnboardingImg from "./Smart Onboarding Portal.png";
import mangoClassifierImg from "./Mango-Classifier.png";
import tripchainImg from "./Tripchain.png";

const projects = [
  {
    id: 1,
    title: "SonicScribe",
    desc: "A production-ready full-stack medical audio analysis platform. Uses Next.js, Flask, Whisper API, and LangChain to enable end-to-end processing of medical audio files.",
    tags: ["Next.js", "Flask", "PostgreSQL", "Docker", "GitHub Actions"],
    link: "https://github.com/Aryan3572/SonicScribe",
    live: "https://sonic-scribe-zfha.vercel.app",
    bgColor: "#e0f2fe", // Light Blue
    image: sonicScribeImg
  },
  {
    id: 2,
    title: "Smart Onboarding",
    desc: "A seamless, automated employee onboarding dashboard featuring real-time checklists, HR management tools, and robust role-based access control.",
    tags: ["TypeScript", "Next.js", "TanStack Start"],
    link: "https://github.com/Aryan3572/Smart-onboarding-portal",
    live: "https://smart-onboarding-portal.vercel.app",
    bgColor: "#fef08a", // Light Yellow
    image: smartOnboardingImg
  },
  {
    id: 3,
    title: "Mango-Classifier",
    desc: "Advanced AI/ML model trained to accurately classify and provide detailed analytics on 6 distinct varieties of mangoes for agricultural applications.",
    tags: ["Machine Learning", "Python", "Computer Vision"],
    link: "https://github.com/Aryan3572/mango-classifier",
    live: "https://mango-classifier-ti28.vercel.app",
    bgColor: "#bbf7d0", // Light Green
    image: mangoClassifierImg
  },
  {
    id: 4,
    title: "TripChain",
    desc: "A decentralized travel ecosystem ensuring transparent itineraries, immutable records, and secure peer-to-peer interactions.",
    tags: ["React.js", "TypeScript", "Mapbox"],
    link: "https://github.com/Aryan3572/Tripchain-",
    live: "https://tripchain-dusky.vercel.app",
    bgColor: "#c4b5fd", // Light Purple
    image: tripchainImg
  },
  {
    id: 5,
    title: "SwipeHire",
    desc: "A modern, Tinder-style job matching application streamlining the hiring process with intuitive swipe gestures and real-time candidate filtering.",
    tags: ["React", "TailwindCSS", "Node.js"],
    link: "https://github.com/Aryan3572/SwipeHire-clean",
    bgColor: "#fbcfe8", // Light Pink
  }
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current && trackRef.current) {
        setConstraints(trackRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    
    // Slight delay to ensure fonts/layout are fully painted before math
    const timeoutId = setTimeout(updateConstraints, 500);

    return () => {
      window.removeEventListener("resize", updateConstraints);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="projects" className="relative w-full bg-[#F7F7F5] py-32 overflow-hidden border-t-[3px] border-black">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mx-auto w-full max-w-7xl px-6 mb-20 text-center flex flex-col items-center"
      >
        <span className="mb-4 block text-sm font-bold tracking-widest text-[#ff5500]">03 PROJECTS</span>
        <h2 className="text-5xl font-black leading-tight tracking-tight text-black md:text-7xl">
          Things I&apos;ve built and shipped.
        </h2>
        <p className="mt-4 text-xl font-medium text-neutral-600">
          A mix of full-stack platforms and AI/ML systems.
        </p>
      </motion.div>

      {/* Drag Carousel */}
      <div 
        ref={carouselRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-10"
      >
        <motion.div
          ref={trackRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          drag="x"
          dragConstraints={{ right: 0, left: -constraints }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="flex gap-10 px-6 md:px-12 w-max"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50 },
                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
              }}
              className="group relative w-[320px] md:w-[380px] flex-shrink-0 flex flex-col bg-white border-[3px] border-black rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: "10px 10px 0px 0px #ff5500" }} // Solid Neobrutalist Shadow
            >
              {/* Thumbnail Area */}
              <div 
                className="h-48 w-full border-b-[3px] border-black flex items-center justify-center relative overflow-hidden bg-neutral-100"
                style={{ backgroundColor: project.bgColor }}
              >
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <h3 className="relative z-10 text-3xl font-black text-black text-center leading-tight mix-blend-overlay opacity-60">
                    {project.title.toUpperCase()}
                  </h3>
                )}
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h4 className="text-2xl font-black text-black mb-3">{project.title}</h4>
                <p className="text-base font-medium text-neutral-700 leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold text-black">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.live ? (
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black rounded-full font-black text-sm hover:bg-neutral-100 transition-colors border-[3px] border-black cursor-pointer group"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                      </svg>
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#ff5500] text-white rounded-full font-black text-sm hover:bg-[#e64d00] transition-colors border-[3px] border-transparent cursor-pointer group"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live
                    </a>
                  </div>
                ) : (
                  <div className="mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block py-3 bg-black text-white rounded-full font-black text-center text-sm tracking-wide hover:bg-[#ff5500] hover:text-black border-[3px] border-transparent hover:border-black transition-colors cursor-pointer"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      View Project &rarr;
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Interaction Hint */}
      <div className="mt-12 flex items-center justify-center gap-4 text-sm font-black tracking-widest text-neutral-400">
        <span>&larr;</span>
        <span>DRAG TO EXPLORE</span>
        <span>&rarr;</span>
      </div>

      {/* GitHub Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 flex justify-center w-full px-6"
      >
        <a 
          href="https://github.com/Aryan3572?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-lg tracking-wide border-[3px] border-black hover:-translate-y-1 hover:bg-[#ff5500] hover:text-white transition-all cursor-pointer"
          style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
        >
          <span>View All Projects on GitHub</span>
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
          </svg>
        </a>
      </motion.div>

    </section>
  );
}
