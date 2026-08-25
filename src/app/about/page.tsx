import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { AboutTabs } from "@/components/sections/about-tabs";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EYESM Bangladesh's mission, vision, values, and area of work — a youth-led movement building a greener, more sustainable Bangladesh.",
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
              Focused on building a greener Bangladesh, together
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/initiatives/community-discussion.jpeg"
              alt="EYESM Bangladesh volunteers holding a community discussion session outdoors"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <AboutTabs />
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
