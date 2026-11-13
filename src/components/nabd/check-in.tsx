import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Radio, Pause, Play, Check, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMission } from './mission-context';
import { Panel, PageHeading } from './ui';
import { SuitBoard } from './suit-board';
import { suitChannels, suitPacket, captureSuitReading } from '@/lib/suit-sensors';
import { evaluate, type Reading } from '@/lib/healthRules';

export function CheckIn() {
  const m = useMission();
  const [running, setRunning] = useState(true);
  const [sequence, setSequence] = useState(0);
  const [packet, setPacket] = useState<Reading | null>(null);
  const [captured, setCaptured] = useState<Reading | null>(null);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const base = useRef(m.reading);
  const tick = useRef(0);
  useEffect(() => { base.current = m.reading; }, [m.reading]);
  useEffect(() => {
    tick.current = 0;
    setPacket(null); setCaptured(null); setSubmitted(false); setSequence(0);
  }, [m.person.id]);
  useEffect(() => {
    if (!running) return;
    const receive = () => { tick.current += 1; setSequence(tick.current); setPacket(suitPacket(base.current, tick.current)); };
    receive(); const timer = setInterval(receive, 2000);
    return () => clearInterval(timer);
  }, [m.person.id, running]);
  const current = captured ?? packet;
  const result = current ? evaluate(current, m.person, [...m.history, current], m.mode) : null;
  async function save() {
    if (!captured || saving) return;
    setSaving(true); setError('');
    try { await m.saveReading(captured); setSubmitted(true); }
    catch { setError('The packet could not be saved. Try again.'); }
    finally { setSaving(false); }
  }
  return <><PageHeading title="Suit sensor link" subtitle={`${m.person.name} · Automatic synthetic readings, no vital entry.`} action={<span className="simulation-chip">SIMULATED HARDWARE</span>}/>
    <div className="suit-intro"><Radio className="text-primary shrink-0" size={28}/><div><h2 className="text-xl">Your suit collects. You review.</h2><p className="text-sm text-muted-foreground mt-2 leading-relaxed">This demonstration simulates an in-suit device. It does not connect to sensors or collect real health data.</p></div></div>
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5"><span role="status" className="font-mono text-xs text-primary">{running ? `DEMO STREAM · PACKET ${String(sequence).padStart(4,'0')}` : 'DEMO STREAM PAUSED'} · {m.online?'CLOUD AVAILABLE':'OFFLINE'}</span><Button variant="outline" disabled={saving} onClick={()=>setRunning(v=>!v)}>{running?<Pause/>:<Play/>}{running?'Pause demo':'Resume demo'}</Button></div>
    <div className="suit-metrics">{suitChannels.map(c=><Panel key={c.id} className="p-4"><div className="eyebrow mb-2">{c.id} / {c.name}</div><div className="metric-value">{current?.[c.key] ?? '—'}<span>{c.unit}</span></div><p className="text-xs text-muted-foreground mt-2">{c.kind}</p></Panel>)}</div>
    <Panel title="Suit device concept"><SuitBoard reading={current ?? m.reading}/></Panel>
    <div className="suit-review"><div><h2 className="text-xl">{submitted?'Packet recorded':captured?'Review your snapshot':'Ready when you are'}</h2><p className="text-sm text-muted-foreground my-3 leading-relaxed">{submitted?'The synthetic packet has entered the mission log. Cloud failures are queued locally for reconnection.':captured?'Your snapshot is held steady while the demo stream continues.':'Capture one synthetic packet, then save it to the mission log.'}</p>{captured&&<p className="text-sm font-mono">Heart rate {captured.hr} bpm · Temperature {captured.temp_c} °C</p>}{result&&captured&&<p className="text-sm text-warning mt-3">{result.alerts.length} indicators to review. {result.alerts.some(a=>a.level==='red')?'Contact the flight surgeon per onboard protocol.':'Keep following your onboard plan; discuss persistent changes with the flight surgeon.'}</p>}{error&&<p role="alert" className="text-destructive mt-3">{error}</p>}</div><div className="flex flex-wrap gap-3 items-start">{submitted?<Button asChild><Link to="/app">Review overview<ArrowRight/></Link></Button>:<><Button variant={captured?'outline':'default'} disabled={!packet||saving} onClick={()=>{if(packet)setCaptured(captureSuitReading(packet));}}><RefreshCw/>{captured?'Capture again':'Capture demo packet'}</Button>{captured&&<Button disabled={saving} onClick={()=>void save()}><Check/>{saving?'Saving…':'Save demo packet'}</Button>}</>}</div></div>
    <div className="border-t border-border pt-5 text-xs text-muted-foreground leading-relaxed"><p className="flex gap-2 text-warning"><ShieldCheck size={16} className="shrink-0"/>Not every health indicator is a suit measurement.</p><p className="mt-3">Blood pressure, glucose and body mass require appropriate onboard equipment. Nutrition, mood and symptoms require crew input; reaction time requires a task. Their existing synthetic values are retained, not acquired by this circuit. Movement and sleep here are demo estimates. Skin contact temperature is not a validated core-temperature measurement.</p><p className="mt-3">Public synthetic demonstration only. No diagnosis. Recheck changes with approved equipment and confirm with the flight surgeon.</p></div>
  </>;
}
