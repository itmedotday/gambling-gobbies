/** Selectable player avatars, keyed by SpriteCook character folder name. */
export type AvatarId =
  | 'royal-goblin'
  | 'astronaut-squirrel'
  | 'chunky-hamster'
  | 'chunky-parrot'
  | 'clockwork-robot'
  | 'cute-penguin'
  | 'friendly-brown-dog'
  | 'gilded-knight'
  | 'ginger-cat'
  | 'happy-monk'
  | 'hero-sheep'
  | 'paladin-knight'
  | 'red-cloaked-rogue'
  | 'tiny-pirate'
  | 'warrior-cat';

export const ALL_AVATAR_IDS: readonly AvatarId[] = [
  'royal-goblin',
  'astronaut-squirrel',
  'chunky-hamster',
  'chunky-parrot',
  'clockwork-robot',
  'cute-penguin',
  'friendly-brown-dog',
  'gilded-knight',
  'ginger-cat',
  'happy-monk',
  'hero-sheep',
  'paladin-knight',
  'red-cloaked-rogue',
  'tiny-pirate',
  'warrior-cat',
] as const;

export const AVATAR_NAMES: Record<AvatarId, string> = {
  'royal-goblin': 'Royal Goblin',
  'astronaut-squirrel': 'Astronaut Squirrel',
  'chunky-hamster': 'Chunky Hamster',
  'chunky-parrot': 'Chunky Parrot',
  'clockwork-robot': 'Clockwork Robot',
  'cute-penguin': 'Cute Penguin',
  'friendly-brown-dog': 'Friendly Brown Dog',
  'gilded-knight': 'Gilded Knight',
  'ginger-cat': 'Ginger Cat',
  'happy-monk': 'Happy Monk',
  'hero-sheep': 'Hero Sheep',
  'paladin-knight': 'Paladin Knight',
  'red-cloaked-rogue': 'Red-Cloaked Rogue',
  'tiny-pirate': 'Tiny Pirate',
  'warrior-cat': 'Warrior Cat',
};
