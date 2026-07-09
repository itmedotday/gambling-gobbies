# Product

## Register

product

## Users

Casual players who want a goblin-themed virtual casino without real money risk. They play solo against the house or race a friend in timed Versus sessions. Context is recreational: short sessions on desktop or mobile, often with sound on, switching between games quickly. They care about fairness (provably-fair seeds), readable balances, and clear bet outcomes.

## Product Purpose

Gambling Gobbies is a provably-fair virtual casino using Gobbie Gold only. Solo mode offers six house-edge games (coin flip, dice, wheel, d20, crash, mines). Versus mode is a timed two-player profit race over Colyseus. Success means players trust outcomes, understand their wallet state (including debt and loans), and can navigate lobby → game → history without friction across theme styles.

## Brand Personality

Playful, mischievous, slightly greedy (the goblins take a 1% edge). Voice is informal and direct, not corporate or preachy. Three words: **goblin**, **neon**, **honest** (virtual gold, verifiable RNG). Emotional goal: low-stakes thrill and smug victory, never anxiety about real money.

## Anti-references

- Generic fintech/SaaS dashboards (navy gradients, hero metrics, empty card grids).
- Real-money casino urgency patterns (KYC funnels, deposit CTAs, panic red).
- AI slop tells: gradient text on headings, numbered section eyebrows on every block, cream/sand body backgrounds as default warmth.
- Green-as-primary UI (user preference: monochrome black/white is the baseline; green is a theme accent in Emerald Den only, not the default identity).
- Inconsistent component vocabulary between Settings and game surfaces (always route through `@/components/kit`).

## Design Principles

1. **Gameplay first** — UI disappears into the bet loop; chrome supports balance, bet amount, and outcome, not the reverse.
2. **One source of truth** — Solo money moves only through `walletStore.settle()`; visuals and RNG components follow the provably-fair engine.
3. **Theme is skin, not logic** — Four theme styles change typography and glow; behavior and affordances stay identical.
4. **Honest virtual economy** — Debt, loans, bailouts, and daily bonus rules are visible before the player is stuck; errors say what to do next.
5. **Earned neon** — Glow and CRT effects belong to tavern/marquee fantasy; Monochrome mode stays flat, high-contrast, and readable.

## Accessibility & Inclusion

- Target WCAG 2.1 AA for text contrast on all theme styles; mono mode is the contrast reference.
- Respect `prefers-reduced-motion` and the in-app **Reduce motion** toggle (marquee ticker, Phaser loops, screen shake).
- Keyboard: skip link to main, labelled forms, destructive actions confirmed before irreversible Versus forfeit.
- `translate="no"` on brand name lockups; tabular nums for balances and leaderboards.
- Color is never the only state signal (debt uses label + destructive border, not red alone).
