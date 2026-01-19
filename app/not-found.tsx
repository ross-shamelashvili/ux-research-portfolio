'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="text-center max-w-md mx-auto">
          <div className="text-8xl font-bold text-[var(--primary)] mb-4">404</div>
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Page Not Found
          </h1>
          <p className="text-[var(--text-secondary)] mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button size="lg" leftIcon={<Home className="w-4 h-4" />}>
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
