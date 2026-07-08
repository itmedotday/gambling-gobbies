/** Generate a 4-letter versus room code (no ambiguous I/O). */
export function generateRoomCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)] ?? 'G';
  }
  return code;
}

/** Single-shot games the versus server can resolve via place_bet. */
export const VERSUS_INSTANT_GAMES = ['coinflip', 'dice', 'wheel', 'd20'] as const;

export type VersusInstantGameId = (typeof VERSUS_INSTANT_GAMES)[number];

export function isVersusInstantGame(game: string): game is VersusInstantGameId {
  return (VERSUS_INSTANT_GAMES as readonly string[]).includes(game);
}
