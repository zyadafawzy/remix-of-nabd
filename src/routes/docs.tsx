import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/docs')({ head: () => publicHead('Documentation', 'Nabd measurement workflows, architecture and science reference.'), component: () => <PublicPage path="/docs" /> });
