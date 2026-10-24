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

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle,
behaviour at the bottom. Agent shapes and photography are in `assets/`.

## Deploying to Vercel

It is a static site, so there is nothing to configure:

    npx vercel

Or push to GitHub and import the repo at vercel.com — framework preset "Other",
no build command, output directory `.`.
