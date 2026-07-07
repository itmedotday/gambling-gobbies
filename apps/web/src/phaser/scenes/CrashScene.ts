import Phaser from 'phaser';
import { EventBus } from '../events';
import { animKey } from '../anims/manifest';
import { loadCharacter, createCharacterAnims } from '../loaders';
import { palette, hexToNumber } from '../../theme/palette';

const GROUND_Y = 240;

/**
 * Goblin Crash presentation: the royal goblin sprints up a rising slope while
 * the multiplier climbs. Pure presentation — phases and ticks arrive over the
 * EventBus from useCrashGame; this scene never decides outcomes.
 */
export class CrashScene extends Phaser.Scene {
  private goblin!: Phaser.GameObjects.Sprite;
  private ground!: Phaser.GameObjects.TileSprite;
  private multiplierText!: Phaser.GameObjects.Text;
  private statusText!: Phaser.GameObjects.Text;
  private speed = 0;
  private unsubscribes: Array<() => void> = [];

  preload(): void {
    loadCharacter(this, 'royal-goblin');
  }

  create(): void {
    createCharacterAnims(this, 'royal-goblin');
    const { width } = this.scale;

    // Simple pixel ground strip.
    const groundTexture = this.textures.createCanvas('crash-ground', 16, 16);
    if (groundTexture) {
      const ctx = groundTexture.getContext();
      ctx.fillStyle = palette.surface;
      ctx.fillRect(0, 0, 16, 16);
      ctx.fillStyle = palette.border;
      ctx.fillRect(0, 0, 16, 3);
      ctx.fillStyle = palette.goblinDark;
      ctx.fillRect(4, 8, 3, 3);
      ctx.fillRect(11, 12, 2, 2);
      groundTexture.refresh();
    }
    this.ground = this.add.tileSprite(width / 2, GROUND_Y + 32, width, 64, 'crash-ground');

    this.goblin = this.add.sprite(width * 0.28, GROUND_Y, 'royal-goblin:idle');
    this.goblin.setOrigin(0.5, 1);
    this.goblin.setScale(2);
    this.goblin.play(animKey('royal-goblin', 'idle'));

    this.multiplierText = this.add
      .text(width / 2, 84, '1.00x', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '36px',
        color: palette.gold,
      })
      .setOrigin(0.5);

    this.statusText = this.add
      .text(width / 2, 140, 'Place a bet to run', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '11px',
        color: palette.textMuted,
      })
      .setOrigin(0.5);

    this.unsubscribes.push(
      EventBus.on('crash-tick', ({ multiplier }) => {
        this.multiplierText.setText(`${multiplier.toFixed(2)}x`);
        this.speed = Math.min(14, 2 + multiplier * 1.5);
      }),
      EventBus.on('crash-phase', ({ phase }) => this.onPhase(phase)),
    );

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      for (const unsubscribe of this.unsubscribes) unsubscribe();
      this.unsubscribes = [];
    });

    EventBus.emit('scene-ready', { scene: 'crash' });
  }

  private onPhase(phase: 'idle' | 'running' | 'cashed' | 'busted'): void {
    switch (phase) {
      case 'running':
        this.multiplierText.setColor(palette.gold);
        this.statusText.setText('RUNNING — cash out before the bust!');
        this.statusText.setColor(palette.textMuted);
        this.goblin.setAngle(0);
        this.goblin.setY(GROUND_Y);
        this.goblin.setAlpha(1);
        this.goblin.play(animKey('royal-goblin', 'run'));
        this.speed = 2;
        break;
      case 'cashed':
        this.multiplierText.setColor(palette.goblin);
        this.statusText.setText('CASHED OUT!');
        this.statusText.setColor(palette.goblin);
        this.goblin.play(animKey('royal-goblin', 'attack'));
        this.goblin.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
          this.goblin.play(animKey('royal-goblin', 'idle'));
        });
        this.speed = 0;
        break;
      case 'busted':
        this.multiplierText.setColor(palette.danger);
        this.statusText.setText('BUSTED!');
        this.statusText.setColor(palette.danger);
        this.goblin.play(animKey('royal-goblin', 'jump'));
        this.cameras.main.shake(250, 0.012);
        this.tweens.add({
          targets: this.goblin,
          y: GROUND_Y + 140,
          angle: 180,
          alpha: 0.25,
          duration: 700,
          ease: 'Quad.easeIn',
        });
        this.cameras.main.flash(200, ...this.hexToRgb(palette.danger));
        this.speed = 0;
        break;
      case 'idle':
        this.statusText.setText('Place a bet to run');
        this.goblin.play(animKey('royal-goblin', 'idle'));
        this.speed = 0;
        break;
      default: {
        const exhaustive: never = phase;
        throw new Error(`Unhandled phase: ${String(exhaustive)}`);
      }
    }
  }

  private hexToRgb(hex: string): [number, number, number] {
    const n = hexToNumber(hex);
    return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
  }

  override update(): void {
    if (this.speed > 0) {
      this.ground.tilePositionX += this.speed;
    }
  }
}
