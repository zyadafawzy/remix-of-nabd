// Illustrative mission clock: the synthetic expedition starts at MET day 030.
// Mars sol duration is illustrative; see the Science & sources page.
export const MARS_SOL_SECONDS = 88775.244;
export function missionClocks(now: number, sessionStart: number) {
  const elapsed = Math.max(0, Math.floor((now - sessionStart) / 1000)) + 30 * 86400;
  const days = Math.floor(elapsed / 86400);
  const time = [Math.floor(elapsed % 86400 / 3600), Math.floor(elapsed % 3600 / 60), elapsed % 60]
    .map(n => String(n).padStart(2, '0')).join(':');
  return { met: `${String(days).padStart(3, '0')}:${time}`, sol: (elapsed / MARS_SOL_SECONDS).toFixed(3),
    utc: new Date(now).toISOString().slice(11, 19) };
}