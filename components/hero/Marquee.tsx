"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useScrollContext } from "@/components/providers/ScrollProvider";

interface MarqueeProps {
  text: string;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function Marquee({
  text,
  direction = "left",
  speed = 180,
  className = "",
}: MarqueeProps) {
  const x = useMotionValue(0);

  const { velocity } = useScrollContext();

  const targetSpeed = useSpring(speed, {
    stiffness: 70,
    damping: 25,
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const widthRef = useRef(0);

  const [isHovered, setIsHovered] = useState(false);

  /* ----------------------------------
      Measure Width
  ----------------------------------- */

  useEffect(() => {
    const updateWidth = () => {
      if (!contentRef.current) return;

      widthRef.current = contentRef.current.scrollWidth / 2;
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* ----------------------------------
      Hover Speed
  ----------------------------------- */

  useEffect(() => {
    targetSpeed.set(isHovered ? speed * 0.35 : speed);
  }, [isHovered, speed, targetSpeed]);

  /* ----------------------------------
      Animation Loop
  ----------------------------------- */

  useAnimationFrame((_, delta) => {
    const width = widthRef.current;

    if (!width) return;

    const scrollBoost = Math.min(
      Math.abs(velocity.get()) * 0.015,
      30
    );

    const currentSpeed = targetSpeed.get() + scrollBoost;

    let current = x.get();

    const movement = (currentSpeed * delta) / 1000;

    if (direction === "left") {
      current -= movement;

      if (current <= -width) {
        current += width;
      }
    } else {
      current += movement;

      if (current >= 0) {
        current -= width;
      }
    }

    x.set(current);
  });

  const items = Array.from({ length: 10 }, () => text);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={contentRef}
        style={{ x }}
        className="flex w-max select-none"
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="
              mx-8
              flex-shrink-0
              whitespace-nowrap
              text-[8rem]
              font-black
              uppercase
              tracking-[-6px]
              leading-none
              text-black
            "
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}