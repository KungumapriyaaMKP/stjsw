import React from "react";
import Link from "next/link";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function Footer() {
  return (
    <footer className="bg-[#111110] text-[#FAF9F6] border-t border-[#262523]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF9F6]/15">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={SCHOOL_INFO.logo}
                  alt={`${SCHOOL_INFO.name} Crest`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-tight block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#FAF9F6]/60">
                  Motto: &ldquo;{SCHOOL_INFO.motto}&rdquo; • Established{" "}
                  {SCHOOL_INFO.established}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#FAF9F6]/65 max-w-md leading-relaxed">
              35, Kangayam Road, Tirupur, Tamil Nadu 641604, India. Offering
              Kindergarten through Higher Secondary education under the Tamil Nadu State
              Board and Matriculation standards.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#FAF9F6]/50">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#FAF9F6]/80">
              <li>
                <Link href="/#about" className="hover:text-[#FAF9F6]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#academics" className="hover:text-[#FAF9F6]">
                  Academic Levels (KG to XII)
                </Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-[#FAF9F6]">
                  Annual Day &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#FAF9F6]">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FAF9F6]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-[#FAF9F6]">
                  Alumni (JOSATS)
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#FAF9F6]">
                  Contact &amp; Admissions
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#FAF9F6]/50">
              Direct Lines
            </div>
            <ul className="space-y-2 text-xs text-[#FAF9F6]/80">
              <li>0421-2420895</li>
              <li>0421-2421895</li>
              <li>+91 94429 90895</li>
              <li className="pt-1 text-[#FAF9F6]/55">
                35, Kangayam Road, Tirupur
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF9F6]/50">
          <p>
            &copy; {new Date().getFullYear()} {SCHOOL_INFO.name}, Tirupur. All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">
            Shine and Let Shine • Since 1965
          </p>
        </div>
      </div>
    </footer>
  );
}
