'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Project, methodologyLabels, categoryLabels } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="h-full bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--primary)]/50 hover:shadow-lg transition-all duration-300">
          {/* Placeholder Area */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--primary)]/15 via-[var(--primary)]/5 to-[var(--surface)] overflow-hidden">
            {/* Large initial letter as placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-bold text-[var(--primary)]/20 select-none">
                {project.title.charAt(0)}
              </span>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 transition-colors duration-300" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-[var(--background)]/95 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--text-primary)] shadow-sm border border-[var(--border)]">
                {categoryLabels[project.category]}
              </span>
            </div>

            {/* Year badge */}
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 bg-[var(--background)]/95 backdrop-blur-sm rounded-full text-xs text-[var(--text-secondary)]">
                {project.year}
              </span>
            </div>

            {/* Arrow indicator */}
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors line-clamp-1 mb-2">
              {project.title}
            </h3>

            <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.methodologies.slice(0, 3).map((method) => (
                <Badge key={method} variant="secondary" size="sm">
                  {methodologyLabels[method]}
                </Badge>
              ))}
              {project.methodologies.length > 3 && (
                <Badge variant="secondary" size="sm">
                  +{project.methodologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
