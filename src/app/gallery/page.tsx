import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { initiatives } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from EYESM Bangladesh's programs and events.",
};

const activityPhotos = initiatives.map((item) => ({
  src: item.image,
  alt: item.imageAlt,
  caption: item.title,
}));

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
              Snapshots from our tree plantation drives, art competitions, and
              awareness sessions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {activityPhotos.map((photo) => (
            <StaggerItem key={photo.src}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-6 py-4 text-sm font-medium text-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaSection />
    </>
  );
}
