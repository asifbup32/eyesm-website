"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Users,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pillars, site } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const heroSlides = [
  { src: "/images/initiatives/tree-plantation.jpeg", alt: "" },
  { src: "/images/initiatives/art-competition.jpeg", alt: "" },
  { src: "/images/initiatives/school-awareness.jpeg", alt: "" },
  { src: "/images/initiatives/community-discussion.jpeg", alt: "" },
];

function HeroSlideshow() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Image
            src={heroSlides[index].src}
            alt={heroSlides[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {!shouldReduceMotion && (
        <div
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          role="group"
          aria-label="Hero background photo selector"
        >
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show background photo ${i + 1} of ${heroSlides.length}`}
              aria-current={i === index}
              className="cursor-pointer p-1.5"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function AnimatedHeadline({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.h1
      className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: 0.15 },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.28em] inline-block"
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28, rotateX: shouldReduceMotion ? 0 : -40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.65, ease: EASE },
            },
          }}
          style={{ transformOrigin: "50% 100%", perspective: 400 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function Ticker() {
  const shouldReduceMotion = useReducedMotion();
  const items = [
    ...pillars.map((p) => p.title.split(" & ")[0]),
    "Youth-Led",
    "Non-Profit",
    "Volunteer-Driven",
  ];
  const loop = [...items, ...items];

  return (
    <div
      className="relative mt-16 w-full overflow-hidden border-t border-white/15 pt-6"
      aria-hidden="true"
    >
      <motion.div
        className="flex w-max items-center gap-3 whitespace-nowrap"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((label, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-medium tracking-wide text-white/70"
          >
            {label}
            <span className="size-1 rounded-full bg-white/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-primary">
      {/* Rotating background photos from our real programs, with scroll parallax */}
      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { y: imageY, scale: 1.15 }}
      >
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_color-mix(in_oklab,var(--pillar-environment)_30%,transparent),_transparent_55%)]" />
      </motion.div>

      <motion.div
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--pillar-education)", opacity: 0.22 }}
        animate={shouldReduceMotion ? undefined : { y: [0, 40, -10, 0], x: [0, 30, 10, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "var(--pillar-people)", opacity: 0.2 }}
        animate={shouldReduceMotion ? undefined : { y: [0, -30, 20, 0], x: [0, -25, 0, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "var(--pillar-mindset)", opacity: 0.16 }}
        animate={shouldReduceMotion ? undefined : { y: [0, 26, 0], x: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:pt-32"
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/20"
        >
          <motion.span
            animate={shouldReduceMotion ? undefined : { rotate: [0, 15, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
          >
            <Users className="size-4" aria-hidden="true" />
          </motion.span>
          Youth-led &middot; Non-profit &middot; Volunteer-driven
        </motion.div>

        <AnimatedHeadline text={site.tagline} />

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85"
        >
          EYESM Bangladesh is a youth-led, non-profit, non-political, and
          volunteer-driven organization dedicated to creating positive and
          sustainable change across Bangladesh — through education, leadership,
          and environmental action.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group h-11 cursor-pointer rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              )}
            >
              Get Involved
              <ArrowUpRight
                className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
          <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href={site.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 cursor-pointer gap-2 rounded-full border-[#25D366]/50 bg-[#25D366]/15 px-6 text-white hover:bg-[#25D366]/25 hover:text-white"
              )}
            >
              <WhatsappLogo className="size-5" weight="fill" aria-hidden="true" />
              Join WhatsApp
            </a>
          </motion.div>
          <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#about"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 cursor-pointer rounded-full border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        <Ticker />
      </motion.div>
    </section>
  );
}
