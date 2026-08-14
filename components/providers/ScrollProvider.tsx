"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import {
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";

interface ScrollContextType {
  progress: ReturnType<typeof useSpring>;
  scrollY: ReturnType<typeof useSpring>;
  velocity: ReturnType<typeof useVelocity>;
}

const ScrollContext =
  createContext<ScrollContextType | null>(null);

export function ScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { scrollY, scrollYProgress } = useScroll();

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 30,
      mass: 0.2,
    }
  );

  const smoothScroll = useSpring(
    scrollY,
    {
      stiffness: 120,
      damping: 30,
      mass: 0.2,
    }
  );

  const velocity = useVelocity(scrollY);

  return (
    <ScrollContext.Provider
      value={{
        progress: smoothProgress,
        scrollY: smoothScroll,
        velocity,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error(
      "useScrollContext must be used inside ScrollProvider"
    );
  }

  return context;
}