import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/earth-impact')({ head: () => publicHead('Earth impact', 'Remote-care workflow ideas and their clinical validation boundaries.'), component: () => <PublicPage path="/earth-impact" /> });
