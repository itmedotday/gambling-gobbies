import type { CSSProperties } from 'react';
import { useThemeStyle, type ThemeStyle } from '@/stores/settingsStore';

export interface ThemeLayout {
  style: ThemeStyle;
  isNeon: boolean;
  isEmerald: boolean;
  isMarquee: boolean;
  isMono: boolean;
  pageClass: string;
  sectionGap: string;
  heroTitleClass: string;
  pageTitleClass: string;
  gameTitleClass: string;
  sectionLabelClass: string;
  bodyTextClass: string;
  gamesGridClass: string;
  pageGlowStyle: CSSProperties | undefined;
}

/** Shared spacing + typography classes per theme style. */
export function useThemeLayout(): ThemeLayout {
  const style = useThemeStyle();
  const isNeon = style === 'neonTavern';
  const isEmerald = style === 'emeraldDen';
  const isMarquee = style === 'highRollerMarquee';
  const isMono = style === 'mono';

  const gameTitleClass = isMarquee
    ? 'gg-marquee-display text-[clamp(1.25rem,3vw,1.75rem)] leading-tight text-balance'
    : isEmerald
      ? 'gg-font-fantasy text-[clamp(1.25rem,3vw,1.75rem)] leading-tight text-balance'
      : isMono
        ? 'text-lg font-semibold leading-tight text-balance'
        : 'retro text-[clamp(0.8125rem,2vw,1.0625rem)] leading-snug text-balance';

  const sectionLabelClass = isMarquee
    ? 'gg-marquee-display text-sm tracking-wide'
    : isEmerald
      ? 'gg-font-fantasy text-base'
      : isMono
        ? 'text-xs font-medium uppercase tracking-wide'
        : 'retro text-[10px]';

  const pageTitleClass = isMarquee
    ? 'gg-marquee-display text-2xl text-[#fda4af] [text-shadow:0_0_14px_rgba(244,63,94,.7)] sm:text-3xl'
    : isEmerald
      ? 'gg-font-fantasy text-2xl text-foreground [text-shadow:0_0_14px_rgba(132,155,73,.6)] sm:text-3xl'
      : isMono
        ? 'text-xl font-semibold text-foreground sm:text-2xl'
        : 'gg-hero-title retro text-xl text-foreground';

  const pageGlowStyle: CSSProperties | undefined = isMono
    ? undefined
    : isMarquee
      ? {
          backgroundImage:
            'radial-gradient(at 50% 0%, rgba(244,63,94,.12) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(139,92,246,.08) 0, transparent 50%)',
        }
      : isEmerald
        ? {
            backgroundImage: 'radial-gradient(at 50% 0%, rgba(132,155,73,.14) 0, transparent 50%)',
          }
        : {
            backgroundImage: 'radial-gradient(at 50% 0%, rgba(99,102,241,.16) 0, transparent 50%)',
          };

  return {
    style,
    isNeon,
    isEmerald,
    isMarquee,
    isMono,
    pageClass: 'flex flex-col',
    sectionGap: isMarquee ? 'gap-8 sm:gap-10' : isEmerald ? 'gap-10' : 'gap-12',
    pageTitleClass,
    pageGlowStyle,
    heroTitleClass: isMarquee
      ? 'gg-marquee-title text-[clamp(2rem,5vw,3.25rem)] leading-none text-balance'
      : isEmerald
        ? 'gg-hero-title gg-font-fantasy text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-foreground text-balance'
        : 'gg-hero-title retro text-[clamp(1.5rem,4vw,2.125rem)] leading-[1.55] text-foreground text-balance',
    gameTitleClass,
    sectionLabelClass,
    bodyTextClass: isEmerald
      ? 'max-w-[520px] text-base leading-[1.65] text-muted-foreground'
      : 'max-w-[430px] text-base leading-relaxed text-muted-foreground',
    gamesGridClass: isMarquee
      ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
      : isEmerald
        ? 'grid grid-cols-1 gap-3.5 sm:grid-cols-2'
        : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3',
  };
}
