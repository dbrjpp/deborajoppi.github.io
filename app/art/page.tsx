"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

// 🖼️ Add or reorder your images here (path is relative to /public)
const PHOTOS = [
  { src: "/art/bananeira.png", alt: "Banana tree, Florianópolis, Brazil" },
  { src: "/art/casa.png", alt: "Florianópolis, Brazil" },
  { src: "/art/flores.png", alt: "Winter" },
  { src: "/art/IMG_6205.png", alt: "35mm" },
  // add more...
];

export default function ArtPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // keyboard nav for lightbox
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="font-medium hover:underline underline-offset-4">← Home</a>
            <h1 className="text-lg font-semibold tracking-tight">Art</h1>
            <a href="/science" className="text-sm hover:underline underline-offset-4">Science →</a>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div
          className="
            grid gap-4
            sm:grid-cols-2
            md:grid-cols-3
          "
        >
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              onClick={() => open(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-200 bg-white"
              aria-label={`Open ${p.alt || "photo"}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                unoptimized
                priority={i < 6} // prefetch first few
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </button>
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-500">
          Tip: click a photo to open. Use ←/→ to navigate, Esc to close.
        </p>
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <Lightbox
          index={openIndex}
          onClose={close}
          onPrev={() => setOpenIndex((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length))}
          onNext={() => setOpenIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length))}
          photo={PHOTOS[openIndex]}
        />
      )}

      <footer className="mx-auto max-w-5xl px-4 py-10 text-xs text-neutral-500 text-center">
        © {new Date().getFullYear()} Débora Joppi.
      </footer>
    </main>
  );
}

function Lightbox({
  photo,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photo: { src: string; alt?: string };
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // prevent background scroll
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={photo.src}
          alt={photo.alt || ""}
          fill
          className="object-contain"
          unoptimized
          sizes="100vw"
          priority
        />

        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow"
          aria-label="Close"
        >
          Close
        </button>
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow"
          aria-label="Previous"
        >
          ← Prev
        </button>
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow"
          aria-label="Next"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
