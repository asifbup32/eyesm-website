"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Tag } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import {
  initiatives,
  initiativeFilters,
  type InitiativeCategory,
} from "@/lib/site-data";

export function InitiativesFilter() {
  const [active, setActive] = useState<"All" | InitiativeCategory>("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      active === "All"
        ? initiatives
        : initiatives.filter((item) => item.category === active),
    [active]
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2.5"
        role="group"
        aria-label="Filter initiatives by category"
      >
        {initiativeFilters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={cn(
                "min-h-11 cursor-pointer rounded-full border px-4 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary"
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.length === 0 ? (
            <p className="mt-14 text-center text-sm text-muted-foreground">
              No initiatives in this category yet — check back soon.
            </p>
          ) : (
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
              {filtered.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full overflow-hidden rounded-3xl border border-border bg-card">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <Tag className="size-3.5" aria-hidden="true" />
                        {item.category}
                      </span>
                      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
