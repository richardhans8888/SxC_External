// app/join-us/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | StudentsxCEOs Jakarta",
  description: "Become a member, volunteer, or join our recruitment.",
};

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — full viewport, typographic punch
          ══════════════════════════════════════════ */}
      <section className="relative h-screen w-full bg-[#0d0d0d] flex flex-col justify-end pb-20 px-6 sm:px-16 overflow-hidden">
        {/* Diagonal grid texture */}
        <div className="absolute inset-0 opacity-[0.045]" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)`
        }} />
        {/* Large ghost number */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.03] leading-none select-none pointer-events-none pr-8">
          SXC
        </span>
        {/* Blue accent line */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-blue-600" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <p className="text-blue-500 tracking-[0.5em] uppercase text-xs font-semibold mb-6">
            StudentsxCEOs Jakarta
          </p>
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-black text-white uppercase leading-[0.9] tracking-tight mb-8">
            Join<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #2563eb" }}>
              Us.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Three paths. One community. Choose how you want to shape the future of leadership in Jakarta.
            </p>
            <div className="flex gap-8 text-white/40 text-xs tracking-widest uppercase font-semibold">
              <span>01 — Membership</span>
              <span>02 — Volunteer</span>
              <span>03 — Recruit</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2 opacity-40">
          <div className="w-[1px] h-12 bg-white animate-pulse" />
          <span className="text-white text-[10px] tracking-widest uppercase rotate-90 mt-2">scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          01 — MEMBERSHIP
          Full-bleed, left-heavy editorial layout
          ══════════════════════════════════════════ */}
      <section id="become-member" className="relative w-full min-h-screen flex flex-col lg:flex-row">

        {/* Left: giant number + text — 55% */}
        <div className="relative w-full lg:w-[55%] bg-white flex flex-col justify-center px-8 sm:px-16 py-24 lg:py-0">
          {/* Ghost 01 */}
          <span className="absolute top-8 left-6 text-[18vw] lg:text-[12vw] font-black text-zinc-100 leading-none select-none pointer-events-none">
            01
          </span>
          <div className="relative z-10 max-w-lg">
            <p className="text-blue-600 tracking-[0.4em] uppercase text-xs font-bold mb-6">Membership</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-zinc-900 mb-8">
              Become<br />a Member
            </h2>
            <div className="h-[3px] w-16 bg-blue-600 mb-8" />
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              Join a network of ambitious students and future leaders. Gain exclusive access to events, mentorship programs, and a community that relentlessly pushes you forward.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mb-12 pb-12 border-b border-zinc-100">
              {[["50+","Events / yr"], ["200+","Members"], ["100+","CEO Links"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-4xl font-black text-zinc-900 leading-none">{n}</p>
                  <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 transition-colors duration-300 uppercase text-sm tracking-wider">
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: dark benefits panel — 45% */}
        <div className="w-full lg:w-[45%] bg-[#0d0d0d] flex flex-col justify-center px-8 sm:px-16 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)`
          }} />
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600" />

          <div className="relative z-10">
            <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-10">Why join?</p>
            <ul className="space-y-8">
              {[
                ["Priority Access", "First in line for flagship events, workshops, and exclusive SxC experiences."],
                ["CEO Network", "Direct connections to industry leaders across Jakarta and beyond."],
                ["Skill Workshops", "Hands-on sessions covering leadership, strategy, and business acumen."],
                ["Mentorship", "One-on-one guidance from professionals who've been where you want to go."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-5 group/item">
                  <span className="text-blue-600 font-black text-lg mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="text-white font-bold mb-1">{title}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02 — VOLUNTEER
          Inverted: image-forward, text overlaid
          ══════════════════════════════════════════ */}
      <section id="volunteer" className="relative w-full min-h-screen bg-zinc-50 flex flex-col lg:flex-row-reverse">

        {/* Right (visually): image/color block — 50% */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-zinc-200 overflow-hidden">
          {/* Placeholder — swap with <Image src={volunteerImg} fill … /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-100" />
          {/* Decorative */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[20vw] lg:text-[12vw] font-black text-zinc-300/60 leading-none select-none">02</span>
          </div>
          <div className="absolute top-0 right-0 w-[3px] h-full bg-blue-600" />
        </div>

        {/* Left: text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 py-24 lg:py-0 relative">
          <div className="max-w-lg">
            <p className="text-blue-600 tracking-[0.4em] uppercase text-xs font-bold mb-6">Contribute</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-zinc-900 mb-8">
              Volunteer<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #18181b" }}>
                With Us
              </span>
            </h2>
            <div className="h-[3px] w-16 bg-blue-600 mb-8" />
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              Give back and gain simultaneously. We're always looking for passionate individuals to help organise events, manage projects, and drive our initiatives forward.
            </p>

            {/* Role tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["Event Planning", "Project Management", "Community Building", "Content Creation", "Logistics"].map(tag => (
                <span key={tag} className="border border-zinc-300 text-zinc-600 text-xs px-4 py-2 font-semibold tracking-wide hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-4 text-zinc-900 font-bold uppercase text-sm tracking-wider hover:text-blue-600 transition-colors duration-300 group/link border-b-2 border-zinc-900 hover:border-blue-600 pb-1">
              View Open Positions
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          03 — OPEN RECRUITMENT
          Full-bleed dark, horizontal scrolling cards
          ══════════════════════════════════════════ */}
      <section id="open-recruitment" className="relative w-full bg-[#0d0d0d] text-white overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)`
        }} />
        {/* Blue right stripe */}
        <div className="absolute top-0 right-0 w-[3px] h-full bg-blue-600" />
        {/* Large ghost text */}
        <span className="absolute left-0 bottom-0 text-[18vw] font-black text-white/[0.025] leading-none select-none pointer-events-none translate-y-4">
          RECRUIT
        </span>

        <div className="relative z-10 px-8 sm:px-16 pt-24 pb-0 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <p className="text-blue-400 tracking-[0.4em] uppercase text-xs font-bold mb-6">Careers</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                Open<br />Recruitment
              </h2>
            </div>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed lg:text-right">
              Ready to lead? We recruit annually for management roles and on a rolling basis for project positions. Your seat at the table is waiting.
            </p>
          </div>

          {/* Cards — 3-col grid that breaks on mobile to full-width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
            {[
              {
                num: "A",
                title: "Board of Management",
                badge: "Annual",
                badgeColor: "blue",
                desc: "Lead strategic initiatives and manage core divisions. Drive the organisation's direction from the top.",
                cta: "Learn More",
                bg: "bg-transparent",
              },
              {
                num: "B",
                title: "Project Officers",
                badge: "Rolling",
                badgeColor: "green",
                desc: "Own specific events and short-term projects end-to-end. Ideal for hands-on executors.",
                cta: "Apply Now",
                bg: "bg-white/[0.03]",
              },
              {
                num: "C",
                title: "Division Staff",
                badge: "Seasonal",
                badgeColor: "blue",
                desc: "Embed within a division and develop deep domain expertise. Great for specialists.",
                cta: "Explore Roles",
                bg: "bg-transparent",
              },
            ].map(({ num, title, badge, badgeColor, desc, cta, bg }) => (
              <div
                key={title}
                className={`${bg} border-r border-white/10 last:border-r-0 p-10 flex flex-col gap-6 group/card hover:bg-white/[0.06] transition-colors duration-300 cursor-pointer`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-black text-white/10 leading-none">{num}</span>
                  <span className={`text-xs px-3 py-1 font-bold tracking-widest uppercase ${
                    badgeColor === "green" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"
                  }`}>
                    {badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight mb-3">{title}</h3>
                  <div className="h-[2px] w-8 bg-blue-600 mb-4 group-hover/card:w-16 transition-all duration-300" />
                  <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto text-sm font-bold text-white flex items-center gap-2 group-hover/card:gap-4 transition-all duration-300">
                  {cta} →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="relative z-10 mt-0 border-t border-white/10 px-8 sm:px-16 py-8 max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">Applications open periodically — stay tuned via our channels.</p>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-300">
            Get Notified
          </a>
        </div>
      </section>

    </main>
  );
}