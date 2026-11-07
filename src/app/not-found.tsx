import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111110]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-lg text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#5C5954]">
            Error 404
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#111110]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#5C5954] leading-relaxed">
            The page you are looking for does not exist or has been moved. Return to the
            St. Joseph&apos;s Matriculation Higher Secondary School homepage below.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-[#111110] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#262523] transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
