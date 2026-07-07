import type { AvatarId } from '@gobbies/shared';

export type AnimName = 'idle' | 'walk' | 'run' | 'jump' | 'attack' | 'hurt' | 'death';

export interface SheetDef {
  /** Square frame size in px (frameWidth === frameHeight). */
  frameSize: number;
  frameCount: number;
  /** Playback speed. */
  frameRate: number;
  repeat: number;
}

export interface CharacterDef {
  id: AvatarId;
  sheets: Partial<Record<AnimName, SheetDef>>;
}

const LOOP = -1;
const ONCE = 0;

function sheet(frameSize: number, frameCount = 8, repeat = LOOP, frameRate = 10): SheetDef {
  return { frameSize, frameCount, frameRate, repeat };
}

/** Verified against the shipped SpriteCook sheets (all frames are square). */
export const CHARACTERS: Record<AvatarId, CharacterDef> = {
  'royal-goblin': {
    id: 'royal-goblin',
    sheets: {
      idle: sheet(80),
      walk: sheet(80),
      run: sheet(80, 8, LOOP, 14),
      jump: sheet(80, 8, ONCE, 12),
      attack: sheet(80, 8, ONCE, 14),
    },
  },
  'astronaut-squirrel': {
    id: 'astronaut-squirrel',
    sheets: { idle: sheet(76), walk: sheet(76), jump: sheet(76, 8, ONCE, 12) },
  },
  'chunky-hamster': { id: 'chunky-hamster', sheets: { idle: sheet(86) } },
  'chunky-parrot': { id: 'chunky-parrot', sheets: { idle: sheet(94) } },
  'clockwork-robot': { id: 'clockwork-robot', sheets: { idle: sheet(154) } },
  'cute-penguin': {
    id: 'cute-penguin',
    sheets: {
      idle: sheet(76),
      walk: sheet(76),
      run: sheet(76, 8, LOOP, 14),
      jump: sheet(76, 8, ONCE, 12),
      attack: sheet(76, 8, ONCE, 14),
    },
  },
  'friendly-brown-dog': {
    id: 'friendly-brown-dog',
    sheets: {
      idle: sheet(86),
      walk: sheet(86),
      run: sheet(86, 8, LOOP, 14),
      jump: sheet(86, 8, ONCE, 12),
    },
  },
  'gilded-knight': {
    id: 'gilded-knight',
    sheets: {
      idle: sheet(202),
      walk: sheet(202),
      run: sheet(202, 8, LOOP, 14),
      jump: sheet(202, 8, ONCE, 12),
      attack: sheet(202, 8, ONCE, 14),
    },
  },
  'ginger-cat': {
    id: 'ginger-cat',
    sheets: {
      idle: sheet(86),
      walk: sheet(86),
      run: sheet(86, 8, LOOP, 14),
      jump: sheet(86, 8, ONCE, 12),
    },
  },
  'happy-monk': { id: 'happy-monk', sheets: { idle: sheet(98) } },
  'hero-sheep': { id: 'hero-sheep', sheets: { idle: sheet(76) } },
  'paladin-knight': {
    id: 'paladin-knight',
    sheets: {
      idle: sheet(88),
      walk: sheet(88),
      attack: sheet(88, 8, ONCE, 14),
      hurt: sheet(88, 8, ONCE, 12),
      death: sheet(88, 12, ONCE, 10),
    },
  },
  'red-cloaked-rogue': { id: 'red-cloaked-rogue', sheets: { idle: sheet(192) } },
  'tiny-pirate': { id: 'tiny-pirate', sheets: { idle: sheet(96) } },
  'warrior-cat': {
    id: 'warrior-cat',
    sheets: { idle: sheet(84), walk: sheet(84), jump: sheet(84, 8, ONCE, 12) },
  },
};

export function sheetTextureKey(character: AvatarId, anim: AnimName): string {
  return `${character}:${anim}`;
}

export function sheetUrl(character: AvatarId, anim: AnimName): string {
  return `/assets/sprites/${character}/${anim}_sheet.png`;
}

export function animKey(character: AvatarId, anim: AnimName): string {
  return `${character}-${anim}`;
}
