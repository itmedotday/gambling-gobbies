# M7 exit gate — Phaser classic games + polish

Run from repo root:

```bash
npm run lint && npm run typecheck && npm run test && npm run build
npm run e2e -w apps/web
```

## Manual walkthrough

1. **Landing** — mascot Phaser canvas loads; poke easter egg works.
2. **Lobby** — all 6 game cards visible; wallet HUD shows balance.
3. **Coin Flip** — wait for scene ready (`…` → `Flip`), place bet, animation plays, ledger updates, SFX (if unmuted).
4. **Dice / Wheel / D20** — slider/controls work; animation + ledger on bet.
5. **Crash** — start run, multiplier ticks, cash-out or bust, history badges update.
6. **Mines** — start, pick tiles, cash-out or bomb reveal.
7. **Settings** — mute, volume sliders, reduced motion persist after reload.
8. **Console** — zero errors on each page navigation.

## Automated coverage

| Check | Command |
| --- | --- |
| Engine math | `npm run test` |
| E2E smoke | `npm run e2e -w apps/web` |
| CI | `.github/workflows/ci.yml` |

## Tag (after commit)

```bash
git tag -a m7 -m "M7: Phaser classic games, scene-ready gating, SFX, E2E"
```
