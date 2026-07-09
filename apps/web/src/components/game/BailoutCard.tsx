import { toast } from 'sonner';
import { LifeBuoy } from 'lucide-react';
import { Button } from '@/components/kit';
import { BAILOUT_AMOUNT, BAILOUT_THRESHOLD, isInDebt } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { NeonCard } from '@/components/game/NeonCard';
import { cn } from '@/lib/utils';

/** Low-balance bailout when not in debt — 100 GG every 5 minutes below 10 GG. */
export function BailoutCard() {
  const layout = useThemeLayout();
  const balance = useWalletStore((s) => s.balance);
  const canClaimBailout = useWalletStore((s) => s.canClaimBailout);
  const claimBailout = useWalletStore((s) => s.claimBailout);

  if (isInDebt(balance) || balance >= BAILOUT_THRESHOLD) return null;

  const claimable = canClaimBailout();

  const handleClaim = () => {
    if (claimBailout()) {
      toast.success(`Emergency stash: ${BAILOUT_AMOUNT} GG to keep you in the pit.`);
    } else {
      toast.error('Bailout on cooldown — hang tight.');
    }
  };

  const titleClass = layout.sectionLabelClass;

  if (layout.isEmerald) {
    return (
      <div
        className="flex flex-col items-start justify-between gap-4 border border-dashed border-primary/35 bg-primary/5 p-4 sm:flex-row sm:items-center sm:px-[22px] sm:py-4"
        data-testid="bailout-card"
      >
        <div className="flex items-center gap-3.5">
          <LifeBuoy className="size-[22px] text-primary" aria-hidden />
          <div className="flex flex-col gap-0.5">
            <span className={cn(titleClass, 'text-primary')}>Emergency bailout</span>
            <span className="text-[13px] text-muted-foreground">
              Running low? Grab {BAILOUT_AMOUNT} GG (below {BAILOUT_THRESHOLD} GG, every 5 min).
            </span>
          </div>
        </div>
        <Button
          onClick={handleClaim}
          disabled={!claimable}
          data-testid="bailout-claim"
          className="gg-neon-btn-primary gg-font-fantasy shrink-0 px-[26px] py-2.5 text-lg"
        >
          {claimable ? 'Claim bailout' : 'On cooldown'}
        </Button>
      </div>
    );
  }

  const accent = layout.isMarquee ? 'rose' : layout.isMono ? 'indigo' : 'emerald';

  return (
    <NeonCard
      accent={accent}
      className={cn(
        'flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center',
        layout.isMarquee && 'border-[rgba(244,63,94,.25)] bg-card dark:bg-[rgba(24,15,32,.85)]',
        layout.isMono && 'shadow-none',
      )}
      data-testid="bailout-card"
    >
      <div className="flex items-center gap-3">
        <LifeBuoy
          className={cn('size-6', layout.isMono ? 'text-foreground' : 'text-primary')}
          aria-hidden
        />
        <div className="flex flex-col gap-0.5">
          <span className={cn(titleClass, 'text-foreground')}>Emergency bailout</span>
          <span className="text-sm text-muted-foreground">
            Running low? Grab {BAILOUT_AMOUNT} GG (below {BAILOUT_THRESHOLD} GG, every 5 min).
          </span>
        </div>
      </div>
      <Button
        onClick={handleClaim}
        disabled={!claimable}
        data-testid="bailout-claim"
        className={cn(
          'gg-neon-btn-primary shrink-0',
          layout.isMarquee ? 'gg-marquee-display px-6 py-3 text-base' : layout.isMono ? 'text-sm' : 'retro text-[10px]',
        )}
      >
        {claimable ? 'Claim bailout' : 'On cooldown'}
      </Button>
    </NeonCard>
  );
}
