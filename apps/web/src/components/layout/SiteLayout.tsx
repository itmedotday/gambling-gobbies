import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Volume2, VolumeX, Settings, LineChart } from 'lucide-react';
import { Button } from '@/components/kit';
import { useSettingsStore } from '@/stores/settingsStore';
import { WalletHud } from './WalletHud';
import { useAudioUnlock } from '@/audio/useAudioUnlock';
import { ThemeToggleIcon } from '@/components/theme/ThemeToggle';
import { LiveStatsPanel } from '@/components/stats/LiveStatsPanel';

const NAV_ITEMS = [
  { to: '/lobby', label: 'Lobby' },
  { to: '/versus', label: 'Versus' },
  { to: '/leaderboard', label: 'Ranks' },
] as const;

export function SiteLayout() {
  useAudioUnlock();
  const muted = useSettingsStore((s) => s.muted);
  const setMuted = useSettingsStore((s) => s.setMuted);
  const [statsOpen, setStatsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background [background-image:var(--gg-shell-bg)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-[rgba(24,24,27,.6)] backdrop-blur-md">
        <div className="mx-auto flex min-h-14 w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2 sm:min-h-12 sm:flex-nowrap sm:gap-6 sm:px-10 sm:py-3.5">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="Gambling Gobbies home"
          >
            <img
              src="/assets/sprites/royal-goblin/idle.webp"
              alt=""
              width={36}
              height={36}
              className="pixelated h-9 w-9 drop-shadow-[0_0_8px_var(--gg-logo-glow)]"
            />
            <span className="retro hidden text-[9px] leading-snug text-foreground drop-shadow-[0_0_10px_var(--gg-logo-glow)] sm:block">
              Gambling
              <br />
              Gobbies
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.to}
                variant="ghost"
                size="sm"
                className="retro h-auto px-[13px] py-2 text-[9px] text-muted-foreground hover:text-primary"
                asChild
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-primary/15 text-primary ring-1 ring-primary/50 [box-shadow:var(--gg-nav-shadow)]'
                      : ''
                  }
                >
                  {item.label}
                </NavLink>
              </Button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
            <WalletHud />
            <Button
              variant={statsOpen ? 'secondary' : 'ghost'}
              size="icon"
              aria-label={statsOpen ? 'Hide live stats' : 'Show live stats'}
              aria-pressed={statsOpen}
              onClick={() => setStatsOpen((v) => !v)}
            >
              <LineChart className="size-4" aria-hidden="true" />
            </Button>
            <ThemeToggleIcon />
            <Button
              variant="ghost"
              size="icon"
              aria-label={muted ? 'Unmute sound' : 'Mute sound'}
              onClick={() => setMuted(!muted)}
            >
              {muted ? (
                <VolumeX className="size-4" aria-hidden="true" />
              ) : (
                <Volume2 className="size-4" aria-hidden="true" />
              )}
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <NavLink to="/settings" aria-label="Settings">
                <Settings className="size-4" aria-hidden="true" />
              </NavLink>
            </Button>
          </div>
        </div>
      </header>
      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-3 py-6 sm:px-4 sm:py-8">
        <Outlet />
      </main>
      <LiveStatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} />
      <footer className="border-t border-border/80 bg-background/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Gambling Gobbies — virtual Gobbie Gold only. No real money.</span>
          <span>
            Pixel art by{' '}
            <a href="https://spritecook.com" className="underline hover:text-foreground">
              SpriteCook
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
