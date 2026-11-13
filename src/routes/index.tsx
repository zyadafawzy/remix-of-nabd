import { createFileRoute } from '@tanstack/react-router';
import {PublicHome} from '@/components/nabd/public-site';
import {publicHead} from '@/lib/public-content';
export const Route = createFileRoute('/')({head:()=>publicHead('Nabd Mission Console','Crew health decision support beyond Earth: personal readings, mission context and safe next steps.'),component:PublicHome});
