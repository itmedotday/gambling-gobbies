import { toast } from 'sonner';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/kit';
import { Input } from '@/components/kit';
import { Label } from '@/components/kit';
import { MIN_BET, getMaxBet, isInDebt } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { validateBet } from '@/game/validateBet';
import type { GameAccent } from '@/game/accent';
import { accentTokens } from '@/game/accent';
import { cn } from '@/lib/utils';

export interface BetControlsProps {
  amount: number;
  onAmountChange: (amount: number) => void;
  multiplier: number;
  onBet: () => void;
  busy?: boolean;
  betLabel?: string;
  balance?: number;
  accent?: GameAccent;
}

export function BetControls({
  amount,
  onAmountChange,
  multiplier,
  onBet,
  busy = false,
  betLabel = 'Place Bet',
  balance: balanceOverride,
  accent = 'indigo',
}: BetControlsProps) {
  const walletBalance = useWalletStore((s) => s.balance);
  const balance = balanceOverride ?? walletBalance;
  const maxBet = getMaxBet(balance, true);
  const inDebt = isInDebt(balance);
  const potentialWin = Math.floor(amount * multiplier * 100) / 100;
  const tokens = accentTokens(accent);

  const handleBet = () => {
    const error = validateBet(amount, balance, true);
    if (error) {
      toast.error(error);
      return;
    }
    onBet();
  };

  const clamp = (value: number) => Math.max(MIN_BET, Math.min(maxBet, Math.floor(value)));

  return (
    <div className="flex flex-col gap-4" data-testid="bet-controls">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[13px]">
          <Label htmlFor="bet-amount" className="text-muted-foreground">
            Bet amount
          </Label>
          <span
            className={cn('tabular-nums', inDebt ? 'text-destructive' : 'text-muted-foreground')}
          >
            Balance: {balance.toLocaleString()} GG
            {inDebt ? ' · in debt' : ''}
          </span>
        </div>
        {inDebt ? (
          <p
            className="flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive"
            role="status"
          >
            <AlertTriangle className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            <span>
              You&apos;re in debt — max bet is lowered to{' '}
              <span className="font-medium tabular-nums">{maxBet.toLocaleString()} GG</span> until
              your balance recovers.
            </span>
          </p>
        ) : null}
        <div className="flex items-stretch gap-2.5">
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
            className="retro h-10 flex-1 border-border bg-background text-[11px]"
            data-testid="bet-amount"
          />
          {(['1/2', 'x2', 'Max'] as const).map((label, i) => (
            <Button
              key={label}
              variant="outline"
              size="sm"
              disabled={busy}
              className="retro h-10 border-border px-3 text-[9px] text-muted-foreground hover:border-primary hover:text-primary"
              onClick={() =>
                onAmountChange(clamp(i === 0 ? amount / 2 : i === 1 ? amount * 2 : maxBet))
              }
              aria-label={
                label === '1/2' ? 'Halve bet' : label === 'x2' ? 'Double bet' : 'Bet maximum'
              }
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between text-[13px] text-muted-foreground">
        <span>
          Payout <span className="text-foreground">{multiplier.toFixed(4)}x</span>
        </span>
        <span data-testid="potential-win">
          Win{' '}
          <span
            className="text-[color:var(--chart-3)]"
            style={{ textShadow: '0 0 8px rgba(16,185,129,.7)' }}
          >
            {potentialWin.toLocaleString()} GG
          </span>
        </span>
      </div>
      <Button
        className="retro h-auto w-full py-[18px] text-xs hover:brightness-110"
        size="lg"
        onClick={handleBet}
        disabled={busy}
        data-testid="bet-button"
        aria-keyshortcuts="Enter"
        style={{
          background: `linear-gradient(180deg, ${tokens.gradientFrom}, ${tokens.gradientTo})`,
          color: tokens.buttonText,
          boxShadow: `0 0 30px rgba(${tokens.glowRgb}, .55)`,
        }}
      >
        {busy ? `${betLabel}…` : betLabel}
      </Button>
    </div>
  );
}
