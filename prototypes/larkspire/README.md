# Larkspire feed prototype

A single-page prototype of the ShopOS Feed for Larkspire, a fictitious premium
residential developer (larkspire.homes). It covers URL onboarding, the live setup
with the Brand Memory column, the feed, and the Pro deck with a Signals column.
No build step, no framework, no dependencies.

## Run it locally

    python3 -m http.server 5173

Then open http://localhost:5173. Leave the URL field empty and press Enter to run
the Larkspire demo. Opening `index.html` directly also works.

## Editing

Everything lives in `index.html`: styles at the top, markup in the middle,
behaviour at the bottom. Feed content sits in `POSTS`, `DECK_ONLY`, `TEXT_POSTS`,
`STORIES`, `SIGNALS` and `LK_ABOUT`. Agent shapes and imagery are in `assets/`
(`lk-*` files are Larkspire's).
