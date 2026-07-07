import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Input } from '@/components/ui/8bit/input';
import { Label } from '@/components/ui/8bit/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/8bit/input-otp';
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
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Versus</h1>
      <p className="text-sm text-muted-foreground">
        Race a friend for Gobbie Gold. When the timer hits zero, whoever has more wins.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Create room</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                min={3}
                max={10}
                value={durationMin}
                onChange={(e) => setDurationMin(Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="bankroll">Starting bankroll (GG)</Label>
              <Input
                id="bankroll"
                type="number"
                value={bankroll}
                onChange={(e) => setBankroll(Number(e.target.value))}
              />
            </div>
            <Button onClick={() => void create()}>Create & invite</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Join room</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Label>Room code</Label>
            <InputOTP maxLength={4} value={code} onChange={setCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <Button variant="secondary" onClick={() => void join()}>
              Join tavern
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
