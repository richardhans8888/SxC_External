// app/about/page.tsx
// ─────────────────────────────────────────────────────────────────
// ARCHITECTURE (OOP-style thinking):
//   ValueCard     → "class"  (reusable template with typed props)
//   VALUES_DATA   → "factory / instances" (centralised data store)
//   AboutPage     → "orchestrator" (renders instances from data)
//
// To add/remove a value card: edit VALUES_DATA only. No JSX changes.
// ─────────────────────────────────────────────────────────────────

import { Metadata } from "next";
import Image from "next/image";
import { ValueCard } from "@/components/ValueCard";
import { VALUES_DATA } from "@/data/values-data";

export const metadata: Metadata = {
  title: "About Us | StudentsxCEOs Jakarta",
  description:
    "Learn about the StudentsxCEOs Jakarta DNA, our values, and our history.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">

      {/* ══════════════════════════════════════════
          1. HERO SECTION
          ══════════════════════════════════════════ */}
      <section className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/hero-bg.jpg"
            alt="StudentsxCEOs Jakarta hero"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Centered Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <p className="text-blue-400 tracking-[0.4em] uppercase text-xs sm:text-sm font-semibold">
            StudentsxCEOs Jakarta
          </p>
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-widest text-white uppercase text-center px-4 animate-[fadeInUp_0.9s_ease-out_0.2s_both]"
          >
            About Us
          </h1>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-white animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. DNA / INTRO SECTION
          ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="text-blue-600 font-bold text-xl">1</span>
          <div className="h-[1px] w-12 bg-blue-600" />
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            SXC DNA
          </span>
        </div>

        <p className="text-xl sm:text-3xl md:text-4xl leading-relaxed font-normal text-zinc-800 max-w-5xl mx-auto">
          Born of the spirit of leadership, StudentsxCEOs epitomises the power
          of a lifelong passion and the beauty of limitless human achievement,
          creating timeless connections for a changing world.
        </p>
      </section>

      {/* ══════════════════════════════════════════
          3. VALUES SECTION
          OOP: Renders all instances from VALUES_DATA
          ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-blue-600 font-bold text-xl">2</span>
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Our Values
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900">
            What We Stand For
          </h2>
        </div>

        {/*
          ┌─────────────────────────────────────────────────┐
          │  CARD GRID — auto-renders from VALUES_DATA       │
          │  Add a new card: push one object to values-data  │
          └─────────────────────────────────────────────────┘
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {VALUES_DATA.map((value) => (
            // ValueCard = reusable "class template"
            // Each iteration = a new "instance" with different props
            <ValueCard key={value.index} {...value} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. HISTORY — SPLIT DARK / LIGHT
          ══════════════════════════════════════════ */}
      <section className="w-full flex flex-col md:flex-row min-h-[600px] md:h-[80vh]">

        {/* Left: Dark Text Panel */}
        <div className="w-full md:w-1/2 bg-[#0d0d0d] text-white p-12 sm:p-20 flex flex-col justify-between relative overflow-hidden">
          {/* Background texture subtle */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #fff 0px,
                #fff 1px,
                transparent 1px,
                transparent 12px
              )`,
            }}
          />

          {/* Label */}
          <div className="flex items-center gap-4 relative z-10">
            <span className="text-blue-500 font-bold text-lg">3</span>
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
              History
            </span>
          </div>

          {/* Content */}
          <div className="max-w-xl relative z-10 py-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight mb-8">
              The Foundation<br />of the SxC<br />Brand
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-12">
              Our story officially begins in 2010 when the first chapter was
              established, creating a bridge between students and CEOs. It
              marked the start of a journey to empower future leaders through
              direct mentorship and real-world exposure.
            </p>

            <a
              href="/history"
              className="inline-flex items-center gap-3 text-white font-bold tracking-wider hover:text-blue-400 transition-colors group"
            >
              DISCOVER MORE
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-blue-400 transition-colors">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* Year stamp */}
          <div className="relative z-10 text-zinc-700 text-7xl font-bold select-none">
            2010
          </div>
        </div>

        {/* Right: History Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[400px]">
          <Image
            src="/images/about/history-bg.jpg"
            alt="StudentsxCEOs Jakarta history"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-zinc-900/20" />
        </div>
      </section>

    </main>
  );
}