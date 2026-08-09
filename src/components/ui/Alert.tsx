import * as React from "react";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "warn" | "danger" | "info";

const tones: Record<Tone, { wrap: string; icon: React.ReactNode }> = {
  warn: {
    wrap: "bg-mt-gold-300/10 border-mt-gold-300/25 text-[#f5dfa6]",
    icon: <AlertTriangle aria-hidden className="w-4 h-4" />,
  },
  danger: {
    wrap: "bg-mt-coral/10 border-mt-coral/25 text-[#ffc2c2]",
    icon: <ShieldAlert aria-hidden className="w-4 h-4" />,
  },
  info: {
    wrap: "bg-mt-purple-500/10 border-mt-purple-400/25 text-mt-off-white",
    icon: <Info aria-hidden className="w-4 h-4" />,
  },
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  title?: string;
}

export function Alert({ tone = "info", title, className, children, ...rest }: AlertProps) {
  const t = tones[tone];
  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3.5 px-5 py-4 rounded-r-md font-bold text-sm border",
        t.wrap,
        className,
      )}
      {...rest}
    >
      <span className="flex-none w-7 h-7 rounded-full bg-black/20 flex items-center justify-center">
        {t.icon}
      </span>
      <div className="flex-1">
        {title && <div className="italic font-black text-[15px] mb-0.5">{title}</div>}
        {children}
      </div>
    </div>
  );
}
