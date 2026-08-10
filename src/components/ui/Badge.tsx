import * as React from "react";
import { cn } from "@/lib/cn";

type Tone = "new" | "gold" | "mint" | "coral" | "muted" | "solid";

const tones: Record<Tone, string> = {
  new: "bg-mt-purple-800 text-mt-purple-400",
  gold: "bg-mt-gold-300/15 text-mt-gold-300",
  mint: "bg-mt-mint/15 text-mt-mint",
  coral: "bg-mt-coral/15 text-mt-coral",
  muted: "bg-white/5 text-mt-muted",
  solid: "bg-mt-white text-mt-purple-600",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = "new", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-sans italic font-black text-[11px] tracking-[.12em] uppercase",
        "px-2.5 py-1 rounded-pill",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
