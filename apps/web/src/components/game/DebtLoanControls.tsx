import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { HandCoins } from 'lucide-react';
import { Button } from '@/components/kit';
import {
  DEBT_LOAN_AMOUNT,
  DEBT_LOAN_COOLDOWN_MS,
  debtLoanCooldownRemaining,
  getMaxBet,
} from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export interface DebtLoanControlsProps {
  className?: string;
  /** Inline on game pages — hides max-bet reminder (BetControls shows it). */
  compact?: boolean;
}

/** Debt relief: 150 GG loan every 15 seconds while balance is negative. */
export function DebtLoanControls({ className, compact = false }: DebtLoanControlsProps) {
  const layout = useThemeLayout();
  const balance = useWalletStore((s) => s.balance);
  const lastLoanAt = useWalletStore((s) => s.lastLoanAt);
  const canTakeLoan = useWalletStore((s) => s.canTakeDebtLoan);
  const takeDebtLoan = useWalletStore((s) => s.takeDebtLoan);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, []);

  const cooldownMs = debtLoanCooldownRemaining(lastLoanAt, now);
  const ready = canTakeLoan();
  const cooldownSec = Math.ceil(cooldownMs / 1000);
  const maxBet = getMaxBet(balance, true);

  const handleLoan = () => {
    if (takeDebtLoan()) {
      toast.success(`The house fronts you ${DEBT_LOAN_AMOUNT} GG. Pay us back… eventually.`);
      setNow(Date.now());
    } else {
      toast.error(`Loan on cooldown — try again in ${cooldownSec}s.`);
    }
  };

  const labelClass = layout.sectionLabelClass;

  return (
    <div
      className={cn(
        'flex flex-col gap-2.5 rounded-sm border border-destructive/40 bg-destructive/10',
        compact ? 'px-3 py-2.5' : 'p-4 sm:p-5',
        className,
      )}
      role="status"
      data-testid="debt-loan-controls"
    >
      <div className="flex items-start gap-2.5">
        <HandCoins className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
        <div className="flex flex-col gap-1">
          <span className={cn(labelClass, 'text-destructive')}>House loan</span>
          <p className="text-xs leading-relaxed text-destructive/90">
            You&apos;re in debt. Take {DEBT_LOAN_AMOUNT} GG every {DEBT_LOAN_COOLDOWN_MS / 1000}{' '}
            seconds — your only top-up until you&apos;re back in the black.
          </p>
        </div>
      </div>
      {!compact ? (
        <p className="text-xs text-muted-foreground">
          Max bet while in debt:{' '}
          <span className="font-medium tabular-nums text-foreground">{maxBet.toLocaleString()} GG</span>
        </p>
      ) : null}
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={!ready}
        onClick={handleLoan}
        data-testid="debt-loan-button"
        className={cn(
          'h-auto w-full border-destructive/50 py-2 tabular-nums',
          layout.isMarquee ? 'gg-marquee-display text-sm' : layout.isMono ? 'text-xs' : 'retro text-xs',
        )}
      >
        <span aria-live="polite">
          {ready ? `Take ${DEBT_LOAN_AMOUNT} GG Loan` : `Loan ready in ${cooldownSec}s…`}
        </span>
      </Button>
    </div>
  );
}
