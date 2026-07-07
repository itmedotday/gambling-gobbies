import { useSettingsStore } from '@/stores/settingsStore';

export type SfxKind = 'bet' | 'win' | 'lose';

let audioContext: AudioContext | null = null;

/** Resume Web Audio after a user gesture (browser autoplay policy). */
export function unlockAudio(): void {
  if (typeof window === 'undefined') return;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    void audioContext.resume();
  }
}

/** Effective SFX gain from settings; exported for unit tests. */
export function sfxGain(): number {
  const { muted, sfxVolume } = useSettingsStore.getState();
  return muted ? 0 : sfxVolume;
}

function playSquare(freq: number, start: number, duration: number, volume: number): void {
  if (!audioContext || volume <= 0) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = 'square';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume * 0.12, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

/** Procedural 8-bit SFX — no asset files required. */
export function playSfx(kind: SfxKind): void {
  unlockAudio();
  const vol = sfxGain();
  if (vol <= 0 || !audioContext) return;

  const t = audioContext.currentTime;
  switch (kind) {
    case 'bet':
      playSquare(440, t, 0.05, vol);
      playSquare(554, t + 0.04, 0.06, vol * 0.8);
      break;
    case 'win':
      playSquare(523, t, 0.07, vol);
      playSquare(659, t + 0.07, 0.07, vol);
      playSquare(784, t + 0.14, 0.12, vol);
      break;
    case 'lose':
      playSquare(247, t, 0.12, vol);
      playSquare(196, t + 0.1, 0.18, vol);
      break;
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}
