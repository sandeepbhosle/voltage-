"use client";

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <path d="M9 14 Q14 8 19 14 Q14 20 9 14Z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none"/>
        <path d="M14 3 L14 25 M3 14 L25 14" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "AI Translation",
    description:
      "Neural machine translation with human-in-the-loop refinement. Context-aware, domain-specific, and culturally nuanced across 100+ language pairs.",
    metric: "100+ language pairs",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="12" rx="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <path d="M8 12h12M8 16h8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 20v4M10 24h8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Transcription",
    description:
      "Automated speech-to-text with speaker identification, timestamps, and custom vocabulary — from studio-quality audio to noisy field recordings.",
    metric: "99.8% word accuracy",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L6 8v8c0 4.4 3.4 8.5 8 10 4.6-1.5 8-5.6 8-10V8L14 4Z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none"/>
        <path d="M10 13l3 3 5-5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Content Moderation",
    description:
      "Real-time, multi-modal moderation of text, audio, and video content. Custom policy engines tuned for your platform's regulatory and brand requirements.",
    metric: "<50ms decision latency",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <path d="M14 4v3M14 21v3M4 14H7M21 14h3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.5 7.5l2 2M18.5 18.5l2 2M7.5 20.5l2-2M18.5 9.5l2-2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "AI Dubbing",
    description:
      "Studio-quality AI dubbing that clones voice, maps lip movements, and preserves the emotional register of the original performance — in any target language.",
    metric: "50+ languages",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <rect x="16" y="16" width="9" height="9" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <path d="M12 7.5h4M7.5 12v4M20.5 12v4M12 20.5h4" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 1.5"/>
      </svg>
    ),
    title: "Localisation",
    description:
      "End-to-end content localisation: cultural adaptation, format conversion, UI string management, and market-specific compliance — under one unified AI workflow.",
    metric: "180+ markets covered",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#08080E]">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,255,255,0.02) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1ED23C]" />
              <span className="text-xs font-medium text-white/40 tracking-widest uppercase">Core Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Every language.
              <br />
              <span className="text-white/45">Every format.</span>
              <br />
              Every market.
            </h2>
          </div>
          <p className="text-white/45 text-base leading-relaxed max-w-sm lg:text-right">
            Five services. One integrated platform. Built to handle the volume, complexity,
            and compliance demands of the world&apos;s largest content operations.
          </p>
        </div>

        {/* Services grid: 3 + 2 layout */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto md:max-w-none">
          {SERVICES.slice(3).map((s) => (
            <ServiceCard key={s.title} {...s} wide />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon, title, description, metric, wide = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  wide?: boolean;
}) {
  return (
    <div className={`group relative glass rounded-2xl p-7 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 overflow-hidden ${wide ? "md:col-span-1" : ""}`}>
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.03) 0%, transparent 60%)" }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-5 w-12 h-12 rounded-xl glass flex items-center justify-center">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-5">{description}</p>

        {/* Metric */}
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-xs font-semibold text-white/45 tracking-wide">{metric}</span>
        </div>
      </div>
    </div>
  );
}
