import { Coins } from 'lucide-react';
import { Badge } from '@/components/kit';
import { isInDebt } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';

export function WalletHud() {
  const balance = useWalletStore((s) => s.balance);
  const inDebt = isInDebt(balance);

  return (
    <Badge
      variant="default"
      className={[
        'retro inline-flex items-center gap-2 px-3 py-2 text-[10px] leading-none',
        inDebt
          ? 'border border-destructive/50 bg-destructive/10 text-destructive shadow-[0_0_14px_rgba(244,63,94,.25)]'
          : 'border border-[color:var(--chart-3)]/45 bg-[color:var(--chart-3)]/10 text-[color:var(--chart-3)] shadow-[0_0_14px_rgba(16,185,129,.3)]',
        'skin-shadcn:rounded-md skin-eightbit:rounded-sm',
      ].join(' ')}
      data-testid="wallet-balance"
    >
      <Coins className="size-3.5" aria-hidden />
      <span
        aria-label={`Balance: ${balance.toLocaleString()} Gobbie Gold${inDebt ? ', in debt' : ''}`}
      >
        {balance.toLocaleString()} GG
        {inDebt ? ' · debt' : ''}
      </span>
    </Badge>
  );
}
