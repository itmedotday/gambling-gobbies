import Phaser from 'phaser';
import { EventBus } from '../events';
import { animKey } from '../anims/manifest';
import { loadCharacter, createCharacterAnims } from '../loaders';

/**
 * Landing-page mascot: the royal goblin idles, walks across the stage,
 * and swings his club when poked.
 */
export class MascotScene extends Phaser.Scene {
  private goblin!: Phaser.GameObjects.Sprite;

  preload(): void {
    loadCharacter(this, 'royal-goblin');
  }

  create(): void {
    createCharacterAnims(this, 'royal-goblin');

    const { width, height } = this.scale;
    this.goblin = this.add.sprite(width / 2, height / 2 + 10, 'royal-goblin:idle');
    this.goblin.setScale(2.5);
    this.goblin.play(animKey('royal-goblin', 'idle'));
    this.goblin.setInteractive({ useHandCursor: true });

    this.goblin.on('pointerdown', () => {
      this.goblin.play(animKey('royal-goblin', 'attack'));
      this.goblin.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
        this.goblin.play(animKey('royal-goblin', 'idle'));
      });
      EventBus.emit('mascot-poked', {});
    });

    EventBus.emit('scene-ready', { scene: 'mascot' });
  }
}
