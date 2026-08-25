import { Target, Eye } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/reveal";
import { mission, vision } from "@/lib/site-data";

export function MissionVisionSection() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="size-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {mission}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div
              className="flex size-12 items-center justify-center rounded-2xl"
              style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}
            >
              <Eye className="size-6 text-accent" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {vision}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
