# smore_outdoors

Public marketing/product site for **S'more Outdoors** — free browser-based tools for RVers, van lifers, and overlanders.

This is a zero-build static site. Every HTML page is self-contained (inline CSS, no CDN dependencies). Deploy as-is to any static host.

## Layout

```
smore_outdoors/
├── index.html                # Brand home — links out to each tool
├── sitemap.xml               # Covers home + all tool subpaths
├── robots.txt
├── ads.txt                   # PLACEHOLDER — needs a real AdSense pub- ID before launch
│
└── leveling-block-calculator/              # RV Leveling Block Calculator
    ├── index.html
    ├── vehicles-data.js       # Make/model/year/variant → wheelbase & track width cache
    ├── robots.txt
    ├── sitemap.xml
    └── legal/
        ├── terms.html
        ├── privacy.html
        └── disclaimer.html
```

As more tools are added, each gets its own top-level directory following the same
`index.html` + `robots.txt` + `sitemap.xml` + `legal/` shape as `leveling-block-calculator/`, and a
card on the root `index.html`.

## RV Leveling Block Calculator

A calculator that turns two bubble-level readings (roll + pitch) into a
blocks-per-tire count, using a vehicle's wheelbase and track width. It ships with:

- A **vehicle lookup**: type a make (autocomplete), then a model (autocomplete,
  scoped to that make), then pick a year from a dropdown; if that make/model/year
  has more than one distinct wheel geometry (e.g., different bed lengths, or
  single- vs. dual-rear-wheel trucks), a configuration dropdown appears before
  the wheelbase/track fields auto-fill.
- Manual override fields (wheelbase, track width, block height) that are always
  editable, for any rig not in the cache.
- `vehicles-data.js` — the starter dataset. **Every entry is a best-effort
  estimate from public spec sheets, not independently verified.** Correct or
  expand it as you research specific vehicles; the file's header comment
  documents the schema.

## Monetization

Ad and affiliate placements are wired in as **placeholders**, ready to activate
once accounts exist:

- `.ad-slot` divs in `leveling-block-calculator/index.html` — see the CSS comment above `.ad-slot`
  for the exact steps to swap in a real Google AdSense unit.
- `ads.txt` at the repo root needs your real `pub-` ID before AdSense will serve
  ads on this domain.
- The "Gear that pairs with this calculator" section has three Amazon Associates
  link placeholders (`PLACEHOLDER-ASIN-*`, `YOUR-TAG-20`) — swap in real ASINs
  and your Associates tag once approved.

## Deploying

GitHub Pages, Cloudflare Pages, Netlify, or Vercel all work — point the host at
the repo root. For a custom domain on GitHub Pages, add a `CNAME` file at the
repo root containing the domain, and set the corresponding DNS record.

## Related

- **Source of the original leveling calculator:** `sienna_camper` repo
  (`leveling_calculator.html`), built for a single Toyota Sienna camper van
  conversion. The RV Leveling Block Calculator generalizes that tool for any four-wheeled RV.
