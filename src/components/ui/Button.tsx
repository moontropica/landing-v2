import * as React from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "play" | "gold" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 font-sans italic font-black uppercase tracking-[.08em] " +
  "border-0 rounded-r-pill cursor-pointer select-none whitespace-nowrap " +
  "transition-[transform,box-shadow,background] duration-100 active:translate-y-px " +
  "disabled:bg-mt-disabled disabled:text-white/45 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none";

const sizes: Record<ButtonSize, string> = {
  sm: "text-[13px] px-4 py-2.5",
  md: "text-[15px] px-[26px] py-3.5",
  lg: "text-[18px] px-8 py-4",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-mt-white text-mt-purple-600 hover:bg-mt-off-white hover:text-mt-purple-700",
  play:
    "bg-mt-gold-500 text-[#1a1600] italic font-black text-[22px] tracking-[.06em] " +
    "px-9 py-[18px] rounded-r-lg " +
    "shadow-[0_6px_0_#8a7627,0_14px_28px_-10px_rgba(197,169,61,.55)] " +
    "hover:bg-mt-gold-400 " +
    "active:shadow-[0_2px_0_#8a7627,0_4px_10px_rgba(0,0,0,.3)] active:translate-y-1",
  gold:
    "bg-mt-gold-300 text-[#1a1600] shadow-[0_4px_0_#b58429] " +
    "active:shadow-[0_1px_0_#b58429] active:translate-y-[3px]",
  outline:
    "bg-transparent text-mt-white border-2 border-mt-white hover:bg-white/10",
  ghost: "bg-transparent text-mt-off-white hover:text-mt-white hover:underline px-3 py-2.5",
  danger:
    "bg-mt-coral text-[#3a0808] shadow-[0_4px_0_#8a2a2a] active:shadow-[0_1px_0_#8a2a2a] active:translate-y-[3px]",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
    const isPlay = variant === "play";
    return (
      <button
        ref={ref}
        className={cn(base, !isPlay && sizes[size], variants[variant], className)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
