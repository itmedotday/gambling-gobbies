# Milestone verification gates

Each milestone should pass automated checks before tagging:

```bash
npm run lint && npm run typecheck && npm run test && npm run build
npm run e2e -w apps/web   # from M7 onward
```

| Tag | Scope | Checklist |
| --- | --- | --- |
| `m1` | UI shell, mascot, lobby | [M1-GATE.md](./M1-GATE.md) |
| `m2` | Engine + wallet | Engine tests green, wallet HUD |
| `m3` | Classic game shells | 4 games bet + ledger |
| `m4` | Crash + Mines | Phaser scenes, cash-out flows |
| `m5` | Server + fairness | Guest auth, `/api` smoke |
| `m6` | Versus | 2-tab create/join walkthrough |
| `m7` | Phaser classics + polish | [M7-GATE.md](./M7-GATE.md) |
| `v1.0.0` | Production ship | Deploy smoke, prod env vars |

## Tag commands (after commit on main)

```bash
git tag -a m7 -m "M7: Phaser classic games, SFX, E2E"
git push origin m7
```
