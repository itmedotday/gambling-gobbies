import { useEffect, useState } from 'react';
import { EventBus } from './events';

/** True once the named Phaser scene has mounted and subscribed to EventBus. */
export function usePhaserSceneReady(scene: string): boolean {
  const [ready, setReady] = useState(() => EventBus.isSceneReady(scene));

  useEffect(() => {
    const offReady = EventBus.on('scene-ready', ({ scene: name }) => {
      if (name === scene) setReady(true);
    });
    const offUnload = EventBus.on('scene-unload', ({ scene: name }) => {
      if (name === scene) setReady(false);
    });
    return () => {
      offReady();
      offUnload();
    };
  }, [scene]);

  return ready;
}
