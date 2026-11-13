import { z } from 'zod';
import { evidenceFor } from './evidence';
export const medicBriefSchema=z.object({summary:z.string().min(1).max(1800),actions:z.array(z.string().min(1).max(350)).min(1).max(3),escalation:z.string().min(1).max(650),uncertainty:z.string().min(1).max(650),sourceIds:z.array(z.string()).max(6)});
export type MedicBrief=z.infer<typeof medicBriefSchema>;
export function parseMedicBrief(text:string):MedicBrief {
  const parsed=medicBriefSchema.parse(JSON.parse(text));
  return {...parsed,sourceIds:evidenceFor(parsed.sourceIds).map(e=>e.id)};
}
export function briefText(brief:MedicBrief) {return `${brief.summary}\n\nNext steps\n${brief.actions.map((a,i)=>`${i+1}. ${a}`).join('\n')}\n\nWhen to seek help\n${brief.escalation}\n\nWhat remains uncertain\n${brief.uncertainty}\n\nDecision support, not a diagnosis. Confirm with the flight surgeon.`;}
export function offlineBrief():MedicBrief {return {summary:'AI is unavailable. Your onboard reference guide remains available.',actions:['Recheck unexpected readings with approved onboard equipment.','Share symptoms and recent changes with the crew medical officer.','Follow your prescribed onboard countermeasure plan.'],escalation:'For red alerts or urgent symptoms, notify a crewmate and the crew medical officer now; contact the flight surgeon per onboard protocol. Do not wait for Earth communication to get local help.',uncertainty:'All displayed readings are synthetic. The conceptual suit does not measure blood pressure, glucose, nutrition, mood or reaction time. No diagnostic conclusions can be drawn.',sourceIds:['NASA-HAZARDS','CSA-BIO']};}