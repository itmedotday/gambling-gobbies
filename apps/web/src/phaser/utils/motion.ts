import type Phaser from 'phaser';
import { useSettingsStore } from '@/stores/settingsStore';

/** Whether Phaser should skip shake/particle FX (settings or OS preference). */
export function isReducedMotion(): boolean {
  return useSettingsStore.getState().reducedMotion;
}

export function maybeShake(
  scene: Phaser.Scene,
  duration = 200,
  intensity = 0.01,
): void {
  if (isReducedMotion()) return;
  scene.cameras.main.shake(duration, intensity);
}
