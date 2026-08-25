"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { NavMoreDropdown } from "@/components/nav-more-dropdown";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, allNavLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const primaryLinks = navLinks.slice(0, -1);
  const contactLink = navLinks[navLinks.length - 1];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo-wordmark.png"
            alt="EYESM Bangladesh"
            width={172}
            height={42}
            className="h-9 w-auto object-contain sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-medium transition-colors duration-200",
                  active
                    ? "bg-secondary text-primary"
                    : "text-foreground/75 hover:bg-secondary/70 hover:text-primary"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <NavMoreDropdown />
          <Link
            href={contactLink.href}
            className={cn(
              "flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-medium transition-colors duration-200",
              pathname.startsWith(contactLink.href)
                ? "bg-secondary text-primary"
                : "text-foreground/75 hover:bg-secondary/70 hover:text-primary"
            )}
            aria-current={pathname.startsWith(contactLink.href) ? "page" : undefined}
          >
            {contactLink.label}
          </Link>
        </nav>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden h-11 cursor-pointer rounded-full px-6 lg:inline-flex"
          )}
        >
          Get Involved
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-11 cursor-pointer lg:hidden"
            )}
            aria-label="Open menu"
          >
            <List className="size-6" weight="bold" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/images/logo-wordmark.png"
                    alt="EYESM Bangladesh"
                    width={148}
                    height={36}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4" aria-label="Mobile">
              {allNavLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "cursor-pointer rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-secondary text-primary"
                        : "text-foreground/80 hover:bg-secondary/70"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-3 h-11 cursor-pointer rounded-full px-6"
                )}
              >
                Get Involved
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
