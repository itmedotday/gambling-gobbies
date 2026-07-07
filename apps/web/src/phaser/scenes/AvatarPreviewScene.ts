import Phaser from 'phaser';
import type { AvatarId } from '@gobbies/shared';
import { animKey } from '../anims/manifest';
import { loadCharacter, createCharacterAnims } from '../loaders';

/** Tiny scene that plays a single character's idle loop (avatar pickers, profile). */
export class AvatarPreviewScene extends Phaser.Scene {
  private character: AvatarId = 'royal-goblin';

  init(data: { character?: AvatarId }): void {
    if (data.character) this.character = data.character;
  }

  preload(): void {
    loadCharacter(this, this.character);
  }

  create(): void {
    createCharacterAnims(this, this.character);
    const { width, height } = this.scale;
    const sprite = this.add.sprite(width / 2, height / 2, `${this.character}:idle`);
    const targetSize = Math.min(width, height) * 0.85;
    sprite.setScale(targetSize / sprite.height);
    sprite.play(animKey(this.character, 'idle'));
  }
}
