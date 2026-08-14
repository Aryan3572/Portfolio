"use client";

import Marquee from "./Marquee";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F7F7F5]">

      {/* ---------- Background (Future Ready) ---------- */}

      <div className="absolute inset-0 -z-20" />

      {/* ---------- Gradient Overlay ---------- */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#f2f2f2]/20" />

      {/* ---------- Marquee Row 1 ---------- */}

      <div className="absolute top-32 left-0 w-full z-30">
        <Marquee
          text="FULL STACK DEVELOPER"
          direction="left"
          speed={200}
        />
      </div>

      {/* ---------- Marquee Row 2 ---------- */}

      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 z-30">
        <Marquee
          text="SYSTEM ARCHITECT"
          direction="right"
          speed={200}
        />
      </div>

      {/* ---------- Hero Image ---------- */}

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <HeroImage />
      </div>

      {/* ---------- Marquee Row 3 ---------- */}

      <div className="absolute bottom-32 left-0 w-full z-40">
        <Marquee
          text="BACKEND ENGINEER"
          direction="left"
          speed={200}
        />
      </div>

      {/* ---------- Top Fade ---------- */}

      <div className="pointer-events-none absolute top-0 left-0 z-50 h-40 w-full bg-gradient-to-b from-[#F7F7F5] to-transparent" />

      {/* ---------- Bottom Fade ---------- */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-50 h-40 w-full bg-gradient-to-t from-[#F7F7F5] to-transparent" />

    </section>
  );
}