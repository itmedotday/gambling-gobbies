import { toast } from 'sonner';
import { Button } from '@/components/ui/8bit/button';
import { Input } from '@/components/ui/8bit/input';
import { Label } from '@/components/ui/8bit/label';
import { MIN_BET } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';

export interface BetControlsProps {
  amount: number;
  onAmountChange: (amount: number) => void;
  /** Payout multiplier preview for the current parameters. */
  multiplier: number;
  onBet: () => void;
  busy?: boolean;
  betLabel?: string;
}

/** Validates a prospective bet; returns null when valid, or a user-facing error. */
export function validateBet(amount: number, balance: number): string | null {
  if (!Number.isFinite(amount) || amount < MIN_BET) {
    return `Minimum bet is ${MIN_BET} GG`;
  }
  if (amount > balance) {
    return 'Not enough Gobbie Gold';
  }
  return null;
}

export function BetControls({
  amount,
  onAmountChange,
  multiplier,
  onBet,
  busy = false,
  betLabel = 'Place Bet',
}: BetControlsProps) {
  const balance = useWalletStore((s) => s.balance);
  const potentialWin = Math.floor(amount * multiplier * 100) / 100;

  const handleBet = () => {
    const error = validateBet(amount, balance);
    if (error) {
      toast.error(error);
      return;
    }
    onBet();
  };

  const clamp = (value: number) =>
    Math.max(MIN_BET, Math.min(Math.floor(balance), Math.floor(value)));

  return (
    <div className="flex flex-col gap-4" data-testid="bet-controls">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="bet-amount">Bet amount</Label>
          <span className="text-xs text-muted-foreground">Balance: {balance.toLocaleString()} GG</span>
        </div>
        <div className="flex items-stretch gap-3">
          <Input
            id="bet-amount"
            type="number"
            inputMode="numeric"
            min={MIN_BET}
            value={Number.isFinite(amount) ? amount : ''}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !busy) {
                e.preventDefault();
                handleBet();
              }
            }}
            disabled={busy}
            className="flex-1"
            data-testid="bet-amount"
          />
          <Button
            variant="outline"
            size="sm"
            disabled={busy}
            onClick={() => onAmountChange(clamp(amount / 2))}
            aria-label="Halve bet"
          >
            1/2
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={busy}
            onClick={() => onAmountChange(clamp(amount * 2))}
            aria-label="Double bet"
          >
            x2
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={busy}
            onClick={() => onAmountChange(clamp(balance))}
            aria-label="Bet maximum"
          >
            Max
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Payout <span className="text-foreground">{multiplier.toFixed(4)}x</span>
        </span>
        <span className="text-muted-foreground" data-testid="potential-win">
          Win <span className="text-primary">{potentialWin.toLocaleString()} GG</span>
        </span>
      </div>
      <Button
        className="w-full"
        size="lg"
        onClick={handleBet}
        disabled={busy}
        data-testid="bet-button"
        aria-keyshortcuts="Enter"
      >
        {busy ? '...' : betLabel}
      </Button>
    </div>
  );
}
