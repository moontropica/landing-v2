import * as React from "react";
import { cn } from "@/lib/cn";

export interface StatProps {
  label: string;
  value: React.ReactNode;
  unit?: string;
  delta?: { value: string; dir: "up" | "down" };
  className?: string;
}

export function Stat({ label, value, unit, delta, className }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span className="font-mono text-[11px] tracking-[.12em] uppercase text-mt-muted">{label}</span>
      <span className="italic font-black text-[28px] text-mt-white leading-none">
        {value}
        {unit && <span className="text-sm text-mt-muted ml-1 font-bold">{unit}</span>}
      </span>
      {delta && (
        <span
          className={cn(
            "font-mono text-xs font-semibold",
            delta.dir === "up" ? "text-mt-mint" : "text-mt-coral",
          )}
        >
          {delta.dir === "up" ? "▲" : "▼"} {delta.value}
        </span>
      )}
    </div>
  );
}
