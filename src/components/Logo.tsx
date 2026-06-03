"use client";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  white?: boolean;
  size?: "sm" | "md" | "lg";
}

export function InfoesearchLogo({ className = "", iconOnly = false, white = true, size = "md" }: LogoProps) {
  const sizes = { sm: 28, md: 36, lg: 48 };
  const iconSize = sizes[size];
  const textColor = white ? "#FFFFFF" : "#0B1A33";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Octagonal "e" mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Open octagon (gap on right side) */}
        <path
          d="M 52 8 L 28 8 L 8 28 L 8 52 L 28 72 L 52 72 L 72 52"
          stroke="#2ECC1D"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow "e" cursor inside */}
        <path
          d="M 26 36 L 50 36 M 26 44 L 44 44 M 26 28 L 26 52"
          stroke="#2ECC1D"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {!iconOnly && (
        <div className="flex items-baseline gap-0.5">
          <span
            className="font-bold tracking-tight leading-none"
            style={{
              color: "#2ECC1D",
              fontSize: size === "sm" ? "1rem" : size === "md" ? "1.25rem" : "1.6rem",
              letterSpacing: "-0.02em",
            }}
          >
            info
          </span>
          <span
            className="font-light tracking-tight leading-none"
            style={{
              color: textColor,
              fontSize: size === "sm" ? "1rem" : size === "md" ? "1.25rem" : "1.6rem",
              letterSpacing: "-0.02em",
            }}
          >
            esearch
          </span>
        </div>
      )}
    </div>
  );
}

export function ProductLogo({
  product,
  size = 32,
}: {
  product: "msubs" | "mdubs" | "mshield" | "mtracker";
  size?: number;
}) {
  const colors = {
    msubs: "#00B4D8",
    mdubs: "#A855F7",
    mshield: "#EF4444",
    mtracker: "#3B82F6",
  };
  const labels = {
    msubs: "SUBS",
    mdubs: "DUBS",
    mshield: "SHIELD",
    mtracker: "TRACKER",
  };

  const color = colors[product];

  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Full octagon */}
        <path
          d="M 52 8 L 28 8 L 8 28 L 8 52 L 28 72 L 52 72 L 72 52 L 72 28 Z"
          stroke={color}
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />
        {/* lowercase "m" */}
        <path
          d="M 22 54 L 22 34 Q 22 28 28 28 Q 34 28 36 34 Q 38 28 44 28 Q 50 28 52 34 L 58 54"
          stroke={color}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div>
        <span className="font-light text-sm lowercase tracking-wide" style={{ color }}>m</span>
        <span className="font-black tracking-wide" style={{ color: "#0B1A33", fontSize: "0.9rem" }}>
          {labels[product]}
        </span>
      </div>
    </div>
  );
}
