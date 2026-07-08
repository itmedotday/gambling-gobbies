import { useState } from 'react';
import { toast } from 'sonner';
import { Gift } from 'lucide-react';
import { Button } from '@/components/kit';
import { DAILY_BONUS_AMOUNT } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useThemeStyle } from '@/stores/settingsStore';
import { NeonCard } from '@/components/game/NeonCard';
import { cn } from '@/lib/utils';

export function DailyBonusCard() {
  const themeStyle = useThemeStyle();
  const claimDailyBonus = useWalletStore((s) => s.claimDailyBonus);
  const canClaimDailyBonus = useWalletStore((s) => s.canClaimDailyBonus);
  const [, setClaimCount] = useState(0);
  const claimable = canClaimDailyBonus();
  const isEmerald = themeStyle === 'emeraldDen';
  const isMarquee = themeStyle === 'highRollerMarquee';

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

  if (isEmerald) {
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
          className="gg-neon-btn-primary gg-font-fantasy shrink-0 px-[26px] py-2.5 text-lg"
        >
          {claimable ? 'Claim' : 'Claimed'}
        </Button>
      </div>
    );
  }

  const accent = isMarquee ? 'rose' : 'emerald';

  return (
    <NeonCard
      accent={accent}
      className={cn(
        'flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center',
        isMarquee && 'border-[rgba(244,63,94,.35)] bg-[rgba(24,15,32,.85)]',
      )}
      data-testid="daily-bonus-card"
    >
      <div className="flex items-center gap-3">
        <Gift
          className={cn(
            'size-6',
            isMarquee
              ? 'text-[#fb7185] drop-shadow-[0_0_10px_rgba(244,63,94,.6)]'
              : 'text-[color:var(--chart-3)] drop-shadow-[0_0_10px_rgba(16,185,129,.6)]',
          )}
          aria-hidden
        />
        <div className="flex flex-col gap-0.5">
          <span
            className={cn(
              'text-[11px] text-foreground',
              isMarquee ? 'gg-marquee-display text-lg' : 'retro',
            )}
          >
            Daily bonus
          </span>
          <span className="text-sm text-muted-foreground">
            {DAILY_BONUS_AMOUNT} GG of goblin generosity, every 20 hours.
          </span>
        </div>
      </div>
      <Button
        onClick={handleClaim}
        disabled={!claimable}
        data-testid="daily-bonus-claim"
        className={cn(
          'gg-neon-btn-primary shrink-0 text-[10px]',
          isMarquee ? 'gg-marquee-display px-6 py-3 text-base' : 'retro',
        )}
      >
        {claimable ? 'Claim' : 'Claimed'}
      </Button>
    </NeonCard>
  );
}
