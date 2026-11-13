import {describe,it,expect} from 'vitest';
import {heartRateLevel,pressureLevel,temperatureLevel,glucoseLevel,sleepLevel,radiationLevel,reactionLevel} from '../lib/healthRules';
import {defaultReading,defaultCrew} from '../lib/demo';
describe('Illustrative safety rules',()=>{
 it('flags heart rate above 120 or below 40 as red',()=>{expect(heartRateLevel(121)).toBe('red');expect(heartRateLevel(39)).toBe('red');expect(heartRateLevel(120)).toBe('amber');expect(heartRateLevel(68)).toBe('green');});
 it('escalates blood pressure at 140/90 and 90/60',()=>{expect(pressureLevel(140,80)).toBe('red');expect(pressureLevel(110,90)).toBe('red');expect(pressureLevel(90,60)).toBe('red');expect(pressureLevel(112,74)).toBe('green');});
 it('escalates temperature above 38 or below 35.5',()=>{expect(temperatureLevel(38.1)).toBe('red');expect(temperatureLevel(35.4)).toBe('red');expect(temperatureLevel(38)).toBe('amber');});
 it('distinguishes fasting and random glucose',()=>{expect(glucoseLevel(126)).toBe('red');expect(glucoseLevel(126,false)).toBe('green');expect(glucoseLevel(181,false)).toBe('red');expect(glucoseLevel(59)).toBe('red');});
 it('requires two nights below 5 hours for red sleep',()=>{const previous={...defaultReading(defaultCrew),sleep_h:4};expect(sleepLevel(4,[previous])).toBe('red');expect(sleepLevel(4,[])).toBe('amber');});
 it('warns at 60% radiation budget and escalates at 85%',()=>{expect(radiationLevel(60,100)).toBe('amber');expect(radiationLevel(85,100)).toBe('red');expect(radiationLevel(59,100)).toBe('green');});
 it('flags reaction slowdown at 20% and 40% or three lapses',()=>{expect(reactionLevel(300,250,0)).toBe('amber');expect(reactionLevel(350,250,0)).toBe('red');expect(reactionLevel(250,250,3)).toBe('red');});
});