# Van Heusen Innerwear — ShopOS Feed prototype

A brand fork of the ShopOS Feed prototype for **Van Heusen Innerwear** (@vanheuseniw), ABFRL's
innerwear line under the Van Heusen name — trunks, briefs, boxers, vests and thermals for men,
panties and bras for women, plus boys' and girls' basics, sold through
[vanheusenindia.abfrl.in](https://vanheusenindia.abfrl.in/). Forked from the base prototype
(no git history carried over, per standing rule for a first version).

## Brand facts this build is grounded in

Scope: Van Heusen Innerwear only, men-led. Every card (feed, deck, stories, Brand Memory, Signals)
is about this brand and nothing else.

- **Platform**: custom Next.js app on ABFRL's own commerce stack. No `products.json`, no
  Shopify. Every connector surface says "ABFRL Storefront".
- **Stack verified live in the browser**: Meta Pixel (681531495730498), Google Ads (AW-963407355,
  AW-11066085757), GA4, Microsoft Ads/Clarity, Adobe Launch, CrazyEgg, CleverTap (email, push, SMS,
  WhatsApp consent), Juspay payments, and a WhatsApp "Personal Shopper" line. Connectors shown:
  ABFRL Storefront, Meta Ads, Google Ads; Signals sources: ABFRL Storefront, CleverTap, WhatsApp
  Business, Customer support.
- **Palette** (read with `getComputedStyle` on live pages): `#0a0a0a` black, `#c59a37` gold (the
  BUY NOW text on black), `#b51212` red (discount badge). Story rings add white `#f4f4f4`.
- **Fonts**: Oswald headings, Inter body (computed on the live innerwear listing).
- **Logo**: the site's own `logo_VH_black.svg`, recoloured gold. `assets/vh-mark.svg` is the V
  monogram on black (rail badge, Brand Memory tile, favicon).
- **Catalog**: 603 styles on the men's Innerwear shop (the site's own "items found" count).
- **Recurring catalog issue**: assorted-print listings carry one boilerplate disclaimer instead of
  a real description. This drives the storefront cards.
- **Product lines in the cards**: AIR Series (Swift Dry mesh, ₹689), Colour Fresh, Modal Flexi
  Stretch boxer brief (₹489), Tactel trunk (₹669), Multi Printed Brief at 25% off (₹309 → ₹231).
  Every card image is the exact SKU its card names.
- **Instagram** (@vanheuseniw, 63k followers, bio "TIME TO UPGRADE") leans retail: highlights for
  Store Launch, Dept. Stores and In The News next to product-tech reels.

## Known limits (still open)

- Creative cards use the brand's own catalog photography (cropped square on the product), not
  campaign shoots. Instagram's full-size grid needs a login.
- No video. None was found for these products, so none is used.
- GEO scores, ad counts and Signals audience numbers are prototype figures, not data read from the
  brand's accounts.
- No git history yet, by design for a first version.

## Run it locally

Any static server works. From this folder:

    python3 -m http.server 5173

Then open http://localhost:5173

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle, behaviour at the
bottom. Brand assets are `assets/vh-*`. The rest of `assets/` is shared UI (agent avatars, story rings
recoloured to the brand palette, intro art regraded gold on black). All the previous brand files are deleted.
