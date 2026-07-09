import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/kit';
import { type ThemeStyle, useSettingsStore } from '@/stores/settingsStore';

const OPTIONS: { value: ThemeStyle; label: string; description: string }[] = [
  {
    value: 'neonTavern',
    label: 'Neon Tavern',
    description: 'Indigo/violet glow, color-coded games, neon cards (redesign 2a).',
  },
  {
    value: 'highRollerMarquee',
    label: 'High Roller Marquee',
    description: 'Rose/violet neon signage, marquee bulbs, CRT ticker (redesign 2c).',
  },
  {
    value: 'emeraldDen',
    label: 'Emerald Den',
    description: 'Goblin-green torchlight with gold highlights (redesign 2b).',
  },
  {
    value: 'mono',
    label: 'Monochrome',
    description: 'Minimal black/white palette (classic).',
  },
];

export function ThemeStyleSelect() {
  const themeStyle = useSettingsStore((s) => s.themeStyle);
  const setThemeStyle = useSettingsStore((s) => s.setThemeStyle);
  const active = OPTIONS.find((o) => o.value === themeStyle) ?? OPTIONS[0]!;

  return (
    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-start">
      <div className="flex min-w-0 flex-col gap-1">
        <Label htmlFor="theme-style">Theme style</Label>
        <span className="min-h-10 text-xs leading-relaxed text-muted-foreground">{active.description}</span>
      </div>
      <Select value={themeStyle} onValueChange={(v) => setThemeStyle(v as ThemeStyle)}>
        <div className="relative w-full shrink-0">
          <SelectTrigger id="theme-style" className="h-10 w-full" data-testid="setting-theme-style">
            <SelectValue />
          </SelectTrigger>
        </div>
        <SelectContent position="popper" sideOffset={4} align="end">
          {OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

