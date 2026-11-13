import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/nabd/public-site';
import { publicHead } from '@/lib/public-content';
export const Route = createFileRoute('/product')({ head: () => publicHead('Product', 'Explore the working Nabd Mission Console and decision-support workflows.'), component: () => <PublicPage path="/product" /> });
