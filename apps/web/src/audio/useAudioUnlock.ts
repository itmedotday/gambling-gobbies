import { useEffect } from 'react';
import { unlockAudio } from './sfx';

/** Attach once at app shell — first click/key unlocks Web Audio. */
export function useAudioUnlock(): void {
  useEffect(() => {
    const unlock = () => unlockAudio();
    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);
}
