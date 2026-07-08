import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Label, InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/kit';
import { useVersusStore } from '@/stores/versusStore';
import { toast } from 'sonner';
import { NeonCard } from '@/components/game/NeonCard';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

function clampDuration(n: number): number {
  if (!Number.isFinite(n)) return 5;
  return Math.max(3, Math.min(10, Math.floor(n)));
}

function clampBankroll(n: number): number {
  if (!Number.isFinite(n)) return 1000;
  return Math.max(100, Math.min(100_000, Math.floor(n)));
}

export default function VersusHubPage() {
  const layout = useThemeLayout();
  const navigate = useNavigate();
  const connectCreate = useVersusStore((s) => s.connectCreate);
  const connectJoin = useVersusStore((s) => s.connectJoin);
  const [code, setCode] = useState('');
  const [durationMin, setDurationMin] = useState(5);
  const [bankroll, setBankroll] = useState(1000);

  const labelClass = layout.sectionLabelClass;
  const inputClass = layout.isMono
    ? 'h-[42px] border-border bg-background text-sm'
    : 'retro h-[42px] border-border bg-background text-[11px]';
  const otpSlotClass = cn(
    'h-16 w-14 text-lg',
    layout.isMono ? 'border-border' : 'retro border-primary/60 shadow-[0_0_14px_rgba(139,92,246,.3)]',
  );

  const create = async () => {
    const duration = clampDuration(durationMin);
    const start = clampBankroll(bankroll);
    if (duration !== durationMin) setDurationMin(duration);
    if (start !== bankroll) setBankroll(start);

    try {
      const roomCode = await connectCreate({
        durationMs: duration * 60_000,
        startingBankroll: start,
      });
      toast.success(`Room ${roomCode} created`);
      navigate(`/versus/${roomCode}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Could not create room');
    }
  };

  const join = async () => {
    if (code.length !== 4) {
      toast.error('Enter a 4-letter room code');
      return;
    }
    try {
      await connectJoin(code.toUpperCase());
      navigate(`/versus/${code.toUpperCase()}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Could not join room');
    }
  };

  return (
    <div
      className="mx-auto flex w-full max-w-4xl flex-col gap-8"
      style={layout.pageGlowStyle}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-2.5">
          <h1 className={layout.pageTitleClass}>Versus</h1>
          <p className={cn(layout.bodyTextClass, 'max-w-lg text-[15px]')}>
            Race a friend for Gobbie Gold. When the timer hits zero, whoever has more wins.
          </p>
        </div>
        <div className="hidden items-center gap-4 pr-5 sm:flex">
          <img
            src="/assets/sprites/royal-goblin/run.webp"
            alt=""
            className={cn(
              'h-[88px] image-pixelated',
              !layout.isMono && 'drop-shadow-[0_0_12px_rgba(99,102,241,.7)]',
            )}
          />
          <span
            className={cn(
              layout.isMarquee ? 'gg-marquee-display text-xl' : layout.isEmerald ? 'gg-font-fantasy text-xl' : layout.isMono ? 'text-lg font-bold' : 'retro text-lg',
              'text-destructive',
              !layout.isMono && 'drop-shadow-[0_0_14px_rgba(244,63,94,.9)]',
            )}
          >
            VS
          </span>
          <img
            src="/assets/sprites/royal-goblin/idle.webp"
            alt=""
            className={cn(
              'h-[88px] -scale-x-100 image-pixelated',
              !layout.isMono && 'drop-shadow-[0_0_12px_rgba(244,63,94,.7)]',
            )}
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <NeonCard accent="indigo" className="flex flex-col gap-[18px] p-6">
          <span className={cn(labelClass, 'text-foreground')}>Create room</span>
          <div className="flex flex-col gap-2">
            <Label htmlFor="duration" className="text-[13px] text-muted-foreground">
              Duration (minutes, 3–10)
            </Label>
            <Input
              id="duration"
              type="number"
              min={3}
              max={10}
              value={durationMin}
              onChange={(e) => setDurationMin(clampDuration(Number(e.target.value)))}
              onBlur={() => setDurationMin(clampDuration(durationMin))}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bankroll" className="text-[13px] text-muted-foreground">
              Starting bankroll (100–100,000 GG)
            </Label>
            <Input
              id="bankroll"
              type="number"
              min={100}
              max={100_000}
              value={bankroll}
              onChange={(e) => setBankroll(clampBankroll(Number(e.target.value)))}
              onBlur={() => setBankroll(clampBankroll(bankroll))}
              className={inputClass}
            />
          </div>
          <Button
            onClick={() => void create()}
            className={cn(
              'gg-neon-btn-primary mt-1 py-4',
              layout.isMarquee ? 'gg-marquee-display text-base' : layout.isMono ? 'text-sm' : 'retro text-[11px]',
            )}
          >
            Create & invite
          </Button>
        </NeonCard>

        <NeonCard accent="violet" className="flex flex-col gap-[18px] p-6">
          <span className={cn(labelClass, 'text-foreground')}>Join room</span>
          <Label className="text-[13px] text-muted-foreground">Room code</Label>
          <InputOTP maxLength={4} value={code} onChange={setCode}>
            <InputOTPGroup className="gap-3">
              {[0, 1, 2, 3].map((index) => (
                <InputOTPSlot key={index} index={index} className={otpSlotClass} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <Button
            variant="secondary"
            onClick={() => void join()}
            className={cn(
              'mt-auto border border-primary/55 bg-primary/10 py-4 text-primary',
              layout.isMono ? 'text-sm' : 'retro text-[11px] shadow-[0_0_16px_rgba(139,92,246,.25)] hover:shadow-[0_0_30px_rgba(139,92,246,.6)]',
            )}
          >
            Join tavern
          </Button>
        </NeonCard>
      </div>
    </div>
  );
}
