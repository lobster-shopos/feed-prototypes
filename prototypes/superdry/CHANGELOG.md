# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-25 — Superdry: on-brand colour, uncut imagery, verified copy, no variant switch

**Why this entry exists:** the first Superdry pass shipped with real mistakes, caught in review. This fixes them. The entry below this one is left as written, but several of its claims were wrong; the corrections are listed here.

**Brand colour:** the palette used the site's orange theme token (#e87a1e). The actual brand red, sampled from the wordmark and favicon, is #FF1E00. Palette is now #FF1E00 / #0E0E0E / #FFFFFF, applied to the Brand guidelines card, the story rings, the story slide colours and the intro cards.

**Story rings and intro cards:** the four story-*.svg rings were still the previous brand's green and terracotta, and the three intro images plus their wash colours were still the previous brand's green glow. All now red, black and white.

**Imagery:** the first post used the 1920x960 desktop banner, so the square card cut its headline. Every campaign card now uses the site's 700x800 mobile cut, squared to 1080x1080 by hand so the SUPERDRY wordmark and headline stay whole (on the Bottomwear Edit the wordmark is moved down a few pixels to fit both it and the headline). Product cards use square crops that keep the head and the product in frame. The modal heroes use the 2:1 desktop banners, which fit those slots.

**Copy corrections:** product names and prices were attributed to the wrong images (for example "Code Tech Relaxed Zip" is actually TECH RELAXED ZIP HOODIE, and the Carbon Ultra Track Top is Rs 13,999 to Rs 6,299, not Rs 8,999 to Rs 4,049). The GTIN card and the "Meta feed still points at the pre-sale set" card had no evidence behind them and are gone. Every card now comes from the collection pages' own listing data: the price table, the Dry Hoodie showing NEW and 55% OFF at once, three top-seven styles down to XL or 2XL only, and two Skinny Denims listings shot on mustard while the rest are on grey.

**Previous-brand leftovers the first pass missed:** the rail badge label, the welcome headline, the history list, the ads and catalog loading lines, and the Signals messages were still the previous brand. An empty URL field would also have opened the previous brand's store. All now Superdry. A whole-file search for the previous brand and its product words returns nothing.

**Variant switch:** hidden when the data has only one feed variant, which this fork does.

**Repo cleanup:** removed 78 files inherited from the previous brand that nothing references any more: its product and campaign images (including the v2 and v3 image sets), the old Shopify logo, a stale index.html backup and an old screenshot.

## 2026-09-25 — Forked and rebranded for Superdry (superdry.in)

**What changed:** this fork is now Superdry, not the previous brand. Real facts pulled from the live
site, not guessed: commerce runs on **Fynd Platform** (not Shopify — no products.json,
no Next.js data blob, company id 46 on cdn.fynd.com), and the ad stack is **Meta Ads +
Google Ads**, both confirmed firing through the site's own Google Tag Manager container
(GTM-55MBBMF). Palette (`#0E0E0E` / `#e87a1e` / `#585555`), fonts (Helvetica Bold
headings, Poppins body) and the logo/favicon mark are all read off the live site.

**Content:** hand-authored an 18-post `Superdry-1` tab in `data/feed-data.js`, in the
exact shape `tools/sync_sheet.py` generates, since no Superdry tab exists in the shared
Brand Feeds sheet yet (`tools/sheet.config.json` now points only at `Superdry-1`).
Real products/prices from live superdry.in collection pages: Code Tech Relaxed Zip
(Rs 7,370 -> Rs 2,948 / Rs 2,579, 60-65% off) and Carbon Ultra Track Top (Rs 8,999 ->
Rs 4,049, 55% off), both in Sweatshirts & Hoodies. Real campaign banners (AW26 Master,
Bottomwear Edit) and a real on-model Skinny Denims shot pulled straight from the site's
own CDN. The Google Drive folder shared for this brand ("SuperDry") was checked and is
currently empty.

**Connector identity propagated everywhere it's hardcoded**, not just one place: the
onboarding Brand Memory connect card, the Signals source row, the left-rail Agents and
Skills/connectors flyouts, the ad/commerce spotlight index array, the deck column
connect card, the catalog-sync loading copy, and the `srcState`/`signalsLive` gating —
all now say Fynd Platform instead of Shopify. Grepped the whole file afterward for any
leftover "shopify" or previous-brand string; none left.

**Chrome surfaces that are easy to miss, fixed:** the workspace rail badge / brand mark
now uses the real Superdry favicon mark (was a leftover the previous brand image); the Credits and
Jam modal hero images now use the real AW26 / Bottomwear Edit banners; the "Popular ads"
story slides and the "Trends" story slides (previously hardcoded the previous brand gut-health/
protein copy and images) are now real Superdry findings and imagery.

**Verified:** extracted and syntax-checked every inline `<script>` block and
`data/feed-data.js`; served the fork locally and drove it with headless Playwright —
walked the onboarding Brand Memory tabs (Brand/Ads/Storefront/Visibility), confirmed
"Superdry" and "Fynd" render and no "the previous brand" text remains, confirmed zero real broken
images (the two `naturalWidth===0` hits are dynamic template slots that populate later,
not missing assets) and zero console/page errors, and screenshotted the AW26 creative
card rendering with the real copy and image.
