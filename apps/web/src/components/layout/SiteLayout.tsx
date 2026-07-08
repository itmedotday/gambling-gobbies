import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Volume2, VolumeX, Settings, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/8bit/button';
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
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b-4 border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex min-h-14 w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2 sm:h-16 sm:flex-nowrap sm:gap-4 sm:px-4 sm:py-0">
          <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Gambling Gobbies home">
            <img
              src="/assets/sprites/royal-goblin/idle.webp"
              alt=""
              className="pixelated h-9 w-9"
            />
            <span className="retro hidden text-[11px] leading-tight text-primary sm:block">
              Gambling
              <br />
              Gobbies
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {({ isActive }) => (
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    size="sm"
                    className="text-[10px] sm:text-xs"
                    asChild
                  >
                    <span>{item.label}</span>
                  </Button>
                )}
              </NavLink>
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
              <LineChart className="size-4" />
            </Button>
            <ThemeToggleIcon />
            <Button
              variant="ghost"
              size="icon"
              aria-label={muted ? 'Unmute sound' : 'Mute sound'}
              onClick={() => setMuted(!muted)}
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </Button>
            <NavLink to="/settings" aria-label="Settings">
              <Button variant="ghost" size="icon" asChild>
                <span>
                  <Settings className="size-4" />
                </span>
              </Button>
            </NavLink>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-3 py-6 sm:px-4 sm:py-8">
        <Outlet />
      </main>
      <LiveStatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} />
      <footer className="border-t-4 border-border bg-card">
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
