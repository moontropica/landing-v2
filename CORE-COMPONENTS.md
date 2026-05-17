# Core Components — Moon Tropica / CAH Landing

## Project Structure

```
cah-landing-2/
├── CAHV2/          # Design system v2 prototypes (standalone HTML)
├── Legacy/         # Original Webflow-built production site
├── New Design/     # Design system reference & mockups
└── New/            # Active rewrite: Astro + React + Tailwind + Three.js
```

---

## `New/` (Active) — Astro + React + Tailwind

### UI Components (`src/components/ui/`)

| Component | File | Description |
|-----------|------|-------------|
| **Alert** | `Alert.tsx` | Alert banners (warn / danger / info tones) |
| **Badge** | `Badge.tsx` | Labels (new / gold / mint / coral / muted / solid) |
| **Button** | `Button.tsx` | Button variants (primary / play / gold / outline / ghost / danger) |
| **Card** | `Card.tsx` | Card container (default / purple / dark) |
| **Field** | `Field.tsx` | Form input with label, MAX button, optional suffix |
| **Progress** | `Progress.tsx` | Progress bar (gold / purple / mint) |
| **Stat** | `Stat.tsx` | Stat display: label + value + optional delta |

### Section Components (`src/components/sections/`)

| Component | File | Type | Description |
|-----------|------|------|-------------|
| **Hero** | `Hero.astro` | Astro | Full-screen hero with 3D scene, badge, heading, CTA buttons |
| **PinnedAbout** | `PinnedAbout.tsx` | React | Horizontal pin-scroll with 3 info slides + stat card (GSAP) |
| **Showcase** | `Showcase.astro` | Astro | 3-column "Pillars" grid (Combat / Worldbuilding / Economy) |

### 3D Components (`src/components/three/`)

| Component | File | Description |
|-----------|------|-------------|
| **HeroScene** | `HeroScene.tsx` | React Three Fiber 3D scene (planets, stars, ring) |

### Motion / Layout (`src/components/`)

| Component | File | Description |
|-----------|------|-------------|
| **Nav** | `layout/Nav.astro` | Sticky top nav with nav links |
| **Footer** | `layout/Footer.astro` | Site footer with links |
| **FadeIn** | `motion/FadeIn.tsx` | Scroll-triggered fade-in (motion library) |
| **LenisProvider** | `motion/LenisProvider.tsx` | Smooth scroll (Lenis) + GSAP ScrollTrigger binding |
| **Parallax** | `motion/Parallax.tsx` | Scroll-based parallax effect (motion library) |
| **Base** | `layouts/Base.astro` | Root HTML layout: meta tags, fonts, Nav, Footer, LenisProvider |

### Utilities

| File | Description |
|------|-------------|
| `lib/cn.ts` | `clsx` + `tailwind-merge` for class merging |
| `lib/motion.ts` | GSAP + ScrollTrigger initialization, Lenis integration |
| `styles/globals.css` | Tailwind v4 `@theme` design tokens + base styles |

### Pages

| File | Description |
|------|-------------|
| `pages/index.astro` | Single landing page (Hero → PinnedAbout → Showcase) |

---

## `CAHV2/` — Standalone HTML Prototypes

| File | Lines | Features |
|------|-------|----------|
| `index.html` | 679 | Base: sticky nav, video hero, sections, newsletter form |
| `index-2.html` | 843 | Adds scroll reveal, count-up, draw-line headers, orb-drift, pulse glow |
| `index-3.html` | 781 | Adds Lottie crown animation, hover tilt cards, btn-shine, staggered reveal |

All embed the **CAH Design System** tokens inline (`--mt-{purple,gold,ink}-*`) and reference assets from `../Legacy/`.

---

## `New Design/` — Design System Reference

| File | Description |
|------|-------------|
| `style-guide.html` | Canonical design system: tokens, buttons, cards, badges, alerts, fields, tables, typography, grids |
| `table-example.html` | Table component (light + dark themes) |

---

## `Legacy/` — Original Webflow Site

| File | Description |
|------|-------------|
| `index.html` | Homepage |
| `branding.html` | Branding kit |
| `contact.html` | Contact page |
| `faq.html` | FAQ |
| `gallery.html` | Art gallery |
| `create-account.html` | Sign-up |
| `404.html` / `401.html` | Error pages |
| `hidden/careers.html` | Careers listing |

### Key Files Referenced by `CAHV2/`

| Path | Contents |
|------|----------|
| `documents/crown2.json` | Lottie crown animation |
| `documents/MT_spinning_coin-2.json` | Lottie spinning coin |
| `images/` | 214 images (backgrounds, artwork, icons) |
| `videos/Dataroom4-transcode.mp4` | Hero background video |

### CSS

| File | Lines | Role |
|------|-------|------|
| `css/moontropica.webflow.css` | 3496 | Main site stylesheet |
| `css/webflow.css` | — | Webflow framework |
| `css/normalize.css` | 355 | CSS reset |

---

## Design Tokens (shared across all versions)

```css
--mt-purple-400: #b06ee2;
--mt-purple-500: #9a4fd4;
--mt-purple-600: #7a3aba;
--mt-purple-700: #5b2d90;
--mt-purple-800: #3d1f63;
--mt-purple-900: #2a1447;
--mt-ink-900: #0f0f12;
--mt-ink-800: #17171c;
--mt-ink-700: #202027;
--mt-ink-600: #2b2b34;
--mt-ink-500: #3a3a46;
--mt-gold-500: #c5a93d;
--mt-gold-400: #d9bf52;
--mt-gold-300: #f5c460;
--mt-gold-200: #ffe066;
--mt-yellow: #ffdd00;
--mt-mint: #5de3c4;
--mt-coral: #ff6b6b;
--mt-white: #ffffff;
--mt-off-white: #f2ecff;
--mt-muted: #8a8195;
--mt-disabled: #4a4653;
```
