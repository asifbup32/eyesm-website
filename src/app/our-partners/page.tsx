import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { DecorativeBlobs } from "@/components/decorative-blobs";
import { CtaSection } from "@/components/sections/cta-section";
import { partners } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Organizations partnering with EYESM Bangladesh.",
};

export default function OurPartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        <DecorativeBlobs variant="corners" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Partners
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Organizations building this with us
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We&apos;re proud to work alongside organizations who share our
              commitment to youth empowerment and a more sustainable
              Bangladesh.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-2">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="flex h-40 items-center justify-center rounded-3xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5">
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="(min-width: 640px) 320px, 45vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-center text-sm text-muted-foreground">
            Interested in partnering with EYESM Bangladesh? Reach out through
            our contact page — we&apos;d love to hear from you.
          </p>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
