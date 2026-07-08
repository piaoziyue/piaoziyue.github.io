"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCarouselProps {
  photos: string[];
}

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrent((i) => (i + 1) % photos.length);

  return (
    <div className="relative w-full select-none">
      {/* Main image */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100" style={{ aspectRatio: "16/9" }}>
        <Image
          key={photos[current]}
          src={photos[current]}
          alt={`Workshop photo ${current + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />

        {/* Left button */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white transition"
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} className="text-zinc-700" />
        </button>

        {/* Right button */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white transition"
          aria-label="Next photo"
        >
          <ChevronRight size={20} className="text-zinc-700" />
        </button>
      </div>

      {/* Counter */}
      <p className="mt-3 text-center text-sm text-zinc-400">
        {current + 1} / {photos.length}
      </p>

      {/* Dot indicators */}
      <div className="mt-2 flex justify-center gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-5 bg-zinc-600" : "w-1.5 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
