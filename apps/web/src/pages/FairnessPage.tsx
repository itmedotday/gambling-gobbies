import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Input } from '@/components/ui/8bit/input';
import { Label } from '@/components/ui/8bit/label';
import { generateFloats } from '@gobbies/engine';
import { webHasher } from '@gobbies/engine/web';
import { floatCountFor, resolveBet } from '@/game/verifyBet';
import { useSessionStore } from '@/stores/sessionStore';
import { useFairnessStore } from '@/stores/fairnessStore';
import { apiGetFairness, apiRotateSeed } from '@/net/apiClient';

export default function FairnessPage() {
  const token = useSessionStore((s) => s.token);
  const ensureSession = useSessionStore((s) => s.ensureSession);
  const localClientSeed = useFairnessStore((s) => s.clientSeed);
  const [serverSeed, setServerSeed] = useState('');
  const [serverSeedHash, setServerSeedHash] = useState('');
  const [clientSeed, setClientSeed] = useState(localClientSeed);
  const [nonce, setNonce] = useState(0);
  const [amount, setAmount] = useState(10);
  const [paramsJson, setParamsJson] = useState('{"pick":"heads"}');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    void ensureSession();
  }, [ensureSession]);

  useEffect(() => {
    if (!token) return;
    void apiGetFairness(token).then((f) => {
      setServerSeedHash(f.activeSeedHash);
      setClientSeed(f.clientSeed);
      setNonce(f.nonce);
      if (f.activeSeedRevealed) setServerSeed(f.activeSeedRevealed);
    });
  }, [token]);

  const rotate = async () => {
    if (!token) return;
    const res = await apiRotateSeed(token);
    setServerSeed(res.revealedSeed);
    setServerSeedHash(res.newSeedHash);
    setNonce(res.nonce);
  };

  const verify = async () => {
    try {
      const params = JSON.parse(paramsJson) as Record<string, unknown>;
      const game = typeof params.game === 'string' ? params.game : 'coinflip';
      const gameId = game as import('@gobbies/shared').GameId;
      const floats = await generateFloats(webHasher, { serverSeed, clientSeed, nonce }, floatCountFor(gameId, params));
      const outcome = resolveBet(gameId, amount, params, floats);
      setResult(
        `${outcome.isWin ? 'WIN' : 'LOSS'} · ${outcome.multiplier.toFixed(2)}x · payout ${outcome.payout} · ${outcome.detail}`,
      );
    } catch (e) {
      setResult(e instanceof Error ? e.message : 'Verification failed');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Provably Fair</h1>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">Active seed pair</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-xs">
          <p>
            <span className="text-muted-foreground">Server seed hash:</span> {serverSeedHash || '—'}
          </p>
          <p>
            <span className="text-muted-foreground">Revealed server seed:</span> {serverSeed || '(rotate to reveal)'}
          </p>
          <p>
            <span className="text-muted-foreground">Client seed:</span> {clientSeed}
          </p>
          <p>
            <span className="text-muted-foreground">Next nonce:</span> {nonce}
          </p>
          <Button onClick={() => void rotate()} disabled={!token}>
            Rotate server seed
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">Verifier</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="verify-seed">Server seed (revealed)</Label>
              <Input id="verify-seed" value={serverSeed} onChange={(e) => setServerSeed(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="verify-client">Client seed</Label>
              <Input id="verify-client" value={clientSeed} onChange={(e) => setClientSeed(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="verify-nonce">Nonce</Label>
              <Input
                id="verify-nonce"
                type="number"
                value={nonce}
                onChange={(e) => setNonce(Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="verify-amount">Bet amount</Label>
              <Input
                id="verify-amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="verify-params">Params (JSON)</Label>
            <Input id="verify-params" value={paramsJson} onChange={(e) => setParamsJson(e.target.value)} />
          </div>
          <Button onClick={() => void verify()}>Recompute outcome</Button>
          {result && <p className="text-sm text-primary">{result}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
