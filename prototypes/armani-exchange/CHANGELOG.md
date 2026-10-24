# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-25 — Armani Exchange India fork

A new fork for Armani Exchange India, built on the current base code (the Google Sheet driven build) with the generic fixes from an earlier fork: looping video posts, a neutral store connector for unknown brands, and the version switch hiding itself when there is only one variant. It starts with a clean git history of its own.

**The brand.** Everything is keyed on `armaniexchange.in`: Brand Memory, the setup rail, the workspace badge, the deck sidebar and the welcome line. The logo is the real A|X mark and wordmark, lifted from the vectors on Armani's own site, not redrawn. The kit is the site's own black, white and greys; the pale sky blue on the story rings and intro card comes from the FW26 film. The intro card copy is untouched; only its three illustrations and wash were regraded from the previous brand green to AX monochrome, and the story rings and modal backgrounds were recoloured to match.

**The stack.** armaniexchange.in runs on Fynd Commerce (Reliance's platform), with GoKwik checkout, Meta and Google Ads tags, and MoEngage. Shopify is gone from every surface: the feed and deck connect cards and the Brand Memory connect row name Fynd Commerce; the rail flyouts list Fynd Commerce, Meta Ads, Google Ads and MoEngage, and search adds GoKwik; Signals reads orders through Fynd Commerce and consent through MoEngage and WhatsApp.

**Eighteen posts, every one a recommendation waiting for approval, every number read off armaniexchange.in on 25 September** (its storefront catalog API, sitemap, llms.txt and the HTML Googlebot receives).

- **Catalog.** Write real descriptions for the FW26 drop: 416 of 503 new-season listings say only "MAN" or "WOMAN", or nothing. Give the ₹24,999 Signature jacket more than its single packshot. Clean up 483 names that put the product type in capitals.
- **Creatives.** Run the Crossover set as the FW26 launch carousel. Cut the FW26 film into a square Reel. Lead Stories with the logo close-ups. Build a denim story from the Uniform shoot. Give the women's edit its own carousel. Brief an India shoot in the Crossover grade.
- **Ads.** Keep FW26 ads away from the markdown grid (2,651 of 3,358 listings discounted, 1,567 at exactly 50% off, FW26 at full price). Show sale browsers the 60% edit (253 men's pieces). Close the FW26 carousel ad on a watch.
- **Storefront.** Put Armani's product film on the D02 tee page and five more FW26 styles; none of the 3,358 listings carries video. Take Lunar New Year and Spring Summer 2025 out of the Highlights menu.
- **Visibility.** Every product page fetched as Googlebot has the same generic title. llms.txt lists 15 of the oldest products and none from FW26. Three terms pages and two of every policy page.

**Imagery.** Catalog cards use armaniexchange.in's own product shots and the matching views from Armani's global library for the same style code. Creative cards use Armani's FW26/27 Crossover and Uniform campaign, squared by hand so no head or product is cut. Two videos: the FW26 campaign film and the D02 turnaround film, each webm plus mp4 with a poster. Every the previous brand image has been deleted.

**Known limits.**
- The Signals counts (customers, orders, reachable profiles) and source volumes are placeholders; nobody has connected Armani Exchange's store or CRM data.
- There is no AI-engine prompt audit for Armani Exchange, so the visibility cards carry site facts only, with no share-of-voice numbers.
- The product-title finding is from four product pages fetched as Googlebot, not a full crawl.
- The Signature jacket's extra views come from Armani's SS2025 library for the same style code; armaniexchange.in labels the piece FW26.
- The women's carousel bags are campaign frames; they are not matched one to one against the bags listed on armaniexchange.in.
- Meta and Google Ads are read from the tag container, which also carries tags for other sites, so which accounts fire on armaniexchange.in is not confirmed.
- Stories are ShopOS's own copy apart from Trends and Popular ads, which are written for Armani Exchange.
- The introductory post sequence is still to be decided.
- The ArmaniExchange-1 tab is not in the Brand Feeds sheet yet; the feed syncs from `data/armani-exchange-seed.xlsx` until it is.
