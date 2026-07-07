import { Coins } from 'lucide-react';
import { Badge } from '@/components/ui/8bit/badge';
import { useWalletStore } from '@/stores/walletStore';

export function WalletHud() {
  const balance = useWalletStore((s) => s.balance);

  return (
    <Badge
      variant="default"
      className="retro flex items-center gap-1.5 bg-card px-2.5 py-1.5 text-[10px] text-gold"
      data-testid="wallet-balance"
    >
      <Coins className="size-3.5" aria-hidden />
      <span aria-label={`Balance: ${balance.toLocaleString()} Gobbie Gold`}>
        {balance.toLocaleString()} GG
      </span>
    </Badge>
  );
}
