# Gambling Gobbies

A goblin-themed, provably-fair virtual casino. Play solo against the house or race a friend in timed Versus mode — whoever's richer when the timer hits zero wins.

> Virtual currency ("Gobbie Gold") only. No real money.

## Workspaces

| Path | Purpose |
| --- | --- |
| `apps/web` | Vite + React 19 + Phaser 4 + 8bitcn/ui client |
| `apps/server` | Colyseus game server + Express REST API |
| `packages/engine` | Pure TS game math + provably-fair RNG (shared client/server) |
| `packages/shared` | Types and message contracts |

## Development

```bash
npm install
npm run dev          # web client
npm run dev:server   # game server
npm run test         # unit tests
npm run lint
```

Requires Node >= 22.

## Credits

Pixel art characters by [SpriteCook](https://spritecook.com) — see `apps/web/public/assets/sprites/LICENSE.txt`.
