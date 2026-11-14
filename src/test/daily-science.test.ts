import { describe, expect, it } from 'vitest';
import { dailyScienceIndex, scienceEntry } from '@/lib/daily-science';
import { evidence } from '@/lib/evidence';

describe('Daily sourced science', () => {
  it('keeps one entry throughout a UTC day and advances the following day', () => {
    const morning = dailyScienceIndex(new Date('2026-11-14T00:00:00Z'));
    expect(dailyScienceIndex(new Date('2026-11-14T23:59:59Z'))).toBe(morning);
    expect(dailyScienceIndex(new Date('2026-11-15T00:00:00Z'))).toBe((morning + 1) % evidence.length);
  });
  it('returns only curated NASA/CSA sources, including wrapped archive indices', () => {
    expect(scienceEntry(evidence.length)).toBe(evidence[0]);
    expect(scienceEntry(-1)).toBe(evidence.at(-1));
    for (let day = 0; day < 30; day++) {
      expect(evidence).toContain(scienceEntry(dailyScienceIndex(new Date(Date.UTC(2026, 10, day + 1)))));
    }
  });
});