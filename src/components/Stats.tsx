"use client";

const STATS = [
  { value: "50+", label: "Languages Supported", sub: "and growing" },
  { value: "99.8%", label: "Transcription Accuracy", sub: "industry benchmark" },
  { value: "180+", label: "Global Markets", sub: "active deployments" },
  { value: "4", label: "Patented AI Products", sub: "proprietary technology" },
  { value: "<50ms", label: "Moderation Latency", sub: "real-time decisions" },
  { value: "24/7", label: "Enterprise SLA", sub: "uptime guaranteed" },
];

const LOGOS = [
  "Broadcast Network",
  "OTT Platform",
  "Global Publisher",
  "Streaming Giant",
  "News Agency",
  "Government Body",
];

export default function Stats() {
  return (
    <section id="about" className="relative py-32 bg-[#0A0A14]">
      {/* Green glow center */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.025) 0%, transparent 60%)",
          height: "400px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1ED23C]" />
            <span className="text-xs font-medium text-white/40 tracking-widest uppercase">By the Numbers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Built for the World&apos;s
            <br />
            <span className="text-white/65">Hardest Problems</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden mb-24">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0A0A14] group hover:bg-[#0E0E1C] transition-colors duration-300 p-10 text-center"
            >
              <div
                className="text-4xl sm:text-5xl font-black mb-2 text-white"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white/70 mb-1">{stat.label}</div>
              <div className="text-xs text-white/30 tracking-wide">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Trusted by strip */}
        <div className="text-center">
          <p className="text-xs font-medium text-white/25 tracking-widest uppercase mb-8">
            Trusted by leading organisations globally
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {LOGOS.map((name, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-lg glass border border-white/[0.06] text-xs font-medium text-white/30 tracking-wide"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
