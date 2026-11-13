import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Report } from '@/components/nabd/features';
export const Route = createFileRoute('/app/report')({
 head:()=>({meta:[{title:'NABD · Health reports'},{name:'description',content:'NABD health reports for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Health reports'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Report/></Shell>
});
