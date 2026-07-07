import Phaser from 'phaser';
import { MINES_GRID_SIZE } from '@gobbies/engine';
import { EventBus } from '../events';
import { palette, hexToNumber } from '../../theme/palette';

const COLS = 5;
const TILE = 56;
const GAP = 6;
const GRID_W = COLS * TILE + (COLS - 1) * GAP;

type TileKind = 'hidden' | 'safe' | 'mine';

/**
 * Goblin Mines presentation: a 5x5 chest grid. Clicks emit mines-pick;
 * React game logic drives reveals over the EventBus.
 */
export class MinesScene extends Phaser.Scene {
  private tiles: Phaser.GameObjects.Rectangle[] = [];
  private labels: Phaser.GameObjects.Text[] = [];
  private interactive = false;
  private unsubscribes: Array<() => void> = [];

  create(): void {
    this.createTileTextures();
    const { width } = this.scale;
    const startX = (width - GRID_W) / 2 + TILE / 2;
    const startY = 48 + TILE / 2;

    for (let i = 0; i < MINES_GRID_SIZE; i++) {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const x = startX + col * (TILE + GAP);
      const y = startY + row * (TILE + GAP);
      const tile = this.add
        .rectangle(x, y, TILE, TILE, hexToNumber(palette.surface))
        .setStrokeStyle(3, hexToNumber(palette.border))
        .setInteractive({ useHandCursor: true });
      const label = this.add
        .text(x, y, '?', {
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '14px',
          color: palette.textMuted,
        })
        .setOrigin(0.5);
      const index = i;
      tile.on('pointerdown', () => {
        if (!this.interactive) return;
        EventBus.emit('mines-pick', { index });
      });
      this.tiles.push(tile);
      this.labels.push(label);
    }

    this.unsubscribes.push(
      EventBus.on('mines-reset', () => this.resetBoard()),
      EventBus.on('mines-reveal', ({ index, kind }) => this.paintTile(index, kind)),
      EventBus.on('mines-reveal-all', ({ mines }) => this.revealAll(mines)),
      EventBus.on('mines-phase', ({ phase }) => {
        this.interactive = phase === 'playing';
      }),
    );

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      for (const unsubscribe of this.unsubscribes) unsubscribe();
      this.unsubscribes = [];
      EventBus.emit('scene-unload', { scene: 'mines' });
    });

    EventBus.emit('scene-ready', { scene: 'mines' });
  }

  private createTileTextures(): void {
    // Textures are optional; rectangles + labels are enough for v1.
  }

  private resetBoard(): void {
    for (let i = 0; i < MINES_GRID_SIZE; i++) {
      this.paintTile(i, 'hidden');
    }
    this.interactive = false;
  }

  private paintTile(index: number, kind: TileKind): void {
    const tile = this.tiles[index];
    const label = this.labels[index];
    if (!tile || !label) return;
    switch (kind) {
      case 'hidden':
        tile.setFillStyle(hexToNumber(palette.surface));
        tile.setStrokeStyle(3, hexToNumber(palette.border));
        label.setText('?');
        label.setColor(palette.textMuted);
        break;
      case 'safe':
        tile.setFillStyle(hexToNumber(palette.goblinDark));
        tile.setStrokeStyle(3, hexToNumber(palette.goblin));
        label.setText('GG');
        label.setColor(palette.gold);
        break;
      case 'mine':
        tile.setFillStyle(hexToNumber(palette.danger));
        tile.setStrokeStyle(3, hexToNumber('#7f1d1d'));
        label.setText('X');
        label.setColor('#ffffff');
        break;
      default: {
        const exhaustive: never = kind;
        throw new Error(`Unhandled tile kind: ${String(exhaustive)}`);
      }
    }
  }

  private revealAll(mines: number[]): void {
    const mineSet = new Set(mines);
    for (let i = 0; i < MINES_GRID_SIZE; i++) {
      const tile = this.tiles[i];
      const label = this.labels[i];
      if (!tile || !label) continue;
      if (label.text !== '?') continue;
      this.paintTile(i, mineSet.has(i) ? 'mine' : 'safe');
    }
    this.interactive = false;
  }
}
