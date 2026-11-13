import { describe, expect, it } from 'vitest';
import { defaultPreferences, parsePreferences } from '@/lib/console-preferences';
import { missionClocks } from '@/lib/console-clock';

describe('Console preferences', () => {
  it('supports dark, Daylight and High Contrast without accepting unknown themes', () => {
    expect(parsePreferences({ theme: 'daylight' }).theme).toBe('daylight');
    expect(parsePreferences({ theme: 'contrast' }).theme).toBe('contrast');
    expect(parsePreferences({ theme: 'unexpected' }).theme).toBe('dark');
  });
  it('retains valid preferences and rejects malformed saved values', () => {
    expect(parsePreferences(null)).toEqual(defaultPreferences);
    expect(parsePreferences({ reducedMotion: 'false', accent: 'green', collapsed: true })).toMatchObject({ reducedMotion: false, accent: 'green', collapsed: true });
  });
});
describe('Illustrative mission clocks', () => {
  it('starts at mission day 030 and advances one second with UTC', () => {
    const start = Date.UTC(2026, 10, 13, 18, 11, 0);
    expect(missionClocks(start, start).met).toBe('030:00:00:00');
    expect(missionClocks(start + 1000, start)).toMatchObject({ met: '030:00:00:01', utc: '18:11:01' });
  });
});