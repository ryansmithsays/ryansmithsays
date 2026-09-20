# Sub page spec

How to add a page to the site (About, Marketing Portfolio, Storytelling, Speaking, and so on). The About page (`src/about.njk`) is the reference implementation.

## Files

| File | Role |
| --- | --- |
| `src/_includes/layouts/page.njk` | Sub page layout. Chains to `base.njk`, adds the hero at the top and the closing CTA band at the bottom. |
| `css/page.css` | Sub page components. Loaded after `styles.css`, so it shares the same tokens. |
| `src/<slug>.njk` | One file per page. Front matter plus section markup. |

## Front matter

```yaml
---
layout: layouts/page.njk
title: "About Ryan Smith | Ryan Smith Says"   # <title> and og:title
description: "One or two sentences for search and social."
heading: "About Ryan Smith"                    # the H1 (falls back to title)
lede: "Optional intro paragraph under the H1."
eyebrow: "Optional small label above the H1"
portrait: true                                 # optional: portrait on the right of the hero
portraitAlt: "Alt text for the portrait"
ctaEyebrow: "Optional"                         # closing band overrides, all optional:
ctaTitle: "Optional, may include <em>emphasis.</em>"
ctaLabel: "Optional button text"
ctaHref: "Optional button link (defaults to the contact page)"
ctaTag: "Optional<br>short<br>lines."
permalink: /about/
---
```

Title format: `Page name | Ryan Smith Says`. The home page is the only page that leads with the site name.

## Page anatomy

1. Site header (from `base.njk`).
2. Hero: H1, optional lede, optional portrait. Cream background.
3. Bands: the page body. Write these in the page file.
4. Closing CTA band (from the layout).
5. Site footer (from `base.njk`).

## Components

A **band** is one section: heading on the left, content on the right (stacked below 1000px).

```html
<section class="band" aria-labelledby="x-title">
  <div class="band__inner">
    <h2 id="x-title" class="display display--sm">Heading</h2>
    <div class="prose"><p>Content.</p></div>
  </div>
</section>
```

- Backgrounds: `band` (cream) and `band band--sand` alternate. `band band--navy` is for one emphasis moment per page.
- `prose`: readable paragraphs (max 40rem). Links get a gold underline.
- `ledger`: a `<dl>` of `ledger__row` items, each with `ledger__term` (optionally containing `ledger__meta`) and `ledger__def`. Put a `ledger__list` in the definition for bullet points; the gold dash marks the bullets. Add `ledger--cols` for a two-column version.
- `band__links`: a row of `link-arrow` links under a band's content.
- `values`: full-width navy strip of short words (About page only so far).
- `pull`: large statement text for navy bands, followed by one plain paragraph.

## Rules

- Reuse existing classes before adding new ones. New sub page styles go in `css/page.css`.
- Square corners, no shadows, no card grids. Structure comes from rules, spacing, and the type scale.
- Use one navy emphasis band per page, not several.
- Every section gets a heading and `aria-labelledby`.
- Internal links go through `site.json` with `"internal": true`, so they respect the path prefix. The nav marks the current page automatically.
- Copy comes from the live site until the page is rebuilt; check figures against it.
