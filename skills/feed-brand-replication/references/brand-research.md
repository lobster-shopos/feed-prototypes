# Researching the brand

Goal: enough observed fact that every card could be defended to the brand's own team. Work from the live properties, in this order.

## 1. The website (required)

Collect and write down (in the changelog as you go):

- **Name and host.** Official trading name, exact domain, locale (e.g. `in.puma.com`, not `us.puma.com`, when the brand is run per country). Everything keys on the host.
- **Commerce stack.** Look for `/products.json` or `cdn.shopify.com` (Shopify), `demandware`/`dwstatic` or Next.js over an API (Salesforce Commerce Cloud), Magento, custom. Record it. It drives the connector names in `CONNECTS`, `SOURCES`, the Brand Memory connect row and the Agents/Connectors menus.
- **Product count.** Real, from the site (a listing total or a sitemap), for the onboarding screen.
- **Category and franchises.** The brand's own product line names, hero products, price points in local currency. Use their exact spelling.
- **Pricing behaviour.** Permanent discounts, automatic checkout offers, sale periods. This is often the single most useful finding, since marked price vs paid price shapes ads and catalog cards.
- **Brand kit.** Logo (SVG preferred), primary and secondary colours (sample from the live site, say if "by eye"), typeface and fallback.
- **Voice.** How the brand writes *as the brand* (campaign headlines, about page, emails), not how one product page describes itself. Quoting a single product's copy as "voice and tone" was an error that had to be fixed once.
- **Company facts.** Legal entity, where it sells (own site, own stores, marketplaces), approximate age. Leave unknowns as visible gaps ("Add team size").
- **Competitors.** Real ones in the same category and market, which the engines would actually name. Include the marketplaces if they hold the shelf.
- **Content gaps visible on the site.** Missing size guides, spec-sheet descriptions, pages with no imagery of products in use, unexplained hero features. These become Storefront and Creative cards.

## 2. Social accounts (optional)

Instagram first, then whatever else is supplied. Use for: voice, what formats the brand posts, campaign names, which products get engagement, and on-model or lifestyle imagery. Engagement figures read off public accounts are real; unlock/member/audience counts you cannot see are placeholders.

## 3. Navigation hints and extra links (optional)

Follow them literally. If a shoot folder is supplied, build cards around the shoots that match a real recommendation (a Speedcat film becomes the Speedcat card), and list the unused material in the changelog for later cards.

## 4. If you cannot read something

- A site that blocks scraping: use what loads, search results, the sitemap, public social. Say so.
- Unknown metrics (ad spend, frequency, CPA, customer counts, GEO scores): keep the shape of the template's cards but make the numbers plausible placeholders, state clearly in **Known limits** that they are not measured, and make the card's claim hinge on what *was* observed (a price, a listing count, a missing field).
- Never imply an account exists that does not (no ad account, no CRM). Write the Ads column status and Signals around what the brand actually has.

## 5. Output of this step

A fact sheet at the top of the new `CHANGELOG.md`: host, stack, product count, palette, typeface, 3-6 franchises, 3-6 competitors, 3-5 observed findings (with the evidence), and the list of unknowns. Write cards from the findings, not the other way round.
