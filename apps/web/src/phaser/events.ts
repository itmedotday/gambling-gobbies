/**
 * The only channel between React and Phaser (architecture rule 3).
 * Every event name and payload is declared here.
 */
export interface GobbieEventMap {
  /** A scene finished creating and is ready for input. */
  'scene-ready': { scene: string };
  /** A scene shut down (Phaser destroy / StrictMode remount). */
  'scene-unload': { scene: string };
  /** The mascot was poked (landing easter egg). */
  'mascot-poked': Record<string, never>;
  /** Crash round phase change (React game logic -> Phaser presentation). */
  'crash-phase': { phase: 'idle' | 'running' | 'cashed' | 'busted' };
  /** Live multiplier while a crash round runs. */
  'crash-tick': { multiplier: number };
  /** Mines round phase change (React game logic -> Phaser presentation). */
  'mines-phase': { phase: 'idle' | 'playing' | 'cashed' | 'busted' };
  /** Reset the mines grid for a new round. */
  'mines-reset': Record<string, never>;
  /** Reveal a single tile. */
  'mines-reveal': { index: number; kind: 'safe' | 'mine' };
  /** Reveal the full board (cash-out or bust). */
  'mines-reveal-all': { mines: number[] };
  /** Player clicked a tile in the Phaser grid. */
  'mines-pick': { index: number };
  /** Classic game presentation triggers (React logic -> Phaser). */
  'coin-animate': { landed: 'gold' | 'moon'; isWin: boolean };
  'coin-anim-done': Record<string, never>;
  'dice-animate': { roll: number; isWin: boolean; target: number; rollOver: boolean };
  'dice-anim-done': Record<string, never>;
  'wheel-animate': { angle: number; isWin: boolean; winChance: number };
  'wheel-anim-done': Record<string, never>;
  'd20-animate': { roll: number; isCritical: boolean; isFumble: boolean };
  'd20-anim-done': Record<string, never>;
  /** Win-zone preview while sliders move (no bet). */
  'dice-preview': { target: number; rollOver: boolean };
  'wheel-preview': { winChance: number };
  /** Light/dark theme changed (React -> Phaser palette refresh). */
  'theme-change': { mode: 'light' | 'dark' };
}

export type GobbieEventName = keyof GobbieEventMap;

type Handler<K extends GobbieEventName> = (payload: GobbieEventMap[K]) => void;

class TypedEventBus {
  private handlers = new Map<GobbieEventName, Set<Handler<GobbieEventName>>>();
  private readyScenes = new Set<string>();

  isSceneReady(scene: string): boolean {
    return this.readyScenes.has(scene);
  }

  on<K extends GobbieEventName>(event: K, handler: Handler<K>): () => void {
    let set = this.handlers.get(event);
    if (!set) {
      set = new Set();
      this.handlers.set(event, set);
    }
    set.add(handler as Handler<GobbieEventName>);
    return () => this.off(event, handler);
  }

  off<K extends GobbieEventName>(event: K, handler: Handler<K>): void {
    this.handlers.get(event)?.delete(handler as Handler<GobbieEventName>);
  }

  emit<K extends GobbieEventName>(event: K, payload: GobbieEventMap[K]): void {
    if (event === 'scene-ready') {
      this.readyScenes.add((payload as GobbieEventMap['scene-ready']).scene);
    } else if (event === 'scene-unload') {
      this.readyScenes.delete((payload as GobbieEventMap['scene-unload']).scene);
    }
    this.handlers.get(event)?.forEach((handler) => handler(payload));
  }
}

export const EventBus = new TypedEventBus();
