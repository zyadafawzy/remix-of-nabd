import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/team')({ head: () => publicHead('Synthetic crew', 'Meet six synthetic Horizon Expedition 07 crew personas.'), component: () => <PublicPage path="/team" /> });
