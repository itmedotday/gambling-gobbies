import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/kit';
import { type UiSkin, useSettingsStore } from '@/stores/settingsStore';

const SKIN_OPTIONS: { value: UiSkin; label: string; description: string }[] = [
  {
    value: 'eightbit',
    label: '8-bit',
    description: 'Retro pixel borders and Press Start 2P headings.',
  },
  {
    value: 'shadcn',
    label: 'Modern',
    description: 'Clean shadcn/ui components with rounded corners.',
  },
];

/** Settings row for switching between 8-bit and plain shadcn component kits. */
export function InterfaceStyleSelect() {
  const uiSkin = useSettingsStore((s) => s.uiSkin);
  const setUiSkin = useSettingsStore((s) => s.setUiSkin);
  const active =
    SKIN_OPTIONS.find((o) => o.value === uiSkin) ?? SKIN_OPTIONS[0]!;

  return (
    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-start">
      <div className="flex min-w-0 flex-col gap-1">
        <Label htmlFor="interface-style">Interface style</Label>
        <span className="min-h-10 text-xs leading-relaxed text-muted-foreground">{active.description}</span>
      </div>
      <Select value={uiSkin} onValueChange={(v) => setUiSkin(v as UiSkin)}>
        <SelectTrigger id="interface-style" className="h-10 w-full shrink-0" data-testid="setting-ui-skin">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper" sideOffset={4} align="end">
          {SKIN_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
