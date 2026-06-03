"use client";

const PRODUCTS = [
  {
    id: "msubs",
    name: "mSUBS",
    prefix: "m",
    suffix: "SUBS",
    color: "#00B4D8",
    glow: "rgba(0,180,216,0.15)",
    tag: "AI Subtitling",
    tagline: "Every Frame, Every Word.",
    description:
      "Patented AI engine that auto-generates broadcast-grade subtitles and captions with frame-accurate timing, speaker diarisation, and multi-format export — at speeds no human team can match.",
    capabilities: [
      "Frame-accurate timing",
      "Speaker diarisation",
      "40+ format export",
      "Real-time processing",
    ],
    patent: "Patent No. IES-001",
    cardClass: "card-subs",
    shape: "M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z",
  },
  {
    id: "mdubs",
    name: "mDUBS",
    prefix: "m",
    suffix: "DUBS",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.15)",
    tag: "AI Dubbing",
    tagline: "Same Voice. Every Language.",
    description:
      "Proprietary voice-cloning and lip-sync AI that reproduces original speaker characteristics across 50+ languages — preserving emotion, tone, and cadence with cinematic precision.",
    capabilities: [
      "Voice cloning",
      "Lip-sync mapping",
      "Emotion preservation",
      "50+ languages",
    ],
    patent: "Patent No. IES-002",
    cardClass: "card-dubs",
    shape: "M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z",
  },
  {
    id: "mshield",
    name: "mSHIELD",
    prefix: "m",
    suffix: "SHIELD",
    color: "#EF4444",
    glow: "rgba(239,68,68,0.15)",
    tag: "Content Moderation",
    tagline: "Safe at Scale. Always.",
    description:
      "Enterprise content moderation AI that detects harmful, illegal, or policy-violating content across text, audio, and video — in real time, across every language your platform supports.",
    capabilities: [
      "Multi-modal detection",
      "Real-time flagging",
      "Policy customisation",
      "Compliance reporting",
    ],
    patent: "Patent No. IES-003",
    cardClass: "card-shield",
    shape: "M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z",
  },
  {
    id: "mtracker",
    name: "mTRACKER",
    prefix: "m",
    suffix: "TRACKER",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.15)",
    tag: "Content Tracking",
    tagline: "Know Where Your Content Lives.",
    description:
      "AI-powered content fingerprinting and tracking system that monitors distribution, detects unauthorised usage, and delivers real-time intelligence across the open web and streaming platforms.",
    capabilities: [
      "Digital fingerprinting",
      "Piracy detection",
      "Distribution analytics",
      "DMCA automation",
    ],
    patent: "Patent No. IES-004",
    cardClass: "card-tracker",
    shape: "M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z",
  },
];

function OctagonIcon({ color, size = 40 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path
        d="M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z"
        stroke={color}
        strokeWidth="5.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* m letterform */}
      <path
        d="M20 54L20 32Q20 26 27 26Q34 26 37 33Q40 26 47 26Q54 26 57 32L57 54"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-32 bg-[#06060A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1ED23C]" />
            <span className="text-xs font-medium text-[#1ED23C] tracking-widest uppercase">Patented Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Four AIs. One Platform.
            <br />
            <span className="text-gradient-green">Infinite Scale.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Each product is a standalone patented intelligence — together, they form the most
            complete AI content pipeline available to the enterprise.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className={`group relative rounded-2xl glass ${p.cardClass} border transition-all duration-300 p-8 cursor-pointer overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${p.glow} 0%, transparent 60%)`,
                }}
              />

              {/* Patent badge */}
              <div className="absolute top-6 right-6 text-xs text-white/20 font-mono tracking-widest">
                {p.patent}
              </div>

              {/* Icon + tag */}
              <div className="flex items-center gap-4 mb-6">
                <OctagonIcon color={p.color} size={44} />
                <div>
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-0.5"
                    style={{ color: p.color }}
                  >
                    {p.tag}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    <span className="font-light" style={{ color: p.color }}>m</span>
                    {p.suffix}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg font-semibold text-white/80 mb-3">{p.tagline}</p>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed mb-6">{p.description}</p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2">
                {p.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${p.glow}`,
                      border: `1px solid ${p.color}30`,
                      color: p.color,
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: p.color }}
              >
                Learn more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
