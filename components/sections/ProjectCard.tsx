'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Project, methodologyLabels } from '@/lib/types';

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
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--surface)]">
          {/* Placeholder gradient for missing images */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] opacity-20" />

          {/* Image would go here when available */}
          {project.thumbnail && project.thumbnail !== '/images/projects/healthcare-thumb.jpg' && (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Overlay with icon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* View Project Arrow */}
          <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>

          {/* Project Title Overlay (shown on hover for visual hierarchy) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white font-medium">View Case Study</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
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
      </Link>
    </motion.article>
  );
}
