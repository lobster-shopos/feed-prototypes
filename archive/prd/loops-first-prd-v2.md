# ShopOS "Loops First" — PRD v2

*3 Sep 2026, agent capabilities corrected against shopos.ai/docs on 4 Sep. This version reorganizes the work around the settled story, metaphor, and mental model. The full reconciliation history — source inventory, brief-vs-meetings conflict register, round-by-round rulings, superseded text — lives in v1 (`claude/loops-first-context.md`), retained as the archive. v2 keeps the decisions and the reference content, and drops the archaeology.*

**Scope:** the self-serve onboarding flow and the Home surface it lands on. Everything else is context for those two.

---

## 0. What changed from v1, and the one decision that gates the rest

v1 treated the **Loop** as the thing the brand sees, names, and consumes. v2 demotes the loop to internal machinery. **What the brand actually consumes is the health of their brand, expressed per agent** — a report and a score, built underneath from loops running and agents collaborating. The loop still does all the work; it is just no longer the object the user holds.

This is a deliberate reframing of the product's user-facing primitive, not a change to the underlying ask or mechanics.

**The one decision still open, because it rewrites how much of this doc is literal:**

> **Does the brand ever see the word "Loop"?** v2 assumes **no, by default** — the brand-facing nouns are their brand's *health*, the four *agents*, and the *reports/decisions* those agents produce. "Loop" survives only in drill-down (inspecting how a score was produced) and at the create/prompt affordance (asking ShopOS to start a new recurring job). Confirm this, or the terminology fans back out across the product.

Everything below is written to that assumption. Where it matters, the loop-facing language is marked so it can be flipped in one pass.

---

## 1. The story — what a brand goes through

The narrative the whole product serves, start to finish:

1. **The promise at the door.** A brand arrives and ShopOS tells them plainly: *we will run your entire store — an army of agents, backed by humans — and get it done for you.* The pitch names both agents and humans. (The *request* for humans comes much later; see §11. The promise is allowed at the door; the ask is not.)

2. **One input: the store URL.** The brand hands over their store URL. ShopOS puts it into the background immediately and begins parsing everything it can — catalog, copy, imagery, voice — into Brand Memory. This runs while the next steps happen. (A brand with no store yet takes the manual path; see §5.)

3. **While memory builds, ShopOS teaches — and captures intent.** The page uses the parsing time to explain what ShopOS can do, framed as the four things the four agents handle. The brand tells us **which areas they care about** — all four, or one. This is intent capture disguised as a landing page. The background is still working; we are buying time productively.

4. **Each agent sets up its own work.** Once areas are chosen, each selected agent assembles its own set of recurring jobs. The brand is **informed, not asked to choose** — we explain what each agent is doing and what it means for them. More time bought; more of the brand learned.

5. **Optional: connect existing platforms.** Now — and only now — ShopOS asks whether the brand wants to connect anything they already use (shipped: Shopify, Meta Ads, Google Ads, plus Big Head's domain verification; proposed: Google Analytics, Klaviyo, CMS — see §10) for better context. Yes or no; connect or skip. **Either path lands in the same place.**

6. **Recommended next.** ShopOS recommends more work it could take on, the brand picks from it, and onboarding ends.

7. **Land on Home.** The brand lands on a Home that already shows their **brand health** (captured during onboarding), the agents now working for them, and a prompt box to start new work or ask what's going on.

The spine of the experience: **ShopOS does the setup in the background while it earns the brand's understanding in the foreground.** The brand never faces an empty product or a blank prompt — they arrive to a brand already running.

---

## 2. The metaphor — Apple Health for brands

**ShopOS is Apple Health for your brand.** It continuously tracks the health of everything that matters, surfaces it as a small number of rings, and asks the brand to do one thing: **keep the rings closed.**

- The brand does not operate machinery. It **tends health.**
- Each day reduces to: *what moved, what needs me, close the rings.*
- Depth exists for anyone who wants it — tap a ring and go all the way down to the individual job — but the daily object is the ring, not the mechanism.

Why this metaphor and not "an inbox of tasks": an inbox says *here is a pile of work you now own.* Apple Health says *this is being looked after; here is your standing, and the few things worth your attention.* The second is the promise ShopOS is actually making.

**The rings are the four agents.** Brand health decomposes into four dimensions, one per agent (§4), plus an overall brand-health score composed from them. Closing a ring means clearing the decisions that agent has surfaced and keeping its dimension in good standing.

*Naming note:* "health" is now the top-level metaphor, but v1 also has a specific loop literally named **Store Health** (Richard's machinery). Scope the word or rename the loop, or the two will collide in copy.

---

## 3. The mental model

**What the brand consumes (the primitive):** the **health of their brand, per agent** — a living report and a score for each of the four dimensions, and one overall. This is the top-level object, the thing on Home, the thing the brand checks daily.

**What produces it (the machinery, mostly hidden):** each agent's health is assembled from **recurring jobs (loops) it runs** and **collaboration with other agents.** A score is not a vanity number — it is the roll-up of real work: analyses run, issues found, drafts produced, actions taken or awaiting approval.

**The hierarchy, top to bottom:**

```
Brand health (overall score)
  └─ Agent health ×4        ← what the brand reads & tends  (the rings)
       └─ Reports & decisions ← what the brand acts on       (approve / deny / archive)
            └─ Loops          ← the recurring jobs that produce them   (machinery, drill-down)
                 └─ Memory · Routes · Skills · Models · Evals  ← never surfaced
```

**What stays true from v1 (unchanged mechanics):** agents autonomously run recurring jobs; a single run can take multiple actions, some requiring approval and some not; reversible in-ShopOS work runs on its own while anything that spends budget or publishes externally waits for the brand. v2 changes only the **layer the brand reads from** — up one level, from the individual job to the agent's health.

**Consequence for the report we prototyped:** the "Ad Fatigue Watch" report is a *loop-level* view. In v2 it becomes a **drill-down inside Gavin's growth health**, not a top-level surface. The top-level surface is the agent's health report; the loop report is what you reach by tapping into it.

**Visible vocabulary:** Brand · Health (overall + per agent) · Agents · Reports · Decisions (approve/deny/archive). **Hidden:** Loops (except drill-down/create), Memory, Routes, Skills, Agents-as-workers-inside-loops, Models, Evals.

---

## 4. The four agents = the four rings

Each agent owns one dimension of brand health. During onboarding these are the four areas the brand chooses among; on Home they are the rings.

| Agent | Ring / health dimension | What its score is built from |
|---|---|---|
| **Monica** (Creative Director) | Creative & content health | Fresh assets generated (images, video, video edits), variants ready to test, creative-fatigue refreshes drafted |
| **Big Head** (AI Visibility / GEO) | Visibility health (AI search) | Buyer prompts run across ChatGPT/Gemini/Perplexity, mentions & rank vs competitors, citation gaps found, gap-closing articles generated and **published** |
| **Gavin** (Performance Marketing) | Growth health (ads / performance) | Monitoring checks run (fatigue, SKU quadrants, catalog health), wasted-spend flagged, reports produced |
| **Richard** (Shopify Page Builder) | Store health (Shopify / site) | Pages built & updated, PDP quality, catalog freshness, spec integrity |

**Overall brand health** is composed from the four.

### 4.1 Capability boundaries — what each agent actually does today (per shopos.ai/docs, 4 Sep) ✅ CORRECTED

The earlier draft over- and under-assigned capabilities. The docs-grounded truth:

- **Monica creates; she never publishes.** Creative Director generates static images, video, and video edits (model + resolution selectable), from Brand Memory + product info, via two modes: Supercomputer (conversational brief-and-refine) and Creative Studio (direct parameters-in, output-out). Outputs are handed off — the brand places them on PDPs/social, or routes ads to Gavin. The docs mention no autonomous publishing, scheduling, or ad-platform deployment for her. **Any loop of hers must end at "assets ready for review/handoff," never "published."**
- **Big Head is the one who creates AND publishes.** The GEO agent runs the brand's buyer prompts across AI platforms, tracks mentions/rank/sentiment, identifies the sources AI models cite, finds content gaps — and closes them: "Generate content" (styled to the brand's Writing Rules) → "Publish Content" pushes articles **live to a connected, verified custom domain**. Publishing is hard-gated on domain verification; tracking and recommendations work without it. This is the strongest existing example of a full analyze→act loop, and its act-half connector is the *domain*, not Shopify/Meta.
- **Gavin monitors, reports, and configures — the docs are ambiguous on whether he acts on campaigns.** Shipped surface: per-channel dashboards (Meta/Google/Shopify, Top Ads leaderboard, campaign/ad-set/ad tables), Catalog (Advantage+-style catalog ads, SKU Configuration out-of-stock rules with impact preview, branded ad-template overlays at scale, feed management), **Monitoring — scheduled automated checks against connected ad accounts on a cadence the brand chooses** — and downloadable Reports built from those checks, plus scoped "Ask Gavin" analysis and SKU quadrants (Scale/Untapped/Drain/Inactive). He can configure rules and templates; the use-case docs stop short of pause/budget/launch authority, while the overview says he "analyzes and runs ads." `[Open]` resolve with product/eng before any health-report copy claims he reroutes budget autonomously.
- **Richard is the Shopify Page Builder** — "manages and runs your Shopify store," page creation without developer delays. Narrower today than the "fix and grow your store" framing; store-health scoring is a design extension on top of what ships, not a description of it. He has no public docs section yet.
- **Gavin's Monitoring is the loops machinery that already exists.** Scheduled checks on a chosen cadence producing reports — that is a loop in production clothing. The loops-first architecture should present itself as generalizing this shipped pattern to all four agents, not as net-new machinery.

**Not part of the four rings:** **Dinesh** (email/CRM) and **Jian-Yang** (brand intelligence) exist as agents but are not onboarding dimensions — and neither appears anywhere in the public docs. They surface later. Keep them out of the first flow.

**The fixed intent structure holds from v1:** onboarding presents these four as fixed, agent-anchored choices — not an open multi-select across a topic space. `[Open]` v1 also had a fifth global **"Set up everything"** card; the new story describes choosing among the four ("all four, or one") and does not mention the global card. Confirm whether "set up everything" survives as a fifth option or is simply "select all four."

---

## 5. Onboarding

### 5.1 The sequence

Screen count is not the design object; the **captured/displayed elements** are (v1's capture-vs-display framing). But the *order* is now fixed by the story:

1. **URL in → background parse begins.** The single required input. Parsing runs async through the rest of onboarding.
2. **Teach + capture intent** (while parsing). Explain the four agent areas; brand selects which they care about.
3. **Agents set up their work + explain it** (while parsing). Each chosen agent assembles its jobs; ShopOS narrates what each is doing. Brand is informed, not choosing jobs.
4. **Optional connectors.** Offer relevant platform connections; connect or skip; both converge.
5. **Recommended next.** ShopOS recommends more it can take on; brand picks.
6. **Land on Home** — health captured, agents running, prompt box present.

This also settles v1's parked question of **loop-setup timing: it happens during onboarding**, and the education about what the agents do is what fills the parse time.

### 5.2 Minimum viable input (carried from v1, still governing)

The floor is **two inputs**; the other two are deferrable.

1. **Intent** — required. Selects which agents/dimensions to activate.
2. **Brand substance** — required, one input with two entry paths, never two questions:
   - **Established brand → the URL.** Extract everything; no manual seed.
   - **Pre-launch / no store → category + audience** (~two sentences). The irreducible minimum; a job can't generate for a subject that doesn't exist.
3. **Connectors** — deferrable. Gate which jobs can *run*, not whether the brand is set up. Contextual, per need, skippable.
4. **Permissions** — never gate onboarding. Default to the safe middle (comes back to the brand for anything that acts externally).

**Three entry states to detect and route:**

| State | Brand input | What can produce a first result |
|---|---|---|
| Live store | URL → auto-extract | All dimensions (data-backed ones activate as connectors are added) |
| Brand, no store yet | Skip URL; generative path | Generative work now; data-backed work waits on connectors |
| No brand, exploring | Category + audience | Generative-from-seed only, framed "here's what ShopOS would do for a brand like this" |

**True-zero input is disallowed** — force at least the two-sentence seed, or the first result is generic and the pre-value "aha" collapses.

### 5.3 Edge states the prototype must include

| State | Behavior |
|---|---|
| Low-confidence brand read | show what's known, label uncertainty, ask one discriminating question |
| Private / headless store | offer Shopify connect, catalog export, or brand-guide upload |
| Very large catalog | show a quick partial health read while deeper indexing continues |
| No performance data | activate creative & store dimensions; hold growth in "ready to connect" |
| Connection denied | preserve every other dimension; explain only what that one can't yet do |
| First run finds nothing | *"Store checked, 246 PDPs. Nothing needs you."* A clean run is still a result |
| Job failure | say what failed, what was tried, whether the next run is affected |
| User leaves midway | resume at the last meaningful decision, never screen one |

---

## 6. Home — the daily surface

**Health first, not an inbox first.** Home opens with the brand's health — the rings — captured during onboarding, then the attention it needs, then the machinery if you go looking.

Four questions Home answers in five seconds:
1. Is my brand healthy / running?
2. What happened while I was away?
3. What needs me?
4. Is anything getting better?

Structure, top to bottom:
- **Brand health + the four rings** — the overall score and each agent's dimension. The primary object.
- **Needs you** — the attention queue: decisions awaiting approval, a strategic question, unusual events. Everything else is running.
- **Since you were away** — completed work (assets created, PDPs improved, gaps closed).
- **The agents at work** — each ring tappable into its health report and, below that, its jobs.
- **Prompt box** — start new work, change how something runs, or ask what's going on ("why did you replace this ad?", "make content less premium", "pause visibility until October"). Language mutates real product objects, not just text.

**The empty state should barely exist.** After onboarding, ShopOS already holds a brand, active dimensions, work in progress, and a concrete time when value arrives. An empty prompt box is exactly the wrong destination.

**Decisions are the unit of action.** Every finding an agent surfaces is a decision: approve, deny, or archive (§9). Review is itself a decision. Multi-option items route into the prompt box, which suggests the next step.

---

## 7. The health report (what a ring opens into)

Tapping a ring opens that agent's **health report** — the top-level consumable. It has a consistent shape (the report we prototyped is this, one level down at the loop):

- **The score and what moved it** — this dimension's standing and the change since last look.
- **What the agent did this cycle** — the multi-action ledger: work done automatically (reversible, in-ShopOS) vs. work waiting for approval (spends budget or publishes externally).
- **Analysis half** — what the agent found (e.g. existing creative fatiguing, PDPs missing specs, visibility gaps). Media-rich where the subject is visual.
- **Action half** — what the agent produced or proposes (new creative, drafted fixes, comparison tables), each individually reviewable with **Approve / Deny / Archive**.
- **Drill-down** — from any line, into the specific loop that produced it. This is where "Loop" as a word may appear.

Every agent's report necessarily exists, because every dimension's score is *built* from work already done — there is always something to show. This creates a build obligation: **every dimension needs both an analysis half and an action half defined** (v1 flagged that only half the job library currently has a defined output shape — close that before this scales).

---

## 8. Loops — the machinery (mostly hidden)

Loops are how agents actually work. The brand rarely sees them by name; designers and engineering must still spec them fully.

### 8.1 What a loop is

A persistent job ShopOS keeps doing until the goal changes. Seven parts: **Goal · Trigger · Inputs · Route · Output · Approval policy · Learning.** A loop always has an output — a report, a draft, an action, or a "nothing needed" result — which is what rolls up into an agent's health.

### 8.2 The starter library (fuel for the four rings)

| Dimension | Loops | Where the loop ends (per §4.1 boundaries) |
|---|---|---|
| Creative (Monica) | Fresh Content · Winning Pattern Remix | **Assets ready for review/handoff** — Monica never publishes; deployment is the brand's or Gavin's move |
| Growth (Gavin) | Ad Fatigue Watch · Weekly Performance Brief | Findings + reports (today's shipped Monitoring); autonomous budget/pause action is `[Open]` |
| Store (Richard) | Store Health · Catalog Freshness | Pages/fixes built in Shopify (his shipped job is page building) |
| Visibility (Big Head) | AI Visibility · Search Opportunity | **Articles generated and published live** to the verified domain — the one agent whose loop closes with a publish |
| Cross-agent | Creator Match (influencer) · Monday Brand Brief (executive summary) | Reports/briefs |

### 8.3 Per-vertical packs

The shell never changes; only the observation, the pack, and the evidence do. Each vertical: what ShopOS notices → the jobs it recommends → the first proof → the permission boundary.

- **Fashion / apparel** — New Drop Launch · Creative Fatigue Watch · Merchandising Watch · Catalog Freshness. *Boundary:* drafts and preview reorders allowed; publishing, price, inventory need approval.
- **Beauty / skincare (Wild Oak)** — Fresh Content · Claims Check · Routine Builder · Repeat Purchase Watch. *Boundary:* ingredient/compliance locked; no invented efficacy or medical claims.
- **Food & beverage** — Replenishment Watch · Bundle Builder · Seasonal Menu · Review Mining. *Boundary:* discounts, subscriptions, allergens, nutrition need approval.
- **Consumer electronics** — Spec Integrity · Comparison Builder · Compatibility Watch · Price & Availability Watch. *Boundary:* never changes a spec from inference; every change needs a source + approval.
- **Home & furniture** — Room Scene Builder · Dimension Check · Complete the Room · Lead-Time Watch. *Boundary:* generated scenes must preserve product geometry/finish; any visual that alters the physical product fails automatically.
- **Jewelry / luxury** — Trust Detail Check · Occasion Content · Visual Consistency · High-Intent Follow-up. *Boundary:* cannot invent material purity, provenance, or certification; high-value outreach stays in approval.
- **Single-product store** — Angle Test · Landing Page Watch · Objection Mining · Winner Expansion. *Boundary:* every new claim needs product/research/customer support.
- **Multi-brand marketplace (20k+ SKUs)** — Catalog Integrity · Attribute Normalization · Listing Quality Watch · Brand Compliance. *Boundary:* begin in Watch; bulk changes need sampled review, rollback, audit trail.
- **Pre-launch, no store** — Brand Foundations · Launch Calendar · Store Readiness · Launch Creative. *Boundary:* declared intent is never presented as real performance data.

### 8.4 Connector-gated states

Loops split into a **create half** (runs on brand substance alone — no connector, no real permission — this is the pre-paywall "aha") and an **act half** (needs a connector and/or permission). Data-dependent loops stay *selectable* but sit in a first-class **"connect to activate"** state (e.g. *"Ad Fatigue Watch begins after Meta is connected"*). Big Head splits the same way inside one loop: tracking and recommendations run unconnected; the publish half waits on domain verification (§4.1).

### 8.5 Custom loops

Created through the orchestrator/prompt box, not a wizard. No sub-chat window — creation, editing, connector auth, and permission changes all happen in the main prompt surface: *"a job is about to be set up"* → confirm / manage permissions / settings / description.

---

## 9. Autonomy & permissions

**One control per loop, three values: Approve · Deny · Archive.** It reads as a disposition on what a loop has produced, not a global "AI autonomy" dial. Trust is per-loop, never per-account. Default to the safe middle — the brand is asked before anything acts outside ShopOS. Never a gate in onboarding; surfaced and adjustable on Home.

`[Open]` There is no explicit home yet for an unattended-publish ("autopilot") mode within Approve/Deny/Archive. Decide whether unattended publishing exists in v1 of the product at all, and if so where it lives.

---

## 10. Connectors

- Requested **only when a job needs one**, with the work it unlocks explained.
- A dedicated step, never a settings wall or a blocking modal.
- **Skip is mandatory** — a blocked job must never block the product.
- Narrowest useful permission; read/write explained beside the button; return to the same place after OAuth; show what became possible immediately.
- **Shipped today (per docs):** Shopify (read access to products/orders/settings) · Meta Ads · Google Ads — plus Big Head's **custom-domain verification**, which is effectively a fourth connector: it alone gates his publish half. **Proposed, not shipped:** Google Analytics · Klaviyo · CMS — design for them, but onboarding copy must not promise them.

---

## 11. Human layer / deployment team

**Promised at the door, requested only after value is shown.** The opening pitch names humans ("agents and humans get it done for you"). The *request* to add them is **not in onboarding** — it would force a pricing conversation before the brand has seen anything work.

- **"Add human / expert" lives on Home**, post-landing, once value is proven — in the slot ChatGPT uses for "get desktop app."
- Gated behind the **$999 tier + an approval step**. Every brand on that tier gets a dedicated **1–5 person team**; any session can pull them in.
- Once requested: *"I've pinged your team, waiting for them to join"* → they join and work in the session; an in-progress shimmer on Home while the team spins up.
- **The join model** `[Open, recommendation]`: async **operator**, not live co-presence and not a call. The human works *through* the session on the brand's behalf (their actions land in the same approve/deny/archive queue and show in session history attributed to them); "presence"/live co-typing is a v2 nicety at most. The Figma-style call model has no support in any source — don't build toward it.

---

## 12. Information architecture

- **Agents stay top-level but are not what the product leads with or teaches first.** The lead is brand health; agents are the rings behind it.
- **Chat / prompt box is the universal command layer** — the place to create, change, and interrogate. Language mutates real objects.
- **Per-agent surfaces open in their own browser tab** (Gavin and Big Head are too data-dense to embed; a 60/40 split was rejected). Return via breadcrumb (*"ShopOS × Monica"*); accept that browsers can't reliably re-focus an existing tab.
- **Sidebar structure is deferred to Figma** — options, order, grouping to be defined there, not specced here. (v1's above/below-the-line draft is superseded pending that file.)
- **Active-agent signal** on Home is filtered to human-initiated work only (loops always run, so "in progress" would otherwise mean everything).
- **Departments** are packaging/summary language, never a mandatory nav layer.

**Design-system rules that survive:** design the primitive before the component library; every screen gets one primary object and one primary action; explain state before architecture; setup looks like ShopOS working, never a spinner; advanced power is always one level deeper, never forced on anyone.

---

## 13. Pricing & positioning

**Pricing stays out of onboarding.** Value before persistence: scan and show brand health before signup; ask for an account only to save the scan and start the work.

| Tier | Experience |
|---|---|
| **$0 / $9** | Ultra-simple, automated, health-and-jobs only. Minimal prompting. |
| **$999** | Adds the dedicated 1–5 person deployment team. Denser UI acceptable — the team operates it. |

Price the recurring work ShopOS keeps running, **not "agents."** Keep any plan screen to one plan, one action, a few outcome cards. If credits appear at all, they stay a toast, never navigation.

**Positioning leans "your brand, on autopilot"** for the onboarding stage — now naturally expressed through the health metaphor (*ShopOS keeps your brand healthy and moving, and asks you only when a decision needs you*). "A team that owns the outcome" is the line reserved for the moment "add human" surfaces on Home. The two are sequenced, not blended.

---

## 14. Metrics

**North star: time to unattended value** — URL submitted → something useful produced without the brand prompting for it. Better than prompt count, generations, or spaces opened.

Instrument the activation chain: URL submitted → brand scaffolded → first work proposed → first work activated → first automatic run completed → first useful result accepted → **second automatic run completed without setup work.**

Prototype targets: median URL → first running job under 90s; under three decisions before activation; at least one useful result in the first session; ≥30% return for the second automatic run.

**The narration test.** Ask a user "what does ShopOS do?" A pass: *"I gave it my store. It learned my brand and started keeping it healthy — it runs the work and asks me when something needs a call."* A fail names agents, models, prompts, loops, or credits — that means the machinery leaked into onboarding.

---

## 15. Explicit don'ts

**Keep out of the first flow:** agent-builder complexity · prompt engineering · a connector-settings wall · moodboards for a visibility request · internal implementation concepts · deployment-team/human requests · any pricing-plan explanation.

**Anti-patterns:** no model picker to open; no "meet your 10 agents" as the activation journey; don't ask the user to author a job before they've received value; no empty prompt box as the onboarding destination; don't expose Brand Memory as a technical setup task; don't invent separate nouns for the same recurring job; don't show workflow graphs just because they look agentic; don't auto-publish high-risk work on Day 1 to look autonomous; don't redesign every screen before the primitive is validated.

**Delight is evidence, not animation.** The first "wow" is a recognized fact (*"seven ads use the same opening frame"*), a draft offered before a question is asked, a clean run reported honestly. No confetti.

---

## 16. Build sequence

Build order: URL entry + real scan + first health read → teach/intent + agents assemble work → one real first result before payment → optional contextual connectors → recommended next → populated Home → **only then** paywall, segment branches, advanced controls.

**Prototype ladder:**

| # | Contents | Success criterion |
|---|---|---|
| 0 | URL/seed entry · parse-time teaching · intent · agents set up work · populated Home with health · a report + its drill-down · approve/deny/archive | Someone narrates what ShopOS does **without** the words agent, loop, space, model, prompt, credit |
| 1 | Three segment variants: pre-launch · founder-SMB · mid-market | Same primitive survives all three; only recommended work + governance change |
| 2 | Trust: watch → draft → approve → (autopilot?) → failure/escalation | Autonomy feels controlled, not reckless |
| 3 | Advanced mode: reveal loop/route/agents/skills, edit schedule/instructions, inspect runs | Power users lose nothing; ordinary users never see it |

Tooling: Linear for sprints; Figma as source of truth, organized by quarter. *"Prototype the new primitive until it feels inevitable — don't redesign the whole product yet."*

---

## 17. Open questions (v2)

1. **Does the brand ever see "Loop"?** (§0) — the pivotal one. Assumed hidden; confirm.
2. **The fifth "Set up everything" card** — survives, or collapses to "select all four rings"? (§4)
3. **"Clone a store in minutes"** (Richard) — a one-time action feeding recurring store-health work, or itself a recurring job? (from the intent-screen work)
4. **Unattended-publish / autopilot** — does it exist in v1, and where does it live relative to Approve/Deny/Archive? (§9)
5. **Human-join presence model** — async operator (recommended) vs. live co-presence vs. call. (§11)
6. **"Health" vs the "Store Health" loop** — resolve the naming collision. (§2)
7. **Magazine placement** and **mood-board scope** (Monica-only vs cross-agent) — both still parked.
8. **The dependency no design fixes:** the loop-first architecture routes through the orchestrator, today the weakest component, while the well-built software is the per-agent chats. State it as a build risk, don't design around it silently.
9. **Gavin's action authority** — docs conflict: overview says "analyzes and runs ads," use-case docs describe monitor/report/configure only (no pause, budget, or launch authority). Resolve before any health-report or onboarding copy claims autonomous ad actions. (§4.1)
10. **Richard's scope** — shipped agent is Shopify **Page Builder**; the "store health / fix and grow" ring is a designed extension. Confirm eng is building toward the wider scope, or narrow the ring's copy. (§4.1)
