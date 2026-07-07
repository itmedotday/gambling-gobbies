/**
 * The only channel between React and Phaser (architecture rule 3).
 * Every event name and payload is declared here.
 */
export interface GobbieEventMap {
  /** A scene finished creating and is ready for input. */
  'scene-ready': { scene: string };
  /** The mascot was poked (landing easter egg). */
  'mascot-poked': Record<string, never>;
}

export type GobbieEventName = keyof GobbieEventMap;

type Handler<K extends GobbieEventName> = (payload: GobbieEventMap[K]) => void;

class TypedEventBus {
  private handlers = new Map<GobbieEventName, Set<Handler<GobbieEventName>>>();

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
    this.handlers.get(event)?.forEach((handler) => handler(payload));
  }
}

export const EventBus = new TypedEventBus();
