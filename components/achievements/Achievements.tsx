"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Database Management Systems",
    badge: "DBMS COURSE",
    description: "Official NPTEL certification diving deep into relational databases, writing complex SQL queries, and core database architecture.",
    link: "/certificates/DBMS.pdf",
    color: "#ff5500",
  },
  {
    id: 2,
    title: "Data Science for Engineers",
    badge: "DATA SCIENCE",
    description: "NPTEL certification covering the absolute fundamentals of data analytics, statistical modeling, and machine learning.",
    link: "/certificates/Data Science for Engineers (1).pdf",
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "Professional Internship",
    badge: "INTERNSHIP",
    description: "Official completion certificate highlighting my hands-on industry experience and software development contributions.",
    link: "/certificates/Internship Certificate. Aryan Raj.pdf",
    color: "#10b981",
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = achievements.length - 1;
    if (nextIndex >= achievements.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="achievements" className="relative w-full bg-[#F7F7F5] py-32 overflow-hidden border-t-[3px] border-black">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mx-auto w-full max-w-4xl px-6 mb-16 text-center flex flex-col items-center"
      >
        <span className="mb-4 block text-sm font-bold tracking-widest text-[#ff5500] uppercase">05 Achievements</span>
        <h2 className="text-4xl font-black leading-tight tracking-tight text-black md:text-6xl mb-4">
          Verified, not just claimed.
        </h2>
        <p className="text-lg font-medium text-neutral-500">
          Tap the card to view the verifiable source. Swipe to explore.
        </p>
      </motion.div>

      {/* Carousel Area */}
      <div className="relative w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Dynamic Title Above Card */}
        <motion.div
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 text-sm font-bold text-black text-center"
        >
          {achievements[currentIndex].title}
        </motion.div>

        {/* Card */}
        <div className="relative w-full max-w-2xl h-[250px] md:h-[350px] perspective-1000">
          <AnimatePresence mode="wait">
            <motion.a
              key={currentIndex}
              href={achievements[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="absolute inset-0 block w-full h-full bg-white border-[3px] border-black rounded-3xl overflow-hidden cursor-pointer group"
              style={{ boxShadow: "10px 10px 0px 0px #ff5500" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              {/* Card Inner Content (Badge Placeholder) */}
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-50 relative overflow-hidden">
                {/* Decorative background grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Floating Badge (Physical Ticket Style) */}
                <div 
                  className="relative w-48 h-48 md:w-56 md:h-56 border-[4px] border-black flex flex-col items-center justify-center text-center p-6 bg-white transition-all duration-500 rotate-3 group-hover:rotate-0 group-hover:scale-105 z-10"
                  style={{ boxShadow: `8px 8px 0px 0px ${achievements[currentIndex].color}` }}
                >
                  {/* Decorative corner bolts */}
                  <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                  
                  <span className="text-black font-black text-2xl md:text-3xl tracking-tight leading-none uppercase">
                    {achievements[currentIndex].badge.split(' ').map((word, i) => (
                      <span key={i} className="block mb-1">{word}</span>
                    ))}
                  </span>
                </div>
                
                <p className="mt-8 text-sm md:text-base font-bold text-neutral-600 text-center max-w-[80%] relative z-10">
                  {achievements[currentIndex].description}
                </p>
              </div>
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex gap-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors border-2 border-black ${
                currentIndex === index ? "bg-[#ff5500]" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
