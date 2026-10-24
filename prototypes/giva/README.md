# GIVA Feed — ShopOS prototype

The ShopOS Feed prototype, rebranded for **GIVA** (giva.co): URL onboarding, live setup,
the feed, and the Pro deck with a Signals column. No build step, no framework, no dependencies.

## Brand

- **Brand:** GIVA, everyday fine jewellery in 925 silver, gold and lab-grown diamonds (Bengaluru, founded 2019)
- **Stack read off the live site:** Shopify (giva-jewelry.myshopify.com, public `products.json`), Meta pixel and Google Ads tag via GTM, Gokwik checkout
- **Palette:** `#BC4263` deep rose, `#E9718B` pink, `#ECD9C2` sand, `#121212` ink (computed styles on giva.co)
- **Type:** Lato, the face giva.co loads for headings and body
- **Logo:** the wordmark from giva.co (`logo__3.png`), recoloured white on the deep rose

## Assets

- `assets/gv-creative-*`, `gv-story-*`, `gv-freq-bracelet`, the modal heroes: the ShopOS shoot for GIVA
  (Google Drive "Giva" → New Batch-3). `assets/v2/` and `assets/v3/` hold alternate frames of
  the same piece from the same shoot, behind the prototype's v1/v2/v3 asset switch.
- `assets/gv-leaf-bracelet.*`, `assets/gv-jhumki.*`: two product films from the same Drive
  (Final videos 14/01/26), square 720px, no audio, webm (VP9) + mp4 (H.264) + poster.
- `assets/gv-deer-*`, `assets/gv-anklet.jpg`: catalog photography from GIVA's own Shopify CDN.

## Run it locally

Any static server works. From this folder:

    python3 -m http.server 5173

Then open http://localhost:5173 and press Enter on the URL screen (it defaults to giva.co).

Or with Node:

    npx serve .

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle,
behaviour at the bottom. Agent shapes and photography are in `assets/`.
`CHANGELOG.md` is the human-readable log of what changed and why.
