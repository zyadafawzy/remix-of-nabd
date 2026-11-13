import type { Reading } from './healthRules';

export const suitChannels = [
  { id: 'ECG', name: 'Heart rate', placement: 'Chest contact pads', key: 'hr', unit: 'bpm', kind: 'Simulated sensor' },
  { id: 'TMP', name: 'Temperature', placement: 'Inner-suit contact', key: 'temp_c', unit: '°C', kind: 'Simulated sensor' },
  { id: 'DOS', name: 'Radiation', placement: 'Suit dosimeter', key: 'radiation_msv_day', unit: 'mSv/day', kind: 'Simulated sensor' },
  { id: 'AIR', name: 'Suit air CO₂', placement: 'Air-loop module', key: 'co2_ppm', unit: 'ppm', kind: 'Simulated sensor' },
  { id: 'IMU', name: 'Movement', placement: 'Motion module', key: 'exercise_aerobic_min', unit: 'min', kind: 'Demo activity estimate' },
  { id: 'SLP', name: 'Sleep', placement: 'Wearable activity pattern', key: 'sleep_h', unit: 'h', kind: 'Demo sleep estimate' },
] as const;

// Deterministic synthetic packets, not device drivers or validated physiology.
export function suitPacket(base: Reading, sequence: number): Reading {
  const wave = Math.sin(sequence * .7);
  return { ...base, hr: Math.round(base.hr + wave * 2), temp_c: Number((base.temp_c + wave * .1).toFixed(1)),
    co2_ppm: Math.round(base.co2_ppm + wave * 40), hr_source: 'simulated-suit', hr_confidence: 0 };
}
export function captureSuitReading(packet: Reading): Reading {
  return { ...packet, hr_source: 'simulated-suit', hr_confidence: 0,
    notes: [packet.notes, 'Synthetic suit packet. BP, glucose, weight, nutrition, mood, stress and reaction are prior demo values; not measured by this device.'].filter(Boolean).join('\n') };
}