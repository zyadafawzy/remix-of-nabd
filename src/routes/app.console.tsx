import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Console } from '@/components/nabd/features';
export const Route = createFileRoute('/app/console')({
 head:()=>({meta:[{title:'NABD · Flight surgeon console'},{name:'description',content:'NABD flight surgeon console for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Flight surgeon console'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Console/></Shell>
});
