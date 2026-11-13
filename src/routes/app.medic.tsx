import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { Medic } from '@/components/nabd/features';
export const Route = createFileRoute('/app/medic')({
 head:()=>({meta:[{title:'NABD · AI Medic'},{name:'description',content:'Evidence-grounded astronaut decision support with curated NASA and CSA sources, uncertainty and safe next steps.'},{property:'og:title',content:'NABD · AI Medic'},{property:'og:description',content:'Synthetic readings, scientific context, human escalation and transparent uncertainty.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><Medic/></Shell>
});
