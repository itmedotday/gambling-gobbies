import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/8bit/button';
import { Label } from '@/components/ui/8bit/label';
import { Switch } from '@/components/ui/8bit/switch';

/** Compact sun/moon toggle for the header. */
export function ThemeToggleIcon() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      data-testid="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

/** Settings panel row for dark mode. */
export function ThemeToggleSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="dark-mode">Dark mode</Label>
        <span className="text-xs text-muted-foreground">Switch between light and dark monochrome themes.</span>
      </div>
      <Switch
        id="dark-mode"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        data-testid="setting-dark-mode"
      />
    </div>
  );
}
