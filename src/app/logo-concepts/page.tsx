import LogoConcepts from "@/components/LogoConcepts";
import { InfoesearchLogo } from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Concepts — Infoesearch Brand Exploration",
  description: "Four creative logo directions for the Infoesearch rebrand. All preserve the octagonal 'e' DNA.",
};

export default function LogoConceptsPage() {
  return (
    <div className="min-h-screen bg-[#06060A]">
      {/* Minimal nav */}
      <div className="px-8 py-6 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <InfoesearchLogo size="sm" />
          <a
            href="/"
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            ← Back to site
          </a>
        </div>
      </div>

      <LogoConcepts />
    </div>
  );
}
