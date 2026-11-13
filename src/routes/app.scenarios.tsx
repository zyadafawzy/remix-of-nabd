import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Scenarios } from '@/components/nabd/features';
export const Route = createFileRoute('/app/scenarios')({
 head:()=>({meta:[{title:'NABD · Scenario lab'},{name:'description',content:'NABD scenario lab for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Scenario lab'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Scenarios/></Shell>
});
