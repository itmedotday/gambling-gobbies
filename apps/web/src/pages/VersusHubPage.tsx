import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Label, InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/kit';
import { useVersusStore } from '@/stores/versusStore';
import { toast } from 'sonner';
import { NeonCard } from '@/components/game/NeonCard';

export default function VersusHubPage() {
  const navigate = useNavigate();
  const connectCreate = useVersusStore((s) => s.connectCreate);
  const connectJoin = useVersusStore((s) => s.connectJoin);
  const [code, setCode] = useState('');
  const [durationMin, setDurationMin] = useState(5);
  const [bankroll, setBankroll] = useState(1000);

  const create = async () => {
    try {
      const roomCode = await connectCreate({
        durationMs: durationMin * 60_000,
        startingBankroll: bankroll,
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
      style={{
        backgroundImage: 'radial-gradient(at 50% 0%, rgba(99,102,241,.16) 0, transparent 50%)',
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-2.5">
          <h1 className="gg-hero-title retro text-xl text-foreground">Versus</h1>
          <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Race a friend for Gobbie Gold. When the timer hits zero, whoever has more wins.
          </p>
        </div>
        <div className="hidden items-center gap-4 pr-5 sm:flex">
          <img
            src="/assets/sprites/royal-goblin/run.webp"
            alt=""
            className="h-[88px] image-pixelated drop-shadow-[0_0_12px_rgba(99,102,241,.7)]"
          />
          <span className="retro text-lg text-destructive drop-shadow-[0_0_14px_rgba(244,63,94,.9)]">
            VS
          </span>
          <img
            src="/assets/sprites/tiny-pirate/idle.webp"
            alt=""
            className="h-[88px] -scale-x-100 image-pixelated drop-shadow-[0_0_12px_rgba(244,63,94,.7)]"
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <NeonCard accent="indigo" className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[11px] text-foreground">Create room</span>
          <div className="flex flex-col gap-2">
            <Label htmlFor="duration" className="text-[13px] text-muted-foreground">
              Duration (minutes)
            </Label>
            <Input
              id="duration"
              type="number"
              min={3}
              max={10}
              value={durationMin}
              onChange={(e) => setDurationMin(Number(e.target.value))}
              className="retro h-[42px] border-border bg-background text-[11px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bankroll" className="text-[13px] text-muted-foreground">
              Starting bankroll (GG)
            </Label>
            <Input
              id="bankroll"
              type="number"
              value={bankroll}
              onChange={(e) => setBankroll(Number(e.target.value))}
              className="retro h-[42px] border-border bg-background text-[11px]"
            />
          </div>
          <Button
            onClick={() => void create()}
            className="gg-neon-btn-primary retro mt-1 py-4 text-[11px]"
          >
            Create & invite
          </Button>
        </NeonCard>

        <NeonCard accent="violet" className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[11px] text-foreground">Join room</span>
          <Label className="text-[13px] text-muted-foreground">Room code</Label>
          <InputOTP maxLength={4} value={code} onChange={setCode}>
            <InputOTPGroup className="gap-3">
              <InputOTPSlot
                index={0}
                className="retro h-16 w-14 border-primary/60 text-lg shadow-[0_0_14px_rgba(139,92,246,.3)]"
              />
              <InputOTPSlot
                index={1}
                className="retro h-16 w-14 border-primary/60 text-lg shadow-[0_0_14px_rgba(139,92,246,.3)]"
              />
              <InputOTPSlot
                index={2}
                className="retro h-16 w-14 border-primary text-lg shadow-[0_0_22px_rgba(139,92,246,.6)]"
              />
              <InputOTPSlot
                index={3}
                className="retro h-16 w-14 border-border text-lg text-muted-foreground/40"
              />
            </InputOTPGroup>
          </InputOTP>
          <Button
            variant="secondary"
            onClick={() => void join()}
            className="retro mt-auto border border-primary/55 bg-primary/10 py-4 text-[11px] text-primary shadow-[0_0_16px_rgba(139,92,246,.25)] hover:shadow-[0_0_30px_rgba(139,92,246,.6)]"
          >
            Join tavern
          </Button>
        </NeonCard>
      </div>
    </div>
  );
}
