import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/about')({ head: () => publicHead('About', 'Nabd astronaut health decision support for NASA Space Apps 2026.'), component: () => <PublicPage path="/about" /> });
