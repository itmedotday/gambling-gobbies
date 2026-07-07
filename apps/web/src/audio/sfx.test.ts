import { describe, expect, it, beforeEach } from 'vitest';
import { useSettingsStore } from '@/stores/settingsStore';
import { sfxGain } from './sfx';

describe('sfxGain', () => {
  beforeEach(() => {
    useSettingsStore.setState({ muted: false, sfxVolume: 0.8 });
  });

  it('returns zero when muted', () => {
    useSettingsStore.setState({ muted: true, sfxVolume: 0.8 });
    expect(sfxGain()).toBe(0);
  });

  it('returns sfx volume when unmuted', () => {
    useSettingsStore.setState({ muted: false, sfxVolume: 0.5 });
    expect(sfxGain()).toBe(0.5);
  });
});
