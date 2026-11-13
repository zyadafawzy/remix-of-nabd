import { describe, expect, it } from 'vitest';
import { queryRows, tableCSV } from '@/lib/data-table';
import { parseFeatureOverrides } from '@/lib/features';

describe('Data table queries', () => {
  const rows = [{ day: 2, name: 'Amara', hr: 68 }, { day: 10, name: 'Leo', hr: 65 }];
  it('filters case-insensitively and sorts numbers numerically without changing input', () => {
    expect(queryRows(rows, 'LEO', null, false)).toEqual([rows[1]]);
    expect(queryRows(rows, '', 'day', true).map(r => r.day)).toEqual([10, 2]);
    expect(rows.map(r => r.day)).toEqual([2, 10]);
  });
  it('exports selected columns with escaped quotes and neutralized spreadsheet formulas', () => {
    expect(tableCSV([{ name: '=SUM(1,2)', hidden: 'secret' }, { name: 'A"B', hidden: '' }], [{ key: 'name', label: 'Name' }]))
      .toBe('"Name"\r\n"\'=SUM(1,2)"\r\n"A""B"');
  });
});
describe('Demo flags', () => {
  it('accepts only known feature IDs and boolean overrides', () => {
    expect(parseFeatureOverrides({ F141: false, F145: true, F999: false, F131: 'false' })).toEqual({ F141: false, F145: true });
  });
});