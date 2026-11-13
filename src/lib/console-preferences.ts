import { useEffect, useState } from 'react';

export type ConsolePreferences = {
  theme: 'dark' | 'daylight' | 'contrast';
  accent: 'cyan' | 'green' | 'blue';
  density: 'comfortable' | 'compact';
  textSize: 'standard' | 'large';
  reducedMotion: boolean;
  collapsed: boolean;
  quiet: boolean;
};
export const defaultPreferences: ConsolePreferences = {
  theme: 'dark', accent: 'cyan', density: 'comfortable', textSize: 'standard',
  reducedMotion: false, collapsed: false, quiet: false,
};
export function parsePreferences(value: unknown): ConsolePreferences {
  if (!value || typeof value !== 'object') return { ...defaultPreferences };
  const p = value as Record<string, unknown>;
  return {
    theme: p.theme === 'daylight' || p.theme === 'contrast' ? p.theme : 'dark',
    accent: p.accent === 'green' || p.accent === 'blue' ? p.accent : 'cyan',
    density: p.density === 'compact' ? 'compact' : 'comfortable',
    textSize: p.textSize === 'large' ? 'large' : 'standard',
    reducedMotion: p.reducedMotion === true, collapsed: p.collapsed === true, quiet: p.quiet === true,
  };
}
function readPreferences() {
  try { return parsePreferences(JSON.parse(localStorage.getItem('nabd-console-preferences') ?? '{}')); }
  catch { return { ...defaultPreferences }; }
}
function applyPreferences(p: ConsolePreferences) {
  const root = document.documentElement;
  root.dataset.theme = p.theme;
  root.dataset.accent = p.accent;
  root.dataset.density = p.density;
  root.dataset.textSize = p.textSize;
  root.classList.toggle('reduce-motion', p.reducedMotion);
  root.classList.toggle('dark', p.theme !== 'daylight');
}
export function useConsolePreferences() {
  const [preferences, setPreferences] = useState<ConsolePreferences>(defaultPreferences);
  useEffect(() => {
    const refresh = () => { const p = readPreferences(); setPreferences(p); applyPreferences(p); };
    refresh();
    window.addEventListener('nabd-preferences', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('nabd-preferences', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  function updatePreferences(patch: Partial<ConsolePreferences>) {
    const next = parsePreferences({ ...readPreferences(), ...patch });
    localStorage.setItem('nabd-console-preferences', JSON.stringify(next));
    window.dispatchEvent(new Event('nabd-preferences'));
  }
  return { preferences, updatePreferences };
}