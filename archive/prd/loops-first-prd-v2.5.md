# ShopOS "Loops First" — PRD v2.5

*7 Sep 2026. A point increment on v2 (`claude/loops-first-prd-v2.md`), not a new direction. The 3 Sep design-review call ("Project / Loops First") left the onboarding story, minimum input, agents, connectors, pricing and metrics intact, and specified the parts v2 had left open — chiefly the Home / consumption surface. This version keeps v2 whole and updates those sections. v2 and v1 (`claude/loops-first-context.md`) remain the archive.*

**Scope:** self-serve onboarding, and the Home surface it lands on. Everything else is context for those two.

---

## 0. What v2.5 settles (increment on v2, not a pivot)

The call moved within v2's frame, not against it. It resolved v2's open questions and specified its under-defined surfaces. Nothing in onboarding changed. What got decided:

1. **Loops stay brand-facing — v2's open question #1 is answered "yes."** v2 §0 didn't *decide* to hide the loop; it *assumed* hidden "by default" and flagged "confirm this, or the terminology fans back out." The call confirmed the other way: the brand sees and navigates loops by name — *"the first things I should see is all my active loops"*, *"from one loop to the other"*, *"chat should be loop-specific."* This is v2's own flagged fork being resolved, not a reversal of a settled call.

2. **Home's consumption model is now specified: a swipeable card stack.** v2 described Home's *structure* (health first, then attention, then machinery) but not how the brand moves through the work. The call fills that in: **Instagram-Stories-like** — one big card at a time, "hijack the page," each suggestion as one piece of storytelling. Rationale: the persona is *"very tech dumb"* and ShopOS is *"very media heavy"* (most loops output images/video/catalog/trends), so a dense dashboard is the wrong surface.

3. **Health and the card stack are two layers, not a swap.** The landing screen still shows *"active loops already brands health"* — health/graphs are the glance you land on; the card stack is how you consume what loops produced beneath it. v2's health framing stays as the overview.

**Unchanged from v2 (do not re-litigate):** the onboarding story (§1), minimum viable input (§5.2), edge states (§5.3), the 4 Sep agent-capability boundaries (§4.1 — Monica creates but never publishes; Big Head is the only agent whose loop closes with a live publish), connector rules, pricing, metrics, vertical packs.

**One deliberate consequence:** v2's "narration test" (describe ShopOS *without* the word "loop") no longer fits, now that loops are confirmed brand-facing. Retired and replaced (§14). Keep "loop" the *only* internal word that surfaces — memory, routes, skills, models, evals stay hidden (§3).

---

## 1. The story — onboarding, start to finish

Unchanged in spine from v2; the brand-understanding beat (#3) is now specified concretely per the call.

1. **The promise at the door.** ShopOS tells the brand plainly: *we'll run your store — agents, backed by humans — and get it done for you.* The pitch names both; the *request* for humans comes much later (§11).

2. **One input: the store URL.** Dropped into the background immediately; parsing begins into Brand Memory and runs through the rest of onboarding. (No store yet → manual seed path; §5.2.)

3. **While memory builds, ShopOS streams what it's learning — as a living wiki, not attribute cards.** *This is the decided design, not a proposal.* The old approach (separate boxes for "positioning," "core audience," font/color chips) is rejected: on the call — *"when you scrape memory, memory goes for a toss, it looks like shit at that point of time… why invite trouble? Just stream text as it's learning… stream a wiki… like a ChatGPT answer… keep streaming it into that one big box."* One continuous text stream that grows in real time as the system learns positioning, audience, voice, visual language, products — then auto-advances. Sample copy for this screen is drafted separately and confirmed against this ruling. Visual treatment: radar/center-out animation (§ onboarding visuals).

4. **Capture intent by toggles.** The four agent areas are presented; the brand toggles on whichever they want — *"you can change them later, pause, add new ones."* Selection highlights the corresponding quadrant in the visual.

5. **Explain the loops each agent will run.** For each selected agent, ShopOS shows its work as a **four-step loop** — four dots, each highlighting in turn from step 1→4 and back, with the visual looping alongside. (Per-agent four-step copy is drafted and grounded in the real capabilities of §4.1.) Brand is informed, not asked to author jobs.

6. **Optional connectors.** Same circle/logo motif. Connect or skip; both converge.

7. **"Everything's ready" moment.** A modal before launch: **memory ready · loops ready · free credits ready.** Then land.

8. **Land on Home** — active loops, brand health captured, and the card stack beginning to populate.

The spine holds: **ShopOS does the setup in the background while it earns the brand's understanding in the foreground.** The brand never faces an empty product.

---

## 2. The metaphor — softened, and honestly in tension

v2 leaned hard on **Apple Health / close the rings.** The call pulls the daily interaction toward **a feed of finished work you swipe through** (Instagram Stories), which is a different mental posture: *health* says "tend a standing"; *stories* says "review what got made and react."

v2.5's resolution: **health is the glance, the stack is the act.**
- **Glance:** land on a health/graphs snapshot — is my brand running, what moved. (The Apple-Health framing survives *here*, as the overview.)
- **Act:** swipe the card stack of what loops produced — accept, decline, open, or chat. (The Stories framing lives *here*.)

`[Open]` These two metaphors don't fully rhyme. "Close your rings" and "swipe your stories" are different promises. Pick which one leads the marketing/positioning voice, or find the single line that spans both, before external copy locks. Do not ship both as co-equal headlines.

*Naming note (carried from v2):* the top-level word "health" still collides with Richard's loop literally named **Store Health** — scope or rename.

---

## 3. The mental model

**What the brand navigates (the primitive):** **loops and what they produced.** Each loop is a persistent job that returns finished work — drafts, images, videos, ad concepts, a "nothing needed" result. On Home the brand moves *between loops* (horizontal) and *through the outputs inside one loop* (vertical). This is the object the brand holds.

**What sits above it (the glance):** **brand health + per-agent standing**, as the overview you land on. Health is a roll-up of loop activity, not a separate surface the brand lives in.

**What stays hidden:** everything below the loop — **memory, routes, skills, models, evals, agents-as-workers-inside-loops.** "Loop" is the one internal word allowed to surface; nothing beneath it is.

```
Brand health (glance / overview — graphs, standing)
  └─ Loops ×N            ← what the brand navigates, by name   (the card stack)
       └─ Outputs inside a loop  ← drafts, images, videos, ads  (vertical scroll)
            └─ The artifact       ← expand a loop into full detail
                 └─ Memory · Routes · Skills · Models · Evals  ← never surfaced
```

**Unchanged mechanics (from v1/v2):** agents autonomously run recurring loops; a run can take multiple actions; reversible in-ShopOS work runs on its own, anything that spends budget or publishes externally waits for the brand. The agent-capability boundaries of §4.1 still bound what any loop is allowed to do (Monica never auto-publishes; Big Head's publish half is domain-gated; Gavin's campaign-action authority is still open).

**Consequence for the "Ad Fatigue Watch" report we prototyped:** it is one loop's expanded artifact — reached by expanding that loop's card, not a top-level surface.

---

## 4. The four agents = the four intent areas

| Agent | Area | What its loops build toward |
|---|---|---|
| **Monica** (Creative Director) | Creative & content | Fresh assets (images, video, video edits), variants to test, fatigue refreshes |
| **Big Head** (AI Visibility / GEO) | Visibility (AI search) | Prompts run across ChatGPT/Gemini/Perplexity, citation gaps found, gap-closing articles **published** to a verified domain |
| **Gavin** (Performance Marketing) | Growth (ads) | Monitoring checks on a chosen cadence, wasted-spend flagged, reports |
| **Richard** (Shopify Page Builder) | Store (Shopify / site) | Pages built & updated, PDP quality, catalog freshness |

**Overall brand health** rolls up from the four.

**Not part of the four:** **Dinesh** (email/CRM) and **Jian-Yang** (brand intelligence) — real agents, not in the public docs, not onboarding areas. Keep out of the first flow.

### 4.1 Capability boundaries — grounded in shopos.ai/docs (4 Sep) ✅ HOLDS FROM V2

The rulings that corrected the earlier draft stand unchanged:

- **Monica creates; she never publishes.** Generates static images, video, video edits (model + resolution selectable) from Brand Memory + product info, via Supercomputer (conversational) and Creative Studio (direct) modes. Outputs are handed off — the brand places them, or routes ads to Gavin. **Every Monica loop ends at "assets ready for review/handoff," never "published."** (Confirmed by Lobster 4 Sep.)
- **Big Head creates AND publishes.** Runs the brand's buyer prompts across AI platforms; tracks mentions/rank/sentiment; finds the sources AI cites and the content gaps; then "Generate content" (styled to Writing Rules) → "Publish Content" pushes articles **live to a connected, verified custom domain.** Publishing is hard-gated on domain verification; tracking/recommendations work without it. The one agent whose loop closes with a publish, and its act-half connector is the **domain**, not Shopify/Meta.
- **Gavin monitors, reports, configures — campaign-action authority is ambiguous.** Shipped: per-channel dashboards, Catalog (Advantage+ ads, SKU out-of-stock rules with impact preview, ad-template overlays, feed management), **Monitoring (scheduled automated checks on a chosen cadence — this is the loop pattern already in production)**, downloadable Reports, scoped "Ask Gavin," SKU quadrants. Docs conflict on whether he pauses/rebudgets/launches: overview says "analyzes and runs ads," use-case docs say monitor/report/configure only. `[Open]` resolve before any card copy claims he moves budget autonomously.
- **Richard is the Shopify Page Builder** — "manages and runs your Shopify store," pages without developer delays. Narrower today than "fix and grow your store"; store-health scoring is a designed extension. `[Open]` confirm eng is building the wider scope or narrow the copy.
- **Gavin's Monitoring is the existing loop machinery.** The loops-first architecture generalizes this shipped pattern to all four agents — not net-new machinery.

---

## 5. Onboarding

### 5.1 The sequence
1. **URL in → background parse begins.** Single required input.
2. **Stream the brand wiki** (while parsing) — living text, not attribute cards (§1.3).
3. **Toggle intent** — four agent areas; selection highlights its quadrant.
4. **Explain each selected agent's four-step loop** — looping dots + visual.
5. **Optional connectors** — connect or skip; converge.
6. **"Everything ready" modal** — memory · loops · free credits.
7. **Land on Home** — health glance + card stack.

### 5.2 Minimum viable input (holds from v2)
The floor is **two inputs**; the other two are deferrable.
1. **Intent** — required. Selects which agents/areas activate.
2. **Brand substance** — required, **one input, two entry paths**: established brand → **the URL** (extract everything); pre-launch/no store → **category + audience** (~two sentences). Never two separate questions.
3. **Connectors** — deferrable. Gate which loops can *run*, not whether the brand is set up.
4. **Permissions** — never gate onboarding. Default to the safe middle.

| State | Brand input | First result |
|---|---|---|
| Live store | URL → auto-extract | All areas (data-backed ones activate as connectors are added) |
| Brand, no store yet | Skip URL; generative path | Generative work now; data-backed waits on connectors |
| No brand, exploring | Category + audience | Generative-from-seed, framed "here's what ShopOS would do for a brand like this" |

**True-zero input disallowed** — force the two-sentence seed.

### 5.3 Edge states the prototype must include (holds from v2)
Low-confidence read → show what's known, label uncertainty, ask one discriminating question · Private/headless store → offer Shopify connect / catalog export / brand-guide upload · Very large catalog → partial read while indexing continues · No performance data → activate creative & store, hold growth in "ready to connect" · Connection denied → preserve every other area · First run finds nothing → *"Store checked, 246 PDPs. Nothing needs you."* is still a result · Loop failure → say what failed, what was tried, whether next run is affected · User leaves midway → resume at the last meaningful decision.

### 5.4 Onboarding visuals & tech (from the call)
Visual language is **circles / loops / dots / gradients** throughout. Left content scrolls while right content animates (Tympanus-style reference). Radar / center-out animation while learning the brand; quadrant highlight on intent selection; four-dot looping on the loop-explanation step. **Implementation lead from the call: WebGPU (vgpu.sh)** rather than a heavy animation library — flagged as agent-friendly / "vibe-code"-friendly and shader-based. `[Verify]` test on mobile before committing; confirm the team is comfortable with shaders. This is a build note, not a spec.

---

## 6. Home — the daily surface (rewritten per the call)

**The model: land on a health glance, then swipe a card stack of finished work.** This replaces v2's "Home is a health dashboard first" structure.

**On landing (paid brand):** active loops running, graphs of what moved, and *what your team has worked on.* This is the glance — brand health made concrete as running loops, not an abstract score wall.

**The card stack (the core interaction):**
- **One big card at a time.** Open Home → a brief loop animation → outputs stack into one massive card that "hijacks the page." No dense multi-widget dashboard. One core message per card, because the persona is non-technical and the content is media-heavy.
- **Two axes of navigation:**
  - **Horizontal = across loops.** Swipe from one loop to the next.
  - **Vertical = within a loop.** Scroll through everything that loop produced (e.g. the 10 images it generated, 5 video drafts, 3 ad concepts).
- **The card *is* the insight.** Accept the suggestion, decline it, or keep going — left/right, up/down. Fast, low-cognition, Stories-like.
- **Expand into the artifact.** Click a loop → it expands into a full-blown artifact (this is where the prototyped report-style detail lives).

**Actions surface three ways (from the call):**
1. **Quick action on the card** — e.g. "approve all ads," accept/decline right there.
2. **Open the artifact** → actions below it: send to team, jam with team, chat.
3. **Type anything** → routes to chat.

**Chat is loop-specific, not item-specific.** Every loop carries its artifact plus the generations it produced; the brand can discuss the artifact or an individual generation, but the chat session is scoped to the loop.

**Empty state barely exists** (holds from v2) — after onboarding there are already active loops, captured health, and work arriving.

---

## 7. The loop card & its artifact (replaces v2's "health report")

Expanding a loop is now the detail surface (what v2 called the per-ring health report). Consistent shape:
- **The card face** — one insight, media-first (the images/videos/ads the loop made), with accept / decline / approve-all inline.
- **Vertical body** — scroll every output the loop generated this cycle.
- **Expand → artifact** — full detail: what the agent found (analysis), what it produced or proposes (action), each reviewable. This is where the "Ad Fatigue Watch"-style report renders.
- **Loop-scoped chat + actions** — send to team, jam, or type.

Build obligation (holds from v2): **every loop needs both an analysis half and an action-or-output half defined** — only ~half the starter library currently has a defined output shape. Close that before this scales, or cards will be empty for those loops.

---

## 8. Loops — now visible, still fully specced

Loops are the brand-facing navigation unit (§3), but the seven-part anatomy and the library are unchanged internally.

### 8.1 Loop anatomy
**Goal · Trigger · Inputs · Route · Output · Approval policy · Learning.** Always returns an output — report, draft, action, or "nothing needed."

### 8.2 Starter library (with corrected endpoints, holds from v2/§4.1)

| Area | Loops | Where the loop ends |
|---|---|---|
| Creative (Monica) | Fresh Content · Winning Pattern Remix | **Assets ready for review/handoff** — never a publish |
| Growth (Gavin) | Ad Fatigue Watch · Weekly Performance Brief | Findings + reports; autonomous budget/pause is `[Open]` |
| Store (Richard) | Store Health · Catalog Freshness | Pages/fixes built in Shopify |
| Visibility (Big Head) | AI Visibility · Search Opportunity | **Articles generated and published live** to the verified domain |
| Cross-agent | Creator Match · Monday Brand Brief | Reports/briefs |

### 8.3 Per-vertical packs (hold from v2, unchanged)
Fashion · Beauty/skincare (Wild Oak) · Food & beverage · Consumer electronics · Home & furniture · Jewelry/luxury · Single-product store · Multi-brand marketplace · Pre-launch. Each: what ShopOS notices → loops recommended → first proof → permission boundary. (Full pack detail retained in v2 §8.3.)

### 8.4 Connector-gated states (hold from v2)
Loops split into a **create half** (runs on brand substance alone — the pre-paywall "aha") and an **act half** (needs a connector/permission). Data-dependent loops stay selectable in a **"connect to activate"** state. Big Head splits inside one loop: tracking runs unconnected; the publish half waits on domain verification.

### 8.5 Custom loops (holds from v2)
Created through the prompt box, no sub-wizard: *"a job is about to be set up"* → confirm / permissions / settings / description.

---

## 9. Autonomy & permissions

**Disposition happens on the card: accept · decline · approve-all** (from the call), sitting on top of the per-loop **Approve / Deny / Archive** policy from v2. It reads as a reaction to what a loop produced, not a global AI dial. Trust is per-loop, never per-account. Default to the safe middle; never a gate in onboarding.

`[Open]` (holds from v2) No explicit home yet for an unattended-publish ("autopilot") mode. Decide whether it exists in v1 of the product and where it lives relative to accept/decline.

---

## 10. Connectors (hold from v2)
Requested **only when a loop needs one**, with the unlocked work explained · a dedicated step, never a settings wall · **skip is mandatory** · narrowest useful permission, read/write explained, return to the same place after OAuth.
**Shipped (per docs):** Shopify (read: products/orders/settings) · Meta Ads · Google Ads · plus Big Head's **custom-domain verification** (a de facto fourth connector — gates his publish half). **Proposed, not shipped:** Google Analytics · Klaviyo · CMS — design for them; onboarding copy must not promise them.

---

## 11. Human layer / "+Team" (sharpened by the call)

**Promised at the door, requested only after value is shown** (holds). The call sharpens the *mechanic*, and corrects the earlier "async operator working through the session" framing toward a **ticket-dispatch model**:

- **"+Team" compacts the current session into a ticket, dispatches it to real people, and promises delivery within 24–72 hours.** This is async and SLA-bound — not live co-presence, not a call. (The call explicitly mocked the "add a person to a live call" version as turning ShopOS into "a tech support company.")
- **Visual:** adding +Team draws a **glow around the session/prompt** — "adding your team to this."
- Gated behind the **$999 tier + approval** (holds). Every brand on that tier gets a dedicated **1–5 person team**; any session can pull them in.
- Surfaces on Home post-value, in the slot ChatGPT uses for "get desktop app."

`[Resolved from v2]` The v2 "async operator vs. live co-presence vs. call" question is settled: **ticket-dispatch, 24–72h SLA.** Live co-presence is explicitly out.

---

## 12. Information architecture (updated per the call)

- **Loops are the top-level object on Home** (reversed from v2). Agents remain a lens; brand health is the glance-layer above the loop stack.
- **Collapsible side nav.** Two acceptable versions: (a) collapse the whole pane, Claude-style; (b) keep briefs / agents / history visible. Both fine; keep it minimal. Hover to peek, click to enter.
- **Loop-specific chat** is the command layer inside a loop; the global prompt box creates/interrogates across loops.
- **The prompt box (decided on the call):**
  - Visually too heavy today vs. ChatGPT — **drop the second color, reduce layers.**
  - **Memory is always on by default.** Do not make it a toggle the user has to find.
  - **Mood board is decoupled from memory.** The picker is "choose mood board / create new mood board," not "choose memory."
  - **Incognito** option above, for when the user wants to switch memory off/change it for a session.
- **Per-agent dense surfaces** (Gavin, Big Head) open in their own tab (holds from v2).
- **Sidebar detail** still finalized in Figma, not here.

---

## 13. Pricing & positioning (holds from v2)
Pricing stays out of onboarding; value before persistence. Tiers: **$0 / $9** ultra-simple, health-and-loops only; **$999** adds the 1–5 person deployment team. Price the recurring work, not "agents." `[Open]` positioning voice must resolve the health-vs-stories metaphor tension (§2) before external copy locks — "your brand on autopilot" (health) vs. a stories/feed framing.

---

## 14. Metrics (holds from v2, one caveat)
North star: **time to unattended value** (URL → useful output without prompting). Activation chain: URL → scaffolded → first work proposed → activated → first automatic run → first useful result accepted → **second automatic run without setup**.
**Caveat:** v2's "narration test" (user describes ShopOS without saying "loop") is **retired** — loops are now intentionally brand-facing. Replace it with: *can a non-technical user swipe the card stack and accept/decline without a tutorial?* If they hesitate on what a card is asking, the media-first framing failed.

---

## 15. Explicit don'ts (updated)
Keep out of the first flow: agent-builder complexity · prompt engineering · connector-settings wall · pricing explanation · human-team request.
Anti-patterns: no dense analytics dashboard as Home for this persona (the call's core objection) · no text-heavy brief as the loop surface — *"there is nothing for you to take action on, this is just for you to keep getting new creative ideas"* · no attribute-card brand scrape (stream the wiki instead) · no live-call human support · don't auto-publish high-risk work on Day 1 · don't expose anything below the loop (memory/routes/skills/models/evals).
**Delight is evidence, not animation** — a recognized fact, a draft offered before asked, a clean run reported honestly.

---

## 16. Build sequence (updated)
URL entry + real scan + streaming brand wiki → toggle intent + four-step loop explainer → one real first result before payment → optional connectors → "everything ready" modal → **Home as card stack** (health glance + swipeable loop cards, accept/decline, expand-to-artifact, loop-scoped chat) → only then paywall, +Team, advanced controls.

**Prototype ladder:**

| # | Contents | Success criterion |
|---|---|---|
| 0 | URL/seed → streaming wiki → intent → loop explainer → Home card stack with one loop's outputs, accept/decline, expand-to-artifact | A non-technical user swipes and dispositions cards without a tutorial |
| 1 | Segment variants: pre-launch · founder-SMB · mid-market | Same card model survives all three; only content + governance change |
| 2 | Trust: accept/decline → approve-all → failure/escalation → +Team ticket dispatch | Autonomy + the human handoff feel controlled |
| 3 | Advanced: reveal loop internals, edit schedule/instructions, inspect runs | Power users lose nothing; ordinary users never see it |

Tooling: Linear for sprints; Figma as source of truth by quarter. *"Prototype the new primitive until it feels inevitable — don't redesign the whole product yet."*

---

## 17. Open questions (v2.5)

1. **Health vs. Stories metaphor** (§2) — which leads positioning; is there one line that spans both? Pivotal for external copy.
2. **Gavin's action authority** (§4.1) — docs conflict; resolve before any card claims autonomous ad actions.
3. **Richard's scope** (§4.1) — Page Builder today vs. the wider "store health" ring; confirm the build target.
4. **Unattended-publish / autopilot** (§9) — does it exist in v1, and where relative to accept/decline?
5. **"Health" vs the "Store Health" loop** (§2) — naming collision, still unresolved.
6. **Card stack for non-media loops** — the Stories model is built for image/video output; how does a text/report loop (Weekly Performance Brief, Monday Brand Brief) render as a swipeable card without becoming the text-heavy brief the call rejected? (§7 build obligation)
7. **Projects** — mentioned on the call, not yet reviewed; how it relates to loops, mood boards, and memory is undefined.
8. **Mood board scope** — now decoupled from memory (§12); Monica-only or cross-agent, and where it's created, still parked.
9. **WebGPU bet** (§5.4) — verify mobile performance and team comfort with shaders before committing the onboarding animation to it.
10. **The dependency no design fixes:** the loop-first architecture routes through the orchestrator, today the weakest component, while the well-built software is the per-agent chats. State it as a build risk; don't design around it silently.
