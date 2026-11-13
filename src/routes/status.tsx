import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/status')({ head: () => publicHead('System status', 'Clearly labeled demonstration status without measured uptime claims.'), component: () => <PublicPage path="/status" /> });
