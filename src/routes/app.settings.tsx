import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Settings } from '@/components/nabd/features';
export const Route = createFileRoute('/app/settings')({
 head:()=>({meta:[{title:'NABD · Mission settings'},{name:'description',content:'NABD mission settings for synthetic astronaut crew health decision support.'},{property:'og:title',content:'NABD · Mission settings'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Settings/></Shell>
});
