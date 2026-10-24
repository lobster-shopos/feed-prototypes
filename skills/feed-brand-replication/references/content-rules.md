# Content rules for cards

These come from the prototypes' own changelogs and review calls (VP feedback, owner change sets). They are why the cards read the way they do.

## What a card is

A recommendation the agent is asking permission for. The sub always ends in what happens on approval: "Approving queues the fix." / "Approving briefs one set." / "Approving shifts it." Nothing reads as finished work ("Twelve concepts in", "Twenty-four listings are rewritten") unless the card is explicitly "waiting for your approval". On Approve, "Show me" plays a pretend approval. Nothing is published.

## Anatomy

- `title`: one specific claim about this brand. It must fail if you swap the brand name: "Shoot Speedcat on the street, not on the shelf" is a PUMA card; "Show your products in real life" is nobody's.
- `sub`: 165-220 characters (the Van Heusen brief's rule; older forks run shorter on data-row cards, so the checker only warns). Short, plain sentences, one idea each. At most one dash aside; prefer none. **No em dashes.** Use the brand's real numbers and product names. End on what approval does.
- `cta.label`: a verb phrase that matches the agent: Creative director: Start creating / Generate versions / Publish Campaign; Performance: Approve concept / Shift budget / Rotate creative; Storefront: Apply Update; Visibility: Open report; Catalog: Open catalog health. Do not restate in the sub what the button already names (a Meta logo already says Meta).
- Image: must show what the copy claims. If the copy changes, change the image, and vice versa. Do not name a product the image does not show.

## Mix

Cover every column with real content: Catalog, Creatives, Ads, Storefront, Visibility, and the CRM Signals column. Past forks ran roughly 12-22 cards (a guide, not a rule). Keep to about 3 posts per agent, and never repeat an angle: the Van Heusen review cut cards that repeated one proof angle on the same packshot and a second fatigue card on the same frame. Include:

- at least one data-row card (`TEXT_POSTS`) with a warn/info badge: a real catalog problem found on the site;
- one AI-visibility rings card driven by `GEO`;
- one or two creative cards using the brand's own video, if available;
- a storefront card with a carousel of the product (carousels have been limited to Storefront in some forks; follow the owner's call);
- an Ads card that does not require an ad account the brand lacks;
- the two connect cards (ad platform, commerce platform), anchored after named cards.

## Tone and honesty

- Write the way a good marketing lead would explain it to a CMO. Plain words, no jargon, no hype.
- Do not name another brand, ever. A competitor may appear only where it is a real competitor of this brand (GEO sources, Industry leaders).
- "Voice and tone" describes how the brand speaks, not a product's tagline.
- Rows with figures show only what you read; placeholders are labelled "Demo placeholder, not <brand> data" where the UI has a place for it (`SOURCES.records`).
- Do not propose generating video if the brand has no video pipeline in the owner's brief; the HolyDrip fork removed video/reel proposals and used one generated image per card instead. When unsure, propose stills.

## Imagery

- Brand's own photography, from the storefront CDN at ~1000 px, or supplied shoots. Not stock. (Stock people read as "regular people"; the Point Taken skin was redone with the brand's catalog photography for exactly this reason.)
- On-model and in-use frames beat white packshots for Creative cards; packshots are fine for Catalog and Storefront. Where a product only has packshots, say so in Known limits.
- Do not crop through a headline or a person on a finished poster. Use contain-fit with a matching background for finished ads.
- Square render, top-aligned crop. Check faces.
- Name files `<xx>-<descriptive>.jpg` with the brand's 2-letter prefix. Poster frames: `<xx>-vid-<name>-poster.jpg`.
- Keep a record of source URLs or Drive paths in the changelog.

## Brand colour

Use the brand's real hexes in: `INTRO.slides[].c/c2`, `STORIES.*.slides[].c`, the Brand guidelines `brandkit.colors`, connector `color`. Story slide colours cycle through 2-3 brand colours (dark, brand accent, light). Keep text contrast readable on each.
