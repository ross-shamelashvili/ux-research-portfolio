import { Hero } from '@/components/sections/Hero';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { projects } from '@/lib/data/projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectGrid projects={projects} showFilters={true} />
    </>
  );
}
