import * as React from "react";
import { cn } from "@/lib/cn";

export interface ProgressProps {
  value: number;
  max?: number;
  tone?: "gold" | "purple" | "mint";
  label?: string;
  display?: string;
  className?: string;
}

const fills: Record<NonNullable<ProgressProps["tone"]>, string> = {
  gold: "bg-gradient-to-r from-mt-gold-500 to-mt-gold-200 shadow-[0_0_14px_rgba(245,196,96,.5)]",
  purple: "bg-gradient-to-r from-mt-purple-500 to-mt-purple-400 shadow-[0_0_14px_rgba(176,110,226,.5)]",
  mint: "bg-gradient-to-r from-[#38b89b] to-mt-mint shadow-[0_0_14px_rgba(93,227,196,.4)]",
};

export function Progress({ value, max = 100, tone = "gold", label, display, className }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {(label || display) && (
        <div className="flex justify-between items-center mb-2 text-[13px]">
          {label && (
            <span className="italic font-extrabold text-mt-off-white tracking-[.04em]">{label}</span>
          )}
          {display && <span className="font-mono text-mt-gold-200 font-semibold">{display}</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className="w-full h-2.5 bg-white/[.08] rounded-r-pill overflow-hidden relative"
      >
        <div
          className={cn("h-full rounded-r-pill transition-[width] duration-500 ease-out", fills[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
