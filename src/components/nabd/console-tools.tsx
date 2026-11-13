import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, Bell, ShieldAlert, ArrowRight, Keyboard, Check, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useMission } from './mission-context';
import { crew } from '@/lib/demo';
import { knowledge } from '@/lib/knowledge';
import { useConsolePreferences } from '@/lib/console-preferences';

const pages = [
  { path: '/app', name: 'Overview' }, { path: '/app/check-in', name: 'Daily check-in' },
  { path: '/app/trends', name: 'Health trends' }, { path: '/app/alerts', name: 'Alerts' },
  { path: '/app/medic', name: 'AI Medic' }, { path: '/app/training', name: 'Training' },
  { path: '/app/mind', name: 'Mind & wellbeing' }, { path: '/app/nutrition', name: 'Nutrition' },
  { path: '/app/missions', name: 'Mission modes' }, { path: '/app/scenarios', name: 'Scenario lab' },
  { path: '/app/learn', name: 'Learn' }, { path: '/app/console', name: 'Flight surgeon' },
  { path: '/app/report', name: 'Reports' }, { path: '/app/sources', name: 'Science & sources' },
  { path: '/app/settings', name: 'Settings' },
] as const;
export function ConsoleTools() {
  const m = useMission();
  const { preferences, updatePreferences } = useConsolePreferences();
  const [open, setOpen] = useState<'search' | 'notifications' | 'emergency' | 'shortcuts' | null>(null);
  const [query, setQuery] = useState('');
  const [read, setRead] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      const target = e.target;
      if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setQuery(''); setOpen('search'); }
      if (e.key === '?') { e.preventDefault(); setOpen('shortcuts'); }
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, []);
  useEffect(() => { setRead([]); }, [m.person.id]);
  const match = (text: string) => text.toLowerCase().includes(query.toLowerCase().trim());
  const matchingPages = pages.filter(p => match(p.name));
  const matchingCrew = crew.filter(p => match(p.name + p.role));
  const matchingArticles = query.trim() ? knowledge.filter(p => match(p.title + p.body)).slice(0, 4) : [];
  const matchingAlerts = query.trim() ? m.health.alerts.filter(a => match(a.title + a.explanation)) : [];
  const matchingTasks = query.trim() ? m.tasks.filter(t => match(t.title)).slice(0, 5) : [];
  const count = m.health.alerts.filter(a => !read.includes(a.title)).length;
  return <>
    <Button variant="outline" className="console-search-trigger" aria-label="Search mission console" onClick={() => { setQuery(''); setOpen('search'); }}><Search /><span className="hidden xl:inline">Search console</span><kbd className="hidden xl:inline text-muted-foreground text-[10px]">⌘ K</kbd></Button>
    <Button variant="ghost" size="icon" aria-label="Notification center" title="Notification center" className="relative" onClick={() => setOpen('notifications')}><Bell />{count > 0 && !preferences.quiet && <span className="notification-dot" />}</Button>
    <Button variant="destructive" size="sm" aria-label="Emergency support" onClick={() => setOpen('emergency')}><ShieldAlert /><span className="hidden lg:inline">Emergency</span></Button>
    <Dialog open={open !== null} onOpenChange={value => { if (!value) { setOpen(null); setError(''); } }}>
      <DialogContent className="console-dialog max-h-[85dvh] overflow-y-auto">
        <DialogTitle>{open === 'search' ? 'Mission search' : open === 'notifications' ? 'Notification center' : open === 'emergency' ? 'Immediate crew support' : 'Keyboard commands'}</DialogTitle>
        <DialogDescription>{open === 'emergency' ? 'Decision support only. Follow onboard emergency protocols; do not wait for Earth.' : `${m.person.name} · Nabd Mission Console`}</DialogDescription>
        {open === 'search' && <><input autoFocus aria-label="Search pages, people, science, alerts and tasks" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search mission…" className="w-full bg-background border border-input rounded-md p-3" />
          <div className="space-y-4 max-h-[55dvh] overflow-y-auto">
            {matchingPages.length > 0 && <div><h3 className="eyebrow mb-2">Pages</h3>{matchingPages.map(p => <Button asChild key={p.path} variant="ghost" className="w-full justify-between" onClick={() => setOpen(null)}><Link to={p.path}>{p.name}<ArrowRight /></Link></Button>)}</div>}
            {matchingCrew.length > 0 && <div><h3 className="eyebrow mb-2">Crew</h3>{matchingCrew.map(p => <Button key={p.id} variant="ghost" className="w-full justify-start" onClick={() => { m.setCrew(p.id); setOpen(null); }}><Users /><span>{p.name}</span><span className="text-xs text-muted-foreground ml-auto">{p.role}</span></Button>)}</div>}
            {matchingArticles.length > 0 && <div><h3 className="eyebrow mb-2">Science</h3>{matchingArticles.map(a => <Button asChild key={a.title} variant="ghost" className="w-full justify-start whitespace-normal h-auto py-3" onClick={() => setOpen(null)}><Link to="/app/learn"><BookOpen />{a.title}</Link></Button>)}</div>}
            {matchingAlerts.map(a => <Button asChild key={a.title} variant="outline" className="w-full justify-start whitespace-normal h-auto py-3" onClick={() => setOpen(null)}><Link to="/app/alerts"><Bell />{a.title}</Link></Button>)}
            {matchingTasks.map(t => <Button asChild key={t.id} variant="ghost" className="w-full justify-start whitespace-normal h-auto py-3" onClick={() => setOpen(null)}><Link to="/app"><Check />{t.title}</Link></Button>)}
            {!matchingPages.length && !matchingCrew.length && !matchingArticles.length && !matchingAlerts.length && !matchingTasks.length && <p className="text-sm text-muted-foreground py-6">No matching mission records.</p>}
          </div><Button variant="link" onClick={() => setOpen('shortcuts')} className="justify-start"><Keyboard />Keyboard commands</Button></>}
        {open === 'notifications' && <><label className="text-xs flex justify-between items-center">Quiet mode<input type="checkbox" checked={preferences.quiet} onChange={e => updatePreferences({ quiet: e.target.checked })} /></label><Button variant="outline" disabled={!count} onClick={() => setRead(m.health.alerts.map(a => a.title))}><Check />Mark all reviewed</Button>
          <div className="space-y-3" aria-live="polite">{m.health.alerts.length ? m.health.alerts.map(a => <div key={a.title} className="border-b border-border pb-4"><span className={`eyebrow ${a.level === 'red' ? 'text-destructive' : 'text-warning'}`}>{a.level === 'red' ? 'Escalate' : 'Monitor'} · {read.includes(a.title) ? 'Reviewed' : 'New'}</span><h3 className="text-sm mt-2">{a.title}</h3><p className="text-xs text-muted-foreground leading-relaxed mt-2">{a.explanation}</p><Button asChild variant="link" className="px-0" onClick={() => { setRead(prev => [...prev, a.title]); setOpen(null); }}><Link to="/app/alerts">Review alert<ArrowRight /></Link></Button></div>) : <div className="py-6"><Check className="text-success mb-3" /><p className="text-sm">No active warnings</p></div>}</div></>}
        {open === 'emergency' && <><ol className="space-y-4 text-sm list-decimal pl-5"><li>Tell a crewmate immediately and notify the designated medical officer.</li><li>Stop hazardous activity. Follow your onboard emergency protocol in a safe location.</li><li>Contact the flight surgeon using the mission channel. A delayed link must not delay local assistance.</li></ol><p className="text-xs text-warning">This demonstration does not contact emergency services.</p>{error && <p role="alert" className="text-destructive text-sm">{error}</p>}<Button disabled={busy || !m.online} onClick={async () => { setBusy(true); setError(''); try { await m.sendMessage(`${m.person.name}: urgent crew support requested. Medical officer notified per onboard protocol. Synthetic demonstration only.`); setOpen(null); } catch { setError('Report was not sent. Contact the medical officer locally and retry the mission channel.'); } finally { setBusy(false); } }}><ShieldAlert />{busy ? 'Sending report…' : 'Queue simulated urgent report'}</Button>{!m.online && <p className="text-xs text-muted-foreground">Offline. Notify your crewmate and medical officer locally.</p>}</>}
        {open === 'shortcuts' && <dl className="space-y-4 text-sm"><div className="flex justify-between"><dt>Open mission search</dt><dd className="font-mono">Ctrl / ⌘ K</dd></div><div className="flex justify-between"><dt>Keyboard commands</dt><dd className="font-mono">?</dd></div><div className="flex justify-between"><dt>Close floating window</dt><dd className="font-mono">Esc</dd></div><div className="flex justify-between"><dt>Move between controls</dt><dd className="font-mono">Tab / Shift Tab</dd></div><div className="flex justify-between"><dt>Activate selected control</dt><dd className="font-mono">Enter / Space</dd></div></dl>}
      </DialogContent>
    </Dialog>
  </>;
}