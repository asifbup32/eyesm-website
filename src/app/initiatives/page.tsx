import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { InitiativesFilter } from "@/components/sections/initiatives-filter";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Explore EYESM Bangladesh's initiatives across tree plantation, competitions, collaborations, and community events.",
};

export default function InitiativesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Initiatives
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Ideas turned into action
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From tree plantation drives to art competitions and school
              awareness sessions — every initiative is youth-led and
              community-focused.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <InitiativesFilter />
      </section>

      <CtaSection />
    </>
  );
}
