"use client";

/*
  Three creative logo mark directions for Infoesearch.
  All preserve the octagonal "e" DNA — each takes a different design philosophy.

  MARK A — "Signal"   : Stroke-based precision. The octagon as a transmission frame.
  MARK B — "Badge"    : Filled impact. Solid stamp, white negative-space "e".
  MARK C — "Aperture" : Dynamic geometry. Rotating inner octagon creates the "e" gap.
*/

const GREEN = "#1ED23C";
const NAVY = "#000A28";

/* ─── MARK A : Signal ─────────────────────────────────────────────────────── */
export function MarkSignal({
  size = 80,
  color = GREEN,
  animate = false,
}: {
  size?: number;
  color?: string;
  animate?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer octagon ring — two-weight: thin outer + bold inner */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        stroke={color}
        strokeWidth="5.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.35"
      />
      <polygon
        points="62,13 38,13 13,38 13,62 38,87 62,87 87,62 87,38"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />

      {/* "e" — formed by: arc (C-bowl) + horizontal counter bar */}
      {/* Arc: large counterclockwise arc from upper-right to lower-right = "C" shape */}
      <path
        d="M 68 42 A 20 20 0 1 0 68 58"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
        style={animate ? { animation: "glow-pulse 3s ease-in-out infinite" } : {}}
      />
      {/* Counter bar — from left edge of arc through to the right opening */}
      <line
        x1="30"
        y1="50"
        x2="68"
        y2="50"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Corner dots — precision detail */}
      <circle cx="50" cy="6"  r="2.5" fill={color} opacity="0.5" />
      <circle cx="94" cy="50" r="2.5" fill={color} opacity="0.5" />
      <circle cx="50" cy="94" r="2.5" fill={color} opacity="0.5" />
      <circle cx="6"  cy="50" r="2.5" fill={color} opacity="0.5" />
    </svg>
  );
}

/* ─── MARK B : Badge ──────────────────────────────────────────────────────── */
export function MarkBadge({
  size = 80,
  color = GREEN,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Filled octagon */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        fill={color}
      />

      {/*
        White negative-space "e" inside:
        1. Near-complete circle (white fill) — the bowl — open ~30° on right
        2. Green horizontal bar cuts through = the counter → creates the "e"
      */}
      {/* White bowl — large arc closing with a chord, open on right */}
      <path
        d="M 68 43 A 21 21 0 1 0 68 57 Z"
        fill="white"
      />
      {/* Green bar — creates the "e" counter from the white circle */}
      <rect x="27" y="45" width="42" height="10" fill={color} />

      {/* Subtle corner chamfers — reinforces the octagonal structure */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── MARK C : Aperture ───────────────────────────────────────────────────── */
export function MarkAperture({
  size = 80,
  color = GREEN,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer octagon — clean, standard weight */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        stroke={color}
        strokeWidth="5"
        strokeLinejoin="round"
        fill="none"
      />

      {/*
        Inner octagon — rotated 22.5° — creates the "aperture" gap.
        The overlap of outer and inner frames creates blade-like segments.
        The gap where the blades don't overlap reads as the "e" opening.
      */}
      <polygon
        points="50,18 28,28 18,50 28,72 50,82 72,72 82,50 72,28"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />

      {/*
        "e" lines — drawn precisely between the two frames
        to create a clear letterform reading.
      */}
      {/* Left vertical stem */}
      <line x1="30" y1="30" x2="30" y2="70"
        stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Upper bar */}
      <line x1="30" y1="30" x2="70" y2="30"
        stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Middle counter bar */}
      <line x1="30" y1="50" x2="68" y2="50"
        stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Lower bar */}
      <line x1="30" y1="70" x2="70" y2="70"
        stroke={color} strokeWidth="6" strokeLinecap="round" />

      {/* Eight radial corner connectors between the two octagons */}
      {[
        [50, 6,  50, 18],
        [94, 50, 82, 50],
        [50, 94, 50, 82],
        [6,  50, 18, 50],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth="2" opacity="0.3" />
      ))}
    </svg>
  );
}

/* ─── MARK D : Orbit (bonus) ──────────────────────────────────────────────── */
export function MarkOrbit({
  size = 80,
  color = GREEN,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer octagon ring — open, missing right-top segment */}
      <path
        d="M 65 6 L 35 6 L 6 35 L 6 65 L 35 94 L 65 94 L 94 65 L 94 35"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Orbital "e" — circular arc (the globe/orbit metaphor) */}
      {/* Main orbit ring — broken circle open on right upper quadrant */}
      <path
        d="M 50 24 A 26 26 0 1 0 74 50"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Counter bar — the equator of the "e" */}
      <line x1="24" y1="50" x2="74" y2="50"
        stroke={color} strokeWidth="5.5" strokeLinecap="round" />

      {/* Orbital dot — a "signal" at the break point */}
      <circle cx="74" cy="50" r="5" fill={color} />
      {/* Smaller echo dot */}
      <circle cx="74" cy="50" r="9" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="74" cy="50" r="13" stroke={color} strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

/* ─── Wordmark variants ───────────────────────────────────────────────────── */
export function Wordmark({
  color = "white",
  size = "md",
}: {
  color?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "0.9rem", md: "1.2rem", lg: "1.6rem" };
  const fs = sizes[size];

  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
      <span style={{ color: GREEN, fontSize: fs, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
        info
      </span>
      <span style={{ color, fontSize: fs, fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1 }}>
        e
      </span>
      <span style={{ color, fontSize: fs, fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1 }}>
        search
      </span>
    </div>
  );
}

/* ─── Concepts showcase section ───────────────────────────────────────────── */
const CONCEPTS = [
  {
    id: "A",
    name: "Signal",
    Mark: MarkSignal,
    philosophy: "Technical precision",
    description:
      "Double-ring octagon frame — a transmission aperture — with the 'e' rendered as a circular arc + counter bar. Suggests signal, frequency, and AI intelligence. Scales beautifully from favicon to billboard.",
    best: ["Enterprise tech", "Broadcast media", "Dark backgrounds"],
  },
  {
    id: "B",
    name: "Badge",
    Mark: MarkBadge,
    philosophy: "Bold impact",
    description:
      "Solid filled octagon. The 'e' lives as white negative space — a pure stamp that reads instantly at any size. The most differentiated from any competitor in this space. Unforgettable.",
    best: ["Brand stamps", "Product marks", "All backgrounds"],
  },
  {
    id: "C",
    name: "Aperture",
    Mark: MarkAperture,
    philosophy: "Geometric complexity",
    description:
      "Two concentric octagons — outer standard, inner rotated 22.5° — create a camera aperture / radial blade pattern. The 'e' is drawn in the inner frame. Signals precision, multi-layered intelligence.",
    best: ["Premium tech", "Dark mode", "Print"],
  },
  {
    id: "D",
    name: "Orbit",
    Mark: MarkOrbit,
    philosophy: "Global dynamism",
    description:
      "Open octagon with an orbital arc forming the 'e' bowl, a signal dot at the break point, and radiating echo rings. Simultaneously references global reach, search, and AI signal. Most dynamic of the four.",
    best: ["SaaS", "Global brand", "Motion / animation"],
  },
] as const;

export default function LogoConcepts() {
  return (
    <section className="relative py-24 bg-[#06060A]">
      {/* Ambient green glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(30,210,60,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1ED23C]" />
            <span className="text-xs font-medium text-[#1ED23C] tracking-widest uppercase">
              Logo Concepts — Creative Exploration
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Four Directions.
            <br />
            <span className="text-gradient-green">One Brand DNA.</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            Each mark preserves the octagonal "e" at its core while taking a distinct creative
            philosophy. All work across dark, light, and brand-color backgrounds.
          </p>
        </div>

        {/* Concept grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {CONCEPTS.map(({ id, name, Mark, philosophy, description, best }) => (
            <div
              key={id}
              className="group glass rounded-2xl border border-white/[0.07] hover:border-[#1ED23C]/25 transition-all duration-400 overflow-hidden"
            >
              {/* Mark preview — three background variants */}
              <div className="p-6 pb-0">
                {/* Dark bg (primary) */}
                <div className="rounded-xl bg-[#06060A] border border-white/[0.06] flex items-center justify-center p-6 mb-3">
                  <Mark size={72} color={GREEN} />
                </div>
                {/* With wordmark */}
                <div className="rounded-xl bg-[#0D0D0D] border border-white/[0.06] flex items-center justify-center gap-3 px-4 py-3 mb-3">
                  <Mark size={28} color={GREEN} />
                  <Wordmark color="white" size="sm" />
                </div>
                {/* Light bg variant */}
                <div className="rounded-xl bg-white flex items-center justify-center gap-3 px-4 py-3 mb-6">
                  <Mark size={28} color={NAVY} />
                  <Wordmark color={NAVY} size="sm" />
                </div>
              </div>

              {/* Info */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    <span className="text-[#1ED23C] mr-1 font-mono text-sm">{id}</span>
                    {name}
                  </h3>
                  <span className="text-xs text-[#1ED23C]/60 font-medium">{philosophy}</span>
                </div>

                <p className="text-white/40 text-xs leading-relaxed mb-4">{description}</p>

                <div className="space-y-1">
                  {best.map((b) => (
                    <div key={b} className="flex items-center gap-1.5">
                      <span className="text-[#1ED23C]/50 text-xs">✓</span>
                      <span className="text-xs text-white/30">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color system preview */}
        <div className="glass rounded-2xl border border-white/[0.07] p-8">
          <h3 className="text-lg font-bold text-white mb-2">Brand colour system</h3>
          <p className="text-white/40 text-sm mb-8">
            Extracted from the original Logo.ai — each product retains its own accent colour
            within the master brand palette.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { name: "Brand Green", hex: "#1ED23C", rgb: "30 · 210 · 60",   note: "Primary — Infoesearch" },
              { name: "Brand Navy",  hex: "#000A28", rgb: "0 · 10 · 40",     note: "Primary — Infoesearch" },
              { name: "mSubs",       hex: "#00B4D8", rgb: "0 · 180 · 216",   note: "Product" },
              { name: "mDubs",       hex: "#A855F7", rgb: "168 · 85 · 247",  note: "Product" },
              { name: "mShield",     hex: "#EF4444", rgb: "239 · 68 · 68",   note: "Product" },
              { name: "mTracker",    hex: "#3B82F6", rgb: "59 · 130 · 246",  note: "Product" },
            ].map((c) => (
              <div key={c.name}>
                <div
                  className="w-full h-14 rounded-xl mb-3"
                  style={{ background: c.hex }}
                />
                <p className="text-xs font-semibold text-white mb-0.5">{c.name}</p>
                <p className="text-xs font-mono text-white/50">{c.hex}</p>
                <p className="text-xs text-white/25">{c.rgb}</p>
                <p className="text-xs text-white/20 mt-0.5">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
