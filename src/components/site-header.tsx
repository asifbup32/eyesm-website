"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="EYESM Bangladesh logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-primary sm:text-xl">
            EYESM <span className="font-normal text-foreground">Bangladesh</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
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
        </nav>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden h-11 cursor-pointer rounded-full px-6 md:inline-flex"
          )}
        >
          Get Involved
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-11 cursor-pointer md:hidden"
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
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/images/logo.png"
                    alt="EYESM Bangladesh logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                  <span className="font-heading text-base font-semibold text-primary">
                    EYESM Bangladesh
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4" aria-label="Mobile">
              {navLinks.map((link) => {
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
