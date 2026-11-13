import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/judges')({ head: () => publicHead('Judges guide', 'Inspect demonstration workflows, safety and feature completion status.'), component: () => <PublicPage path="/judges" /> });
