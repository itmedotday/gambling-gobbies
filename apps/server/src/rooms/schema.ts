import { ArraySchema, MapSchema, Schema, type } from '@colyseus/schema';

export class VersusPlayerState extends Schema {
  @type('string') sessionId = '';
  @type('string') playerId = '';
  @type('string') name = '';
  @type('string') avatar = 'royal-goblin';
  @type('number') balance = 0;
  @type('number') startingBalance = 0;
  @type('boolean') ready = false;
  @type('boolean') disconnected = false;
}

export class VersusState extends Schema {
  @type('string') code = '';
  @type('string') phase = 'waiting';
  @type('number') durationMs = 300_000;
  @type('number') timerRemainingMs = 0;
  @type({ map: VersusPlayerState }) players = new MapSchema<VersusPlayerState>();
  @type(['string']) eventFeed = new ArraySchema<string>();
  @type(['string']) snapshots = new ArraySchema<string>();
  @type('string') winnerId = '';
  @type('string') endedReason = '';
}
