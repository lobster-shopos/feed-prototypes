# ShopOS Feed — Malaysia Airlines fork

A single-page prototype of the ShopOS Feed — URL onboarding, live setup, the feed,
and the Pro deck with a Signals column — branded for **Malaysia Airlines**
(malaysiaairlines.com, the Malaysia English site). No build step, no framework,
no dependencies.

Built from an earlier fork's code, which is the base prototype (the Google Sheet driven build) plus the looping video support from an earlier fork and the non-commerce changes that fork needed (a "catalog unit", a generic store connector). The git history starts fresh at this fork; none of the earlier brand history is carried.

## What an airline's catalog is

An airline has no product catalog, so this fork treats its **109 destination pages** as the
catalog (the setup line reads "109 destination pages"), with the three cabins (Economy,
Business, Business Suite), the fleet, MHupgrade, MHholidays packages and Enrich redemptions
as the product lines. Catalog cards are about routes, fare tiles and cabin photography;
storefront cards are about the destination, cabin and fleet pages.

## The brand, as read off the live site

- **Logo:** the real wordmark SVG from the site's own Vue bundle
  (`/etc.clientlibs/mh/clientlibs/clientlib-vue/resources/assets/logo-mh-*.svg`), fill
  `#0A468C`, saved as `assets/mh-logo.svg` and `mh-logo-white.svg`. The workspace mark
  (`mh-mark.png`) is the kite cut from that same path, white on brand blue.
- **Palette:** from the site's CSS tokens: `--primary-blue-base #0D4689`,
  `--secondary-blue-extradark #041049`, `--primary-blue-extralight #C7EAFB`,
  `--neutral-gold-base #A28833`.
- **Type:** IvyMode for display headlines (the spaced "TIME FOR" serif), Mundial for body
  (the computed font on the page), per the site's own @font-face. Neither is bundled; the
  brand kit card falls back to Cormorant Garamond or Georgia.
- **Stack:** Adobe Experience Manager (SPA, page models at `*.model.json`) with Adobe
  Launch and Analytics. Bookings run on separate subdomains (bookings., digital.,
  upgrade., holidays.). Tags on the homepage: Meta, Google (two GA4 tags, a leftover
  Universal Analytics tag, Google Ads, two Campaign Manager tags), TikTok, LinkedIn Insight,
  Taboola, Sojern, Yahoo Japan, Naver, Kakao, Amazon, Adform, Quantcast and Clarity.
  Every connector surface in the prototype (connect cards, Brand Memory row, rail flyouts,
  search) names Adobe Experience Manager, Adobe Analytics, Meta, Google, TikTok and LinkedIn.

## Imagery

Everything comes from malaysiaairlines.com's own DAM, in two registers:

- **Catalog / storefront** (`mh-cabin-*`, `mh-neo-*`, `mh-busan-*`, `mh-tile-*`): the
  site's destination and cabin photography as shot. Destinations are bright daylight
  landmark shots, wide, saturated sky and sea, no people. Cabins are lavender-lit A330neo
  and A350 renders. Cropped square, never recoloured.
- **Campaign / creative** (`mh-ad-*`, `mh-crew-*`): the "Time for" campaign system. One
  cabin crew member in the batik sarong kebaya, the destination behind her, a deep blue
  sky with batik floral line work in the corners, spaced IvyMode caps. Posters are kept
  whole and squared with their own blurred extension, so no headline or crew member is cut.

Video, each as webm (first) and mp4 with a poster, square and silent:
`mh-vid-ourmalaysia` (the eight 5-second National Day city films cut into 15 seconds),
`mh-vid-micromoments` (four of the six Pilot Parker page cabin films) and
`mh-vid-parker` (the 6-second Pilot Parker banner film).

## Content comes from the Brand Feeds sheet

Posts, deck cards and Brand Memory load from `data/feed-data.js`, written by
`tools/sync_sheet.py`. This fork reads one tab, **MalaysiaAirlines-1**
(`tools/sheet.config.json`). That tab does not exist in the Brand Feeds sheet yet: its
seed is `data/mh-seed.xlsx`.

    python3 tools/sync_sheet.py --file data/mh-seed.xlsx   # works today
    python3 tools/sync_sheet.py                            # once MalaysiaAirlines-1 is in the sheet

Import the seed as a new tab named `MalaysiaAirlines-1` in the Brand Feeds sheet
(https://docs.google.com/spreadsheets/d/1KKs-1639ns-eRO9PxOjMPK2vw_W9tFUmG0u3SZuwP6g)
and the live sync takes over.

## Run it locally

    python3 -m http.server 5173

Then open http://localhost:5173. Opening `index.html` directly also works.

## Deploying to Vercel

It is a static site: `npx vercel`, or import the repo at vercel.com with framework
preset "Other", no build command, output directory `.`.
