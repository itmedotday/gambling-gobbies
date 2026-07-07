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

## Games

| Game | Mode | Notes |
| --- | --- | --- |
| Coin Flip | Solo | Phaser goblin dealer animation |
| Dice Slider | Solo | Roll over/under target |
| Wheel | Solo | Adjustable win zone |
| D20 Roll | Solo | DC check, nat 20/1 bonuses |
| Goblin Crash | Solo | Multiplier run with cash-out |
| Goblin Mines | Solo | Grid picks with escalating multiplier |
| Versus | Online | 2-player timed profit race (Colyseus) |

## Development

```bash
npm install
cp .env.example .env          # optional; defaults work for local dev

npm run dev                   # web → http://localhost:5173
npm run dev:server            # API + Colyseus → http://localhost:2567

npm run lint
npm run typecheck
npm run test                  # unit tests (engine + shared)
npm run build
npm run e2e -w apps/web       # Playwright smoke tests
E2E_BASE_URL=https://gambling-gobbies.vercel.app npm run e2e -w apps/web  # production smoke
```

Requires Node >= 22.

### Appearance

Monochrome black-and-white UI with **light/dark toggle** in the header or Settings → Appearance. Phaser canvases remount on theme change to stay in sync.

### Environment

See [`.env.example`](.env.example). When `DATABASE_URL` is unset the server uses a file-backed dev store at `apps/server/.data/dev-store.json`.

## Architecture

1. **One-way deps** — apps import packages; `engine` is pure TypeScript.
2. **Money** — solo bets settle only through `walletStore.settle()`; versus bets through `VersusRoom`.
3. **React ↔ Phaser** — typed `EventBus` only (`apps/web/src/phaser/events.ts`).
4. **Server messages** — discriminated unions with exhaustive switches.
5. **Provably fair** — HMAC seed chain in `packages/engine`; verify on the Fairness page.

## Deployment

### Web (Vercel)

Root [`vercel.json`](vercel.json) builds `apps/web`. Set environment variables:

- `VITE_SERVER_URL` — production API URL
- `VITE_WS_URL` — production WebSocket URL (`wss://…`)

### Server (Railway / any Node host)

```bash
npm run build -w apps/server   # typecheck
npm run start -w apps/server   # PORT from env, default 2567
```

Required env: `TOKEN_SIGNING_SECRET`, `CORS_ORIGIN` (your Vercel URL). Optional `DATABASE_URL` for Postgres; file store used when unset.

See [docs/verification/DEPLOY.md](docs/verification/DEPLOY.md) for release checklist.

**Live:** [gambling-gobbies.vercel.app](https://gambling-gobbies.vercel.app) (web). API server deploys separately via `render.yaml`.

## Credits

Pixel art characters by [SpriteCook](https://spritecook.com) — see `apps/web/public/assets/sprites/LICENSE.txt`.

UI components from [8bitcn](https://www.8bitcn.com/docs).
