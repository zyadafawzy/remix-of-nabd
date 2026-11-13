import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Mind } from '@/components/nabd/features';
export const Route = createFileRoute('/app/mind')({
 head:()=>({meta:[{title:'NABD · Mind and wellbeing'},{name:'description',content:'NABD mind and wellbeing for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Mind and wellbeing'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Mind/></Shell>
});
