import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Dashboard } from '@/components/nabd/dashboard';
export const Route = createFileRoute('/app/')({
 head:()=>({meta:[{title:'NABD · Overview'},{name:'description',content:'NABD overview for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Overview'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Dashboard/></Shell>
});
