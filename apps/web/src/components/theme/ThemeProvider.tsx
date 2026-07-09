import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { ThemeSync } from './ThemeSync';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem storageKey="gobbies-theme">
      <ThemeSync />
      {children}
    </NextThemesProvider>
  );
}
