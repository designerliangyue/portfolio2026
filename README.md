# Liang Yue — Product Designer Portfolio

A focused, three-case-study portfolio site built for Senior Product Designer applications in Europe. The narrative is intentionally tight: **cross-cultural scale → strategic foresight → enterprise depth**.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Fonts: Inter (sans), Instrument Serif (display), JetBrains Mono (mono)

## Aesthetic

A minimal Swiss-influenced grid system. Twelve-column layout, generous whitespace, system-grade monospaced labels, a single warm paper background, and rules instead of cards wherever possible. No emojis in the UI beyond intentional cover tiles.

## Project structure

```
app/
  layout.tsx         Root layout, fonts, nav, footer
  page.tsx           Home — hero, marquee, selected work, about teaser
  about/page.tsx     About page with timeline + principles
  work/[slug]/       Dynamic case study template
content/
  projects.ts        Source of truth for the 3 case studies
components/
  Nav.tsx
  Footer.tsx
  ProjectCard.tsx
  MetricsGrid.tsx
  SectionLabel.tsx
  Marquee.tsx
```

## Selected case studies

| # | Project | Why it's in the set |
|---|---------|---------------------|
| 01 | **Ignite** — SEA insurtech revamp | Cross-cultural research across 4 markets, regional design system |
| 02 | **AI Sales Co-Pilot** — Insurance, Lead role | Forward-looking AI strategy, human-in-the-loop principles |
| 03 | **CMB Private Cloud** — Enterprise banking | Design system, accessibility, dark mode craft |

Each case study includes a structured **Impact & signals** section with both concrete data (markets, interviews, modules) and visible placeholder KPIs (e.g. `+__%`) to be filled with verified launch data — kept visible to signal evidence orientation rather than vanity metrics.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All case study content lives in `content/projects.ts`. The shape is fully typed; adding a new project is just appending a new entry to the `projects` array.

To fill in real KPIs, find any `Metric` object with `placeholder: true` and update both `value` (the displayed figure) and `placeholder: false`.

### Cover images (swap files only)

1. Put your image in `public/images/{slug}/` as `cover.jpg`, `cover.png`, or `cover.webp`.
2. Slugs: `ignite`, `ai-copilot`, `cmb-cloud`.
3. Refresh the browser — home cards and case-study heroes update automatically.

See `public/images/README.md` for cover + process image filenames per project.

Process images appear inside each case study section (Research, Craft, etc.). Drop files using the names in `content/images.json`; missing files are hidden automatically.

## Build

```bash
npm run build
npm start
```

## Deployment

This is a standard Next.js 14 app and deploys cleanly to Vercel, Netlify, Cloudflare Pages, or any Node host. No environment variables required.
