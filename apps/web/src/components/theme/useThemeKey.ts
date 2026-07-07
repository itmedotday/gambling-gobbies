import { useTheme } from 'next-themes';

/** Resolved theme string for Phaser remount keys. */
export function useThemeKey(): string {
  const { resolvedTheme } = useTheme();
  return resolvedTheme ?? 'dark';
}
