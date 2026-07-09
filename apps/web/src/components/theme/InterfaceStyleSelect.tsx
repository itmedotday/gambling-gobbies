import { Label } from '@/components/kit';
import { SettingsPicker } from '@/components/theme/SettingsPicker';
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
  const active = SKIN_OPTIONS.find((o) => o.value === uiSkin) ?? SKIN_OPTIONS[0]!;

  return (
    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-start">
      <div className="flex min-w-0 flex-col gap-1">
        <Label htmlFor="interface-style">Interface style</Label>
        <span className="min-h-10 text-xs leading-relaxed text-muted-foreground">
          {active.description}
        </span>
      </div>
      <SettingsPicker
        id="interface-style"
        value={uiSkin}
        onValueChange={setUiSkin}
        options={SKIN_OPTIONS}
        data-testid="setting-ui-skin"
      />
    </div>
  );
}
