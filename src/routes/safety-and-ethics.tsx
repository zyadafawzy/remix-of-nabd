import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/safety-and-ethics')({ head: () => publicHead('Safety and ethics', 'Human oversight, synthetic data and non-diagnostic boundaries.'), component: () => <PublicPage path="/safety-and-ethics" /> });
