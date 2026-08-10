import * as React from "react";
import { clsx } from "clsx";

type Tone = "default" | "purple" | "dark";

const tones: Record<Tone, string> = {
  default:
    "bg-gradient-to-b from-white/[.04] to-white/[.02] border border-white/[.08] rounded-lg p-6",
  purple:
    "bg-[linear-gradient(160deg,var(--color-mt-purple-500),var(--color-mt-purple-600))] " +
    "rounded-lg p-7 shadow-purple-glow",
  dark: "bg-mt-ink-700 border border-white/[.05] rounded-lg p-6",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
}

export function Card({ tone = "default", className, children, ...rest }: CardProps) {
  return (
    <div className={clsx(tones[tone], className)} {...rest}>
      {children}
    </div>
  );
}
