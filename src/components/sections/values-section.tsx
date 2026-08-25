import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { values } from "@/lib/site-data";

export function ValuesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Our Values
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What guides every initiative we run
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {values.map((value) => (
          <StaggerItem key={value.title} className="flex gap-4">
            <CheckCircle
              className="mt-0.5 size-6 shrink-0 text-primary"
              weight="fill"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
