import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Network | StudentsxCEOs Jakarta",
  description: "Explore the history of StudentsxCEOs Jakarta alumni by year and cohort.",
};

type AlumniPerson = {
  name: string;
  role: string;
  org: string;
};

type AlumniYear = {
  year: number;
  people: AlumniPerson[];
};

const ALUMNI_HISTORY: AlumniYear[] = [
  {
    year: 2025,
    people: [
      { name: "Alya Rahma", role: "Associate Consultant", org: "McKinsey & Company" },
      { name: "Rendy Pratama", role: "Investment Analyst", org: "East Ventures" },
      { name: "Sabrina Putri", role: "Brand Strategist", org: "Unilever Indonesia" },
    ],
  },
  {
    year: 2024,
    people: [
      { name: "Jonathan L.", role: "Product Manager", org: "Gojek" },
      { name: "Nadia K.", role: "Software Engineer", org: "Tokopedia" },
      { name: "Fikri A.", role: "Business Analyst", org: "BCG" },
    ],
  },
  {
    year: 2023,
    people: [
      { name: "Diah Z.", role: "Marketing Specialist", org: "Shopee" },
      { name: "Rama I.", role: "Data Analyst", org: "Traveloka" },
      { name: "Intan P.", role: "Operations Lead", org: "Bukalapak" },
    ],
  },
];

export default function AlumniNetworkPage() {
  return (
    <main id="alumni-network" className="relative z-10">
      <section className="group relative overflow-hidden bg-[#0A1628] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-20 sm:py-28">
          <div className="js-reveal">
            <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4 block">Community</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
              Alumni Network
            </h1>
            <div className="h-1 w-20 bg-white mt-6 mb-8" />
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed">
              A continuously growing community of leaders, operators, and builders across industries.
              Explore the history of our alumni and where their journeys have led.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex items-center gap-4 js-reveal">
            <div className="h-1 w-10 bg-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">History by Year</h2>
          </div>

          <div className="mt-10 space-y-12 sm:space-y-16">
            {ALUMNI_HISTORY.map((batch) => (
              <div key={batch.year} className="js-reveal">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-wide">
                    Cohort {batch.year}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600">
                    {batch.people.length} alumni
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {batch.people.map((person) => (
                    <div
                      key={`${batch.year}-${person.name}`}
                      className="rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-5 flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white font-bold">
                          {person.name.split(" ").slice(0, 2).map((s) => s[0]).join("")}
                        </div>
                        <div className="flex-1">
                          <div className="text-zinc-900 font-semibold">{person.name}</div>
                          <div className="text-zinc-600 text-sm">{person.role}</div>
                          <div className="text-zinc-500 text-sm">{person.org}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-zinc-50 border-t border-zinc-200 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="text-center js-reveal">
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-blue-600 mb-4" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">Be Part of the Story</h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
              Want to connect with alumni or share your journey? Reach out and we’ll help you plug into the network.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-7 py-3 rounded-md"
              >
                Contact Us
                <span className="text-sm">→</span>
              </Link>
              <Link
                href="/join-us"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold px-7 py-3 rounded-md"
              >
                Join Us
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
