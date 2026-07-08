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
import { DebtLoanControls } from '@/components/game/DebtLoanControls';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
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
  const layout = useThemeLayout();
  const walletBalance = useWalletStore((s) => s.balance);
  const balance = balanceOverride ?? walletBalance;
  const maxBet = getMaxBet(balance, true);
  const inDebt = isInDebt(balance);
  const canBet = maxBet >= MIN_BET && validateBet(amount, balance, true) === null;
  const potentialWin = Math.floor(amount * multiplier * 100) / 100;
  const tokens = accentTokens(accent);
  const inputClass = layout.isMono
    ? 'h-10 flex-1 border-border bg-background text-sm tabular-nums'
    : 'retro h-10 flex-1 border-border bg-background text-[11px] tabular-nums';
  const quickBtnClass = layout.isMono
    ? 'h-10 border-border px-3 text-xs text-muted-foreground hover:border-primary hover:text-primary'
    : 'retro h-10 border-border px-3 text-[9px] text-muted-foreground hover:border-primary hover:text-primary';
  const winColorClass = layout.isMono
    ? 'text-foreground'
    : 'text-[color:var(--chart-3)] [text-shadow:0_0_8px_color-mix(in_srgb,var(--chart-3)_70%,transparent)]';

  const handleBet = () => {
    const error = validateBet(amount, balance, true);
    if (error) {
      toast.error(error);
      return;
    }
    onBet();
  };

  const clamp = (value: number) => Math.max(MIN_BET, Math.min(maxBet, Math.floor(value)));

  const handleAmountInput = (raw: number) => {
    if (!Number.isFinite(raw)) {
      onAmountChange(MIN_BET);
      return;
    }
    onAmountChange(clamp(raw));
  };

  return (
    <div className="flex flex-col gap-4" data-testid="bet-controls">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[13px]">
          <Label htmlFor="bet-amount" className={cn(layout.sectionLabelClass, 'text-muted-foreground')}>
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
          <>
            <DebtLoanControls compact />
            {maxBet < MIN_BET ? (
              <p
                className="flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive"
                role="alert"
              >
                <AlertTriangle className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                <span>Max debt reached — take a loan before you can bet again.</span>
              </p>
            ) : (
              <p
                className="flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive"
                role="status"
              >
                <AlertTriangle className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                <span>
                  Max bet is lowered to{' '}
                  <span className="font-medium tabular-nums">{maxBet.toLocaleString()} GG</span> while
                  you owe the house.
                </span>
              </p>
            )}
          </>
        ) : null}
        <div className="flex items-stretch gap-2.5">
          <Input
            id="bet-amount"
            name="bet-amount"
            type="number"
            inputMode="numeric"
            autoComplete="off"
            spellCheck={false}
            min={MIN_BET}
            max={maxBet >= MIN_BET ? maxBet : undefined}
            value={Number.isFinite(amount) ? amount : ''}
            onChange={(e) => handleAmountInput(Number(e.target.value))}
            onBlur={() => handleAmountInput(amount)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !busy && canBet) {
                e.preventDefault();
                handleBet();
              }
            }}
            disabled={busy || maxBet < MIN_BET}
            className={inputClass}
            data-testid="bet-amount"
          />
          {(['1/2', 'x2', 'Max'] as const).map((label, i) => (
            <Button
              key={label}
              variant="outline"
              size="sm"
              disabled={busy || maxBet < MIN_BET}
              className={quickBtnClass}
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
        <span className="tabular-nums">
          Payout <span className="text-foreground">{multiplier.toFixed(4)}x</span>
        </span>
        <span className="tabular-nums" data-testid="potential-win">
          Win{' '}
          <span className={winColorClass}>{potentialWin.toLocaleString()} GG</span>
        </span>
      </div>
      <Button
        className={cn(
          'h-auto w-full py-[18px] hover:brightness-110',
          layout.isMarquee ? 'gg-marquee-display text-base' : layout.isMono ? 'text-sm' : 'retro text-xs',
        )}
        size="lg"
        onClick={handleBet}
        disabled={busy || !canBet}
        data-testid="bet-button"
        aria-keyshortcuts="Enter"
        style={{
          background: `linear-gradient(180deg, ${tokens.gradientFrom}, ${tokens.gradientTo})`,
          color: tokens.buttonText,
          boxShadow: layout.isMono ? undefined : `0 0 30px rgba(${tokens.glowRgb}, .55)`,
        }}
      >
        {busy
          ? `${betLabel}…`
          : maxBet < MIN_BET
            ? 'Take a loan to bet'
            : !canBet
              ? 'Adjust bet amount'
              : betLabel}
      </Button>
    </div>
  );
}
