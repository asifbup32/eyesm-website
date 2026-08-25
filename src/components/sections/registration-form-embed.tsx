"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowSquareOut, IdentificationCard } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site-data";

export function RegistrationFormEmbed() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
      <motion.div
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "var(--pillar-education)", opacity: 0.18 }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10">
          <IdentificationCard className="size-8 text-primary" aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
          Opens as a secure Google Form
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          You&apos;ll sign in with your Google account to submit — your name,
          email, and photo are recorded automatically, just like the original
          form.
        </p>
        <motion.a
          href={site.registrationForm}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
        >
          Open Registration Form
          <ArrowSquareOut className="size-4" aria-hidden="true" />
        </motion.a>
      </div>
    </div>
  );
}
