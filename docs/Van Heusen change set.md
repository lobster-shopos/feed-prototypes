# Van Heusen Innerwear feed: change set (28 Sep 2026)

Hand this file, plus `Brand Feeds (master).xlsx` (tab **Van Heusen**), to the thread that edits the repo. Everything below is approved by Lobster. The sheet is the source of detail; this file is the instruction list.

## Ground rules (agents only)

- Repo: `feed-van-heusen/` (local `~/Work/projects/feed/feed-van-heusen`). One file, `index.html`, plus `assets/`. No build step.
- **No sheet sync in this feed.** Posts live in `index.html` arrays: `POSTS`, `DECK_ONLY`, `TEXT_POSTS`, `SIGNALS`, `CX_ABOUT` (Brand Memory), `STORIES`, `INTRO`. Edit them directly.
- Find every existing post by its **exact current title** (quoted below), not by position.
- Apply edits with a script that asserts each replacement hits exactly once. A string that no longer matches must fail loudly, not be skipped.
- Title hazards: `CATALOG` (a Set of card titles) and `FEED_CONNECT_AFTER` (anchors the connect card by title) both break when a title changes or a post is cut. Update both.
- Copy rules: every post is a recommendation awaiting approval, never finished work. Descriptions 165 to 220 characters, no em dashes. Every image shows square in the feed.
- Never mention any other feed brand. Do not push to GitHub; Lobster pushes himself. Commit locally only if asked.

## 1. Cut these posts

Delete the object from its array. Remove its title from `CATALOG` / `FEED_CONNECT_AFTER` if present.

- "The Multi Printed Brief at 25% off is carrying the account this week" (performance, source key D0). Why: Budget shift tied to a markdown, not a date. Replaced by the festive 3-pack campaign (vh-new-04).
- "A proof-led campaign for the AIR Series trunk" (performance, source key P1). Why: Duplicates the AIR Series proof angle of P0 and D2 on the same packshot.
- "Twelve concepts in, three out" (creative, source key T1). Why: Reads as finished work ("Twelve concepts in") and names no product.
- "Twenty-four listings are rewritten and waiting" (storefront, source key T2). Why: Reads as finished work and duplicates the print-description post (P4).
- "Three Tactel trunk creatives are past frequency 4" (performance, source key D1). Why: Fatigue card on one Tactel frame; over the 3-post cap for Performance.
- "Show the boxer brief on an ordinary Tuesday, not a shoot" (creative, source key P3). Why: "An ordinary Tuesday" would fit any innerwear brand; the image is a catalog packshot and the copy uses em dashes.
- "Three sets are burning the same frame" (performance, source key T3). Why: Duplicates the Tactel fatigue card (D1).
- "Show why the AIR Series beats a standard cotton trunk" (storefront, source key D2). Why: Third post on the same AIR Series proof angle.
- "You are the answer only when they already know the name" (visibility, source key T4). Why: Same finding as the size guide (T6). Its numbers move into that post.
- "Shoot the store wall, not just the rack" (creative, source key P5). Why: No product and no image; a store wall is not something an agent can produce or run.
- "The score that puts you first is only measuring 9 brands" (visibility, source key P7). Why: Same marketplace-share angle as D4. The 3% figure moves into the brief.
- "The category shelf is held by retailers, which means it is still open" (visibility, source key D4). Why: Duplicates the marketplace-share angle.

## 2. Rewrite copy on these posts

Keep the object, its images and chart/table data. Replace `title`, `sub` and `cta.label`.

### "Six products are disapproved on Meta"
- title → Clear the 6 Meta disapprovals before the 8 October sales
- sub → Six assorted-print listings share one missing GTIN, and the festive sales start on 8 October. Fix the field once and the next catalog sync clears all six. Approving queues the fix.
- cta.label → Queue the fix

### "The assorted-print trunks share one line of copy, not a description"
- title → Give the assorted-print trunks a real description, starting with the top 20
- sub → Every printed style carries one boilerplate disclaimer where a description should be. Rewriting the top 20 by traffic gives shoppers fabric, fit and care before they buy on colour. Approving publishes them.
- cta.label → Apply Update

### "The proof already exists. It is sitting on the wrong pages."
- title → Put the innerwear proof on the pages AI engines read
- sub → Crawler access is 100, page citability 26: engines get in and find nothing to quote. AIR mesh, Colour Fresh wash-hold and the fit guide sit on no crawlable page. Approving adds them with markup.
- cta.label → Add the proof

### "Trunk listings carry a fit callout in the name with nothing under it"
- title → Say what Body Defining Fit means, right by the size selector
- sub → Body Defining Fit and Ultra Soft name the cut, but no listing says what that means against the size chart. One plain line per fit, next to the sizes. Approving adds it to 40 trunk listings.
- cta.label → Add fit notes

### "Drafted: How to Actually Read a Trunk Size Chart"
- title → Publish the plain-language trunk size guide
- sub → Five size and fit questions return zero Van Heusen citations; Myntra, Ajio and Jockey answer them. The guide explains each fit against the size chart. Approving publishes it with FAQ markup.
- cta.label → Publish article

## 3. Replace these posts with new campaign ideas

- "Shoot the mesh panel, not just the tagline" is replaced by the new post that says `replaces P0` in section 5.
- "Make the colour-hold claim the whole shot" is replaced by the new post that says `replaces P6` in section 5.

## 4. Keep unchanged

- "Van Heusen Innerwear wins the answer when the buyer knows the brand, and disappears when they search a need"

## 5. The final post set (3 per agent)

This is the whole feed after the change. Posts marked *carried* are the section 2 rewrites or section 4 keeps; don't duplicate them. Posts marked *new* are added. Match the existing object shape in `POSTS` (agent, time, ratio, campaign, images, title, sub, cta with label/logo/brandColor, table rows, badge).

### vh-new-01 · creative · new
- type: image
- campaign: Air, Backlit
- images: assets/vh-air-backlit.jpg
- title: Backlight the AIR Series mesh so you can see the air go through it
- description: Breathable is a word on the listing; the perforated Swift Dry mesh is the proof. Light pouring through the mesh panel shows it in one frame, which the packshot never can. Approving briefs a hero and a 4:5 cut.
- cta_label: Brief the macro
- notes: replaces P0

### vh-new-02 · creative · new
- type: image
- campaign: Colour Fresh, Proven
- images: assets/vh-colourfresh-wash.jpg
- title: Show Colour Fresh after 20 washes, hung beside a brand-new pair
- description: Colour Fresh is a line in the product name, and nothing on the page shows it. The same blue trunk at wash 1 and wash 20, hung side by side and still identical, turns the claim into proof. Approving briefs it.
- cta_label: Brief the still life
- notes: replaces P6

### vh-new-03 · creative · new
- type: image
- campaign: Who You Are Underneath
- images: assets/vh-waistband-shirt.jpg
- title: Show the Van Heusen waistband under the Van Heusen shirt
- description: Everyone knows the shirts; few know the innerwear. A monochrome frame of a man buttoning a formal shirt, the black waistband wordmark just showing above his trousers, joins the two. Approving briefs two frames.
- cta_label: Brief the frames

### vh-new-04 · performance · new
- type: image
- campaign: Festive 3-Pack
- images: assets/vh-brief-multi.jpg + assets/vh-trunk-colorfresh-blue.jpg + assets/vh-boxerbrief-white.jpg
- title: Run a festive 3-pack catalog campaign from the 8 October sales to Dhanteras
- description: Innerwear gets bought in packs before Diwali, and the catalog ads sell single pieces. A 3-pack set on Advantage+ with a pack-price template runs 8 October to 6 November. Approving launches it at ₹25,000 a day.
- cta_label: Launch campaign
- cta_icon: meta
- cta_color: #0866FF
- notes: replaces D0

### vh-new-05 · performance · carried
- type: table
- time: 6 min
- title: Clear the 6 Meta disapprovals before the 8 October sales
- description: Six assorted-print listings share one missing GTIN, and the festive sales start on 8 October. Fix the field once and the next catalog sync clears all six. Approving queues the fix.
- cta_label: Queue the fix
- badge: Catalog health
- badge_tone: warn
- table_rows: Disapproved on Meta | 6 of 40; Cause | missing GTIN on assorted-print SKUs; Fix | one catalog field
- notes: carried from T0

### vh-new-06 · performance · new
- type: image
- campaign: First Cold Week
- title: Start the thermal push in North India before the first cold week
- description: Thermal searches in Delhi NCR, Punjab and UP climb from late October. Google Search plus Meta, those states only, from 20 October, ahead of the first cold nights. Approving launches it at ₹15,000 a day.
- cta_label: Launch campaign
- cta_icon: meta
- cta_color: #0866FF
- notes: Source a thermal catalog shot from vanheusenindia.abfrl.in (no generation).

### vh-new-07 · storefront · carried
- type: image
- time: 3 hr
- image_ratio: square
- images: assets/vh-printedtrunk.jpg
- title: Give the assorted-print trunks a real description, starting with the top 20
- description: Every printed style carries one boilerplate disclaimer where a description should be. Rewriting the top 20 by traffic gives shoppers fabric, fit and care before they buy on colour. Approving publishes them.
- cta_label: Apply Update
- notes: carried from P4

### vh-new-08 · storefront · carried
- type: image
- time: 6 hr
- image_ratio: 4:5
- images: assets/vh-boxerbrief-burgundy.jpg
- title: Say what Body Defining Fit means, right by the size selector
- description: Body Defining Fit and Ultra Soft name the cut, but no listing says what that means against the size chart. One plain line per fit, next to the sizes. Approving adds it to 40 trunk listings.
- cta_label: Add fit notes
- notes: carried from D3

### vh-new-09 · storefront · new
- type: table
- title: Add a one-tap Buy my size again block for repeat buyers
- description: Most innerwear orders repeat a size the shopper already knows, and reordering takes six taps today. A one-tap block on the account page and in order emails cuts it to one. Approving builds it.
- cta_label: Build the block
- badge: Repeat buying
- badge_tone: info
- table_rows: Innerwear orders that repeat a size | 38%; Taps to reorder today | 6; Taps with the block | 1

### vh-new-10 · visibility · carried
- type: rings
- time: 45 min
- title: Van Heusen Innerwear wins the answer when the buyer knows the brand, and disappears when they search a need
- description: A score of 41 lands in the Poor band. The three lowest dimensions carry 59% of the weight, and they are the three that on-site work moves fastest.
- cta_label: Open report
- notes: carried from P2

### vh-new-11 · visibility · carried
- type: table
- time: 12 min
- title: Publish the plain-language trunk size guide
- description: Five size and fit questions return zero Van Heusen citations; Myntra, Ajio and Jockey answer them. The guide explains each fit against the size chart. Approving publishes it with FAQ markup.
- cta_label: Publish article
- badge: Draft ready
- badge_tone: ok
- table_rows: Answers | five fit questions; Cited there today | myntra.com, ajio.com, jockey.in; Goes to | /blogs/fit-guide; Still needs | FAQ block + FAQPage markup
- notes: carried from T6

### vh-new-12 · visibility · carried
- type: table
- time: 20 min
- title: Put the innerwear proof on the pages AI engines read
- description: Crawler access is 100, page citability 26: engines get in and find nothing to quote. AIR mesh, Colour Fresh wash-hold and the fit guide sit on no crawlable page. Approving adds them with markup.
- cta_label: Add the proof
- badge: Sitting idle
- badge_tone: warn
- table_rows: ABFRL scale, own store network | not on the homepage; AIR Series mesh + stretch tech | not on the homepage; Colour Fresh wash-hold claim | not marked up; Assorted-print disclaimer pattern | not addressed anywhere; Size and fit guidance | not on any page
- notes: carried from T5

Suggested feed order: interleave agents so no two cards from the same agent sit together. Creative first, and the three new Creative Director images should land in the first eight cards.

## 6. Signals (Pro deck Signals column only)

- Remove: "Your first-time trunk buyers are ready for a second order."
- Remove: "Give your repeat innerwear buyers first pick of the next AIR Series colours."
- Keep: "186 men stopped buying about when their last pack would wear out."

Add two new signals. The sheet has headline, why, objective, channel and counts. The existing signal objects also carry `rules`, `msg` (subject, body, cta), `journey`, `decision` and `asset`: write those in the same style as the kept signal, consistent with the numbers below. Use CleverTap for consent, and never contact the same person twice inside 7 days.

### vh-sig-01
- headline: Winter base-layer demand is starting in the north
- why: Thermal searches in Delhi NCR, Punjab and UP rise about 3x from mid-October. 2,140 customers bought Van Heusen thermals last winter and have not bought since.
- objective: Remind them before the first cold week, with their size pre-filled.
- channel: WhatsApp
- counts: eligible 2,140 | unreachable 180 | no consent 95 | recent 60 | support 11 | in journey 0

### vh-sig-02
- headline: Festive new-clothes buying includes innerwear
- why: Innerwear orders run about 38% higher in the three weeks before Diwali. 1,580 customers ordered innerwear in that window last year.
- objective: Give them early access to the festive 3-pack before Dhanteras on 6 November.
- channel: Email
- counts: eligible 1,580 | unreachable 120 | no consent 70 | recent 140 | support 8 | in journey 0

Also update the Signals teaser rows (`sig-will`) and the CRM drawer copy (`dwBody`) so they describe the new signals, not the removed ones.

## 7. Brand Memory (`CX_ABOUT`)

- "Industry leaders" card: Rupa, Lux and Dollar are mass-market. Van Heusen sits mid-premium, so the leaders to measure against are Jockey, XYXX, Damensch and Calvin Klein.
  - replace the tags with: jockey.in #111111, xyxxcrew.com #2f2f2f, damensch.com #3b6ea5, calvinklein.com #000000
- All other Brand Memory cards stay.

## 8. Stories and intro

- Story **What is new**, slide 1: its copy claims cards post at 4:5, 1:1 and 16:9. Every card is square now. Replace with h: `Every card, square`, p: `Every image in the feed is composed for a clean square, so nothing that matters gets cropped.` Other stories stay.
- **Intro post**: keep copy and structure. Regrade `assets/intro-1.jpg`, `intro-2.jpg`, `intro-3.jpg` toward mid-tone gold #C59A37 (HSL lightness 35 to 60%; they average 17 to 25% now, too dark), and set each slide's `c` to a mid-tone gold rather than #0a0a0a.

## 9. New assets (already in `assets/`)

- `vh-air-backlit.jpg` (1080×1080) → vh-new-01
- `vh-colourfresh-wash.jpg` (1080×1080) → vh-new-02. The V monogram on the tab is slightly malformed; retouch before any large use.
- `vh-waistband-shirt.jpg` (1080×1350, 4:5; the feed crops it square from the top and the waistband stays in frame) → vh-new-03
- vh-new-06 still needs a thermal catalog shot sourced from vanheusenindia.abfrl.in. Until then, use the closest real product shot and leave a note in the CHANGELOG.
- After the edit, delete assets nothing references, and confirm every referenced asset exists.

## 10. Check before calling it done

- Render in headless Playwright: onboarding, Brand Memory, the full feed with load-more, deck columns (including Signals with 3 cards), every story. No `pageerror`, no `console.error`, no image with `naturalWidth === 0`.
- Count: 3 posts per agent across creative, performance, storefront and visibility, and 3 signals.
- `grep` for em dashes (—) in every title and sub; there should be none.
- `grep` for the removed titles; they should appear nowhere, including `CATALOG` and `FEED_CONNECT_AFTER`.
- Add a CHANGELOG entry for a product manager: what changed, why, and the one known gap (vh-new-06 image).
