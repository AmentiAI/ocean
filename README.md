# Ocean State Marketing

Next.js marketing site for **Ocean State Marketing** — SEO, web design, and Google Ads for Rhode Island, Connecticut, and Massachusetts.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Static SEO pages for services, cities, and keyword landings

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## SEO structure

- `/seo`, `/website-design`, `/google-ads`, `/local-seo` — service pages
- `/locations/[city]` — local market pages (RI / CT / MA)
- `/[keyword-slug]` — keyword landing pages (e.g. `/seo-rhode-island`)
- `/blog` — content hub
- `/sitemap.xml` + `/robots.txt` — generated

Edit data in `src/lib/locations.ts`, `src/lib/keywords.ts`, and `src/lib/site.ts`.
