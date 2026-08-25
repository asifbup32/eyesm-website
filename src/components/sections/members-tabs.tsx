"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { MemberCard } from "@/components/sections/member-card";
import { cn } from "@/lib/utils";
import { executiveMembers, adviserPanel } from "@/lib/site-data";

const groups = [
  { key: "executive", label: "Executive Members", members: executiveMembers },
  { key: "adviser", label: "Adviser Panel", members: adviserPanel },
] as const;

export function MembersTabs() {
  const [active, setActive] = useState<"executive" | "adviser">("executive");
  const shouldReduceMotion = useReducedMotion();
  const current = groups.find((g) => g.key === active)!;

  return (
    <div>
      <div
        className="mx-auto flex w-fit gap-1 rounded-full border border-white/50 bg-card/70 p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150"
        role="tablist"
        aria-label="Member groups"
      >
        {groups.map((group) => {
          const isActive = active === group.key;
          return (
            <button
              key={group.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(group.key)}
              className={cn(
                "relative min-h-11 cursor-pointer rounded-full px-6 text-sm font-medium transition-colors duration-200",
                isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-primary"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="members-tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{group.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {current.members.map((member, i) => (
              <StaggerItem key={member.name}>
                <MemberCard {...member} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
