# Mercury — Slots & Casino Site

A clone-inspired marketing site for a fictional casino/slots review portal, built in the style of the Mercury WordPress theme (project.mercurytheme.com/014/). All copy is original.

## Stack

- React 18 + Vite + TypeScript
- Tailwind v4 with `@theme inline` design tokens
- Wouter routing
- Framer Motion animations
- Lucide icons
- All assets sourced from stock photo library under `attached_assets/stock_images/`

## Pages

- `/` Home — hero, slot grid with search/filter/sort, provider marquee, stats counters, features grid, mobile feature, top casinos, how it works, news preview, testimonials, CTA
- `/features` Features — 22 feature blocks, affiliate workbench, comparison table, CTA
- `/casinos` Casinos — sticky filter bar, six expandable casino cards, "how we review" steps, FAQ
- `/bonuses` Bonuses — sticky type filter, copyable promo codes, bonus types explainer, wagering calculator
- `/slots-news` Slots News — featured story, grid of articles, trending topics, newsletter
- `/gambling-news` Gambling News — industry stats, articles + sidebar (most read, by region, picks), market movers table
- `/buy` Buy Mercury — three pricing plans, feature grid, testimonials, FAQ, money-back guarantee

## Theme tokens (in `src/index.css`)

- Mercury red: `hsl(350 88% 57%)`
- Mercury purple: `hsl(243 35% 28%)`
- Fonts: Roboto (body) + Montserrat italic black (display headings)
- Custom animations: `marquee`, `pulseGlow`, `shine`, `floatY`, `reelSpin`

## File structure

```
src/
├── App.tsx                 # router with all 7 routes wrapped in Layout
├── index.css               # Tailwind + Mercury palette + custom animations
├── components/
│   ├── Header.tsx          # sticky red nav with badges + search modal
│   ├── Footer.tsx          # purple footer with newsletter
│   ├── Layout.tsx
│   ├── GameCard.tsx        # animated game tile with hover demo button
│   ├── Marquee.tsx         # provider names scroll strip
│   ├── SectionTitle.tsx
│   └── CountUp.tsx         # animated number counter on scroll
├── lib/
│   └── data.ts             # games, providers, casinos, bonuses, articles
└── pages/                  # Home, Features, Casinos, Bonuses, SlotsNews, GamblingNews, BuyMercury, not-found
```

## Notes

- The artifact is registered at `artifacts/mercury` with previewPath `/`.
- Image imports use the `@assets` Vite alias which resolves to `/attached_assets`.
- All content (casino names, slot titles, news articles, testimonials) is invented to avoid copyright issues with the original Mercury WordPress theme content.
