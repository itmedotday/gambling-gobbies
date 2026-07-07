import type Phaser from 'phaser';
import type { AvatarId } from '@gobbies/shared';
import {
  CHARACTERS,
  animKey,
  sheetTextureKey,
  sheetUrl,
  type AnimName,
} from './anims/manifest';

/** Queue all sheets for a character in a scene's preload(). */
export function loadCharacter(scene: Phaser.Scene, character: AvatarId): void {
  const def = CHARACTERS[character];
  for (const [anim, sheet] of Object.entries(def.sheets)) {
    scene.load.spritesheet(sheetTextureKey(character, anim as AnimName), sheetUrl(character, anim as AnimName), {
      frameWidth: sheet.frameSize,
      frameHeight: sheet.frameSize,
    });
  }
}

/** Register animations for a character in a scene's create(). Safe to call twice. */
export function createCharacterAnims(scene: Phaser.Scene, character: AvatarId): void {
  const def = CHARACTERS[character];
  for (const [anim, sheet] of Object.entries(def.sheets)) {
    const key = animKey(character, anim as AnimName);
    if (scene.anims.exists(key)) continue;
    scene.anims.create({
      key,
      frames: scene.anims.generateFrameNumbers(sheetTextureKey(character, anim as AnimName), {
        start: 0,
        end: sheet.frameCount - 1,
      }),
      frameRate: sheet.frameRate,
      repeat: sheet.repeat,
    });
  }
}
