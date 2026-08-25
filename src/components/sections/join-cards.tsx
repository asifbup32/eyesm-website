"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ClipboardText,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { site } from "@/lib/site-data";

export function JoinCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Stagger className="grid gap-6 sm:grid-cols-2">
      <StaggerItem>
        <motion.a
          href={site.whatsappGroup}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-full cursor-pointer overflow-hidden rounded-3xl bg-[#0B4A30] p-8 text-white"
          whileHover={shouldReduceMotion ? undefined : { y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(37,211,102,0.35), transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="relative flex size-14 items-center justify-center rounded-2xl bg-[#25D366]/20">
              {!shouldReduceMotion && (
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-[#25D366]/40"
                  animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  aria-hidden="true"
                />
              )}
              <WhatsappLogo className="relative size-7 text-[#25D366]" weight="fill" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold">
              Join Our WhatsApp Group
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              Get instant updates on events, volunteer opportunities, and
              connect directly with the EYESM Bangladesh community.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366]">
              Join the group
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </motion.a>
      </StaggerItem>

      <StaggerItem>
        <motion.a
          href={site.registrationForm}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-full cursor-pointer overflow-hidden rounded-3xl bg-primary p-8 text-white"
          whileHover={shouldReduceMotion ? undefined : { y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 20%, color-mix(in oklab, var(--pillar-education) 35%, transparent), transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
              <ClipboardText className="size-7" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold">
              Official Registration Form
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
              Ready to become a member? Fill out our official recruitment
              form — takes about 5 minutes.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Open the form
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </motion.a>
      </StaggerItem>
    </Stagger>
  );
}
