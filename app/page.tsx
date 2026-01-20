import { Hero } from '@/components/sections/Hero';
import { CategoryShowcase } from '@/components/sections/CategoryShowcase';
import { projects } from '@/lib/data/projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase projects={projects} />
    </>
  );
}
