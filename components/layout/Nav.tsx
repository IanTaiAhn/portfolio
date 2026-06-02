"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// NAV
// Editorial style: section numbers + sparse links.
const links = [
  { num: "01", href: "/about", label: "About" },
  { num: "02", href: "/projects", label: "Work" },
  { num: "03", href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 px-6 py-6 md:px-12 backdrop-blur-sm transition-colors duration-300 ${scrolled ? "bg-navy/95 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-cream hover:text-amber transition-colors"
          >
            I.A.
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`group flex items-baseline gap-2 transition-colors ${
                      active ? "text-amber" : "text-cream hover:text-amber"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                        active
                          ? "text-amber/70"
                          : "text-cream/60 group-hover:text-amber/70"
                      }`}
                    >
                      {l.num}
                    </span>
                    <span className="font-body text-sm">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex flex-col items-end gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-cream transition-all duration-300 ${
                open ? "w-6 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-navy px-6 pt-28 pb-12 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-10">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`flex items-baseline gap-4 transition-colors ${
                    active ? "text-amber" : "text-cream"
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-cream/60">
                    {l.num}
                  </span>
                  <span className="font-display text-4xl">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
