import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { ThemeSync } from './ThemeSync';
import { UiSkinSync } from './UiSkinSync';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem storageKey="gobbies-theme">
      <ThemeSync />
      <UiSkinSync />
      {children}
    </NextThemesProvider>
  );
}
