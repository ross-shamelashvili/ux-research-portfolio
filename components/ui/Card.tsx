'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        bg-[var(--background)]
        border border-[var(--border)]
        rounded-xl
        overflow-hidden
        transition-colors duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 border-b border-[var(--border)] ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 border-t border-[var(--border)] ${className}`}>
      {children}
    </div>
  );
}
