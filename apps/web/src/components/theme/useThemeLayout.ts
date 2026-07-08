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

  return {
    style,
    isNeon,
    isEmerald,
    isMarquee,
    isMono,
    pageClass: 'gg-page flex flex-col',
    sectionGap: isMarquee ? 'gap-10 sm:gap-12' : isEmerald ? 'gap-12' : 'gap-14',
    heroTitleClass: isMarquee
      ? 'gg-marquee-title text-[clamp(2rem,5vw,3.25rem)] leading-none'
      : isEmerald
        ? 'gg-hero-title gg-font-fantasy text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-foreground'
        : 'gg-hero-title retro text-[clamp(1.5rem,4vw,2.125rem)] leading-[1.55] text-foreground',
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
