import { describe,it,expect } from 'vitest';
import { offlineBrief,parseMedicBrief } from '@/lib/medic-response';
describe('medic evidence boundaries',()=>{
  it('permits only identified scientific sources, never invented citations',()=>{const result=parseMedicBrief(JSON.stringify({...offlineBrief(),sourceIds:['CSA-BIO','invented-paper']}));expect(result.sourceIds).toEqual(['CSA-BIO']);});
  it('keeps non-diagnostic uncertainty and human escalation available offline',()=>{const result=offlineBrief();expect(result.uncertainty).toContain('synthetic');expect(result.escalation).toContain('flight surgeon');expect(result.escalation).toContain('Do not wait');});
  it('rejects an AI response without uncertainty or action limits',()=>{expect(()=>parseMedicBrief(JSON.stringify({summary:'Good',actions:[],sourceIds:[]}))).toThrow();});
});