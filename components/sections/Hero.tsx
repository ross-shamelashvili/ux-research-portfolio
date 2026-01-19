'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center pt-20 md:pt-24">
      <Container>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--primary)] font-medium">
              Hello, I&apos;m Abby
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight"
          >
            UX Researcher crafting{' '}
            <span className="text-gradient">insights</span> that drive product decisions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl"
          >
            I help teams understand their users through rigorous research methods,
            transforming data into actionable insights that create meaningful experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToWork}
              rightIcon={<ArrowDown className="w-4 h-4" />}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Download className="w-4 h-4" />}
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {[
              { value: '50+', label: 'Research Projects' },
              { value: '200+', label: 'User Interviews' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
