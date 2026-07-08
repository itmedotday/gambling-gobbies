import { useState } from 'react';
import { toast } from 'sonner';
import { Gift } from 'lucide-react';
import { Button } from '@/components/kit';
import { DAILY_BONUS_AMOUNT } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { NeonCard } from '@/components/game/NeonCard';

export function DailyBonusCard() {
  const claimDailyBonus = useWalletStore((s) => s.claimDailyBonus);
  const canClaimDailyBonus = useWalletStore((s) => s.canClaimDailyBonus);
  const [, setClaimCount] = useState(0);
  const claimable = canClaimDailyBonus();

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

  return (
    <NeonCard
      accent="emerald"
      className="flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center"
    >
      <div className="flex items-center gap-3">
        <Gift
          className="size-6 text-[color:var(--chart-3)] drop-shadow-[0_0_10px_rgba(16,185,129,.6)]"
          aria-hidden
        />
        <div className="flex flex-col gap-0.5">
          <span className="retro text-[11px] text-foreground">Daily bonus</span>
          <span className="text-sm text-muted-foreground">
            {DAILY_BONUS_AMOUNT} GG of goblin generosity, every 20 hours.
          </span>
        </div>
      </div>
      <Button
        onClick={handleClaim}
        disabled={!claimable}
        data-testid="daily-bonus-claim"
        className="gg-neon-btn-primary retro shrink-0 text-[10px]"
      >
        {claimable ? 'Claim' : 'Claimed'}
      </Button>
    </NeonCard>
  );
}
