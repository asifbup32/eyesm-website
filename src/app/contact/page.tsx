import type { Metadata } from "next";
import {
  EnvelopeSimple,
  FacebookLogo,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/reveal";
import { RegistrationFormEmbed } from "@/components/sections/registration-form-embed";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Join & Contact",
  description:
    "Join EYESM Bangladesh — register through our official form, or reach out directly by email, phone, or Facebook.",
};

const contactPoints = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: FacebookLogo,
    label: "Facebook",
    value: site.facebookLabel,
    href: site.facebook,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-primary">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, color-mix(in oklab, var(--pillar-people) 32%, transparent), transparent 55%), radial-gradient(ellipse at 80% 80%, color-mix(in oklab, var(--pillar-education) 28%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Join &amp; Contact
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Join. Learn. Lead. Serve. Create an Impact.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85">
              We&apos;re inviting passionate students from schools, colleges,
              and universities to join our growing team and become part of a
              youth-led movement for positive change.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Official Registration
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              EYESM Bangladesh Team Recruitment Form
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Fill out the form below — it takes about 5 minutes. Your
              responses help us understand your interests, skills, and how
              you&apos;d like to contribute.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <RegistrationFormEmbed />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Direct Contact
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">
            Prefer to reach us directly?
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-3">
          {contactPoints.map((point) => (
            <a
              key={point.label}
              href={point.href}
              target={point.label === "Facebook" ? "_blank" : undefined}
              rel={point.label === "Facebook" ? "noopener noreferrer" : undefined}
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors duration-200 hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <point.icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {point.label}
                </span>
                <span className="block text-sm font-medium text-foreground group-hover:text-primary">
                  {point.value}
                </span>
              </span>
            </a>
          ))}
        </Reveal>
      </section>
    </>
  );
}
