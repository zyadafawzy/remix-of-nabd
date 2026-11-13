import { createFileRoute } from '@tanstack/react-router';
import {Shell} from '@/components/nabd/shell';
import {Dashboard} from '@/components/nabd/dashboard';
export const Route = createFileRoute('/')({head:()=>({meta:[{title:'NABD · Crew health overview'},{name:'description',content:'Your astronaut health overview, personal indicators, and daily countermeasures.'},{property:'og:title',content:'NABD · Crew health overview'},{property:'og:description',content:'Crew health decision support beyond Earth.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <Shell><Dashboard/></Shell>});
