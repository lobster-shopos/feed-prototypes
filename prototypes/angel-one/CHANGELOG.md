# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-25 — Angel One fork

A new fork for Angel One, the stockbroking and investing app, built on the current base code (the Google Sheet driven build) with the video, catalog-unit and single-variant fixes from an earlier fork. It starts with a clean git history of its own.

**The brand.** Everything is keyed on `angelone.in`: Brand Memory, the setup rail, the workspace badge, the deck sidebar and the welcome line. The logo is Angel One's own vector wordmark and logogram, taken from its CDN, not redrawn. The kit is logo blue, navy, orange and pale blue, all read off the site's CSS and artwork, with Barlow headlines and Roboto body. The intro card copy is untouched; only its three illustrations and wash were regraded from the previous brand green to Angel One blue, and the story rings were recoloured to match.

**What Angel One actually is, and what that changed.** Angel One sells trading and investing, not products, and has no commerce platform. So the catalog is its instrument pages (5,877 stocks, 7,266 mutual funds, 1,292 IPOs, 1,471 US stocks and 243 ETFs; the setup line now says "16,149 instrument pages"), the storefront is its website and app pages, and creative is its Instagram and YouTube output. Shopify is gone from every surface: the feed and deck connect cards and the Brand Memory connect row name WordPress, the CMS behind every image on the site; the rail flyouts and search list WordPress, Meta Ads, Google Ads, CleverTap and AppsFlyer; Signals reads client and trading records through CleverTap and WhatsApp instead of Shopify and Klaviyo.

**Twenty-three posts, every one a recommendation waiting for approval, and every number in them read off angelone.in, its llms.txt, its Tag Manager, @angelone on Instagram or the Angel One YouTube channel on 25 September.**

- **Catalog.** Retitle the Tata Motors page, which the homepage still calls Tata Motors but now shows Tata Motors Passenger Vehicles. Move stale pages out of the footer's Upcoming IPO list (boAt still cites a January 2022 filing; Snapdeal already has a price band). Tag each app render to the product it sells.
- **Creatives.** Run the three IPO Bulletins as one carousel. Make "5 things to know" the IPO Shorts format (51,000 views against a norm near 10,000). Turn the Hindi Ather case study (1.6 lakh views, 2.5 times the next best) into a series. Hold the "anyone watching can make ₹1 crore" podcast cover for a compliance read. Cut the SuperApp film into one Reel per feature. Make Apply or Skip the IPO cover. Run market news as one 3D scene. Shoot real places, phone in hand.
- **Ads.** Seven Meta pixels and seven Google Ads conversion IDs fire on one site. The SuperApp film's end card still says 2 Crore+ (sourced to January 2024), 25 years and the old logo. Put the ₹100 start in the SIP ad. Run the 3.8 Crore banner as the proof ad. Retarget IPO page visitors while an issue is open.
- **Storefront.** The pricing page banner says ₹0 brokerage on stock investments while the table under it charges up to ₹20 an order. The site quotes four customer counts (3.8 Cr+, 3.5 Cr+, 2.5 Cr+, 1.5 crore). The homepage share image is an August 2024 SIP banner.
- **Visibility.** llms.txt tells AI models delivery trades carry zero brokerage. It points at 98 pages and none of the 1,292 IPO or 7,266 fund pages. Every stock page description ends with "at Angel One", past the ~160 characters search shows, so the name is what gets cut.

**Imagery.** Catalog and storefront cards use Angel One's own product renders and banners from angelone.in, shown whole. Creative cards use real @angelone Instagram posts and Angel One YouTube thumbnails, squared with their own edge colour or a blurred extension so no headline or disclaimer is cut. Two videos: a 15-second square cut of the SuperApp film and the opening of the NSE IPO short, each webm first with an mp4 fallback. Every the previous brand image has been deleted.

**Known limits.**
- The user supplied no brand assets, so every image is from Angel One's public site, Instagram (640px grid images, the most a logged-out view serves) or YouTube. Instagram images are not print-resolution.
- The Signals counts (clients, reachable profiles, journeys) and source volumes are placeholders; nobody has connected Angel One's client data.
- There is no AI-engine prompt audit for Angel One, so the visibility cards carry site facts only, with no share-of-voice numbers. The description-length chart is a 25-page random sample of stock pages, not all 5,877.
- WordPress as the CMS is inferred from the `wp-content` asset paths, not confirmed by Angel One. Seven Meta pixels and seven conversion IDs may belong to separate accounts on purpose; the card asks for an audit, it does not assume double counting.
- The "₹1 crore" podcast card flags a cover that reads as a promised return; whether it breaches the advertising code is for Angel One's compliance team, not the prototype, to decide.
- Snapdeal is treated as no longer upcoming because its page carries a price band; its exact listing status was not checked.
- Stories are ShopOS's own copy apart from Trends and Popular ads, which are written for Angel One.
- The introductory post sequence is still to be decided.
- The AngelOne-1 tab is not in the Brand Feeds sheet yet; the feed syncs from `data/angelone-seed.xlsx` until it is.
