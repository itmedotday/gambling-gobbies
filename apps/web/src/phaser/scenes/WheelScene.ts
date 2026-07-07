import Phaser from 'phaser';
import { EventBus } from '../events';
import { loadCharacter, createCharacterAnims } from '../loaders';
import { animKey } from '../anims/manifest';
import { palette, hexToNumber } from '../../theme/palette';
import { maybeShake } from '../utils/motion';

/** Goblin dealer + fortune wheel — presentation only. */
export class WheelScene extends Phaser.Scene {
  private goblin!: Phaser.GameObjects.Sprite;
  private wheel!: Phaser.GameObjects.Container;
  private wheelGfx!: Phaser.GameObjects.Graphics;
  private status!: Phaser.GameObjects.Text;
  private rotation = 0;
  private unsubscribes: Array<() => void> = [];

  preload(): void {
    loadCharacter(this, 'royal-goblin');
  }

  create(): void {
    createCharacterAnims(this, 'royal-goblin');
    const { width, height } = this.scale;
    const cx = width * 0.55;
    const cy = height * 0.48;

    this.goblin = this.add.sprite(width * 0.18, height * 0.78, 'royal-goblin:idle');
    this.goblin.setOrigin(0.5, 1);
    this.goblin.setScale(2);
    this.goblin.play(animKey('royal-goblin', 'idle'));

    this.wheelGfx = this.add.graphics();
    this.wheel = this.add.container(cx, cy, [this.wheelGfx]);
    this.drawWheel(50);

    this.add
      .text(cx, cy - 100, '▼', { fontFamily: '"Press Start 2P", monospace', fontSize: '16px', color: palette.gold })
      .setOrigin(0.5);

    this.status = this.add
      .text(cx, height * 0.78, 'Spin the wheel', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        color: palette.textMuted,
      })
      .setOrigin(0.5);

    this.unsubscribes.push(
      EventBus.on('wheel-preview', ({ winChance }) => this.drawWheel(winChance)),
      EventBus.on('wheel-animate', ({ angle, isWin, winChance }) =>
        this.spin(angle, isWin, winChance),
      ),
    );
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      for (const u of this.unsubscribes) u();
      EventBus.emit('scene-unload', { scene: 'wheel' });
    });
    EventBus.emit('scene-ready', { scene: 'wheel' });
  }

  private drawWheel(winChance: number): void {
    const r = 88;
    this.wheelGfx.clear();
    const arc = (winChance / 100) * 360;
    this.wheelGfx.fillStyle(hexToNumber(palette.gold), 1);
    this.wheelGfx.slice(0, 0, r, Phaser.Math.DegToRad(-arc / 2), Phaser.Math.DegToRad(arc / 2), false);
    this.wheelGfx.fillPath();
    this.wheelGfx.fillStyle(hexToNumber(palette.surface), 1);
    this.wheelGfx.slice(0, 0, r, Phaser.Math.DegToRad(arc / 2), Phaser.Math.DegToRad(360 - arc / 2), false);
    this.wheelGfx.fillPath();
    this.wheelGfx.lineStyle(4, hexToNumber(palette.border), 1);
    this.wheelGfx.strokeCircle(0, 0, r);
  }

  private spin(angle: number, isWin: boolean, winChance: number): void {
    this.drawWheel(winChance);
    this.goblin.play(animKey('royal-goblin', 'run'));
    this.status.setText('Spinning…');
    const target = this.rotation + 4 * 360 + ((360 - angle - (this.rotation % 360) + 720) % 360);
    this.rotation = target;
    this.tweens.add({
      targets: this.wheel,
      angle: target,
      duration: 2400,
      ease: 'Cubic.easeOut',
      onComplete: () => {
        this.status.setText(isWin ? 'WIN!' : 'MISS');
        this.status.setColor(isWin ? palette.goblin : palette.danger);
        if (isWin) maybeShake(this, 200, 0.008);
        this.goblin.play(animKey('royal-goblin', isWin ? 'jump' : 'idle'));
        this.time.delayedCall(300, () => EventBus.emit('wheel-anim-done', {}));
      },
    });
  }
}
