"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { galleryPhotos } from "@/lib/site-data";

export function GalleryGrid() {
  return (
    <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {galleryPhotos.map((photo) => (
        <StaggerItem key={photo.src}>
          <Dialog>
            <DialogTrigger
              className="group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card"
              aria-label={`View larger: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.caption}
              </span>
            </DialogTrigger>
            <DialogContent
              showCloseButton
              className="max-w-3xl border-none bg-transparent p-0 shadow-none ring-0"
            >
              <DialogTitle className="sr-only">{photo.caption}</DialogTitle>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="768px"
                  className="object-cover"
                />
              </div>
              <p className="rounded-xl bg-popover px-4 py-3 text-center text-sm font-medium text-popover-foreground">
                {photo.caption}
              </p>
            </DialogContent>
          </Dialog>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
