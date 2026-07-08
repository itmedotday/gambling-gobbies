import { Link } from 'react-router-dom';
import { Badge } from '@/components/kit';
import { usePlayMode } from '@/game/playMode';

/** Shown on game pages when betting against a versus room balance. */
export function VersusPlayBanner() {
  const play = usePlayMode();

  if (!play.versusBetting || !play.versusCode) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border border-primary/40 bg-primary/10 px-4 py-2.5 text-xs shadow-[0_0_16px_rgba(99,102,241,.2)]">
      <span className="text-muted-foreground">
        Versus match · room <span className="font-semibold text-foreground">{play.versusCode}</span>
      </span>
      <div className="flex items-center gap-2">
        <Badge
          variant="secondary"
          className="border border-[color:var(--chart-3)]/45 bg-[color:var(--chart-3)]/10 text-[color:var(--chart-3)]"
        >
          Versus balance
        </Badge>
        <Link
          to={`/versus/${play.versusCode}`}
          className="text-primary underline hover:text-primary/80"
        >
          Back to arena
        </Link>
      </div>
    </div>
  );
}
