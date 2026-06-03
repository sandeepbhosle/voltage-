"use client";

const SERVICES = [
  { label: "AI Translation", icon: "🌐" },
  { label: "Transcription", icon: "📝" },
  { label: "Content Moderation", icon: "🛡️" },
  { label: "AI Dubbing", icon: "🎙️" },
  { label: "Localisation", icon: "🗺️" },
  { label: "Subtitle Generation", icon: "🎬" },
  { label: "Voice Cloning", icon: "🔊" },
  { label: "Language Detection", icon: "🔍" },
  { label: "Real-time Translation", icon: "⚡" },
  { label: "Quality Assurance", icon: "✅" },
];

const LANGUAGES = [
  "English", "Mandarin", "Hindi", "Spanish", "French",
  "Arabic", "Portuguese", "Bengali", "Russian", "Japanese",
  "German", "Korean", "Vietnamese", "Tamil", "Swahili",
];

export default function ServicesTicker() {
  const doubledServices = [...SERVICES, ...SERVICES];
  const doubledLangs = [...LANGUAGES, ...LANGUAGES];

  return (
    <div className="relative py-10 overflow-hidden border-y border-white/[0.06] bg-[#08080E]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #08080E, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #08080E, transparent)" }} />

      {/* Services ticker */}
      <div className="mb-5 overflow-hidden">
        <div className="flex gap-0 animate-ticker" style={{ width: "max-content" }}>
          {doubledServices.map((s, i) => (
            <div key={i} className="flex items-center gap-6 pr-10">
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none">{s.icon}</span>
                <span className="text-sm font-medium text-white/55 whitespace-nowrap tracking-wide uppercase"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                  {s.label}
                </span>
              </div>
              <span className="text-white/20 text-lg">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages ticker (reversed) */}
      <div className="overflow-hidden">
        <div
          className="flex gap-0"
          style={{
            width: "max-content",
            animation: "ticker 25s linear infinite reverse",
          }}
        >
          {doubledLangs.map((lang, i) => (
            <div key={i} className="flex items-center gap-5 pr-8">
              <span className="text-xs font-light text-white/30 whitespace-nowrap tracking-widest uppercase"
                style={{ fontSize: "0.65rem" }}>
                {lang}
              </span>
              <span className="text-white/15 text-xs">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
