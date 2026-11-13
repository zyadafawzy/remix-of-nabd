export type TableRow = Record<string, string | number>;
export function queryRows<T extends TableRow>(rows: T[], query: string, key: keyof T | null, descending: boolean): T[] {
  const filtered = rows.filter(row => Object.values(row).some(v => String(v).toLowerCase().includes(query.trim().toLowerCase())));
  if (!key) return filtered;
  return filtered.sort((a, b) => {
    const x = a[key], y = b[key];
    const delta = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true });
    return descending ? -delta : delta;
  });
}
export function tableCSV(rows: TableRow[], columns: { key: string; label: string }[]) {
  const escape = (value: string | number) => {
    const text = String(value);
    return '"' + (/^[=+\-@\t\r]/.test(text) ? "'" + text : text).replaceAll('"', '""') + '"';
  };
  return [columns.map(c => escape(c.label)).join(','), ...rows.map(row => columns.map(c => escape(row[c.key] ?? '')).join(','))].join('\r\n');
}