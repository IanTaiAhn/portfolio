import Link from "next/link";

// NAV
// Editorial style: section numbers + sparse links.
// TODO: mobile drawer, scroll state, active link styling
const links = [
  { num: "01", href: "/about", label: "About" },
  { num: "02", href: "/projects", label: "Work" },
  { num: "03", href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-6 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-cream hover:text-amber transition-colors"
        >
          {/* PLACEHOLDER: monogram or full name */}
          [N.N.]
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex items-baseline gap-2 text-cream hover:text-amber transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-amber/70">
                  {l.num}
                </span>
                <span className="font-body text-sm">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* TODO: mobile menu trigger */}
      </nav>
    </header>
  );
}
