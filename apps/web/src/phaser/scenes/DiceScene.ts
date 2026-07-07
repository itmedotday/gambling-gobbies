import Phaser from 'phaser';
import { EventBus } from '../events';
import { loadCharacter, createCharacterAnims } from '../loaders';
import { animKey } from '../anims/manifest';
import { palette, hexToNumber } from '../../theme/palette';
import { maybeShake } from '../utils/motion';

/** Goblin dealer + dice slider track — presentation only. */
export class DiceScene extends Phaser.Scene {
  private goblin!: Phaser.GameObjects.Sprite;
  private rollText!: Phaser.GameObjects.Text;
  private track!: Phaser.GameObjects.Rectangle;
  private winZone!: Phaser.GameObjects.Rectangle;
  private marker!: Phaser.GameObjects.Rectangle;
  private unsubscribes: Array<() => void> = [];

  preload(): void {
    loadCharacter(this, 'royal-goblin');
  }

  create(): void {
    createCharacterAnims(this, 'royal-goblin');
    const { width, height } = this.scale;
    const trackY = height * 0.58;
    const trackW = width * 0.62;

    this.goblin = this.add.sprite(width * 0.18, height * 0.78, 'royal-goblin:idle');
    this.goblin.setOrigin(0.5, 1);
    this.goblin.setScale(2);
    this.goblin.play(animKey('royal-goblin', 'idle'));

    this.rollText = this.add
      .text(width * 0.55, height * 0.28, '--.--', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '28px',
        color: palette.gold,
      })
      .setOrigin(0.5);

    this.track = this.add.rectangle(width * 0.55, trackY, trackW, 16, hexToNumber(palette.danger), 0.45);
    this.winZone = this.add.rectangle(width * 0.55, trackY, trackW * 0.5, 16, hexToNumber(palette.goblin), 0.75);
    this.marker = this.add.rectangle(width * 0.55, trackY - 12, 4, 28, hexToNumber(palette.gold));

    this.unsubscribes.push(
      EventBus.on('dice-preview', ({ target, rollOver }) => this.previewZone(target, rollOver, trackW)),
      EventBus.on('dice-animate', ({ roll, isWin, target, rollOver }) =>
        this.animateRoll(roll, isWin, target, rollOver, trackW),
      ),
    );
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      for (const u of this.unsubscribes) u();
      EventBus.emit('scene-unload', { scene: 'dice' });
    });
    EventBus.emit('scene-ready', { scene: 'dice' });
  }

  private previewZone(target: number, rollOver: boolean, trackW: number): void {
    const pct = target / 100;
    const winW = rollOver ? trackW * (1 - pct) : trackW * pct;
    const centerX = this.track.x - trackW / 2 + winW / 2 + (rollOver ? trackW * pct : 0);
    this.winZone.setSize(winW, 16);
    this.winZone.setPosition(centerX, this.track.y);
  }

  private animateRoll(
    roll: number,
    isWin: boolean,
    target: number,
    rollOver: boolean,
    trackW: number,
  ): void {
    this.previewZone(target, rollOver, trackW);
    this.goblin.play(animKey('royal-goblin', 'attack'));
    this.rollText.setText('??.??');
    this.rollText.setColor(palette.textMuted);

    this.time.delayedCall(500, () => {
      this.rollText.setText(roll.toFixed(2));
      this.rollText.setColor(isWin ? palette.goblin : palette.danger);
      const x = this.track.x - trackW / 2 + (roll / 100) * trackW;
      this.marker.setX(x);
      if (isWin) maybeShake(this, 160, 0.006);
      this.goblin.play(animKey('royal-goblin', isWin ? 'jump' : 'idle'));
      this.time.delayedCall(350, () => EventBus.emit('dice-anim-done', {}));
    });
  }
}
