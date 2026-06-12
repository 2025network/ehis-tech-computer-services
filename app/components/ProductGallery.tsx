"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProductGallery({ images, name }: { images: readonly string[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % images.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [images.length]);

  function move(step: number) {
    setActive((value) => (value + step + images.length) % images.length);
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
        <Image src={current} alt={name} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-contain" priority />
        {images.length > 1 && (
          <>
            <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900 shadow ring-1 ring-slate-200" aria-label="Previous image">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900 shadow ring-1 ring-slate-200" aria-label="Next image">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button key={image} type="button" onClick={() => setActive(index)} className={`relative aspect-square overflow-hidden rounded border bg-slate-100 ${active === index ? "border-cyan-500 ring-2 ring-cyan-200" : "border-slate-200"}`} aria-label={`View ${name} image ${index + 1}`}>
              <Image src={image} alt={`${name} thumbnail ${index + 1}`} fill sizes="90px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}