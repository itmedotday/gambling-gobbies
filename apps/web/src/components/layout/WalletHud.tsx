import { Coins } from 'lucide-react';
import { Badge } from '@/components/ui/8bit/badge';
import { isInDebt } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';

export function WalletHud() {
  const balance = useWalletStore((s) => s.balance);
  const inDebt = isInDebt(balance);

  return (
    <Badge
      variant="default"
      className={`retro flex items-center gap-1.5 bg-card px-2.5 py-1.5 text-[10px] ${
        inDebt ? 'text-destructive' : 'text-primary'
      }`}
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
