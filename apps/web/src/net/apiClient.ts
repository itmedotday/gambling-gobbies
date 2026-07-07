const API_BASE = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:2567';

function authHeaders(token: string | null): HeadersInit {
  return token
    ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
}

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export async function apiGuestAuth(body: { name?: string; avatar?: string } = {}) {
  const res = await fetch(`${API_BASE}/api/auth/guest`, {
    method: 'POST',
    headers: authHeaders(null),
    body: JSON.stringify(body),
  });
  return parseJson<{ token: string; player: import('@gobbies/shared').PlayerProfile }>(res);
}

export async function apiGetProfile(token: string) {
  const res = await fetch(`${API_BASE}/api/profile`, { headers: authHeaders(token) });
  return parseJson<{ player: import('@gobbies/shared').PlayerProfile }>(res);
}

export async function apiPatchProfile(
  token: string,
  body: { name?: string; avatar?: import('@gobbies/shared').AvatarId },
) {
  const res = await fetch(`${API_BASE}/api/profile`, {
    method: 'PATCH',
    headers: authHeaders(token),
    body: JSON.stringify(body),
  });
  return parseJson<{ player: import('@gobbies/shared').PlayerProfile }>(res);
}

export async function apiGetBets(token: string) {
  const res = await fetch(`${API_BASE}/api/bets`, { headers: authHeaders(token) });
  return parseJson<{ bets: import('@gobbies/shared').BetRecord[] }>(res);
}

export async function apiRecordBet(
  token: string,
  body: import('@gobbies/shared').RecordBetRequest,
) {
  const res = await fetch(`${API_BASE}/api/bets`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(body),
  });
  return parseJson<import('@gobbies/shared').RecordBetResponse>(res);
}

export async function apiGetFairness(token: string) {
  const res = await fetch(`${API_BASE}/api/fairness`, { headers: authHeaders(token) });
  return parseJson<import('@gobbies/shared').FairnessState>(res);
}

export async function apiRotateSeed(token: string) {
  const res = await fetch(`${API_BASE}/api/fairness/rotate`, {
    method: 'POST',
    headers: authHeaders(token),
  });
  return parseJson<import('@gobbies/shared').RotateSeedResponse>(res);
}

export async function apiClaimDailyBonus(token: string) {
  const res = await fetch(`${API_BASE}/api/daily-bonus`, {
    method: 'POST',
    headers: authHeaders(token),
  });
  return parseJson<{ player: import('@gobbies/shared').PlayerProfile }>(res);
}

export async function apiLeaderboard(kind: import('@gobbies/shared').LeaderboardKind) {
  const res = await fetch(`${API_BASE}/api/leaderboard/${kind}`);
  return parseJson<{ entries: import('@gobbies/shared').LeaderboardEntry[] }>(res);
}

export function wsUrl(): string {
  return import.meta.env.VITE_WS_URL ?? 'ws://localhost:2567';
}

export { API_BASE };
