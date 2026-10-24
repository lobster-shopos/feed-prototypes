# Architecture of a Feed prototype

One file does almost everything: `index.html` (~7,400 lines). Styles at the top, markup in the middle, behaviour and all content at the bottom inside one big `<script>`. No build, no framework, no dependencies. Run with `python3 -m http.server 5173` in the folder, or open `index.html` directly.

Two ways forks hold their content:

- **Inline** (puma, van-heusen, giva, cosmix, holy-drip, larkspire, r-for-rabbit, point-taken): content arrays are literals in `index.html`. Edit them directly. This is the default for new work.
- **Sheet-driven** (main, angel-one, armani-exchange, malaysia-airlines, pointer, superdry, wework): posts come from a Google Sheet through `tools/sync_sheet.py` into `data/feed-data.js`. Columns are defined in `tools/sheet_schema.py`; tab names in `tools/sheet.config.json`. Only use this if the owner wants non-engineers editing in a sheet. Needs `pip3 install openpyxl`.

Line numbers drift; find blocks by name with `grep -n "const NAME" index.html`.

## Content arrays and constants (inline forks)

| Name | What it drives | Brand-specific? |
|---|---|---|
| `AGENTS` | The six agent personas (Performance marketer, Storefront manager, Creative director, AI visibility, CRM specialist, ShopOS orchestrator) and their avatars | No. Leave alone. |
| `GEO` | Every number on AI Visibility cards: score, band, 7 weighted dimensions, branded vs discovery citation, leaderboard, sources, a "post" the brand should write. Cards template from it. | **Yes.** Placeholder numbers shaped like the brand's situation; real competitor and source domains. Label as placeholders in the changelog. |
| `POSTS` | Main feed cards with imagery or video. `agent`, `time`, `ratio`, `campaign`, `images[]`, `video`+`poster`, `title`, `sub`, `cta{label, logo, brandColor}`. A `rings:{}` object makes a visibility rings card. | **Yes.** All of it. |
| `TEXT_POSTS` | Data-row cards: `badge:[label, tone]`, `rows:[[label,value],...]`, `title`, `sub`, `cta`. Tones: ok / warn / bad / info. | **Yes.** |
| `DECK_ONLY` | Cards that appear in the Pro deck (column view). Entries without `deckOnly:true` also join the feed. | **Yes.** |
| `COL_ORDER`, `SECTORS` | Deck columns: signals, catalog, creatives, ads, storefront, visibility (+ setup-only `about`) with dot colours | No. |
| `COL_STATUS` | The blurb at the top of each column while the feed builds ("Going through 30 days of spend…") | **Yes.** Must be true for this brand (e.g. do not claim an ad account exists if it does not). |
| `SECTOR_BY_AGENT`, `CATALOG` | Agent → column map. `CATALOG` is a `Set` of **card titles** that go in the Catalog column instead. | `CATALOG` yes. |
| `CONNECTS` | "Not connected" cards: Meta Ads, and the commerce platform. Name, title, sub, items, logo, colour. | **Yes.** Commerce platform must be the real one. |
| `INTRO` | The 3-slide intro card (`slides[]` with `c`, `c2` brand colours, `img`, `h`) | Colours yes; images are generic. |
| `FEED_ORDER`, `FEED_CONNECT_AFTER` | Interleaving and where connect cards land. `FEED_CONNECT_AFTER` finds anchor cards **by exact title**. | **Yes.** Update titles here too. |
| `COL_CONNECT` | Which connect card heads which column. Can be `{}` to keep "Not connected" off the feed. | Maybe. |
| `SESSIONS` | Fake chat history in the sidebar | **Yes.** Rewrite around this brand's products. |
| `STORIES` | The story rings and slides (Trends / What is new / How to). Slide colours `c` are brand colours. Trends slides carry brand findings. | Trends + colours yes; "What is new" and "How to" are product copy, mostly generic. |
| `SOURCES`, `SIGNALS`, `DONE_SIGNAL`, `DW_TABS` | The Signals column (CRM): data sources (commerce, Klaviyo, WhatsApp, support) with record counts, then audience signals with rules, message, journey, counts | **Yes.** Commerce source name/colour/icon; counts are placeholders; message copy in brand voice. |
| `KNOWN_STORES`, `BRAND`, `WORDS`, `nameFromHost` | Onboarding: the URL entry screen is pre-filled and resolves a host to a name and product count. `WORDS` helps split a domain into words. | **Yes.** Set host, name, real product count. Add brand words to `WORDS`. |
| `PM_ABOUT` (name varies: `VH_ABOUT`, `CX_ABOUT`…) | Brand Memory / About cards for the known host: About, Brand guidelines (`brandkit`: logo, colours, type), Voice and tone, connect row, Company, Product catalog, Product information, Audience, Industry leaders | **Yes.** `ABOUT_CONTENT(B)` picks it by host; unknown hosts get `genericAbout`. |
| `CONNECT_ROWS` | The connect row inside Brand Memory | **Yes.** |
| `QUESTIONS`, `LINES` | Onboarding loading lines and questions | Check for brand mentions. |

Also brand-bearing but not in arrays: `<title>`, CSS custom properties in `:root` (feed is dark by default; accent colours come from the data, not the CSS), the workspace badge and welcome line (derived from `BRAND_NAME`/`BRAND`), the favicon/logo references, and comments.

## Hazards

- **Title-matched lookups.** `CATALOG` and `FEED_CONNECT_AFTER` locate cards by their exact `title`. Change or cut a title and these silently break (`FEED_CONNECT_AFTER` becomes `undefined` and the connect card vanishes). Update all three places together.
- **Edit with assertions.** For bulk edits, use a script that asserts each replacement matches exactly once and fails loudly otherwise. Never let a non-matching string be skipped.
- **Template leakage.** The template's brand name, host, product names, prices, competitor names, colour hexes and asset prefix live in many places. See `qa-checklist.md`.
- **Hard-coded commerce stack.** Internal ids like `CONNECTS.shopify`, `srcState.shopify`, `connect:'shopify'` are identifiers and may stay, but every *rendered* `name`/`title`/`desc` must say the brand's real platform. Check the Agents rail flyout, the Connectors tile and the command palette index too, not just the cards.
- **Video.** Cards can play looping silent video (`video` + `poster`). Trim to ~15 s, keep each clip small (7 MB for four clips was the PUMA total). The poster is the first frame and also goes in `images[]`.
- **Images render square** in the feed whatever `ratio` says, cropped from the top so the crop removes the bottom of the photo, not faces. Use `image_fit` contain (sheet forks) when a finished ad must be shown whole.
- **File size.** Keep each file well under 50 MB and the folder lean; GitHub rejects files over 100 MB.
