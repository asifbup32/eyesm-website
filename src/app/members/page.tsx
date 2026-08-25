import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { MemberCard } from "@/components/sections/member-card";
import { CtaSection } from "@/components/sections/cta-section";
import { DecorativeBlobs } from "@/components/decorative-blobs";
import { executiveMembers, adviserPanel } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the executive members and adviser panel behind EYESM Bangladesh.",
};

export default function MembersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        <DecorativeBlobs variant="corners" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
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

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <DecorativeBlobs variant="scattered" className="opacity-70" />
        <div className="relative">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Executive Members
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveMembers.map((member, i) => (
              <StaggerItem key={member.name}>
                <MemberCard {...member} index={i} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-16">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Adviser Panel
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adviserPanel.map((member, i) => (
              <StaggerItem key={member.name}>
                <MemberCard {...member} index={i + executiveMembers.length} />
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
        </div>
      </section>

      <CtaSection />
    </>
  );
}
