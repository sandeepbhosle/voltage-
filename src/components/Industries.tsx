"use client";

const INDUSTRIES = [
  {
    icon: "🎬",
    name: "Media & Entertainment",
    description: "Studios, OTT platforms, and broadcasters — dubbing, subtitling, and content moderation at streaming scale.",
    tags: ["Dubbing", "Subtitles", "Moderation"],
  },
  {
    icon: "📰",
    name: "News & Publishing",
    description: "Real-time translation of breaking news and editorial content across global markets and languages.",
    tags: ["Translation", "Localisation"],
  },
  {
    icon: "🏛️",
    name: "Government & Legal",
    description: "Certified transcription and translation for courts, government bodies, and legal proceedings with compliance-grade accuracy.",
    tags: ["Transcription", "Translation", "Compliance"],
  },
  {
    icon: "🎓",
    name: "EdTech & Learning",
    description: "Accessible multilingual courseware — subtitles, transcripts, and localised content for learners worldwide.",
    tags: ["Subtitles", "Localisation", "Transcription"],
  },
  {
    icon: "🏥",
    name: "Healthcare",
    description: "HIPAA-aligned transcription and translation for clinical documentation, patient communication, and medical records.",
    tags: ["Transcription", "Translation"],
  },
  {
    icon: "🌐",
    name: "Enterprise & SaaS",
    description: "Product localisation, support content translation, and real-time multilingual communication for global enterprises.",
    tags: ["Localisation", "Translation", "Moderation"],
  },
];

const TAG_COLORS: Record<string, string> = {
  "Dubbing": "rgba(168,85,247,0.12)",
  "Subtitles": "rgba(0,180,216,0.12)",
  "Moderation": "rgba(239,68,68,0.12)",
  "Translation": "rgba(46,204,29,0.10)",
  "Localisation": "rgba(59,130,246,0.12)",
  "Transcription": "rgba(46,204,29,0.10)",
  "Compliance": "rgba(239,68,68,0.10)",
};

const TAG_TEXT: Record<string, string> = {
  "Dubbing": "#A855F7",
  "Subtitles": "#00B4D8",
  "Moderation": "#EF4444",
  "Translation": "#2ECC1D",
  "Localisation": "#3B82F6",
  "Transcription": "#2ECC1D",
  "Compliance": "#EF4444",
};

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-[#070A07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC1D]" />
            <span className="text-xs font-medium text-[#2ECC1D] tracking-widest uppercase">Industries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Industry.
            <br />
            <span className="text-white/40">Our Expertise.</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            Infoesearch deploys across six enterprise verticals — each with purpose-built
            workflows, compliance guardrails, and domain-specific AI tuning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="group glass rounded-2xl p-7 border border-white/[0.06] hover:border-[#2ECC1D]/15 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-3xl mb-5 leading-none">{ind.icon}</div>

              <h3 className="text-base font-bold text-white mb-2">{ind.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{ind.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {ind.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: TAG_COLORS[tag] || "rgba(255,255,255,0.05)",
                      color: TAG_TEXT[tag] || "rgba(255,255,255,0.5)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
