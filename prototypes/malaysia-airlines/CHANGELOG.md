# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-25 — Intro card: lighter blue, softer grade

The three intro card illustrations were graded to a deep navy that swallowed the artwork, so the cards, rays and rings were hard to make out. They now sit on a lighter Malaysia Airlines blue with the glow detail kept, and the fallback wash behind them moved from navy to the same lighter blue (#2B64A6 to #A0CDEE). The white headline still reads cleanly over it. The intro card copy is unchanged.

## 2026-09-25 — Malaysia Airlines fork

A new fork for Malaysia Airlines, built on an earlier fork's code (the Google Sheet driven build, plus video support and the non-commerce changes). It starts with a clean git history of its own.

**The brand.** Everything is keyed on `malaysiaairlines.com`: Brand Memory, the setup rail, the workspace badge, the deck sidebar and the welcome line. The logo is Malaysia Airlines' own wordmark, taken from the vector in their site code, not redrawn; the workspace mark is the kite cut from it. The kit is brand blue, deep navy, sky and gold, all read off the site's CSS. The intro card copy is untouched; only its three illustrations and wash were regraded from an earlier fork blue to Malaysia Airlines navy, and the story rings were recoloured to match.

**What an airline is, and what that changed.** Malaysia Airlines sells seats on routes, not products. So the catalog is its 109 destination pages (the setup line says "109 destination pages"), and the product lines are the three cabins, upgrades, flight and hotel packages and Enrich redemptions. The site runs on Adobe Experience Manager, so the connect cards, the Brand Memory connect row, the rail flyouts and search all name Adobe Experience Manager, with Meta, Google, TikTok and LinkedIn as the ad platforms actually tagged on the site. Signals reads Enrich members and bookings, with email and the Malaysia Airlines app as channels.

**Twenty-one posts, every one a recommendation waiting for approval, and every number in them read off malaysiaairlines.com on 25 September.**

- **Catalog.** Add Busan (from MYR 2,139, opening 2 Dec) to the six homepage fare tiles. Move the Busan page to the URL pattern every other city uses, because it sits at `flight-to-busan` and is missing from the sitemap. Tag each cabin photo to the aircraft it shows.
- **Creatives.** Run Time for Busan as a four-frame carousel. Cut the eight Our Malaysia city films into one 15-second Reel. Lead the A330neo post with the crew, not the empty seat. Give Shenzhen, Changsha and Fukuoka a Time for frame each. Keep a crew member in every destination frame. Put Pilot Parker in front of parents.
- **Ads.** Retire the Universal Analytics tag that still loads beside two GA4 tags. Put the MYR 2,139 fare on the Busan launch ad. Retarget logged-out searchers with the Enrich 5%. Take MHcorporate to LinkedIn. Test the Wow Deals ad with one code.
- **Storefront.** Tell the cabin classes page about the A330neo, which it never mentions. Open the cabin classes page on the Micromoments film.
- **Visibility.** 91 of 107 destination pages share one templated description. llms.txt returns a 404. The fleet section exists twice, with the A330neo only in the old one. `/my/en.sitemap.xml` lists 137 sitemaps, all 404.

**Imagery.** All from the site's own image library. Catalog cards use the destination and cabin photography as shot. Creative cards use the Time for campaign frames, kept whole, never cropped through a headline or a crew member. The three videos are cut from films already on the site. Every an earlier fork image has been deleted.

**Known limits.**
- The Signals counts (members, reachable, tiers) and source volumes are placeholders; nobody has connected Enrich or booking data. The Enrich tier names in the Gold-to-Platinum signal are assumed, not read off the site.
- There is no AI-engine prompt audit for Malaysia Airlines, so the visibility cards carry site facts only, with no share-of-voice numbers.
- The booking engine behind bookings.malaysiaairlines.com was not identified, so no connector names it.
- Instagram numbers (2M followers, 8 of the last 12 posts are Reels) were read off the public profile; no Instagram images are used, because the profile will not serve them without a login.
- The Our Malaysia and Micromoments films are 540 px square cuts of 800 x 532 sources, sharp on screen but not print-grade.
- IvyMode and Mundial are not bundled; the brand kit card shows a serif fallback.
- Stories are ShopOS's own copy apart from Trends and Popular ads, which are written for Malaysia Airlines.
- The introductory post sequence is still to be decided.
- The MalaysiaAirlines-1 tab is not in the Brand Feeds sheet yet; the feed syncs from `data/mh-seed.xlsx` until it is.
