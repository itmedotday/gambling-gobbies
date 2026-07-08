import { Card, CardContent, CardHeader, CardTitle, Label, Slider, Switch } from '@/components/kit';
import { useSettingsStore } from '@/stores/settingsStore';
import { ThemeToggleSwitch } from '@/components/theme/ThemeToggle';
import { InterfaceStyleSelect } from '@/components/theme/InterfaceStyleSelect';
import { ThemeStyleSelect } from '@/components/theme/ThemeStyleSelect';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const settings = useSettingsStore();
  const layout = useThemeLayout();

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
      <h1 className={cn(layout.pageTitleClass, 'text-lg sm:text-xl')}>Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle className={cn(layout.sectionLabelClass, 'text-foreground')}>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <InterfaceStyleSelect />
          <ThemeStyleSelect />
          <ThemeToggleSwitch />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className={cn(layout.sectionLabelClass, 'text-foreground')}>Audio</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="muted">Mute all sound</Label>
            <Switch
              id="muted"
              checked={settings.muted}
              onCheckedChange={settings.setMuted}
              data-testid="setting-muted"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="music-volume">Music volume</Label>
            <Slider
              id="music-volume"
              min={0}
              max={100}
              step={5}
              value={[Math.round(settings.musicVolume * 100)]}
              onValueChange={([v]) => settings.setMusicVolume((v ?? 50) / 100)}
              disabled={settings.muted}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="sfx-volume">Effects volume</Label>
            <Slider
              id="sfx-volume"
              min={0}
              max={100}
              step={5}
              value={[Math.round(settings.sfxVolume * 100)]}
              onValueChange={([v]) => settings.setSfxVolume((v ?? 80) / 100)}
              disabled={settings.muted}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className={cn(layout.sectionLabelClass, 'text-foreground')}>Accessibility</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="reduced-motion">Reduce motion</Label>
              <span className="text-xs text-muted-foreground">
                Disables screen shake, particle effects, marquee ticker scroll, and Phaser mascot
                loops.
              </span>
            </div>
            <Switch
              id="reduced-motion"
              checked={settings.reducedMotion}
              onCheckedChange={settings.setReducedMotion}
              data-testid="setting-reduced-motion"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className={cn(layout.sectionLabelClass, 'text-foreground')}>Credits</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span>
            Pixel art characters by{' '}
            <a href="https://spritecook.com" className="underline hover:text-foreground">
              SpriteCook
            </a>{' '}
            (see bundled license).
          </span>
          <span>
            UI components by{' '}
            <a href="https://www.8bitcn.com" className="underline hover:text-foreground">
              8bitcn/ui
            </a>
            .
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
