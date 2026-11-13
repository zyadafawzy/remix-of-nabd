import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Learn } from '@/components/nabd/features';
export const Route = createFileRoute('/app/learn')({
 head:()=>({meta:[{title:'NABD · Learning library'},{name:'description',content:'NABD learning library for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Learning library'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Learn/></Shell>
});
