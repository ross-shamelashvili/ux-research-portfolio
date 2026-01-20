'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Project, ProjectCategory, Methodology, categoryLabels } from '@/lib/types';

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
  initialLimit?: number;
  title?: string;
  subtitle?: string;
}

type FilterType = 'all' | ProjectCategory | Methodology;

export function ProjectGrid({
  projects,
  showFilters = true,
  initialLimit = 6,
  title = 'UX Experience',
  subtitle = 'Case studies showcasing my approach to user research and product discovery.',
}: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => {
    return [...new Set(projects.map((p) => p.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;

    // Check if it's a category
    if (categories.includes(activeFilter as ProjectCategory)) {
      return projects.filter((p) => p.category === activeFilter);
    }

    // Otherwise it's a methodology
    return projects.filter((p) =>
      p.methodologies.includes(activeFilter as Methodology)
    );
  }, [projects, activeFilter, categories]);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialLimit);

  const hasMore = filteredProjects.length > initialLimit && !showAll;

  return (
    <section id="work" className="py-20 md:py-28 overflow-hidden">
      <Container className="overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            {title}
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {showFilters && (
          <div className="mb-10">
            {/* Filter pills - centered */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => { setActiveFilter('all'); setShowAll(false); }}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-[var(--primary)] text-white shadow-md'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)] border border-[var(--border)]'
                }`}
              >
                All Projects
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-[var(--primary)] text-white shadow-md'
                      : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)] border border-[var(--border)]'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All / View Less button */}
        {(hasMore || showAll) && filteredProjects.length > initialLimit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              rightIcon={
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                />
              }
            >
              {showAll
                ? 'Show Less'
                : `View All ${filteredProjects.length} Projects`}
            </Button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-secondary)] mb-4">
              No projects found with the selected filter.
            </p>
            <Button
              variant="ghost"
              onClick={() => setActiveFilter('all')}
            >
              Clear filter
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
