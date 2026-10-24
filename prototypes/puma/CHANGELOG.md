# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-25 — Two new cards from the Drive shoots

- **Portugal kit** (creative, 4-slide carousel): the on-model Portugal home-jersey set, proposing the kit is sold on the name and number rather than the crest.
- **Aston Martin Speedcat posters** (ads, 3-slide carousel): the team's finished posters, proposing they run as one Meta carousel instead of three separate ads.
- The Aston Martin reveal film now opens on the shoe instead of 0.7 seconds of empty black.

## 2026-09-25 — Fix leftover Shopify strings PUMA never actually uses

Three visible spots still said "Shopify" even though PUMA runs on Salesforce Commerce Cloud: the Agents rail flyout ("Shopify store"), the Connectors rail flyout tile, and the command-palette connector index. Fixed to read "Commerce Cloud", matching what the Signals row and the Brand Memory connect card already say. Checked the rest of the codebase: the internal object keys (`CONNECTS.shopify`, `srcState.shopify`, `connect:'shopify'`) are just identifiers, never rendered — their actual `name`/`title`/`desc` fields already said Commerce Cloud/Salesforce, so those were left alone.

## 2026-09-25 — Three cards and a story now use ShopOS's own PUMA shoots

The team's PUMA Drive folder holds three finished shoots: the Speedcat Aston Martin F1 team edition (stills, eight ad posters, a reveal film and an on-foot film), a Palermo street-styling set, and a Portugal home-jersey set. The cards whose subject matches now use them instead of PUMA's catalog shots.

- **Drop reveal** (creative): now the Speedcat Aston Martin reveal film. The card was about Homura OG; it now proposes treating the Aston Martin Speedcat as a release, since that is the drop the film was made for.
- **Two ways to wear** (creative): now a two-slide carousel of Palermo worn two ways on the street, a leather jacket and dark denim, then a white tee and chinos. The title says Palermo rather than Palermo Leather, because the shoot is the suede green-and-yellow Palermo.
- **Three Speedcat creatives past frequency 4** (ads): now plays the on-foot Aston Martin Speedcat film, which is the fresh cut the card proposes rotating in.
- **Popular ads story**: the Speedcat and Palermo slides now use the on-foot Speedcat frame and the Palermo street shot.
- One session in history was renamed from the Homura reveal to the Aston Martin Speedcat reveal to match.

**Not used yet.** The brown heritage Speedcat set, the eight Aston Martin posters, the Portugal jersey set and the Bengaluru FC jersey shoot. No card is about football or the heritage racing story, so these need a new card, not a swap. The Speedcat on-street card and the Suede card keep PUMA's own films, because neither shoot matches what those cards propose.

## 2026-09-24 — README identifies this as the PUMA fork

The README described a generic ShopOS Feed prototype with no brand named anywhere in it. Now it says up front this is the PUMA India fork (in.puma.com), names the palette and asset sources, points to `CHANGELOG.md` for the full history and open items, and notes the untouched older PUMA build at `../feed-puma-oldsot/`.

## 2026-09-23 — Four cards now play PUMA's own video

The feed can now play video in a card, and four PUMA cards use it, all pulled from in.puma.com's own product pages rather than stills.

- **Speedcat** (creative): the on-model Speedcat film, orange set, "true motorsport DNA".
- **Palermo** (the full-price ad): the on-model Palermo film with PUMA's own callouts (certified leather, traction, archival design).
- **Suede** (creative): PUMA's Suede campaign film, street and skate footage.
- **Velocity NITRO 4** (ads, in the pro deck): the NITRO 4 CGI running film.

Each video loops silently, starts when the card scrolls into view, and shows a still first frame until it loads. They are trimmed to about 15 seconds and total roughly 7 MB.

**Known limits.** PUMA only publishes video for a few products and colourways, so the others keep their stills: Electrify and Maxima NITRO, Homura, Palermo Leather and the Palermo colourway carousel. The Palermo video shows the green colourway, not the bronze the card used before. The site also carries HYROX training films, but no card covers HYROX, so they weren't used.

## 2026-09-21 — PUMA India fork, rebuilt on the current base code

The folder already held a PUMA build, but it came from a different pipeline, sat on a prototype base roughly 45 commits old, and was written for us.puma.com. It is kept, untouched, as `feed-puma-oldsot/` next door. This build starts again from the base prototype and re-applies PUMA content on top, so the fork carries the current collapsed and expanded left rail, the reworked top bar, the three-slide intro card, the peeking unrevealed cards and the GEO object, none of which the old build had.

**The brand.** Everything is keyed on `in.puma.com`. Brand Memory, the setup rail, the workspace badge, the deck sidebar and the welcome line all read PUMA. The brand kit card carries the PUMA cat, black and off-white read off the live site, and FF DIN for PUMA as the typeface. The red in the kit is the brand red by eye, not sampled from the site, so check it against whatever PUMA's own guideline says before this goes in front of them.

**The commerce stack, which is the part worth arguing about.** in.puma.com runs Next.js over Salesforce Commerce Cloud, not Shopify. There is no `products.json`. So the Shopify connector is gone everywhere it appeared: the feed connect card, the Signals source row and the Brand Memory connect row now all say Salesforce Commerce Cloud, with a neutral mark rather than Shopify's. Storefront recommendations are written as catalog and PDP work that lands through that stack. Anything in the prototype that assumed a Shopify field has been reworded to say catalog field.

**The twenty-two cards, all rewritten, all read off the live store.** Every one is a recommendation the agent is asking permission for, in line with the standing rule. What the store actually shows: 1,049 products in men's new arrivals alone, 79 Speedcat listings, Palermo at ₹6,999 and Velocity NITRO 4 at ₹11,999, and — the finding the cards keep circling — an automatic 25% at checkout on very nearly everything, which means the marked price and the paid price almost never match.

- **Catalog.** Twelve products disapproved on Meta over one field; explain what NITRO foam does on the page where people decide.
- **Creatives.** Shoot Speedcat on the street rather than on white; style the Suede as current streetwear rather than archive nostalgia; shoot the NITRO plate instead of another runner mid-stride; carry Palermo Leather on styling; treat the Homura OG as a release rather than another row in new arrivals; fourteen concepts in, two worth your time.
- **Ads.** Run Palermo at full price for a week before the next 25% goes on; Velocity NITRO 4 is carrying running and deserves more budget; three Speedcat sets are past frequency 4.
- **Storefront.** The Palermo description reads like a spec sheet; thirty-one rewritten descriptions waiting on approval; six running listings missing their size and fit block.
- **Visibility.** PUMA wins its own name and loses the question a buyer actually asks; the leaderboard that flatters you measures nine brands while marketplaces hold the real shelf; the running guides answer the exact questions the engines are asked and nothing links them to the shoes.

**Imagery.** Nineteen product and on-model shots pulled from images.puma.com at 1000px — Speedcat, Palermo in four colourways, Suede, Velocity and Electrify NITRO, Maxima Pro, Homura, BMW M Motorsport Caven. The on-model shots carry the creative cards, the stories and the credits and jam modals. Every the previous brand image has been deleted from the folder.

**Known limits.** The GEO numbers, the ad metrics and the Signals customer counts are placeholders shaped like PUMA's situation, not measured PUMA data — the discount finding and the catalog and franchise figures are the parts read off the live site. The three intro-card illustrations are still graded to the previous brand green and need a pass. The Signals journeys are rewritten for footwear but keep the the previous brand eligibility counts. Creative cards reuse packshots as stand-ins for banners that do not exist yet. And the introductory set of posts is still open: this is a full first pass, not the agreed opening sequence.
