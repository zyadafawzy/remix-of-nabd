import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Nutrition } from '@/components/nabd/features';
export const Route = createFileRoute('/app/nutrition')({
 head:()=>({meta:[{title:'NABD · Nutrition'},{name:'description',content:'NABD nutrition for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Nutrition'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Nutrition/></Shell>
});
