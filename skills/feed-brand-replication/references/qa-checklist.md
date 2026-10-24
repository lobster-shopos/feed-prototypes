# QA checklist

## 1. Automated: leak and integrity check

From outside the new folder (never run interpreters from inside an untrusted folder):

    python3 -I skills/feed-brand-replication/scripts/leak_check.py prototypes/<new-brand> \
        --old "PUMA,in.puma.com,Speedcat,Palermo,NITRO,Salesforce,#ac1e1e" --prefix pm-

- `--old`: comma-separated terms from the **template** brand (name, host, product names, platform, competitors, hexes). Case-insensitive. Zero hits required in `index.html`, `README.md`, `CHANGELOG.md` and asset file names (the CHANGELOG may mention the template once by name as the source of the fork; the script reports it so you can judge).
- `--prefix`: the template's asset prefix; no file in `assets/` should keep it.

It also reports: asset paths referenced in `index.html` that do not exist; assets never referenced; `CATALOG` / `FEED_CONNECT_AFTER` titles that match no card; warnings for `sub` lengths outside 165-220, em dashes in card copy, and files over 25 MB.

Exit code 0 = no hard problems. Leaks, missing assets, broken title lookups and junk files fail the run. Copy length, em dashes, unused assets and size are warnings: fix them or consciously accept them.

## 2. Manual: open and click

Serve the folder (`python3 -m http.server 5173`, from a separate shell) and check in a browser, desktop and a narrow mobile width:

1. Onboarding URL screen is prefilled with the new host; setup runs; the workspace badge and welcome line show the new brand.
2. Brand Memory / About cards: all read the new brand; brand kit shows the right logo, colours, typeface; no placeholder text from the template.
3. Feed: intro card, every card renders its image or video (video loops silently and starts on scroll), nothing broken or stretched, faces not cropped.
4. Both connect cards appear after their anchor cards and name the right platforms.
5. Pro deck: every column has content; the column status blurbs are true for this brand.
6. Signals column: sources name the real commerce platform; counts are placeholder-labelled; message and journey copy fits the brand.
7. Stories: three rings open; slide colours are the brand's.
8. Sidebar history (SESSIONS), command palette, Agents and Connectors menus: no old brand, no wrong platform.
9. Open the browser console: no 404s, no errors.
10. Read every card aloud once. Does each one only make sense for this brand?

## 3. Done criteria

- Leak check exits 0.
- Manual list passes.
- Template folder untouched (`git status` shows changes only under the new folder).
- `README.md` names the brand, host, palette, and where assets came from.
- `CHANGELOG.md` has a dated entry with: what was built, what was read off the live site, the **Known limits** paragraph (every placeholder metric, every product with only packshot imagery, every unread property), and unused material for later.
- Folder is lean: no `.DS_Store`, `.bak`, `node_modules`, zips, or previous-brand assets.

## Typical late fixes (found in past reviews)

- Leftover "Shopify" strings in menus and the command palette on a non-Shopify brand.
- "Voice and tone" quoting a product's marketing line.
- Ads status blurb assuming a spend history the brand does not have.
- Copy edited without its image, or image swapped without its copy.
- A cut card whose title is still listed in `CATALOG` or `FEED_CONNECT_AFTER`.
- Descriptions with stacked clauses and em-dash asides: split into short sentences.
