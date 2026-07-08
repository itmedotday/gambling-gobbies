import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

export interface PhaserGameProps {
  /** Scene classes to register; the first one boots automatically. */
  scenes: Phaser.Types.Scenes.SceneType[];
  width: number;
  height: number;
  /** Transparent canvases sit on top of the page background. */
  transparent?: boolean;
  backgroundColor?: string;
  className?: string;
  /** Optional data passed to the first scene's init(). */
  sceneData?: Record<string, unknown>;
  /** Remount Phaser when theme changes so canvas colors match. */
  themeKey?: string;
}

/**
 * Owns a Phaser.Game instance for its lifetime (architecture: one instance per mount,
 * all communication with React goes through the EventBus).
 */
export function PhaserGame({
  scenes,
  width,
  height,
  transparent = false,
  backgroundColor,
  className,
  sceneData,
  themeKey,
}: PhaserGameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: containerRef.current,
      width,
      height,
      transparent,
      backgroundColor,
      pixelArt: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });
    for (const [index, scene] of scenes.entries()) {
      const key = `scene-${index}`;
      game.scene.add(key, scene, index === 0, sceneData);
    }
    gameRef.current = game;

    return () => {
      game.destroy(true);
      gameRef.current = null;
    };
    // Scenes/dimensions are fixed for the lifetime of a mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeKey]);

  return (
    <div
      ref={containerRef}
      data-phaser-container
      className={className}
      style={{
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        marginInline: 'auto',
      }}
    />
  );
}
