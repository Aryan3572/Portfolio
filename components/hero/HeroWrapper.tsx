"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import Hero from "./Hero";

export default function HeroWrapper() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* ----------------------------------
     CARD ANIMATION
  ----------------------------------- */

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 0.985, 0.96, 0.91, 0.84]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -380]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 8]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 48]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.08, 0.22]
  );

  const boxShadow = useMotionTemplate`
    0px 50px 120px rgba(0,0,0,${shadowOpacity})
  `;

  /* ----------------------------------
     TEMPORARY V MASK
  ----------------------------------- */

  const leftBottom = useTransform(
    scrollYProgress,
    [0.45, 1],
    [0, 50]
  );

  const rightBottom = useTransform(
    scrollYProgress,
    [0.45, 1],
    [100, 50]
  );

  const clipPath = useMotionTemplate`
    polygon(
      0% 0%,
      100% 0%,
      ${rightBottom}% 100%,
      ${leftBottom}% 100%
    )
  `;

  return (
    <section
      ref={ref}
      className="relative h-[260vh]"
      style={{
        perspective: "2000px",
      }}
    >
      <motion.div
        style={{
          scale,
          y,
          rotateX,
          borderRadius,
          boxShadow,
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
        }}
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          bg-[#F7F7F5]
          will-change-transform
        "
      >
        <motion.div
          style={{
            clipPath,
          }}
          className="relative h-full w-full overflow-hidden"
        >
          <Hero />
        </motion.div>
      </motion.div>
    </section>
  );
}