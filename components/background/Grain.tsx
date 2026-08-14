"use client";

export default function Grain() {
  return (
    <div
      className="
      pointer-events-none
      fixed
      inset-0
      -z-40
      opacity-[0.045]
      "
    >
      <div
        className="
        absolute
        inset-0
        animate-grain
        "
        style={{
          backgroundImage:
            "url('/noise.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "220px",
        }}
      />
    </div>
  );
}