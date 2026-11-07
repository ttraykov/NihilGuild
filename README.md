# Nihil — DOFUS Guild Hub (v4)

An independent, unofficial fan-made guild homepage for **Nihil**. This edition restores the cinematic original art direction, retains the guild tenets and illustrated dispatches, and simplifies the layout for a future member portal.

## Open locally

Open `index.html` in a browser. No build tools or packages are required. Keep the `assets/` folder beside the HTML file.

## Sections

- Cinematic hero and moving guild motto strip
- Guild introduction and three tenets
- Illustrated, filterable sample dispatches (with full-post reader)
- Compact war room with sample activities and no claimed event dates
- Member login preview (no authentication; disabled fields)

The previous class gallery (“Familiar Faces”) and large closing promo section were intentionally removed.

## Editing content

- Edit visible guild, news, and event text in `index.html`.
- Full example announcement content lives in `DISPATCHES` in `script.js`; edit both the article and its matching card.
- Update fonts, palette and layout in `styles.css`.
- Art in `assets/nihil-heroes.webp` is original fantasy artwork influenced by game classes, not official game character art.

## Deploy

See **[GITHUB_DEPLOY.md](GITHUB_DEPLOY.md)** for exact GitHub Pages instructions and terminal commands. The included `.nojekyll` supports direct static hosting.

## About login and content

This is a **static demo**. There is no account system, no data collection, no backend, no forms, and no scheduled events. All announcements and events are examples until replaced by real guild content.

DOFUS is owned by Ankama. This is an unofficial fan project and is not affiliated with or endorsed by Ankama.

## Version 4 refinements
- Removed the decorative “An unofficial DOFUS guild / 001” eyebrow above the hero. The independent fan-project disclaimer remains in the footer.
- Improved mobile hero framing and typography, touch-sized news filters, card surfaces, contrast, and spacing across screen widths.
- The login remains a preview only and does not authenticate users.
