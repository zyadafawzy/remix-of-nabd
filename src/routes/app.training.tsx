import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Training } from '@/components/nabd/features';
export const Route = createFileRoute('/app/training')({
 head:()=>({meta:[{title:'NABD · Training'},{name:'description',content:'NABD training for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Training'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Training/></Shell>
});
