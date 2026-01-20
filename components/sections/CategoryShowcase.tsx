'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Palette } from 'lucide-react';
import { Project, categoryLabels, methodologyLabels } from '@/lib/types';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

interface CategoryShowcaseProps {
  projects: Project[];
}

interface CategoryBoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  projects: Project[];
  color: string;
}

function CategoryBox({ title, description, icon, projects, color }: CategoryBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Main Category Card */}
      <motion.div
        className={`relative overflow-hidden rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
          isExpanded
            ? `border-[${color}] shadow-xl`
            : 'border-[var(--border)] hover:border-[var(--primary)]/50'
        }`}
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: isExpanded ? color : undefined
        }}
      >
        <div className="p-8 md:p-10">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${color}20` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
            {title}
          </h3>

          <p className="text-[var(--text-secondary)] mb-6">
            {description}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium" style={{ color }}>
            <span>{projects.length} Projects</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'translate-x-1' : ''}`} />
          </div>
        </div>

        {/* Expanded Projects Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-[var(--border)]"
            >
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/50 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                          {project.title}
                        </h4>
                        <span className="text-xs text-[var(--text-secondary)] shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.methodologies.slice(0, 2).map((method) => (
                          <Badge key={method} variant="secondary" size="sm">
                            {methodologyLabels[method]}
                          </Badge>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {projects.length > 4 && (
                <div className="px-6 pb-6">
                  <Link
                    href={`/?filter=${title.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color }}
                  >
                    View all {projects.length} {title.toLowerCase()} projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function CategoryShowcase({ projects }: CategoryShowcaseProps) {
  // Group projects into Research and Design categories
  const researchProjects = projects.filter(p =>
    ['user-research', 'usability-testing', 'heuristic-evaluation'].includes(p.category)
  );

  const designProjects = projects.filter(p =>
    ['design-systems', 'social', 'mobile-research'].includes(p.category)
  );

  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            UX Experience
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Hover over each category to explore my projects.
          </p>
        </div>

        {/* Two Category Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryBox
            title="Research"
            description="User research, usability testing, and heuristic evaluations that uncover insights and drive product decisions."
            icon={<Search className="w-8 h-8" />}
            projects={researchProjects}
            color="#0D9488"
          />

          <CategoryBox
            title="Design"
            description="Design systems, mobile experiences, and social features crafted through research-driven design processes."
            icon={<Palette className="w-8 h-8" />}
            projects={designProjects}
            color="#8B5CF6"
          />
        </div>
      </Container>
    </section>
  );
}
