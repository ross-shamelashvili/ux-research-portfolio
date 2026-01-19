import Link from 'next/link';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { Container } from '../ui/Container';

const socialLinks = [
  {
    href: 'https://linkedin.com/in/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://twitter.com/',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    href: 'mailto:hello@example.com',
    label: 'Email',
    icon: Mail,
  },
];

const navLinks = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-xl font-semibold text-[var(--text-primary)]">
                  Abby Shamelashvili
                </span>
              </Link>
              <p className="text-[var(--text-secondary)] text-sm max-w-xs">
                UX Researcher passionate about understanding user behavior and creating impactful experiences through research-driven design.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--background)] transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--text-secondary)] text-center">
              &copy; {currentYear} Abby Shamelashvili. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
