import { Sun, Moon, Contrast, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConsolePreferences } from '@/lib/console-preferences';
import { useFeatureFlags } from '@/lib/use-feature-flags';

export function ThemeStudio() {
  const { preferences: p, updatePreferences: update } = useConsolePreferences();
  const { enabled } = useFeatureFlags();
  if (!enabled('F145')) return null;
  return <section className="mb-6 border-b border-border pb-6" aria-labelledby="theme-heading">
    <div className="flex items-center justify-between mb-5"><h2 id="theme-heading" className="text-lg">Console appearance</h2><span className="eyebrow">F145</span></div>
    <div className="grid md:grid-cols-2 gap-6">
      <div><span className="text-xs text-muted-foreground">Theme</span><div className="flex flex-wrap gap-2 mt-3">
        {([{ value: 'dark', label: 'Mission dark', Icon: Moon }, { value: 'daylight', label: 'Daylight', Icon: Sun }, { value: 'contrast', label: 'High contrast', Icon: Contrast }] as const).map(({ value, label, Icon }) =>
          <Button key={value} variant={p.theme === value ? 'default' : 'outline'} aria-pressed={p.theme === value} onClick={() => update({ theme: value })}><Icon />{label}</Button>)}
      </div><div className="flex gap-3 items-center mt-5"><span className="text-xs text-muted-foreground mr-2">Accent</span>{(['cyan', 'green', 'blue'] as const).map(accent =>
        <Button key={accent} size="icon" variant="outline" className={`accent-swatch swatch-${accent}`} aria-label={`${accent} accent`} title={`${accent} accent`} aria-pressed={p.accent === accent} onClick={() => update({ accent })}>{p.accent === accent && <Check />}</Button>)}</div></div>
      <div className="space-y-4"><label className="flex justify-between items-center gap-3 text-xs">Text size<select aria-label="Text size" value={p.textSize} onChange={e => update({ textSize: e.target.value === 'large' ? 'large' : 'standard' })} className="p-2 border border-input rounded-md"><option value="standard">Standard</option><option value="large">Large</option></select></label>
        <label className="flex justify-between items-center gap-3 text-xs">Density<select aria-label="Density" value={p.density} onChange={e => update({ density: e.target.value === 'compact' ? 'compact' : 'comfortable' })} className="p-2 border border-input rounded-md"><option value="comfortable">Comfortable</option><option value="compact">Compact</option></select></label>
        <label className="flex justify-between items-center text-xs">Reduced motion<input type="checkbox" checked={p.reducedMotion} onChange={e => update({ reducedMotion: e.target.checked })} /></label>
      </div>
    </div>
  </section>;
}