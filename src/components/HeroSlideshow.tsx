"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/schoolData";

const SLIDE_DURATION_MS = 5500;

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="slideshow"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[62svh] sm:h-[78svh] lg:h-screen min-h-[380px] max-h-[1080px] overflow-hidden bg-[#111110] select-none"
      aria-label="School Campus Image Slideshow"
    >
      {/* Full-Bleed Unobstructed Campus Photographs */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-out will-change-[opacity] ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Ambient background fill for varying aspect ratios */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-45"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Main Campus Photograph */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.locationNote}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Subtle top gradient so navbar remains readable */}
            <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#111110]/70 to-transparent pointer-events-none" />

            {/* Subtle bottom gradient so motto and controls remain legible */}
            <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[#111110]/75 via-[#111110]/25 to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Bottom-Left Motto & Minimal Slide Indicators / Arrows */}
      <div className="absolute bottom-5 sm:bottom-8 inset-x-0 z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-end justify-between pointer-events-none">
        {/* Left Bottom: Motto Line + Slide Indicator Lines */}
        <div className="space-y-3 sm:space-y-4 pointer-events-auto">
          <p className="font-motto font-medium text-2xl sm:text-4xl md:text-5xl text-[#FAF9F6] tracking-[0.08em] leading-none drop-shadow-[0_4px_16px_rgba(17,17,16,0.9)]">
            Shine and Let Shine
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1 transition-all duration-500 ${
                  idx === currentIndex
                    ? "w-8 sm:w-10 bg-[#FAF9F6]"
                    : "w-3 sm:w-4 bg-[#FAF9F6]/45 hover:bg-[#FAF9F6]/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Subtle Previous / Next Arrows */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="p-2 sm:p-2.5 bg-[#111110]/55 backdrop-blur-xs border border-[#FAF9F6]/25 text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#111110] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="p-2 sm:p-2.5 bg-[#111110]/55 backdrop-blur-xs border border-[#FAF9F6]/25 text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#111110] transition-colors"
          >
            <ChevronRight className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
