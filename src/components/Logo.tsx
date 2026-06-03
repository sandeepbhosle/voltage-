"use client";

// Exact brand colours extracted from Logo.ai content stream
export const BRAND_GREEN = "#1ED23C";
export const BRAND_NAVY  = "#000A28";

/* ─── Primary mark: "Signal" ─────────────────────────────────────────────────
   Double-ring octagon (outer faint + inner bold) with circular-arc "e" + bar.
   The cleanest, most technically precise interpretation of the octagonal-e DNA.
   ─────────────────────────────────────────────────────────────────────────── */
export function InfoesearchMark({
  size = 40,
  color = BRAND_GREEN,
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
      {/* Outer octagon — fine ghost ring */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        stroke={color}
        strokeWidth="4.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.28"
      />
      {/* Inner octagon — bold ring */}
      <polygon
        points="61,14 39,14 14,39 14,61 39,86 61,86 86,61 86,39"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
        opacity="0.65"
      />

      {/* "e" mark — circular arc (C-bowl) + horizontal counter bar */}
      {/* Arc: large arc counterclockwise from upper-right to lower-right = C */}
      <path
        d="M 67 42 A 19 19 0 1 0 67 58"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Counter bar through the C */}
      <line
        x1="31" y1="50" x2="67" y2="50"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Structural accent dots at cardinal midpoints — signal nodes */}
      <circle cx="50" cy="6"  r="2.2" fill={color} opacity="0.45" />
      <circle cx="94" cy="50" r="2.2" fill={color} opacity="0.45" />
      <circle cx="50" cy="94" r="2.2" fill={color} opacity="0.45" />
      <circle cx="6"  cy="50" r="2.2" fill={color} opacity="0.45" />
    </svg>
  );
}

/* ─── Wordmark ────────────────────────────────────────────────────────────── */
export function InfoesearchLogo({
  className = "",
  iconOnly = false,
  white = true,
  size = "md",
}: {
  className?: string;
  iconOnly?: boolean;
  white?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const iconSizes = { sm: 26, md: 34, lg: 48 };
  const fontSizes = { sm: "0.9rem", md: "1.15rem", lg: "1.5rem" };
  const textColor = white ? "#FFFFFF" : BRAND_NAVY;
  const markColor = white ? BRAND_GREEN : BRAND_GREEN;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <InfoesearchMark size={iconSizes[size]} color={markColor} />

      {!iconOnly && (
        <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
          {/* "info" — bold, brand green */}
          <span style={{
            color: BRAND_GREEN,
            fontSize: fontSizes[size],
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            info
          </span>
          {/* "e" — light weight, same colour as rest of wordmark */}
          <span style={{
            color: textColor,
            fontSize: fontSizes[size],
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            e
          </span>
          {/* "search" — light weight */}
          <span style={{
            color: textColor,
            fontSize: fontSizes[size],
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            search
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Product logo marks ──────────────────────────────────────────────────── */
const PRODUCTS = {
  msubs:    { color: "#00B4D8", label: "SUBS"    },
  mdubs:    { color: "#A855F7", label: "DUBS"    },
  mshield:  { color: "#EF4444", label: "SHIELD"  },
  mtracker: { color: "#3B82F6", label: "TRACKER" },
} as const;

function ProductMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Closed octagon */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Lowercase "m" — two arches from a shared stem */}
      <path
        d="M 22 70 L 22 42 Q 22 28 36 28 Q 50 28 50 42 Q 50 28 64 28 Q 78 28 78 42 L 78 70"
        stroke={color}
        strokeWidth="7"
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
  dark = false,
}: {
  product: keyof typeof PRODUCTS;
  size?: number;
  dark?: boolean;
}) {
  const { color, label } = PRODUCTS[product];
  const fs = size * 0.4;

  return (
    <div className="flex items-center gap-2.5">
      <ProductMark color={color} size={size} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
        <span style={{ color, fontSize: fs, fontWeight: 300, letterSpacing: "0.01em" }}>m</span>
        <span style={{
          color: dark ? BRAND_NAVY : "#FFFFFF",
          fontSize: fs,
          fontWeight: 900,
          letterSpacing: "0.04em",
        }}>
          {label}
        </span>
      </div>
    </div>
  );
}
