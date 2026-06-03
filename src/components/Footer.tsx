"use client";

import { InfoesearchLogo } from "./Logo";

const PRODUCTS = [
  { name: "mSubs", color: "#00B4D8", href: "#products" },
  { name: "mDubs", color: "#A855F7", href: "#products" },
  { name: "mShield", color: "#EF4444", href: "#products" },
  { name: "mTracker", color: "#3B82F6", href: "#products" },
];

const LINKS = {
  Services: ["AI Translation", "Transcription", "Content Moderation", "Dubbing", "Localisation"],
  Company: ["About Us", "Careers", "Press", "Partners", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "GDPR", "Security", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#070A07] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <InfoesearchLogo size="md" className="mb-5" />
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              AI-powered language intelligence for the world&apos;s leading content organisations.
              Translation, transcription, moderation, dubbing, and localisation — reimagined.
            </p>

            {/* Products list */}
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200"
                  style={{
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    color: p.color,
                  }}
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Infoesearch. All rights reserved.
            All four AI products are proprietary patented technologies.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20">ISO 9001 Certified</span>
            <span className="text-xs text-white/20">GDPR Compliant</span>
            <span className="text-xs text-white/20">SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
