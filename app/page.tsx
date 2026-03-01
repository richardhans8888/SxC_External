import ScrollGradient from "../components/ScrollGradient";
import ScrollReveal from "../components/ScrollReveal";

// Page Content

const PROGRAMS = [
  {
    badge: "School of Ideas",
    title: "Offline event for high school students",
    description:
      "Explore potential through personality tests and grow into future leaders with engaging talk shows and workshops.",
    month: "April",
    audience: "High School Students",
  },
  {
    badge: "SxCareer",
    title: "Career preparation webinar",
    description:
      "Focused on Consulting, Banking, FMCG, Media, Technology, and Startup plus impactful goal-setting sessions to empower future leaders.",
    month: "April",
    audience: "Active Students & Fresh Graduates",
  },
  {
    badge: "SxCelerate",
    title: "Bootcamp program",
    description:
      "Two-month program including Forum, Mentoring, Company Visit, Case Competition, and Client Project.",
    month: "May",
    audience: "Active Students",
  },
  {
    badge: "Meet the Series",
    title: "Big offline event series",
    description:
      "Meet The CEO, Meet The Expert, and Meet Yourself — career insights, skills training, and leader perspectives.",
    month: "July",
    audience: "All Future Leaders",
  },
  {
    badge: "SxConference",
    title: "Dynamic leadership program",
    description:
      "Unites alumni, young professionals, and industry leaders for insightful talk shows and engaging discussions.",
    month: "August",
    audience: "Alumni, External, Internal SxC Jakarta",
  },
];

const NEWS = [
  { category: "RESEARCH REPORT", title: "Holiday shopping 2025", href: "#" },
  { category: "RESEARCH REPORT", title: "Growth in the age of AI", href: "#" },
  { category: "RESEARCH REPORT", title: "Destination net zero 2025", href: "#" },
  { category: "RESEARCH REPORT", title: "Accelerating human‑AI collaboration", href: "#" },
  { category: "RESEARCH REPORT", title: "AI and your operating model", href: "#" },
  { category: "RESEARCH REPORT", title: "Sovereign AI: managing risk to growth", href: "#" },
  { category: "RESEARCH REPORT", title: "Strengthen your cyber defenses", href: "#" },
  { category: "RESEARCH REPORT", title: "Reimagining public services", href: "#" },
];

const COMPANY_LOGOS = [
  { src: "/Company_1.png", alt: "Company 1" },
  { src: "/Company_2.png", alt: "Company 2" },
  { src: "/Company_3.png", alt: "Company 3" },
  { src: "/Company_4.png", alt: "Company 4" },
  { src: "/Company_5.jpg", alt: "Company 5" },
  { src: "/Company_6.png", alt: "Company 6" },
  { src: "/Company_7.png", alt: "Company 7" },
  { src: "/Company_8.png", alt: "Company 8" },
];

const MEDIA_LOGOS = [
  { src: "/MC_1.webp", alt: "Media & Community 1" },
  { src: "/MC_2.png", alt: "Media & Community 2" },
  { src: "/MC_3.png", alt: "Media & Community 3" },
  { src: "/MC_4.jpeg", alt: "Media & Community 4" },
  { src: "/MC_5.png", alt: "Media & Community 5" },
  { src: "/MC_6.jpg", alt: "Media & Community 6" },
];

// Page Design

export default function Home() {
  return (
    <main className="relative min-h-[50vh] w-full bg-black text-white overflow-hidden">
      <ScrollGradient />
      <ScrollReveal />
      <section className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0 hero-blur-bg">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center js-reveal">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              TOGETHER WE
            </h2>
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">REIMAGINE</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold live-x">x</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">LEADERSHIP</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="h-1 w-12 bg-blue-600 mb-5" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Creating leaders who move industries</h3>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl">
              StudentsxCEOs Jakarta equips future changemakers with the skills, mindset, and opportunities to create meaningful impact.
            </p>
            <a href="/about" className="mt-6 inline-flex items-center gap-2 text-white font-medium">
              See what we do
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-blue-600 text-[12px] leading-none">&gt;</span>
            </a>
          </div>
        </div>
      </section>
      <section className="relative z-20 w-full px-0 py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-50 text-zinc-900 px-6 sm:px-12 min-h-[520px] sm:min-h-[680px] flex items-center js-reveal">
            <div className="max-w-2xl md:max-w-3xl">
              <div className="h-1 w-14 bg-blue-500 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base font-semibold tracking-wider text-zinc-700 mb-4 sm:mb-6">Discover who we are</p>
              <h3 className="mt-0 text-5xl sm:text-6xl font-bold text-zinc-900">About StudentsxCEOs Jakarta</h3>
              <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl">
                We are a leadership community that empowers top university students to learn directly from CEOs, founders, and industry professionals, creating a platform for growth, collaboration, and meaningful impact.
              </p>
              <a href="#find-out" className="mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-white text-black px-6 text-lg font-semibold hover:bg-white/90 transition-colors">Find out more</a>
            </div>
          </div>
          <div className="bg-white min-h-[520px] sm:min-h-[680px] js-reveal relative overflow-hidden">
            <img
              src="/About_us.jpg"
              alt="About StudentsxCEOs"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25 pointer-events-none" />
            <div className="absolute -top-10 -right-8 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-10 w-56 h-56 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />
            <div className="absolute top-6 left-6 h-12 w-[2px] bg-blue-500/60 z-10 pointer-events-none" />
            <div className="absolute top-6 left-6 h-[2px] w-12 bg-blue-500/60 z-10 pointer-events-none" />
            <div className="absolute bottom-6 right-6 h-12 w-[2px] bg-blue-500/60 z-10 pointer-events-none" />
            <div className="absolute bottom-6 right-6 h-[2px] w-12 bg-blue-500/60 z-10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative z-20 mx-auto max-w-screen-2xl px-6 sm:px-8 py-14 sm:py-20">
        <div className="absolute inset-0 z-0 hero-blur-bg">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>
        <div className="text-center js-reveal">
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-blue-600 mb-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our Programs</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            We offer programs centering around soft skills education for university students,
            from short events to dedicated training and scholarship opportunities.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {PROGRAMS.map((program) => (
            <div key={program.badge} className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-xl bg-neutral-900 js-reveal">
              <div className="absolute inset-0 bg-[url('/api/pics/logo.webp')] bg-cover bg-center opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-md bg-blue-600 px-3 py-1 text-white text-sm font-semibold whitespace-nowrap">{program.badge}</div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h4 className="text-lg font-semibold">{program.title}</h4>
                <p className="mt-2 text-sm text-white/80">{program.description}</p>
                <div className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-5 text-sm font-semibold">{program.month}</div>
                <p className="mt-3 text-xs text-white/70">{program.audience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-20 w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-8">
          <div className="text-center js-reveal">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Company Partners</h2>
          </div>
          <div className="mt-8 relative overflow-hidden js-reveal">
            <div className="logo-marquee flex items-center gap-x-10">
              {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} className="h-10 sm:h-12 w-28 object-contain" />
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center js-reveal">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700">and many more</span>
          </div>
          <div className="mt-12 text-center js-reveal">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Media &amp; Community Partners</h2>
          </div>
          <div className="mt-8 relative overflow-hidden js-reveal">
            <div className="logo-marquee flex items-center gap-x-10">
              {[...MEDIA_LOGOS, ...MEDIA_LOGOS].map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} className="h-10 sm:h-12 w-28 object-contain" />
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center js-reveal">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700">and many more</span>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="relative z-20 w-full bg-zinc-50 py-14 sm:py-20">
        <div className="mx-auto max-w-none px-6 sm:px-8 lg:px-12">
          <div className="text-center js-reveal">
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-blue-600 mb-4" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">Our Latest News</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {NEWS.map((item, i) => (
              <a key={i} href={item.href} className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
                <div className="absolute inset-0 bg-neutral-900" />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                  <span className="text-xs font-semibold tracking-wider text-white/80">{item.category}</span>
                  <h4 className="mt-2 text-lg sm:text-xl font-semibold">{item.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}