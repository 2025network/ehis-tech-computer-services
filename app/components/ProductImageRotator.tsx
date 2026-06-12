"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ProductImageRotator({
  images,
  name,
  className = "aspect-[5/4]",
  sizes = "(min-width: 1024px) 25vw, 100vw",
  priority = false,
}: {
  images: readonly string[];
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % images.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {current ? (
        <Image
          src={current}
          alt={name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain p-4 transition duration-500"
        />
      ) : null}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-2 py-1 shadow-sm ring-1 ring-slate-200">
          {images.map((image, index) => (
            <span key={image} className={`h-1.5 w-1.5 rounded-full ${active === index ? "bg-cyan-600" : "bg-slate-300"}`} />
          ))}
        </div>
      )}
    </div>
  );
}