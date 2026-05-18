# Moon Tropica — Landing Page Suite

Brand landing pages for the Moon Tropica / CAH ecosystem.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Main landing: hero video, live token stats, blog feed, Lottie crown animation, community carousel, newsletter signup |
| Gallery | `gallery.html` | 15 game screenshots with lightbox (keyboard nav, counter) |
| Branding | `branding.html` | Logo carousel, asset grid with PNG/SVG/AI downloads, dark/white previews |
| FAQ | `faq.html` | 6-category accordion with real-time search, keyboard bindings table |

## Tech

- Static HTML — no build step, no framework
- Inline `<style>` CSS — no external stylesheets
- Mulish + JetBrains Mono via Google Fonts
- DexScreener API — live Market Cap, Price, Liquidity, 24h Volume
- WordPress REST API — 5 latest blog posts from `blog.moontropica.com`
- Lottie — crown animation via `assets/crown2.json`
- Mailchimp — newsletter form posts to `moontropica.us8.list-manage.com`

## External Links

- Steam: `https://store.steampowered.com/app/3664890/Moon_Tropica/`
- $CAH (ETH): `0x8e0E57DCb1ce8d9091dF38ec1BfC3b224529754A`
- Uniswap: `https://app.uniswap.org/#/tokens/ethereum/...`
- CoinMarketCap: `https://coinmarketcap.com/currencies/moon-tropica/`
- Account creation: `https://homaccount.moontropica.com/`
- Litepaper: `https://docs.moontropica.com/`

## Local Dev

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

No build step — just serve the root directory.

## Deploy (Vercel)

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Settings auto-detect from `vercel.json`:
   - **Framework Preset:** Other (static HTML)
   - **Output Directory:** (root — already set)
4. Deploy

No configuration needed — `vercel.json` is already in the repo.

## Structure

```
.
├── index.html          # Home page
├── gallery.html        # Gallery page
├── branding.html       # Branding assets page
├── faq.html            # FAQ page
├── vercel.json         # Vercel config
├── assets/             # Images, videos, Lottie JSON, docs, community avatars
│   ├── community/      # Community avatar images (visual-unlimited card)
│   ├── gallery/        # Gallery images (Hero-* + bg-*)
│   └── docs/           # Reference docs (multiplayer.pdf)
└── branding/           # Brand asset files (PNG, SVG, AI)
```

## Notes

- All CSS is inline in `<style>` tags — no external `.css` files.
- All asset paths are relative (`assets/...`, `branding/...`) — deploys as a self-contained folder.
- Hamburger menu visible at all viewport sizes.
- Contact link opens a math-challenge modal (anti-scrape).
- Blog posts load live from WordPress API (skeleton loader while fetching).
- Token data loads live from DexScreener on page load.
