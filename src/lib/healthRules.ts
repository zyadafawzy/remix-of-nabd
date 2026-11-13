import type { MissionMode } from './missionModes';
import { missionModes } from './missionModes';
export type Level = 'green' | 'amber' | 'red';
export type Zone = 'Brain' | 'Eyes' | 'Heart' | 'Lungs' | 'Bones' | 'Muscles' | 'Metabolism' | 'Immune' | 'Mind';
export type Reading = { hr: number; sys: number; dia: number; temp_c: number; glucose_mgdl: number; sleep_h: number; mood: number; stress: number; weight_kg: number; hydration_cups: number; calories: number; protein_g: number; exercise_resistive_min: number; exercise_aerobic_min: number; reaction_ms: number; reaction_lapses: number; radiation_msv_day: number; co2_ppm: number; notes: string; mission_day: number; hr_source: string; hr_confidence: number };
export type Baseline = { baseline_hr: number; baseline_weight_kg: number; baseline_reaction_ms: number; baseline_sleep_h: number };
export type Indicator = { key: keyof Reading; name: string; value: number; unit: string; level: Level; reason: string; range: string; zone: Zone };
export type HealthAlert = { level: Level; zone: Zone; title: string; explanation: string; actions: string[]; hazard: string; escalation: string };
const order: Record<Level, number> = { green: 0, amber: 1, red: 2 };
export function worst(levels: Level[]): Level { return levels.reduce((a, b) => order[b] > order[a] ? b : a, 'green'); }
export function heartRateLevel(hr: number): Level { return hr > 120 || hr < 40 ? 'red' : hr < 50 || hr > 90 ? 'amber' : 'green'; }
export function pressureLevel(sys: number, dia: number, symptomatic = false): Level { return symptomatic || sys >= 140 || dia >= 90 || (sys <= 90 && dia <= 60) ? 'red' : sys >= 120 || dia >= 80 || sys < 95 ? 'amber' : 'green'; }
export function temperatureLevel(t: number): Level { return t > 38 || t < 35.5 ? 'red' : t > 37.2 || t < 36.1 ? 'amber' : 'green'; }
export function glucoseLevel(g: number, fasting = true): Level { return g < 60 || (fasting ? g >= 126 : g > 180) ? 'red' : g < 70 || (fasting && g > 99) ? 'amber' : 'green'; }
export function sleepLevel(hours: number, previous: Reading[]): Level { return hours < 5 && previous.at(-1)?.sleep_h !== undefined && (previous.at(-1)?.sleep_h ?? 9) < 5 ? 'red' : hours < 7 || hours > 9 ? 'amber' : 'green'; }
export function radiationLevel(dose: number, budget: number): Level { return dose / budget >= .85 ? 'red' : dose / budget >= .6 ? 'amber' : 'green'; }
export function reactionLevel(ms: number, baseline: number, lapses: number): Level { return ms >= baseline * 1.4 || lapses >= 3 ? 'red' : ms >= baseline * 1.2 ? 'amber' : 'green'; }
export function boneLoad(history: Reading[], mode: MissionMode): number { const decay = mode === 'moon' ? 1.2 : 1.8; return Math.round(history.slice(-14).reduce((score, m) => Math.max(0, Math.min(100, score + ((m.exercise_aerobic_min + m.exercise_resistive_min) / 120 - .7) * 5 - decay)), 94)); }
export function slope(values: number[]): number { const n = values.length; if (n < 2) return 0; const mean = values.reduce((a,b)=>a+b,0)/n; const x = (n-1)/2; return values.reduce((sum,v,i)=>sum+(i-x)*(v-mean),0) / values.reduce((sum,_,i)=>sum+(i-x)**2,0); }
export function evaluate(m: Reading, b: Baseline, history: Reading[], mode: MissionMode) {
  const prior = history.filter(r => r !== m).slice(-6);
  const dose = history.reduce((s, r) => s + r.radiation_msv_day, 0);
  const hrDrift = m.hr > b.baseline_hr * 1.15 && prior.slice(-2).length === 2 && prior.slice(-2).every(r=>r.hr>b.baseline_hr*1.15);
  const moodRed = m.mood === 1 && prior.at(-1)?.mood === 1;
  const indicators: Indicator[] = [];
  const add = (key: keyof Reading,name:string,unit:string,level:Level,range:string,zone:Zone,reason?:string) => indicators.push({key,name,unit,value:Number(m[key]),level,range,zone,reason:reason ?? `${name} is ${m[key]} ${unit}. ${level==='green'?'Within the illustrative range; keep following your plan.':level==='amber'?'A change worth monitoring against your personal baseline.':'Outside the illustrative safety range; contact the flight surgeon.'}`});
  add('hr','Heart rate','bpm',hrDrift?worst([heartRateLevel(m.hr),'amber']):heartRateLevel(m.hr),'50–90 bpm · population 60–100','Heart',hrDrift?'Heart rate has risen more than 15% above your baseline for three days.':undefined);
  add('sys','Blood pressure','mmHg',pressureLevel(m.sys,m.dia),'<120 / 80','Heart');
  add('temp_c','Temperature','°C',temperatureLevel(m.temp_c),'36.1–37.2 °C','Immune');
  add('glucose_mgdl','Blood glucose','mg/dL',glucoseLevel(m.glucose_mgdl,!m.notes.includes('non-fasting')),'70–99 fasting','Metabolism');
  add('sleep_h','Sleep','h',sleepLevel(m.sleep_h,prior),'7–9 hours','Brain',`You slept ${m.sleep_h} hours. ${m.sleep_h<7?'Below the 7–9 hour target; astronauts often average around 6 hours. Protect sleep and monitor alertness.':'Continue your protected sleep routine.'}`);
  add('mood','Mood','/ 5',moodRed?'red':m.mood<=2&&prior.at(-1)?.mood!==undefined&&(prior.at(-1)?.mood??5)<=2?'amber':'green','3–5 / 5','Mind');
  add('stress','Stress','/ 5',m.stress>=4&&prior.slice(-2).length===2&&prior.slice(-2).every(r=>r.stress>=4)?'amber':'green','1–3 / 5','Mind');
  const loss=(b.baseline_weight_kg-m.weight_kg)/b.baseline_weight_kg;
  add('weight_kg','Weight','kg',loss>.05?'red':loss>.03?'amber':'green','Within 3% of baseline','Muscles');
  add('hydration_cups','Hydration','cups',m.hydration_cups<4&&(m.hr>90||loss>.03)?'red':m.hydration_cups<8?'amber':'green','~8+ cups','Metabolism');
  add('calories','Energy intake','kcal',m.calories<1680&&prior.slice(-2).length===2&&prior.slice(-2).every(r=>r.calories<1680)?'red':m.calories<2040||m.calories>2760?'amber':'green','2,400 kcal · demo estimate','Metabolism');
  const exercise=m.exercise_resistive_min+m.exercise_aerobic_min;
  add('exercise_resistive_min','Training','min',exercise<36&&prior.slice(-4).length===4&&prior.slice(-4).every(r=>r.exercise_aerobic_min+r.exercise_resistive_min<36)?'red':exercise<72?'amber':'green','120 min combined / day','Bones',`${exercise} minutes of resistive + aerobic training today. Reduced gravity unloads bone and muscle; follow your prescribed countermeasures.`);
  add('reaction_ms','Reaction time','ms',reactionLevel(m.reaction_ms,b.baseline_reaction_ms,m.reaction_lapses),'Personal baseline +20% caution','Brain');
  add('radiation_msv_day','Radiation','mSv',radiationLevel(dose,missionModes[mode].budget),`Cumulative / ${missionModes[mode].budget} mSv`,'Immune',`${dose.toFixed(1)} mSv cumulative exposure. Typical ${missionModes[mode].name} rate is approximately ${missionModes[mode].radiation} mSv/day. NASA’s 600 mSv career reference is not an individual safe allowance.`);
  add('co2_ppm','Cabin CO₂','ppm',m.co2_ppm>5000&&m.reaction_ms>b.baseline_reaction_ms*1.2?'red':m.co2_ppm>3000?'amber':'green','Contextual: station ~2,000–5,000 ppm','Lungs',`${m.co2_ppm} ppm cabin CO₂. Above 1,000 ppm warrants environmental awareness; station context is commonly 2,000–5,000 ppm. Rising levels combined with cognitive slowing warrant escalation.`);
  const zones: Record<Zone,Level> = { Brain:'green',Eyes:'green',Heart:'green',Lungs:'green',Bones:'green',Muscles:'green',Metabolism:'green',Immune:'green',Mind:'green' };
  indicators.forEach(i=>{zones[i.zone]=worst([zones[i.zone],i.level]);});
  zones.Brain=worst([zones.Brain,zones.Mind,m.co2_ppm>3000?'amber':'green']); zones.Immune=worst([zones.Immune,indicators.find(i=>i.key==='sleep_h')?.level??'green']);
  zones.Eyes=m.notes.includes('puffiness')?'amber':'green'; zones.Muscles=worst([zones.Muscles,zones.Bones]);
  const alerts: HealthAlert[]=indicators.filter(i=>i.level!=='green').map(i=>({level:i.level,zone:i.zone,title:i.name==='Sleep'?'Protect your sleep window':`${i.name} needs attention`,explanation:i.reason,hazard:i.zone==='Mind'?'Isolation':i.zone==='Bones'?'Gravity fields':i.zone==='Lungs'?'Closed environment':'Spaceflight adaptation',actions:i.zone==='Brain'?['Protect a 7–9 hour sleep window','Reduce evening light and caffeine','Check in with the crew medical officer']:['Recheck the reading with onboard equipment','Log symptoms and recent changes','Follow your onboard countermeasure protocol'],escalation:i.level==='red'?'Contact the flight surgeon; inform the crew medical officer now.':'Contact the flight surgeon if changes persist or symptoms develop.'}));
  if (slope(history.slice(-7).map(r=>r.sleep_h))<-.12 && !alerts.some(a=>a.title==='Protect your sleep window')) alerts.push({level:'amber',zone:'Brain',title:'Early warning · sleep drift',explanation:'Your seven-day sleep trend is declining before a severe threshold is reached.',hazard:'Isolation',actions:['Protect your sleep window','Review your workload','Discuss the trend with your crew medical officer'],escalation:'Escalate if the decline persists or alertness changes.'});
  const penalties=Object.values(zones).reduce((s,l)=>s+(l==='red'?18:l==='amber'?5:0),0);
  return {indicators,zones,alerts,score:Math.max(0,Math.min(100,98-penalties)),dose,bone:boneLoad(history,mode)};
}