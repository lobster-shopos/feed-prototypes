# ShopOS Feed — prototype

A single-page prototype of the ShopOS Feed: URL onboarding, live setup, the feed,
and the Pro deck with a Signals column. No build step, no framework, no dependencies.

## Run it locally

Any static server works. From this folder:

    python3 -m http.server 5173

Then open http://localhost:5173

Or with Node:

    npx serve .

Opening `index.html` directly also works, since nothing here needs a server.

## Content comes from Google Sheets

Posts are not written in `index.html` anymore. They come from the Brand Feeds sheet
(https://docs.google.com/spreadsheets/d/1KKs-1639ns-eRO9PxOjMPK2vw_W9tFUmG0u3SZuwP6g).
Each tab in `tools/sheet.config.json` is one feed variant, and the v1/v2/v3 switch picks the tab.

    python3 tools/sync_sheet.py            # pull the sheet and rewrite data/feed-data.js
    python3 tools/sync_sheet.py --check    # validate only

Needs Python 3 with openpyxl (`pip3 install openpyxl`). The "How to Use" tab in the sheet
explains every column. Row order is feed order. Google Drive images must be link-shared,
or sit in `assets/` and be referenced by path.

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle,
behaviour at the bottom. Agent shapes and photography are in `assets/`.

## Deploying to Vercel

It is a static site, so there is nothing to configure:

    npx vercel

Or push to GitHub and import the repo at vercel.com — framework preset "Other",
no build command, output directory `.`.
