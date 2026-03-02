"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Know About Us", href: "/about" },
      { label: "Our People", href: "/our-people" },
      { label: "Alumni Network", href: "/alumni-network" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
  },
  { label: "Events", href: "/events" },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Join Us",
    href: "/join-us",
  },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header className="sticky Pltop-0 z-50 w-full border-b border-black/10 bg-white">
      <nav className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div className="h-16 sm:h-20 items-center flex justify-between lg:grid lg:grid-cols-3">
          <div className="flex items-center justify-start">
            <Link href="/" className="group flex-shrink-0">
              <div className="leading-tight">
                <div className="text-lg sm:text-xl font-bold tracking-[0.28em] text-black">
                  <span className="tracking-[0.28em]">STUDENTS</span>
                  <span className="mx-1 text-[0.75em] font-semibold tracking-normal align-baseline">x</span>
                  <span className="tracking-[0.28em]">CEO</span>
                  <span className="text-[0.75em] font-semibold tracking-normal align-baseline">S</span>
                </div>
                <div className="text-sm sm:text-base font-semibold tracking-wider text-blue-600">Jakarta</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-6 text-sm font-bold text-zinc-900">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  item.href ? (
                    <div className="flex items-center">
                      <Link href={item.href} className="transition-colors duration-300 ease-out hover:text-blue-600 py-2 uppercase whitespace-nowrap">
                        {item.label}
                      </Link>
                      <button className="flex items-center justify-center p-1 transition-colors duration-300 ease-out hover:text-blue-600 cursor-pointer outline-none ml-0.5">
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button className="flex items-center gap-1 transition-colors duration-300 ease-out hover:text-blue-600 cursor-pointer outline-none py-2 uppercase whitespace-nowrap">
                      {item.label}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )
                ) : (
                  <a href={item.href} className="transition-colors duration-300 ease-out hover:text-blue-600 py-2 block uppercase whitespace-nowrap">
                    {item.label}
                  </a>
                )}
                
                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-4 z-50">
                    <div className="backdrop-blur-xl bg-white/90 rounded-xl shadow-2xl border border-white/40 ring-1 ring-black/5 overflow-hidden p-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-base font-semibold text-zinc-700 rounded-lg hover:bg-blue-50/80 hover:text-blue-600 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end">
            <button
              className="lg:hidden p-2 ml-2 text-zinc-700"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileExpand(item.label)}
                        className="flex w/full items-center justify-between px-4 py-3 text-sm font-medium text-zinc-800 hover:text-blue-600 hover:bg-zinc-50 uppercase whitespace-nowrap"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="bg-zinc-50 py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-8 py-2 text-sm text-zinc-600 hover:text-blue-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-sm font-medium text-zinc-800 hover:text-blue-600 hover:bg-zinc-50 uppercase whitespace-nowrap"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
