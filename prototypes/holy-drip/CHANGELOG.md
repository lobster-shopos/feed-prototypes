# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-28 — Two content fixes from the VP feedback call

- **Voice and tone card (Brand Memory / About).** Was quoting Cloud Tee product copy ("Heavy, not hot. Lasts 4 years.") as the brand's voice and tone. The VP flagged this directly: that line is the first drop talking about its own fabric, not HolyDrip talking as a marketplace. Rewritten to describe the brand's actual claimed voice — styling authority ("five ways to wear it, knows what pairs with what") that belongs to HolyDrip curating, not to one seller pitching a product. Added a "Styling-led" tag to match.
- **Ads column onboarding status.** The blurb shown while the Ads column builds ("Going through 30 days of spend... frequency, cost per sale") assumed an existing ad account with spend history. HolyDrip has no ad account live yet — this was flagged in the same call. Rewritten to say the read starts on Instagram, since there is no spend yet to read.

Not touched this pass (needs more input before editing): catalog/SKU framing, ad campaign ideas, storefront/PDP specifics, GEO/visibility copy — all fine per the VP or waiting on further direction.

## 2026-09-22 — Rare Rabbit's image swapped in; every post description rewritten for readability

- **Rare Rabbit shot-standard post.** Swapped in the real House of Rare campaign image supplied for the post. That image is a finished ad — their own logo, headline and store tags baked into the frame — not a raw product shot, so the copy was rewritten to say that plainly: it's their ad, not a shot, and it can't run in a multi-brand catalog as-is.
- **Every post description across the feed rewritten.** The long, comma-stacked sentences (multiple clauses joined by "and," dense em-dash asides) were broken up into short, plain sentences instead — one idea per sentence, one em-dash aside at most. Covers all ten Catalog/Creative/Ads/Visibility posts, all six data-row posts, the five column-status blurbs shown while the deck loads, the CMS-connect card, and the feed's own intro card. No claims changed, only how they're said.
- **Cut a redundant line.** The Ads engagement-ad post no longer ends with "needs your Meta account to go live" — the button next to it already says Meta, so the line was just restating what's visible.

## 2026-09-21 — No more video/reel language on posts; carousels now storefront-only

Two changes across the whole feed, not just Catalog:

- **No post proposes generating a video or reel anymore.** Six posts referenced or implied video work (a reel cut, a triptych "frame," a six-slide carousel described as a reel, "spoken aloud in a reel"). Rewritten to describe a single generated image or an existing post instead: the manifesto post now generates one image, not three reel versions; the twenty-brand carousel is now a single shareable graphic; the Drip Tips triptych is now one composited image; the two Ads/visibility posts that referenced "reel" now say "post" and read correctly against the single image or page they already point to.
- **Carousels are now storefront-only.** Any post whose agent wasn't `storefront` and carried more than one image was cut down to its single strongest image, with copy rewritten to match — this affected the manifesto, Drip Tips and twenty-brand posts above. The one remaining carousel in the feed (the verdict-block post) belongs to Storefront and was left as-is.

Copy was rewritten in lockstep with every image cut, not just trimmed, to avoid the same content/image mismatch flagged in the entry above.

## 2026-09-21 — Fixed a content/image mismatch, gave one Ads post an image

Two follow-up fixes after re-checking every post against what it actually shows:

- **Catalog — Rare Rabbit shot-standard post.** The copy still talked about reordering multiple shots ("on-model, then construction, then colour") after the post had been trimmed to a single image, so the post no longer supported its own claim. Rewritten to describe the seller's shot not matching HolyDrip's own template, which a single image can actually show.
- **Ads — "Run the drop reel as an engagement ad."** Was rows-only with no visual, for a post that's fundamentally about a specific reel. Now carries that reel's cover (`hd-reel-ultimate-indian-tee.jpg`) and the comment count folded into the sub line as a sentence instead of a table.

Left as-is: the retargeting-audience post (Ads) stays rows-only since there's no real creative to attach to an audience-building recommendation, and the three other catalog posts already carried an image that matched their copy.

## 2026-09-21 — Catalog posts trimmed: one SKU each, one image each, shorter copy

Follow-up to the same-day catalog rebuild. The four posts mixed sellers in carousels and ran long. Reworked all four to one SKU per post, one image per post (no carousels), and one-sentence descriptions:

- **Apply the shot standard to Rare Rabbit** — was a four-seller carousel, now a single Rare Rabbit shot.
- **Publish Codebrwn as a live listing** *(replaces "Publish six sellers into the live catalog")* — the six-seller data-row card is gone; this is a plain single-listing approval for one seller instead.
- **Open Socks with Mint & Oak** — down from two images to one.
- **Open Bags with Dedh-Shana** — down from four images to one.

The unused multi-shot assets (trousers, tee, cap, extra bag and jacket angles) are still in `assets/` in case a later post wants them; nothing was deleted.

## 2026-09-21 — Six real sellers land in the Catalog column, plus the animated agent avatars

Real product photography arrived for six sellers across seven SKUs: Rare Rabbit (shirt, trousers), Dedh-Shana (handbag), The Souled Store (graphic tee), 52 Degree (cap), Codebrwn (jacket) and Mint & Oak (socks). The Catalog column, which had been carrying nothing but The Cloud Tee since launch, is rebuilt around this real intake.

**Catalog is now four posts, up from three** (the standing three-per-column rule was raised for this column only, at the user's call):
- **Apply the shot order standard to the six new sellers** — the existing shot-standard post, now illustrated with real images from four of the six sellers instead of Cloud Tee placeholders.
- **Publish six sellers into the live catalog** *(new)* — a data-row card naming each seller, its category and shot count. Replaces the old twenty-brand ranking chart, which was Cloud-Tee-specific and didn't transfer to six unrelated categories.
- **Open Socks, the one category still empty** *(new)* — Socks was named in the original nine-category plan but never had a listing. Mint & Oak's taxi-print ankle socks (flat pair + worn) are proposed as the one that opens it.
- **Open Bags, a category not yet on the roadmap** *(new)* — Dedh-Shana's set is the most complete of the six (four angles including the interior). Bags isn't one of the original nine categories, so this is flagged as a genuine expansion, not a gap fill.

The "Product catalog" card in the onboarding/Brand Memory rail was updated to name the six sellers now in intake, replacing the generic "seller submissions across nine categories" line. The Cloud Tee stays the only live member drop; nothing about that changed.

**Not used.** Three of the batches came with short video clips (shirt, tee, bag 360°) plus one colour-grade clip (jacket). This build has no video rendering path for feed cards, so none of the four were used — flagging in case video support is worth building for a future batch like this.

**Also committed in this pass, not from this session.** The working tree already had two uncommitted changes sitting in it when this session started: animated SVG agent avatars (a rotating-gradient shape with blinking/saccading eyes, replacing the static PNG-style avatar icons) and a recolour of the Trends/What's New/How To story slide accents away from the brand triad. Both looked finished, so they're included in this commit rather than held back, but neither was made by this session — worth a look to confirm they're intentional.

## 2026-09-20 — Every post is now a recommendation, written off HolyDrip's actual Instagram

All fifteen feed posts were rewritten. The old set read as strategy theses aimed at the ShopOS team ("Only a marketplace can style across brands", "Your sellers will pay for the ads you have not launched") and several of them claimed work that was already finished. Neither is what the feed is for: every card is a suggestion the agent is making, with the draft behind it, and nothing moves until the brand approves.

**What changed in the writing.** Titles now propose an action instead of announcing one. The body says what the agent found, what it suggests doing, and what approving actually does. The button is the permission, not a project. The two business-case arguments from the team meeting are gone, and the cards make those arguments by showing the work instead.

**What changed in the thinking.** The posts are written off the live @holydrip.club account, not off the one product page. The account is a curator: identity posts land at 550k likes, the drop reel lands at 8k but takes 4,535 comments because "comment DRIP" is the checkout, and the commerce model is "we tested twenty brands, picked one, got an exclusive colour". So the cards treat the store as the product. Visibility is about the store being findable, not the tee. Ads are about comments, warm lists and the manifesto reels, not a seller rate card. Storefront is three CMS blocks that work over a headless custom stack, no Shopify anywhere.

**The fifteen, three per column.**

- **Catalog.** Set the HolyDrip shot standard before the second brand's drop lands; give every drop a ranking card instead of a spec sheet; lead the drop page with the colour only members can get.
- **Creatives.** Announce the next drop as a manifesto, the format that earns 550k; style the drop for the three body types the account already coaches; turn "we tested twenty" into a screenshot-able carousel. Each of these describes a new banner to generate, which is the point of a creative post.
- **Ads.** Boost the drop reel for comments rather than clicks; retarget the DRIP commenters who never unlocked; put the manifesto reels in front of lookalikes of the engagers.
- **Storefront.** Put the HolyDrip verdict above Subtle's spec on the drop page; let members skip the gate on the second drop; keep an archive of drops that have closed.
- **Visibility.** Own the answer to where Indian men buy premium basics; make every drop a permanent best-for-Indian-men page; get engines to read HolyDrip as a brand rather than a hashtag.

**Also.** Charts dropped from six to two, both carrying real numbers (likes by post type, and the twenty-brand ranking). The intro card no longer says each card is finished work. The CMS connect card lists what is actually waiting on it. The Meta connect card now follows the reel-boost post, and the CMS one follows the member-gate post.

**Known limits.** Engagement figures are read off the public account; unlock and member counts (1,210 unlocked, 3,325 never unlocked) are placeholders. The AI visibility numbers are still the placeholder GEO object. Creative posts reuse existing assets as stand-ins for banners that do not exist yet, and three of those are Instagram grid covers at 360px, which look soft at card size.

## 2026-09-20 — Rebuilt on the latest the base prototype code (266e3bd), HolyDrip content re-applied

The first HolyDrip commit was made on a copy of the base prototype that was 45 commits behind. This one takes the base prototype's current `index.html` as the base and re-applies every HolyDrip change on top, so the fork now carries everything the the previous brand build has learned since 18 September:

- **Left rail, collapsed and expanded.** Collapsed it shows Home, Search and Agents only; the other items, the foot (notifications, theme, credits, workspace badge) and their labels fold away. Hovering an icon shows its name; hovering Agents opens the agents fly-out, titled "Agents" while the rail is collapsed. Clicking the logo opens the rail to 236px and the page moves over to make room (no dim, no drawer) on desktop; on a phone it stays a drawer with a scrim. Hover no longer opens the rail.
- **Top bar.** The deck toggle (or the Pro invitation) now sits at the top right on the Feed tab; on the Chat tab the credits take that spot and the toggle moves into the rail foot. The Feed | Chat pill is centred and its padding widened.
- **Intro card.** The feed opens with a three-slide intro card (This is your feed / Jam with agents or humans / Approve and publish), shown once per load, dots in the header row. Its three illustrations were re-graded from the previous brand green to the HolyDrip steel blue and bone, and the wash under the headline is near-black blue.
- **Feed.** Unrevealed cards rest at 20% so the next one peeks; the setup-complete toast is gone (the intro card covers it); the setup columns fold their intro line into a status line once the first card lands; more air between tabs, stories and feed.
- **GEO object.** The visibility cards in the base prototype now template from one `GEO` object. HolyDrip's copy of it holds placeholder numbers for a pre-launch, social-first brand (score 12, cited on 0 of 8 discovery prompts, Myntra / Amazon / Ajio / Tata CLiQ / Reddit as the cited sources). Nothing reads from it yet in this fork; it is there so the next visibility card can.

Content changes made to the base prototype in that range (the Launch Reveal creative, the the previous brand GEO report cards, the Editorial Pour text card) are specific to the previous brand and were not carried over. All HolyDrip cards, stories, signals, brand memory and assets from the previous entry are unchanged.

## 2026-09-20 — HolyDrip: the whole prototype rebranded from the previous brand

This fork now reads as HolyDrip, the premium menswear marketplace (holydrip.club, @holydrip.club). Nothing structural changed; every piece of brand content did.

- **Workspace and brand memory.** Default store is holydrip.club, workspace badge and deck sidebar carry the HOLY DR/P mark, the finish screen says "HolyDrip, welcome to your feed". The Brand column now reads HolyDrip: marketplace positioning, Subtle's Cloud Tee as the first drop, member pricing, Tiruppur, the Uniqlo/Zara/M&S/H&M comparison, audience, and Myntra / Ajio / Tata CLiQ / The Collective as industry leaders. Brand kit is black, maroon and steel blue with Bodoni Moda headings and Geist body, read off the live site and the Instagram grid.
- **Feed: 18 cards, three per column, no more.** Catalog (shot standard at intake, attribute coverage by category, the macro pair), Creatives (the poster format, the Tiruppur mill story, cross-brand styling), Ads (seller-funded placements, followers are not a buyer list, reels as the creative test), Storefront (no Shopify: headless CMS, the size guide is a picture, the comparison table as a module), Visibility (unclaimed category answer, social-rich search-invisible, spec facts not marked up). The deck-only extras are gone; the free feed and the Pro columns show the same 15 posts plus the three Signals.
- **Signals.** The three journeys are now about member-price unlocks: unlocked-but-never-bought (WhatsApp), first-drop buyers get the next drop early (email), and lapsed unlocks asked a question (WhatsApp). Sources: the Shopify source is now "HolyDrip store"; Klaviyo, WhatsApp and support stay.
- **Connect cards.** The Shopify connect card is now "Connect the CMS", with a plug icon instead of the Shopify mark, because HolyDrip runs a custom stack.
- **Stories.** Rings and slides repainted from the HolyDrip palette. "Popular ads" is now "Top reels" and shows three real Instagram covers.
- **Assets.** Every `cx-*` file, the the previous brand mark and the unused Shopify logo are deleted. 40 new `hd-*` files pulled from holydrip.club, its CDN, the drop-page video and the Instagram grid: the four LP poster frames, the PDP gallery (on-model, ghost mannequin, collar macro, skin-tone guide, size lineup, colour rail), the eight colourway cutouts, texture and craftsman shots, the size chart, lab QR, brand story, both wordmarks, and seven reel covers. Only 25 are referenced today; the rest sit in `assets/` ready to slot in.

**Known limits.** Every number on a card is a placeholder. The Instagram covers are grid size (360px) and look soft on a large card, so they only appear in stories and small slots. Celebrity reel covers (Diljit, Raghav Juyal, Jacob Batalon, Vir Das) were deliberately left out. The team's catalog images have not arrived yet, so the catalog cards lean on Subtle's one listing.
