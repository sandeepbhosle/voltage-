import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infoesearch — AI-Powered Language Intelligence",
  description:
    "Global leader in AI-driven translation, transcription, moderation, dubbing and localisation. Powered by four patented AI products: mSubs, mDubs, mShield, mTracker.",
  keywords: [
    "AI translation", "transcription", "content moderation",
    "dubbing", "localisation", "mSubs", "mDubs", "mShield", "mTracker",
  ],
  openGraph: {
    title: "Infoesearch — AI-Powered Language Intelligence",
    description: "The world speaks. We make it understood.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#06060A] text-white min-h-screen">{children}</body>
    </html>
  );
}
