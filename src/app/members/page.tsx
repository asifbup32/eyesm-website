import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { executiveMembers, adviserPanel } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the executive members and adviser panel behind EYESM Bangladesh.",
};

function MemberCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-3xl border border-border bg-card p-8 text-center">
      <div className="relative size-28 overflow-hidden rounded-full bg-secondary ring-4 ring-primary/10">
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
        {name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {role}
      </p>
    </div>
  );
}

export default function MembersPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Members
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              The people behind EYESM Bangladesh
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Executive Members
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executiveMembers.map((member) => (
            <StaggerItem key={member.name}>
              <MemberCard {...member} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Adviser Panel
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adviserPanel.map((member) => (
            <StaggerItem key={member.name}>
              <MemberCard {...member} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16" delay={0.1}>
          <div className="rounded-3xl border border-dashed border-border bg-card p-8 text-center">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              National Team Members &amp; Volunteers
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our growing national team and volunteer network will be
              featured here soon.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
