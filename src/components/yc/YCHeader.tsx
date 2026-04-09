import Link from "next/link";

const NAV = [
  { label: "About", href: "/" },
  { label: "Companies", href: "/companies" },
  { label: "Startup Jobs", href: "/jobs" },
  { label: "Find a Co-Founder", href: "/cofounder-matching" },
  { label: "Library", href: "/library" },
  { label: "FAQ", href: "/faq" },
  { label: "People", href: "/people" },
  { label: "Blog", href: "/blog" },
];

export function YCHeader() {
  return (
    <header className="bg-[#FF6600] text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white text-[#FF6600] w-10 h-10 flex items-center justify-center font-bold text-xl rounded-sm">
            Y
          </div>
          <span className="font-semibold text-lg tracking-tight">Combinator</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/apply"
          className="bg-white text-[#FF6600] px-5 py-2 rounded-sm font-semibold text-sm hover:bg-white/90 transition-colors"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}

export function YCFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white/70 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/apply" className="hover:text-white">YC Program</Link></li>
            <li><Link href="/library" className="hover:text-white">Startup School</Link></li>
            <li><Link href="/launches" className="hover:text-white">Launch YC</Link></li>
            <li><Link href="/cofounder-matching" className="hover:text-white">Co-Founder Matching</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">About</Link></li>
            <li><Link href="/people" className="hover:text-white">People</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/companies" className="hover:text-white">Companies</Link></li>
            <li><Link href="/jobs" className="hover:text-white">Startup Jobs</Link></li>
            <li><Link href="/library" className="hover:text-white">Library</Link></li>
            <li><Link href="/launches" className="hover:text-white">Launches</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Get involved</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/apply" className="hover:text-white">Apply to YC</Link></li>
            <li><Link href="/jobs" className="hover:text-white">Work at a startup</Link></li>
            <li><Link href="/people" className="hover:text-white">Meet the partners</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/40">
          © 2026 Y Combinator. Cloned for October demo. Not affiliated with the real YC.
        </div>
      </div>
    </footer>
  );
}
