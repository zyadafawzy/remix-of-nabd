import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hazards } from '@/lib/hazards';
import type { Level, Zone } from '@/lib/healthRules';
import { Body2D } from './body';

const affected: Record<string, Zone[]> = {
  radiation: ['Immune'], isolation: ['Mind', 'Brain'], distance: ['Heart', 'Mind'],
  gravity: ['Bones', 'Muscles', 'Eyes', 'Heart'], environment: ['Lungs', 'Brain'],
};
const zoneNames: Zone[] = ['Brain', 'Eyes', 'Heart', 'Lungs', 'Bones', 'Muscles', 'Metabolism', 'Immune', 'Mind'];
export function HazardExplorer() {
  const [selected, setSelected] = useState('radiation');
  const [zone, setZone] = useState<Zone | null>(null);
  const hazard = hazards.find(h => h.key === selected) ?? hazards[0];
  if (!hazard) return null;
  const related = affected[hazard.key] ?? [];
  const zones = Object.fromEntries(zoneNames.map(z => [z, related.includes(z) ? 'amber' : 'green'])) as Record<Zone, Level>;
  return <section className="public-band" aria-label="Five spaceflight hazards">
    <p className="eyebrow text-primary">NASA / HUMAN RESEARCH PROGRAM</p><h2 className="mt-3">Five hazards. One connected crew.</h2>
    <div role="group" aria-label="Select spaceflight hazard" className="flex flex-wrap gap-2 my-6">{hazards.map(h => <Button key={h.key} variant={h.key === selected ? 'secondary' : 'outline'} aria-pressed={h.key === selected} className="h-auto min-h-11 whitespace-normal text-left" onClick={() => { setSelected(h.key); setZone(null); }}>{h.name}</Button>)}</div>
    <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] gap-8 items-start"><article aria-live="polite"><h3 className="text-2xl">{hazard.name}</h3><p className="text-muted-foreground mt-4 leading-relaxed">{hazard.description}</p><dl className="mt-6 space-y-5 text-sm"><div><dt className="text-primary mb-2">Observe</dt><dd className="text-muted-foreground leading-relaxed">{hazard.measure}</dd></div><div><dt className="text-primary mb-2">Crew action</dt><dd className="text-muted-foreground leading-relaxed">{hazard.action}</dd></div></dl><p className="text-xs text-warning mt-5">Highlighted systems show educational associations, not assessed health or measured risk.</p>{zone && <p className="text-sm mt-4" role="status">{zone}: {related.includes(zone) ? 'associated with this hazard in this educational view.' : 'not highlighted for this hazard; other mission factors can still affect this system.'}</p>}<div className="flex flex-wrap gap-4 mt-6"><a href={hazard.source} target="_blank" rel="noreferrer" className="text-primary text-sm inline-flex items-center gap-2">NASA evidence<ArrowUpRight size={14} /></a><Button asChild variant="link" className="px-0"><Link to="/app/missions">Inspect mission context<ArrowRight /></Link></Button></div></article><div><Body2D zones={zones} onZone={setZone} /><p className="text-xs text-muted-foreground text-center">Educational 2D schematic · not a crew assessment</p></div></div>
  </section>;
}