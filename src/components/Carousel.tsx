"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

/**
 * Reusable horizontal screenshot carousel. Native scroll-snap for touch/swipe,
 * prev/next buttons, and clickable dots. Slides are normalised to a fixed
 * height so mixed aspect ratios sit together cleanly.
 */
export function Carousel({ images }: { images: CarouselImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, []);

  // Track the most-visible slide to drive the dots / aria state.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(slides.indexOf(best.target as HTMLElement));
      },
      { root: track, threshold: [0.5, 0.75, 1] },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [images.length]);

  if (images.length === 0) return null;

  const multiple = images.length > 1;
  const go = (dir: number) =>
    scrollToIndex(Math.min(images.length - 1, Math.max(0, active + dir)));

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {images.map((image, i) => (
          <div className="carousel-slide" key={i}>
            <Image
              src={image.src}
              alt={image.alt}
              className="carousel-img"
              sizes="(max-width: 640px) 80vw, 320px"
              placeholder="blur"
            />
          </div>
        ))}
      </div>

      {multiple ? (
        <>
          <button
            type="button"
            className="carousel-btn carousel-prev"
            aria-label="Previous screenshot"
            onClick={() => go(-1)}
            disabled={active === 0}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-btn carousel-next"
            aria-label="Next screenshot"
            onClick={() => go(1)}
            disabled={active === images.length - 1}
          >
            ›
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Screenshots">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`carousel-dot${i === active ? " is-active" : ""}`}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-selected={i === active}
                role="tab"
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
