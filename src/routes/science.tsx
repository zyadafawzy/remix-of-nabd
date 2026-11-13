import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/science')({ head: () => publicHead('Science', 'Review NASA human-spaceflight sources and illustrative model limitations.'), component: () => <PublicPage path="/science" /> });
