# ShopOS Feed — Angel One fork

A single-page prototype of the ShopOS Feed — URL onboarding, live setup, the feed,
and the Pro deck with a Signals column — branded for **Angel One** (angelone.in),
the Indian stockbroking and investing app. No build step, no framework, no dependencies.

Built from the base prototype (the Google Sheet driven build), with the generic code an earlier fork added on the same base: looping video posts, a catalog unit, a generic store connector, and the version switch hiding itself when there is one variant. The git history starts fresh at this fork; none of the the previous brand history is carried.

## Angel One is not a store

Angel One sells trading and investing, not products, and has no commerce platform. So:

- **The catalog is its instrument pages:** 5,877 stock pages, 7,266 mutual fund pages,
  1,292 IPO pages, 1,471 US stock pages and 243 ETF pages, counted from its sitemaps.
  The setup line reads "16,149 instrument pages".
- **Storefront means the website and app pages**: pricing, account opening, the homepage.
- **Creative is its social output**: the @angelone Instagram grid and the Angel One
  YouTube channel (IPO explainers, podcast clips, case studies, the SuperApp film).
- Every card is still a recommendation waiting for approval, per the feed's own rule.

## The brand, as read off the live site

- **Logo:** the real vector wordmark and logogram from Angel One's own CDN
  (`cdn.angelone.in/sparkweb2-O/images/angel-logo-sonic.svg` and `angel-logogram-sonic.svg`),
  saved as `assets/ao-logo.svg` and `assets/ao-mark.svg`, with PNG tiles rendered from them.
- **Palette:** logo blue `#2E51FF`, navy `#2A394E` (the site's text colour), orange
  `#FF7300` (its rupee and highlight accents) and pale blue `#F1F4FD` (its panels).
  The site's UI blue `#3F5BD9` sits alongside; the brand kit card shows the four above.
- **Type:** Barlow for headlines, Roboto for body, per the site's CSS. Barlow loads from
  Google Fonts for the brand kit sample; everything else falls back cleanly offline.
- **Stack:** Next.js with WordPress as the headless CMS (every image is served from
  `w3assets.angelone.in/wp-content`). Tag Manager `GTM-NNZ26S` carries 7 Meta pixels,
  7 Google Ads conversion IDs, GA4, Floodlight, Microsoft Ads, Quora and LinkedIn;
  CleverTap and AppsFlyer run for engagement and app attribution. Every connector surface
  in the prototype (connect cards, Signals sources, rail flyouts, search) names this stack.

## Imagery and video

Two registers, sourced and judged separately:

- **Catalog / storefront** (`ao-app-*`, `ao-og-sip`, `ao-3-8-crore`):
  Angel One's own product renders and banners from angelone.in, shown whole on their own
  pale ground. Flat, bright, device-framed app screens, no people.
- **Campaign / creative** (`ao-ig-*`, `ao-yt-*`, `ao-superapp-endcard`): the real
  @angelone Instagram posts and YouTube thumbnails. Presenter-led podcast covers with a
  yellow rupee headline, IPO Bulletin infographics with 3D revenue stacks, cinematic news
  scenes, and loud creator thumbnails. Portrait posts are squared with their own edge
  colour or a blurred extension, so no headline or disclaimer is cut.

Video: a 15-second square cut of the SuperApp film (the one embedded on angelone.in's app
page) and the opening of the NSE IPO short, each as webm (first) and mp4 with a poster frame.

## Content comes from the Brand Feeds sheet

Posts, deck cards and Brand Memory load from `data/feed-data.js`, written by
`tools/sync_sheet.py`. This fork reads one tab, **AngelOne-1** (`tools/sheet.config.json`).
That tab does not exist in the Brand Feeds sheet yet: its seed is `data/angelone-seed.xlsx`,
built by `tools/build_angelone_seed.py`.

    python3 tools/sync_sheet.py --file data/angelone-seed.xlsx   # works today
    python3 tools/sync_sheet.py                                  # once AngelOne-1 is in the sheet

Import the seed as a new tab named `AngelOne-1` in the Brand Feeds sheet
(https://docs.google.com/spreadsheets/d/1KKs-1639ns-eRO9PxOjMPK2vw_W9tFUmG0u3SZuwP6g)
and the live sync takes over.

## Run it locally

    python3 -m http.server 5173

Then open http://localhost:5173. Opening `index.html` directly also works.

## Deploying to Vercel

It is a static site, so there is nothing to configure: `npx vercel`, or push to GitHub
and import the repo at vercel.com (framework preset "Other", no build command, output `.`).
