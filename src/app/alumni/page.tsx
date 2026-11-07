import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JOSATS_ALUMNI } from "@/data/schoolData";

export default function AlumniPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111110] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Header with JOSATS Emblem */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-[#E5E2DC] items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>Alumni Cell • {JOSATS_ALUMNI.motto}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111110]">
                {JOSATS_ALUMNI.acronym}: {JOSATS_ALUMNI.fullName}
              </h1>
              <p className="text-sm text-[#5C5954] max-w-3xl leading-relaxed">
                {JOSATS_ALUMNI.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="w-full sm:w-auto inline-flex items-center gap-4 sm:gap-5 bg-[#F3F1ED] border border-[#E5E2DC] p-4 sm:p-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#111110] p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={JOSATS_ALUMNI.logo}
                    alt={`${JOSATS_ALUMNI.acronym} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1 pr-2">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#5C5954]">
                    Official Alumni Wing
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-medium text-[#111110]">
                    {JOSATS_ALUMNI.acronym}
                  </div>
                  <div className="text-xs uppercase tracking-[0.16em] text-[#111110] font-medium">
                    &ldquo;{JOSATS_ALUMNI.motto}&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Alumni Initiatives */}
          <div className="pt-10 sm:pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {JOSATS_ALUMNI.initiatives.map((item) => (
              <article
                key={item.index}
                className="group bg-[#FAF9F6] border border-[#E5E2DC] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#111110]"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111110]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    />
                    <div className="absolute top-3 left-3 bg-[#111110]/85 backdrop-blur-xs text-[#FAF9F6] px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-2.5 sm:space-y-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#111110]">
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#5C5954] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-4 border-t border-[#E5E2DC]/60 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#5C5954]">
                  <span>JOSATS • Reunited to Serve</span>
                  <span className="font-mono">{item.index}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
