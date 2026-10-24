# ShopOS Feed — PUMA brand clone

Static brand variation of the ShopOS Feed SoT, localized for **PUMA** (US commerce locale).

## Locale

- Observed commerce host: **us.puma.com** (`https://us.puma.com/us/en`)
- Pack notes `puma.com` → redirects to `us.puma.com`
- Default setup path forces **PUMA** + **us.puma.com** for `puma.com` / `us.puma.com` / `*.puma.com` family hosts

## How to run

From this folder:

```bash
cd /home/box/feed-office/brands/puma
python3 -m http.server 8765
```

Open `http://localhost:8765/` in a browser. Submit empty URL or `us.puma.com` / `puma.com` on the start screen to walk the PUMA setup path.

## Provenance

| Item | Path |
|------|------|
| SoT base (copied) | `/home/box/feed-office/sot/current/` |
| Frozen clone contract | `/home/box/feed-office/sot/BRAND_VARIABLES.md` |
| Brand facts pack | `/home/box/feed-office/data/brands/puma/PACK.md` |
| Slot map + copy | `/home/box/feed-office/data/brands/puma/CARDS.md` |
| Marketer assets | `/home/box/feed-office/data/brands/puma/assets/` |
| Sources | `/home/box/feed-office/data/brands/puma/SOURCES.md` |
| **Gaps (required reading)** | [`GAPS.md`](./GAPS.md) |

## Shareable status

**Shareable: yes** (required Harsh slots brand-real as of visual swap 2026-09-17).

| Required | Status |
|----------|--------|
| Feed photos | Pass — CARDS slot files wired in `index.html` |
| Feed + loading card copy | Pass — CARDS titles/subs/CTAs + LIVE SKU lines |
| Logo / wordmark | Pass — `assets/brand-mark.png` in side-brand |
| SKU names | Pass — Deviate Pure NITRO™, Speedcat OG, Suede Classic |
| ShopOS UI colours | Not required — chrome colours unchanged |

**Residual Gaps (honest):** feed-annotated (copy-only), feed-prompts SERP stills (no images), GEO/ads metrics %, catalog SKU count. See `GAPS.md`. Cosmix leftover image *files* may remain unused on disk; they are not referenced by feed/modals/stories.

## What this is / is not

- **Is:** a runnable static SPA clone with PUMA identity, hero SKUs, category language, voice phrases, and Marketer photography wired per CARDS.
- **Is not:** a claim that GEO scores, competitor charts, CRM eligible counts, or ads spend % are real PUMA analytics. See `GAPS.md`.

## Do not

- Invent competitors, catalog counts, metrics %, or Gap photography.
- Clone or touch `wild-oak`, rewrite SoT, or message Headmaster/Harsh from this folder’s workflow — report gaps upward via `GAPS.md`.
