"use client"

import {ReactNode , useRef} from "react";
import {
    motion,
    useScroll, 
    useTransform, 
    useMotionTemplate, 
} from "framer-motion";
import { useScrollContext } from "../providers/ScrollProvider";

interface AboutCardProps {
    children: ReactNode
}

export default function AboutCard({
    children, 
}: AboutCardProps){

    const ref = useRef(null);
    const {progress} = useScrollContext();

    const scale = useTransform(
        progress,
        [0,1] ,
        [0.78, 1]
    );

    const y = useTransform(
        progress,
        [0, 1],[180, 1]
    );

    const z = useTransform(
        progress,
        [0,1], [-1200,0]
    )

    const opacity = useTransform(
    progress,
    [0, 0.5],
    [0, 1]
  );

  const blur = useTransform(
    progress,
    [0, 1],
    [18, 0]
  );

  const filter = useMotionTemplate`
    blur(${blur}px)
  `;

  const transform = useMotionTemplate`
    translateZ(${z}px)
  `;

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-neutral-950"
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
          filter,
          transform,
          transformStyle: "preserve-3d",
        }}
        className="flex min-h-screen items-center justify-center"
      >
        {children}
      </motion.div>
    </section>
  );


}