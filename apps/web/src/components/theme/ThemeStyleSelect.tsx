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
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="theme-style">Theme style</Label>
        <span className="text-xs text-muted-foreground">{active.description}</span>
      </div>
      <Select value={themeStyle} onValueChange={(v) => setThemeStyle(v as ThemeStyle)}>
        <SelectTrigger id="theme-style" className="w-full sm:w-56" data-testid="setting-theme-style">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
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

