"use client";

import Image from "next/image";
import profilePic from "./profile.jpeg";
import {
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import { useScrollContext } from "../providers/ScrollProvider";

export default function HeroImage() {
  const { progress } = useScrollContext();

  /* --------------------------
      Scroll Animation
  --------------------------- */

  const scale = useTransform(
    progress,
    [0, 1],
    [1, 0.88]
  );

  const y = useTransform(
    progress,
    [0, 1],
    [0, -40]
  );

  const shadowOpacity = useTransform(
    progress,
    [0, 1],
    [0.08, 0.18]
  );

  const boxShadow = useMotionTemplate`
    0px 40px 100px rgba(0,0,0,${shadowOpacity})
  `;

  return (
    <>
      {/* SVG Filter for Glitch Effect */}
      <svg className="hidden">
        <defs>
          <filter id="glitch-effect">
            <feOffset in="SourceGraphic" dx="0" dy="0" result="red">
              <animate 
                attributeName="dx" 
                values="0; 6; -4; 8; -2; 0; 0; 0; 0" 
                keyTimes="0; 0.05; 0.1; 0.15; 0.2; 0.25; 0.5; 0.75; 1" 
                dur="3s" 
                calcMode="discrete" 
                repeatCount="indefinite" 
              />
            </feOffset>
            <feOffset in="SourceGraphic" dx="0" dy="0" result="cyan">
              <animate 
                attributeName="dx" 
                values="0; -6; 4; -8; 2; 0; 0; 0; 0" 
                keyTimes="0; 0.05; 0.1; 0.15; 0.2; 0.25; 0.5; 0.75; 1" 
                dur="3s" 
                calcMode="discrete" 
                repeatCount="indefinite" 
              />
            </feOffset>
            
            <feColorMatrix in="red" type="matrix" values="
              1 0 0 0 0 
              0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 1 0" result="red_channel" />
              
            <feColorMatrix in="cyan" type="matrix" values="
              0 0 0 0 0 
              0 1 0 0 0 
              0 0 1 0 0 
              0 0 0 1 0" result="cyan_channel" />
              
            <feBlend mode="screen" in="red_channel" in2="cyan_channel" />
          </filter>
        </defs>
      </svg>

      <motion.div
        style={{
          scale,
          y,
        }}
        className="pointer-events-none"
      >
        <motion.div
          style={{
            boxShadow,
          }}
          whileHover={{
            scale: 1.03,
            rotate: -1,
            transition: {
              duration: 0.35,
            },
          }}
          className="
            pointer-events-auto
            relative
            h-[540px]
            w-[360px]
            overflow-hidden
            rounded-sm
            bg-neutral-200
          "
        >
          {/* Glitch Image Wrapper */}
          <div className="absolute inset-0" style={{ filter: 'url(#glitch-effect)' }}>
            <Image
              src={profilePic}
              alt="Aryan Raj"
              fill
              priority
              className="
                object-cover
                contrast-125
                brightness-90
                saturate-50
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Noise Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50" 
            style={{ backgroundImage: 'url(/noise.png)' }} 
          />

          {/* Scanlines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.15]" 
            style={{ 
              background: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, black 3px, black 3px)' 
            }} 
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </>
  );
}