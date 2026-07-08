import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/kit';
import { useVersusStore } from '@/stores/versusStore';
import { toast } from 'sonner';

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
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="retro text-xl text-foreground drop-shadow-[0_0_12px_rgba(99,102,241,.55)]">
            Versus
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-lg">
            Race a friend for Gobbie Gold. When the timer hits zero, whoever has more wins.
          </p>
        </div>
        <div className="hidden items-center gap-4 pr-2 sm:flex">
          <img
            src="/assets/sprites/royal-goblin/run.webp"
            alt=""
            className="h-[88px] image-pixelated drop-shadow-[0_0_12px_rgba(99,102,241,.55)]"
          />
          <span className="retro text-xl text-destructive drop-shadow-[0_0_14px_rgba(244,63,94,.55)]">
            VS
          </span>
          <img
            src="/assets/sprites/tiny-pirate/idle.webp"
            alt=""
            className="h-[88px] -scale-x-100 image-pixelated drop-shadow-[0_0_12px_rgba(244,63,94,.45)]"
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="border border-border bg-card shadow-[inset_0_1px_12px_rgba(99,102,241,.08)]">
          <CardHeader className="border-b border-border border-t-2 border-t-primary/70">
            <CardTitle className="retro text-xs text-foreground">Create room</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="duration" className="text-muted-foreground">
                Duration (minutes)
              </Label>
              <Input
                id="duration"
                type="number"
                min={3}
                max={10}
                value={durationMin}
                onChange={(e) => setDurationMin(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="bankroll" className="text-muted-foreground">
                Starting bankroll (GG)
              </Label>
              <Input
                id="bankroll"
                type="number"
                value={bankroll}
                onChange={(e) => setBankroll(Number(e.target.value))}
              />
            </div>
            <Button
              onClick={() => void create()}
              className="retro mt-2 bg-gradient-to-b from-[color:var(--chart-1)] to-[color:var(--primary)] text-primary-foreground shadow-[0_0_26px_rgba(99,102,241,.45)] hover:shadow-[0_0_44px_rgba(99,102,241,.75)]"
            >
              Create & invite
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-border bg-card shadow-[inset_0_1px_12px_rgba(139,92,246,.08)]">
          <CardHeader className="border-b border-border border-t-2 border-t-[color:var(--chart-2)]/70">
            <CardTitle className="retro text-xs text-foreground">Join room</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-5">
            <Label className="text-muted-foreground">Room code</Label>
            <InputOTP maxLength={4} value={code} onChange={setCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <Button
              variant="secondary"
              onClick={() => void join()}
              className="retro mt-2 border border-primary/40 bg-primary/10 text-primary shadow-[0_0_16px_rgba(99,102,241,.25)] hover:shadow-[0_0_30px_rgba(99,102,241,.45)]"
            >
              Join tavern
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
