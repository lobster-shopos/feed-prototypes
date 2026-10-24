# ShopOS "Loops First" — PRD v3

*7 Sep 2026, revised 9 Sep. v3 supersedes v2.5 (`claude/loops-first-prd-v2.5.md`) on the onboarding and home model, which took a real shift toward radical simplicity: onboarding drops the intent-selection step, and the brand now lands in a single unified **Feed**. v2.5, v2 and v1 (`claude/loops-first-context.md`) remain untouched as historic documents. v3 carries forward v2.5's agent-capability boundaries, minimum input, connector rules, pricing, and the human-team model unchanged.*

**Sources for this version:** the **Sai↔Vedant "Design catch up" (5 Sep)** — the founding conversation; the **"Feeds Redesign" meeting (7 Sep)** — a detailed working session (Sai-led) that fleshed out the feed cards, onboarding flow, disposition, and WhatsApp/team mechanics; the **"Personalized AI Feed" meeting (8 Sep)** — a ~75-min Sai-led review with ~11 participants, several role-playing as brand owners (one as Casio), walking the live Figma and pressure-testing the whole concept — the source of the 9 Sep revision; two working chats (7 Sep); Harsh Singh's Supercut walkthrough (7 Sep); and the Figma prototype (`010CaB5lelUunG0s62vYgU`, file now titled "ShopOS Redesign — Feed", fleshed flows at node `441-48812`). Figma pixels remain unread (View-seat rate limit); the 7 and 8 Sep meetings describe the flows in prose, so structure is well-covered.

**Speaker attribution for 8 Sep:** the Amie transcript has no names. Speaker 6 leads, cites the vendor outreach and drives every decision → **Sai** [Certain]. Speaker 3 presents the design → **Harsh** [Likely]. Speaker 1 finishes Speaker 6's sentences throughout → almost certainly a transcription split of Sai's own voice, treated as Sai [Likely]. Other speakers are not named here.

**Version call (9 Sep):** the 8 Sep meeting adds a lot of detail, positioning, and segmentation, but the structural spine — URL → learning page → land in one feed, no intent screen — is unchanged. So this stays **v3**, per the standing rule (bump only when onboarding/home structure changes). If the "For you / For others" tabs or the enterprise-curated feed (§6, §13) turn out to change what a brand *lands on*, revisit.

**Why this direction exists (from the 5 Sep call — the strategic spine):** [Certain] Sai ran outreach to ~3 target business vendors. Two findings drive everything here: (1) they live on **WhatsApp and want concierge, done-for-me service** ("WhatsAppification of life" — you do it for me, harass me on WhatsApp); (2) they show **near-zero screen time on AI tools** (ChatGPT/Claude barely opened). That's a **retention problem**: "no matter how good your features are, if the dude doesn't open it, we're in trouble." The feed exists to be a reason to open the product daily; WhatsApp exists to meet them where they already are. Design for a low-screen-time, non-technical, concierge-preferring user — not a power user.

**Confidence note.** The Supercut walkthrough transcript (Harsh Singh, "Ultra Simple Onboarding & Home Feed") has now been read in full and confirms the structure below; the two chats and the prototype's layer names corroborate. The Figma *pixels* were still not renderable (View-seat rate limit), so precise visual/layout details remain tagged. **[Certain]** = stated in the transcript or a chat, or a literal layer name; **[Likely]** = strong inference; **[Guess]** = unconfirmed gap.

**Named references — Okara & Panda.** [Certain] The team looked at **Okara** (URL-in → infers everything → **dense terminal/dashboard** of columns) and **Panda** (an older feed-based product designers loved). Verdict: the terminal is "too overpowering"; ShopOS takes the **feed** model instead — same URL-in / infer-everything intake, but the landing is **one IG-web-style feed**, not a dense multi-column dashboard.

---

## 0. What changed from v2.5

v2.5 already put loops in a swipeable card stack with a health glance on top. v3 goes further toward simplicity on two fronts:

1. **Onboarding drops intent selection.** [Certain] v2.5's onboarding asked the brand to toggle which of the four agent areas they cared about, then explained each agent's four-step loop. v3 removes that. The new flow is: **one input → "your teammates are getting to work" → a live stream of artifacts about your brand → "here's your feed."** No area toggles, no loop explainer screen. **Why (ruled 7 Sep):** ShopOS runs the *whole* store — every agent is on by default — so there's no intent to ask for. This retires the "fixed four-intent screen" locked on 31 Aug / 1 Sep, and drops the input floor to brand-substance-only (§5.2).

2. **Home becomes a single Feed, with a brand-health card pinned on top.** [Certain] The landing surface is literally named `FEED` in the prototype. The brand lands *in a feed* — one scrolling stream of recommendations and agent updates (things to take care of, things to know). Pinned **above the feed is a brand-health summary card carrying all four agents' individual ratings plus an overall rating.** [Certain, transcript] So health didn't vanish into the stream — it's the fixed header card; the feed below is the flow. This absorbs v2.5's "card stack + health glance": the glance becomes the health card, the stack becomes the feed.

**The through-line, unchanged:** URL in → ShopOS works in the background → brand lands in a running product, never an empty one. What changed is the *payoff shown* (now: a feed already built from the brand's own assets) and the *cognitive load* (near-zero — no choices to make during onboarding).

**Carried forward unchanged from v2.5:** agent-capability boundaries (§4 — Monica creates but never publishes; Big Head is the only agent whose loop publishes live); minimum viable input (URL *or* "new brand" seed); connector rules; the +Team ticket model (24–72h SLA); pricing; metrics intent; vertical packs; loop anatomy.

### 0.1 What the 9 Sep revision adds (from the 8 Sep meeting) — same structure, much more definition

[Certain unless marked]
- **Every card gets three actions: Approve · Jam with team · Improve with AI.** The general (non-video) disposition that was "firming up" is now defined (§6, §9).
- **"Tune" becomes a promoted control outside the feed** — four chips (creators / ads / visibility / storefront) plus a prompt box to hijack the algorithm, like Instagram's interest chips. Feedback (thumbs up/down) trains the ranking (§6).
- **Two feed lenses, IG-style: "For you" and "For others / suggested"**, plus a **Stories** row — the second lens shows work ShopOS has done for other brands, templates and audits, so it doubles as the proof-of-work / sales deck (§6, §13).
- **Segmentation now shapes the feed itself:** long-tail ($9) gets pure automation; **mid-market/enterprise gets a team-curated feed** — the feed *replaces* the enterprise dashboard, and the deployment-team upsell takes over the first cards when a business email is detected (§11, §13).
- **Human channel is tier-gated:** enterprise → WhatsApp; paid non-enterprise → an async prompt box that raises a ticket; free → an upsell prompt (§11).
- **Agent names are being retired in the UI** in favour of role titles (creative strategist, performance marketer) (§4).
- **Sign-in is deferred until after onboarding** — take the URL first, show sign-in later (§5.1).
- **Onboarding usability fixes** from the live walkthrough — focused/blinking input, larger field, four-column learning page is too text-heavy (§5.1).
- **Onboarding scope is reopened as "the biggest pushback as of today":** how much tuning (if any) to ask during onboarding. Sai still leans URL-only, with an optional deployment-team pairing offer (§5.2, §17).
- **Strategy frame:** "from ten things to one action, and that action passive" — the standalone agent apps become internal-tooling-grade upsell surfaces; only the feed needs to be world-class (§12).
- **Go-to-market:** a public monthly template feed, a category-by-category handcrafted launch, and a validate-with-fake-feeds plan (§13, §16).

---

## 1. The story — the new, simpler onboarding

[Certain unless marked] The narrative, start to finish:

1. **One input.** The brand gives a **store URL**, *or* says they're **setting up a new brand.** That's the entire ask. No account wall, no intent questions, no connector step up front.

2. **"Your teammates are getting to work."** The moment the input lands, ShopOS frames it as a team mobilizing on their behalf — not a form being processed.

3. **A live stream of artifacts, bottom-up.** Below the input, artifacts begin streaming as ShopOS learns — an **Okara/Ocara-style live scan** (the prototype uses an `ascii-magic` animation and `brand-memory` building). The stream shows, in order of increasing "wow":
   - what it's learning about *you* and your brand (positioning, audience, voice — as a living stream, per v2.5's streaming-wiki ruling, not attribute cards);
   - **a preview of what your feed will look like**, anchored by **your own product images** — scraped, not generated. *(Earlier iterations, incl. the 7 Sep chats, had Meta Muse generating showcase treatments here; as of 9 Sep there are **no generations in onboarding** — §5.1. Generation starts after landing.)*
   - **what ShopOS would make** — described/ranked, e.g. "storyboards like this can become videos" — using the brand's images to anchor the Instagram-style feed; [Certain on the idea; execution now non-generative]
   - **"here are your competitors,"** etc. — a running stream (Okara-like) of everything ShopOS can potentially do for them. [Certain]

4. **"Check out your feed."** [Certain] Onboarding ends by inviting the brand into the feed itself.

5. **Land in the Feed → toggle to chat.** [Certain] The brand enters the feed (already populated for their brand) and can toggle to chat from there.

The spine: **ShopOS does everything in the background and proves it by showing a feed already built from the brand's own assets** — the demo *is* the product, using the brand's real material.

---

## 2. The metaphor

The daily object is now **your feed** — a living, brand-specific stream of finished work and things worth your attention. [Certain]

**The crystallizing line (7 Sep): "the brand wants the feed, not to be a feeder."** [Certain] Sai: *"brands will want feeds over prompt boxes. A feeder is when I sit and keep feeding things into the machine. The brand doesn't want to be a feeder — the brand wants the feed."* This is the whole bet in one sentence, and a strong marketing candidate. The problem it solves: even with credits and time, a brand facing an empty prompt box doesn't know what to make — *"I'm empty here and it's empty there."* The feed removes the blank page: open the app and a full IG-style feed of your brand is already there, refreshed daily, video included.

**The 8 Sep framing — push → pull, and "one action, passive."** [Certain] Sai's analogy: early Facebook and Instagram were *push* products — you wrote a status, uploaded a photo. Every AI product today is still push: you come in, you prompt. Facebook became useful without you posting anything because the **algorithmic feed** pulls content to you. ShopOS wants the same inversion for brands: *"how do you feel about a product where the user has to do nothing?"* The role-playing brand owners answered "less cognitive," "I don't have to think." The pitch line that came out of it: **"a personalized Instagram for my brand, every single day."** The strategic version: *"from ten odd things to literally one action, and that action also passive."* Instagram works because 0.1% create and everyone else scrolls; ShopOS wires the same login loop — open the app, something cool and useful for my business is already there.

**Why it has to be great:** [Certain] Sai's caveat — with only one action, the quality bar is Instagram-newsfeed-level ("what Chamath built his career on"). His broader point: feeds are new to AI — no AI product is doing this — so if ShopOS gets it right it's a category of one.

- v2.5's Apple-Health "close the rings" framing recedes further. Health is now **one kind of feed item**, not the surface you land on.
- The closest consumer analogy the team uses is an **Instagram-style feed**: media-first, scrollable, endless, personal. [Certain]
- Rationale (from v2.5, still holds): the persona is non-technical and ShopOS is media-heavy, so a feed of finished creative beats a dashboard of metrics.

`[Open]` The health metaphor and the feed metaphor now sit awkwardly together — "tend your brand's health" vs. "scroll your brand's feed" are different promises. Pick which leads positioning (§13). Feed is winning by default in the product; decide if health survives as marketing language at all.

---

## 3. The mental model

**What the brand consumes (the primitive):** **the Feed** — one stream that surfaces everything ShopOS does for the brand. [Certain]

**What powers it (hidden machinery):** **loops running in the background.** [Certain] The brand does not set them up or toggle them during onboarding; they're inferred/started for the brand, and their outputs flow into the feed.

**The unit relationship (from the transcript):** **one feed post = one loop, and each agent works one loop at a time.** [Certain] The feed is a stream of loop outputs, one per post; the health card's per-agent rating reflects that agent's current loop.

**Feed item types** (what a loop can surface into the stream) [Likely, from chat 2 + layer names]:
- Brand health · Recommendations · Needs-attention · Actions to take · Creative outputs · Performance insights · AI visibility (GEO) · Storefront issues.
- Prototype shows feed sections/filters named **Storefront · AI visibility · Performance Ads** [Certain: layer names] — the agent areas surface as feed categories, not as an onboarding choice.

```
The Feed  ← the one thing the brand consumes (scroll + chat toggle)
  └─ Feed items  ← health, recs, creative, actions, GEO, storefront, performance
       └─ Loops   ← run in the background, produce the items   (hidden; not chosen at onboarding)
            └─ Memory · Routes · Skills · Models · Evals  ← never surfaced
```

**Shift from v2.5:** v2.5 made *loops* the brand-facing navigation unit (swipe loop-to-loop). v3 pushes loops back down a layer — the brand navigates a **feed of outputs**, and loops are the engine. "Loop" may still appear on drill-down/creation, but the day-to-day noun is **feed.** [Likely]

---

## 4. The four agents (capabilities unchanged from v2.5) ✅ HOLDS

Agents now surface as **feed categories**, not onboarding choices. Their capability boundaries (corrected 4 Sep vs shopos.ai/docs) are unchanged:

| Agent | Feed category | Loop ends at |
|---|---|---|
| **Monica** (Creative Director) | Creative | **Assets ready for review/handoff — never a publish** |
| **Big Head** (AI Visibility / GEO) | AI visibility | **Articles generated + published live to a verified domain** (only agent whose loop publishes) |
| **Gavin** (Performance Marketing) | Performance Ads | Monitoring checks on a cadence + reports; autonomous budget/pause `[Open]` |
| **Richard** (Shopify Page Builder) | Storefront | Pages built/updated in Shopify |

Full boundary detail carried verbatim from v2.5 §4.1 (Monica's two modes; Big Head's domain-gated publish; Gavin's docs conflict on campaign authority; Richard's Page-Builder scope vs. wider "store health"). **Dinesh** (email/CRM) and **Jian-Yang** (brand intelligence) remain out of the first flow.

**Agent names are being retired in the UI (8 Sep).** [Certain] Harsh, presenting the four-column learning page: *"creative strategist is Monica, performance marketer Gavin — you'll recognize them; they're moving away from the names obviously."* Brand-facing surfaces should use **role titles** (creative strategist · performance marketer · AI visibility · storefront), not the character names. The names stay as internal shorthand and in this doc for continuity. `[Open]` whether the four columns/categories carry role titles, icons, or nothing at all — Sai's instinct on the call was "don't explain it."

---

## 5. Onboarding (rewritten)

### 5.1 The sequence
The 7 Sep meeting fleshed this out concretely (Sai's staging):
1. **Drop a link.** Three entry choices on one screen: **enter your brand store URL** (primary), **see ShopOS in action on a dummy brand**, or **create a new brand identity**. [Certain — the built screen at node 449-45219] All three lead into the same flow; the dummy and new-brand paths just substitute the substance the URL would have provided.
2. **Theatric "understanding your brand" flashes.** Fast flashes of text — *"ShopOS assembles AI and humans to get more done, preparing your personalized feed"* — to signal the work is happening, then **fade away.** [Certain] (Deliberately theatric, brief.)
3. **A Wikipedia-style page about the brand** — full-bleed, side-to-side reveal — showing what ShopOS learned: **who you are, your competitors, images scraped from your site (screenshot first), your social handles** (confirm them; if missing, an easy "N/A"/drop-in field). [Certain] Confirmation of scraped info happens here.
4. **Scroll → the feed.** The Wikipedia page + loading states *are* the loading stage; scrolling flows into the feed itself. The whole thing is **one vertical feed** — **shimmer cards** where content is still loading, **progressively disclosing** sorted cards as they're ready. [Certain]
5. **"Build my personalized feed" button** at the end → **sparkle** → *"you got free credits, get started"* → pulls the feed. [Certain]

**No generations during onboarding — latest ruling (9 Sep, post-call).** [Certain — Lobster] The iteration built up to the 8 Sep call *did* include generation on the learning page (each agent column produced an artifact, §5.1.1), and 7 Sep's latency staging assumed a Meta-generated concept image arriving at ~30–40s. **Both are superseded:** the onboarding surface shows **scraped and ranked content only** — what ShopOS learned and what it *would* do — with **no live generations**. Generation starts after the brand lands in the feed. Text still lands first (~10–20s); whatever media appears in onboarding is the brand's own scraped material, not new concepts.

**Learning-page layout: the Pinterest-like bento was the design until 8 Sep; a new layout is now needed.** [Certain — Lobster] The three descriptions in the sources (7 Sep's "Wikipedia-style page," the Supercut's grid, 8 Sep's four agent columns) were iterations of one screen; the version that shipped in Figma through 8 Sep is a **Pinterest-like bento grid** (node 449-45526). The 8 Sep review undercut it twice — the page tested as too text-heavy, and Sai's "life runs on Instagram, not Pinterest" argument — so the learning page **needs a new layout.** `[Open]` — Lobster is designing it; the constraints that survive are in §5.1.1 (first value ≤ ~10s, self-evident without explanation, artifact over text, no generations).

**Loops are never named in onboarding.** [Certain] No "loops" or technical terms anywhere in the flow — value-first. (Loops still power the feed; the word just doesn't appear.)

**What's gone vs v2.5:** the intent-toggle screen and the per-agent four-step-loop explainer. [Certain]

### 5.1.1 The "learning your brand" page as built (Harsh, 8 Sep) and the live-test feedback

**As presented on 8 Sep (now superseded in two ways — see §5.1):** [Certain] after the URL, the brand clicks **"learn about my brand"** and ShopOS brings up **four columns — one per agent** (rendered as the Pinterest-like bento). Information streams into the columns in two phases: first, **what was collected about the brand**; then, **each agent generates its own artifact** — the creative strategist a visual, the performance marketer a plan/roadmap. Any number of cards per column. When all four finish: *"now we understood your brand, get started with your team"* → land on the feed. Budget assumed: text in ~10s, whole thing ~30s. **What's superseded:** the generation phase is out (no generations in onboarding), and the bento layout is being replaced. What survives: the two-phase *idea* (collected → what we'd do), the ~30s budget, and the hand-off line into the feed.

**Why it can't block:** [Likely — figure as heard] the earlier blocking onboarding, which waited for all agents to finish, lost **~78% of users**. Hence the stream: show what's already done, never a spinner.

**Live-test feedback to act on** (participants role-playing as brand owners, one entering casio.com): [Certain]
- **The URL field wasn't obviously a field.** *"I didn't know this was a text field at all… I would have clicked one of the options before I even tasted it."* Fix: **cursor focused and blinking in the input by default**, make the field **larger and pulled out**, so the first action is unmistakable.
- **The learning page is too text-heavy.** "I have to read so much text… it's like a dump," "less interactive," "too much information." The Okara benchmark got the same critique — charts, metrics and chat everywhere. Direction: fewer words per card, more artifact.
- **Don't explain the four columns.** Sai: if the brand doesn't get that the columns are filling, don't add explanation — fix the design so it's self-evident.
- **Wait tolerance is asymmetric.** A known product earns 30–60s of patience; an unknown one gets ~10–30s before drop-off. Text streaming makes people "more forgiving," but the first useful thing still has to land inside ~10s.
- **Get non-developer feedback** on the streaming/terminal aesthetic before committing — the room was mostly builders.
- **"Your life runs on Instagram, not Pinterest — Pinterest is for your designer."** [Certain] Brand content's destination is Meta, so the surfaces should feel like Instagram. For the *feed*, that reinforces the single-column IG model Sai already preferred; for the *learning page*, it's one of the two reasons the Pinterest-like bento is being replaced (§5.1).

**Sign-in is deferred.** [Certain] *"If you're not signed in at all, you should still bring them to onboarding. Take the URL only, then show sign-in."* Nothing gates the URL → learning → feed path; the account comes after the value.

**Second and third entry options** ("see ShopOS in action on pre-baked brands", "create a new brand") were confirmed to exist but deliberately not walked through on 8 Sep — still `[Open]` in detail.

### 5.2 Minimum viable input (now a single input — brand substance)
- **Brand URL is the only required input. Everything else is optional.** [Certain — Lobster, 9 Sep] ShopOS must be able to **extract enough from the URL alone to populate content, with no connectors/plugins.** Optional inputs (social handles, extra context, connectors) can be offered but never required, and never block the path to the feed. **When there is no URL**, the brand takes one of the two other entry choices — **try a dummy brand** or **create a new brand** — and the effect is the same: the flow continues identically with substituted substance. The flow is the same in all three cases.
- **Intent — resolved 7 Sep, then partially reopened 8 Sep as an onboarding-*scope* question.** [Certain] 7 Sep settled it: no onboarding intent question; adding one is "just another input for the user to deal with" and breaks the **Instagram simplicity**. Intent is **inferred behaviorally** — dwell time per card, what they interact with — and the whole store runs for everyone. **8 Sep reopened one narrow piece:** a participant said "ideally your onboarding will have some questions," and Sai named this **"the biggest pushback as of today"** — *"we have to quickly get to onboarding again on deciding how much additional tuning we need to request during onboarding itself."* Two schools were stated: **(a) URL only, nothing else asked, connectors requested progressively later** — Sai's position; **(b) ask what they care about while the first feed builds.** Sai's lean: ship (a), and let tuning start **from the point the first feed exists** via the promoted Tune control (§6) — same behavioral-personalization bet, now with an explicit hijack lever. He also floated one **optional onboarding offer**: *"you're creating your personal feed — want to pair it with human experts? Assemble a deployment team, or just start the feed."* That's a team upsell, not an intent question. **Net for the doc:** the required input is the **brand URL alone** (or its dummy/new-brand substitute); anything else asked during onboarding is **optional** — that's Lobster's working position and it's compatible with both of Sai's schools, since an optional tuning step or team-pairing offer can be skipped. What remains `[Open]` is whether such an optional step is *shown* at all during onboarding (§17 #1). Everything else in this section holds.
- **Connectors & permissions** — still deferrable; never gate onboarding (holds).

### 5.3 Edge states (hold from v2.5)
Low-confidence read · private/headless store · very large catalog · no performance data · connection denied · first run finds nothing · loop failure · user leaves midway — all behaviors carry from v2.5 §5.3. New addition: **thin-scrape failure** — if the URL yields too little (thin catalog, no usable images, JS-only storefront), fall back to a described/templated preview rather than an empty one; never require a connector to get past this. [Likely]

### 5.4 Onboarding visuals & tech
Circles/dots/gradients continue; the scan uses an **ASCII/`ascii-magic` streaming animation** and visible **brand-memory building.** [Certain: layer names] WebGPU (vgpu.sh) remains the implementation lead from the 3 Sep call, still `[Verify]` on mobile.

---

## 6. Home — the Feed (rewritten)

[Certain unless marked] **The brand lands in a Feed**, not a dashboard.

- **Brand-health card, pinned on top.** [Certain, transcript] A summary card carrying **each of the four agents' ratings + an overall rating.** It's the fixed header above the scrolling feed — the "how's my brand doing" glance. (Detail of the card itself deliberately not specced yet by the designer.)
- **One scrolling stream below it, refreshing daily.** [Certain, 5 Sep] Autogenerated cards, one per loop: new images, new video concepts, a new recommendation, **competitor analysis, price changes on other marketplaces, ad performance,** "your deployment team is on standby." Every refresh brings new things — the reason to open it daily. IG-web-style.
- **Every card carries "Jam with team" and "WhatsApp" buttons.** [Certain, 5 Sep] Clicking WhatsApp opens WhatsApp web to continue with the brand's **account manager**; "Jam with team" pulls in the human deployment team. This is how the concierge/human layer is always one tap away (§11).
- **Categories / filters:** Storefront · AI visibility · Performance Ads (+ others). [Certain: layer names] Filter the one feed; not separate destinations.
- **Chat is a toggle from the feed, and it's the orchestrator.** [Certain] Two modes of one surface; chat is where deeper interaction and agent creation happen.
- **Card anatomy (7 Sep, now specified).** [Certain] Cards are **big and uniform** — one consistent container length, not 3–4 squeezed into a row (Sai: "the cards suck, don't squeeze them, expand the card"). Multiple assets inside a card use an **Instagram-style carousel** (left/right arrows inside the card). A **1–2px outline** (or fill/subtle gradient) wraps each card, and **one outline wraps the whole feed** so the eye reads it as a single field, not car-to-car jumps. Uniform image ratio (~3:4). A **dismiss (X)** sits on the card so brands can clear content. Where a card needs an image and none exists, a **stock/Meta-generated image is baked in**. Mono styling now; logo-gradient possibly later; unviewed cards may get a gradient treatment.
- **Feed content types (expanded, 7 Sep):** new images & video concepts, recommendations, **what competitors are up to, news around your domain, recaps, price changes on other marketplaces, ad performance.** External/industry items (competitor posts, domain news) sit alongside your own generated content. [Certain]
- **Disposition — now defined for every card: three actions (8 Sep).** [Certain] Sai: *"this is great, I'll approve the action. Or I want to jam with the team. Or I can just improve it with AI, so I'll chat with the agent. You have all three options on any card."* So every card carries **Approve · Jam with team · Improve with AI**, plus the dismiss (X). The **video** case keeps its extra step: because video is expensive, a card shows a **storyboard image + a cheap low-res preview** (Sai named H3 / LTX 2.5-class models for the preview) and asks *"do you approve the story?"* → Approve → real generation; changes → Jam with team. Sai was explicit that **"Jam with team" should be the biggest option on video** — *"don't take the responsibility of getting perfect outputs in things like video; you're clearly giving them an option to jam."* Expected mix, per a brand owner in the room: chat/improve-with-AI maybe 20–30% of the time; approve or jam the rest. There must always be a **"still not satisfied → jam"** exit after an AI improve.
- **Reactions train the ranking; bookmarking is deliberately withheld.** [Certain] Cards get **thumbs up / thumbs down** (a heart alone was rejected — "you need the thumbs down as well"), because the signal trains the algorithm ("it's easy to train the memory or algorithm"). A brand owner asked for **bookmark/save** (100 actions a day is a lot to lose). Sai's call: **don't build it yet** — keep it at most in a three-dot menu, and *"let that request come from the user… it's a great sign that people like it enough to want to save it."*
- **"Tune" is a promoted control *outside* the feed, on the main page (8 Sep supersedes 7 Sep's "in the feed"; confirmed by Lobster 9 Sep).** [Certain] 7 Sep had feed-tweaking as settings inside the feed. 8 Sep moved it out and up: *"it should be a promoted, outside thing where you tune the algo"* — a settings/sparkle icon labelled **Tune**, with **four chips** (**creators · ads · visibility · storefront**) plus a **prompt box** ("what do you want to do") — *"just an easy way for them to hijack the algorithm, check how Instagram gives you chips on what you're interested in."* Example: a shoe brand obsessing over new designs picks "only show me new shoe designs" and the feed retunes by the next refresh. Filters can exist too, but Tune is the primary lever. Talking to humans stays a separate surface (§11, §12).
- **Two lenses + Stories, Instagram-style (8 Sep).** [Likely — this passage of the transcript is garbled; the two-lens idea is clear, the details are reconstructed] The feed gets two tabs like IG's Following / For you: **"For you"** — your brand's own generated content — and **"For others / suggested"** — work ShopOS has done for *other* brands, templates, promoted examples. Sai wants them **mixed** — roughly four or five for-you cards, then a for-others card [Likely on the ratio] — to set the expectation "this is what we can do / this is what we did for you." A **Stories** row at the top [Certain that Stories were proposed; Likely on their content] is the second surface for capability and audits (e.g. "how your brand sucks" → the audit → "build my team"); Stories are click-in, not auto-shown, which is why the interleaved feed cards also exist. This lens is also the **sales deck**: *"the sales deck has all the best images we rendered — that's exactly what we're doing here… credentials become an endless scroll."*
- **Competitor and inspiration cards come from the global internet, never from other ShopOS customers.** [Certain] Embed a competitor's Instagram post that outperformed, run the analysis (*"strong hook, easy visuals, great music"*), and offer *"want to explore a similar concept?"* → jam. Same for ads: "why did this ad do well → jam." Reuse the existing **Inspiration** section under Performance Marketing (already scraped and analysed by niche). Hard rule: **never rack one customer's content against another's** — two protein brands on the platform must not be shown each other's work.
- **More card types named 8 Sep:** [Certain] **trigger-based drafts** — "Mokobara dropped its prices," "Diwali is coming up — I made you this draft to improve visibility"; **site redraws** — take the brand's HTML/CSS and redraw it 3–4 ways, "have you tried a more immersive version of yourself?"; **category calendar pushes** — Big Billion Days / Indian shopping-festival checklists broadcast to every brand in a category (Sai's Meesho-on-WhatsApp-channels analogy); **for enterprise**, "your batch is ready," "files are waiting," "new creative ideas the team is waiting on you for."
- **Generation is behind the scenes, not on refresh.** [Certain] Cards are pre-generated 24/7 on cheap orchestration and cheap image models; refresh reveals what's ready ("every time I refresh… 12 minutes today we generated some 100 actions"). Free tier → exhaust → credits → extra credits; usage limits don't stop generation, they gate consumption.
- **Upsell cards live in the feed** [Certain]: connect **WhatsApp**, set up the **deployment team** "for more accurate results," start **workflows / Spaces**, and features the brand hasn't selected yet (deliberate upsell). Contextual, never a settings wall. **8 Sep addition:** when ShopOS captures a **business email** and recognises a brand, **the first three cards should be the deployment-team offer** — *"let's get this done for you, your deployment team is waiting"* — the feed leads with why the team is better, then the content (§13).

**The feed is the empty-state killer:** after onboarding it's already populated for the brand, so there's no blank product — and, per §2, it removes the empty-prompt-box problem entirely. [Certain]

**Loading state:** cards that aren't ready show a **shimmer**; ready cards **progressively disclose** as they sort in. [Certain]

---

## 7. Feed items & their artifacts (replaces v2.5 §7 "loop card")

**One feed post = one loop's output.** [Certain, transcript] Shape:
- **The post face** — one insight/output, media-first (image, video, storyboard, a suggested change like a rewritten PDP line — prototype shows `Suggested change` → *"Designed to return more energy with every stride."*). [Certain: layer + copy]
- **Open the report** — the expanded view beside the feed where the brand says yes/no to creatives, gives more instructions, and switches between loops. [Certain]
- **Every item carries the three actions** — Approve · Jam with team · Improve with AI — plus thumbs up/down and dismiss (§6). [Certain, 8 Sep]
- **For video (expensive) items:** the card carries a **storyboard + low-res preview + "approve the story?"** → approve generates it; changes route to **"Jam with team"** (the largest button on video cards) and a human takes it forward (§6, §11). [Certain]

Build obligation carries from v2.5: **every loop needs a defined output shape**, or its feed items will be empty. Only ~half the starter library currently qualifies.

---

## 8. Loops — the hidden engine (holds from v2.5)

Loop anatomy (**Goal · Trigger · Inputs · Route · Output · Approval policy · Learning**), the starter library with corrected endpoints, the nine vertical packs, connector-gated create/act halves, and prompt-box custom-loop creation all carry unchanged from v2.5 §8. The only change is *visibility*: loops are no longer the brand's primary navigation object (§3) — the feed is. Loops surface by name only on drill-down and creation.

---

## 9. Autonomy & permissions (holds from v2.5)
The v2.5 model (**accept / decline / approve-all** over a per-loop **Approve / Deny / Archive** policy) is the substrate. **Per-card disposition is now defined (8 Sep): Approve · Jam with team · Improve with AI**, with thumbs up/down as the ranking signal and dismiss as the null action (§6). The **video storyboard-approval pattern** remains the concrete expensive case: nothing costly generates without an explicit approve, and "changes" hands off to a human. Sai's framing of the responsibility split: ShopOS does *not* promise perfect AI output every time — *"you are taking the responsibility of making perfect AI every time; you cannot"* — the jam-with-team path is how imperfect output becomes finished work. Principles hold: per-loop not per-account; safe middle by default; never a gate in onboarding. Unattended-publish ("autopilot") home still `[Open]`.

---

## 10. Connectors (holds from v2.5, one addition)
Requested only when a loop needs one; dedicated step, never a wall; skip mandatory; narrowest permission.
**Shipped:** Shopify · Meta Ads · Google Ads · Big Head's domain verification. **WhatsApp** [Certain] — the human/concierge channel **for enterprise brands only** (§11): one thread per brand via **Meta Business agents / a per-brand WhatsApp group**. Everyone else sends requests through the in-product prompt box (async ticket). Not a data connector like the others. **Proposed:** Google Analytics · Klaviyo · CMS — don't promise in onboarding.

---

## 11. Human layer / +Team (holds from v2.5)
Promised at the door, requested only from the feed after value is shown. Gated behind $999 + approval.

**WhatsApp is the human channel for enterprise; everyone else sends requests (7 Sep, narrowed 8 Sep, confirmed 9 Sep).** [Certain] The 7 Sep debate — nudge to connect WhatsApp vs. create a support ticket — resolved to **both, with WhatsApp highlighted and "submit ticket" deprioritized;** 8 Sep then made WhatsApp **enterprise-only**, with non-enterprise users sending requests through a prompt box (tier gating below). Reasoning Sai gave: the agency/brand world *runs* on WhatsApp; moving them off it is a painful behavior change ("like moving someone out of email"), and for MVP you meet them where their workflow already is. So: **"Jam with team" / WhatsApp redirects to one WhatsApp thread**; the ticket is the quiet fallback. ShopOS sets up **Meta Business agents per brand** — each onboarded brand gets a **WhatsApp group** where the team works and automations can run; everything redirects into that one thread.

**"Jam with team" is always present once a team is assembled** — a floating, Instagram-bottom-message-style element at the base of the feed: *"your team is ready."* [Certain] The point is the *feeling* that a human is there to jam with and get things done, even if the brand doesn't message — matching the WhatsApp-concierge behavior that motivated the whole design.

**Explicitly NOT a live call / co-presence.** [Certain] The team contrasted this against the earlier "Creative Director Live" idea and rejected live people dropping in. The human "loops in" asynchronously (e.g. takes a video storyboard forward, §6) — carried over from the v2.5 ticket/async model, now expressed through the WhatsApp thread.

**The channel is tier-gated (8 Sep).** [Certain] What "Jam with team" opens depends on plan:
- **Free plan** → an **upsell**: *"looks like you're on the free plan — if you want an expert to start jamming with you, come to one of the paid plans."* (Copy TBD; the intent is the upsell.)
- **Paid, non-enterprise** → **a big prompt box**: "what do you want out of this?" It **raises a ticket** and the team **works it asynchronously and unblocks later** — *"no manual point-taken situations,"* nothing synchronous.
- **Enterprise** → the **WhatsApp option** (the per-brand Meta Business thread above).

**For mid-market and enterprise, the team curates the feed itself.** [Certain] *"Pure automation is for the long tail. The moment it's mid-market and enterprise, our team curates the feed — you will feed the feed with your curated stuff the team has been dispatched for."* The feed becomes the enterprise **update mechanism** — batch ready, files waiting, creative ideas awaiting sign-off — and **there is no separate enterprise dashboard at that point.** If a customer strongly wants a traditional dashboard, it's an **interstitial layer or toggle**, not the home (§12). `[Open]` how approved creatives from the enterprise flow sync into the feed (auto-surface at top when approved), and whether ShopOS tracks when delivered assets actually go live on the brand's channels — both raised, neither resolved.

---

## 12. Information architecture (updated)
- **Feed is layer one; chat/orchestrator is layer two; the deployment team is layer two.** [Certain, 7 Sep] The feed is the differentiated, positioned surface — *"now who cares how the orchestrator is built."* Chat and team sit behind it, reached when needed.
- **Feed is the home and the primary object.** [Certain] Nav is "Projects"/feed-first (`Projects - Navigation` frames).
- **Chat = "new request / new task," reached from the feed (not a persistent second pane).** [Certain, 7 Sep] Two distinct chat purposes: **(a) tweak the feed algorithm** — 7 Sep put this inside the feed as settings; **8 Sep moved it to the promoted "Tune" control** (four chips + prompt box, §6); **(b) a custom request / specific brand direction** (a big brand with a campaign idea, a new workflow, run a batch) — this is a **new chat**, an empty prompt box with **2–3 suggestion pills on top** (Idea · Workflow · New task · basic suggestions like "I've got a new idea," "I want a new workflow"). The old "Grogbot"/"new chat" naming may be renamed to **new request / new task.** Talk-to-team is separate again (§11).
- **Collapsible sidebar** persists (`icons/panel-left`); minimal. [Certain: layer name]
- **Prompt box** rules hold from v2.5: memory always-on, mood board decoupled, incognito, reduced layers. (`Chat Box`, `Prompt` in prototype.)
- **Agent categories** (Storefront / AI visibility / Performance Ads) filter the feed; dense per-agent surfaces open in their own tab — selecting a feature of an agent (e.g. GEO) opens that agent's full UI in a new tab with its own light setup. [Certain, 5 Sep]
- **Left nav holds the rest of the product** — Spaces, SpaceLab, workflows — which the feed also upsells via cards. [Certain, 5 Sep]
- **"Create new agent" lives in the main flow via chat.** [Certain, 5 Sep] **Grogbot** (the existing per-agent chat-session mechanism — each agent runs a repeating task on a timeline, i.e. a loop) is **folded into the main feed + chat**, not a separate UI. This implies a **history** in the nav for per-agent chat sessions (Vedant flagged this as the fiddly part).
- **Design system: ChatGPT-style.** [Certain, 5 Sep] Deliberately simple and clean — the explicit anti-goal is the "overpowering" terminal/dashboard. Reduce layers.
- **One world-class surface; everything else is scaffolding (8 Sep).** [Certain] Sai reframed the whole product's prioritisation: the feed is "the core"; the standalone agent apps (the ads product, GEO, store setup) still exist and open in their own tab — "literally SaaS products… keep white-coding stuff as you get it better" — but they are **internal-tooling grade**: *"we wouldn't be as obsessed about UI finesse… does this work? Why would we care whether some large drop shadow is sorted."* Their job is to be the **upsell mechanism into the deployment team**: the moment a brand wants to set up ads, GEO or a store, *"I highly suspect a self-serve motion breaks down"* and they pay for the team. Expected usage of those surfaces is low ("nobody will go to the other surfaces here"). Existing Monica/Gavin dashboards stay in the side panel, treated as separate tools.
- **No routines, no loops, no feature list in the brand's face.** [Certain, 8 Sep] *"This takes away all of the other things. No routines, no loops."* The one action is scroll; everything else (Spaces, Big Head, workflows) keeps running underneath and feeds the feed.
- **Traditional dashboard, if wanted, is an interstitial/toggle** — never the landing, even for enterprise (§11). [Certain]

---

## 13. Pricing & positioning (updated 9 Sep)
Pricing stays out of onboarding. Tiers: $0/$9 self-serve; $999 adds the deployment team. `[Open]` Positioning must now resolve **feed vs. health** as the lead metaphor (§2) — the product has committed to the feed; decide if marketing follows.

### 13.1 Two segments, two narratives, one feed (8 Sep) [Certain]
- **Long tail ($9/mo, PLG):** pure automation. Narrative: **David vs Goliath / the rebel.** *"I'm taking the coolest things that make Goliath work and giving them to you… selling like the big boys requires the toys the big boys use."* The feeling to hit: *"you now have access to the Bloomberg Terminal, free of cost"* — insider software that used to be restricted and expensive, brought down by a "good Samaritan." This segment is **AI-novice and lazy by design** — the product must work with zero effort, and the standalone agent apps are where they eventually upsell into a team.
- **Mid-market / enterprise (SLG, sales-assisted onboarding):** narrative: **"teams that use AI get more done."** *"We give the big brands the best of AI and teams so that they win."* Their feed is **team-curated** (§11) and the deployment team is the product; "jam with the team" is the most important upsell surface. A brand owner in the room described the split from experience: a big brand with 5,000 credits/day and its own team barely uses self-serve; a four-person brand with no creative hire "would use this perfectly."
- **Business-email detection** routes between them: brand email → the first cards sell the team (§6).
- **Two workstreams named as "the two variables as of today":** (1) a landing page that gets as many SLG demo bookings as possible (in progress); (2) the product direction for the long tail that's convincing and cool enough to stand up. How the two brands/positions amalgamate is `[Open]` — Sai: *"I do not have a good enough answer, but we'll get there."*

### 13.2 The public feed, the template feed, and credentials (8 Sep) [Certain]
- A participant proposed a **public, no-login feed** anyone can browse and click through to onboard — *"something has to be public that you don't have to sign up for to get value."* Sai adopted it: **the public feed updates monthly** (the personalised one daily), populated with **templates** and **credentials** — everything previously done for brands "can be thrown here." *"Check this out, this is what brands get, and it keeps getting better."*
- The public feed carries the same **Tune** control, with **tune-by-industry**: pick *fashion* and the whole feed retunes to fashion — also the demo move for sales.
- This is the concrete answer to "bring the feed onto the landing page" (§17 #4): the landing page *is* a live feed. The sales deck and audit deliverable collapse into it too — an audit ends as an **HTML page** whose CTA is "build my team." **Reuse:** *"the same derivative can be abused everywhere — landing, deck, audit."*

---

## 14. Metrics (updated)
North star: **time to unattended value** (URL → useful output without prompting) holds. Activation chain now ends at the feed: URL → scanned → **feed populated from the brand's own assets** → first item accepted → second automatic run without setup.
Comprehension test (replaces v2.5's swipe test): **can a non-technical brand land in the feed and understand what each item is asking, and accept/decline, without a tutorial?**

---

## 15. Explicit don'ts (updated)
Keep out of onboarding: intent questionnaires, area toggles, connector walls, pricing, human-team requests, loop authoring. [Certain — intent toggles now explicitly out]
Anti-patterns (hold): no dense dashboard as home; no text-heavy brief as the item surface; no attribute-card brand scrape (stream it); no live-call human support; don't expose anything below the loop.
New: **don't make the brand choose during onboarding** — the whole shift is choice-free setup; any decision added back into onboarding fights the model.

---

## 16. Build sequence (updated)
One input → "teammates working" + streaming scan → **feed preview built from the brand's own scraped assets (no generation)** → land in populated Feed (generation starts here) → chat toggle → then paywall, +Team, connectors-as-nudges, advanced controls.

**Prototype ladder:**

| # | Contents | Success criterion |
|---|---|---|
| 0 | One input → streaming scan → feed populated from brand assets → accept/decline an item → chat toggle | A non-technical brand understands and dispositions feed items with no tutorial and no setup choices |
| 1 | Segment variants: pre-launch · founder-SMB · mid-market | Same feed model survives; only content + governance change |
| 2 | Trust: accept/decline → approve-all → failure/escalation → +Team ticket | Autonomy + human handoff feel controlled |
| 3 | Advanced: reveal loops behind items, edit schedule/instructions, inspect runs | Power users lose nothing; ordinary users never see it |

### 16.1 Launch and validation plan (8 Sep) [Certain]
- **Validate before engineering:** *"Fake a feed for every one of our customers. Screen-record that fake feed. Show them saying: I built a personalised Instagram for you — do you like it?"* A hollow prototype goes to every customer before a line of feed code is written. Onboarding revamp and a shareable prototype were promised for the same day.
- **Handcraft the feed, category by category.** There's "no global answer" for what a good feed is. In the initial days the creator team plus freelancers take one slice at a time — sneakers, then women's tops, then women's bottoms — and define spaces, templates and the feed experience for that slice. Estimate: ~20 days across the slices, with overlaps discovered around day 15–18. Spaces per category **auto-run** to generate content (e.g. a 360 spin for every sneaker brand); an admin can **push a viral concept to every brand in a category** from the export portfolio — cutting out the influencer-DM-for-workflow chasm.
- **Resourcing:** Sai committed marketing dollars and an over-hire on this, conditional on customers saying "this is cool" at each step. Manish joins in ~two weeks. [Certain]
- **Engineering shape:** less front-end work once the feed is right; one clean React web build first, React Native later; internal wiring (Spaces, Big Head, workflows) all keeps getting used, just underneath.

---

## 17. Open questions (v3)

1. **Onboarding scope — "the biggest pushback as of today" (8 Sep).** Settled part (9 Sep, Lobster): **brand URL is the only required input; everything else optional; no connectors needed to populate.** Still open: whether an *optional* tuning step or "pair with a deployment team?" offer is shown during onboarding at all (Sai's lean: no — URL only, Tune after the first feed). Decide and lock. Downstream either way: the ranking signals/weights (thumbs, dwell, Tune chips).
2. ~~General feed disposition~~ **RESOLVED 8 Sep:** every card carries **Approve · Jam with team · Improve with AI**, plus thumbs up/down and dismiss (§6, §9). Remaining: exact copy, and the "still not satisfied → jam" exit after an AI improve.
3. **Learning-page layout — reopened.** The Pinterest-like bento (449-45526) was the design through 8 Sep; it's being replaced after the too-text-heavy feedback and the "Instagram, not Pinterest" argument. Lobster is designing the new layout (§5.1). Feed layout itself: single-column IG, Vedant owns pixels.
4. **The feed on the public site** — now concrete: a **public, no-login feed** updated monthly with templates and credentials, tunable by industry (§13.2). Open: what's in it at launch, how a visitor clicks through to onboard, and how it stays fresh without exposing customer work.
5. **Feed vs. health as the lead metaphor** (§2, §13) — the product chose feed; does marketing? Candidates: *"the brand wants the feed, not to be a feeder"*; *"a personalised Instagram for your brand, every day."* 8 Sep added the segment narratives (David vs Goliath / Bloomberg Terminal for the small guy; "teams that use AI get more done" for enterprise) — reconcile them with the feed line.
6. **Non-media feed items** — how do text/report loops render as feed cards without becoming the text-heavy dump the room rejected twice (§5.1.1, §7)?
7. **Extraction-without-connectors dependency** — with no generations in onboarding and no plugins required, the whole learning page rides on what can be **scraped and ranked from the URL alone**. Fallback for thin sites / no usable images (§5.3). Separately: cheap low-res video preview models as a dependency of the video card in the feed.
8. **Gavin's action authority** and **Richard's scope** — still open from v2.5 §4.
9. **Agent naming** — names are being retired in the UI (§4). Decide what the four categories/columns are called, and whether the learning page labels them at all ("don't explain it").
10. **Learning-page density and wait tolerance** — the four-column page tested as too text-heavy; first value must land inside ~10s; get non-developer feedback on the streaming aesthetic (§5.1.1). Also unresolved: the second and third entry options (sample brand, new brand) haven't been walked through.
11. **Enterprise feed plumbing** — how approved creatives from the enterprise/team flow surface into the feed, and whether ShopOS tracks assets going live on the brand's channels (§11).
12. **Bookmark/save** — deliberately withheld; revisit only when users ask (§6).
13. **How the two positions amalgamate** — SLG landing page for enterprise vs PLG long-tail product; Sai: no good answer yet (§13.1).
14. **"Loop" surfacing** — with the feed as the primary noun, where (if anywhere) does the brand still see "loop"? 8 Sep: "no routines, no loops" — leaning never.
15. **Figma pixels still unverified** (View-seat rate limit). Transcripts confirm structure; remaining `[Likely]`/`[Guess]` tags are visual/layout specifics only.
16. **The dependency no design fixes:** the loop-first architecture still routes through the orchestrator, the weakest component — and 8 Sep raised the stakes: it now has to run 24/7 as cheaply as possible ("the cheapest, best way to just run it 24/7"). State it as a build risk.
