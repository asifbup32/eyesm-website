"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Leaf,
  UsersThree,
  Books,
  Recycle,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { pillars, type PillarKey } from "@/lib/site-data";

const icons: Record<
  PillarKey,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  environment: Leaf,
  youth: UsersThree,
  education: Books,
  sustainability: Recycle,
  mindset: Brain,
};

export function PillarsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Area of Work
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Five pillars driving youth-led change
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = icons[pillar.key];
          return (
            <StaggerItem key={pillar.key}>
              <motion.div
                className="group h-full rounded-3xl border border-border bg-card p-7"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -8, boxShadow: "0 20px 40px -12px rgb(0 0 0 / 0.15)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="flex size-12 items-center justify-center rounded-2xl"
                  style={{
                    background: `color-mix(in oklab, ${pillar.color} 16%, transparent)`,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { rotate: [0, -12, 12, -6, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className="size-6"
                    style={{ color: pillar.iconColor }}
                  />
                </motion.div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
