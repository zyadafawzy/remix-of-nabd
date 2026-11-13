import { describe, it, expect } from 'vitest';
import { defaultCrew, defaultReading } from '@/lib/demo';
import { captureSuitReading, suitPacket } from '@/lib/suit-sensors';
describe('conceptual suit capture', () => {
  it('automatically supplies a synthetic pulse with zero measured confidence', () => {
    const packet = suitPacket(defaultReading(defaultCrew), 2);
    expect(packet.hr).toBe(defaultCrew.baseline_hr + 2);
    expect(packet.hr_source).toBe('simulated-suit');
    expect(packet.hr_confidence).toBe(0);
  });
  it('never pretends unsupported metrics were acquired by suit sensors', () => {
    const base = { ...defaultReading(defaultCrew), glucose_mgdl: 91, sys: 113, weight_kg: 72 };
    const result = captureSuitReading(suitPacket(base, 4));
    expect(result.glucose_mgdl).toBe(91);
    expect(result.sys).toBe(113);
    expect(result.weight_kg).toBe(72);
    expect(result.notes).toContain('not measured by this device');
    expect(base.notes).toBe('');
  });
});