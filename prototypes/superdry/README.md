# Superdry Feed — prototype

A single-page prototype of the ShopOS Feed, rebranded for **Superdry** (superdry.in).
Forked from the base prototype (the standing base fork). URL onboarding, live setup, the feed,
and the Pro deck with a Signals column. No build step, no framework, no dependencies.

## Brand

- Site: https://superdry.in — runs on **Fynd Platform** (Reliance's unified-commerce
  stack, company id 46), not Shopify. No `/products.json`, no Next.js `__NEXT_DATA__`.
- Ad stack: Google Tag Manager (`GTM-55MBBMF`) fires both the **Meta pixel** and
  **Google Ads** conversion tags — confirmed from the live GTM container payload, not
  guessed.
- Palette: `#FF1E00` (the red of the Superdry wordmark and favicon, sampled from the
  logo files themselves), `#0E0E0E` (site chrome) and `#FFFFFF`. The site's theme also
  defines an orange `--accentColor: #e87a1e`, but that is a Fynd theme token, not the brand.
- Type: Helvetica Bold headings, Poppins body (both are used live on superdry.in).
- Logo: the real wordmark and favicon from the site's own CDN.
- Campaign imagery: the site's own homepage edits (AW'26, HIM, HER, Top Wear, Bottomwear).
  Feed cards use the 700x800 mobile cuts squared to 1080x1080 so headlines are never cut;
  the 2:1 modal heroes use the 1920x960 desktop cuts; the story viewer uses the full mobile cut.
- Catalog imagery, product names, prices and size availability are parsed from the live
  collection pages' own listing data (`items[]`), so every name, price and "only 2XL left"
  claim on a card matches the SKU in its image.
- Product count 5,461 = the Men's (3,381) + Women's (2,080) collection totals.
- The Google Drive folder shared for this brand (`SuperDry`) is currently empty — no
  campaign assets were supplied there as of this build.

## Content: hand-authored, not yet in the Brand Feeds sheet

The base fork's content pipeline reads from a shared "Brand Feeds" Google Sheet
(`tools/sync_sheet.py` + `tools/sheet.config.json`). For this build, `data/feed-data.js`
was **hand-authored** in the exact shape `sync_sheet.py` produces (tab `Superdry-1`),
since no Superdry tab exists in that sheet yet. To move it onto the live pipeline:
add a `Superdry-1` tab to the Brand Feeds sheet with this same content, then run

    python3 tools/sync_sheet.py

which will overwrite `data/feed-data.js` from the sheet instead.

## Run it locally

    python3 -m http.server 5173

Then open http://localhost:5173

## Known limits (v1)

- No product/campaign video wired in — a real product-detail route on superdry.in
  needs the client-rendered app to resolve (curl alone returns the wrong/unrelated
  product), which this build didn't attempt; left as an open item, not faked.
- No AI-visibility (GEO) numbers — rather than invent a score, the one visibility
  card in this build proposes running a real audit instead.
The fork-lineage `origin` has been removed; no GitHub remote is set.
- Signals column counts (customers, orders, journeys) are illustrative placeholders, as in
  every fork; the products and copy in them are Superdry's.
