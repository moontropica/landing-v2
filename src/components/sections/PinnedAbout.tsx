import * as React from "react";
import { gsap, ScrollTrigger, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { Stat } from "@components/ui/Stat";
import { Card } from "@components/ui/Card";

const beats = [
  {
    eyebrow: "Arena",
    title: "Action-packed game modes.",
    body: "Solo brawls, squad pushes, capture & control. Every match is a new compositional puzzle.",
  },
  {
    eyebrow: "Loot",
    title: "Items with weight.",
    body: "Earn rare gear that meaningfully alters your build. Tradeable, ownable, persistent.",
  },
  {
    eyebrow: "Progress",
    title: "Levels that show.",
    body: "Visible XP, seasonal rewards, and cosmetic milestones — your hours leave a mark.",
  },
];

export default function PinnedAbout() {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const slidesRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".pinned-slide");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          pin: true,
          scrub: 0.6,
          end: () => "+=" + window.innerHeight * (slides.length - 1),
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative h-[100svh] overflow-hidden bg-mt-ink-900"
      aria-label="What is Moon Tropica"
    >
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center">
        <span className="font-mono text-xs tracking-[.14em] uppercase text-mt-muted">
          What is Moon Tropica
        </span>
      </div>

      <div ref={slidesRef} className="h-full flex w-[300vw]">
        {beats.map((b, i) => (
          <article
            key={b.eyebrow}
            className="pinned-slide w-screen h-full flex items-center justify-center px-8"
          >
            <div className="max-w-3xl">
              <span className="font-mono text-xs tracking-[.18em] uppercase text-mt-purple-400">
                0{i + 1} · {b.eyebrow}
              </span>
              <h2 className="mt-4 italic font-black text-[clamp(36px,5.4vw,72px)] leading-[1] tracking-[-.02em]">
                {b.title}
              </h2>
              <p className="mt-6 text-lg text-white/85 max-w-xl font-bold">{b.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[min(960px,90%)]">
        <Card tone="dark" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="Release" value="TBA" />
          <Stat label="Platforms" value="PC · Mobile" />
          <Stat label="Genre" value="Battle arena" />
          <Stat label="Players" value="1–32" />
        </Card>
      </div>
    </section>
  );
}
