# ShopOS "Loops First" — Consolidated Context

**Compiled:** 31 Aug 2026
**Purpose:** Single source of truth for the loop-first reimagining of ShopOS. Input for the PRD handed to Claude Design.

> **Read §17 first if you read nothing else.** The Notion brief and the two meetings disagreed on several load-bearing decisions. Lobster ruled on five of them on 31 Aug — those rulings are recorded in §17 and now supersede both sources. §18 lists what's still open, including new questions raised by this round of rulings.

---

## 0. Source inventory

| # | Source | Status |
|---|---|---|
| 1 | **Notion brief** — `♾️ 🔁 [Design] Self-serve onboarding + always-on loops`. Design owner: New Hush (Harsh Singh). Review: Thursday with Sai, Vedant + engineering. | ✅ Read 100% (1,466 lines) |
| 2 | **Meeting A** — "Design catch up", 34m 35s. Strategy session. Voices: Harsh Saini (strategy), Vedant Vaibhav. | ✅ Read 100% (notes + transcript) |
| 3 | **Meeting B** — "Design catch up", 1h 15m 13s. Execution / IA session. Voices: Harsh Singh, Vedant Vaibhav. | ✅ Read 100% (notes + transcript) |
| 4 | **Public prototype** — `shopos-loops-onboarding.saitec.chatgpt.site` | ⚠️ Entry screen + metadata only. Host blocked by org egress policy (403), so the full flow could not be rendered. |
| 5 | **Claude artifact** — "ShopOS Loops Prototype" | ❌ Shared by public link; reads as non-member, which isn't supported. Needs re-sharing to `lobster@shopos.ai` as a member, or send the HTML. |

**What #4 did yield:** page description *"A store URL becomes four recurring jobs in four screens"* and status line *"4 Loops started. Nothing publishes without approval."* Entry screen copy: heading **"What should ShopOS run for you?"**, field `wildoak.in`, three buttons — `Connect Shopify` · `Start without a store` · `Upload a brand guide`. Note this is **four screens**, where the brief specifies nine. The prototype is already a compression of the brief.

**Confidence key:** `[Brief]` = from the Notion doc · `[Aligned]` = explicitly decided in a meeting · `[Conflict]` = sources disagree, see §17 · `[Open]` = flagged unresolved · `[Inferred]` = my reading.

**Attribution note (corrected, 2 Sep):** Four distinct people appear across sources, not three. **Harsh Singh** and **Harsh Saini** are two different people — both went by "Harsh" on and off across calls, alongside **Vedant** and **Sai**, and are not to be conflated. The brief's design owner **"New Hush"** = **Harsh Singh**. Meeting A's strategy voice, transcribed as **Harsh Saini**, is a separate person from **Sai** (who appears independently in the brief's review list, line 14, and in §17.10/§19). The brief's thesis is addressed to **Vedant + Abhinav**. This corrects an earlier `[Likely]`-tagged assumption in this doc that Harsh Saini and Sai were the same person — they are not.

---

## 1. The thesis

**The redesign does not start with UI. It starts with a new product primitive.** `[Brief]`

> "The next ShopOS redesign should not begin with a better sidebar, prettier agent cards, or a cleaner prompt box. It should begin with a **new product primitive** that makes the product dramatically easier to understand. Working bet: the primitive is the Loop."

**The activation flip** `[Brief]`

| | |
|---|---|
| **Old activation** | "I made something with ShopOS." |
| **New activation** | "ShopOS has started running my brand." |

The activation moment is explicitly: **the first Loop is running — not the first prompt was sent.**

**The one-sentence product:** *Drop in your brand. ShopOS builds the AI departments and starts running the work.*

**Why the current redesign was stuck** `[Brief]`

Simplifying the interface without changing the unit of the product. As long as the ontology stays *Agents / Spaces / Skills / Brand Memory / Files / Models / Credits / prompt boxes*, even an excellent visual redesign still asks the customer to understand internal machinery. The product becomes **easier to look at, but not easier to use.**

**The market read** `[Brief]`
- A broad PLG product can't be "our enterprise capabilities, exposed through prompt boxes."
- A user gives a bad prompt, gets a bad result, concludes the product is bad.
- Creator tools can lean on templates; a brand cannot become a template feed — work must retain brand specificity.
- GEO-style complex workflows become self-serve only when the user provides access/context and the system does the work.
- End state is closer to *"give us your website, the right systems start running"* than *"choose an agent and tell it what to do."*
- The Binny discussion forces discipline: a serious PLG product needs a distinct insight and right to win. Cheaper-or-prettier isn't enough.

**The same thesis from the meetings** `[Aligned]`

> "If everything boils down to what you can prompt the orchestrator, then it becomes the similar tool to everything else. But a loop is automatically doing that over and over."

Plus the architectural framing — **the DeepSeek harness model**: core product = one chat, everything on top = plugins. Applied: a deliberately minimal orchestrator, with complexity fanning out.

> "Our bigger problem is we're trying to capture everything and do everything into one UI."

---

## 2. Ontology and vocabulary

### The two-layer ontology `[Brief]`

**Visible:** Brand → Goals → Loops → Inbox → Results
**Hidden:** Memory → Routes → Skills → Agents → Models/Tools → Evals

```
                   WHAT THE USER SEES

             ┌───────────────────────┐
             │         BRAND         │
             │    wildoak.com / +    │
             └───────────┬───────────┘
                         ▼
             ┌───────────────────────┐
             │         GOALS         │
             │ grow • launch • fix   │
             └───────────┬───────────┘
                         ▼
       ┌──────────────────────────────────┐
       │              LOOPS               │
       │ content • ads • store • GEO • CRM│
       └───────────────┬──────────────────┘
             ┌─────────┴─────────┐
             ▼                   ▼
     ┌──────────────┐     ┌──────────────┐
     │    INBOX     │     │   RESULTS    │
     │ approve 3    │     │ work shipped │
     └──────────────┘     └──────────────┘

            EVERYTHING BELOW IS HIDDEN

Memory → Routes → Agents → Skills → Tools/Models → Evals
```

### Locked vocabulary `[Brief]` ⚠️ `[Conflict — see §17.1]`

| Term | Meaning |
|---|---|
| **Brand** | the business ShopOS works for |
| **Goal** | what should get better |
| **Loop** | a job ShopOS keeps running |
| **Run** | one execution of a Loop |
| **Inbox** | decisions needing a person |
| **Result** | work completed or movement measured |
| **Today** | the daily proof surface |
| **Draft / Approve / Autopilot** | autonomy levels |

> "Do not alternate between Loop, Routine, Automation and Workflow in the default experience."

**The meetings walked this back.** Meeting B concluded users don't know what a loop is and shouldn't have to: *"Why should the user understand what loops are to begin with?"* / *"We can't use the loops language."* This is the single most consequential disagreement in the material.

### Primitive pressure-test `[Brief]`

| Primitive | Explains | First-class? | Verdict |
|---|---|---|---|
| **Loop** | persistent job that keeps running | **Yes** | Strongest new primitive |
| **Goal** | why Loops exist / what success means | Yes, lightweight | Objective layer |
| **Department** | bundle of related jobs | Maybe | Useful packaging metaphor |
| **Inbox** | where human attention is required | **Yes** | Core interaction surface |
| **Agent** | who reasons / executes | **No** | Worker, not product root |
| **Space** | visual execution surface | No for default UX | Advanced / operator layer |
| **Skill** | reusable instruction / expertise | No | Implementation detail |
| **Autopilot** | degree of autonomy | As a mode | Great positioning, weak data primitive |
| **Run** | one execution | Secondary | History / observability |

> "Do not invent more vocabulary than necessary. The strongest visible nouns are **Brand, Goal, Loop, Inbox, Result.**"

### The five things a user must learn, in order `[Brief]`

`Curiosity → Recognition → Control → Momentum → Proof`

- **Curiosity** — "What can ShopOS learn from my URL?"
- **Recognition** — "It understands my brand."
- **Control** — "Nothing will publish without me."
- **Momentum** — "Four useful jobs are already starting."
- **Proof** — "There is work waiting for review."

---

## 3. Anatomy of a Loop

### The seven concepts `[Brief]`

Every Loop contains only:

1. **Goal** — what better looks like
2. **Trigger** — when it wakes up
3. **Inputs** — what it watches
4. **Route** — how the work gets done *(mostly hidden)*
5. **Output** — what it creates / changes
6. **Approval policy** — when a human must decide
7. **Learning** — what the next run remembers

Definition: *"a persistent job ShopOS keeps doing until the goal changes."*

### Loop card — collapsed `[Brief]`

```
┌──────────────────────────────────────┐
│ ● AD FATIGUE WATCH                   │
│ Replace tired ads before performance │
│ drops.                               │
│                                      │
│ Watching 42 ads                      │
│ Last run  34m ago                    │
│ Next      always on                  │
│                                      │
│ 2 need approval           [ Review ] │
└──────────────────────────────────────┘
```

Minimum visible metadata: plain-English job · current state · last/next run · outcome metric · human attention if required.

**Do not lead with** agent name, model, workflow graph, or credit consumption.

### Loop detail — progressive disclosure `[Brief]`

```
AD FATIGUE WATCH                          ● RUNNING
─────────────────────────────────────────────────
Goal        Replace tired ads before ROAS falls
Watching    Meta Ads • 42 active ads
Policy      Ask before launching replacements
Outcome     6 replacements shipped this month

RECENT RUNS
Today       2 fatigued ads found → 6 concepts ready
Yesterday   no action needed
Monday      1 ad replaced → ROAS +11% since switch

[ Review concepts ]
─────────────────────────────────────────────────
How this works ▸
Instructions   ▸
Connected data ▸
Agents & tools ▸
Run history     ▸
```

> "Complexity still exists. It is simply subordinate to the job."

### Required component family `[Brief]`

Design the primitive **before** the component library:

Loop card · Loop setup/recommendation card · Loop detail · run timeline · autonomy control · approval card · outcome/metric chip · connector request · exception/failure state · paused/learning/running state.

> "Only after this family works should we reskin every old product surface around it."

### The five states users care about `[Brief]`

**Running · Waiting for you · Learning · Completed · Failed/needs help**

> "They care much less about which internal agent or model is responsible."

### Routes — internal only `[Brief]`

```
Goal → Trigger → Retrieve brand + performance context
→ Select specialist agent/skill → Select best model/tool
→ Generate/act → Evaluate
→ Pass: ship / approval
→ Fail: retry / alternate route / escalate
```

> "Routes matter enormously to engineering and advanced operators. They should almost never be a first-run product concept."

---

## 4. Onboarding — the 9-screen spec

`[Brief]` gives exact copy for nine screens. `[Aligned]` decisions from the meetings are marked inline. Target: **URL → running brand in ~90 seconds.**

### The six rules of the first run `[Brief]`

1. **One obvious action.** First screen = one input, one primary button.
2. **Do work before asking questions.** Infer catalog, voice, visual system, channels before presenting a form.
3. **Ask for confirmation, not composition.** *"Is this right?"* is cheaper than *"Describe your brand."*
4. **Show the work.** Loading is a live receipt of products found, patterns learned, Loops prepared.
5. **Ask for access at the moment of value.** *"Connect Meta to watch these 42 ads"* beats a connector checklist.
6. **Land on proof.** The first home screen has work in progress, a result, and a small decision. Never empty.

> "ChatGPT starts with a question. ShopOS starts with a brand."

---

### Screen 0 · Start with the brand

**Purpose:** earn the first action without teaching the product.

**Layout:** ShopOS mark top-left · one centered question · one composer · three low-friction alternatives beneath · **no sidebar, agent roster, pricing comparison or product tour.**

**Copy `[Brief]`:**
> **What should ShopOS keep running?**
>
> Give us your store. We'll learn the brand, find the work worth automating, and start the first Loop.
>
> `[ wildoak.in                                      ↑ ]`
>
> `I have a Shopify store` · `I'm starting a new brand` · `Upload a brand guide`
>
> No setup checklist. You can correct anything we learn.

**Prototype variant `[Source 4]`:** heading *"What should ShopOS run for you?"*; buttons `Connect Shopify` · `Start without a store` · `Upload a brand guide`.

The field accepts a URL, Shopify store, Instagram handle, marketplace page, **or a plain-language description.**

**Do not ask yet:** name, role, team size, category, goals, connectors, brand voice, plan, credit card.

`[Aligned]` — both meetings confirm onboarding **starts with the URL, not with intent.** The URL determines category and ICP.

---

### Screen 1 · ShopOS learns the brand in public

**Purpose:** turn waiting into the first demonstration. Not *"Setting up your workspace"* — reveal real facts as found.

**Copy `[Brief]`:**
> **Learning Wild Oak**
>
> We're turning your store into a working brand memory.
>
> ✓ Store found — wildoak.in
> ✓ Catalog read — 246 products
> ✓ 18 products drive most of the catalog attention
> ✓ Visual system learned — 3 repeatable patterns
> ✓ Voice inferred — plain, warm, ingredient-first
> ✓ Meta account detected
> ◉ Preparing the first work…
>
> This usually takes under a minute. Your first work is already being prepared.

**Rules for the wait `[Brief]`:**
- **Use real counts. Never decorative fake progress.**
- Reveal the first product image as soon as found.
- Show one sharp observation: *"Most product images use pale stone backgrounds."*
- If the scan exceeds **12 seconds**, reveal an editable Brand Card while the rest continues.
- Let the user leave the tab; notify when ready.
- Progress claims must be **auditable** — if it says "246 products understood," Brand Memory must contain 246 products.

**Failure state `[Brief]`:**
> **We could not read this store.**
>
> It may be private or blocking automated access. Connect Shopify or upload a product export instead.
>
> `[ Connect Shopify ]` `[ Upload CSV ]`

`[Aligned]` — Meeting A independently specified ~30s learning with behind-the-scenes memory building.

---

### Screen 2 · The recognition moment

**Purpose:** create "it gets us" **before** asking for a goal.

Compressed Brand Card: store identity · catalog size & categories · visual palette · voice · bestsellers · channels found · **two things it's confident about** · **one thing it wants corrected.**

**Copy `[Brief]`:**
> **Does this feel like Wild Oak?**
>
> Botanical skincare for modern routines. Warm, plain-spoken and ingredient-first. Clean product frames, muted earth tones and proof before claims.
>
> `246 products` · `Shopify` · `Skincare`
>
> **One thing we are unsure about:** should the brand feel more clinical or more botanical?
>
> `[ More clinical ]` `[ More botanical ]` `[ Tell ShopOS ]`

**Not a Brand Memory form.** The user edits any statement in natural language. Every correction shows a **persistence receipt**:
> Got it. Every Loop will use "more botanical" from now on.

`[Aligned]` — Meeting B specified the same beat: *"Does this feel like Wild Oak?"* → confirm / go back / try a different URL.

---

### Screen 3 · ShopOS proposes the Goal ⚠️ `[Conflict — §17.2]`

**Purpose:** replace a blank *"What do you want to achieve?"* with informed choices.

**Copy `[Brief]`:**
> **What should get better first?**
>
> Based on your store, we would begin with:
>
> ○ Keep the brand fresh every week
> ○ Catch store problems before customers do
> ○ Replace tired ads earlier
> ○ Make Wild Oak visible in AI search
>
> `[ Something else… ]`

One Goal **selected by default.** The user can change it but never starts from an empty text area.

**Every proposed Goal needs evidence:**
> "34 products have not changed in 180 days, so Store Health is a strong first Loop."

**The meetings collapsed this screen into Screen 4.** Meeting B: *"I don't see the difference between these two"* → intent and loop selection merged into one step, where selecting an intent auto-populates loops. Meeting A's version: four default cards + a centered free-form *"I'm thinking about something else."*

---

### Screen 4 · The first Loop pack

**Purpose:** make the product legible as **four jobs**, not a catalogue of capabilities.

**Copy `[Brief]`:**
> **Four Loops can start today.**
>
> They begin in Draft mode. ShopOS prepares the work; nothing ships without your approval.

Each card: job name · promise · cadence · the data it needs · first output estimate · on/off control.

**Default pack, founder-led D2C `[Brief]`:**

| Loop | Promise | Cadence |
|---|---|---|
| **Fresh Content** | prepare a weekly shortlist from the catalog and current moments | Every Monday |
| **Ad Fatigue Watch** | find tired ads and prepare replacements before ROAS drops | Always watching |
| **Store Health** | find weak PDPs, missing imagery and catalog errors | Every day |
| **AI Visibility** | track the questions the brand should appear for and close the gaps | Every Friday |

**Primary action:** `[ Start running Wild Oak ]`

**Do not expose** agent names, models, Routes, token budgets, workflow graphs.

`[Aligned]` — Meeting A: four defaults, chosen by detected category, each with a loop icon, plus a fifth centered free-form field whose custom intent becomes a loop. Meeting B: *"we should just choose default things and move ahead"* — don't over-configure here.

⚠️ Copy explicitly unsettled in Meeting B: *"I'm not sure the copy is entirely correct, but the idea I get."*

---

### Screens 3+4, merged · ✅ CORRECTED MODEL (1 Sep, round 7) — supersedes rounds 4–6 entirely

**Rounds 4–6 were solving the wrong problem.** They assumed the merged intent+loop screen was an open multi-select across as many topical intents as the loop library could support. It isn't. Lobster shared the actual Figma reference (a scrolling card list, one per row): the screen has **four fixed, agent-anchored intents — one per core ShopOS agent — plus one global "do all of it" card.** The intents predate the Loop concept; the task now is to attach Loop copy to an already-decided structure, not invent the structure.

**The five cards, as given, mapped to loops (electronics vertical):**

| Card | Agent | Subtitle (as given in Figma) | Loops it sets up |
|---|---|---|---|
| **Create visuals that sell** | Monica (creative) | "Product shots, ads, and video from your catalog." | Fresh Content · Winning Pattern Remix |
| **Get cited by AI search** | Big Head (visibility) | "Be the answer when shoppers ask AI what to buy." | AI Visibility · Search Opportunity |
| **Get more from ad spend** | Gavin (growth) | "Find winning angles and route budget to them." | Ad Fatigue Watch · Weekly Performance Brief |
| **Clone a store in minutes** | Richard (store) | "Paste any store URL and get an editable Shopify build." | Spec Integrity · Comparison Builder · Compatibility Watch · Price & Availability |
| **Set up everything** | all four | "Creative, AI search, ads, and your store together." | all 10 loops above |

**Why this resolves what rounds 4–6 kept struggling with:** Spec Integrity, Comparison Builder, Compatibility Watch and Price & Availability were never their own intents — they're all Richard's job, and belong under one card. That's exactly the brief's electronics default pack (§8.1.4), landing whole under a single agent instead of getting scattered across several invented intents. The earlier rounds' churn (padding one intent, then over-fragmenting into 8, then merging by theme) was symptomatic of not knowing the real anchor was "agent," not "topic."

**Two things flagged, not silently resolved:**
- **"Clone a store in minutes" reads as a one-time action, not a Loop.** A Loop is "a persistent job ShopOS keeps doing until the goal changes" (§3); cloning a store doesn't obviously fit that. The four loops underneath it *are* recurring. Working theory: cloning is a one-time build act, and the four loops are what starts running afterward to keep that store honest — but this is the only card where the title and its loops are doing different kinds of work, and it should be confirmed rather than assumed.
- **"Set up everything" is the same mechanic already ruled aligned** in §18/Meeting B — "one button configures all loops and connectors." Good convergence: this card is the UI surface for a decision already made, not a new concept.

**Open, not yet answered:** does "Set up everything" literally start all 10 loops, or one headline loop per agent (4 total)? Ten Loops all going to Draft-mode-and-awaiting-approval at once may overwhelm the first Home screen (§5's "3 decisions, about 2 minutes" framing assumes a small inbox). Worth deciding before this ships.

**Not covered by any of the five cards:** Creator Match (influencer) and Monday Brand Brief (cross-agent summary) — neither maps to one of the four named agents shown here, consistent with the earlier decision (round 6) to leave both for the post-onboarding Loop directory rather than force them into this screen.

**Still a worked example for one vertical.** The five-card *structure* (4 agents + 1 global) is fixed and vertical-agnostic — it shouldn't change per vertical. What changes per vertical is only the loop list under "Clone a store in minutes" (Richard) and, to a lesser extent, under the other three, since §8.1's other 8 verticals have different Store/Content/Growth/Visibility loop packs than electronics does.

---

### Screen 5 · Trust before autonomy ⚠️ `[Conflict — §17.3]`

**Purpose:** let the customer understand the blast radius in one glance.

**One control:**
```
Watch      Draft      Approve      Autopilot
              ●
```

**Default: Draft.**

**Exact reassurance `[Brief]`:**
> ShopOS can inspect your connected data and prepare work. Nothing changes in your store or ad account until you approve it.

Applies to the starter pack for speed; **every Loop gets its own policy after onboarding.**

**Explain autonomy with examples `[Brief]`:**
- **Watch** — "Tell me when an ad is tiring."
- **Draft** — "Prepare replacements."
- **Approve** — "Prepare the action and ask once."
- **Autopilot** — "Act inside the rule and report after."

**The meetings had a different, weaker model** (3 options, deferred to a ChatGPT-generated permission set) and did not know this spec existed. See §6.

---

### Screen 6 · Connectors appear inside the Loop

**Purpose:** make every permission request feel earned.

**Copy `[Brief]`:**
> **42 active ads found**
>
> To watch performance and prepare replacements, connect Meta Ads.
>
> `[ Connect Meta ]` · takes about 20 seconds
> Read-only until you change the Loop policy.

**Rules `[Brief]`:**
- Ask only for the **narrowest useful permission.**
- Explain read/write access **beside the button.**
- Return the user to **the same card** after OAuth.
- Show what became possible **immediately** after connection.
- Allow **"Do this later."** A blocked Loop must not block the whole product.

> "The Loop creates demand for the connector. The connector should not create demand for itself."

`[Aligned]` — both meetings agree strongly. Meeting B: connectors are a **dedicated step, not a modal**, and the skip option is mandatory: *"they are a bit hesitant to give their Meta ads accounts up front."* Meeting A: request access only when a loop needs it, and explain the job it unlocks.

---

### Screen 7 · The start moment

**Purpose:** activation should feel like turning on a system. **Avoid confetti — use state change.**

**Copy `[Brief]`:**
> **Wild Oak is running.**
>
> 4 Loops started in Draft mode.
>
> Fresh Content is preparing Monday's shortlist.
> Store Health is checking 246 product pages.
> AI Visibility is researching five strategic questions.
> Ad Fatigue Watch will begin after Meta is connected.
>
> `[ See what is happening ]`

Use present-tense, verifiable system states: *preparing, checking, researching.*

---

### Screen 8 · Land on a populated Today screen

**Purpose:** close onboarding with **proof, not orientation.**

**First-run state `[Brief]`:**
> **Your brand is running.**
>
> **Needs you — 3 decisions, about 2 minutes**
> - Review six replacement ad concepts.
> - Review one PDP rewrite.
> - Confirm five AI-search questions.
>
> **First run**
> - 246 products checked.
> - 12 content directions prepared.
> - Five visibility gaps found.
>
> **Your Loops**
> - Fresh Content · Running · 12 drafts.
> - Ad Fatigue Watch · Waiting for Meta.
> - Store Health · Running · 246 PDPs.
> - AI Visibility · Running · five questions.

Composer pinned at the bottom: *"Ask ShopOS, or change how your brand runs…"*

> "Chat is the command layer. Today is the proof layer."

`[Aligned]` — Meeting A independently landed on the same three blocks and the same *"push the prompt box down to the bottom"* move.

---

### Flow B · Pre-launch brand, no URL `[Brief]`

Don't punish a founder for not having a store.

```
┌──────────────────────────────────────────┐
│ What are you building?                   │
│ [ I have a brand ]  [ Starting a brand ] │
└───────────────────┬──────────────────────┘
                    ▼
┌──────────────────────────────────────────┐
│ Tell us only enough to begin             │
│ Category      [ skincare_______ ]        │
│ Customer      [ women 25–40____ ]        │
│ Price range   [ premium________ ]        │
│ Launch target [ Oct 15_________ ]        │
│ Inspiration   [ links / upload ]         │
│        [ Build my launch system ]        │
└───────────────────┬──────────────────────┘
                    ▼
  Temporary Brand Memory + launch Goals + pre-launch Loops
  ✓ Brand foundations  ✓ Launch content system
  ✓ Store build checklist  ✓ Creator discovery  ✓ Launch calendar
```

> "The same product works before and after launch; the Loops simply evolve as the brand gains real data."

---

### 4.X Flow as capture/display clusters — screen-quantity agnostic (round 8, 1 Sep)

> **"The number of screens are irrelevant. What matters is what are the different elements we are receiving from the users... and all the things that we display to the users... and basically cluster them into individual topics, which is what these categories are, which is what each screen is."**

This reframes §4 rather than replacing it. **Screen count and screen order stay explicitly unresolved (§17.2, §17.6) — that's fine, because they were never the load-bearing decision.** The load-bearing decision is: what does the flow need to *capture from* the user, and what does it need to *display to* the user, clustered into topics. A "screen" is just whatever grouping of these clusters the eventual Figma settles on; this section is meant to survive regardless of how Claude Design chooses to chunk it.

Each cluster below pulls together everything already established elsewhere in this doc for that topic — brief spec, meeting mechanics, and Lobster's rulings — so this section is comprehensive, not a new abbreviated pass. Where something is still open, it's flagged, not silently resolved.

**Cluster: Store / brand identity**
- *Captured from user:* store URL (brief's minimum-input principle, §18 "Onboarding" Q1); for the no-URL path, category, target customer, price range, launch target, inspiration links/uploads (Flow B above, `[Brief]`).
- *Displayed to user:* confirmed brand name, logo, and category once inferred; for Flow B, the "temporary Brand Memory + launch Goals + pre-launch Loops" summary shown after the founder's inputs.
- *Open:* exactly which fields are auto-inferred vs. require typed confirmation is not enumerated anywhere in the sources — `[Guessing]` this is itself one of the still-open Primitive/Onboarding questions (§18: "what is the minimum input from which we can create a credible Brand Memory?").

**Cluster: Brand Memory build**
- *Captured from user:* nothing new — this cluster runs on what Store/brand identity already captured, plus whatever the crawl pulls from the URL itself (catalog, imagery, existing copy).
- *Displayed to user:* the system's read-back of what it found — brand facts, product categories, tone signals — framed so the user can correct rather than re-enter (brief's general principle of not asking for what can be inferred).
- *Captured from user (correction pass):* edits/overrides to any of the above.
- *Open:* whether this is its own topic/screen or folds into Store/brand identity is exactly the kind of boundary this reframe says not to worry about yet.

**Cluster: Intent (Loop-aware, fixed structure)**
- *Displayed to user:* the five fixed cards — four agent-anchored (Monica/creative, Big Head/visibility, Gavin/growth, Richard/store) plus one global "set up everything" — each with its subtitle and its mapped Loop names (round 7, §4 "Screens 3+4, merged"). **This structure is given, not designed** — see round 7's correction.
- *Captured from user:* one or more card selections (multi-select confirmed possible — nothing in the source rules out selecting more than one agent card alongside or instead of the global card).
- *Open:* whether "Set up everything" is its own exclusive choice or stacks with individual agent cards; whether "Clone a store in minutes" (Richard's card) is a one-time action or a Loop like the others (both flagged in round 7, unresolved); whether Creator Match and Monday Brand Brief belong somewhere in this cluster or stay Loop-directory-only (round 7).

**Cluster: Loop detail (within the Intent cluster, not separate)**
- *Displayed to user:* Loop names (2–4 words each, per Lobster's copy constraint), short descriptions, and which agent/intent each rolls up under.
- *Captured from user:* nothing beyond the card selection above, unless a future ruling adds per-Loop opt-out/opt-in *within* a selected card — not currently specified either way.

**Cluster: Autonomy**
- *Captured from user:* one dropdown value per Loop — Approve / Deny / Archive (§17.3, ruled).
- *Displayed to user:* the three options, and whatever default is preselected (no default has been specified in any source — flag as open).
- *Open:* §17.3's standing question — this dropdown reads as a per-output disposition, not a standing trust policy, so there's no established home for an Autopilot/unattended-publish mode in this cluster. Also open: does this cluster run during onboarding at all, or only after (§17.6, explicitly parked, not a hint disguised as a ruling).

**Cluster: Connectors**
- *Captured from user:* auth/connection to whichever platforms and ad accounts are relevant to the Loops just selected (brief's "contextual connector requests" principle, §18 Onboarding Q4 — "can connector requests be entirely contextual?" — still literally an open question, not yet ruled).
- *Displayed to user:* only the connectors relevant to what was selected, not the full connector catalog (§7); a skip/defer option, per the general minimize-friction direction from round 3.
- *Open:* sequencing relative to Autonomy and relative to Intent — not specified.

**Cluster: Activation / setup**
- *Captured from user:* nothing — this is a system-state cluster, not a data-collection one.
- *Displayed to user:* visible progress; per the brief, ideally real work already underway during this wait rather than a dead spinner (§18 Onboarding Q5: "what real useful work can begin during the one-minute setup animation?" — still open).

**Cluster: Landing / Home**
- *Displayed to user:* first Loop outputs already in the Inbox/action-item feed (§5); agents present but not the lead surface (§17.5); chat/orchestrator entry point.
- *Captured from user:* the user's first Approve/Deny/Archive action on a real output — this is where the Autonomy dropdown's values get their first real use, not necessarily during onboarding itself.
- *Explicitly does not capture or display here:* human-deployment-team request, any pricing-plan explanation (§11, §17.9, ruled — surfaces later, only once value is shown), a Departments nav layer (§18 item 6, settled as packaging-only), or fixed sidebar detail (§17.5, deferred to Figma).

**What this reframe does not change:** every ruling and open question already logged in §17/§18 stands as written. This section is a different cut through the same material — organized by what's captured vs. displayed, independent of screen boundaries — not a new set of decisions.

---

### 4.Y Minimum viable onboarding input — what a loop actually needs (round 9, 3 Sep) ✅ RULED

> **"This can be the minimum viable onboarding input... For brands who are not existing yet, you need category and audience."**

The four things onboarding could capture — brand, intent, connectors, permissions — are **not equally necessary.** Only two are load-bearing for an agent to build a loop that produces a real first output; the other two are deferrable.

**The floor is two inputs:**

1. **Intent** — required. It's the trigger that selects *which* loops to build (the fixed agent cards, §4 round 7). The only default is the global "Set up everything" card.
2. **Brand substance** — required, but the *form it takes depends on whether the brand exists.* This is the key correction: **do not model "brand identity" and "brand seed" as two separate inputs.** They are the same input captured two ways —
   - **Established brand → start with the URL.** They already have one; ShopOS extracts everything (catalog, copy, imagery, voice) from it. No manual seed. This is the fast path and the default.
   - **Pre-launch / no store yet → capture category + audience** (roughly two sentences of what you're building and who it's for). This is the manual seed, and it's the *irreducible minimum* — a loop cannot generate for a subject that doesn't exist. This is the doc's existing Flow B (§4).

   One input ("tell ShopOS about the brand"), two entry paths — never two questions for the same user.

**The two deferrable inputs:**

3. **Connectors** — not needed to *create* a loop; needed for *some* loops to *run*. They gate which loops can produce output, not whether loops exist. Contextual and per-loop, requested only when a selected loop needs one. See connector-gated loop states below.
4. **Permissions** — never gate onboarding. Default to the safe middle (comes back to the user for anything that acts externally), which is exactly the ruled Approve/Deny/Archive control (§17.3). Surfaced, adjustable, never required up front.

**Three entry states onboarding must detect and route:**

| State | Brand input | Loops available at first output |
|---|---|---|
| **Live store** | URL → auto-extract catalog + brand | All loop types (generative + data-dependent, once connectors added) |
| **Brand, no store yet** | Skip URL; the URL field is empty, capture nothing manual unless they have neither | Generative loops now; data loops wait on connectors |
| **No brand, exploring** | Category + audience (two sentences) — the seed *is* the onboarding | Generative-from-seed loops only, framed as "here's what ShopOS would do for a brand like this" |

**Connector-gated loop states — the design consequence.** Loops split into two halves (mirrors the report's auto-done vs. needs-approval, §4-report): the **analyse/create** half and the **act** half. The create half runs on brand substance alone; the act half needs connectors and/or permission. So:
- **Generative-from-substance loops** (Fresh Content, draft PDPs, launch calendar, Comparison Builder) produce a first draft with **zero connectors, zero real permissions** — this is the trial user's first "aha," and it must work before any paywall (§18 Onboarding Q2).
- **Data-dependent loops** (Ad Fatigue Watch, Weekly Performance Brief, Store Health) are **inert without their connector.** They stay *selectable* but sit in a first-class **"connect to activate"** state — already modelled in the report artifact (*"Ad Fatigue Watch will begin after Meta is connected"*).

**Can a brand create a loop with no brand info at all?** Mechanically yes (intent instantiates a shell); meaningfully no — a loop with no subject has nothing to act on and produces nothing, which kills the pre-paywall value moment. The absolute floor is therefore **intent + the two-sentence seed** (or a URL that supplies it). True-zero-input is a demo, not a product. `[Ruled]` force the minimal seed rather than allow zero.

---

## 5. Home / Today

### Four questions in five seconds `[Brief]`

1. Is my brand running?
2. What happened while I was away?
3. What needs me?
4. Is anything getting better?

```
┌───────────────────────────────────────────────────────┐
│ WILD OAK                                      ● LIVE  │
│ Your brand has been running for 18 days.              │
│                                                       │
│   6 LOOPS RUNNING          2 NEED YOUR APPROVAL       │
│                                                       │
│ ┌─────────────────────┐   ┌────────────────────────┐  │
│ │ NEEDS YOU           │   │ SINCE YESTERDAY        │  │
│ │ 2 new ad concepts   │   │ 14 assets created      │  │
│ │ 1 PDP change        │   │ 3 PDPs improved        │  │
│ │ [ Review 3 ]        │   │ 1 visibility gap fixed │  │
│ └─────────────────────┘   └────────────────────────┘  │
│                                                       │
│ YOUR LOOPS                                            │
│ ● Fresh Content       shipped 8       next Mon        │
│ ● Ad Fatigue          watching        always          │
│ ● Store Health        fixed 3         next in 4h      │
│ ● Visibility          +2 mentions     next Fri        │
│                                                       │
│ [ Ask ShopOS anything...                         ↑ ]  │
└───────────────────────────────────────────────────────┘
```

### The empty state should almost disappear `[Brief]`

After onboarding, ShopOS already contains: a Brand · proposed Goals · 3–5 Loops · a first run in progress · a concrete time when value arrives.

> "The product starts populated because ShopOS did the setup."

An empty prompt box is **exactly the wrong state** for this product.

### The Inbox / attention queue `[Brief]`

The daily surface is not a dashboard full of chores — it's an attention queue:
- 3 things need your approval
- 1 strategic question needs your call
- 2 unusual events need attention
- **Everything else is running**

> "ShopOS works; you decide when judgment matters."

### Loop outputs are action items `[Aligned — Meeting B]`

Every output any loop produces is an action item: *do this* or *review this*. Review is itself an action item.

Per-item actions: **Approve** · **Dismiss** · **"Describe your preference"** (free-form, retrains the loop) · **overflow menu (chevron)** for unpredictable actions · **"Remind me later"** and frequency control (*"show me item three weekly, not daily"*). Items with multiple options route into chat, which suggests next steps: *"We found your creative not working — let's create more creatives with Monica."*

`[Inferred]` This is the meetings' version of the brief's Inbox. They should be unified — see §17.4.

### Chat as universal command layer `[Brief]`

Chat stays important because language is the easiest way to mutate a system:
- "Make the content loop less premium and more playful."
- "Pause influencer matching until October."
- "Why did you replace this ad?"
- "Set up a loop that checks our top 20 PDPs every Friday."

> "The response should change real product objects, not merely produce text."

### Refer back to the original Goal `[Brief]`

A week later the Monday Brief closes the promise made on screen 0:
> "Last Monday you asked us to keep Wild Oak fresh. Since then, four Loops produced 31 outputs, and you changed only three."

---

## 6. Autonomy and permissions

### The four levels `[Brief]` — use this

| Mode | What ShopOS does | Best for |
|---|---|---|
| 👀 **Watch** | Observe and report. No creation or changes. | Enterprise / new connection |
| ✍️ **Draft** | Create recommendations / assets, never publish. | **Default first week** |
| ✅ **Approve** | Prepare complete actions, ask for one-click approval. | Default mature loop |
| ⚡ **Autopilot** | Act within defined policy; report after. | Trusted, reversible workflows |

**Trust graduates per Loop, not per account.** *"Store Health can reach Autopilot while Ad Launch stays in Approve forever. One global 'AI autonomy' setting is too blunt."*

The product can actively suggest progression:
> "You've approved the last 12 catalog fixes without edits. Want Store Health to publish automatically?"

### What the meetings had `[Aligned but weaker]`

One dropdown per loop, gated at *"before any action that publishes outside ShopOS"* → **Approve each time / Autopilot / Skip.** Meeting B flagged the unresolved tension: a real loop (generate 5 prompts → write blog → publish) has two or three natural gates, but they wanted one control. **Action item created: feed Sai's loop list into ChatGPT to generate a logical permission set.**

**As of 31 Aug, Lobster has ruled directly on this — see §17.3. The dropdown values are Approve / Deny / Archive, not either model described above.** This section (the brief's four-level graduation model) is retained as background for the Autopilot gap flagged in §17.3, not as the build spec.

---

## 7. Connectors

- Requested **only when a Loop needs them**, with the job they unlock explained. `[Brief]` `[Aligned]`
- A **dedicated step**, not a modal. `[Aligned — Meeting B]`
- **"Do this later" / Skip is mandatory.** A blocked Loop must not block the product. `[Brief]` `[Aligned]`
- Narrowest useful permission; read/write explained beside the button; return to the same card after OAuth; show what became possible immediately. `[Brief]`
- Named connectors: **Shopify · Meta · Klaviyo · CMS.**
- Not every loop needs a connector. `[Aligned]`
- **Anti-pattern:** a connector-settings wall. `[Brief]`

---

## 8. The Loop library

### The first 10 Loops worth prototyping `[Brief]`

| Department | Loop | What it does |
|---|---|---|
| 🎨 **Content** | **Fresh Content** | weekly shortlist from catalog + recent events + performance |
| | **Winning Pattern Remix** | detect high-performing concepts, generate genuinely new variations |
| 📈 **Paid Growth** | **Ad Fatigue Watch** | identify declining creatives, prepare replacements |
| | **Weekly Performance Brief** | synthesize what moved, why, what to change next |
| 🛍 **Store** | **Store Health** | catch broken/weak PDPs, imagery, copy, merchandising issues |
| | **Catalog Freshness** | detect new/stale products, keep product content current |
| 🔎 **Visibility** | **AI Visibility** | track strategic questions/citations, close content/authority gaps |
| | **Search Opportunity** | detect new questions/themes the brand should own |
| 🤝 **Influencer** | **Creator Match** | continuously find, rank, shortlist creators against campaign needs |
| 💌 **Company-wide** | **Monday Brand Brief** | single weekly executive view across content, ads, store, visibility, actions |

**Worked examples `[Brief]`:**
- **Fresh Creative Loop** — every Monday, inspect top products + recent ad performance → propose/produce new variants → send only the final shortlist for approval.
- **Ad Fatigue Loop** — daily, detect fatigue → generate replacement concepts → launch after approval.
- **Store Health Loop** — daily, identify broken/weak PDPs → fix drafts → publish under policy.
- **Visibility Loop** — weekly, inspect AI-search presence → find gaps → create/update content → report movement.
- **Influencer Match Loop** — continuously score new creators against campaign/audience/brand fit → shortlist when confidence crosses threshold.

### Departments `[Brief]`

Useful **bundles of Loops** — brands understand departments intuitively: 🎨 Content · 📈 Paid Growth · 🛍 Store · 🔎 Visibility · 🤝 Influencers · 💌 Retention.

> "Do **not** make Departments another mandatory layer of navigation. They are a way to package / sell / summarize groups of Loops."

Example: Paid Growth = Creative Fatigue + Budget Watch + Weekly Performance Brief + Winning-Pattern Replication.

---

### 8.1 Per-vertical loop packs `[Brief]`

**The comparison frame, applied to every store:** what ShopOS notices → the four Loops it recommends → the first proof on Today → the permission boundary. *"The shell does not change. Only the brand observation, Loop pack and evidence change."*

---

**1 · Fashion / apparel** — 900-SKU D2C label

> **Recognition:** "Your catalog moves in drops, but 312 products have not received new creative in 90 days." 900 products. 14 collections. Strong studio photography. Demand sits in dresses, co-ords, occasionwear.

**Loops:** New Drop Launch (on Shopify collection appearing → PDP copy, launch assets, channel checklist) · Creative Fatigue Watch · Merchandising Watch (high-traffic/low-conversion, missing sizes, poor image order) · Catalog Freshness (stale PDPs, missing fabric details, inconsistent sizing, old collection tags)

> **First Today:** "23 PDPs are missing fabric or fit details. Seven active ads reuse the same opening frame. The newest collection has 18 products but only four campaign assets."

**Boundary:** may draft content and reorder a preview collection. Publishing, price changes and inventory rules always require approval.

---

**2 · Beauty / skincare** — Wild Oak *(the canonical example throughout)*

> **Recognition:** "This feels botanical, not clinical." 246 products. Warm product photography. Plain, ingredient-first copy. Proof matters more than claims.

**Loops:** Fresh Content · Claims Check (unsupported/inconsistent/risky claims) · Routine Builder (products to sell together by skin concern and regimen step) · Repeat Purchase Watch (replenishment window → retention messages)

> **First Today:** "11 PDPs use claims not supported elsewhere on the site. Three bestselling serums have no routine pairing. A 30-day replenishment segment is ready for review."

**Boundary:** ingredient and compliance rules are locked. Cannot invent efficacy claims or publish medical language.

---

**3 · Food & beverage** — premium coffee or snacks

> **Recognition:** "Customers buy the product once. The store does little to bring them back when the pack runs out." 62 products. Strong origin stories. Weak replenishment and bundle logic.

**Loops:** Replenishment Watch · Bundle Builder · Seasonal Menu (festivals, weather shifts, gifting windows) · Review Mining (review language → PDP proof, FAQs, creative angles)

> **First Today:** "41% of repeat orders arrive between days 24 and 31. No message runs during that window. Two bundles could be created from existing inventory."

**Boundary:** may draft bundles and messages. Discounts, subscription changes, allergens and nutrition copy require approval.

---

**4 · Consumer electronics** — headphones, wearables, appliances

> **Recognition:** "The products are strong. The buying decision is buried in specifications." 184 products. Dense technical PDPs. Inconsistent comparison data. High support volume around compatibility.

**Loops:** Spec Integrity (attributes across Shopify, feeds, marketplaces) · Comparison Builder (plain-English tables across adjacent models) · Compatibility Watch · Price & Availability Watch

> **First Today:** "Eight buying blockers found. Six products disagree on battery life across channels. Four compatibility questions cause 31% of pre-sale tickets. A comparison between the three top models is ready."

**Boundary:** never changes technical specifications from inference. Every spec change needs a source and approval.

---

**5 · Home & furniture**

> **Recognition:** "Customers can see the product. They cannot yet picture it in their room." 420 products. Good cutouts. Few room scenes. Dimensions and delivery promises vary.

**Loops:** Room Scene Builder · Dimension Check · Complete the Room (complementary pieces by room, scale, palette, availability) · Lead-Time Watch

> **First Today:** "Twenty-seven PDPs need context. Nine bestsellers have no room image. Five dining tables omit seating capacity. Two sofas show different lead times on collection and product pages."

**Boundary:** generated scenes must preserve product geometry, proportions, finish and color. **Any visual that changes the physical product fails automatically.**

---

**6 · Jewelry / luxury**

> **Recognition:** "The store sells trust before it sells the object." 138 products. High-consideration. Strong photography. Certification, material and occasion context decide conversion.

**Loops:** Trust Detail Check (material, certification, warranty, care, authenticity) · Occasion Content · Visual Consistency (crop, metal tone, scale, background rules) · High-Intent Follow-up (wishlists, repeat visits, abandoned high-value carts)

> **First Today:** "Five trust gaps need attention. Three products omit certification details. Six gold pieces shift color across their image sets. Two high-value carts returned twice this week."

**Boundary:** cannot invent material purity, provenance, certification or availability. High-value outreach stays in approval mode.

---

**7 · Single-product store**

> **Recognition:** "One product carries the business. The opportunity is not more catalog. It is more reasons to believe." One hero SKU. Four variants. Most creative repeats the same three claims.

**Loops:** Angle Test (reviews, objections, use cases → creative hypotheses) · Landing Page Watch (where ad promise and page evidence stop matching) · Objection Mining · Winner Expansion

> **First Today:** "The same claim appears in 78% of active ads. Customers mention portability twice as often as the current headline. Three new angle briefs are ready for review."

**Boundary:** every new claim needs support from product data, approved research or customer evidence.

---

**8 · Multi-brand marketplace** — 20,000+ SKUs

> **Recognition:** "The problem is not content generation. It is keeping thousands of product records trustworthy." 24,800 products. 186 brands. Large attribute gaps. Sellers describe the same category differently.

**Loops:** Catalog Integrity (duplicate, incomplete, contradictory records) · Attribute Normalization · Listing Quality Watch (rank weak listings by traffic, margin, error severity) · Brand Compliance

> **First Today:** "1,842 listings need work. 317 are missing category-critical attributes. 84 probable duplicates were found. The first 50 high-traffic fixes are ready."

**Boundary:** **begin in Watch mode.** Bulk changes require sampled review, rollback support and a complete audit trail.

---

**9 · Pre-launch brand, no store**

> **First screen:** "What are you building?" → *"A premium running apparel brand for hot-weather cities. Launching with 12 products in October."*

**Loops:** Brand Foundations · Launch Calendar · Store Readiness · Launch Creative

> **First Today:** "Launch is 51 days away. Four products still need final photography. Returns policy copy is missing. The first two launch concepts are ready for review."

**Boundary:** labels assumptions clearly. **Declared intent is never presented as real performance data.**

---

### What stays fixed across every store `[Brief]`

- The first action is still one URL or one sentence.
- The recognition screen makes **one specific observation.**
- ShopOS proposes **four** Loops — the user does not browse an automation marketplace.
- **Draft mode is the default.**
- The Today screen opens with completed work or a real finding.
- Connectors appear only when a Loop can explain why it needs them.
- Agents, models, Skills, Routes and credits remain hidden.

---

## 9. Segment variants

The primitive never changes. Only recommended Loops and governance change.

| Segment | Promise | Default setup |
|---|---|---|
| **Pre-launch** | — | Mode: **Build**. Brand Foundations, Launch Calendar, Product Content Builder, Store Readiness, Creator Discovery, Launch Creative. Operates from declared goals + inspiration until commerce data appears. Today shows work toward launch, not performance. |
| **Founder-led SMB** | *"Your marketing department, already running."* | **Brutally small:** Fresh Content, Ad Watch, Store Health, Weekly Business Brief. Draft mode. One weekly brief. One person approves everything. Connector setup optional until a Loop asks. **The founder should get value without learning a single agent name.** |
| **Mid-market** | *"Add AI departments without adding management overhead."* | More Loops, real connectors, role-based approvals, shared Inbox, measurable Goals. Departments become useful grouping. **After the starter Loop runs**, ask who owns Content / Growth / Store / Visibility. Role setup is **not** part of the first 90 seconds. |
| **Enterprise** | *"Autonomous execution inside your rules."* | Begin in **Watch** mode. Policy & permissions, approval chains, audit history, sandbox/preview, data-source controls, reversible actions, brand/legal checks, department-level autonomy. Governance expands; visible product stays Brand → Goal → Loop → Inbox → Result. |

`[Aligned]` — Meeting A: the URL determines ICP (new / small / medium / large) and vertical, which determines the defaults shown.

---

## 10. Agents and information architecture ⚠️ `[Conflict — §17.5, the biggest one]`

### What the brief says `[Brief]`

Agents are **workers inside Loops**, not a product root. From the surface-migration table:

| Current concept | New role |
|---|---|
| **Agents** | Workers assigned inside Loops; **optional Team page** |
| **Spaces** | Advanced visual workflow / studio surface |
| **Routines** | Potentially consolidated into Loops; avoid two nouns for recurring work |
| **Skills** | Expertise invoked by Routes; advanced configuration |
| **Brand Memory** | Core substrate; visible as "What ShopOS knows about your brand" |
| **Files** | Result / reference Library |
| **Credits** | Billing / usage detail, **not primary product navigation** |
| **Chat / Cowork** | Universal command and explanation surface |

Open questions the brief poses: *"Can Agents leave the top-level navigation? Can Routines merge into Loops? Can Spaces become an advanced Studio rather than a core mental model? Can credits disappear from the main product chrome? Can the default new-tab experience be Today / Inbox rather than a blank chat?"*

Anti-pattern named explicitly: *"Do not make 'Meet your 10 agents' the core activation journey."*

### What the meetings built `[Aligned]`

A full agent-forward IA:

- **Two primary tabs: Chat and Loops.** Modeled on **Gemini Spark** (chat tab + spark tab, where spark = schedules/loops + skills + connected apps). Naming candidates for tab two: Loops / Current / Today / Daily.
- **Sidebar with a divider.** Above = primary work surfaces (Home/Chat, Loops, **Agents**). Below = meta options, persistent and unchanging (session history, Skills, Connectors, Mood board, Library, Brand Memory). Session history capped at ~5 recent or last 2 days, plus search.
- **An Agents tab** — a grid of blocks phrased as jobs, not names (*"create product visuals," "run ad campaigns"*).
- **Clicking one opens that agent's surface in a new browser tab.** No ShopOS sidebar there; return via breadcrumb (*"ShopOS × Monica"*) or a back-to-home link. Entry framing: *"You're now entering agent mode — this agent will take care of all of your ads."*
- **Rejected:** a 60/40 split view with the agent surface embedded. Gavin and Big Head hold too much data, and *"having two chat windows in one screen is super confusing."*
- **History:** all sessions live in the orchestrator, tagged by agent; the tag deep-links into that agent session. Agents keep no separate history — confirmed current behavior, judged acceptable.
- **Active-agent signal** on home, filtered to **human-initiated** work only (loops are always running, so "in progress" would otherwise mean everything).
- Named anti-pattern: **Claude Design** — *"whatever you do on design is not really surfaced [back] here."* Don't repeat that.

### Agents referenced

| Agent | Domain | Surface character |
|---|---|---|
| **Monica** | Creative | Chat + Studio + Spaces + artifacts. Light surface; its chat could be dropped. |
| **Gavin** | Performance marketing / ads | Heavily dashboard-first, very data-dense. Won't fit a split view. |
| **Big Head** | GEO / AI-search visibility | Dashboard-first. Topics + competitor brand tracking. |
| **Richard** | Shopify / website generation | Draws from **brand memory**, not mood board. No visual media surface. |

Also named: **Dinesh** (email/CRM), **Jian-Yang** (brand intelligence), **Killian** (once, transcription unclear).

**Mood board scope** `[Open]` — Monica-only or cross-agent? Unresolved. Landing point: it's optional, and don't apply mood-board context to GEO/visibility requests since those fan out to Big Head anyway. Mood boards are per-campaign and temporary (fonts, visuals, lighting, backgrounds, specific characters), not brand-level. **The brief independently says "moodboards for a visibility request" belongs in "keep out of the first flow"** — consistent.

### Design-system rules `[Brief]`

1. **Design the primitive before the component library.**
2. **Every screen gets one primary object and one primary action.** Onboarding: your Brand → set it up. Loop recommendation: a Loop → start it. Inbox: a decision → approve/edit. Result: an outcome → inspect/use. *"Avoid screens simultaneously teaching Spaces, Agents, Credits, Files and Brand Memory."*
3. **Explain state before architecture.**
4. **Setup should look like ShopOS doing work** — never a generic spinner.
5. **Advanced power is always one level deeper.** A sophisticated user can still inspect/edit instructions, prompt/skill, route, model/tool, schedule, eval policy, retries, data access, budget. *"But the presence of power cannot force every user to learn it."*
6. **Chat becomes a universal command layer.**

---

## 11. Human deployment team / "+ Expert" ⚠️ CORRECTED (31 Aug, round 3 — supersedes the round-2 ruling below)

> **"Correction — allowing access to human layer shouldn't be asked during the onboarding. There's no value yet determined and allowing user to request human layer will only warrant explaining to them about pricing plans. Better to minimise the steps in the onboarding and throw the user on the homepage and then highlight the ability to request human layer."**

**This overturns the round-2 ruling's onboarding-request mechanic (kept below, struck through in spirit, for record only).** New spec:

- **No deployment-team request during onboarding, at all.** Onboarding stays focused on getting the brand running — it does not branch into a pricing conversation. Requesting a human layer necessarily requires explaining the $999 tier, and the value case for that ask doesn't exist yet at this point in the flow — the user hasn't seen ShopOS do anything.
- **Onboarding should have fewer steps, not more** — this correction is also a general instruction to minimize the onboarding path and land the user on Home as fast as possible.
- **"Add human" / "add expert" surfaces on Home (and other post-onboarding surfaces), not in onboarding.** Once the user has seen the brand running and has some proof of value, that's when the ability to request a human layer gets highlighted.
- **Everything else from the round-2 ruling still stands** once the entry point moves to Home: gated behind $999 + an approval step; once approved, the rest of the deployment-team flow lives in chat/orchestrator; "add human" is an invite of people into the current session, not a from-scratch setup flow each time.

`[Brief]` — *"'Add an expert' / 'Set up my deployment team' is available from the session. It is an escalation and upsell, never a setup blocker."* This is now a closer match to the brief than the round-2 ruling was — the brief never placed this in onboarding either; it says "available from the session," i.e. post-landing. Meeting B: **"Add an expert as an escalation, not a blocker."** Also consistent.

**Superseded text, kept for the record:**
> ~~Request happens in onboarding — a brand can ask for a deployment team as part of the first-run flow.~~ This is no longer correct. See above.

`[Aligned — Meeting A]` supporting mechanics (still stand, now anchored to Home rather than onboarding):

- **"+ Human" / "+ Expert" button** occupies the slot where ChatGPT puts "Get desktop app" — on Home, not an onboarding screen.
- **V1 (build now):** upsell → *"Let's set up your deployment team."*
- **Once a team exists:** *"I've pinged your team, waiting for them to join"* → they join and jam in the session.
- **V2 (later):** per-session expert request — type the nature of the task → `Request an expert` → *"I'll let you know when the expert is added."*
- If accepted, *"your deployment team is being set up, we'll notify you"* → **in-progress shimmer state** on home.
- Every brand gets a dedicated **1–5 person** team. Every orchestrator session can pull them in.
- The strategic argument: *"When you make the core product way simpler, that's just an upsell to the brand that you guys can't do shit — which is actually true, because they don't like to sit in the interface."*

**Recruitment** — ~100 open roles from the 10k alumni board: creative directors, storytellers, writers, brand designers.

---

## 12. The Brand Magazine — all sources agree `[Aligned]`

- **What it is:** six skills run in sequence to produce a full report — a *"whole autopsy,"* a PDF magazine on how the brand could run better.
- **Brief:** *"show it as a heavier 'we are preparing this' deliverable after onboarding. Do not hold the first-run flow for it."*
- **Meeting A:** too heavy for onboarding. Execution takes ~24h, and the user's *interest* takes a week or two to develop. Maximum in-onboarding presence: *"We're building a full personal magazine for you — check back in some time."*
- **Action items:** collapse the two Notion cards into one; scope it as the **end-to-end project of the brand.**
- `[Open]` — exact placement still parked in Meeting A's "needs further discussion."

---

## 13. Pricing and packaging

### The brief's model `[Brief]`

Three moments — **do not place the paywall before ShopOS has shown recognition:**

1. **Free** — scan the public store, show the Brand Card
2. **Preview** — propose the Goal and the first Loop pack
3. **Paid** — start persistent Loops, connect live data, preserve learning

**Show the Brand Card before signup.** Let a visitor submit a public store URL and see a limited Brand Card before creating an account. Ask for signup only to save the scan and start Loops. **Value comes before persistence.**

**Recommended packaging language:**
> **ShopOS Running**
>
> Your brand memory, recurring Loops, connected data and approval Inbox in one system.
>
> `[ Start running my brand ]`
>
> - Four active Loops.
> - Weekly and always-on work.
> - Draft and approval modes.
> - Shopify, Meta and Klaviyo connections.
> - Work gets better from every approval.
>
> No setup fee. Cancel or pause any Loop.

> "**Do not price 'agents.'** Price the amount of recurring business work ShopOS keeps running. The unit should remain active Loops or a Department pack."

Keep the plan screen simple: one plan, one primary action, a small set of outcome cards.

### The meetings' tiers `[Aligned — Meeting A]`

| Tier | Experience |
|---|---|
| **$0 / $9** | Ultra-simple, automated, loops-only. *"To the point where I don't think they should even prompt."* |
| **$999** | Includes a dedicated 1–5 person deployment team. Complex UI acceptable here. |

The logic: complex UI is fine for the top tier because the deployment team operates it. *"Today we are mishmashing both."* Simplifying self-serve is what drives the upsell.

**Note (31 Aug, round 3):** §11's correction reinforces this — pricing/plan explanation is explicitly kept **out of onboarding**, consistent with "keep self-serve ultra simple" and with not surfacing the $999 tier until the user has landed and seen value.

`[Conflict — minor]` The brief wants credits out of the product chrome; Meeting B proposed **gamified credit unlocking** during onboarding (~500 for basics, more for connecting Meta Ads), surfaced as a toast rather than a page. Compatible if credits stay a toast and never become navigation.

### Commercial questions still open `[Brief]`

1. What is the free Loop that demonstrates the proposition fastest?
2. Should pricing be based on active Loops, departments, usage, outcomes, or compute bundles?
3. What Loop usage creates a strong PQL for managed deployment?
4. Which Loops naturally upsell to a forward-deployed human team?
5. Can the managed team configure better Loops that later graduate to self-serve?

---

## 14. Positioning

**Brief's recommended proposition:**
> ## Your brand, on autopilot.
> Drop in your store. ShopOS sets up AI Loops that keep your content, ads, storefront and visibility moving — and asks you only when a decision needs you.

**Alternates `[Brief]`:**
- *More ambitious:* **The self-driving store is here.** Connect your brand once. ShopOS builds the AI departments that keep running it.
- *More concrete:* **Stop prompting. Start running.** Your weekly content, ad monitoring, store health and AI visibility can run themselves.
- *More enterprise-safe:* **Autonomous where it should be. Human where it matters.** ShopOS runs persistent growth workflows inside your brand rules, with approvals wherever you want them.

**Meeting A's core line `[Aligned]`:**
> "If brands use AI badly, their customers hate them. If brands don't use AI, investors hate them. So the only way to go about it is that brands know what to do with AI, when to use it, how to use it well — and have a team that gets it done for them and owns the outcome. Say hello to ShopOS."

Onboarding opener framing: *"the deployment team that brands trust to get shit done."* Four use cases to rotate: **get more content · build better ads · make them visible · sort their store.**

`[Inferred]` These two positioning families are different bets — "your brand on autopilot" (product does it) vs. "a team that owns the outcome" (humans do it). Worth choosing deliberately rather than blending. **This tension is sharpened, not resolved, by §11's round-3 correction** — if the human layer is now explicitly a post-landing upsell rather than part of the pitch, "your brand, on autopilot" is the more natural onboarding-stage positioning, with "a team that owns the outcome" reserved for the moment "add human" is highlighted on Home. Still an open call, but the correction leans the answer one way.

---

## 15. Metrics

### The North Star `[Brief]`

### Time to unattended value
**How long from URL submission until ShopOS produces something useful without the user explicitly prompting for that output?**

> "That is a better measure of the new thesis than prompt count, number of Spaces opened, or generations created."

### Activation events to instrument `[Brief]`

Replace "first generation" as the sole activation event. Track:
1. URL submitted / brand scaffolded
2. First Loop proposed
3. First Loop activated
4. First automatic run completed
5. First useful result accepted
6. First approval completed
7. **Second automatic run completed without setup work**

### Prototype targets `[Brief]`

- 70% of visitors submitting a valid URL reach the Brand Card
- 50% of Brand Cards reach a confirmed Goal
- 40% of valid scans activate at least one Loop
- Median URL → first running Loop **under 90 seconds**
- Median user input before activation **under three decisions**
- At least one useful result in the first session
- ≥30% of activated brands return for the second automatic run
- <1 support question per 10 connector attempts

### Longer-term quality `[Brief]`

% new brands with ≥3 active Loops after Day 1 · weekly useful Loop runs per brand · approval-to-edit ratio · % Loops graduating Draft → Approve → Autopilot · human actions per useful outcome · Loop retention at 4/8/12 weeks · self-serve → deployed PQL conversion.

### The narration test `[Brief]`

Ask the user: *"What does ShopOS do?"* A passing answer:
> "I gave it my store. It learned the brand and started four jobs that keep running."

> "If the answer contains Agents, Spaces, Skills, models, prompts or credits, onboarding exposed the machinery too early."

---

## 16. Explicit don'ts

### Keep out of the first flow `[Brief]`
Agent-builder complexity · prompt engineering · a connector-settings wall · moodboards for a visibility request · internal implementation concepts.

**Added, 31 Aug round 3:** deployment-team / human-layer requests and any pricing-plan explanation. `[Ruled — §11]`

### Anti-patterns `[Brief]`
- Do not begin with a model picker.
- Do not make "Meet your 10 agents" the core activation journey.
- Do not ask the user to author a workflow before they have received value.
- Do not use an empty prompt box as the primary onboarding destination.
- Do not require users to understand Brand Memory setup as a technical task.
- Do not create separate nouns for Loop / Routine / Automation if they mean the same persistent job.
- Do not surface workflow graphs simply because they look agentic.
- Do not auto-publish high-risk work on Day 1 to make the product look autonomous.
- Do not redesign every existing screen before the Loop primitive is validated.

### Delight comes from evidence, not animation `[Brief]`
- The first "wow" should be a fact the team recognizes: *"18 products create most of the catalog attention."* / *"Your bestseller has three different product titles across channels."* / *"Seven ads use the same opening frame."* / *"You do not appear for four questions customers already ask."*
- Give a draft before asking a question. Every question shows ShopOS's best guess; the user confirms, corrects or skips.
- **No confetti.** A completed run, a concrete artifact and a two-minute approval queue are more convincing.

### Edge states the prototype must include `[Brief]`

| State | Behavior |
|---|---|
| Low-confidence brand read | show what's known, label uncertainty, ask one discriminating question |
| Private / headless store | offer Shopify, catalog export or brand-guide upload |
| Very large catalog | show a sample Brand Card quickly while deeper indexing continues |
| No performance data | start Content and Store Loops; keep Paid Growth in "Ready to connect" |
| Connection denied | preserve all other Loops; explain what one Loop cannot yet do |
| First run finds nothing | *"Store Health checked 246 PDPs. No issues need you."* **A clean run is still a result.** |
| Loop failure | say what failed, what ShopOS tried, whether the next run is affected |
| User leaves midway | resume at the last meaningful decision, **not at screen one** |

---

## 17. Conflicts register

The Notion brief is a design thesis. The two meetings are the team converging on execution — **without, in several places, having internalized the brief.** These were contradictions that changed the screen list. **Lobster has ruled on six of them across two rounds (31 Aug); rulings below supersede both sources.**

### 17.1 · Is "Loop" a user-facing word? ✅ RULED

> **"Keep loops user-facing for now. We'll think of a better name later on."**

Loops stay named and visible. The brief's locked vocabulary wins outright; the meeting's objection is set aside as a naming question to revisit, not an architecture question.

### 17.2 · Nine screens or four? Does the Goal screen exist? ✅ RULED (directionally)

> **"Intent & loops should be selected in 1 screen. For the user, both should be the same concepts during onboarding. So we can't exactly specify the number of steps overall, we only have an overall direction."**

The brief's Screen 3 (propose the Goal) and Screen 4 (the Loop pack) **merge into one screen** — matching the meetings, not the brief's nine-screen split. Selecting a Goal *is* selecting Loops; there is no separate "what should get better first?" step followed by a distinct "here are four Loops" step. The exact screen count elsewhere in the flow (learning, recognition, autonomy, connectors, start, home) is **not fixed** — direction only, not a locked step count. Treat §4's nine-screen breakdown as source material to compress, not a spec to build literally. **Round 3 reinforces this further: onboarding should minimize steps generally, and the deployment-team ask is removed from onboarding entirely (§11) — one more screen gone.**

### 17.3 · Autonomy: four levels or three options? ✅ RULED — values also settled

> **"Autonomy should be ultimately collapsed into 1 input field (dropdown?) for each loop."**
> **"For autonomy, only keep approve, deny or archive for now."**

One dropdown, per loop — confirms the brief's *shape* (per-Loop, not global) over the meeting's shared/global control. The **values are a third set, replacing both prior proposals**: **Approve / Deny / Archive.** This is neither the brief's Watch/Draft/Approve/Autopilot graduation model nor the meeting's Approve/Autopilot/Skip — it reads as a **per-output decision on what a loop has already produced**, not a standing autonomy policy that changes what a loop is allowed to do next time. `[Inferred]` This is closer in spirit to the meetings' "every loop output is an action item" pattern (§5) than to the brief's trust-graduation model (§6) — it's a disposition on results, not a permission tier. Practical implication: the brief's Autopilot idea (system publishes unattended once trusted) and its progression nudge ("want Store Health to publish automatically?") don't have an obvious home in Approve/Deny/Archive as stated — flag this as a gap rather than silently dropping Autopilot. Worth a follow-up: is there *no* unattended-publish mode in this version of the product, or does it exist elsewhere (e.g. a separate connector-level or loop-level toggle, not this dropdown)?

### 17.4 · Inbox vs. action-item feed

Not ruled on directly. Still stands: unify the brief's Inbox structure with the meeting's per-item controls (Approve / Dismiss / Describe-your-preference / overflow) — see §18.

### 17.5 · Do agents keep top-level navigation? ✅ RULED — sidebar itself now deprioritized pending Figma

> **"Agents stay top-level. Accessible but not the priority."**
> **"The left sidebar itself is a second priority. I'll share a Figma that reflects the set of options and in what order or categories in the sidebar. Nothing to worry about without a Figma."**

Agents keep a place in nav — the meetings' Agents tab survives conceptually — but the brief's instinct wins on emphasis: agents are not what the product leads with or teaches first. **The exact sidebar structure (what's in it, what order, what's grouped) is explicitly deferred to a Figma file Lobster will share.** Nothing in §10's sidebar spec (above-the-line/below-the-line split, session-history cap, etc.) should be treated as final — it's the meetings' draft, superseded whenever that Figma arrives. Per-agent surfaces still open in new tabs per the meetings' spec (§10) — that mechanic wasn't part of this ruling and stands.

### 17.6 · Loop setup during or after onboarding? ⚠️ STILL OPEN — flagged for iteration, not resolved

> **"The loop setup can happen later on after onboarding or during onboarding, which makes it unclear as of now. Both have their own pros and cons. This needs to be iterated."**

Explicitly parked. The PRD should present this as a branch point with both options specced, not pick one. See §18. **Directionally, round 3's "minimize onboarding steps, land on Home fast" instruction leans toward land-then-configure, but this has not been stated as a ruling on this specific question — treat it as a strong hint, not a decision.**

### 17.7 · Credits

Not ruled on. Brief wants credits out of primary navigation; meeting proposed gamified credit unlocking during onboarding as a toast. Compatible only if credits stay a toast and never become chrome.

### 17.8 · Positioning family

Not ruled on directly, but see §14 — round 3's deployment-team correction leans the answer toward "your brand, on autopilot" as the onboarding-stage line. Still needs an explicit call.

### 17.9 · Deployment-team request timing ✅ RULED, round 3 (corrects round 2)

See §11 in full. **Not requested during onboarding.** Onboarding stays minimal and does not branch into pricing. "Add human" surfaces post-landing, on Home, once there's proof of value to justify the ask.

### 17.10 · Ownership split

| | |
|---|---|
| **Brief** | Design owner: **New Hush** (Harsh Singh). Thesis addressed to Vedant + Abhinav. Review session: Sai × Vedant × Abhinav. |
| **Meeting B, 00:05:30** | **Harsh Singh** owns onboarding, loop setup, contextual connectors, enterprise differentiation. |
| **Meeting B, 01:09:32** | **Vedant** owns onboarding + loop setup + deployment/expert + orchestrator redirection + magazine. **Harsh Singh** owns enterprise vs. normal, the four agents, agent experience, enterprise dashboard, internal dashboard, portfolio. |

Two of three sources put onboarding with Harsh Singh. The 01:09:32 reading is the outlier.

### 17.11 · "Loop" → "Job"? ⚠️ STILL OPEN — terminology only, not a redefinition (1 Sep, round 8)

> **"Here's a different thought. loops = jobs"**
> **"Something I'm thinking of as a terminology, as loops is too technical for most e-commerce business owners."**
> **"Jobs or loops are what agents run. Humans only assist users to direct those agents. I'm trying to think of other terms for jobs/loops — if I find something suitable I'll inform."**

Explicitly confirmed as a **naming exercise, not a change to the primitive.** Nothing about §1–§3's definition changes: still a persistent job ShopOS keeps doing until the goal changes, still the 7 concepts (Goal, Trigger, Inputs, Route, Output, Approval policy, Learning). `[Inferred]` This does **not**, on its own, resolve the §4 "Clone a store in minutes" one-time-vs-recurring tension flagged in round 7 — that was a question about whether one-time actions belong under the same primitive as recurring ones, which is orthogonal to what the primitive is called.

Lobster is still searching for the word — "Job" is one candidate, floated for being plainer than "Loop" for non-technical e-commerce owners, but not adopted. Reasons to keep looking rather than lock "Job" in now: the doc's existing "+Human"/deployment-team language (§11) already uses hiring/staffing vocabulary ("Add human," deployment team, $999 request-and-approve) that "Job" sits close to — Lobster's own clarification (**"jobs or loops are what agents run — humans only assist users to direct those agents"**) reads as pre-empting exactly that collision by drawing a hard line: the primitive is what an *agent* runs; a human is never the thing being scheduled, only ever an assist layer the user directs. That distinction should hold regardless of which word wins.

**Action for now: keep "Loop" as the working term everywhere in this doc** (§1–§20, all copy exercises) until Lobster supplies a replacement. Do not pre-emptively swap to "Job" or any other word. When a term is chosen, it's a find-and-replace across the doc plus a note here recording the decision — the underlying model does not change.

---

## 18. Remaining open questions

### New, from Lobster's ruling rounds (31 Aug)

1. ~~Autonomy dropdown values~~ — **RESOLVED, round 2:** Approve / Deny / Archive (§17.3). Open sub-question: where, if anywhere, does an unattended-publish ("Autopilot") mode live, since this dropdown reads as a per-output disposition rather than a standing trust level.
2. **Loop setup timing — during vs. after onboarding.** Still explicitly parked by Lobster for iteration (§17.6). Round 3's general "minimize onboarding steps" instruction leans toward after, but that's a hint, not a ruling on this specific question. The PRD should carry this as a branch point: spec both onboarding-inline (brief's Screens 5–6) and land-then-configure (meetings' one-click bulk setup, §4), not silently pick one — unless Lobster confirms the lean is a decision.
3. ~~Sidebar structure~~ — **DEFERRED, round 2, not a question:** Lobster is sharing a Figma with the option set, order and categories. §10's sidebar spec is a draft superseded whenever that arrives. Nothing to resolve here until then.
4. **Does "agents stay top-level" resolve or coexist with the orchestrator-fragility risk (§18, bottom)?** The meetings kept agents prominent partly because per-agent chats are the only part of the product that reliably works today. Worth confirming this ruling holds even though the orchestrator dependency hasn't gone away.
5. ~~Deployment team request timing~~ — **RESOLVED, round 3, corrects round 2:** see §11 / §17.9. Not in onboarding. Surfaces on Home post-landing. Everything downstream of the request (gating at $999 + approval, then chat-based flow) still stands from round 2.
6. **Departments — nav item or pure packaging?** Context supplied to Lobster (brief explicitly says packaging-only, no mandatory nav layer, in three places: the primitive pressure-test table, its own callout, and the mid-market segment spec). Treated as settled at "packaging-only" pending any objection.
7. **Positioning family.** "Your brand, on autopilot" vs. "a team that owns the outcome" — leaning toward the former for onboarding per round 3 (see §14), but not an explicit ruling yet.
8. **Mood board scope and Magazine placement** — both still open from before, unaffected by this round's rulings.
9. **"Loop" vs. "Job" (or another word) — terminology only, ✅ confirmed not a redefinition, round 8.** See §17.11. Working term stays "Loop" until Lobster names a replacement; the primitive, its 7 concepts, and the agent-runs-it/human-only-assists framing are unaffected either way.

Beyond the conflicts above:

**Primitive `[Brief]`**
1. Is a Loop genuinely a new product behavior, or merely a renamed Routine?
2. What can a Loop do that a user couldn't do through Chat / Spaces today?
3. Does every Loop have a goal, trigger, outcome and learning mechanism?
4. Can Loops create / modify other Loops when the brand changes?
5. Should "Department" exist in the product, or only in packaging? — **see item 6 above, treated as settled.**

**Onboarding `[Brief]`**
1. What is the minimum input from which we can create a credible Brand Memory?
2. Can we produce a useful first Loop **before authentication or payment**?
3. What can be inferred safely from a URL, and what requires confirmation?
4. Can connector requests be entirely contextual?
5. What real useful work can begin during the one-minute setup animation?

**Trust `[Brief]`**
1. Which actions are reversible?
2. Which workflows default to Draft vs. Watch?
3. What evidence should unlock the suggestion to move to Autopilot?
4. How does a user understand what happened **without reading an agent trace**?
5. What is the cleanest failure / escalation experience?

**From the meetings**
- **Mood board scope** — Monica-only or cross-agent. `[Open]`
- **Magazine placement.** `[Open]`
- **Cross-tab return** — browsers can't reliably return a user to an already-open tab; resolution is breadcrumb/back-link, accept the limitation.
- **Custom loop creation** — through orchestrator chat, not a wizard (Grokbot model). Mini/sub chat window **eliminated**; all creation, editing, connector auth, permission management happen in the **main chat**. In-chat pattern: *"A loop is about to be set up"* → Confirm / Manage permissions / Manage settings / Manage description. A **"Running" / "My Loops"** tab for editing, routed through chat.
- **One-click bulk setup** on landing: one button configures all loops and connectors. `[Aligned]`
- **The Loops tab appears only once loops exist.** `[Aligned]`

### 🔴 The risk no design decision fixes

> "Engineering — the orchestrator itself is not very strong. They're working on it to make sure that it is able to delegate properly. But the chats which are nicely built and work are the specific agent chats… I think this whole thing, to work, has to make sure that the orchestrator is airtight." — Meeting B

The entire loop-first architecture routes through the orchestrator, which today is the weakest component, while the well-built chats are the per-agent ones. Note this cuts **against** §17.5's brief-favoring resolution: the meetings kept agents primary partly because that's where the working software is. Worth stating plainly in the PRD as a dependency, not designing around silently.

---

## 19. Ownership, tooling, timeline

**Tooling `[Aligned]`** — **Linear** for sprints. **Figma** as design source of truth, organized **by quarter, not module** (modules change too often). File name in play: **"Loops First Onboarding."**

**Build target `[Brief]`** — a clickable end-to-end flow, then handoff screens and component states.

**Done when `[Brief]`**
- A new user can understand and complete the flow **in under one minute** in a prototype.
- Engineering receives a **screen list, happy path, empty/loading/error states, and the exact events needed to measure activation.**
- The activation moment is explicit: **the first Loop is running, not the first prompt was sent.**

**Timeline (week of 31 Aug) `[Aligned]`**
- **Mon–Wed** — build the flow; prototype ready
- **Wed** — review with Sai
- **Thu** — company-wide review + engineering
- **Fri** — blast to 10k customers

Working principle: *"Always assume we work for four days, over-communicate on the fifth day."*

**Adjacent workstream — Abhinav's team.** Three focus areas: **UX · brand experience · deployment-team recruitment.**
- **Brand experience** — make the first touchpoint exceptional. First emails, onboarding kit, first week of content and ads. The Hyrox-vs-park-run-club analogy: aspiration and belonging, not just utility. Goal: *"go from trying to cater to every brand, to every brand wanting to come and work with us."*
- Immediate ask: draft the areas they'll own, then **critique and bash the current UX.** *"I want them to bash it."*

---

## 20. Build sequence

### The brief's build order `[Brief]`

1. URL entry, real scan, Brand Card
2. One Goal recommendation + one **working** Store Health Loop
3. **One real first-run result before payment**
4. The Loop pack + Draft policy
5. Contextual Shopify and Meta connections
6. The populated Today screen
7. **Only then** the paywall, segment branches, advanced controls

### Prototype ladder `[Brief]`

| Prototype | Contents | Success criterion |
|---|---|---|
| **0 — black-and-white logic only** | URL/New Brand entry · one-minute learning · Loop recommendation · autonomy selection · populated Today · Loop card + detail · approval Inbox · result/learning state | Somebody can narrate what ShopOS does **without using the words** agent, Space, model, skill, prompt or credits |
| **1 — three segment variants** | pre-launch · founder-led SMB · mid-market team | Same primitive survives all three; only recommended Loops and governance change |
| **2 — trust graduation** | Watch · Draft · Approval · Autopilot · failure/escalation | Autonomy feels **controlled rather than reckless** |
| **3 — advanced mode** | reveal Route · reveal agents/skills · edit schedule/instructions · swap/pin tool · inspect eval/run history | Power users lose no capability while ordinary users never need to see it |

> "Do not redesign the whole product yet. Prototype the new primitive until it feels inevitable."
>
> "Start from Prototype 0 and do not discuss visual polish until the group agrees on the primitive, ontology and first-run flow."

### The decision `[Brief]`

> **Commit the next design sprint to proving one idea: a user gives ShopOS a brand. ShopOS gives them back a running system.**
>
> If we can make that feel magical, obvious and trustworthy, we have a genuinely different PLG primitive. If we cannot, another layer of agent cards and cleaner navigation will not solve the underlying product problem.

> "Do not teach the customer how ShopOS works. Prove that ShopOS can keep one job running for their brand."

---

## Appendix · Related material (not read)

From the brief's own link list — all in the `shopos` Notion workspace, none accessible from this session:

- ShopOS Design System / Aug revamp decision
- ShopOS × Loops
- Welcome to ShopOS
- The Psychology of Why AI Agents Haven't Clicked
- The Agency From the Future — ShopOS Thesis August

External reference cited by the brief: [The ChatGPT home page — OpenAI Help Center](https://help.openai.com/en/articles/9125172).

**Still outstanding:** the Claude artifact prototype (§0, #5) and the Figma wireframe Lobster is preparing (§17.5, §17.2). Given §17.2 / §17.6, that Figma file is likely to be the tiebreaker on screen count and loop-setup timing. Worth getting before the PRD is finalized.
