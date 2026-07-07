# Deployment

## Web — Vercel (live)

**URL:** https://gambling-gobbies.vercel.app

Deployed via Vercel CLI (`vercel deploy --prod`). Git auto-deploy requires installing the [Vercel GitHub App](https://github.com/apps/vercel) on the `itmedotday` org (the personal-team link failed because the repo lives under a different GitHub account/org).

### Vercel environment variables

| Variable | Production / Preview | Development |
|----------|---------------------|-------------|
| `VITE_SERVER_URL` | Render server HTTPS URL | `http://localhost:2567` |
| `VITE_WS_URL` | Render server WSS URL | `ws://localhost:2567` |

Manage with CLI:

```bash
vercel env ls
echo "https://YOUR-SERVER.onrender.com" | vercel env add VITE_SERVER_URL production --force
vercel deploy --prod
```

### Optional GitHub Actions deploy

Set repository **variable** `ENABLE_VERCEL_DEPLOY=true` and **secrets**:

- `VERCEL_TOKEN` — from https://vercel.com/account/tokens
- `VERCEL_ORG_ID` — `team_B5Yj9x4Fopin3jQSmC1UkU64` (from `.vercel/project.json`)
- `VERCEL_PROJECT_ID` — `prj_VK1do3AVnhA6sFrDVwbXAnK8xuBi`

Workflow: `.github/workflows/deploy.yml`

---

## Server — Render (Colyseus + REST API)

The game server needs WebSockets and a long-lived process. Deploy with Render:

### One-click (recommended)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/itmedotday/gambling-gobbies)

Or: [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint** → connect `itmedotday/gambling-gobbies` → apply `render.yaml`.

Uses `Dockerfile.server` with a 1 GB persistent disk at `apps/server/.data` for the dev store.

### After Render deploy

1. Copy the service URL (e.g. `https://gambling-gobbies-server.onrender.com`).
2. Confirm health: `curl https://YOUR-SERVICE.onrender.com/api/health`
3. Update Vercel env vars (see above) and redeploy web.
4. Verify `CORS_ORIGIN` on Render is `https://gambling-gobbies.vercel.app`.

### Local server

```bash
npm run dev:server
curl http://localhost:2567/api/health
```

---

## What works without the server

- All **solo games** (client-side wallet + provably-fair engine)
- **Theme**, **settings**, **Phaser** scenes

## Requires the server

- **Versus** mode (Colyseus)
- **Profile**, **leaderboard**, server-verified bets

---

## Production smoke

```bash
E2E_BASE_URL=https://gambling-gobbies.vercel.app npm run e2e -w apps/web
```

CI runs this on every push to `main` (`.github/workflows/deploy.yml`).
