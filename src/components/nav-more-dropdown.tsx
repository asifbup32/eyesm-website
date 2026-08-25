"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { moreLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function NavMoreDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const active = moreLinks.some((link) => pathname.startsWith(link.href));

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "flex min-h-11 cursor-pointer items-center gap-1 rounded-full px-4 text-sm font-medium transition-colors duration-200",
          active
            ? "bg-secondary text-primary"
            : "text-foreground/75 hover:bg-secondary/70 hover:text-primary"
        )}
      >
        More
        <CaretDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            className="absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-lg shadow-black/5"
          >
            {moreLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-11 cursor-pointer items-center rounded-xl px-3.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-foreground/80 hover:bg-secondary/70 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
