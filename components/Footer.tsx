import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-[0.28em] text-white">
                  <span className="tracking-[0.28em]">STUDENTS</span>
                  <span className="mx-1 text-[0.75em] font-semibold tracking-normal align-baseline">x</span>
                  <span className="tracking-[0.28em]">CEO</span>
                  <span className="text-[0.75em] font-semibold tracking-normal align-baseline">S</span>
                </div>
                <div className="text-xs font-semibold tracking-wider text-blue-400">Jakarta</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Developing future leaders through programs, mentorship, and industry connections.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">About Us</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Know About Us</Link></li>
              <li><Link href="/our-people" className="hover:text-blue-400 transition-colors">Our People</Link></li>
              <li><a href="#alumni-network" className="hover:text-blue-400 transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/programs" className="hover:text-blue-400 transition-colors">Programs</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link href="/partners" className="hover:text-blue-400 transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Get Involved + Follow */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Get Involved</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/join-us" className="hover:text-blue-400 transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold tracking-wider text-white/80">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors">IG</a>
              <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors">in</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} StudentsxCEOs Jakarta. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}