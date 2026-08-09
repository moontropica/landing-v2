import * as React from "react";
import { cn } from "@/lib/cn";

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tone?: "purple" | "dark";
  label?: string;
  suffix?: React.ReactNode;
  max?: () => void;
}

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ tone = "purple", label, suffix, max, className, id, ...rest }, ref) => {
    const generated = React.useId();
    const inputId = id ?? generated;
    const toneClasses =
      tone === "dark"
        ? "bg-mt-ink-700 shadow-[inset_0_0_0_1px_rgba(255,255,255,.06)] " +
          "focus:shadow-[inset_0_0_0_1px_var(--color-mt-purple-400),0_0_0_3px_rgba(154,79,212,.25)]"
        : "bg-mt-purple-700 focus:bg-mt-purple-600 focus:shadow-[0_0_0_3px_rgba(255,255,255,.2)]";

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block mb-2 italic font-black text-[15px] text-mt-white">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full text-mt-white border-0 rounded-r-pill px-[22px] py-4",
              "font-sans font-bold text-base outline-none transition-[box-shadow,background] duration-150",
              "placeholder:text-white/35 placeholder:italic",
              toneClasses,
              className,
            )}
            {...rest}
          />
          {max && (
            <button
              type="button"
              onClick={max}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-mt-gold-300 text-[#1a1600]
                         rounded-r-pill px-2.5 py-1 italic font-black text-[11px] tracking-[.12em] uppercase cursor-pointer"
            >
              MAX
            </button>
          )}
          {suffix && !max && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2
                            bg-black/35 rounded-r-pill px-3 py-1.5 italic font-black text-[13px] tracking-[.08em]">
              {suffix}
            </div>
          )}
        </div>
      </div>
    );
  },
);
Field.displayName = "Field";
