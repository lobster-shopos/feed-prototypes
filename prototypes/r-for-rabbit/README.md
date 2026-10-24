# R for Rabbit — ShopOS Feed prototype

The ShopOS Feed, set up for **R for Rabbit** (rforrabbit.com), an Indian baby-gear brand: car seats, strollers, tricycles, diapers, feeding and apparel. Single-page prototype: URL onboarding, live setup, the feed, and the Pro deck with a Signals column. No build step, no framework, no dependencies.

Type nothing (or `rforrabbit.com`) on the URL screen to run the R for Rabbit build.

## Brand kit

- Logo: `assets/rfr-logo.png` (full lockup), `assets/rfr-brand-mark.jpg` (rabbit mark, used for the workspace badge)
- Palette, read off the live Shopify theme: olive `#95a13b` (primary button), red `#990000` (sale tag), white `#ffffff`
- Type: Nunito for headings and body, loaded from Google Fonts

## Stack (as detected on the live site)

Shopify (`rforrabbit1.myshopify.com`), Meta Pixel, Google Ads (`AW-959343937`), CleverTap for CRM/engagement. The connector surfaces say Shopify, Meta Ads and Google Merchant Center; the Signals email source is CleverTap.

## Where the content comes from

- Catalog facts are real, from the live `products.json` (984 products, 1,682 variants): no GTINs on any variant, 309 titles over 90 characters, 888 variants with no shipping weight, apparel the largest category.
- Company facts are from the brand's own About page (founded 2014, 200+ people, 2,000+ offline partners, 5M+ parents).
- Catalog/storefront images are from the brand's Shopify CDN. Campaign/creative images and both videos are from the brand's shared Google Drive.
- **Illustrative, not real:** the AI visibility numbers (the `GEO` object), ad spend and frequency figures, Signals customer counts, and story stats. Swap in real numbers when an audit or account access exists.

## Run it locally

Any static server works. From this folder:

    python3 -m http.server 5173

Then open http://localhost:5173

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle, behaviour at the bottom. Posts are the `POSTS`, `TEXT_POSTS` and `DECK_ONLY` arrays; the Brand Memory cards are `RFR_ABOUT`; AI visibility numbers are the `GEO` object. Card titles listed in `CATALOG` must match their post titles exactly.

Video posts use `video:{ webm, mp4, poster }` on a post (webm listed first so headless Chromium can play it).

## Deploying to Vercel

It is a static site, so there is nothing to configure:

    npx vercel

Or push to GitHub and import the repo at vercel.com — framework preset "Other", no build command, output directory `.`.
