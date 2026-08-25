"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const accentColors = [
  "var(--pillar-environment)",
  "var(--pillar-people)",
  "var(--pillar-education)",
  "var(--pillar-sustainability)",
  "var(--pillar-mindset)",
];

export function MemberCard({
  name,
  role,
  bio,
  image,
  index = 0,
}: {
  name: string;
  role: string;
  bio?: string;
  image: string;
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card"
      whileHover={shouldReduceMotion ? undefined : { y: -10 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      style={{ boxShadow: "0 1px 2px rgb(0 0 0 / 0.06)" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 ring-2 group-hover:opacity-100"
        style={{ ["--tw-ring-color" as string]: accent }}
        transition={{ duration: 0.25 }}
        aria-hidden="true"
      />

      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute right-5 top-5" aria-hidden="true">
          {!shouldReduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: accent }}
              animate={{ scale: [1, 1.8, 1.8], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <span
            className="relative block size-3 rounded-full ring-2 ring-white/60"
            style={{ background: accent }}
          />
        </div>

        <span
          className="absolute left-5 top-5 h-1.5 w-8 rounded-full"
          style={{ background: accent }}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
          {role}
        </p>
        {bio && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {bio}
          </p>
        )}
      </div>
    </motion.div>
  );
}
