import Phaser from 'phaser';
import { EventBus } from '../events';
import { loadCharacter, createCharacterAnims } from '../loaders';
import { animKey } from '../anims/manifest';
import { palette } from '../../theme/palette';
import { maybeShake } from '../utils/motion';

/** Goblin dealer tosses a d20 — presentation only. */
export class D20Scene extends Phaser.Scene {
  private goblin!: Phaser.GameObjects.Sprite;
  private rollText!: Phaser.GameObjects.Text;
  private hint!: Phaser.GameObjects.Text;
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

    this.rollText = this.add
      .text(width * 0.58, height * 0.42, '20', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '48px',
        color: palette.textMuted,
      })
      .setOrigin(0.5)
      .setAlpha(0.35);

    this.hint = this.add
      .text(width * 0.58, height * 0.72, 'Roll to beat the DC', {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        color: palette.textMuted,
      })
      .setOrigin(0.5);

    this.unsubscribes.push(
      EventBus.on('d20-animate', ({ roll, isCritical, isFumble }) =>
        this.animateRoll(roll, isCritical, isFumble),
      ),
    );
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      for (const u of this.unsubscribes) u();
      EventBus.emit('scene-unload', { scene: 'd20' });
    });
    EventBus.emit('scene-ready', { scene: 'd20' });
  }

  private animateRoll(roll: number, isCritical: boolean, isFumble: boolean): void {
    this.goblin.play(animKey('royal-goblin', 'attack'));
    this.rollText.setText('?');
    this.rollText.setAlpha(1);
    this.rollText.setColor(palette.textMuted);
    this.hint.setText('Rolling…');

    this.tweens.add({
      targets: this.rollText,
      y: this.rollText.y - 24,
      duration: 400,
      yoyo: true,
      onComplete: () => {
        const isWin = roll >= 1 && !isFumble;
        this.rollText.setText(String(roll));
        if (isCritical) {
          this.rollText.setColor(palette.gold);
          this.hint.setText('NAT 20!');
          maybeShake(this, 280, 0.012);
        } else if (isFumble) {
          this.rollText.setColor(palette.danger);
          this.hint.setText('NAT 1…');
        } else {
          this.rollText.setColor(isWin ? palette.goblin : palette.danger);
          this.hint.setText(isWin ? 'Hit!' : 'Miss!');
        }
        this.goblin.play(animKey('royal-goblin', isCritical || isWin ? 'jump' : 'idle'));
        this.time.delayedCall(400, () => EventBus.emit('d20-anim-done', {}));
      },
    });
  }
}
