import { Leaf } from "lucide-react";
import React from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#chef", label: "Chef" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#reserve", label: "Reserve" },
  { href: "#location", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/60 pt-16 pb-8">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap justify-between items-start gap-10 mb-12">
          <a href="#top" className="flex items-center gap-2.5 text-ivory">
            <Leaf className="w-5 h-5 text-brass-light" strokeWidth={1.4} />
            <span className="font-display text-lg">The Olive Table</span>
          </a>
          <nav className="flex flex-wrap gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13.5px] hover:text-brass-light transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-ivory/10 pt-6 flex flex-wrap justify-between gap-2.5 text-[12.5px] text-ivory/40">
          <span>© 2026 The Olive Table, Bandra West, Mumbai.</span>
          <span>Open Tuesday to Sunday, by reservation.</span>
        </div>
      </div>
    </footer>
  );
}
