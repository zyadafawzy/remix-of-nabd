import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Missions } from '@/components/nabd/features';
export const Route = createFileRoute('/app/missions')({
 head:()=>({meta:[{title:'NABD · Mission environments'},{name:'description',content:'NABD mission environments for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Mission environments'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Missions/></Shell>
});
