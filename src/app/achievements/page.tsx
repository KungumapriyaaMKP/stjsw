import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOARD_ACHIEVEMENTS } from "@/data/schoolData";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111110] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E5E2DC]">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>Academic Milestone • {BOARD_ACHIEVEMENTS.academicYear}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111110]">
                {BOARD_ACHIEVEMENTS.headline}
              </h1>
            </div>
            <p className="text-sm text-[#5C5954] max-w-md leading-relaxed">
              {BOARD_ACHIEVEMENTS.subtitle}
            </p>
          </div>

          {/* Class XII & Class X Top 3 Rank Holders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            {/* Class XII Toppers */}
            <div className="bg-[#F3F1ED] border border-[#E5E2DC] p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between gap-3 border-b border-[#E5E2DC] pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5954] block">
                    Higher Secondary Board Exam
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111110] mt-1">
                    Class XII Toppers
                  </h2>
                </div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest px-2.5 sm:px-3 py-1 bg-[#FAF9F6] border border-[#E5E2DC] text-[#111110] shrink-0">
                  Max: 600
                </span>
              </div>

              <div className="divide-y divide-[#E5E2DC]">
                {BOARD_ACHIEVEMENTS.classXII.map((student) => (
                  <div
                    key={student.name}
                    className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 bg-[#111110] text-[#FAF9F6] font-mono text-xs flex items-center justify-center shrink-0">
                        {student.rank}
                      </span>
                      <div className="min-w-0">
                        <div className="font-serif text-lg sm:text-xl font-medium text-[#111110] truncate">
                          {student.name}
                        </div>
                        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#5C5954]">
                          Distinction • {student.percentage}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-[#111110]">
                        {student.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Class X Toppers */}
            <div className="bg-[#F3F1ED] border border-[#E5E2DC] p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between gap-3 border-b border-[#E5E2DC] pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5954] block">
                    SSLC State Board Exam
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111110] mt-1">
                    Class X Toppers
                  </h2>
                </div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest px-2.5 sm:px-3 py-1 bg-[#FAF9F6] border border-[#E5E2DC] text-[#111110] shrink-0">
                  Max: 500
                </span>
              </div>

              <div className="divide-y divide-[#E5E2DC]">
                {BOARD_ACHIEVEMENTS.classX.map((student) => (
                  <div
                    key={student.name}
                    className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 bg-[#111110] text-[#FAF9F6] font-mono text-xs flex items-center justify-center shrink-0">
                        {student.rank}
                      </span>
                      <div className="min-w-0">
                        <div className="font-serif text-lg sm:text-xl font-medium text-[#111110] truncate">
                          {student.name}
                        </div>
                        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#5C5954]">
                          Distinction • {student.percentage}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-[#111110]">
                        {student.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Official Roll of Honour Photographs + Subjectwise Achievers List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            {/* Official Board Honour Roll Posters */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="border border-[#E5E2DC] bg-[#F3F1ED] p-3">
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#111110]">
                  <img
                    src={BOARD_ACHIEVEMENTS.toppersPoster}
                    alt="Class XII and Class X Toppers 2025 - 2026"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#5C5954]">
                  <span>Class XII &amp; X Toppers</span>
                  <span>2025 - 2026</span>
                </div>
              </div>

              <div className="border border-[#E5E2DC] bg-[#F3F1ED] p-3">
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#111110]">
                  <img
                    src={BOARD_ACHIEVEMENTS.subjectPoster}
                    alt="Subjectwise Achievers Class X and XII"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#5C5954]">
                  <span>Subjectwise Achievers</span>
                  <span>28 Scholars</span>
                </div>
              </div>
            </div>

            {/* Subjectwise Achievers Structured Directory */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
                <div className="border-b border-[#E5E2DC] pb-4 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5954] block">
                      Higher Secondary Honours
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111110] mt-1">
                      Class XII Subjectwise Achievers
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#5C5954] shrink-0">
                    {BOARD_ACHIEVEMENTS.subjectCentumsXII.length} Scholars
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                  {BOARD_ACHIEVEMENTS.subjectCentumsXII.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline justify-between gap-3 border-b border-[#E5E2DC]/70 pb-2.5 text-xs"
                    >
                      <span className="font-medium text-[#111110]">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[#5C5954] text-right">
                        {item.subject}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
                <div className="border-b border-[#E5E2DC] pb-4 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5954] block">
                      SSLC Honours
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111110] mt-1">
                      Class X Subjectwise Achievers
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#5C5954] shrink-0">
                    {BOARD_ACHIEVEMENTS.subjectCentumsX.length} Scholars
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                  {BOARD_ACHIEVEMENTS.subjectCentumsX.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline justify-between gap-3 border-b border-[#E5E2DC]/70 pb-2.5 text-xs"
                    >
                      <span className="font-medium text-[#111110]">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[#5C5954] text-right">
                        {item.subject}
                      </span>
                    </div>
                  ))}
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
