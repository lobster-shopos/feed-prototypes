# Loops → Feeds — Flow Context

**Compiled:** 12 Sep 2026
**Purpose:** Agent-readable capture of the **Loops → Feeds** flow as it exists in design + demo, so future agents understand the screens, sequence, components, tokens, copy, states and interactions without re-deriving them. This is **synthesis of what the sources show**, not a spec and not code.
**Status of this flow:** The Figma + video flow in §1–§8 was the **last flow we officially worked from**. A **later direction shift** (a hand-built HTML feed prototype `shopos-feed_11`) is captured in **§9** and **supersedes the feed design where noted** — the core feed is mostly the same, with a richer surrounding product. §1–§8 are kept intact for history. Read §9 for the current direction.

> Reads as a sibling to `prd/loops-first-context-v1.md` (the loops-first onboarding thesis) and `loops-into-feeds.md` (the project doc). This doc is the **feed-side** continuation: what happens after the loops-first onboarding lands the user, i.e. the **Feed** the loops feed into.

---

## 0. Source inventory

| # | Source | Ref | Coverage |
|---|---|---|---|
| 1 | **Figma** — "ShopOS Redesign — Feed", section **"Flow with One8"** | fileKey `010CaB5lelUunG0s62vYgU`, node `1016:153875` | ✅ Read via Figma MCP: `get_metadata` (full frame tree), `get_variable_defs` (tokens), `get_screenshot` on ~19 frames. `get_design_context` returned metadata (not code) at this scale. |
| 2 | **Screen recording** — feed intro scroll | `~/Desktop/Screen Recording 2026-09-11 at 2.43.09 PM.mov` (7.76s, 2798×1822, 32fps) | ✅ Decoded with local ffmpeg (frames @ 2fps). |
| 3 | **Screen recording** — feed browse | `~/Desktop/Screen Recording 2026-09-11 at 11.29.38 AM.mov` (35.85s, 3026×1950, 46fps) | ✅ Decoded with local ffmpeg (frames @ 1fps + contact sheet). |
| 4 | **Direction-shift feed prototype** (see §9) | `~/Downloads/shopos-feed_11.html` (single self-contained HTML/CSS/JS, ~2.4 MB w/ inline base64 assets; title "ShopOS Feed") | ✅ Read markup, inline `<style>`/`<script>`, `POSTS`/`STORIES`/toast data, copy. |

Environment note: `ffmpeg` was not installed; a static arm64 build was fetched to `/tmp/ffbin/ffmpeg` to decode the `.mov` files. No blockers hit on Figma (auth worked) or video (both decoded).

**Confidence key:** `[Figma]` seen in the design · `[Video]` seen in a recording · `[Inferred]` my reading, not literally stated.

**The brand used throughout is One8** (Virat Kohli's performance-sportswear label) as the worked example. One scan frame shows `casio.com` in the URL bar while the content is One8 — a placeholder mismatch, not a second brand (§3, §8).

---

## 1. Overview — what "Loops → Feeds" is

ShopOS's loops-first onboarding (give a URL → ShopOS studies the brand → a team of agents is stood up) now **lands the user in a Feed** instead of a dashboard. The Feed is an **Instagram / TikTok-style vertical surface** where the brand's always-on agent jobs (the "loops") **surface their outputs as posts and stories**. Each post is one piece of agent work — a campaign idea, a launch concept, a trend read, a store/workflow suggestion — authored by a named agent persona and carrying **one primary action** (Publish, Start creating, Explore trend…) plus a common **"Jam with team"** escalation.

The activation arc: **URL → "your team is ready" → Go to Feed → scroll a feed of ready-to-act agent work.** The Feed is the proof-and-consumption surface; a parallel **Chat** mode is the command surface (top-center `Feed | Chat` toggle). This realizes the loops-first thesis line "Chat is the command layer, Today is the proof layer" — here the proof layer is a **Feed**.

Mental model: **loops run in the background → their results show up as a personalized, brand-specific content feed the founder reacts to.**

---

## 2. The flow, step by step

### A. Onboarding (loops-first entry) `[Figma: row y=80]`

1. **Landing — "Get a team for your Brand."** (`1058:157822`)
   Subhead "Enter a Brand URL & we'll set everything up!". One centered URL field (globe icon, placeholder "Enter your store URL"). Two low-friction alternates beneath: **"See ShopOS in action"** (megaphone) and **"I don't have a Brand"** (plus-circle). Primary **"Build My Team ›"** button is **disabled/greyed** until a URL is entered. No sidebar, no chrome.
2. **URL entered** (`1058:157850`) — field shows `one8.com` with a clear (✕) affordance; **"Build My Team ›"** becomes active (filled white).
3. **Scanning / "public learning"** (`1058:157879`) — the field collapses to a compact URL chip showing **"est. 4 mins left"** + ✕. A **vertical timeline connector** on the left threads a sequence of live work sections, each revealing as it completes:
   - **"Studying your business…"** → Company Info card (One8 described as a performance sportswear brand co-created with Virat Kohli…), a category chip **"Fashion & Lifestyle"**, social handles (`one8world` on facebook/instagram/linkedin), and forward chips **Product Info ›**, **Audience Info ›**, **Competitor Info ›**.
   - **"Extracting your Brand Guidelines…"** → shimmer placeholders → resolves to logo, color swatches (`#E8322E`, `#3B6FD8`, `#2E8B57`) and **Typeface: Outfit**.
   - **"Browsing your product catalog…"** → product shots + **"80+ Products Found"**, and a **"Connect Shopify"** card ("Get deeper insights & analysis on your ads").
   - **"Watching your ad presence…"** → ad creatives + **"14+ Ads Found for analysis"**, and a **"Connect Meta"** card.
   - **"Analysing visibility on AI searches…"** → GEO panel: **Overall Score** gauge, **Technical Health** checklist (Crawlable, LLMs.txt, Sitemap, Wikipedia, Speed, Wikidata), **Citation Rate**, **Engine Visibility** bars.
4. **Scan populated** (`1058:158125`) — same board with real content filled in (this is the frame showing `casio.com` in the chip; content is still One8).
5. **Complete** (`1058:158651`) — GEO panel resolves (e.g. **Overall Score 33**, Citation Rate **10%**, mixed pass/fail technical health, per-engine visibility ~10–15%), then the closing state: **"Your Brand is in sync and your team is ready!"** with a **"Go to Feed ›"** button. → hands off to the Feed.

Connectors (Shopify, Meta) are offered **contextually inside the scan** ("get deeper insights…"), never as an upfront wall — consistent with the loops-first connector rule.

### B. Enter the Feed — first-time intro `[Figma: "First Time Landing (Style A)" row y=1254; Video 3]`

On first arrival the Feed opens with **three full-height intro cards** the user scrolls through (each a branded gradient panel with the One8 loop mark):

1. Red card — **"This is Your Feed"** (`1016:145777`)
2. Green card, tilted product photos — **"We use AI to create what's best for your Brand"** (`1016:145878`)
3. Blue card — **"So you can focus on scale and strategy"** (`1016:145981`)

Scrolling past the intro reveals the **real feed** (`1016:146137`): a **Stories row** at top and the first agent post. `[Video 3]` shows exactly this scroll (intro cards → stories + first post) end-to-end.

A **Style B** first-time landing also exists (`1016:150102`) — a **minimal / near-empty** variant (just the top `Feed|Chat` toggle and top-right controls, no intro cards). Purpose unclear; likely an alternate/empty-state treatment. `[Figma]`

### C. Browse the Feed `[Figma + Video 2]`

A single-column, mobile-width feed of **agent-authored posts**, each: author persona + relative time, media (often a **swipeable carousel**, page dots + ›), an action row, a caption (title + supporting line), and **1–2 CTAs**. Observed posts:

| Author persona | Post (title) | Media | Primary CTA |
|---|---|---|---|
| **Creative director** · 12 min | "One8 footwear spotted at the Women's Asia Cup" | red sneakers carousel | **Publish Campaign** (Meta) |
| **Performance marketer** · 28 min | (performance/ad post) | — | — |
| (creative) | "Create content around live cricket moments" — product **"Cover Drive 18 X"** | cricket spike on grass | **Start creating** (workflow/loop-style) |
| **Storefront manager** · 3 hr | "A launch campaign for the Seam XVIII waitlist" — **"THE 18 MINUTE DROP"** | gold-on-maroon key art | (launch CTA) |
| (trend/visibility) | "Cricket-inspired fashion is gaining momentum" | two models, heritage backdrop | **Explore trend** |

Every post also offers the secondary **"Jam with team"** action. The author personas map to the four agent domains (creative / performance marketing / storefront / AI-visibility) — the same four surfaced in Tune Feed (§4). `[Video 2]` is a 36s browse through many such posts.

### D. Post interactions `[Figma rows: Liking, Remix, Copy Link, Bookmark]`

From a post's action row (heart · remix · link · … · bookmark):
- **Like** → tooltip **"Like to see more like this"**, heart fills red. (Signals feed personalization.) (`1016:150916`)
- **Remix with Agent** → tooltip **"Remix with Agent"** (`1016:150107`) → transition **"Preparing agents"** (`1045:109876`) → opens the **Chat/agent workspace "Campaign direction"** (`1045:104785`): the agent says *"I brought the campaign direction with me. I created this from your current product photography and a few visual patterns showing up across your category,"* shows a 2×2 moodboard of reference images, and offers a composer **"Describe what you want to create…"** (+ attach, "Auto" model selector, mic, generate). → **Remix bridges Feed → Chat**, pre-loaded with the post's context.
- **Copy link** → toast **"Post link copied for sharing"** (green check). (`1016:153061`)
- **Bookmark** → tooltip **"Save Post"**; saved items live under **Feed ▾ → Saved Posts**. (`1016:153880`)

### E. Stories & Story viewer `[Figma: Feed05 / "Viewing a Story"]`

A **Stories row** sits above the feed: circular rings labelled **Brand Health, Get started, New Trends, Recap, New feature, Your team**. Opening one enters a full-screen **Story viewer** (`1016:161999`): segmented progress bars at top, ✕ to close, ‹ › to navigate, media (e.g. an ambassador video with a One8 duffel). Top bar switches to the **ShopOS** wordmark while in story mode.

### F. Tune / manage the Feed `[Figma: "Tune Feed", "Profile"]`

- **Feed ▾** (top-center) opens a menu: **Saved Posts** · **Tune Feed**. (`1016:157323`)
- **Tune your feed** (Settings, `1016:158968`) — "Choose what you want ShopOS to spend more or less time on." Four categories, each a **Low / Normal / More** segmented control (default **Normal**):
  - **AI visibility** — mentions, rankings and visibility gaps
  - **Creative generation** — campaigns, visuals and batch generation
  - **Performance marketing** — ad insights, tests and recommendations
  - **Storefront manager** — store improvements and conversion issues
  Settings left-nav: Personal (Profile, Connectors, Skills) · Workspace (Tune your feed, Workplace settings, Usage & billing) · Support (Help & Support) · "‹ Back to Feed".

### G. Jam with team (human escalation) `[Figma: "Jam with Team"]`

The persistent floating **"Jam with team"** button (bottom-right, and per-post) opens a modal (`1016:160334`): a green illustrated chat preview (*"Can someone help me update my Shopify store faster?"* → *"Absolutely. We can set up a workflow for product updates, collections, and store tasks."*), then **"Jam with team"** — *"We'll reach out to you on WhatsApp so you can stay in touch and move faster. Our team will get back to you in 12 to 24 hours to help."* CTAs: **Submit request** · **Connect on WhatsApp** (green). This is the loops-first "+Human / deployment team" upsell, surfaced **post-landing** exactly as ruled in the loops-first context.

### H. End of feed / paywall `[Figma: "Ending a Feed"; Video 2]`

After the last post ("Cricket-inspired fashion is gaining momentum") the feed terminates in a limit card (`1016:162805`): **"You've reached your free feed limit"** — *"You've used your free creations. Keep discovering new opportunities with credits"* — **Find more**. Credits are the metering unit (see the **500** credits chip in the top bar). `[Video 2]` confirms this end state on scroll.

---

## 3. Screens & components inventory

**Board:** section **"Flow with One8"** (`1016:153875`), a grid of sub-flows. Left column (x=80) frames named `:::` are **title/label cards**; the real screens sit to their right (x≥1784).

| Sub-flow | Row (y) | Key node IDs (screens) |
|---|---|---|
| **Onboarding** | 80 | `1058:157822`, `1058:157850`, `1058:157879`, `1058:158125`, `1058:158651` |
| First Time Landing (Style A) | 1254 | `1016:145777`, `145878`, `145981`, `146137`, `150101` |
| First Time Landing (Style B) | 2428 | `1016:150102` (minimal variant) |
| Liking a Post | 3602 | `1016:150916`, `148378`, `148483` |
| Remix with Agent | 4776 | `1016:150107`, `1045:109876` (Preparing agents), `1045:104785` (Campaign direction) |
| Copy Link | 5950 | `1016:153061` |
| Bookmark / Wishlist / Save Post | 7124 | `1016:153880`, `154710`, `155676` — *(note on frame: "Moodboard Flow is separate")* |
| Tune Feed | 8298 | `1016:157323` (Feed ▾ menu), `1045:110888`, `1016:158968` (Settings › Tune your feed) |
| Jam with Team | 9472 | `1016:160334` |
| Viewing a Story (Feed05) | 10646 | `1016:161999` |
| Ending a Feed | 11820 | `1016:162805`, `164004` |
| Connector (component) | 12125 | `1082:127125` |

**Recurring components**
- **Left icon rail:** home, search, upload, shopping-bag, agent/brain; brand mark top, user avatar ("H") bottom.
- **Top bar:** center segmented **`Feed ▾ | Chat`** toggle; right cluster **theme toggle (sun)**, **notifications (bell)**, **credits chip ("500", diamond)**. In story mode the left shows the **ShopOS** wordmark.
- **Post card:** author (persona + time) + **⋯** overflow; media carousel (page dots + ›); action row **like · remix · copy-link** … **bookmark**; caption (title + supporting text); CTA row (primary + "Jam with team").
- **Stories row** (circular rings) → **Story viewer** (progress segments, ✕, ‹ ›).
- **Floating "Jam with team"** button (bottom-right).
- **Onboarding scan card** with left **timeline connector** + section headers + shimmer→resolved tiles + inline **Connect Shopify/Meta** cards.
- **Tune-feed row:** icon + title + description + **Low/Normal/More** segmented control.
- Tooltips/toasts, disabled→active primary button, limit/paywall card.

---

## 4. Visual / design notes

**Theme:** dark, near-black, editorial. Content is a **centered mobile-width column** (~feed post width) on a wide dark canvas; a thin left icon rail; floating actions. Frames are 1512×982 (desktop web).

**Tokens** (`get_variable_defs`, SF Pro type):

| Group | Token → value |
|---|---|
| Surfaces | `surface/background` `#0a0a0a` · `surface/card` `#171717` · `surface/muted` `#262626` · `Fill/fill-50` `#262626` |
| Text | `text/foreground` `#fafafa` · `text/foreground-subtle` `#d4d4d4` · `text/disabled-foreground` `#525252` |
| Icon | `Icon/icon-primary` `#fafafa` · `Icon/icon-muted` `#a3a3a3` |
| Action | `action/accent` `#404040` · `action/primary-foreground` `#0a0a0a` (dark text on light primary button) |
| Line | `line/border` `#262626` |
| Radii | `rounded-lg` 8 · `rounded-xl` 12 · `rounded-3xl` 20 · `rounded-full` 9999 |
| Spacing | 0 · 4 · 8 · 12 · 16 · 24 · 36 · 48 |
| Type | `Text 20px/Medium` (SF Pro, 510, lh 30) · `Text 12px/Medium` (SF Pro, 510, lh 18) |

**Brand accents** (One8, extracted in-scan): red `#E8322E`, blue `#3B6FD8`, green `#2E8B57`; typeface **Outfit**. These drive the intro-card gradients (red/green/blue) and post key art.

**Layout intent:** one primary object + one primary action per surface (a post → act on it; a scan → watch it; a story → view it). Primary buttons are light-on-dark; secondary/ghost buttons are muted. Generous rounding (cards `xl`/`3xl`, pills `full`).

---

## 5. Interactions & states

- **Onboarding primary button:** disabled until URL present → active. Field: empty → filled (with ✕) → collapsed chip with **"est. 4 mins left"** during scan.
- **Scan:** progressive reveal per section (shimmer → resolved), inline contextual connectors, GEO scorecard with pass/fail + gauges; terminal "team is ready" → Go to Feed.
- **First-time Feed:** 3 intro cards (scroll-gated) → stories + posts. Style B = minimal/empty variant.
- **Post actions:** Like (tooltip "Like to see more like this", fills) · Remix (→ "Preparing agents" → Chat "Campaign direction") · Copy link (toast "Post link copied for sharing") · Bookmark (tooltip "Save Post" → Saved Posts).
- **Carousel:** multi-image posts, page dots + › chevron.
- **Feed ▾ menu:** Saved Posts · Tune Feed.
- **Tune feed:** four agent categories × Low/Normal/More (default Normal).
- **Jam with team:** modal → Submit request / Connect on WhatsApp; "12–24 hours" SLA.
- **Stories:** ring → full-screen viewer (segments, ✕, ‹ ›).
- **End state / paywall:** "You've reached your free feed limit" → Find more; credits metering ("500").
- **Modes:** `Feed` (consume) vs `Chat` (command); Remix is the bridge from a post into Chat.

---

## 6. What the videos add (beyond static Figma)

- **Video 3 (7.76s, "…2.43.09 PM"):** the **first-time entry motion** — smooth vertical scroll through the three intro cards ("This is Your Feed" → "We use AI…" → "So you can focus on scale and strategy") into the live feed (stories row + first sneaker post). Confirms the intro is a **scroll**, not a click-through, and that the feed sits directly beneath it.
- **Video 2 (35.85s, "…11.29.38 AM"):** a **long, real browse** of a populated feed — many more posts than the Figma frames show, each authored by a different agent persona ("Creative director", "Performance marketer", "Storefront manager") with distinct media and CTAs (**Publish Campaign**, **Start creating**, **Explore trend**), interleaving product hero shots, launch key art ("THE 18 MINUTE DROP" / "Seam XVIII waitlist"), ambassador/editorial imagery and analytics tiles, ending in the **free-feed-limit** card. Establishes the **variety, density and pacing** of the feed and that posts are **agent-attributed, action-first** units.

Both recordings use the **One8** brand and match the Figma frames 1:1 in structure — they are the animated proof of the same flow, not a different concept.

---

## 7. How it maps to loops-first

- The four **Tune Feed** categories = the four loops-first agents (AI visibility ≈ Big Head, Creative generation ≈ Monica, Performance marketing ≈ Gavin, Storefront manager ≈ Richard). Post authors reuse these personas.
- **Feed = the "Today/proof" surface**; **Chat = the command layer** — the loops-first split, made concrete. Loops (recurring agent jobs) **publish their outputs as feed posts/stories**.
- **Jam with team** = the ruled post-landing human/deployment-team upsell (not in onboarding).
- **Contextual connectors** (Connect Shopify/Meta inside the scan) match the loops-first connector rule.
- **Credits/paywall at end-of-feed** matches "value before persistence" — free creations first, credits to continue.

---

## 8. Open questions / where it stops

- **`casio.com` vs `one8` mismatch** in scan frame `1058:158125` — placeholder artifact; the intended brand is One8.
- **Style B first-time landing** (`1016:150102`) is essentially empty — purpose (empty state? Chat landing? deprecated?) not shown.
- **Alternate onboarding branches** — "See ShopOS in action" and "I don't have a Brand" have entry points but no destination frames captured here.
- **Chat mode** is only reached via Remix ("Campaign direction"); a standalone Chat landing isn't fully specified.
- **"Moodboard Flow is separate"** — noted on the Bookmark frame; the moodboard flow is out of scope of this board.
- **Post CTAs vary by type** (Publish Campaign / Start creating / Explore trend / launch) — the full taxonomy of post types → actions isn't enumerated in one place.
- **Loop ↔ post linkage** — how a running loop decides to emit a post, cadence, and approval/autonomy on feed actions aren't shown on these screens (they live in the loops-first model).
- **Stories content** beyond labels (Brand Health, Recap, "Your team", etc.) is only partially shown.
- **This is the last officially-worked flow.** Anything past what §2–§6 describe (deeper Chat, connectors detail `1082:127125`, wishlist/`154710`/`155676` variants, `164004`) is either unbuilt or not captured here — do not assume beyond the sources.

---

## 9. Direction shift (shopos-feed_11)

Harsh shared a **later iteration of the same Loops → Feeds idea** as a local prototype (§0 source 4). The **feed itself is mostly unchanged** from the Figma design (§1–§6) — same dark SF Pro theme, ~500px centered feed column, agent-authored posts, stories, Feed/Chat toggle, Jam-with-team, credits/paywall. What changed is **the product wrapped around the feed got substantially richer**, and some copy/brand/structure shifted. Where the two disagree, **treat §9 as the newer intent** and §1–§6 as the prior baseline.

**`shopos-feed_11.html`** — the **feed direction**, v11. A single self-contained, hand-built HTML/CSS/JS prototype (no framework; posts/stories rendered from inline JS `POSTS`/`STORIES` arrays). This is the "direction shift" for the Feed, detailed below.

### 9.1 What stayed the same (feed core)

- Dark theme, **SF Pro**, single centered feed column (`--feed-w: 500px`), rounded cards (`--r-card: 20px`).
- **Feed | Chat** toggle top-center; **credits chip ("500")** top-right.
- **Agent-authored posts**: author persona + relative time, media, action row (**like · remix · copy-link · save · more**), title + supporting line, **one primary CTA** + **Jam**.
- **Four agent personas**: Creative director, Performance marketer, Storefront manager, AI visibility — unchanged from §2.
- **Stories row** → full-screen **Story viewer** (progress bars, prev/next, close).
- **Jam with team** modal — identical WhatsApp copy ("…12 to 24 hours to help", Submit request / Connect on WhatsApp).
- **End-of-feed / free limit** card ("You've reached your free feed limit" → **Find more**) retained.
- **Copy link** toast unchanged: "Post link copied for sharing".

### 9.2 What's new or changed vs the Figma flow

**Navigation rail — now a full, expandable IA (biggest change).** Figma had a thin fixed icon rail. v11 has a rail that **expands 60px → 236px** (hover/toggle) with labels + wordmark, exposing a real product IA:
- **Home · Search (⌘K) · Library · Agents · Skills and connectors · Memory · History**, plus a user badge (brand: **"Urban Performance"**, user **Vedant**).
- **Agents flyout:** Creative generation · AI visibility · Performance marketing · Shopify store.
- **Skills and connectors flyout:** Connectors (Shopify · Meta Ads · Google Merchant Center) · Skills (Brand voice · Product photography · Trend research).
- Note: this **surfaces the "machinery"** (agents, skills, connectors, memory) that loops-first deliberately hid. Most rail destinations are stubs here ("… is not built in this prototype yet").

**Chat / Create surface — fully built out** (Figma only showed the Remix "Campaign direction" screen). The `Chat` tab has:
- **Idle state:** greeting **"Hello Vedant, what do you want to make?"** + composer ("Describe what you want to create…", + attach, **"Auto"** model chip, mic, send) + a **tray** (Moodboards · Connectors).
- **Mode switch:** **Create · Analyze · Automate · Manage** (Create default).
- **Prompt starters:** 🧩 "Create a batch of fresh content for my brand" · 🎬 "Create UGC-style content from my products" · 📣 "Create new ads for my next campaign" · 🛍️ "Create and improve content for my product catalog".
- **Work state:** `chat-work` + a bottom **composer-dock** for an active generation session.

**⌘K command palette** (new): "Search sessions, posts, agents and skills", with `esc` / `↑↓ to move` / `↵ to open` / `⌘K anywhere`.

**History drawer** (new): "History" list with a "Filter sessions" input — chat/session history as a slide-in panel.

**Post types expanded** beyond Figma's image carousels. Posts now carry a `ratio` and render at **4:5, 1:1 (square), or 16:9 (wide)** to match the placement, plus two data post types:
- **Brand-health rings post** — an overall score + activity-style rings (e.g. score 78; Visibility 71 / Content 86 / Storefront 74). *"Urban Performance brand health climbed 12 points this week."*
- **Competitive bar-chart post** — ranked bars vs competitors (Decathlon 45 · Jockey 38 · XYXX 27 · **Urban Performance 15**). *"Improve visibility for performance menswear searches."*

**CTAs are now per-post and more specific:** Publish Campaign (Meta) · Approve concept · Open report · Start creating · Apply Update · Generate versions · Explore trend. (Figma showed a smaller set.)

**Post overflow (⋯) menu — new, richer** with feedback/personalization actions (toasts): **Not interested** ("We'll show fewer posts like this") · **See less from this agent** ("You'll see less from this agent") · **Snooze agent** ("Agent snoozed for 7 days") · **Download** ("Assets are downloading") · **Report** ("Thanks — we'll look into it").

**Stories reframed as editorial / education** (Figma stories were: Brand Health, Get started, New Trends, Recap, New feature, Your team). v11 stories are **Trends · What is new · How to · Popular ads** — each 3 slides, 5s auto-advance, cube-turn between stories. They **teach the model**, e.g.:
- *What is new:* "Every ratio, one feed" · "Remix with Agent" (take a post into chat, get three directions back) · "Jam with the team".
- *How to:* **"Tune the feed by liking"** (every like teaches the agents; the feed narrows within a week) · **"Start from a post, not a prompt"** · **"Wishlist what is not for today"**.

**Bottom dock — three pills** (Jam · Upload · Tune) replace Figma's single floating "Jam with team". "Tune" is now framed as **tune-by-liking** rather than the Figma Settings › Low/Normal/More sliders (that Settings surface isn't in v11).

**Credits / monetization made explicit** (new): a **"You're out of credits"** modal — *"Top up your credits to continue creating, analyzing, and running work in ShopOS"* → **Top up Credits**; topping up **loads more feed** ("3 new posts added"). The free-limit card from Figma is kept alongside it. Credits gate creation.

**Jam success state** (new): "Your ShopOS team has joined your chat" → **Continue**.

**Interaction copy tweaks:** Like → toast **"We'll create more posts like this!"** (Figma tooltip: "Like to see more like this"). Save → **"Saved to your wishlist"** (Figma: "Save Post"; note the shift to *wishlist* framing).

**Brand example changed:** One8 (cricket/sportswear) → **Urban Performance** (performance menswear; products *The Flex henley, The Cloud Soft Tee, Moovex, "Designed for Life"*; competitors Decathlon/Jockey/XYXX). Cosmetic, but all v11 copy is Urban-Performance-specific.

### 9.3 Design tokens — v11 vs Figma feed

Near-identical dark system; minor deltas:

| Token | Figma feed (§4) | shopos-feed_11 |
|---|---|---|
| background | `#0a0a0a` | `#0a0a0a` (`--bg`) |
| card | `#171717` | **`#131313`** (`--card`) |
| muted / line | `#262626` | `#262626` (`--surface-muted`, `--line`; + `--line-soft #1f1f1f`) |
| foreground | `#fafafa` | `#fafafa` (`--fg`) |
| subtle text | `#d4d4d4` / `#a3a3a3` | `#a3a3a3` (`--fg-2`), `#737373` (`--fg-3`) |
| feed width | ~feed column | **`--feed-w: 500px`** |
| radii | lg 8 / xl 12 / 3xl 20 | **card 20 / btn 12 / ctl 8** |
| type | SF Pro | SF Pro (Inter fallback) |

### 9.4 Where §9 supersedes §1–§6

- **Feed nav/IA, Chat/Create surface, ⌘K, History, post types, overflow menu, dock pills, credits top-up, stories-as-education, and the "wishlist" framing** → use `shopos-feed_11` (§9.1–9.3) as current; the Figma equivalents in §2–§6 are the prior version.
- **Onboarding (§2A), the intro cards (§2B), the Story-viewer mechanics (§2E), and the Settings › Tune-your-feed sliders (§2F)** → **only exist in the Figma flow**; `shopos-feed_11` doesn't re-cover them, so they remain the reference for those beats unless/until superseded.
- **Brand example:** prefer Urban Performance for new v11 work; One8 remains in the Figma frames.

### 9.5 New open questions

- **Where the machinery lives:** v11's rail exposes Agents/Skills/Connectors/Memory — reversing loops-first's "hide the machinery." Intentional IA decision or prototype convenience? Most are stubs.
- **Onboarding into v11:** the Figma URL→scan→"team ready"→Go to Feed onboarding isn't in the v11 prototype; unclear if it still precedes this feed.
- **Tune:** v11 drops the Low/Normal/More Settings sliders for "tune by liking" — is explicit tuning gone, or just not prototyped?
- **Credits model:** v11 makes credits central (out-of-credits blocks creation, top-up loads feed). How this reconciles with loops-first's "value before persistence" isn't shown.
- **Post-type taxonomy:** v11 adds rings + bar-chart posts and 7+ distinct CTAs; the full type→action mapping still isn't enumerated in one place.
