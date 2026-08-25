import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from EYESM Bangladesh's programs and events.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Gallery
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Moments from the field
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Snapshots from our art competitions, tree plantation drives, and
              school awareness sessions. Tap any photo for a closer look.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <GalleryGrid />
      </section>

      <CtaSection />
    </>
  );
}
