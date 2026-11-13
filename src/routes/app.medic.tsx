import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Medic } from '@/components/nabd/features';
export const Route = createFileRoute('/app/medic')({
 head:()=>({meta:[{title:'NABD · AI Medic'},{name:'description',content:'NABD ai medic for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · AI Medic'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Medic/></Shell>
});
