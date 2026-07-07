# Server deployment (Render)

The Colyseus game server cannot run on Vercel (WebSockets + long-lived process). Deploy it to Render:

1. Open [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint**
2. Connect `itmedotday/gambling-gobbies` and apply `render.yaml`
3. After deploy, copy the service URL (e.g. `https://gambling-gobbies-server.onrender.com`)
4. Update Vercel env vars:
   ```bash
   echo "https://YOUR-SERVER.onrender.com" | vercel env add VITE_SERVER_URL production --force
   echo "wss://YOUR-SERVER.onrender.com" | vercel env add VITE_WS_URL production --force
   vercel deploy --prod
   ```
5. In Render, set `CORS_ORIGIN` to `https://gambling-gobbies.vercel.app`

Solo games work without the server (client-side wallet). Versus, profile, and leaderboard require the server.
