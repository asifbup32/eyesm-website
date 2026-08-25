import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { AboutTabs } from "@/components/sections/about-tabs";
import { DecorativeBlobs } from "@/components/decorative-blobs";

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <DecorativeBlobs variant="corners" className="opacity-60" />
      <Reveal className="relative text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          About Us
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Focused on building a greener Bangladesh, together
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative my-10 aspect-[21/9] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/initiatives/art-competition.jpeg"
            alt="Students proudly holding up their artwork during the “My Dream Bangladesh” art competition"
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <AboutTabs />
      </Reveal>
    </section>
  );
}
