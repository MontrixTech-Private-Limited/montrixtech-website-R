import Image from "next/image";

type Props = {
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

/**
 * MontrixTech brand lockup.
 * Uses the supplied navbar logo asset (/images/TECH-logo.png — 1190x196, RGBA).
 *
 * - variant="full"  → full wordmark with icon
 * - variant="mark"  → the icon square only (for tight spaces)
 */
export default function BrandLogo({ variant = "full", className = "", priority = false }: Props) {
  if (variant === "mark") {
    return (
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2E57] text-white ${className}`}
        aria-label="MontrixTech"
      >
        <span className="text-[15px] font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          M
        </span>
      </span>
    );
  }

  return (
    <Image
  src="/images/navbar-logo.png"
  alt="MontrixTech"
  width={270}
  height={70}
  priority={priority}
  className={className || "h-14 lg:h-[58px] w-auto transition-all duration-300"}
  unoptimized
/>
  );
}
