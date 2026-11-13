import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/mission-modes')({ head: () => publicHead('Mission modes', 'Compare station, Mars transit and lunar-base mission environments.'), component: () => <PublicPage path="/mission-modes" /> });
