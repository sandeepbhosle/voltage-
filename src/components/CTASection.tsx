"use client";

export default function CTASection() {
  return (
    <section id="demo" className="relative py-32 bg-[#06060A] overflow-hidden">
      {/* Green glow */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(46,204,29,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Octagon decorations */}
      <div className="absolute top-12 left-12 opacity-[0.07] pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 80 80" fill="none">
          <path d="M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z" stroke="#2ECC1D" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 opacity-[0.07] pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M52 8L28 8L8 28L8 52L28 72L52 72L72 52L72 28Z" stroke="#2ECC1D" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Top chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-green mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC1D] animate-pulse" />
          <span className="text-xs font-medium text-[#2ECC1D] tracking-widest uppercase">
            Now Accepting Enterprise Clients
          </span>
        </div>

        <h2
          className="font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
        >
          <span className="text-white">Ready to Speak</span>
          <br />
          <span className="text-gradient-green">Every Language?</span>
        </h2>

        <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Book a 30-minute demo with our enterprise team. We&apos;ll show you exactly how
          mSubs, mDubs, mShield, and mTracker can transform your content operation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:demo@infoesearch.com"
            className="group px-10 py-4 rounded-xl text-base font-bold text-black bg-[#2ECC1D] hover:bg-[#3AE024] transition-all duration-200 glow-green-btn"
          >
            Book a Demo
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="mailto:hello@infoesearch.com"
            className="px-10 py-4 rounded-xl text-base font-medium text-white/70 glass hover:text-white hover:border-white/20 transition-all duration-200"
          >
            Talk to Sales
          </a>
        </div>

        {/* Bottom assurances */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/25 text-xs tracking-wide">
          {[
            "No commitment required",
            "Enterprise NDAs available",
            "Custom SLA from day one",
            "Dedicated success manager",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-[#2ECC1D]/40">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
