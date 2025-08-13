'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Slide = { src: string; alt?: string; caption?: string };

export default function LandscapeSlideshow({
  images,
  startIndex = 0,
  autoPlay = true,
  interval = 4000,
}: {
  images: Slide[];
  startIndex?: number;
  autoPlay?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(startIndex);
  const [playing, setPlaying] = useState(autoPlay);
  const touchStartX = useRef<number | null>(null);
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = images?.length ?? 0;
  const go = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') setPlaying((p) => !p);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(dx) > 50) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
  };

  // Autoplay + pause on hover/hidden
  useEffect(() => {
    const node = hoverRef.current;
    const handleEnter = () => setPlaying(false);
    const handleLeave = () => setPlaying(autoPlay);
    if (node) {
      node.addEventListener('mouseenter', handleEnter);
      node.addEventListener('mouseleave', handleLeave);
    }

    const onVisibility = () => {
      if (document.hidden) setPlaying(false);
      else if (autoPlay) setPlaying(true);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleEnter);
        node.removeEventListener('mouseleave', handleLeave);
      }
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [autoPlay]);

  useEffect(() => {
    if (!playing || count <= 1) return;
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setIndex((i) => ((i + 1) % count + count) % count);
    }, interval);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [playing, interval, count]);

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full min-h-screen grid place-items-center bg-black text-white/70">
        No images
      </div>
    );
  }

  return (
    <div ref={hoverRef} className="relative w-full min-h-screen">
      <div
        className="relative w-full min-h-screen overflow-hidden bg-black"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <div
            key={img.src + i}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== index}
          >
            {/* Background blur agar layar tetap penuh */}
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === index}
              aria-hidden="true"
              className="object-cover w-full h-full blur-xl scale-110 opacity-60"
              sizes="100vw"
            />

            {/* Foreground: gambar utuh (object-contain) + mobile-friendly heights */}
            <div className="absolute inset-0 grid place-items-center px-2">
              <div className="relative w-full max-w-6xl h-[50vh] sm:h-[65vh] md:h-[75vh]">
                <Image
                  src={img.src}
                  alt={img.alt || `Slide ${i + 1}`}
                  fill
                  priority={i === index}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, 1200px"
                />
              </div>
            </div>

            {(img.caption || img.alt) && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[95vw] sm:max-w-3xl text-center text-white drop-shadow">
                <p className="inline-block px-3 py-1 text-xs sm:text-sm md:text-base font-medium bg-black/40 rounded">
                  {img.caption || img.alt}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 grid place-items-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 backdrop-blur transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7"/>
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 grid place-items-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 backdrop-blur transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
          {images.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all ${
                i === index
                  ? 'w-4 h-2.5 sm:w-6 sm:h-2.5 bg-white'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}