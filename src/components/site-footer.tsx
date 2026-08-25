import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  FacebookLogo,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { allNavLinks, site } from "@/lib/site-data";

export function SiteFooter() {
  const mid = Math.ceil(allNavLinks.length / 2);
  const col1 = allNavLinks.slice(0, mid);
  const col2 = allNavLinks.slice(mid);

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div>
            <Image
              src="/images/logo-wordmark.png"
              alt="EYESM Bangladesh"
              width={172}
              height={42}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.tagline} A youth-led, non-profit, non-political, and
              volunteer-driven organization creating positive and sustainable
              change across Bangladesh.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </h3>
            <ul className="mt-2 flex flex-col">
              {col1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-8 cursor-pointer items-center py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              More
            </h3>
            <ul className="mt-2 flex flex-col">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-8 cursor-pointer items-center py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-8 cursor-pointer items-center gap-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <EnvelopeSimple className="size-4 shrink-0" aria-hidden="true" />
                  <span className="break-words">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="flex min-h-8 cursor-pointer items-center gap-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-8 cursor-pointer items-center gap-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <FacebookLogo className="size-4 shrink-0" aria-hidden="true" />
                  <span>{site.facebookLabel}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EYESM Bangladesh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Empowering Lives. Sustaining Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
