import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { blogPosts, getBlogPostBySlug } from '@/lib/data/blog';
import { BlogPostActions } from './BlogPostActions';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [post.thumbnail],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24">
      {/* Back Navigation */}
      <Container>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </Container>

      {/* Header */}
      <header className="py-12">
        <Container size="narrow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" size="md">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Featured Image */}
      <div className="py-8">
        <Container>
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] opacity-20" />
        </Container>
      </div>

      {/* Content */}
      <section className="py-12">
        <Container size="narrow">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-[var(--text-primary)] prose-headings:font-semibold
              prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
              prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[var(--text-primary)]
              prose-ul:text-[var(--text-secondary)]
              prose-ol:text-[var(--text-secondary)]
              prose-li:text-[var(--text-secondary)]
              prose-blockquote:border-[var(--primary)] prose-blockquote:text-[var(--text-secondary)]
              prose-code:text-[var(--primary)] prose-code:bg-[var(--surface)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            "
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </Container>
      </section>

      {/* Share & Navigation */}
      <section className="py-12 border-t border-[var(--border)]">
        <Container size="narrow">
          <BlogPostActions title={post.title} excerpt={post.excerpt} />
        </Container>
      </section>

      {/* Author */}
      <section className="py-12 bg-[var(--surface)]">
        <Container size="narrow">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] opacity-50" />
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Abby Shamelashvili
              </h3>
              <p className="text-[var(--text-secondary)]">
                UX Researcher passionate about understanding users and creating impactful experiences.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
