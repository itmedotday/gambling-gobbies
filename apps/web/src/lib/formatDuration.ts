/** Human-readable countdown, e.g. "19h 42m" or "14s". */
export function formatDurationShort(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  if (totalSec <= 0) return 'now';
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return m > 0 ? `${h}h ${m}m` : `${h}h`;
  if (m > 0) return s > 0 ? `${m}m ${s}s` : `${m}m`;
  return `${s}s`;
}
