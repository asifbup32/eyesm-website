import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Tag } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { initiatives } from "@/lib/site-data";

export function InitiativesPreview() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Initiatives
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ideas turned into action
            </h2>
          </div>
          <Link
            href="/initiatives"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 cursor-pointer rounded-full px-5"
            )}
          >
            View all initiatives
            <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {initiatives.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href="/initiatives"
                className="group block h-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Tag className="size-3.5" aria-hidden="true" />
                    {item.category}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
