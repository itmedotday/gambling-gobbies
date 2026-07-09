import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Volume2, VolumeX, Settings, LineChart } from 'lucide-react';
import { Button } from '@/components/kit';
import { useSettingsStore, useThemeStyle } from '@/stores/settingsStore';
import { WalletHud } from './WalletHud';
import { useAudioUnlock } from '@/audio/useAudioUnlock';
import { ThemeToggleIcon } from '@/components/theme/ThemeToggle';
import { LiveStatsPanel } from '@/components/stats/LiveStatsPanel';
import { MarqueeTicker } from '@/components/theme/MarqueeTicker';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { to: '/lobby', label: 'Lobby' },
  { to: '/versus', label: 'Versus' },
  { to: '/leaderboard', label: 'Ranks' },
] as const;

export function SiteLayout() {
  useAudioUnlock();
  const muted = useSettingsStore((s) => s.muted);
  const setMuted = useSettingsStore((s) => s.setMuted);
  const themeStyle = useThemeStyle();
  const [statsOpen, setStatsOpen] = useState(false);
  const isMarquee = themeStyle === 'highRollerMarquee';
  const isEmerald = themeStyle === 'emeraldDen';

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col overflow-x-hidden bg-background [background-image:var(--gg-shell-bg)]',
        isMarquee && 'gg-crt-shell relative',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-[var(--gg-header-bg)] backdrop-blur-md">
        <div className="mx-auto grid min-h-14 w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2 px-[var(--gg-page-px)] py-2 sm:min-h-12 sm:grid-cols-[auto_1fr_auto] sm:gap-6 sm:py-3.5">
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
            <span
              className={cn(
                'hidden min-h-[2.25rem] min-w-[5.5rem] text-[11px] leading-snug text-foreground drop-shadow-[0_0_10px_var(--gg-logo-glow)] sm:block',
                isMarquee
                  ? 'gg-marquee-display text-sm tracking-wide'
                  : isEmerald
                    ? 'gg-font-fantasy text-sm'
                    : 'retro',
              )}
              translate="no"
            >
              Gambling
              <br />
              Gobbies
            </span>
          </Link>
          <nav className="col-span-3 flex items-center gap-1 sm:col-span-1 sm:gap-2" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.to}
                variant="ghost"
                size="sm"
                className={cn(
                  'h-auto px-[13px] py-2 text-[11px] text-muted-foreground hover:text-primary',
                  isMarquee ? 'gg-marquee-display text-xs' : isEmerald ? 'gg-font-fantasy text-sm' : 'retro',
                )}
                asChild
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? cn(
                          'text-primary [box-shadow:var(--gg-nav-shadow)]',
                          isEmerald
                            ? 'bg-primary text-primary-foreground ring-0'
                            : 'bg-primary/15 ring-1 ring-primary/50',
                        )
                      : ''
                  }
                >
                  {item.label}
                </NavLink>
              </Button>
            ))}
          </nav>
          <div className="col-start-3 row-start-1 flex items-center gap-1.5 sm:gap-3">
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
      <div className="gg-ticker-slot">{isMarquee ? <MarqueeTicker /> : null}</div>
      <main id="main" className="gg-page mx-auto w-full max-w-6xl flex-1">
        <Outlet />
      </main>
      <LiveStatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} />
      <footer className="border-t border-border/80 bg-[var(--gg-header-bg)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-[var(--gg-page-px)] py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Gambling Gobbies — virtual Gobbie Gold only. No real money.</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link to="/fairness" className="underline hover:text-foreground">
              Provably fair
            </Link>
            <span aria-hidden>·</span>
            <span>
              Pixel art by{' '}
              <a href="https://spritecook.com" className="underline hover:text-foreground">
                SpriteCook
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
