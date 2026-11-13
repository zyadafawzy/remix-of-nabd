import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/press')({ head: () => publicHead('Press kit', 'Download the Nabd SVG logo and factual product summary.'), component: () => <PublicPage path="/press" /> });
