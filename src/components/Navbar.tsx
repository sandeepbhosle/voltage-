"use client";

import { useState, useEffect } from "react";
import { InfoesearchLogo } from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(6,6,10,0.92)] backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="/" aria-label="Infoesearch home">
            <InfoesearchLogo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Sign in
            </a>
            <a
              href="#demo"
              className="group relative px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-[#1ED23C] hover:bg-[#3AE024] transition-all duration-200 glow-green-btn"
            >
              Book a Demo
              <span className="ml-1.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 inline-block transition-all">→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[rgba(6,6,10,0.98)] backdrop-blur-xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-white/70 hover:text-white transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            className="mt-2 w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-black bg-[#1ED23C] hover:bg-[#3AE024] transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo →
          </a>
        </div>
      </div>
    </header>
  );
}
