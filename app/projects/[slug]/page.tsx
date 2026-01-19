import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Section, SectionHeader } from '@/components/ui/Section';
import { projects, getProjectBySlug } from '@/lib/data/projects';
import { methodologyLabels, categoryLabels } from '@/lib/types';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="pt-24">
      {/* Back Navigation */}
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </Container>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="primary" size="md" className="mb-4">
              {categoryLabels[project.category]}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
              {project.client && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>

            {/* Methodologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.methodologies.map((method) => (
                <Badge key={method} variant="secondary" size="md">
                  {methodologyLabels[method]}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <Container>
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] opacity-20" />
        </Container>
      </section>

      {/* Overview */}
      <Section>
        <Container size="narrow">
          <SectionHeader title="Overview" />
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {project.overview}
          </p>
        </Container>
      </Section>

      {/* Challenge */}
      <Section className="bg-[var(--surface)]">
        <Container size="narrow">
          <SectionHeader title="The Challenge" />
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {project.challenge}
          </p>
        </Container>
      </Section>

      {/* Approach */}
      <Section>
        <Container size="narrow">
          <SectionHeader title="Research Approach" />
          <div className="space-y-8">
            {project.approach.map((section, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[var(--primary)]">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {section.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{section.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Findings */}
      <Section className="bg-[var(--surface)]">
        <Container>
          <SectionHeader title="Key Findings" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.findings.map((finding, index) => (
              <div
                key={index}
                className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {finding.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{finding.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section>
        <Container>
          <SectionHeader title="Deliverables" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="p-6 border border-[var(--border)] rounded-xl"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {deliverable.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{deliverable.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact */}
      <Section className="bg-[var(--primary)] text-white">
        <Container>
          <SectionHeader
            title="Impact & Outcomes"
            className="[&_h2]:text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.impact.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{item.value}</div>
                <div className="text-xl font-medium mb-1">{item.metric}</div>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tools Used */}
      <Section>
        <Container size="narrow">
          <SectionHeader title="Tools & Methods" />
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" size="md">
                {tool}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      {/* Project Navigation */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="group">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span className="text-sm">Previous Project</span>
                </Button>
                <p className="mt-1 text-[var(--text-primary)] font-medium pl-10">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`} className="group text-right">
                <Button variant="ghost" className="gap-2">
                  <span className="text-sm">Next Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="mt-1 text-[var(--text-primary)] font-medium pr-10">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </Container>
      </section>
    </article>
  );
}
