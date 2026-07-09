import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';
import { Badge } from '@/components/kit';
import { isInDebt } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export function WalletHud() {
  const layout = useThemeLayout();
  const balance = useWalletStore((s) => s.balance);
  const inDebt = isInDebt(balance);

  const badge = (
    <Badge
      variant="default"
      className={cn(
        'inline-flex min-w-[6.5rem] items-center gap-2 px-3 py-2 leading-none tabular-nums',
        layout.isMono ? 'text-xs' : 'retro text-[11px]',
        inDebt
          ? 'border border-destructive/50 bg-destructive/10 text-destructive shadow-[0_0_14px_rgba(244,63,94,.25)]'
          : layout.isMono
            ? 'border border-border bg-card text-foreground'
            : 'border border-[color:var(--chart-3)]/45 bg-[color:var(--chart-3)]/10 text-[color:var(--chart-3)] shadow-[0_0_14px_rgba(16,185,129,.3)]',
        'skin-shadcn:rounded-md skin-eightbit:rounded-sm',
        inDebt && 'hover:bg-destructive/15',
      )}
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

  if (inDebt) {
    return (
      <Link
        to="/lobby"
        className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="In debt — go to lobby for loans"
        title="In debt — tap for loans"
      >
        {badge}
      </Link>
    );
  }

  return badge;
}
