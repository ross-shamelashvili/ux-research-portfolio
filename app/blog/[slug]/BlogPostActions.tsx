'use client';

import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface BlogPostActionsProps {
  title: string;
  excerpt: string;
}

export function BlogPostActions({ title, excerpt }: BlogPostActionsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      {/* Share */}
      <div className="flex items-center gap-4">
        <span className="text-[var(--text-secondary)]">Share this article:</span>
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Back to Blog */}
      <Link href="/blog">
        <Button variant="ghost">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
      </Link>
    </div>
  );
}
