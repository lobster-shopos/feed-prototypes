# Gaps — PUMA brand clone

**Clone path:** `/home/box/feed-office/brands/puma/`  
**Pack:** `/home/box/feed-office/data/brands/puma/PACK.md`  
**CARDS:** `/home/box/feed-office/data/brands/puma/CARDS.md` (Writer lifestyle re-curation — authoritative slot→file + copy)  
**Locale:** us.puma.com/us/en  
**Rule:** observed facts only; unknowns stay Gaps — nothing invented to fill them.

---
## Harsh fine-tune applied (2026-09-18)

Developer applied Writer Harsh fine-tune CARDS (`data/brands/puma/CARDS.md` · audit PASS `data/audits/2026-09-17-cards-fine-tune.md`) into `brands/puma/index.html`.

- **Big Head visibility = 4** (was 8): `geo-rings` · `geo-bar-recommend` · `prompt-carousel` · `geo-ask-report`
- **Removed** excess visibility: separate share bars, discovery-bar / citations-on-discovery duplicate, separate annotated, separate absent, separate named-answer, separate five-things; old prompts-1/2 merged into `prompt-carousel`
- Monica / Gavin / Richard titles·subs·CTAs already on Generate… / Review / Explore Docs verbs — left aligned to CARDS primary map
- `COL_CONNECT = {}` — Not-connected stays off feed (ShopOS chrome CONNECTS object retained)
- CREATIVE_ASK lifestyle `local_file` placeholders kept — no invented creatives
- Metrics honesty: no Frequency/CPA/7of15/274/2400·4118 as brand facts (Gap language only; ShopOS connect chrome OK)
- Residual `feed-prompts-1/2` naming: none

**Big Head = 4. Awaiting Class Rep. No shareable claim.**

---



## Lifestyle rewire status (2026-09-17)

Developer rewired clone from DS lifestyle assets + Writer `CARDS.md` (lifestyle rebuild). White-studio packshots are **not** referenced by `index.html`. Cosmix seed photos (`cx-*`, `ptup-*`, `pt-credits-*`, `pt-jam-*`) may remain **unused on disk** but are **not referenced** by `index.html` for feed / modals / stories.

### Shareable-bar checklist (required slots)

| Required slot | Status | Notes |
|---------------|--------|-------|
| Feed photos | **Partial** | Wired lifestyle slots Pass; **feed-detail** + **feed-spec** are image Gaps (copy-only). annotated / prompts remain Gap |
| Feed + loading card copy | **Pass** | Titles/subs/CTAs from Writer CARDS action nudges; LIVE.catalog / LIVE.ads use proposed SKU lines (no invented counts / spend %) |
| Logo / wordmark | **Pass** | `assets/brand-mark.png` in side-brand mark (`brandMark()` for PUMA); initials fallback remains for non-PUMA / Cosmix path |
| SKU names | **Pass** | Deviate Pure NITRO™ (313904), Speedcat OG (398846), Suede Classic (399781) |
| ShopOS UI colours | N/A (not required) | Product chrome colours kept |

**Metrics honesty:** TEXT_POSTS keep qualitative / Gap language — do **not** reintroduce Frequency above 4 / CPA +18% / 7 of 15 / eligible:274/311/186 / 2400·4118 customer tallies. SIGNALS `counts.* = null` with “Demo placeholder — not PUMA CRM”. **Metrics-honest — awaiting Class Rep re-audit.**

**Shareable claim:** **not claimed** — awaiting Class Rep. Lifestyle rewire + metrics honesty are Developer-complete; Class Rep PASS required before any shareable bar claim.

---

## 1. Demo user name (`brand-user-greeting`)

- **Gap:** Pack §10 — no demo user greeting name.
- **Clone handling:** Greeting set to `Hello there, what do you want to make?` (no invented person name such as Vedant).

## 2. Catalog / product count

- **Gap:** Pack §3 / CARDS — no stated SKU / catalog count.
- **Clone handling:**
  - `BRAND.products = null` for PUMA path (not a fake N; **must not use Cosmix 212**).
  - Setup line: `Reading the catalog.` (no count).
  - Live catalog stream: SKU-named lines only; **no** `Re-syncing [n] products`.
  - Shopify connector `records` string: product count replaced with `catalog size Gap`.

## 3. Competitors / GEO rival labels

- **Gap:** Pack §8 — no competitor brands named by PUMA on pages reviewed. Do not invent Nike/Adidas/etc.
- **Clone handling:** Chart peer labels are anonymous (`Peer A/B/C`, `Source A/B/C`). Copy notes named rivals / citation hosts are Gaps.

## 4. GEO citation hosts

- **Gap:** Pack has no observed rival citation domains (only `puma.com` / `us.puma.com`).
- **Clone handling:** Cosmix hosts removed. Brand row uses `us.puma.com`. Other rows are anonymous placeholders.

## 5. GEO metrics / visibility analytics / ads %

- **Gap:** No PUMA GEO score, citation counts, visibility share %, prompt coverage, or ads spend/revenue splits (CARDS § GEO).
- **Clone handling:** Ring/bar *structure* retained for demo UI; copy labels numbers as **structural placeholders — not PUMA analytics**. LIVE.ads omits Cosmix-style spend/frequency/CPA lines. feed-ads-spend creative is on-brand (`feed-10.jpg`); percentages omitted from card sub.

## 6. Brand-book colours / official palette

- **Gap:** Pack §4.2 / §4.5 — no brand-book PDF; official “PUMA Red” hex not separately published beyond CSS observation.
- **Observed (CSS only):** near-black `#191919`; red accent `#ba2b20` / product name “PUMA Red”; light greys/white.
- **Clone handling:** Product UI chrome stays ShopOS dark theme. Official brand-book match still Gap.

## 7. Typography

- **Gap:** Official type specimen / weight rules not published; CSS observes `FFDINforPuma` + Inter/system.
- **Clone handling:** SoT system font stack kept (product chrome). Custom PUMA face not embedded.

## 8. Logo / brand mark asset

- **Resolved for clone:** Official `brand-mark.png` (and `.jpg`) from DS lifestyle assets; side-brand mark uses the PNG for PUMA.
- **Residual:** Rail logo remains ShopOS chrome (intentional). Favicon binary not saved. Cosmix SVG special-case still present in JS for name=`cosmix` only — does not fire for PUMA.

## 9. Photography / creative assets (lifestyle rebuild)

### Wired (brand-real lifestyle / on-model / CMS)

| Slot | File |
|------|------|
| feed-launch | `feed-01.jpg` |
| feed-lifestyle | `feed-15.jpg` |
| feed-editorial | `feed-08.jpg` |
| feed-split | `feed-05.jpg` (literal split composite still Gap) |
| feed-campaign | `feed-07.jpg` (Deviate mod03) |
| feed-campaign-life | `hero-signals.jpg` |
| feed-carousel-1..5 | `feed-carousel-01.jpg` … `05.jpg` (mod/CMS; no white sv/dt) |
| feed-ads-spend | `feed-10.jpg` (creative only; metrics % Gap) |
| story-ad-1..3 | `story-ad-01.jpg` … `03.jpg` (story-ad-2 = Suede Classic mod01) |
| hero-signals | `hero-signals.jpg` |
| hero-credits | `feed-16.jpg` |
| hero-jam | `feed-17.jpg` |
| brand-mark | `brand-mark.png` |

Extras on disk (not primary slot owners): `feed-06/09/12/18/19/21–25.jpg`, `brand-mark.jpg`.

### Standing-rule image Gaps (copy-only — no white studio)

| Slot | Gap |
|------|-----|
| **feed-detail** | **No image** — only official close detail was white-studio `dt01` (removed). Card is rows/copy-only with Gap badge. PACK NITROFOAM™ / style 313904 copy kept. |
| **feed-spec** | **No image** — same white `dt01` standing rule. Card is rows/copy-only with Gap badge. PACK Deviate + $150.00; drop/stack/weight still Gap. |
| feed-annotated | **No image** — copy-only (PDP feature rows). No official annotated FYP still found. |
| feed-prompts-1 / feed-prompts-2 | **No image** — discovery chart card has no Cosmix SERP screenshots; chart % remain structural placeholders. |
| feed-ads-spend metrics | Creative yes; spend/revenue % not brand-public. |
| feed-split literal diptych | Single mod frame used; no brand-published split composite. |
| feed-campaign-life frequency | Creative yes; Cosmix “frequency 4” metric Gap. |

### Unused leftovers on disk (not referenced by index.html)

Prior white packshots still present but **unreferenced**: `feed-02/03/04/11/13/14.jpg`, `feed-carousel-extra-deviate.jpg`. Safe to delete in a later cleanup.

Cosmix leftovers (also unreferenced): `cx-creative-*.jpg`, `cx-carousel-*.jpg`, `cx-pancake-*.jpg`, `cx-prompts-*.jpg`, `cx-fyp-*.jpg`, `cx-nutrition-panel.jpg`, `ptup-*.jpg`, `pt-credits-hero.jpg`, `pt-jam-hero.jpg`, older `credits-hero.jpg` / `jam-hero.jpg`, etc.

`dash-preview.jpg` remains generic UI chrome preview.

## 10. CRM / Signals numbers & dates

- Eligible / unreachable / funnel counts are **null** in clone data (`counts.* = null`); UI shows “—” plus **Demo placeholder — not PUMA CRM** on card, audience funnel, and overview.
- Connector `records` strings Gap’d (no invented customer/order/ticket Ns). DONE_SIGNAL outcome nums Gap’d to “—”.
- Loyal / second-purchase / lapsed `why` copy uses qualitative windows only — **no** 274/311/186 / 2400·4118 customer tallies.

## 11. Ads performance metrics / TEXT_POSTS

- Spend %, revenue %, frequency thresholds, CPA drift %, ATC lift %, citation “N of M”: **Gap**.
- TEXT_POSTS use Writer §C action titles (Review / Open / Explore) with qualitative rows only — **no** Frequency above 4 / CPA +18% / 7 of 15.
- LIVE.ads and feed-ads-spend card omit invented %.
- **Status:** metrics-honest; awaiting Class Rep — do **not** claim shareable on this alone.

## 12. Soccer silo specific style IDs

- ULTRA / FUTURE / KING used as category silo names from pack.
- **Gap:** Full current hero colorway / style# PDPs not pinned in pack for those silos.

## 13. Official strategy / voice PDF

- `about.puma.com/.../our-strategy` returned **403** during pack research.
- Full tone-of-voice PDF not found. Voice phrases reused only where pack/CARDS list them.

## 14. Harsh targeting

- **Gap:** Pack §9 — none attached for this assign.

## 15. Non-US locales

- **Gap:** Only US English storefront observed; other market copy not validated.

## 16. Intentional retained Cosmix code (not UI copy / not photos)

- `COSMIX_MARK` SVG + `brandMark()` special-case when name normalizes to `cosmix` remains so non-Cosmix brands take initials or PUMA mark path. PUMA uses `brand-mark.png`.

---

## Writer CARDS lifestyle reconcile (2026-09-17)

Canonical: `/home/box/feed-office/data/brands/puma/CARDS.md` (Writer lifestyle re-curation).

- **Assets:** DS lifestyle set copied into `brands/puma/assets/` (overwrite). Slot→file map from CARDS.
- **Titles:** Action nudges (Shop / Run / Explore / Review / Open / Add / View) per Writer.
- **feed-detail / feed-spec:** image refs to `feed-04.jpg` (white studio) **removed** → copy-only Gap cards.
- **story-ad-2:** retargeted to Shop Suede Classic — on-model (matches new asset).
- **Carousel / campaign / ads-spend / launch:** remapped to mod/CMS lifestyle files.
- **TEXT_POSTS:** Writer §C qualitative; ops counts Gap.
- **Catalog count:** `products:null` — must not use Cosmix 212.
- GEO rings/bars remain structural placeholders with Gap labels (Writer §B).

## Checklist vs freeze / shareable contract

| Required token | Status |
|----------------|--------|
| brand-name | PUMA |
| brand-host | us.puma.com |
| brand-workspace-initial | P (fallback) / mark img when PUMA |
| brand-workspace-aria | PUMA workspace |
| brand-mark-inline | `brand-mark.png` for PUMA |
| brand-user-greeting | Gap → neutral “Hello there…” |
| brand-product-count / live catalog | Gap → no invented N; SKU-named LIVE lines |
| SKUs / category language | Hero SKUs + Running/Soccer/Lifestyle/Sportstyle |
| GEO competitors / hosts / metrics | Gap-safe anonymous / softened |
| Photography (lifestyle slots) | **Brand-real per CARDS** where files exist |
| Residual Gaps | detail · spec · annotated · SERP prompts · GEO/share structural nums · catalog count · CRM counts null/demo · ads % · frequency metric |
| Shareable | **NOT claimed** — awaiting Class Rep |
