import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Sources } from '@/components/nabd/features';
export const Route = createFileRoute('/app/sources')({
 head:()=>({meta:[{title:'NABD · Science and sources'},{name:'description',content:'NABD science and sources for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Science and sources'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Sources/></Shell>
});
