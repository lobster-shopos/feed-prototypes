# Changelog

Human-readable log of what changed in the onboarding prototype, for product review. Updated at each local commit — most recent first.

## 2026-09-25 — Feed content now comes from the Brand Feeds Google Sheet

**What changed for a reviewer:** nothing visible yet. The feed, the deck and the Brand Memory setup column show exactly the same cards as before (checked card by card against the previous build). The only visible difference is inside deck columns: cards now sit in the sheet's row order, so a column can open on a table card where it used to open on an image card.

**What changed underneath:** every post has moved out of the code and into the Brand Feeds sheet. Each Cosmix tab (Cosmix-1, -2, -3) is a complete, independent feed with its own posts, copy, order and images. The v1/v2/v3 switch in the bottom-left corner now picks which tab you are looking at.

**How an edit reaches the prototype:** edit the sheet, then ask Claude to sync the Cosmix feed (or run `python3 tools/sync_sheet.py`). The sync checks every row first and stops with a plain list of problems if anything is wrong, such as a missing image, a typo in a status, or a duplicate id. Once it passes, it reports what was added, edited, hidden or reordered.

**What the sheet controls per post:** status (live, draft, hidden), location (feed, deck, onboarding, in any combination), agent, title, description, images (several = carousel), CTA, table rows, tags, and which deck column the post goes in. The top of each tab holds the brand details (name, site, product count, logo, colours, type), which also drive the Brand guidelines card.

**Not in the sheet yet:** stories, the Signals column, the intro card and the AI-visibility report numbers (the chart and ring posts carry their data as fixed values in the sheet's extra_json column).

## 2026-09-22 — Fermented Yeast Protein: real variation 3 image

assets/v3/cx-fyp-campaign.jpg is now the sunset/coastal shot, replacing the variation 1 placeholder that was filling that slot.

## 2026-09-22 — Fermented Yeast Protein: variation 2 image added

assets/v2/cx-fyp-campaign.jpg is the splash/pour shot for the proof-led campaign post's variation 2. assets/v3/ got a copy of the variation 1 image as a placeholder so the version switch does not break on that slot until a real variation 3 lands. Note: the switch's file registry lives in the uncommitted asset-version-switch feature already in this working tree (not mine), so wiring this file in was done there too but is not part of this commit.

## 2026-09-22 — Fermented Yeast Protein campaign: real image added

assets/cx-fyp-campaign.jpg is now the actual Indonesian Cacao pack shot (purple bag, iced drink), replacing the placeholder for the "A proof-led campaign for Fermented Yeast Protein" post.

## 2026-09-22 — Proof-led campaign post: product swapped to Fermented Yeast Protein

The "proof-led campaign" performance post now names Fermented Yeast Protein, built around the FERMAGUT fermentation process, instead of the No-Nonsense pancake mix. Image is a placeholder — assets/cx-fyp-campaign.jpg needs to be added.

## 2026-09-22 — Shift-budget post: product swapped to My Happy Gut

The "carrying the account this week" performance post now names My Happy Gut instead of No-Nonsense Plant Protein (29% of spend / 41% of revenue), so it doesn't overlap with the Made to Absorb and Fermented Yeast Protein posts already in the same deck column. The ads-agent status line was updated to match. Image is a placeholder — assets/cx-pack-happygut.jpg needs to be added.

## 2026-09-21 — Left rail: no divider line above Notifications when collapsed

The foot's divider only made sense once labels were on screen to separate from. Collapsed, it left a stray line above the bell now that Notifications sits there; that line is gone. The divider still shows once the rail is open.

## 2026-09-21 — Left rail: Notifications stays visible when collapsed

The collapsed rail now keeps Notifications at the foot, above the workspace badge, so both are reachable without opening the rail. It behaves like every other collapsed icon: hover gives it the same tooltip and highlight, and the rail does not widen. The layout switch, theme and credits still fold away until the rail opens.

## 2026-09-19 — Cards peek instead of disappearing

Cards that have not been scrolled to yet now rest at 20% opacity instead of fully invisible, so on a fresh load the next card is visible at the bottom edge and it is obvious there is more feed below. They still come up to full opacity as you reach them. The first reveal after onboarding is unchanged — that one still rises in from nothing.

## 2026-09-19 — Intro card: dots move to the header row

The slide dots now sit in the card header, next to the ShopOS byline, instead of floating over the image.

## 2026-09-19 — Intro card: new slide 3 illustration

Slide 3 ("Approve and publish to your platforms.") now uses a new illustration: a phone radiating light with a card/photo held at its center. Replaces the previous card-leaving-the-stack composition.

## 2026-09-20 — Left rail: workspace badge stays visible when collapsed

Collapsed, the Cosmix workspace badge at the foot of the rail no longer disappears — it shrinks to just its icon, same as Home and Search, and answers a hover with a "Cosmix workspace" tooltip. Expanded, it reads in full as before.

## 2026-09-20 — Left rail: two states, tooltips back, no hover-open

The rail is now a sidebar with exactly two states, collapsed or expanded, and nothing temporary in between.

- **Hover no longer opens it.** A collapsed rail stays collapsed wherever the pointer rests. The jump on every pass of the mouse is gone.
- **The visible icons name themselves again.** Home and Search each show a small tooltip on hover. Agents shows its fly-out of the four agents — Creative generation, AI visibility, Performance marketing, Shopify store — the same list, in the same place, whether the rail is collapsed or expanded. Collapsed, that fly-out carries a small "Agents" label at the top, since the icon has no label beside it; expanded, the label drops away because the rail already says it.
- **Clicking the logo expands the rail into the layout, not over it.** No dimming, no scrim: the page keeps working and simply shifts right to make room, and shifts back when you collapse it. The history panel and the docked composer move with it.
- **It stays where you put it.** Clicking Home, or any other nav item, no longer folds the rail behind you. Only the logo toggles the state. On a phone the rail is still a drawer, scrim and all.

## 2026-09-19 — Launch Reveal card: new creative

The "Position the launch as an occasion, not a product drop" post now uses the final cloche-lift photography (pancake mix pouch + shake glass under the lifted glass cloche, warm amber spotlight) instead of the placeholder image.

## 2026-09-19 — Left rail: three icons collapsed, opens on hover

Desktop only; the phone drawer is unchanged.

- **Collapsed, the strip shows Home, Search and Agents** under the logo. Library, Skills, Memory, History, the foot (notifications, theme, credits, the layout switch) and the Cosmix workspace badge are folded away until the rail opens — they grow back in as it widens, so the three icons never jump.
- **Rest the pointer anywhere on the rail — icons included — and it opens by itself**, full labels showing. Move off it and it folds. No page dimming for a hover-open. The old hover tooltips are gone: the open rail's labels do that job now.
- **Clicking the logo still pins the rail open** with the page dimmed behind it, as before; click again to close.

## 2026-09-19 — Intro card shows once, then gets out of the way

The intro card is still the first card on every load, but now it appears exactly once per load. Once at least half of it has been on screen with the feed showing, the first time you leave it, it is gone: scroll past it to the bottom and back up, and the feed starts at the first real post; switch to Chat, the deck or any other page and come back, same thing. It is removed while it is out of sight, and the page is pulled up by exactly its height, so whatever card you were looking at does not move. Peeking at it partially and scrolling back does not spend it. Nothing is stored; a reload starts fresh.

Also this morning: all three slides now sit on one dark green, so the colour that shows through under the headline matches slide 1 (the purple and rust bleed on slides 2 and 3 is gone). Slides 1 and 2 have their full-frame images.

## 2026-09-19 — AI Visibility cards rebuilt against the September GEO report

The seven visibility cards had drifted from Lalith's report: invented competitor rankings (The Whole Truth), wrong source counts, "7 of 15" where the report says 0 of 8, and "4 models" where it audits 3 engines. Now six cards, every number traceable to a slide.

- **Score rings** — still 41 / Poor, but the three rings are now the report's three lowest (and heaviest) dimensions: Citation Performance 28, Page Citability 26, E-E-A-T 24, together 59% of the score. Hover a label for the full name and weight.
- **Branded vs discovery** — fixed to 3 of 3 branded cited, **0 of 8** discovery cited, 28 of 42 checks silent, 5 of the 8 are multivitamin questions. CTA now points at the draft below.
- **Two ways of counting** — unchanged (24% vs 3%); CTA points at the shelf card.
- **New: who holds the other 97%** — the real citation ledger: healthkart 16, amazon 16, 1mg 12, cosmix.in 11, nutrabay 8, fssai 7. Pro column only; the single feed already carries five visibility cards.
- **New: the proof is on the wrong pages** — replaces "Five things you already own" with the report's five: in-house manufacturing, NABL, the four certifications, the PCOS founder story, FERMAGUT — each with where it sits today.
- **New: a drafted post** — "What to Actually Look For on a Multivitamin Label", answering five zero-citation questions, headed for /blogs/nutrition. The first visibility card that is work rather than a finding; three other cards' CTAs funnel to it.
- **Removed**: "Clean plant protein recommendation" (ranking not in the report and contradicting it), "Eight discovery moments" (wrong sources), "Absent from the plant-protein answer" (4 models, prompt not audited).

Under the hood: one `GEO` object now holds every figure and the cards read from it, so the next report version is a one-object edit. Bar charts can show counts as well as percentages. A card can be marked deck-only.

## 2026-09-19 — Intro card: headline overlaps the graphic

Each slide image now dissolves toward the bottom of the frame (full strength to ~40%, gone by the bottom edge), and the headline sits a little higher, so the copy reads over the lower part of the graphic instead of under it. Slide order is now feed → jam → approve, and the three headlines are the locked lines. Slide images are due to be re-cut to fill the frame.

## 2026-09-19 — Intro card: all three slides illustrated

Slide 3 ("Remix with an agent. Jam with the team.") gets `assets/intro-3.jpg`: one card with a typing indicator above it, two dotted paths out of it, one to a ring (the agent) and one to a solid square (the team). Slides 1 and 2 were also re-cut this morning to the same card vocabulary (3:2 post shape, one tone). The carousel is now complete: rings drop work into a stack, one card is approved and leaves, one card is talked back to.

## 2026-09-19 — Intro card: slide 2 gets its image

Slide 2 ("Approve it, and it ships.") now carries `assets/intro-2.jpg`: the approved card, its ring filled, leaving the stack to the right with a trail behind it. Slide 3 is the last one still on the colour wash.

## 2026-09-18 — Intro card: new copy, slide 1 gets its final image

The carousel now tells one story in three lines: "Six agents. One feed. New work every day." / "Approve it, and it ships." / "Remix with an agent. Jam with the team." Title "This is your feed"; the description covers what posts here, that each card is finished work, and the three actions (approve, remix, jam).

Slide 1 is a finished illustration (`assets/intro-1.jpg`, four rings dropping into a stack of bars) with the headline revealing word by word over it. Slides 2 and 3 keep the colour wash until their images arrive. The in-code SVG illustration attempts are removed.

## 2026-09-18 — Fixed: the Feed | Chat pill sat lower than the logo and the Pro button

On desktop the top bar's three landmarks — the logo, the Feed/Chat pill, and the button on the right — weren't vertically aligned: the pill sat noticeably lower. Root cause: the pill is absolutely positioned to centre itself horizontally, but had no `top` set, so it fell back to a static position that isn't reliably the container's vertical centre. Now pinned on both axes off its own centre, matching the other two.

## 2026-09-18 — Removed: the "Cosmix is set up" toast when the feed opens

Setup used to hand off to the finished feed with a toast — "Cosmix is set up. This is your feed." — popping over the top of it. Gone. The feed already opens on its own always-first card ("Your agents work. This is where it lands."), so the toast was saying the same thing twice, and worse: a transient popup instead of something that stays on screen long enough to read.

## 2026-09-18 — Intro slide 1: one geometric image instead of a scene

The previous illustrations (agent characters, little cards, arrows) are gone. Slide 1 now carries one flat, geometric image in the Laws-of-UX register — cream shapes on the slide's own green, no outlines, no characters:

- Six hollow rings across the top are the agents.
- A solid dot drops out of each ring in turn, falls with weight, and settles into a row; two dimmer rows beneath it are what has already landed. The row fills left to right, then the cycle repeats.

Slides 2 and 3 are deliberately empty above the headline until this direction is approved.

## 2026-09-18 — More air between tabs, stories and posts; stories centred

Feedback on a screenshot: the tab row, the stories row and the first feed card were stacked with almost no room between them.

- **Space above and below the stories row is up from 24px to 34px on desktop** (16/20px to 24/28px on a phone), so it reads as its own row instead of crowding the tabs above it and the feed below it.
- **Space between feed cards is up from 24px to 32px on desktop** (16px to 22px on a phone).
- **The 4 stories now sit centred** in their row instead of pinned to the left — there are only ever 4 today, nowhere near enough to need the scroll room the row was built for.

## 2026-09-18 — Fixed: the Feed | Chat pill stretched across the phone topbar

On a phone the dark capsule behind Feed/Chat was stretching almost edge to edge, with the two tabs floating centred inside a much wider bar than they needed. The pill background lives on the same element that was also set to fill the space between the menu button and the right-side controls (`flex:1`) — so the background painted that whole span, not just the tabs. Fixed by giving that spacer its own wrapper: the wrapper stretches and centers, the pill now sizes to just Feed and Chat. Desktop is unaffected.

## 2026-09-18 — Intro card: an illustration on each slide

The empty upper half of each intro slide now carries a small line illustration, built from the real agent avatars (unchanged, static) and simple card shapes. Only the props move, slowly, at the tempo of the gradient behind them.

- **Slide 1, "Your agents work. This is where it lands."** — the four agents in a row; each drops a small card that falls into a dashed feed frame below and fades as it lands.
- **Slide 2, "Remix any post with the agent that made it."** — a post, an arrow, the Creative director, and three variant cards fanning out behind it, with a spark.
- **Slide 3, "Jam with the team when it needs a person."** — a post, the agent, and a person, joined by dashed lines; a reply bubble arrives above the person, sits, and goes.

Illustrations are inline SVG in the card; reduced-motion users get the resting frame.

## 2026-09-18 — Intro card always leads the feed

Dropped the first-visit-only gate. The intro card ("This is your feed") is now always the first card in the feed, every load — no localStorage flag, no `?intro` needed to bring it back.

## 2026-09-18 — Reverted: agent avatar accents

The small looping accent added to each agent avatar (spark, arrow, glint, ping, dot, halo) is reverted — misread the brief. All six avatars are back to exactly their prior static SVGs.

## 2026-09-18 — Each agent's face carries one small, looping idea

(Its code landed already, folded into an unrelated tab-padding commit by timing; this entry describes it.) The six agent avatars — top-left of every card, and everywhere else the avatar appears — stay static: no blinking, no breathing. But each now carries one tiny animated detail, conceptually tied to what that agent does:

- **Creative director** — a small spark twinkles near the top of the blob, on and off, like an idea catching.
- **Performance marketer** — a small arrow at the corner nudges upward and settles, a metric climbing.
- **Storefront manager** — a thin glint sweeps once across the shape, clipped to it, like light off a shop window.
- **AI visibility** — a ring pulses outward from the centre and fades, a signal reaching further.
- **CRM specialist** — a small dot at the corner breathes, a live connection.
- **ShopOS (orchestrator)** — a soft halo breathes around the shape, one calm pulse coordinating the rest.

Each loop is small, slow, and self-contained in the SVG, so it plays wherever the avatar is used without any code changes elsewhere. All six drop the accent under `prefers-reduced-motion: reduce`.

## 2026-09-18 — Intro card goes dark, and one creative card loses its photo

**The intro card's three slides are darker and punchier.** Each slide is now a deep base colour with one saturated accent burning through it, instead of a single brand colour washed light: deep green with a live green, deep rust with an ember orange, and the aubergine of the editorial creative with a violet. The accent sits in a different part of the frame on each slide (top left, top right, upper centre) so the three read as three pictures rather than one picture recoloured. The cream slide is gone, so every slide is dark and the headline is white throughout.

**The headline is larger**, 41px instead of 32px (33px on a phone), still revealing word by word as its slide comes into view.

**"Shoot it like fashion, not like health food" is now a text-only card.** The chocolate pour photo is off it; the card is the agent, the copy, and the action. Because there is no longer anything above the copy to act on, the "Generate versions" button moved from the top of the card to the bottom, under the description, where it closes the card off. The like / remix / jam row sits directly under the header. This is a general rule now, not a one-off: any card with no image, chart or table gets the same treatment, and its menu drops "Download assets" since there is nothing to download.

## 2026-09-18 — Feed intro card: the feed explains itself, once

The first card in the feed, the first time the feed opens, is a card from ShopOS about the feed itself. (Its code landed in the previous commit, "Feed | Chat tabs", by accident of timing; this entry describes it.)

- **Three square slides, no photos.** Each is a single brand colour (green, terracotta, cream) as a soft, drifting wash, the same treatment the text-only story slides use. The three slides drift differently: a slow sway, a slow breath, a slow glide. All of it is subtle and slow enough that it reads as alive, not as motion.
- **One headline per slide, revealed word by word** as the slide comes into view, and again every time you come back to it: "Your agents work. This is where it lands." / "Remix any post with the agent that made it." / "Jam with the team when it needs a person."
- **Title and description under the dots**: "This is your feed", then one paragraph on what posts here and the three things you can do with a card (like, remix, jam).
- **Shown once per browser.** The card is only marked as seen once the feed itself is on screen, not while the start screen or the setup run is still covering it. Add `?intro` to the URL to bring it back for a demo or a review.
- It is not a post: it stays out of the Pro deck, the agent chips only show it under "All", and it carries no like / remix / jam row of its own.
- On the cream slide the carousel arrows flip to dark so they stay visible.

## 2026-09-18 — Feed | Chat tabs: even more room around the labels

Widened again, per feedback that the first pass was still tight — 26px a side on desktop, 20px on a phone (up from 18px/18px, originally 12px/12px). The sliding block behind the active tab measures itself off the tab, so it grows with them.

## 2026-09-18 — Setup columns: the intro card gives way to a status line

- **Each column opens with its intro card already there** — the title ("Reading your brand into memory", "Going through 30 days of spend"…) and the one-paragraph explanation of what that column does. No skeleton, no delay: it is up the instant the setup screen is.
- **The moment the first real card lands in any column, every intro card folds away at once.** The card shrinks closed, the gap under it closes with it, and the column's real cards take the space.
- **The intro title moves up under the column heading** as a single shimmering line with the dot-matrix mark in front — the same live-status treatment used before. Only the title moves; the explanation is gone for good, so the information stays on screen without taking any real estate.
- The old per-step status lines that used to be written beside the title ("Reading your store", "Waiting on the brand", "Posting to your feed") are dropped — the line under each title is the intro title and nothing else.
- On a phone the status line sits at the top of the column, under the tab row, with its own inset.

## 2026-09-18 — Data cards: the table never touches the CTA

The key-value table on data cards (e.g. "Five products are disapproved on Meta") sat flush against the CTA bar below it. It now keeps the same air on every side — 12px side insets, 14px above and 14px below — as a written rule in the stylesheet, so it holds wherever the table appears (feed, deck, setup columns) and whatever follows it.

## 2026-09-18 — Mobile setup: polish pass

Phone only; nothing changes on a laptop.

- **One divider, not two** under the column tab row — the leftover per-column rule under the old titles is gone.
- **Bigger tab labels**, sized to be tapped comfortably; the row scrolls sideways if the tabs don't all fit.
- **The expand chevron has no button background** — just the icon, rotating on expand/collapse.
- **The commentary now fades out smoothly** as it nears the agent row, instead of being cut off by a hard edge.
- **Collapsed by default shows only the agent row and the chevron** — the store URL and the running commentary are hidden until you expand.
- **"Connect Meta Ads" / "Connect Shopify" cards drop the "needs access" line** — just the agent name now.
- **The workspace badge (bottom of the rail) shows the Cosmix mark**, not a plain "C".
- **The "I don't have a Brand" row uses a question-mark icon**, not a plus.

## 2026-09-18 — Mobile setup: two accordions, columns as tabs

Phone only; nothing changes on a laptop.

- **The setup rail is a quarter of the screen**, not 40%. The store URL row stays pinned at the top; the commentary underneath scrolls itself to whatever line is being written, so the newest thing is always in view. The agents no longer show names — they sit as a row of small avatars pinned at the bottom of the rail (tap one and its name pops up for a moment).
- **A chevron at the bottom right of the rail expands it** to the full screen, folding the columns down to just their tab row. Tap the chevron again, or anywhere on the tab row, and the rail folds back to its quarter and the columns return. Two accordions: opening one closes the other; the rail never closes below its quarter.
- **The columns are tabs.** Instead of each column carrying its own large title, a single row above the columns names all of them — Brand, Creatives, Ads, Storefront, Visibility — with the one on screen highlighted. Tap a tab to jump to that column; swiping the columns moves the highlight. Columns still waiting on the brand show dimmed in the row. The same tab row runs above the Pro deck on a phone (Signals, Catalog, Creatives…), where the deck sidebar is not available.
- Carried in an uncommitted local fix: the Feed | Chat pill stays attached to its tab on phones (`.seg` position:relative).

## 2026-09-18 — Mobile: the whole flow now works on a phone (branch `mobile`, first draft)

Below 700px wide the prototype re-lays itself out for a phone. Nothing changes on a laptop; this is the same file, responding to the screen it is on.

- **First screen**: the headline wraps instead of running off the edge, the URL field and "Build My Team" fill the width, and the "I don't have a Brand" wizard stacks the same way.
- **Setup**: the setup rail (store URL, the running commentary, the agents waking up) sits *above* the columns instead of beside them, capped at about 40% of the screen and scrollable. Each column below fills the screen; swipe sideways to move between Brand Memory, Creatives, Ads and the rest. The columns still reveal themselves left to right as they fill.
- **Navigation**: the left rail is gone from the page and becomes a drawer. A menu button at the top left opens it (same contents: Home, Search, Library, Agents, Skills, Memory, History, workspace badge); tap the dark area to close. The top bar keeps Feed | Chat, the layout switch (or the Pro invitation) and credits; the theme and notifications chips are hidden on phones for now.
- **Feed**: one column, edge to edge with a 12px gutter. Tune Feed and Jam with Team sit centred along the bottom instead of stacked over the cards.
- **Pro deck**: one agent column per screen, snapping as you swipe. Column edges can't be dragged on a phone (there is nothing to resize).
- **Overlays**: Upgrade to Pro, Jam with team, Tune, Upload and Out-of-credits open as bottom sheets; the CRM drawer, History and the Agents page go full width; the creative editor keeps the image, thumbnails, toolbar (scrolls sideways) and the edit box, and drops the zoom control and the View input / Add annotations buttons for now.
- Hover tooltips (column-switch labels, card action tips) are switched off on touch screens, where a tap would otherwise leave them stuck open.

**Known gaps in this draft**: the theme toggle and notifications have no home on the phone top bar yet; the deck sidebar (Cosmix summary, column filters, dashboard card) is not reachable on a phone; the setup rail does not auto-scroll to its latest line; nothing has been checked on a real device, only in a phone-sized browser.

## 2026-09-18 — Creative director outputs open in an edit view, not in chat

Clicking "Remix with Agent" on any Creative director card (feed, deck or the loading columns) now opens that creative full-screen in its own editor overlay, in place of the chat flow that Remix normally opens. Clicking the image itself does nothing, as before. Jam with Team, and Remix on every other agent, are unchanged and still go to chat. The overlay: campaign name and zoom control (−/+, 25% steps, 25–200%) top left; View input, Add annotations, version history, download and close top right; the creative in the middle at 75%, with a thumbnail strip under it; the Split Layers / Upscale / Remove BG / Resize Image / More Actions toolbar and the "Describe your edits" box at the bottom. A card with several images shows all of them as thumbnails with previous/next arrows beside the image (keyboard ← → also work); it opens on whichever slide the card was showing. Esc or × closes.

- Each Creative director post now carries a campaign name for the editor title: Ingredient Story, Morning Ritual, Editorial Pour, The Transformation, Launch Reveal (shown as "Campaign: Cosmix").
- The toolbar and header actions show a confirmation toast in this prototype; nothing is generated yet.

## 2026-09-18 — Finish screen copy

The onboarding finish screen now reads "Cosmix, welcome to your feed". The button under it is unchanged (still "Get started").

## 2026-09-18 — Stories in Cosmix colours, slowly moving

- The four story rings above the feed are repainted from the Cosmix palette (green, terracotta, cream), as soft blurred washes rather than hard gradients; the googly eyes are gone.
- Opening a story: each of its three slides takes one of the three colours from its ring (same order), as a blurred, slowly drifting wash behind the text. The movement runs continuously on the ring and inside the story; it stops for anyone with reduced motion turned on.
- Text over the cream slide sits on a slightly stronger dark scrim so the title and close button stay readable.

## 2026-09-18 — Cosmix build: the current prototype, filled with Cosmix

This fork now runs on the same code as the main (Urban Performance) prototype, with every piece of brand content swapped for Cosmix. Nothing in the flow, the layout or the interactions differs from main; only what the cards, stories and setup say.

**What is the same as main (new to this fork)**
- The first screen's three paths: enter a URL, "See ShopOS in action" (7 demo brands), "I don't have a Brand" (3-question wizard).
- The loading state's Brand Memory column (editable cards, discard on edit, the Shopify connect row) and the one-line status under each column title.
- The single feed and the Pro deck show the same set of cards, interleaved automatically, with the Meta and Shopify connect prompts anchored to specific cards.
- Card menu and dock copy: "Copy link to share", "Tune Feed", "Jam with Team". Finish screen reads "Your brand's feed is ready".

**What is Cosmix**
- Build My Team with an empty field opens cosmix.in; the setup rail shows cosmix.in and reads the real catalog size (80 products).
- Brand Memory is written from cosmix.in: About the brand, Brand guidelines (the real wordmark, the theme's green / terracotta / cream, Recoleta headings with Manrope body), Voice and tone, Company (founded 2019 by Vibha Harish and Soorya Jagdish, Bengaluru, in-house manufacturing, Marico's 60% stake at a ₹375 cr valuation), Product catalog, Product information, Audience, Industry leaders (The Whole Truth, OZiva, Kapiva, Wellbeing Nutrition). Any other host still gets the generic placeholder set.
- All 22 feed and deck cards, the four stories, History, the CRM drawer copy and the column status streams carry the Cosmix copy and imagery from the previous Cosmix build, unchanged.
- The Cosmix spiral mark sits in the deck sidebar; the workspace badge reads C / Cosmix.

**Media rules kept from the previous Cosmix build**
- Every post image renders as a square, cropped from the top, including landscape art. A card can ask for its image to be fitted rather than filled (the nutrition-panel card), and a chart card can carry supporting images as a carousel (the discovery-prompts card).

**Housekeeping**
- Cosmix pack shots that still sat under Point Taken filenames (ptup-*, pt-*) are renamed cx-*; the unused Urban Performance photography is not carried over.
- Known gap: the feed cards say "5 of 40" products (copy from the earlier Cosmix build) while the store, and the setup rail, count 80.

## 2026-09-18 — Ring card: drop the "Health" tag, center the score

The number in the middle of the Apple-Health-style ring card had a small "Health" label above it. Removed it and let the score sit centered in the rings on its own.


## 2026-09-18 — Drop the dial-variant brand-health card; fix the connect-card anchors it broke

The dial read of the brand-health card is commented out of `POSTS` (three passes at the shape, none of them right — kept, not deleted, in case it's worth another attempt). That shifted every index after it, which broke the meta/Shopify connect-card placement in the feed: it was anchored to `POSTS[1]`/`POSTS[3]` by position, and `POSTS[3]` no longer pointed at the card it was supposed to. Anchored by title instead, so it can't silently point at the wrong card again — and while fixing it, moved the Shopify prompt to follow the Cloud Soft Tee storefront post instead of the old dial card, which fits the "publish the changes" copy better anyway.


## 2026-09-18 — Feed and Pro deck now show the same cards

The single-column feed was quietly a subset of what Pro mode's columns show: it was missing one image post, one data-led post, and all eight cards that used to be deck-only, twelve cards short of the full twenty-two. The feed's card order now comes from the same three lists the deck reads (interleaved for rhythm rather than dumped in as one long block), so any card added to those lists appears in both places automatically. Signals stays deck-only, as intended — everything else is now identical either way you look at the feed.


## 2026-09-18 — Feed card copy: clearer labels

- Card menu: "Copy link" is now "Copy link to share"
- Bottom-right dock: "Tune" is now "Tune Feed", "Jam" is now "Jam with Team"


## 2026-09-18 — Onboarding: "Your brand's feed is ready"

The finish-screen headline is now "Your brand's feed is ready" (was "Your feed is ready").


## 2026-09-18 — Brand Memory: discard on edits, no scrolling, fewer and clearer cards

**Discard, not just save**
Editing a card now shows a check and a cross, not just a check. Check keeps what you typed; the cross puts the card back exactly as it was — text and any tags you removed while editing.

**Toned down the edit chrome**
No background box behind the text you're editing, and no background on the check/cross buttons — just the icons, so editing doesn't call more attention to itself than the card's content does.

**Tag crosses only take up space while the card is being edited**
A tag pill used to reserve room for its remove-cross at all times (revealed on hover). Now the cross has zero width until the card enters editing state, then the pill opens up to show it. No dead space on cards you're not touching.

**Dropped the fixed-height, scrolling cards**
Cards were pinned to one height with an internal scrollbar; nothing in them was ever long enough to need it. Cards now size to their own content — short cards are short, longer ones are taller.

**Fewer cards, clearer purpose**
Cut Pricing, Channels, Drops and collections, standalone Business landscape, Growth direction, and the "Still missing" card. Merged the two Product information cards into one. Company now carries a bit more of what Business landscape used to say, since that's where it belongs. Catalog is now "Product catalog" and says plainly what's being pulled together. Audience keeps its text, loses its (repetitive) tags. Competitors keeps its tags, loses its description — just the names. Voice and tone moved up next to the new "Brand guidelines" card (the old untitled Brand Kit card now has a name). Nine cards total, down from fifteen.

**New: a Shopify connect row**
Reuses the exact connector-row shape from the Signals column — logo, name, one line, a white Connect button — with copy written for this moment ("Connect Shopify for detailed product analytics."). It's the one card in the column that isn't a finding, so it carries no edit icon; clicking Connect gives it its own short, self-contained "Connecting → Connected" state.


## 2026-09-18 — Brand Memory: editable, scrollable cards during loading

**The first column of the loading state ("Brand Memory") is now editable**
Each card is a fixed height and scrolls inside itself if the copy runs long, so editing one card never pushes the others down the column. A pencil icon in the top-right corner opens editing — click it and the card's description becomes an input; click the checkmark (or press Enter) to save, or press Escape to cancel. A soft fade at the bottom of a card is the cue that there's more to scroll to.

**New: generic, reusable card titles**
Card titles are no longer one-off headlines specific to a single demo brand (e.g. "The Flex henley is leading the brand right now"). They're now a fixed set of category labels — "About the brand," "Product information," "Business landscape," "Growth direction" — that make sense for any brand ShopOS reads. The label stays put; only the finding underneath it (what was actually read off the store) is what gets edited.

**Only text cards are editable**
The Brand Kit card (logo, colors, typeface swatches) carries no edit icon — it isn't a text finding, so there's nothing to type into.

**Confirmed: this column only ever appears during loading**
It's built fresh each time onboarding runs and is never carried into the finished feed — nothing else needed to change here, but flagging it since it came up as a question this session.

## 2026-09-17 — Onboarding flow: two new paths, a product-first wizard, and polish

**New: two more ways to start, right on the first screen**
Below the "Enter your store URL" field, there are now two extra options: **"See ShopOS in action"** and **"I don't have a Brand"**. Typing a real URL into the field automatically hides these two options (typing anything else does not); the field also silently blocks characters that can't appear in a URL as you type.

**New: "See ShopOS in action" → pick a demo brand**
Clicking it opens a brand-picker screen with 7 sample brands (Dunder Mifflin, Los Pollos Hermanos, Chocolate Frogs, Fishwife, Miu Miu, Vacation Inc., Dorsey). Picking one and continuing runs the same setup/loading experience as a real store. Only the parts of the screen that actually change (the subtitle, the body, the button label) animate — the logo and headline never move.

**New: "I don't have a Brand" → a 3-question wizard**
Instead of jumping straight to setup with no information, this now asks three quick questions, one at a time: what's your product, who's your audience, what should we call your Brand. Answering one reveals the next; each answered question collapses to show just the answer with a pencil icon to go back and edit it. Editing an earlier answer discards whichever questions came after it, so the flow always makes sense. The brand name you type here now also shows up in the "URL" field on the loading screen, instead of a generic placeholder.

**Fixes and polish**
- The "Build My Team" button on the first screen always shows in its active white state — it no longer greys out when the input is empty.
- Clicking anywhere inside a text field (not just precisely on the text) now focuses it.
- The "Try your own Brand" button on the brand-picker screen is no longer stretched to match the width of the button next to it — it sizes to its own label.
- Fixed a background color mismatch (was pure black, should be the site's standard near-black) on both the URL screen and the brand-picker screen.
- Fixed a couple of small spacing/alignment misses in the new 3-question wizard so its icons and text line up with the rest of the screen.
- Set up version control for this prototype so changes can be tracked going forward.
