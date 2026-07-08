# itme.day — building with this design system

itme.day is a **dark-first** design system with a playful goblin/tabletop-RNG
personality (mascot "Gobby", D20 dice, tiny random-number games). Components are
the app's real shipped React components, styled with Tailwind utility classes
that resolve to CSS custom-property **tokens**.

## Setup

- **Load `styles.css`.** It `@import`s the fonts and `_ds_bundle.css` (tokens +
  component styles). Nothing renders correctly without it.
- **Dark by default.** The palette tokens live on `:root` and are dark. A
  `.light` class on a wrapping element (the app puts it on `<html>`) flips every
  token to the light palette. `ThemeToggle` toggles that class. Put your screens
  on `var(--background)` so components sit on the intended surface.
- **Fonts.** `font-sans` / `font-mono` are Geist (the host app provides the
  `--font-geist-*` vars; a system fallback is used otherwise). Two brand faces
  ship as `@font-face` and are applied by components directly: **RuneScape UF**
  (goblin/Text-FX display) and **OptimusPrinceps** (fantasy titling).
- **`GobbyMascot` needs `/gobby.svg`.** It loads the goblin base art from the
  site root, so `gobby.svg` must be served (as `image/svg+xml`) at `/gobby.svg`.
  It ships alongside this bundle.

## Styling idiom — tokens first

The **reliable palette is the CSS variables**, all defined on `:root` (and
`.light`). Prefer these — via a shipped utility class where one exists, or
`var(--token)` inline for layout glue:

- Surfaces: `--background`, `--foreground`, `--card`, `--card-foreground`,
  `--muted`, `--muted-foreground`, `--accent`, `--secondary`
- Actions: `--primary` / `--primary-foreground` (near-white on dark),
  `--border`, `--input`, `--ring`, `--radius`
- Brand — Gobby: `--gobby-skin`, `--gobby-skin-deep`, `--gobby-cream`,
  `--gobby-ring`
- Brand — RNG: `--rng-bg`, `--rng-surface`, `--rng-surface-2`, `--rng-indigo`,
  `--rng-violet`, `--rng-emerald`, `--rng-rose`

**Important — the shipped stylesheet is a _purged_ Tailwind build:** it contains
only the utility classes itme.day itself uses. Verified-present classes you can
rely on include `bg-background`, `bg-card`, `bg-primary`, `bg-secondary`,
`bg-muted`, `bg-gobby-skin`, `text-muted-foreground`, `text-primary-foreground`,
`text-gobby-skin`, `text-rng-emerald`, `border-border`, `border-input`,
`rounded-lg` / `rounded-md`, `font-sans`, `font-mono`. Arbitrary Tailwind
utilities NOT already used by the app (e.g. `text-foreground`, `ring-ring`,
`font-fantasy`) are **absent** — reach for the matching `var(--token)` instead of
assuming a utility exists.

## Where the truth lives

Read before styling: `styles.css` → `_ds_bundle.css` (every shipped class and
token) and each component's `.d.ts` (props) + `.prompt.md` (usage).

## Idiomatic example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from "itme-day";

<div style={{ background: "var(--background)", padding: 24 }}>
  <Card>
    <CardHeader>
      <CardTitle>Gobby's Tavern</CardTitle>
      <CardDescription>Roll well, drink free.</CardDescription>
    </CardHeader>
    <CardContent>
      <Button>Roll the dice</Button>
      <span style={{ marginLeft: 12, color: "var(--gobby-skin)" }}>Nat 20!</span>
    </CardContent>
  </Card>
</div>
```

# ItmeDayDS (itme-day@0.1.0)

This design system is the published itme-day React library, bundled as a single
browser global. All 7 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.ItmeDayDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.ItmeDayDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Button } = window.ItmeDayDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Button />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<DsThemeSurface>{children}</DsThemeSurface>
```

## Tokens

110 CSS custom properties from itme-day. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (8): `--rng-surface`, `--rng-surface-2`, `--tw-border-spacing-x`, …
- **spacing** (2): `--tw-ring-inset`, `--tw-space-y-reverse`
- **typography** (1): `--font-titling`
- **radius** (1): `--radius`
- **shadow** (5): `--rng-shadow-card`, `--tw-ring-offset-shadow`, `--tw-ring-shadow`, …
- **other** (93): `--background`, `--foreground`, `--card`, …

## Components

### general
- `Button`
- `Card`
- `SlidingTabTrigger`
- `Tabs`
- `ThemeToggle`

### gobby
- `GobbyMascot`

### text-fx
- `TextFxPanel`
