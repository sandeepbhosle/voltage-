"use client";

export default function CTASection() {
  return (
    <section id="demo" className="relative py-32 overflow-hidden" style={{ background: "#08080E" }}>
      {/* Very subtle centre glow — not green, just slight luminance */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.018) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Top chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1ED23C] animate-pulse" />
          <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
            Now Accepting Enterprise Clients
          </span>
        </div>

        <h2
          className="font-bold leading-[1.08] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
        >
          <span
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.75) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to Speak<br />Every Language?
          </span>
        </h2>

        <p className="text-white/45 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Book a 30-minute demo with our enterprise team. We&apos;ll show you exactly how
          mSubs, mDubs, mShield, and mTracker can transform your content operation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:demo@infoesearch.com"
            className="group px-10 py-4 rounded-xl text-base font-bold text-black bg-[#1ED23C] hover:bg-[#2FE050] transition-all duration-200 glow-green-btn"
          >
            Book a Demo
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="mailto:hello@infoesearch.com"
            className="px-10 py-4 rounded-xl text-base font-medium text-white/55 glass hover:text-white transition-all duration-200"
          >
            Talk to Sales
          </a>
        </div>

        {/* Assurances */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/25 text-xs tracking-wide">
          {[
            "No commitment required",
            "Enterprise NDAs available",
            "Custom SLA from day one",
            "Dedicated success manager",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-white/25">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
