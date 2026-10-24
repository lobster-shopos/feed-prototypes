# ShopOS Feed — Armani Exchange India fork

A single-page prototype of the ShopOS Feed — URL onboarding, live setup, the feed,
and the Pro deck with a Signals column — branded for **Armani Exchange India**
(armaniexchange.in). No build step, no framework, no dependencies.

Built from the base prototype (the Google Sheet driven build), with the generic fixes an earlier fork added on top of it: looping video posts, a neutral "store platform" connector for unknown brands, the catalog unit, and hiding the version switch when a brand has one variant. The git history starts fresh at this fork; none of the the previous brand history is carried.

## The brand, as read off the live site

- **Logo:** the real A|X mark and ARMANI EXCHANGE wordmark paths, lifted from the SVGs
  on Armani's own Armani Exchange pages (armaniexchange.in only ships a PNG).
  `assets/ax-logo.svg` is the stacked lockup, `ax-mark.png` the workspace badge,
  `ax-logo-tile.png` the Brand guidelines tile.
- **Palette:** the site is strictly monochrome: black `#000000`, white `#FFFFFF`,
  `#F5F5F5` and grey `#555555` (computed styles on the live pages). The pale sky
  `#B0BBCF` used on the story rings and intro card wash is taken from the FW26 film,
  not the site, so it is chrome only and not listed as a brand colour.
- **Type:** Aktiv Grotesk for headings and body, headings in upper case at weight 900.
  Not bundled; the brand kit card falls back to Helvetica Neue / Arial.
- **Stack:** Fynd Commerce (the Reliance storefront platform: Fynd theme, Fynd CDN and
  the Fynd storefront API), GoKwik checkout, Algolia search. Tag Manager carries the Meta
  pixel and Google Ads conversion tags; MoEngage handles engagement. Every connector
  surface in the prototype (connect cards, Brand Memory connect row, Signals sources,
  rail flyouts, search) names this stack. No Shopify anywhere.

## Imagery

Two registers, sourced separately:

- **Catalog / storefront** (`ax-jacket-*`, `ax-sale-*`, `ax-vid-d02`): armaniexchange.in's
  own product photography (Fynd CDN) plus the matching views from Armani's global library
  for the same style code. Bright off-white seamless, flat even light, ghost flats front and
  back, on-model front, back and side, tight chest crop, macro detail on black, one full
  styled look; young models, neutral expression, true colour.
- **Campaign / creative** (`ax-cross-*`, `ax-uni-*`, `ax-detail-*`, `ax-vid-fw26`): Armani's
  FW26/27 Crossover and Uniform campaign from armani.com. Soft grey seamless, soft
  directional light, muted chocolate, black, cream and indigo, collegiate crest graphics,
  candid off-balance poses, 4:5 frames squared by hand so no head or product is cut.

Video: the 15-second FW26 campaign film (the same film armaniexchange.in plays in its
homepage header), cut square and trimmed before its fade to black, and Armani's turnaround
film for the Black D02 T-Shirt, padded square on the studio white. Each ships as webm
(listed first) and mp4, muted, with a poster frame.

## Content comes from the Brand Feeds sheet

Posts, deck cards and Brand Memory load from `data/feed-data.js`, written by
`tools/sync_sheet.py`. This fork reads one tab, **ArmaniExchange-1**
(`tools/sheet.config.json`). That tab does not exist in the Brand Feeds sheet yet: its seed
is `data/armani-exchange-seed.xlsx`.

    python3 tools/sync_sheet.py --file data/armani-exchange-seed.xlsx   # works today
    python3 tools/sync_sheet.py                                         # once the tab is in the sheet

Import the seed as a new tab named `ArmaniExchange-1` in the Brand Feeds sheet
(https://docs.google.com/spreadsheets/d/1KKs-1639ns-eRO9PxOjMPK2vw_W9tFUmG0u3SZuwP6g)
and the live sync takes over.

## Run it locally

    python3 -m http.server 5173

Then open http://localhost:5173. Opening `index.html` directly also works.

## Deploying to Vercel

It is a static site: `npx vercel`, or import the repo at vercel.com with framework
preset "Other", no build command, output directory `.`.
