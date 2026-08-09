import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface FadeInProps {
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
}

export function FadeIn({ delay = 0, y = 24, className, children }: FadeInProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
