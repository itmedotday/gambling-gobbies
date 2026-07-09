## Learned User Preferences

- Complete tasks end-to-end and verify fixes before reporting done.
- Deploy and finish outstanding work without asking; only stop when blocked on secrets.
- Use Vercel MCP or CLI for env vars and production deploys.
- Use Chrome DevTools MCP for visual verification when requested.
- UI theme is black and white with a light/dark mode toggle, not green.
- Target near-final product quality, not a minimal MVP.
- Support switching between 8-bit CN wrappers and base shadcn components via a feature flag.
- When the user says "continue", keep executing the current plan without restarting.

## Learned Workspace Facts

- Monorepo with `apps/web` (React/Vite) and `apps/server` (Colyseus); npm workspaces `@gobbies/web` and `@gobbies/server`.
- Web UI uses 8bitcn wrappers in `components/ui/8bit` over base shadcn in `components/ui`.
- Game visuals use Phaser JS; RNG consoles come from `@itme.day/rng-react-components`.
- Provably-fair engine (`useConsoleBet`) is the source of truth; RNG components are driven visuals only.
- Server runs Colyseus 0.17; web client uses `@colyseus/sdk` 0.17 (not deprecated `colyseus.js` 0.16).
- Production web: https://gambling-gobbies.vercel.app; deploy via Vercel CLI (GitHub connect blocked by org/team mismatch).
- Server deploys on Render via `Dockerfile.server`; runtime uses `tsx`; server `build` is a no-op in production.
- Do not import `@itme.day/rng-react-components` global `style.css` (resets body/theme); scan package for Tailwind classes instead.
- Versus mode: timed sessions with a profit graph; highest balance when the timer ends wins.

## Design Context

Strategic and visual defaults for agents live in the repo root:

- [PRODUCT.md](PRODUCT.md) — register, users, brand personality, anti-references, principles
- [DESIGN.md](DESIGN.md) — theme styles, tokens, typography, component patterns

Default register: **product** (gameplay UI). Baseline theme: **mono** B/W; alternate skins: neon tavern, emerald den, high roller marquee. Import UI from `@/components/kit`.
