import { useState } from 'react';
import { ArrowUpDown, Download, Columns3, Search, List, Rows3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { queryRows, tableCSV, type TableRow } from '@/lib/data-table';

export function DataTable({ rows, columns, title, filename }: {
  rows: TableRow[]; columns: { key: string; label: string }[]; title: string; filename: string;
}) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<string | null>(null);
  const [descending, setDescending] = useState(false);
  const [hidden, setHidden] = useState<string[]>([]);
  const [compact, setCompact] = useState(false);
  const [chooser, setChooser] = useState(false);
  const visible = columns.filter(c => !hidden.includes(c.key));
  const filtered = queryRows(rows, query, sort, descending);
  function exportCSV() {
    const url = URL.createObjectURL(new Blob([tableCSV(filtered, visible)], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url);
  }
  return <section aria-label={title} className="mt-6 border-t border-border pt-6">
    <div className="flex flex-wrap items-center gap-3 mb-4"><h2 className="text-lg mr-auto">{title}</h2><Button variant="outline" size="icon" aria-label={compact ? 'Comfortable table density' : 'Compact table density'} title="Table density" onClick={() => setCompact(!compact)}>{compact ? <Rows3 /> : <List />}</Button><Button variant="outline" size="icon" aria-label="Choose columns" title="Choose columns" aria-expanded={chooser} onClick={() => setChooser(!chooser)}><Columns3 /></Button><Button variant="outline" disabled={!filtered.length} onClick={exportCSV}><Download />Export view</Button></div>
    <label className="flex gap-2 items-center border border-input rounded-md px-3 mb-4"><Search size={16} className="text-muted-foreground" /><input aria-label={`Filter ${title}`} value={query} onChange={e => setQuery(e.target.value)} className="py-3 bg-transparent min-w-0 w-full outline-none text-sm" placeholder="Filter records…" /></label>
    {chooser && <fieldset className="flex flex-wrap gap-4 border border-border p-4 mb-4 rounded-md"><legend className="text-xs text-muted-foreground px-2">Visible columns</legend>{columns.map(c => <label key={c.key} className="flex gap-2 text-xs items-center"><input type="checkbox" checked={!hidden.includes(c.key)} disabled={!hidden.includes(c.key) && visible.length === 1} onChange={e => setHidden(prev => e.target.checked ? prev.filter(k => k !== c.key) : [...prev, c.key])} />{c.label}</label>)}</fieldset>}
    <div className="max-h-96 overflow-auto border border-border rounded-md"><table className="w-full text-left text-xs"><thead className="sticky top-0 z-10 bg-card"><tr>{visible.map(c => <th key={c.key} scope="col" aria-sort={sort === c.key ? descending ? 'descending' : 'ascending' : 'none'} className="border-b border-input"><Button variant="ghost" className="w-full justify-start text-xs" onClick={() => { setSort(c.key); setDescending(sort === c.key ? !descending : false); }}>{c.label}<ArrowUpDown size={12} /></Button></th>)}</tr></thead><tbody>{filtered.map((row, i) => <tr key={i} className="border-b border-border hover:bg-muted">{visible.map(c => <td key={c.key} className={`${compact ? 'px-4 py-2' : 'p-4'} font-mono whitespace-nowrap`}>{row[c.key]}</td>)}</tr>)}</tbody></table>{!filtered.length && <p className="p-8 text-center text-muted-foreground text-sm">No matching records.</p>}</div><p className="text-xs text-muted-foreground mt-3" aria-live="polite">{filtered.length} of {rows.length} records</p>
  </section>;
}