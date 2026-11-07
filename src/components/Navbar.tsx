"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import {
  SCHOOL_INFO,
  BOARD_ACHIEVEMENTS,
  CAMPUS_FACILITIES,
  CAMPUS_GALLERY_PHOTOS,
  JOSATS_ALUMNI,
} from "@/data/schoolData";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Academics", href: "/#academics" },
  { label: "Events", href: "/#events" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Alumni (JOSATS)", href: "/alumni" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Eagerly prefetch all routes and warm browser image cache during idle time for zero-latency navigation
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/achievements");
    router.prefetch("/gallery");
    router.prefetch("/alumni");

    const preloadImages = [
      BOARD_ACHIEVEMENTS.toppersPoster,
      BOARD_ACHIEVEMENTS.subjectPoster,
      ...CAMPUS_FACILITIES.map((f) => f.image),
      ...CAMPUS_GALLERY_PHOTOS.map((g) => g.image),
      JOSATS_ALUMNI.logo,
      ...JOSATS_ALUMNI.initiatives.map((i) => i.image),
    ];

    const timer = setTimeout(() => {
      preloadImages.forEach((src) => {
        const img = new window.Image();
        img.decoding = "async";
        img.src = src;
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const useSolidStyle = !isHomePage || scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        useSolidStyle
          ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E2DC] text-[#111110] py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-gradient-to-b from-[#111110]/90 via-[#111110]/50 to-transparent text-[#FAF9F6] py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 xl:px-12 flex items-center justify-between gap-4 lg:gap-10 xl:gap-14">
        {/* School Crest & Official Name */}
        <Link
          href="/"
          prefetch={true}
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none shrink-0"
        >
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-white p-1 flex items-center justify-center border shrink-0 ${
              useSolidStyle ? "border-[#E5E2DC]" : "border-[#FAF9F6]/40"
            }`}
          >
            <img
              src={SCHOOL_INFO.logo}
              alt={`${SCHOOL_INFO.name} Crest - ${SCHOOL_INFO.motto}`}
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-tight leading-none whitespace-nowrap">
                St. Joseph&apos;s
              </span>
              <span
                className={`hidden sm:inline-block text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 border shrink-0 ${
                  useSolidStyle
                    ? "border-[#E5E2DC] text-[#5C5954]"
                    : "border-[#FAF9F6]/30 text-[#FAF9F6]/80"
                }`}
              >
                Est. {SCHOOL_INFO.established}
              </span>
            </div>
            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] mt-1 whitespace-nowrap ${
                useSolidStyle ? "text-[#5C5954]" : "text-[#FAF9F6]/75"
              }`}
            >
              Matric. Hr. Sec. School • Tirupur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation & Right Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <nav className="flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`relative whitespace-nowrap text-[11px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:bg-current after:transition-all after:duration-300 ${
                    useSolidStyle ? "text-[#111110]" : "text-[#FAF9F6]"
                  } ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={`tel:${SCHOOL_INFO.phones.landline1}`}
            className={`hidden xl:flex relative whitespace-nowrap text-xs tracking-[0.1em] items-center gap-2 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:duration-300 ${
              useSolidStyle
                ? "text-[#5C5954] hover:text-[#111110]"
                : "text-[#FAF9F6]/85 hover:text-[#FAF9F6]"
            }`}
          >
            <Phone className="w-3.5 h-3.5 stroke-[1.5] shrink-0" />
            <span>{SCHOOL_INFO.phones.landline1}</span>
          </a>

          <Link
            href="/#admissions"
            prefetch={true}
            className={`whitespace-nowrap px-4 xl:px-5 py-2.5 text-[11px] xl:text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-150 flex items-center gap-2 border ${
              useSolidStyle
                ? "bg-[#111110] text-[#FAF9F6] border-[#111110] hover:bg-transparent hover:text-[#111110]"
                : "bg-[#FAF9F6] text-[#111110] border-[#FAF9F6] hover:bg-transparent hover:text-[#FAF9F6]"
            }`}
          >
            <span>Admissions</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className={`lg:hidden p-2.5 border transition-colors shrink-0 ${
            useSolidStyle
              ? "border-[#E5E2DC] text-[#111110]"
              : "border-[#FAF9F6]/30 text-[#FAF9F6]"
          }`}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 stroke-[1.5]" />
          ) : (
            <Menu className="w-5 h-5 stroke-[1.5]" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] text-[#111110] border-b border-[#E5E2DC] px-4 sm:px-6 py-6 max-h-[calc(100dvh-64px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-xl sm:text-2xl font-normal text-[#111110] hover:opacity-60 border-b border-[#E5E2DC]/60 pb-3 flex items-center justify-between ${
                    isActive ? "font-semibold" : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.4] text-[#5C5954]" />
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                href="/#admissions"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#111110] text-[#FAF9F6] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2"
              >
                <span>Admissions &amp; Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </Link>
            </div>

            <div className="pt-3 flex flex-col gap-2.5 text-xs text-[#5C5954]">
              <p className="uppercase tracking-[0.16em] text-[#111110] font-medium">
                Motto: &ldquo;{SCHOOL_INFO.motto}&rdquo; • Est. {SCHOOL_INFO.established}
              </p>
              <a
                href={`tel:${SCHOOL_INFO.phones.landline1}`}
                className="hover:text-[#111110] py-0.5"
              >
                Office: {SCHOOL_INFO.phones.landline1} / {SCHOOL_INFO.phones.landline2}
              </a>
              <a
                href={`tel:${SCHOOL_INFO.phones.mobileRaw}`}
                className="hover:text-[#111110] py-0.5"
              >
                Cell: {SCHOOL_INFO.phones.mobile}
              </a>
              <p className="leading-relaxed">{SCHOOL_INFO.address.full}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
