import type { Metadata } from "next";
import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/reveal";
import { PillarsSection } from "@/components/sections/pillars-section";
import { ValuesSection } from "@/components/sections/values-section";
import { CtaSection } from "@/components/sections/cta-section";
import { about, whatWeDo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EYESM Bangladesh's mission, vision, and youth-led work building a greener, more sustainable Bangladesh.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              About Us
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A youth-led movement for a sustainable Bangladesh
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground">
            {about.intro}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {about.body}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/initiatives/community-discussion.jpeg"
              alt="EYESM Bangladesh volunteers holding a community discussion session outdoors"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <Sparkle className="mt-0.5 size-6 shrink-0 text-primary" weight="fill" aria-hidden="true" />
            <p className="text-base font-medium leading-relaxed text-foreground">
              {about.belief}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <h2 className="mt-14 font-heading text-2xl font-semibold text-foreground">
            What We Do
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {whatWeDo}
          </p>
        </Reveal>
      </section>

      <PillarsSection />
      <ValuesSection />
      <CtaSection />
    </>
  );
}
