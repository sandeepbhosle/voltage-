"use client";

import { useEffect, useState } from "react";

const LANGUAGES = [
  { word: "Understood",  lang: "English"    },
  { word: "Entendido",   lang: "Español"    },
  { word: "Compris",     lang: "Français"   },
  { word: "Verstanden",  lang: "Deutsch"    },
  { word: "Capito",      lang: "Italiano"   },
  { word: "Понято",      lang: "Русский"    },
  { word: "مفهوم",       lang: "العربية",  rtl: true },
  { word: "明白了",       lang: "中文"       },
  { word: "わかった",     lang: "日本語"     },
  { word: "समझा",        lang: "हिन्दी"     },
  { word: "Anlaşıldı",   lang: "Türkçe"    },
  { word: "Begrepen",    lang: "Nederlands" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      const t = setTimeout(() => {
        setIndex(i => (i + 1) % LANGUAGES.length);
        setVisible(true);
      }, 450);
      return () => clearTimeout(t);
    }, 2700);
    return () => clearInterval(cycle);
  }, []);

  const current = LANGUAGES[index];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#08080E" }}
    >
      {/* Stage light — centred, barely visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 30%, rgba(255,255,255,0.018) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Micro-badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-16 animate-fade-in"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#1ED23C" }}
          />
          <span className="text-xs font-medium text-white/40 tracking-[0.15em] uppercase">
            Language Intelligence · 4 Patented Products
          </span>
        </div>

        {/* THE WORD — the hero centrepiece */}
        <div className="mb-5" style={{ minHeight: "1.05em", lineHeight: 1.0 }}>
          <span
            dir={current.rtl ? "rtl" : "ltr"}
            aria-label={`${current.word} (${current.lang})`}
            style={{
              display: "block",
              fontSize: "clamp(3.8rem, 10vw, 9.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              background: "linear-gradient(175deg, #FFFFFF 0%, rgba(255,255,255,0.68) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(14px)",
              transform: visible
                ? "translateY(0px) scale(1)"
                : "translateY(-10px) scale(0.982)",
              transition:
                "opacity 0.42s cubic-bezier(0.4,0,0.2,1), filter 0.42s ease, transform 0.42s ease",
              willChange: "opacity, filter, transform",
            }}
          >
            {current.word}
          </span>
        </div>

        {/* Language label */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-4px)",
            transition: "opacity 0.35s ease 0.06s, transform 0.35s ease 0.06s",
          }}
        >
          <span
            className="text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: "#1ED23C" }}
          >
            {current.lang}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          <span
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.78) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The world speaks.
          </span>
          <br />
          <span className="text-white/38 font-light">We make it understood.</span>
        </h1>

        {/* Description */}
        <p
          className="text-white/40 text-base sm:text-lg leading-relaxed max-w-lg mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          Enterprise AI for translation, transcription, moderation, dubbing, and
          localisation — at the speed and scale global content demands.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.65s", opacity: 0 }}
        >
          <a
            href="#demo"
            className="group px-8 py-4 rounded-xl text-[0.9375rem] font-bold text-black bg-[#1ED23C] hover:bg-[#2FE050] transition-all duration-200 glow-green-btn"
          >
            Book a Demo
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="#products"
            className="px-8 py-4 text-[0.9375rem] font-medium text-white/45 hover:text-white/70 transition-colors duration-200"
          >
            Explore Products →
          </a>
        </div>

        {/* Trust strip */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 animate-fade-in"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          {["50+ Languages", "99.8% Accuracy", "4 Patent Technologies", "Enterprise SLA"].map((s) => (
            <span key={s} className="text-xs text-white/25 tracking-wide">{s}</span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #08080E)" }}
      />

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/18 text-xs tracking-widest uppercase animate-fade-in"
        style={{ animationDelay: "1.4s", opacity: 0 }}
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
    </section>
  );
}
