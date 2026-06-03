"use client";

// Exact brand colours — extracted from Logo.ai content stream
export const BRAND_GREEN = "#1ED23C";
export const BRAND_NAVY  = "#000A28";

/*
  PRIMARY MARK — Badge (Mark B)
  Solid filled octagon · white negative-space "e" inside
  The most distinctive, ownable mark in the language-AI space.

  e-geometry:
  · White near-circle (r≈21, centre 50,50) — open ~36° on the right
  · Green horizontal bar at y=45–55 cuts the circle → creates the "e" counter
  · Result: upper-right gap (the e aperture) + lower bowl (closed feel)
*/
export function InfoesearchMark({
  size = 40,
  color = BRAND_GREEN,
  bg = "transparent",
}: {
  size?: number;
  color?: string;
  bg?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Optional background (useful on very dark or gradient surfaces) */}
      {bg !== "transparent" && (
        <polygon
          points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
          fill={bg}
        />
      )}

      {/* Filled octagon — the badge */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        fill={color}
      />

      {/* Subtle top-left highlight — gives the badge depth */}
      <path
        d="M 50 6 L 35 6 L 6 35 L 6 50"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/*
        White "e" — near-complete circle open ~36° on right
        Arc: M (70,44) counterclockwise large-arc to (70,56) → C-bowl shape
        Z closes with chord on the right → filled white region
      */}
      <path
        d="M 70 44 A 21 21 0 1 0 70 56 Z"
        fill="white"
      />

      {/*
        Green counter bar — horizontal cut through the white bowl
        Creates the "e" aperture on the upper right + maintains lower bowl
      */}
      <rect
        x="27"
        y="45.5"
        width="44"
        height="9"
        fill={color}
      />
    </svg>
  );
}

/* ─── Full wordmark lockup ───────────────────────────────────────────────── */
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
  const iconSizes  = { sm: 26,      md: 34,      lg: 50      };
  const fontSizes  = { sm: "0.9rem", md: "1.15rem", lg: "1.5rem" };
  const gaps       = { sm: "10px",  md: "12px",  lg: "16px"  };
  const textColor  = white ? "#FFFFFF" : BRAND_NAVY;

  return (
    <div className={`flex items-center ${className}`} style={{ gap: gaps[size] }}>
      <InfoesearchMark size={iconSizes[size]} color={BRAND_GREEN} />

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
          {/* "e" + "search" — light, white/navy */}
          <span style={{
            color: textColor,
            fontSize: fontSizes[size],
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            esearch
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Product logo marks ─────────────────────────────────────────────────── */
const PRODUCTS = {
  msubs:    { color: "#00B4D8", label: "SUBS"    },
  mdubs:    { color: "#A855F7", label: "DUBS"    },
  mshield:  { color: "#EF4444", label: "SHIELD"  },
  mtracker: { color: "#3B82F6", label: "TRACKER" },
} as const;

export function ProductMark({
  color,
  size = 40,
}: {
  color: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Same badge treatment — filled with product colour */}
      <polygon
        points="65,6 35,6 6,35 6,65 35,94 65,94 94,65 94,35"
        fill={color}
      />
      <path
        d="M 50 6 L 35 6 L 6 35 L 6 50"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Lowercase "m" — white, two-arch */}
      <path
        d="M 22 70 L 22 40 Q 22 26 36 26 Q 50 26 50 40 Q 50 26 64 26 Q 78 26 78 40 L 78 70"
        stroke="white"
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
  size = 36,
  dark = false,
}: {
  product: keyof typeof PRODUCTS;
  size?: number;
  dark?: boolean;
}) {
  const { color, label } = PRODUCTS[product];
  const fs = `${size * 0.42}px`;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: `${size * 0.3}px` }}>
      <ProductMark color={color} size={size} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
        <span style={{ color, fontSize: fs, fontWeight: 300 }}>m</span>
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
