import Phaser from 'phaser';
import { EventBus } from '../events';
import { loadCharacter, createCharacterAnims } from '../loaders';
import { animKey } from '../anims/manifest';
import { palette, hexToNumber } from '../../theme/palette';
import { maybeShake } from '../utils/motion';

/** Goblin dealer flips a pixel coin — presentation only. */
export class CoinScene extends Phaser.Scene {
  private goblin!: Phaser.GameObjects.Sprite;
  private coin!: Phaser.GameObjects.Arc;
  private label!: Phaser.GameObjects.Text;
  private unsubscribes: Array<() => void> = [];

  preload(): void {
    loadCharacter(this, 'royal-goblin');
  }

  create(): void {
    createCharacterAnims(this, 'royal-goblin');
    const { width, height } = this.scale;

    this.goblin = this.add.sprite(width * 0.22, height * 0.72, 'royal-goblin:idle');
    this.goblin.setOrigin(0.5, 1);
    this.goblin.setScale(2);
    this.goblin.play(animKey('royal-goblin', 'idle'));

    this.coin = this.add.circle(width * 0.55, height * 0.45, 36, hexToNumber(palette.gold));
    this.coin.setStrokeStyle(4, hexToNumber(palette.border));

    this.label = this.add
      .text(width * 0.55, height * 0.78, 'Pick a side & flip', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        color: palette.textMuted,
      })
      .setOrigin(0.5);

    this.unsubscribes.push(
      EventBus.on('coin-animate', ({ landed, isWin }) => this.animateFlip(landed, isWin)),
    );
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      for (const u of this.unsubscribes) u();
      EventBus.emit('scene-unload', { scene: 'coin' });
    });
    EventBus.emit('scene-ready', { scene: 'coin' });
  }

  private animateFlip(landed: 'gold' | 'moon', isWin: boolean): void {
    this.goblin.play(animKey('royal-goblin', 'attack'));
    this.label.setText('Flipping…');
    this.tweens.add({
      targets: this.coin,
      angle: 720,
      scaleX: { from: 1, to: 0.15, yoyo: true, repeat: 5 },
      duration: 900,
      ease: 'Cubic.easeInOut',
      onComplete: () => {
        this.coin.setFillStyle(hexToNumber(landed === 'gold' ? palette.gold : palette.info));
        this.coin.setScale(1);
        this.coin.setAngle(0);
        this.label.setText(landed === 'gold' ? 'HEADS!' : 'TAILS!');
        this.label.setColor(isWin ? palette.goblin : palette.danger);
        if (isWin) maybeShake(this, 180, 0.008);
        this.goblin.play(animKey('royal-goblin', isWin ? 'jump' : 'idle'));
        this.time.delayedCall(400, () => EventBus.emit('coin-anim-done', {}));
      },
    });
  }
}
