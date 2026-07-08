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
  gameTitleClass: string;
  sectionLabelClass: string;
  bodyTextClass: string;
  gamesGridClass: string;
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

  return {
    style,
    isNeon,
    isEmerald,
    isMarquee,
    isMono,
    pageClass: 'flex flex-col',
    sectionGap: isMarquee ? 'gap-8 sm:gap-10' : isEmerald ? 'gap-10' : 'gap-12',
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
