# Loops into Feeds

## 1. Links

- [ShopOS Redesign — Feed](https://www.figma.com/design/010CaB5lelUunG0s62vYgU/ShopOS-Redesign---Feed?node-id=1058-157822)
- First page node: `1058:157822`
- Loading initial state: [node `653:71686`](https://www.figma.com/design/010CaB5lelUunG0s62vYgU/ShopOS-Redesign---Feed?node-id=653-71686)

## 2. Problem

New brands need a short path from “I have a store” to a working ShopOS team, then into the Feed — not a long setup that never turns into something to react to.

## 3. Context

- 11 Sep 2026 — User asked to prototype the product flow in `projects/loops-into-feeds`, starting with Figma frame `1058:157822` as the first page.
- Frame copy: “Get a team for your Brand.” / “Enter a Brand URL & we’ll set everything up!”
- Primary field: “Enter your store URL”
- Alternates: “See ShopOS in action”, “I don’t have a Brand”
- 11 Sep 2026 — Loading initial state (Figma `653:71686`): after a brand URL is submitted, the page collapses to the mark plus a compact URL chip. A shimmer runs through the chip. Cards, status row, and CTA in this frame are at 0% opacity — not shown yet. A full-bleed `beam_blinds` layer exists on the frame but is hidden in this state.

## 4. Current understanding

The flow opens by asking for a brand URL so ShopOS can stand up a team. Submitting that URL goes to a loading screen where agents study the brand. The first loading frame is just the mark and a shimmering URL chip; later scan cards are not visible yet.

## 5. Review digest

No review sessions yet.

## 6. Ideas and directions

- **URL-first team setup** — the Figma first page. Brand URL is the main job; demo and no-brand are secondary rows under the field.
- Later pages are not designed in this prototype yet.

## 7. Trade-offs

- **URL-first** gains a single obvious job and a team-shaped promise. It gives up an intent picker on the first screen, so the first job after setup is still undefined here.

## 8. Suggested journeys

### Brand URL → team

1. Land on the first page.
2. Enter a store URL.
3. “Build My Team” becomes available.
4. Submit. ShopOS shows a loading screen: mark + URL chip with a shimmer while agents study the brand. Later loading frames are not in the prototype yet.

### Alternates (unwired)

- “See ShopOS in action”
- “I don’t have a Brand”

## 9. Open questions

- When do the scan cards and `beam_blinds` background appear on the loading screen?
- Where do “See ShopOS in action” and “I don’t have a Brand” go?
- Does “Build My Team” mean a full agent team, or a lighter first setup?

## 10. Chosen direction

> Direction and journey not yet chosen.

## 11. Final journey

> Direction and journey not yet chosen.

## 12. Scope

> Direction and journey not yet chosen.

## 13. Requirements

> Direction and journey not yet chosen.

## 14. Acceptance criteria

> Direction and journey not yet chosen.

## 15. Success metrics

> Direction and journey not yet chosen.

## 16. Dependencies

> Direction and journey not yet chosen.

## 17. Rollout

> Direction and journey not yet chosen.
