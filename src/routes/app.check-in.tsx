import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { CheckIn } from '@/components/nabd/check-in';
export const Route = createFileRoute('/app/check-in')({
 head:()=>({meta:[{title:'NABD · Daily check-in'},{name:'description',content:'NABD daily check-in for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Daily check-in'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><CheckIn/></Shell>
});
