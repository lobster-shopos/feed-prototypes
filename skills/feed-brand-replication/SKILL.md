---
name: feed-brand-replication
description: Re-skin an existing ShopOS Feed prototype for a different brand. Use when asked to "make a feed for <brand>", clone, fork, adapt or replicate a Feed prototype, swap the brand in a feed, or build the next entry under prototypes/. Only the brand's website is required; social links and navigation hints are optional extras. Covers research, which parts of index.html to rewrite, content rules, imagery, and a leak check.
---

# Replicate a ShopOS Feed for a new brand

The ShopOS Feed is a single-page, no-build HTML prototype (`index.html` + `assets/`). One concept, many brands: every folder under `prototypes/` is the same app with a different brand's name, colours, imagery, products, competitors and card copy. This skill is the procedure for producing the next one.

It was written from the repo's prototypes, READMEs and changelogs. The original skill these prototypes were generated with is not available, so treat this as a reconstruction. When it disagrees with a prototype's own CHANGELOG about what is current, trust the newest CHANGELOG entry and tell the owner.

## Inputs

| Input | Required | Notes |
|---|---|---|
| Brand website | **Yes** | If only a name is given, find the official site yourself and say which one you picked. |
| Social accounts | No | Instagram first. Used for voice, imagery, what the brand is actually posting. |
| Navigation hints | No | "Men's is under /collections/…", "ignore the outlet", how to find campaign pages. |
| Extra links | No | Drive folders, press pages, shoots. If real brand shoots are supplied, prefer them over catalog shots. |

Never ask for the optional inputs. Work without them and note what you could not read.

## Procedure

1. **Pick a template.** Copy a recent inline-data fork, not an empty file: `prototypes/van-heusen` (newest) or `prototypes/puma` (best documented). Do not edit the template in place. Create `prototypes/<brand-slug>/`. Read `references/architecture.md` before touching the code. Some forks are sheet-driven (`prototypes/main`, `wework`, `superdry`, and others listed in the architecture file); only use one if the owner asks for the sheet workflow.
2. **Research the brand** from the live site. Follow `references/brand-research.md`. Output: a short brand fact sheet you write to the new folder's `CHANGELOG.md` as you go. Identify the commerce stack for real (Shopify, Salesforce Commerce Cloud, custom). Do not assume Shopify.
3. **Rewrite every brand-bearing block** listed in `references/architecture.md`: name and host, colours, logo, Brand Memory (About) cards, competitors, GEO object, POSTS / TEXT_POSTS / DECK_ONLY, SIGNALS and SOURCES, STORIES, INTRO, SESSIONS, connectors. Write cards to `references/content-rules.md`.
4. **Replace the imagery.** Brand photography and video from the brand's own properties, not stock. Delete the previous brand's assets from the new folder. Keep the generic UI assets (`agent-*.svg`, `intro-*.jpg` retinted if needed, `logo-whatsapp.png`, `logo-klaviyo.png`). Prefix brand assets with a 2-letter code (`pm-`, `vh-`) so leftovers are greppable.
5. **Run the leak check** (`scripts/leak_check.py`, see `references/qa-checklist.md`) with the *template's* brand terms until it is clean, then open the page and click through everything in the checklist.
6. **Document.** Write `README.md` (what brand, palette and where assets came from) and `CHANGELOG.md` (dated, newest first: what was built, what was read off the live site, and a **Known limits** paragraph listing every placeholder number and every gap).

## Non-negotiables

- **Recommendations, not finished work.** Every card is the agent asking permission. Nothing is "done", "published" or "sent". The approve button only ever pretends.
- **Observed facts only.** Product names, prices, counts, competitors and quotes must be read off the brand's real properties. Anything you cannot observe is either left as a visible gap or labelled as a placeholder in the changelog. Never invent a metric and present it as the brand's.
- **No trace of any other brand.** Not in copy, comments, alt text, file names, session titles or the competitor list (unless the competitor is a real competitor of this brand).
- **Do not edit the template folder, and do not delete other prototypes.**
- Follow the owner's instructions on git and publishing. Do not push unless told to.

## Reference files

- `references/architecture.md`: map of `index.html`, every array and what it drives, hazards (title-matched lookups).
- `references/brand-research.md`: what to extract, in what order, and how to judge it.
- `references/content-rules.md`: card anatomy, copy rules, agent and column rules, imagery rules.
- `references/qa-checklist.md`: leak check, asset check, manual click-through, done criteria.
- `scripts/leak_check.py`: finds leftover old-brand strings, missing assets, unmatched title lookups, copy-rule violations.
