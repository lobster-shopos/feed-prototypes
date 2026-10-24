# ShopOS Feed — PUMA India fork

A single-page prototype of the ShopOS Feed — URL onboarding, live setup, the feed,
and the Pro deck with a Signals column — branded for **PUMA India** (in.puma.com).
No build step, no framework, no dependencies.

This fork was rebuilt from the base prototype and carries PUMA's own logomark, colours
(`#141414` / `#ac1e1e` / `#F4F4F4`), product photography and video, pulled directly
from PUMA's storefront (Salesforce Commerce Cloud). See `CHANGELOG.md` for the
full history, including what's still open (the introductory post sequence) and
known gaps (a few running-shoe styles have no on-model or video imagery in
PUMA's own catalog, so they stay on packshots).

An earlier, separately-built PUMA prototype (different pipeline, older base,
written for us.puma.com) is kept untouched alongside this one at `../feed-puma-oldsot/`.

## Run it locally

Any static server works. From this folder:

    python3 -m http.server 5173

Then open http://localhost:5173

Or with Node:

    npx serve .

Opening `index.html` directly also works, since nothing here needs a server.

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle,
behaviour at the bottom. PUMA's brand assets (logo, story rings, product
photography and video) are in `assets/`.

## Deploying to Vercel

It is a static site, so there is nothing to configure:

    npx vercel

Or push to GitHub and import the repo at vercel.com — framework preset "Other",
no build command, output directory `.`.
