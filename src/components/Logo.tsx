"use client";

// Brand colors extracted from Logo.ai content stream
const GREEN = "#1ED23C";
const NAVY = "#000A28";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  white?: boolean;
  size?: "sm" | "md" | "lg";
}

/*
  Logo mark breakdown (from JPEG reference):
  - Outer: Open octagon (flat top/bottom, 45° corners) — gap on the RIGHT side
  - Inner: Horizontal arrow / "e" cursor shape made of:
      • A left vertical stem
      • Upper horizontal bar (full width into the opening)
      • Lower horizontal bar (shorter, ~3/4 width)
  The negative space reads as a forward-pointing arrow or stylised "e"
*/

export function InfoesearchMark({
  size = 40,
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
      {/*
        Open octagon — 7 of 8 sides (right vertical edge omitted).
        Points: top-left → top-right → upper-right-corner → (gap) → lower-right-corner → bottom-right → bottom-left → lower-left-corner → upper-left-corner → back to top-left
        Using flat-top orientation matching the logo.
      */}
      <path
        d="M 65 7 L 35 7 L 7 35 L 7 65 L 35 93 L 65 93 L 93 65"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/*
        Interior "e" / arrow mark:
        - Vertical left stem
        - Upper bar reaching toward the right opening
        - Lower bar (slightly shorter)
      */}
      <path
        d="M 32 32 L 32 68"
        stroke={color}
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      <path
        d="M 32 42 L 70 42"
        stroke={color}
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      <path
        d="M 32 58 L 58 58"
        stroke={color}
        strokeWidth="8.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InfoesearchLogo({
  className = "",
  iconOnly = false,
  white = true,
  size = "md",
}: LogoProps) {
  const iconSizes = { sm: 28, md: 36, lg: 50 };
  const fontSizes = { sm: "0.95rem", md: "1.2rem", lg: "1.55rem" };
  const textColor = white ? "#FFFFFF" : NAVY;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <InfoesearchMark size={iconSizes[size]} color={white ? GREEN : GREEN} />

      {!iconOnly && (
        <div className="flex items-baseline" style={{ gap: "0px" }}>
          {/* "info" — bold, green */}
          <span
            style={{
              color: white ? GREEN : NAVY,
              fontSize: fontSizes[size],
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            info
          </span>
          {/* "e" — lighter, same color */}
          <span
            style={{
              color: textColor,
              fontSize: fontSizes[size],
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            e
          </span>
          {/* "search" — light weight */}
          <span
            style={{
              color: textColor,
              fontSize: fontSizes[size],
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            search
          </span>
        </div>
      )}
    </div>
  );
}

/* ── Product logos (mSubs / mDubs / mShield / mTracker) ── */

const PRODUCT_CONFIG = {
  msubs:   { color: "#00B4D8", label: "SUBS"    },
  mdubs:   { color: "#A855F7", label: "DUBS"    },
  mshield: { color: "#EF4444", label: "SHIELD"  },
  mtracker:{ color: "#3B82F6", label: "TRACKER" },
} as const;

function ProductMark({ color, size = 36 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Full closed octagon */}
      <path
        d="M 65 7 L 35 7 L 7 35 L 7 65 L 35 93 L 65 93 L 93 65 L 93 35 Z"
        stroke={color}
        strokeWidth="8"
        strokeLinejoin="round"
        fill="none"
      />
      {/*
        Lowercase "m" inside:
        Two arches from a shared base line.
        Start bottom-left, go up-arch1-down-arch2-down to bottom-right.
      */}
      <path
        d="M 22 68 L 22 42 Q 22 30 34 30 Q 46 30 50 40 Q 54 30 66 30 Q 78 30 78 42 L 78 68"
        stroke={color}
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ProductLogo({
  product,
  size = 32,
}: {
  product: keyof typeof PRODUCT_CONFIG;
  size?: number;
}) {
  const { color, label } = PRODUCT_CONFIG[product];
  const fontSize = size * 0.38;

  return (
    <div className="flex items-center gap-2.5">
      <ProductMark color={color} size={size} />
      <div className="flex items-baseline gap-0">
        <span style={{ color, fontSize, fontWeight: 300 }}>m</span>
        <span style={{ color: NAVY, fontSize, fontWeight: 900, letterSpacing: "0.02em" }}>
          {label}
        </span>
      </div>
    </div>
  );
}
