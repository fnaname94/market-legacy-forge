import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Hexagon({
  children,
  className,
  size = 56,
  gradient = true,
}: {
  children?: ReactNode;
  className?: string;
  size?: number;
  gradient?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative grid place-items-center hex-clip",
        gradient ? "bg-gradient-brand" : "bg-brand-navy",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[2px] hex-clip bg-brand-deep grid place-items-center">
        {children}
      </div>
    </div>
  );
}

export function HexOutline({
  className,
  size = 200,
  opacity = 0.08,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
      aria-hidden
    >
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3D6FE8" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>
      </defs>
      <polygon
        points="50,2 95,26 95,74 50,98 5,74 5,26"
        fill="none"
        stroke="url(#hexGrad)"
        strokeWidth="1.2"
      />
    </svg>
  );
}