"use client";

import { useEffect, useRef, useState } from "react";

const ROTATING_WORDS = [
  "Translation",
  "Transcription",
  "Moderation",
  "Dubbing",
  "Localisation",
];

function OctagonParticle({
  x, y, size, opacity, delay, color,
}: {
  x: string; y: string; size: number; opacity: number; delay: number; color: string;
}) {
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45 - 22.5) * (Math.PI / 180);
    return `${size / 2 + (size / 2) * Math.cos(angle)},${size / 2 + (size / 2) * Math.sin(angle)}`;
  }).join(" ");

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x, top: y,
        opacity,
        animation: `float ${7 + delay}s ease-in-out ${delay}s infinite`,
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <polygon
          points={points}
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
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

  const particles = [
    { x: "8%",  y: "18%", size: 64,  opacity: 0.18, delay: 0,   color: "#2ECC1D" },
    { x: "82%", y: "12%", size: 44,  opacity: 0.14, delay: 1.5, color: "#00B4D8" },
    { x: "90%", y: "55%", size: 80,  opacity: 0.12, delay: 3,   color: "#A855F7" },
    { x: "5%",  y: "65%", size: 52,  opacity: 0.16, delay: 2,   color: "#2ECC1D" },
    { x: "70%", y: "78%", size: 36,  opacity: 0.13, delay: 0.8, color: "#3B82F6" },
    { x: "45%", y: "85%", size: 28,  opacity: 0.10, delay: 2.5, color: "#EF4444" },
    { x: "25%", y: "8%",  size: 40,  opacity: 0.12, delay: 1.2, color: "#A855F7" },
    { x: "55%", y: "5%",  size: 24,  opacity: 0.09, delay: 3.5, color: "#2ECC1D" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06060A]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Green radial glow — top center */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(ellipse at center, rgba(46,204,29,0.18) 0%, rgba(46,204,29,0.04) 50%, transparent 70%)",
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

      {/* Floating octagon particles */}
      {particles.map((p, i) => (
        <OctagonParticle key={i} {...p} />
      ))}

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10 opacity-[0.06]"
        style={{
          background: "linear-gradient(90deg, transparent, #2ECC1D, transparent)",
          animation: "scan 5s linear infinite",
        }}
      />

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-green mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC1D] animate-pulse" />
          <span className="text-xs font-medium text-[#2ECC1D] tracking-widest uppercase">
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
              color: "#2ECC1D",
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
            className="group px-8 py-4 rounded-xl text-base font-bold text-black bg-[#2ECC1D] hover:bg-[#3AE024] transition-all duration-200 glow-green-btn"
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
              <span className="w-1 h-1 rounded-full bg-[#2ECC1D]/60" />
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
