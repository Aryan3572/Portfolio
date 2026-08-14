"use client";

import { ReactNode } from "react";
import {
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import { useScrollContext } from "@/components/providers/ScrollProvider";

interface HeroCardProps {
  children: ReactNode;
}

export default function HeroCard({
  children,
}: HeroCardProps) {
  const { progress } = useScrollContext();

  /* --------------------------
      Card Animation
  --------------------------- */

  const scale = useTransform(
    progress,
    [0, 0.2, 0.45, 0.75, 1],
    [1, 0.98, 0.95, 0.9, 0.84]
  );

  const y = useTransform(
    progress,
    [0, 1],
    [0, -420]
  );

  const rotateX = useTransform(
    progress,
    [0, 1],
    [0, 10]
  );

  const borderRadius = useTransform(
    progress,
    [0, 1],
    [0, 48]
  );

  const blur = useTransform(
    progress,
    [0.7, 1],
    [0, 4]
  );

  const filter = useMotionTemplate`
    blur(${blur}px)
  `;

  const shadowOpacity = useTransform(
    progress,
    [0, 1],
    [0.08, 0.20]
  );

  const boxShadow = useMotionTemplate`
    0px 60px 120px rgba(0,0,0,${shadowOpacity})
  `;

  return (
    <section className="relative h-[250vh]">
      <motion.div
        style={{
          scale,
          y,
          rotateX,
          borderRadius,
          filter,
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
        {children}
      </motion.div>
    </section>
  );
}