import { useEffect, useState } from 'react';
import { isFeatureEnabled, parseFeatureOverrides, type FeatureId } from './features';

const key = 'nabd-demo-feature-flags';
function read() {
  try { return parseFeatureOverrides(JSON.parse(localStorage.getItem(key) ?? '{}')); }
  catch { return {}; }
}
// Local demonstration availability only; never use these flags for permissions.
export function useFeatureFlags() {
  const [overrides, setOverrides] = useState<Partial<Record<FeatureId, boolean>>>({});
  useEffect(() => {
    const refresh = () => setOverrides(read());
    refresh(); window.addEventListener('nabd-flags', refresh); window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('nabd-flags', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  function setFlag(id: FeatureId, enabled: boolean) {
    localStorage.setItem(key, JSON.stringify({ ...read(), [id]: enabled }));
    window.dispatchEvent(new Event('nabd-flags'));
  }
  function reset() { localStorage.removeItem(key); window.dispatchEvent(new Event('nabd-flags')); }
  return { enabled: (id: FeatureId) => isFeatureEnabled(id, overrides), setFlag, reset };
}