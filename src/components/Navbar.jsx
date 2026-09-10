import React from "react";
import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#signature", label: "Signature" },
  { href: "#menu", label: "Menu" },
  { href: "#chef", label: "Chef" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-brass/20 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-ink/90" : "bg-ink/70"
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-ivory">
          <Leaf className="w-5 h-5 text-brass-light" strokeWidth={1.4} />
          <span className="font-display text-lg tracking-tight">The Olive Table</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ivory/75 hover:text-ivory transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-brass-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="hidden sm:inline-flex items-center gap-2 bg-brass hover:bg-brass-light text-ink text-sm font-medium px-5 py-2.5 rounded-sm transition-colors"
          >
            Reserve a table
          </a>
          <button
            className="lg:hidden text-ivory p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink/95 border-t border-brass/15 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ivory/85 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-brass text-ink text-sm font-medium px-5 py-3 rounded-sm mt-2"
          >
            Reserve a table
          </a>
        </div>
      )}
    </header>
  );
}
