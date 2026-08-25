"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function ComingSoon({
  eyebrow,
  title,
  description,
  note,
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  icon: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-card px-8 py-16 text-center">
            <motion.div
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "var(--pillar-environment)", opacity: 0.14 }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.15, 1], opacity: [0.14, 0.22, 0.14] }
              }
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "var(--pillar-education)", opacity: 0.14 }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.15, 1], opacity: [0.14, 0.22, 0.14] }
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary [&_svg]:size-8">
                {icon}
              </div>
              <h2 className="mt-6 font-heading text-xl font-semibold text-foreground">
                Coming Soon
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
