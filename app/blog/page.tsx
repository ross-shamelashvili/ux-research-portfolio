import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { blogPosts } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights and articles about UX research, usability testing, and user-centered design from Abby Shamelashvili.',
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="pt-24">
      <Section>
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="text-[var(--primary)] font-medium">Blog</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              UX Research Insights
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Thoughts, learnings, and practical advice from my experience conducting
              user research across various industries and products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <Card hover className="h-full flex flex-col">
                  {/* Thumbnail placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] opacity-20 rounded-t-xl" />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-3 mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-2 text-[var(--primary)] font-medium text-sm">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)]">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
