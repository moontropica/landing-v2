import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
let lenisRef: { raf?: (t: number) => void; scrollTo?: (...args: unknown[]) => void } | null = null;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function bindLenisToScrollTrigger(lenis: {
  on: (ev: string, cb: () => void) => void;
  raf: (t: number) => void;
  scrollTo: (...args: unknown[]) => void;
}) {
  if (typeof window === "undefined") return;
  registerGsap();
  lenisRef = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time: number) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export const getLenis = () => lenisRef;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };
