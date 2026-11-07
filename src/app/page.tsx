"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Compass,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import Footer from "@/components/Footer";
import {
  SCHOOL_INFO,
  KEY_METRICS,
  ACADEMIC_TIERS,
  SCHOOL_EVENTS,
} from "@/data/schoolData";

export default function HomePage() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111110] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* 1. Full-Viewport Campus Image Slideshow */}
      <HeroSlideshow />

      {/* 2. Institutional Quick Bar & Key Metrics */}
      <section className="border-b border-[#E5E2DC] bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {KEY_METRICS.map((item, idx) => (
              <div
                key={idx}
                className="border-l border-[#111110]/20 pl-5 sm:pl-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111110] block">
                    {item.value}
                  </span>
                  <h2 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#111110] mt-2 sm:mt-3">
                    {item.label}
                  </h2>
                </div>
                <p className="text-xs text-[#5C5954] leading-relaxed mt-1.5 sm:mt-2">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About the Institution, Crest & 1965 Heritage */}
      <section id="about" className="py-16 sm:py-24 md:py-32 border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start">
            {/* Left Column: Section Identity & Crest */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>Established {SCHOOL_INFO.established} • About Us</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.12] text-[#111110]">
                &ldquo;Shine and Let Shine&rdquo;
              </h2>

              <div className="pt-1 space-y-4 text-sm text-[#5C5954] leading-relaxed">
                <p>
                  Founded in{" "}
                  <strong className="font-medium text-[#111110]">1965</strong> at{" "}
                  <strong className="font-medium text-[#111110]">
                    35, Kangayam Road, Tirupur
                  </strong>
                  , St. Joseph&apos;s Matriculation Higher Secondary School has spent
                  over six decades shaping generations of disciplined scholars and
                  principled leaders.
                </p>
                <p>
                  Following the{" "}
                  <strong className="font-medium text-[#111110]">
                    Tamil Nadu State Board and Matriculation
                  </strong>{" "}
                  curriculum from Kindergarten through Higher Secondary levels, the
                  school blends a proud institutional legacy with modern,
                  student-centric amenities aimed at fostering both technical competency
                  and holistic well-being.
                </p>
              </div>

              {/* Crest + Institutional Credentials Box */}
              <div className="bg-[#F3F1ED] border border-[#E5E2DC] p-5 sm:p-6 space-y-5">
                <div className="flex items-center gap-4 pb-5 border-b border-[#E5E2DC]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-[#E5E2DC] p-1.5 shrink-0 flex items-center justify-center">
                    <img
                      src={SCHOOL_INFO.logo}
                      alt="St. Joseph's School Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#5C5954]">
                      Official School Motto
                    </div>
                    <div className="font-serif text-xl sm:text-2xl text-[#111110] font-medium">
                      Shine and Let Shine
                    </div>
                    <div className="text-xs text-[#5C5954] truncate">
                      St. Joseph&apos;s Matric. Hr. Sec. School
                    </div>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-[#5C5954] uppercase tracking-wider">
                      Year of Establishment
                    </dt>
                    <dd className="text-[#111110] font-medium mt-1">
                      1965 (60+ Years of Excellence)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#5C5954] uppercase tracking-wider">
                      Affiliation &amp; Board
                    </dt>
                    <dd className="text-[#111110] font-medium mt-1">
                      State Board / Matriculation
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#5C5954] uppercase tracking-wider">
                      Grade Span
                    </dt>
                    <dd className="text-[#111110] font-medium mt-1">
                      Kindergarten (LKG/UKG) to Grade XII
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#5C5954] uppercase tracking-wider">
                      Campus Address
                    </dt>
                    <dd className="text-[#111110] font-medium mt-1">
                      35, Kangayam Road, Tirupur 641604
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Column: Visual Composition & Three Pillars */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
                <div className="sm:col-span-7 relative overflow-hidden border border-[#E5E2DC] bg-[#111110] min-h-[260px] sm:min-h-[340px]">
                  <img
                    src="/images/campus/golden-jubilee-wall.jpg"
                    alt="Golden Year of Excellence 1965 - 2015 Monument at St. Joseph's"
                    className="w-full h-full object-cover filter contrast-[1.04]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111110]/90 via-[#111110]/40 to-transparent p-4 sm:p-5 text-[#FAF9F6]">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#FAF9F6]/75">
                      Golden Jubilee Legacy (1965 - 2015 &amp; Beyond)
                    </p>
                    <p className="font-serif text-base sm:text-lg">
                      St. Joseph&apos;s Campus, Kangayam Road
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-5 flex flex-col justify-between bg-[#111110] text-[#FAF9F6] p-6 sm:p-7 border border-[#111110]">
                  <div className="space-y-4">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/60 block">
                      Institutional Vision
                    </span>
                    <blockquote className="font-serif text-xl sm:text-2xl italic font-normal leading-snug text-[#FAF9F6]">
                      &ldquo;To kindle the light of knowledge within every student so
                      they may shine in wisdom and let others shine in service.&rdquo;
                    </blockquote>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#FAF9F6]/15 text-xs text-[#FAF9F6]/75 space-y-1">
                    <div className="font-medium text-[#FAF9F6]">
                      Shine and Let Shine
                    </div>
                    <div>Since 1965 • Tirupur</div>
                  </div>
                </div>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
                <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 space-y-3">
                  <BookOpen className="w-5 h-5 stroke-[1.4] text-[#111110]" />
                  <h3 className="font-serif text-xl font-medium text-[#111110]">
                    Technical Competency
                  </h3>
                  <p className="text-xs text-[#5C5954] leading-relaxed">
                    Smartboard-enabled digital classrooms, distinct Physics, Chemistry,
                    and Biology laboratories, and a fully air-conditioned high-speed IT
                    lab.
                  </p>
                </div>

                <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 space-y-3">
                  <ShieldCheck className="w-5 h-5 stroke-[1.4] text-[#111110]" />
                  <h3 className="font-serif text-xl font-medium text-[#111110]">
                    Safety &amp; Well-Being
                  </h3>
                  <p className="text-xs text-[#5C5954] leading-relaxed">
                    Active campus-wide CCTV monitoring, clean RO drinking water systems,
                    and a regulated school bus fleet covering major routes across
                    Tirupur.
                  </p>
                </div>

                <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 space-y-3">
                  <Compass className="w-5 h-5 stroke-[1.4] text-[#111110]" />
                  <h3 className="font-serif text-xl font-medium text-[#111110]">
                    Holistic Formation
                  </h3>
                  <p className="text-xs text-[#5C5954] leading-relaxed">
                    Resourceful library with a dedicated reading corner, vast track and
                    field playground, indoor courts, and Bharat Scouts &amp; Guides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academic Continuum (KG to Higher Secondary) */}
      <section
        id="academics"
        className="py-16 sm:py-24 md:py-32 bg-[#F3F1ED] border-b border-[#E5E2DC]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-10 sm:pb-16 border-b border-[#E5E2DC]">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>State Board &amp; Matriculation Curriculum</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111110]">
                Kindergarten through Higher Secondary Education.
              </h2>
            </div>
            <p className="text-sm text-[#5C5954] max-w-md leading-relaxed">
              Following the Tamil Nadu State Board and Matriculation standards, guiding
              scholars from foundational literacy to senior secondary specialization.
            </p>
          </div>

          {/* 4 Academic Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E2DC] border-x border-b border-[#E5E2DC] bg-[#FAF9F6]">
            {ACADEMIC_TIERS.map((tier) => (
              <div
                key={tier.level}
                className="group flex flex-col justify-between hover:bg-[#F3F1ED]/50 transition-colors"
              >
                <div>
                  {/* High-Resolution Level Photograph */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111110] border-b border-[#E5E2DC]">
                    <img
                      src={tier.image}
                      alt={`${tier.stage} - ${tier.grades}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#FAF9F6]">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] bg-[#111110]/80 backdrop-blur-xs px-2.5 py-1 border border-[#FAF9F6]/20">
                        Stage {tier.level}
                      </span>
                      <GraduationCap className="w-4 h-4 stroke-[1.5] text-[#FAF9F6]/90" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pb-0 space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#5C5954] font-medium">
                        {tier.grades}
                      </p>
                      <h3 className="font-serif text-2xl font-medium text-[#111110] mt-1">
                        {tier.stage}
                      </h3>
                    </div>

                    <p className="text-xs text-[#5C5954] leading-relaxed">
                      {tier.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-5 sm:pt-6">
                  <ul className="pt-5 sm:pt-6 border-t border-[#E5E2DC] space-y-2.5">
                    {tier.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#111110]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#111110] mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Cultural Events & Annual Day Celebrations */}
      <section
        id="events"
        className="py-16 sm:py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E5E2DC]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-10 sm:pb-16 border-b border-[#E5E2DC]">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>{SCHOOL_EVENTS.sectionLabel}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111110]">
                {SCHOOL_EVENTS.headline}
              </h2>
            </div>
            <p className="text-sm text-[#5C5954] max-w-md leading-relaxed">
              {SCHOOL_EVENTS.subtitle}
            </p>
          </div>

          <div className="pt-10 sm:pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SCHOOL_EVENTS.events.map((event) => (
              <article
                key={event.index}
                className="group bg-[#FAF9F6] border border-[#E5E2DC] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#111110]"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111110]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    />
                    <div className="absolute top-3 left-3 bg-[#111110]/85 backdrop-blur-xs text-[#FAF9F6] px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                      {event.tag}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-2.5 sm:space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111110]">
                      {event.title}
                    </h3>
                    <p className="text-xs text-[#5C5954] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-4 border-t border-[#E5E2DC]/60 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#5C5954]">
                  <span>St. Joseph&apos;s Cultural Wing</span>
                  <span className="font-mono">{event.index}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clean, Spacious Contact & Admissions Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
          {/* Top Header & Direct Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-end pb-10 sm:pb-14 border-b border-[#E5E2DC]">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#5C5954]">
                <span className="w-6 h-[1px] bg-[#111110]" />
                <span>Admissions &amp; Contact</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111110]">
                Get in Touch with St. Joseph&apos;s.
              </h2>
            </div>
            <p className="lg:col-span-6 text-sm text-[#5C5954] leading-relaxed">
              Whether you are inquiring about admissions from Kindergarten to Grade XII
              or scheduling a campus visit on Kangayam Road, our administrative office is
              here to assist you.
            </p>
          </div>

          {/* 3 Clean Architectural Contact Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-6 sm:p-8 bg-[#F3F1ED] border border-[#E5E2DC] space-y-4">
              <MapPin className="w-5 h-5 stroke-[1.4] text-[#111110]" />
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#111110]">
                  Campus Address
                </h3>
                <p className="text-sm text-[#5C5954] leading-relaxed">
                  {SCHOOL_INFO.name}
                  <br />
                  35, Kangayam Road, Tirupur,
                  <br />
                  Tamil Nadu 641604, India
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-[#F3F1ED] border border-[#E5E2DC] space-y-4">
              <Phone className="w-5 h-5 stroke-[1.4] text-[#111110]" />
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#111110]">
                  Telephone &amp; Mobile
                </h3>
                <div className="text-sm text-[#5C5954] space-y-1">
                  <p>
                    Landline:{" "}
                    <a
                      href={`tel:${SCHOOL_INFO.phones.landline1}`}
                      className="text-[#111110] hover:underline underline-offset-4 font-medium"
                    >
                      {SCHOOL_INFO.phones.landline1}
                    </a>
                    {", "}
                    <a
                      href={`tel:${SCHOOL_INFO.phones.landline2}`}
                      className="text-[#111110] hover:underline underline-offset-4 font-medium"
                    >
                      {SCHOOL_INFO.phones.landline2}
                    </a>
                  </p>
                  <p>
                    Mobile:{" "}
                    <a
                      href={`tel:${SCHOOL_INFO.phones.mobileRaw}`}
                      className="text-[#111110] hover:underline underline-offset-4 font-medium"
                    >
                      {SCHOOL_INFO.phones.mobile}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-[#F3F1ED] border border-[#E5E2DC] space-y-4">
              <Clock className="w-5 h-5 stroke-[1.4] text-[#111110]" />
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#111110]">
                  Visiting Hours
                </h3>
                <p className="text-sm text-[#5C5954] leading-relaxed">
                  {SCHOOL_INFO.hours}
                  <br />
                  Closed on Sundays &amp; Public Holidays
                </p>
              </div>
            </div>
          </div>

          {/* Balanced Two-Column Inquiry Form + Map */}
          <div
            id="admissions"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch pt-2 sm:pt-4"
          >
            {/* Left: Clean Boxed Form with Defined Borders */}
            <div className="lg:col-span-6 bg-white border border-[#111110]/25 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
              <div className="space-y-2 pb-6 border-b border-[#E5E2DC]">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#5C5954]">
                  Admission &amp; General Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111110]">
                  Send Us a Message
                </h3>
              </div>

              {inquirySubmitted ? (
                <div className="py-12 sm:py-16 space-y-4 text-center my-auto">
                  <CheckCircle2 className="w-10 h-10 stroke-[1.4] text-[#111110] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#111110]">
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-xs text-[#5C5954] max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been recorded. Our office team will contact you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setInquirySubmitted(false)}
                    className="mt-4 px-6 py-2.5 border border-[#111110] text-xs uppercase tracking-[0.16em] hover:bg-[#111110] hover:text-[#FAF9F6] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="pt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.18em] text-[#111110] font-medium mb-2">
                        Parent / Student Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#111110]/25 text-base sm:text-sm text-[#111110] placeholder:text-[#5C5954]/60 focus:outline-none focus:border-[#111110] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.18em] text-[#111110] font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#111110]/25 text-base sm:text-sm text-[#111110] placeholder:text-[#5C5954]/60 focus:outline-none focus:border-[#111110] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#111110] font-medium mb-2">
                      Grade Level of Interest *
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#111110]/25 text-base sm:text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors"
                    >
                      <option value="" disabled>
                        Select grade level
                      </option>
                      <option value="LKG / UKG">Kindergarten (LKG / UKG)</option>
                      <option value="Primary (Grades I - V)">
                        Primary (Grades I to V)
                      </option>
                      <option value="Middle (Grades VI - VIII)">
                        Middle School (Grades VI to VIII)
                      </option>
                      <option value="High School (Grades IX - X)">
                        High School (Grades IX &amp; X)
                      </option>
                      <option value="Higher Secondary (Grades XI - XII)">
                        Higher Secondary (Grades XI &amp; XII)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#111110] font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#111110]/25 text-base sm:text-sm text-[#111110] placeholder:text-[#5C5954]/60 focus:outline-none focus:border-[#111110] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-[#111110] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#262523] transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Clean Full-Height Map */}
            <div className="lg:col-span-6 border border-[#E5E2DC] bg-[#F3F1ED] p-2.5 sm:p-3 flex flex-col justify-between">
              <div className="relative w-full h-[300px] sm:h-full sm:min-h-[380px] overflow-hidden bg-[#E5E2DC]">
                <iframe
                  title="St. Joseph's Matriculation Higher Secondary School Tirupur Map"
                  src="https://www.google.com/maps?q=St.+Joseph's+Matriculation+Higher+Secondary+School,+35,+Kangayam+Road,+Tirupur,+Tamil+Nadu+641604&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C5954]">
                <span>35, Kangayam Road, Tirupur 641604</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=St.+Joseph's+Matriculation+Higher+Secondary+School+35+Kangayam+Road+Tirupur+641604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#111110] font-medium uppercase tracking-[0.14em] hover:opacity-70"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
