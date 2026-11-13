import { createFileRoute } from '@tanstack/react-router';
import { Shell } from '@/components/nabd/shell';
import { CheckIn } from '@/components/nabd/check-in';
export const Route = createFileRoute('/app/check-in')({
 head:()=>({meta:[{title:'NABD · Suit sensor link'},{name:'description',content:'Automatic synthetic suit packets and a conceptual sensor circuit for astronaut health decision support.'},{property:'og:title',content:'NABD · Suit sensor link'},{property:'og:description',content:'Spaceflight health context, transparent indicators, and safe countermeasures.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <Shell><CheckIn/></Shell>
});
