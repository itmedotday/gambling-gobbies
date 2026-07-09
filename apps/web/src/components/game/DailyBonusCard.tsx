import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Gift } from 'lucide-react';
import { Button } from '@/components/kit';
import { DAILY_BONUS_AMOUNT, DAILY_BONUS_COOLDOWN_MS, isInDebt } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { DebtLoanControls } from '@/components/game/DebtLoanControls';
import { NeonCard } from '@/components/game/NeonCard';
import { formatDurationShort } from '@/lib/formatDuration';
import { cn } from '@/lib/utils';

export function DailyBonusCard() {
  const layout = useThemeLayout();
  const balance = useWalletStore((s) => s.balance);
  const lastBonusAt = useWalletStore((s) => s.lastBonusAt);
  const claimDailyBonus = useWalletStore((s) => s.claimDailyBonus);
  const canClaimDailyBonus = useWalletStore((s) => s.canClaimDailyBonus);
  const [, setClaimCount] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const claimable = canClaimDailyBonus();
  const inDebt = isInDebt(balance);

  useEffect(() => {
    if (claimable) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [claimable]);

  const cooldownMs =
    lastBonusAt === null ? 0 : Math.max(0, DAILY_BONUS_COOLDOWN_MS - (now - lastBonusAt));
  const claimLabel = claimable ? 'Claim' : `Available in ${formatDurationShort(cooldownMs)}`;

  if (inDebt) {
    return (
      <div data-testid="debt-loan-card" className="w-full">
        <DebtLoanControls />
      </div>
    );
  }

  const handleClaim = () => {
    if (claimDailyBonus()) {
      toast.success(
        `The goblins spot you ${DAILY_BONUS_AMOUNT} GG. Don't spend it all in one pit.`,
      );
    } else {
      toast.error('Bonus already claimed. Come back later.');
    }
    setClaimCount((c) => c + 1);
  };

  const titleClass = layout.sectionLabelClass;
  const btnClass = layout.isMarquee
    ? 'gg-marquee-display px-6 py-3 text-base'
    : layout.isEmerald
      ? 'gg-neon-btn-primary gg-font-fantasy px-[26px] py-2.5 text-lg'
      : layout.isMono
        ? 'text-sm'
        : 'retro gg-neon-btn-primary text-[10px]';

  if (layout.isEmerald) {
    return (
      <div
        className="flex flex-col items-start justify-between gap-4 border border-dashed border-[rgba(236,194,78,.4)] bg-[rgba(236,194,78,.05)] p-4 sm:flex-row sm:items-center sm:px-[22px] sm:py-4"
        data-testid="daily-bonus-card"
      >
        <div className="flex items-center gap-3.5">
          <Gift
            className="size-[22px] text-gold [filter:drop-shadow(0_0_6px_rgba(236,194,78,.8))]"
            aria-hidden
          />
          <div className="flex flex-col gap-0.5">
            <span className="gg-font-fantasy text-[19px] text-gold [text-shadow:0_0_8px_rgba(236,194,78,.6)]">
              Daily bonus
            </span>
            <span className="text-[13px] text-muted-foreground">
              {DAILY_BONUS_AMOUNT} GG of goblin generosity, every 20 hours.
            </span>
          </div>
        </div>
        <Button
          onClick={handleClaim}
          disabled={!claimable}
          data-testid="daily-bonus-claim"
          className={btnClass}
        >
          <span aria-live="polite">{claimLabel}</span>
        </Button>
      </div>
    );
  }

  if (layout.isMono) {
    return (
      <div
        className="flex flex-col items-start justify-between gap-4 border border-border bg-card/60 p-5 sm:flex-row sm:items-center"
        data-testid="daily-bonus-card"
      >
        <div className="flex items-center gap-3">
          <Gift className="size-6 text-foreground" aria-hidden />
          <div className="flex flex-col gap-0.5">
            <span className={cn(titleClass, 'text-foreground')}>Daily bonus</span>
            <span className="text-sm text-muted-foreground">
              {DAILY_BONUS_AMOUNT} GG of goblin generosity, every 20 hours.
            </span>
          </div>
        </div>
        <Button onClick={handleClaim} disabled={!claimable} data-testid="daily-bonus-claim" className={btnClass}>
          <span aria-live="polite">{claimLabel}</span>
        </Button>
      </div>
    );
  }

  const accent = layout.isMarquee ? 'rose' : 'emerald';

  return (
    <NeonCard
      accent={accent}
      className={cn(
        'flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center',
        layout.isMarquee && 'border-[rgba(244,63,94,.35)] bg-card dark:bg-[rgba(24,15,32,.85)]',
      )}
      data-testid="daily-bonus-card"
    >
      <div className="flex items-center gap-3">
        <Gift
          className={cn(
            'size-6',
            layout.isMarquee
              ? 'text-[#fb7185] drop-shadow-[0_0_10px_rgba(244,63,94,.6)]'
              : 'text-[color:var(--chart-3)] drop-shadow-[0_0_10px_rgba(16,185,129,.6)]',
          )}
          aria-hidden
        />
        <div className="flex flex-col gap-0.5">
          <span className={cn(titleClass, 'text-foreground')}>Daily bonus</span>
          <span className="text-sm text-muted-foreground">
            {DAILY_BONUS_AMOUNT} GG of goblin generosity, every 20 hours.
          </span>
        </div>
      </div>
      <Button
        onClick={handleClaim}
        disabled={!claimable}
        data-testid="daily-bonus-claim"
        className={cn('gg-neon-btn-primary shrink-0', btnClass)}
      >
        <span aria-live="polite">{claimLabel}</span>
      </Button>
    </NeonCard>
  );
}
