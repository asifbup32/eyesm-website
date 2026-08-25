"use client";

import { motion, useReducedMotion } from "framer-motion";

const colorVars = [
  "var(--pillar-environment)",
  "var(--pillar-people)",
  "var(--pillar-education)",
  "var(--pillar-sustainability)",
  "var(--pillar-mindset)",
];

export function DecorativeBlobs({
  variant = "corners",
  className = "",
}: {
  variant?: "corners" | "scattered";
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const blobs =
    variant === "corners"
      ? [
          { color: colorVars[0], size: 260, top: "-8%", left: "-6%", opacity: 0.16, dur: 11 },
          { color: colorVars[2], size: 220, top: "60%", left: "92%", opacity: 0.16, dur: 13 },
        ]
      : [
          { color: colorVars[0], size: 220, top: "5%", left: "8%", opacity: 0.14, dur: 10 },
          { color: colorVars[1], size: 180, top: "15%", left: "78%", opacity: 0.14, dur: 12 },
          { color: colorVars[2], size: 200, top: "70%", left: "88%", opacity: 0.14, dur: 9 },
          { color: colorVars[4], size: 190, top: "80%", left: "4%", opacity: 0.14, dur: 14 },
        ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background: b.color,
            opacity: b.opacity,
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 24, -12, 0],
                  x: [0, 18, -10, 0],
                  scale: [1, 1.12, 0.95, 1],
                }
          }
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
