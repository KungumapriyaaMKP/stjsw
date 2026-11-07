"use client";

import React, { useState } from "react";
import {
  Monitor,
  FlaskConical,
  Cpu,
  Cctv,
  Droplets,
  Bus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CAMPUS_FACILITIES, CAMPUS_GALLERY_PHOTOS } from "@/data/schoolData";

export default function GalleryPage() {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111110] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-10 sm:pb-14 border-b border-[#E5E2DC] mb-10 sm:mb-16">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>Campus Gallery &amp; Amenities</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111110]">
                Modern Laboratories, Digital Classrooms &amp; Campus Care.
              </h1>
            </div>
            <p className="text-sm text-[#5C5954] max-w-md leading-relaxed">
              Equipped with modern, student-centric amenities aimed at fostering both
              technical competency and general well-being across every grade level.
            </p>
          </div>

          {/* 6 Detailed Amenity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAMPUS_FACILITIES.map((facility, index) => (
              <article
                key={index}
                className="group border border-[#E5E2DC] bg-[#FAF9F6] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#111110]"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111110]">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    />
                    <div className="absolute top-3 left-3 bg-[#111110]/85 backdrop-blur-xs text-[#FAF9F6] px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                      {facility.category}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-2.5 sm:space-y-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#111110]">
                      {facility.title}
                    </h2>
                    <p className="text-xs text-[#5C5954] leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dedicated Safety, Labs & Logistics Strip */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-[#E5E2DC] bg-[#F3F1ED] divide-y sm:divide-y-0 divide-x divide-[#E5E2DC]">
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Monitor className="w-5 h-5 stroke-[1.4] text-[#111110] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#111110] truncate">Smart Boards</div>
                <div className="text-[10px] sm:text-[11px] text-[#5C5954] truncate">Multimedia</div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <FlaskConical className="w-5 h-5 stroke-[1.4] text-[#111110] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#111110] truncate">3 Science Labs</div>
                <div className="text-[10px] sm:text-[11px] text-[#5C5954] truncate">Phy, Chem &amp; Bio</div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Cpu className="w-5 h-5 stroke-[1.4] text-[#111110] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#111110] truncate">A/C IT Lab</div>
                <div className="text-[10px] sm:text-[11px] text-[#5C5954] truncate">High-Speed Net</div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Cctv className="w-5 h-5 stroke-[1.4] text-[#111110] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#111110] truncate">CCTV Campus</div>
                <div className="text-[10px] sm:text-[11px] text-[#5C5954] truncate">Surveillance</div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Droplets className="w-5 h-5 stroke-[1.4] text-[#111110] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#111110] truncate">RO Water</div>
                <div className="text-[10px] sm:text-[11px] text-[#5C5954] truncate">Purified Water</div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <Bus className="w-5 h-5 stroke-[1.4] text-[#111110] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-[#111110] truncate">School Bus</div>
                <div className="text-[10px] sm:text-[11px] text-[#5C5954] truncate">Tirupur Routes</div>
              </div>
            </div>
          </div>

          {/* Interactive Campus Photo Viewer Strip */}
          <div className="mt-12 sm:mt-16 border border-[#E5E2DC] bg-[#F3F1ED] p-5 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-5 space-y-4 sm:space-y-5 order-2 lg:order-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#5C5954] block">
                  Architectural &amp; Campus Showcase
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111110]">
                  {CAMPUS_GALLERY_PHOTOS[selectedGalleryImage].title}
                </h2>
                <p className="text-xs text-[#5C5954] leading-relaxed">
                  {CAMPUS_GALLERY_PHOTOS[selectedGalleryImage].subtitle}
                </p>

                <div className="pt-2 sm:pt-3 flex flex-col gap-2">
                  {CAMPUS_GALLERY_PHOTOS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedGalleryImage(idx)}
                      className={`text-left px-3.5 sm:px-4 py-3 text-xs transition-all flex items-center justify-between gap-2 border ${
                        selectedGalleryImage === idx
                          ? "bg-[#111110] text-[#FAF9F6] border-[#111110]"
                          : "bg-[#FAF9F6] text-[#111110] border-[#E5E2DC] hover:border-[#111110]"
                      }`}
                    >
                      <span className="font-medium tracking-wide truncate">
                        {item.locationNote}
                      </span>
                      <span className="font-mono text-[10px] opacity-70 shrink-0">
                        {item.index}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E5E2DC] bg-[#111110]">
                  <img
                    src={CAMPUS_GALLERY_PHOTOS[selectedGalleryImage].image}
                    alt={CAMPUS_GALLERY_PHOTOS[selectedGalleryImage].locationNote}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111110]/85 to-transparent p-4 sm:p-6 text-[#FAF9F6] flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] truncate">
                      {CAMPUS_GALLERY_PHOTOS[selectedGalleryImage].locationNote}
                    </span>
                    <span className="text-xs font-mono shrink-0">
                      {CAMPUS_GALLERY_PHOTOS[selectedGalleryImage].index} / 0
                      {CAMPUS_GALLERY_PHOTOS.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
