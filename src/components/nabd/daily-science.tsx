import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dailyScienceIndex, scienceEntry } from '@/lib/daily-science';
import { evidence } from '@/lib/evidence';

export function DailyScience() {
  const [index, setIndex] = useState(0);
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const refresh = () => { const next = dailyScienceIndex(new Date()); setToday(next); setIndex(next); };
    refresh();
    const timer = window.setInterval(() => {
      const next = dailyScienceIndex(new Date());
      setToday(previous => { if (previous !== next) setIndex(next); return next; });
    }, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const entry = scienceEntry(index);
  return <section aria-label="Daily science" className="my-8 border-y border-border py-6">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="eyebrow text-primary">F129 / SCIENCE LOG</p><h2 className="text-xl mt-2">Did you know?</h2></div><div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Previous science entry" title="Previous science entry" onClick={() => setIndex(i => (i + evidence.length - 1) % evidence.length)}><ArrowLeft /></Button><span className="text-xs font-mono text-muted-foreground">{index + 1} / {evidence.length}</span><Button variant="ghost" size="icon" aria-label="Next science entry" title="Next science entry" onClick={() => setIndex(i => (i + 1) % evidence.length)}><ArrowRight /></Button><Button variant="outline" size="sm" disabled={today === null || index === today} onClick={() => { if (today !== null) setIndex(today); }}><CalendarDays />Today</Button></div></div>
    <article aria-live="polite" className="mt-5 max-w-3xl"><h3 className="text-base">{entry.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mt-3">{entry.claim}</p><p className="text-xs text-warning leading-relaxed mt-3">{entry.limit}</p><a className="inline-flex items-center gap-2 text-primary text-sm mt-4" href={entry.url} target="_blank" rel="noreferrer">Read primary source<ArrowUpRight size={14} /></a></article>
  </section>;
}