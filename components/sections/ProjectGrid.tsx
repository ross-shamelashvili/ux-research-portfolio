'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Container } from '../ui/Container';
import { Section, SectionHeader } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Project, ProjectCategory, Methodology, categoryLabels, methodologyLabels } from '@/lib/types';

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

type FilterType = 'all' | ProjectCategory | Methodology;

export function ProjectGrid({
  projects,
  showFilters = true,
  title = 'Featured Work',
  subtitle = 'A selection of UX research projects showcasing my approach to understanding users and driving product decisions.',
}: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [filterType, setFilterType] = useState<'category' | 'methodology'>('category');

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return cats;
  }, [projects]);

  const methodologies = useMemo(() => {
    const methods = [...new Set(projects.flatMap((p) => p.methodologies))];
    return methods;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;

    if (filterType === 'category') {
      return projects.filter((p) => p.category === activeFilter);
    } else {
      return projects.filter((p) =>
        p.methodologies.includes(activeFilter as Methodology)
      );
    }
  }, [projects, activeFilter, filterType]);

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const switchFilterType = (type: 'category' | 'methodology') => {
    setFilterType(type);
    setActiveFilter('all');
  };

  return (
    <Section id="work">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {showFilters && (
          <div className="mb-8 space-y-4">
            {/* Filter Type Toggle */}
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 text-[var(--text-secondary)]" />
              <div className="flex gap-2">
                <button
                  onClick={() => switchFilterType('category')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    filterType === 'category'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface)]'
                  }`}
                >
                  By Category
                </button>
                <button
                  onClick={() => switchFilterType('methodology')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    filterType === 'methodology'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface)]'
                  }`}
                >
                  By Methodology
                </button>
              </div>
            </div>

            {/* Filter Options */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterClick('all')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
                }`}
              >
                All
              </button>

              {filterType === 'category'
                ? categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleFilterClick(cat)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        activeFilter === cat
                          ? 'bg-[var(--primary)] text-white'
                          : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
                      }`}
                    >
                      {categoryLabels[cat]}
                    </button>
                  ))
                : methodologies.map((method) => (
                    <button
                      key={method}
                      onClick={() => handleFilterClick(method)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        activeFilter === method
                          ? 'bg-[var(--primary)] text-white'
                          : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
                      }`}
                    >
                      {methodologyLabels[method]}
                    </button>
                  ))}
            </div>

            {/* Results Count */}
            <p className="text-sm text-[var(--text-secondary)]">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        )}

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">
              No projects found with the selected filter.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 text-[var(--primary)] hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
