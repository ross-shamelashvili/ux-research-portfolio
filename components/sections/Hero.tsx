'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
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
    <section className="min-h-[70vh] flex items-center justify-center py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] font-medium rounded-full text-sm">
              UX Researcher
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight"
          >
            Hi, I&apos;m Abby Shamelashvili
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl"
          >
            I transform user insights into product decisions. Helping teams understand
            their users through rigorous research—from discovery to validation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
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
              leftIcon={<FileText className="w-4 h-4" />}
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
            className="mt-16 flex justify-center gap-12 md:gap-16"
          >
            {[
              { value: '50+', label: 'Research Studies' },
              { value: '300+', label: 'User Interviews' },
              { value: '8', label: 'Industries' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
