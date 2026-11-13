import { Component, lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react';
import { RotateCcw, Box, ScanLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Body2D } from './body';
import type { Level, Zone } from '@/lib/healthRules';
import type { ScanColors } from './body-3d';
const Body3D=lazy(()=>import('./body-3d'));
class SceneBoundary extends Component<{children:ReactNode;fallback:ReactNode},{failed:boolean}> {
  override state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  override render(){return this.state.failed?this.props.fallback:this.props.children;}
}
export function Body({zones,onZone}:{zones:Record<Zone,Level>;onZone:(zone:Zone)=>void}) {
  const [colors,setColors]=useState<ScanColors|null>(null);
  const [flat,setFlat]=useState(false);const [reset,setReset]=useState(0);const [ready,setReady]=useState(false);
  const markReady=useCallback(()=>setReady(true),[]);
  useEffect(()=>{
    const read=()=>{const css=getComputedStyle(document.documentElement);const token=(name:string)=>css.getPropertyValue(name).trim();setColors({primary:token('--primary'),green:token('--success'),amber:token('--warning'),red:token('--destructive')});};
    read();const observer=new MutationObserver(read);observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme','data-accent']});return()=>observer.disconnect();
  },[]);
  const fallback=<Body2D zones={zones} onZone={onZone}/>;
  return <div><div className="body-view-toolbar"><span className="eyebrow">SYNTHETIC BODY SCAN</span><div className="flex gap-1"><Button size="icon" variant="ghost" aria-label={flat?'Show 3D body':'Show 2D body'} title={flat?'Show 3D body':'Show 2D body'} onClick={()=>setFlat(v=>!v)}>{flat?<Box/>:<ScanLine/>}</Button><Button size="icon" variant="ghost" aria-label="Reset body view" title="Reset body view" onClick={()=>setReset(v=>v+1)}><RotateCcw/></Button></div></div>{flat?fallback:<div className="body-3d-stage" data-scene-ready={ready?'true':undefined}>{colors?<SceneBoundary fallback={fallback}><Suspense fallback={fallback}><Body3D key={reset} zones={zones} onZone={onZone} colors={colors} onReady={markReady}/></Suspense></SceneBoundary>:fallback}</div>}<div className="body-system-controls">{(Object.keys(zones) as Zone[]).map(zone=><Button key={zone} variant="ghost" className="text-xs justify-start" onClick={()=>onZone(zone)} aria-label={`${zone} · ${zones[zone]} status`}><span className={`status-${zones[zone]}`}>●</span>{zone==='Bones'?'Bones & spine':zone}</Button>)}</div></div>;
}
