"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at top right, color-mix(in oklab, var(--pillar-education) 30%, transparent), transparent 55%), radial-gradient(ellipse at bottom left, color-mix(in oklab, var(--pillar-sustainability) 28%, transparent), transparent 55%)",
            }}
          />
          <motion.div
            className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "var(--pillar-people)", opacity: 0.18 }}
            animate={shouldReduceMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to become a changemaker?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
              Join our volunteers, partner on an initiative, or simply reach out
              — every action helps build a greener, more sustainable Bangladesh.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "group h-11 cursor-pointer rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
                  )}
                >
                  Get in Touch
                  <ArrowUpRight
                    className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/members"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-11 cursor-pointer rounded-full border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  Meet the Team
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
