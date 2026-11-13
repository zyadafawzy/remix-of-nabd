import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/changelog')({ head: () => publicHead('Changelog', 'Verified development checkpoints and the ten-wave roadmap.'), component: () => <PublicPage path="/changelog" /> });
