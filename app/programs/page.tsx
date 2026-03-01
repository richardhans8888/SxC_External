import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PROGRAMS } from "../../data/programs";

export const metadata: Metadata = {
  title: "Our Programs | StudentsxCEOs Jakarta",
  description: "Explore our diverse range of programs designed to bridge the gap between students and CEOs.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-32 pb-20">
      <section className="px-6 sm:px-12 max-w-[1400px] mx-auto">
        <h1 className="text-5xl sm:text-6xl font-serif mb-8 text-zinc-900">Our Programs</h1>
        <p className="text-xl text-zinc-600 max-w-3xl mb-20 leading-relaxed">
          We offer a variety of programs designed to empower students, foster leadership, and build meaningful connections with the business world.
        </p>

        <div className="space-y-24">
          {PROGRAMS.map((program, index) => (
            <div
              key={program.slug}
              id={program.slug}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-neutral-100 overflow-hidden relative group rounded-lg">
                  {/* Blurred background fill — fills empty sides with a soft version of the same image */}
                  <Image
                    src={program.hero}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover scale-110 blur-xl opacity-60"
                  />
                  {/* Sharp foreground image — contained so the full poster is always visible */}
                  <Image
                    src={program.hero}
                    alt={program.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 z-10"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-zinc-900">{program.badge}</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  {program.excerpt}
                </p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}