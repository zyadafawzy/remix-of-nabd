import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/contact')({ head: () => publicHead('Contact', 'Prepare and download a local project inquiry.'), component: () => <PublicPage path="/contact" /> });
