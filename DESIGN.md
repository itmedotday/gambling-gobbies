---
name: Gambling Gobbies
description: Goblin-themed virtual casino UI with four theme styles and shadcn/ui components
colors:
  background-dark: "#09090b"
  foreground-dark: "#d4d4d8"
  primary-neon: "#4f46e5"
  primary-neon-dark: "#a5b4fc"
  destructive: "#e11d48"
  destructive-dark: "#fb7185"
  gold: "#ecc24e"
  gold-dark: "#d97706"
  chart-win: "#34d399"
  marquee-rose: "#f43f5e"
  marquee-violet: "#a78bfa"
  emerald-goblin: "#849b49"
  mono-ink: "#0a0a0a"
  mono-paper: "#fafafa"
  border-dark: "#2e2e35"
typography:
  ui-body:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  ui-retro:
    fontFamily: "Press Start 2P, Geist Variable, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  display-marquee:
    fontFamily: "OptimusPrinceps, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 4vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.04em"
  display-fantasy:
    fontFamily: "RuneScape UF, Geist Variable, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
spacing:
  page-px-mobile: "0.75rem"
  page-px-desktop: "2.5rem"
  section-gap: "2.5rem"
  card-gap: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.primary-neon}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "18px 24px"
  card-surface:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.foreground-dark}"
    rounded: "{rounded.sm}"
    padding: "1.5rem"
  badge-wallet:
    backgroundColor: "transparent"
    textColor: "{colors.chart-win}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
---

## Overview

Gambling Gobbies is a **product UI** (tool serving gameplay), not a marketing site. Visual identity is driven by **theme style** (`mono` | `neonTavern` | `emeraldDen` | `highRollerMarquee`) — palette, shell glow, display typography. UI primitives are base **shadcn/ui** via `@/components/kit`.

Default production direction: **Neon Tavern** dark. User baseline preference: **Monochrome** black/white with light/dark toggle. Phaser game canvases and header wallet HUD must stay legible in every combination.

Tokens live in `apps/web/src/index.css`, `apps/web/src/theme/palette.ts`, and `applyThemeAppearance()` (`apps/web/src/theme/applyTheme.ts`). Layout tokens: `--gg-page-px`, `--gg-page-py`, `--gg-section-gap`, `--gg-card-gap`, `--gg-ticker-height`.

## Colors

Four committed palettes (light + dark each) in `palette.ts`. CSS variables `--background`, `--foreground`, `--primary`, `--destructive`, `--gold`, `--chart-1`…`--chart-5` swap per `.theme-*` class on `<html>`.

| Theme style | Role | Notes |
|-------------|------|-------|
| **mono** | Baseline | No shell radial glow; ink on paper; wins use foreground, not green glow |
| **neonTavern** | Default | Indigo/violet primary, subtle multi-radial shell bg |
| **emeraldDen** | Alternate | Goblin green + gold dashed bonus cards; RuneScape UF titles |
| **highRollerMarquee** | Alternate | Rose/violet CRT shell, marquee ticker, OptimusPrinceps titles |

Semantic usage:

- **Primary** — nav active state, links, versus timer progress (non-mono).
- **Destructive** — debt, forfeit, loss copy, loan panels.
- **chart-3 / gold** — positive balance and win highlights (suppress chart-3 glow in mono).
- **Game accents** — per-game gradient buttons via `accentTokens()`; do not leak into chrome.

Avoid gradient text (`background-clip: text`) on new surfaces; existing `.gg-marquee-title` is legacy marquee-only.

## Typography

| Class / hook | Use |
|--------------|-----|
| `retro` + Press Start 2P | 8-bit labels, small caps UI in neon themes |
| Geist Variable | Body, settings, tables, numeric data |
| `gg-font-fantasy` | Emerald Den headings |
| `gg-marquee-display` / `gg-marquee-title` | High Roller Marquee signage |
| `useThemeLayout()` | Shared page titles, section labels, game titles per theme |

Rules:

- `text-wrap: balance` on page `h1` classes.
- `tabular-nums` on all GG amounts, timers, leaderboard values.
- Display letter-spacing ≥ `-0.04em` (marquee titles use `0.04em` positive tracking by design).
- Body prose cap ~65ch (`layout.bodyTextClass`).

## Elevation

Neon themes use **border + tight glow**, not ghost-card (avoid 1px border + 16px+ blur shadow together).

- **NeonCard** — themed border tint per game accent; flat fill.
- **glass-panel** — `color-mix` backgrounds; no decorative glassmorphism stacks.
- **Header** — sticky `z-40`, backdrop blur, theme-tinted opaque bg.
- **Toasts** — sonner default stack above content.

Z-index scale (implicit): sticky header 40, skip link focus 50, modals/dialogs via radix portals, toasts above.

## Components

Import UI from `@/components/kit` only (not `@/components/ui` directly in pages).

| Pattern | Component |
|---------|-----------|
| Page shell | `SiteLayout` — skip link, nav, `WalletHud`, theme toggle |
| Game frame | `GamePageFrame`, `GamePageGrid`, `GameStatsHeader` |
| Economy | `DailyBonusCard`, `BailoutCard`, `DebtLoanControls`, `BetControls` |
| Lobby tiles | `GameLobbyCard` (four theme variants) |
| Settings | `Card` sections + `ThemeStyleSelect`, `ThemeToggleSwitch` |
| Versus | `NeonCard` panels, `ProfitChart`, phase-gated action buttons |

States required on interactive controls: default, hover, focus-visible, disabled, loading/busy where async (create room, place bet).

## Do's and Don'ts

**Do**

- Use `useThemeLayout()` for page titles and section labels on secondary routes.
- Keep mono mode free of colored win glows and radial hero washes.
- Reserve aspect-ratio viewports (`VisualStage`) to prevent CLS on game pages.
- Confirm destructive Versus actions with `AlertDialog`.
- Honor reduced motion for ticker, pulse skeletons, and spinners.

**Don't**

- Import `@itme.day/rng-react-components` global `style.css`.
- Nest cards inside cards on game pages (stage + controls are siblings, not stacked shells).
- Use green as the default brand color (emerald is one theme style only).
- Hide bailout/loan affordances when balance is critical.
- Add gradient text or numbered section eyebrows to new pages.
