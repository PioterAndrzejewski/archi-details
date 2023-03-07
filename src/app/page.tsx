import { RecentlyAdded } from '@/components/landing/RecentlyAdded';

import { Categories } from '../components/landing/Categories';
import { Features } from '../components/landing/Features';
import { Hero } from '../components/landing/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Features />
      <RecentlyAdded />
    </main>
  );
}
