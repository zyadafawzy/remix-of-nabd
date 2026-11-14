import { evidence } from './evidence';

// Editorial rotation only, not a scientific score or health algorithm.
export function dailyScienceIndex(date: Date): number {
  const day = Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 86_400_000);
  return ((day % evidence.length) + evidence.length) % evidence.length;
}

export function scienceEntry(index: number) {
  return evidence[((index % evidence.length) + evidence.length) % evidence.length] ?? evidence[0];
}