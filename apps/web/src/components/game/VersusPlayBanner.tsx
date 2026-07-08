import { Link } from 'react-router-dom';
import { Badge } from '@/components/kit';
import { usePlayMode } from '@/game/playMode';

/** Shown on game pages when betting against a versus room balance. */
export function VersusPlayBanner() {
  const play = usePlayMode();

  if (!play.versusBetting || !play.versusCode) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-sm border-2 border-border bg-secondary/40 px-3 py-2 text-xs">
      <span className="text-muted-foreground">
        Versus match · room <span className="font-semibold text-foreground">{play.versusCode}</span>
      </span>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">Versus balance</Badge>
        <Link to={`/versus/${play.versusCode}`} className="underline hover:text-foreground">
          Back to arena
        </Link>
      </div>
    </div>
  );
}
