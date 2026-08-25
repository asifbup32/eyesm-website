"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site-data";

export function WhatsAppFab() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={site.whatsappGroup}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our WhatsApp group"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 sm:bottom-7 sm:right-7"
    >
      {!shouldReduceMotion && (
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.7, 1.7], opacity: [0.55, 0, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          aria-hidden="true"
        />
      )}
      <WhatsappLogo className="relative size-7" weight="fill" aria-hidden="true" />
    </motion.a>
  );
}
