import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFeatureFlags } from '@/lib/use-feature-flags';
import { featureDefinitions } from '@/lib/features';

const available = ['F131', 'F141', 'F144', 'F145'];
export function FeatureControls() {
  const { enabled, setFlag, reset } = useFeatureFlags();
  const [query, setQuery] = useState('');
  return <section className="mt-6 border-t border-border pt-6">
    <div className="flex gap-3 items-center justify-between mb-3"><h2 className="text-lg">Demo feature availability</h2><Button variant="outline" size="icon" title="Reset feature availability" aria-label="Reset feature availability" onClick={reset}><RotateCcw /></Button></div>
    <p className="text-xs text-muted-foreground mb-4">This device only. These switches do not change crew permissions or private-data access.</p>
    <input aria-label="Find feature ID or name" placeholder="Find feature…" value={query} onChange={e => setQuery(e.target.value)} className="bg-background border border-input p-3 rounded-md w-full mb-3 text-sm" />
    <div className="max-h-80 overflow-y-auto divide-y divide-border">{featureDefinitions.filter(f => (f.id + f.name).toLowerCase().includes(query.toLowerCase())).map(f => <div key={f.id} className="flex items-start gap-3 py-4"><span className="font-mono text-xs text-primary shrink-0">{f.id}</span><label className="text-xs flex-1 leading-relaxed" htmlFor={`flag-${f.id}`}>{f.name}</label>{available.includes(f.id) ? <input id={`flag-${f.id}`} aria-label={`${f.id} availability`} type="checkbox" checked={enabled(f.id)} onChange={e => setFlag(f.id, e.target.checked)} /> : <span className="text-[10px] text-muted-foreground shrink-0">Not wired</span>}</div>)}</div>
  </section>;
}