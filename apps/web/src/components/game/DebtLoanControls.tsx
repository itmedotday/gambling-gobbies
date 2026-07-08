import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { HandCoins } from 'lucide-react';
import { Button } from '@/components/kit';
import { DEBT_LOAN_AMOUNT, DEBT_LOAN_COOLDOWN_MS, debtLoanCooldownRemaining } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { cn } from '@/lib/utils';

/** Debt relief: 150 GG loan every 15 seconds while balance is negative. */
export function DebtLoanControls({ className }: { className?: string }) {
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

  const handleLoan = () => {
    if (takeDebtLoan()) {
      toast.success(`The house fronts you ${DEBT_LOAN_AMOUNT} GG. Pay us back… eventually.`);
      setNow(Date.now());
    } else {
      toast.error(`Loan on cooldown — try again in ${cooldownSec}s.`);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2.5',
        className,
      )}
      role="status"
    >
      <div className="flex items-start gap-2">
        <HandCoins className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
        <p className="text-xs text-destructive">
          You&apos;re in debt. Take a loan of {DEBT_LOAN_AMOUNT} GG every{' '}
          {DEBT_LOAN_COOLDOWN_MS / 1000} seconds — that&apos;s your only top-up until you&apos;re
          back in the black.
        </p>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={!ready}
        onClick={handleLoan}
        data-testid="debt-loan-button"
        className="h-auto w-full border-destructive/50 py-2 text-xs tabular-nums"
      >
        {ready ? `Take ${DEBT_LOAN_AMOUNT} GG Loan` : `Loan ready in ${cooldownSec}s…`}
      </Button>
    </div>
  );
}
