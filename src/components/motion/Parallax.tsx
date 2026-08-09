import * as React from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";

export interface ParallaxProps {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

export function Parallax({ speed = 0.3, className, children }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
