import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Body2D } from './body';
import type { Level,Zone } from '@/lib/healthRules';
export function Body({zones,onZone}:{zones:Record<Zone,Level>;onZone:(zone:Zone)=>void}) {
 const [layer,setLayer]=useState<'systems'|'structure'>('systems');
 return <div><div className="body-view-toolbar"><span className="eyebrow">ANATOMY / 2D</span><div className="flex gap-1" role="group" aria-label="Anatomy layer">{(['systems','structure'] as const).map(mode=><Button key={mode} variant={layer===mode?'secondary':'ghost'} size="sm" aria-pressed={layer===mode} onClick={()=>setLayer(mode)}>{mode==='systems'?'Systems':'Structure'}</Button>)}</div></div><Body2D zones={zones} onZone={onZone} layer={layer}/><div className="body-system-controls">{(Object.keys(zones) as Zone[]).map(zone=><Button key={zone} variant="ghost" className="text-xs justify-start" onClick={()=>onZone(zone)} aria-label={`Inspect ${zone}`}><span className={`status-${zones[zone]}`}>●</span>{zone==='Bones'?'Bones & spine':zone}</Button>)}</div><p className="px-4 pb-4 text-[10px] text-muted-foreground">Schematic body systems · synthetic indicators, not an anatomical scan.</p></div>;
}
