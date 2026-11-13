import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Alerts } from '@/components/nabd/features';
export const Route = createFileRoute('/app/alerts')({
 head:()=>({meta:[{title:'NABD · Alerts'},{name:'description',content:'NABD alerts for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Alerts'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Alerts/></Shell>
});
