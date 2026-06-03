"use client";

import { useEffect, useRef, useState } from "react";

const ROTATING_WORDS = [
  "Translation",
  "Transcription",
  "Moderation",
  "Dubbing",
  "Localisation",
];

/* Mini Badge mark — the brand particle floating in the hero background */
function BadgeParticle({
  x, y, size, opacity, delay, color, filled = false,
}: {
  x: string; y: string; size: number; opacity: number; delay: number; color: string; filled?: boolean;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x, top: y,
        opacity,
        animation: `float ${7 + delay}s ease-in-out ${delay}s infinite`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {filled ? (
          /* Solid filled badge — full logo mark */
          <>
            <polygon points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35" fill={color} />
            <path d="M 70 44 A 21 21 0 1 0 70 56 Z" fill="rgba(6,6,10,0.9)" />
            <rect x="27" y="45.5" width="44" height="9" fill={color} />
          </>
        ) : (
          /* Outline-only badge — ghost mark */
          <polygon
            points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
            stroke={color}
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        )}
      </svg>
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 350);
    }, 2500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // Mix of filled badges + ghost outlines for visual depth
  const particles = [
    { x: "7%",  y: "16%", size: 68,  opacity: 0.22, delay: 0,   color: "#1ED23C", filled: true  },
    { x: "81%", y: "11%", size: 46,  opacity: 0.15, delay: 1.5, color: "#00B4D8", filled: false },
    { x: "89%", y: "54%", size: 84,  opacity: 0.10, delay: 3,   color: "#A855F7", filled: false },
    { x: "4%",  y: "64%", size: 54,  opacity: 0.18, delay: 2,   color: "#1ED23C", filled: false },
    { x: "69%", y: "77%", size: 38,  opacity: 0.14, delay: 0.8, color: "#3B82F6", filled: true  },
    { x: "44%", y: "84%", size: 30,  opacity: 0.11, delay: 2.5, color: "#EF4444", filled: false },
    { x: "24%", y: "7%",  size: 42,  opacity: 0.13, delay: 1.2, color: "#A855F7", filled: false },
    { x: "54%", y: "4%",  size: 26,  opacity: 0.10, delay: 3.5, color: "#1ED23C", filled: true  },
    { x: "35%", y: "72%", size: 22,  opacity: 0.08, delay: 4,   color: "#1ED23C", filled: false },
    { x: "76%", y: "36%", size: 32,  opacity: 0.09, delay: 2.8, color: "#00B4D8", filled: false },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06060A]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Green radial glow — top center */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(ellipse at center, rgba(30,210,60,0.18) 0%, rgba(30,210,60,0.04) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Secondary glow — bottom left */}
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,180,216,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Right glow */}
      <div
        className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating badge particles — brand marks drifting in the field */}
      {particles.map((p, i) => (
        <BadgeParticle key={i} {...p} />
      ))}

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10 opacity-[0.06]"
        style={{
          background: "linear-gradient(90deg, transparent, #1ED23C, transparent)",
          animation: "scan 5s linear infinite",
        }}
      />

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-green mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1ED23C] animate-pulse" />
          <span className="text-xs font-medium text-[#1ED23C] tracking-widest uppercase">
            4 Patented AI Products
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-gradient-white font-bold leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            animationDelay: "0.25s",
            opacity: 0,
          }}
        >
          The World Speaks.
          <br />
          <span className="text-gradient-green">We Make It Understood.</span>
        </h1>

        {/* Rotating service word */}
        <div
          className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <span className="text-white/40 text-lg font-light tracking-wide">AI-Powered</span>
          <span
            className="text-lg font-semibold tracking-wide transition-all duration-300"
            style={{
              color: "#1ED23C",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              minWidth: "140px",
              display: "inline-block",
              textAlign: "left",
            }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
          <span className="text-white/40 text-lg font-light tracking-wide">at Scale</span>
        </div>

        {/* Sub-description */}
        <p
          className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          Infoesearch deploys enterprise-grade AI across every dimension of content intelligence —
          from screen to screen, language to language, market to market.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.65s", opacity: 0 }}
        >
          <a
            href="#demo"
            className="group px-8 py-4 rounded-xl text-base font-bold text-black bg-[#1ED23C] hover:bg-[#3AE024] transition-all duration-200 glow-green-btn"
          >
            Book a Demo
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="#products"
            className="px-8 py-4 rounded-xl text-base font-medium text-white/70 glass hover:text-white hover:border-white/20 transition-all duration-200"
          >
            Explore Products
          </a>
        </div>

        {/* Trust strip */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          {[
            "4 Patented Technologies",
            "50+ Languages",
            "99.8% Accuracy Rate",
            "Enterprise SLA",
          ].map((stat) => (
            <div key={stat} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#1ED23C]/60" />
              <span className="text-sm text-white/40 tracking-wide">{stat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #06060A)" }}
      />

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs tracking-widest uppercase animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
