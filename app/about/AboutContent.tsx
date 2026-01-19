'use client';

import Link from 'next/link';
import { Download, Linkedin, Github, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const researchSkills = [
  'User Interviews',
  'Usability Testing',
  'Survey Design',
  'A/B Testing',
  'Heuristic Evaluation',
  'Card Sorting',
  'Tree Testing',
  'Diary Studies',
  'Contextual Inquiry',
  'Journey Mapping',
  'Competitive Analysis',
  'Persona Development',
];

const tools = [
  'Figma',
  'Miro',
  'Dovetail',
  'UserTesting',
  'Maze',
  'Optimal Workshop',
  'Hotjar',
  'Google Analytics',
  'Amplitude',
  'Qualtrics',
  'Lookback',
  'dscout',
];

const softSkills = [
  'Stakeholder Management',
  'Research Synthesis',
  'Storytelling',
  'Workshop Facilitation',
  'Cross-functional Collaboration',
  'Presentation Skills',
];

const socialLinks = [
  { href: 'https://linkedin.com/in/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/', label: 'GitHub', icon: Github },
  { href: 'https://twitter.com/', label: 'Twitter', icon: Twitter },
  { href: 'mailto:hello@example.com', label: 'Email', icon: Mail },
];

export function AboutContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] opacity-30" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[var(--primary)] font-medium">About Me</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                Hi, I&apos;m Abby Shamelashvili
              </h1>
              <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                I&apos;m a UX Researcher with a Master&apos;s degree in Human-Computer Interaction,
                passionate about understanding the &quot;why&quot; behind user behavior. I believe
                that great products come from deep empathy with users and rigorous research methods.
              </p>
              <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                With over 5 years of experience in both agency and in-house roles, I&apos;ve
                led research initiatives across healthcare, fintech, e-commerce, and SaaS
                products. I specialize in mixed-methods research, combining qualitative
                insights with quantitative validation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  leftIcon={<Download className="w-4 h-4" />}
                  onClick={() => window.open('/cv.pdf', '_blank')}
                >
                  Download CV
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="p-3 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section className="bg-[var(--surface)]">
        <Container size="narrow">
          <SectionHeader
            title="My Research Philosophy"
            subtitle="I approach every research project with curiosity, rigor, and a commitment to actionable insights."
          />
          <div className="space-y-6">
            <div className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                User-Centered, Always
              </h3>
              <p className="text-[var(--text-secondary)]">
                I put users at the center of every decision. Research isn&apos;t just about
                collecting data—it&apos;s about developing genuine empathy for the people
                who will use our products.
              </p>
            </div>
            <div className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Mixed Methods Matter
              </h3>
              <p className="text-[var(--text-secondary)]">
                The best insights come from combining qualitative depth with quantitative
                breadth. I use whatever methods best answer the research questions at hand.
              </p>
            </div>
            <div className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Impact Over Output
              </h3>
              <p className="text-[var(--text-secondary)]">
                Research only matters if it leads to action. I focus on delivering insights
                that teams can actually use to make better product decisions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Education & Experience */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <SectionHeader title="Education" />
              <div className="space-y-6">
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <div className="text-sm text-[var(--primary)] font-medium">2018 - 2020</div>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                    Master of Science in Human-Computer Interaction
                  </h3>
                  <p className="mt-1 text-[var(--text-secondary)]">
                    University of Washington
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    Focus on user research methods, interaction design, and accessibility.
                    Thesis on improving mobile accessibility for older adults.
                  </p>
                </div>
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <div className="text-sm text-[var(--primary)] font-medium">2014 - 2018</div>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                    Bachelor of Arts in Psychology
                  </h3>
                  <p className="mt-1 text-[var(--text-secondary)]">
                    University of California, Berkeley
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    Minor in Cognitive Science. Research assistant in the Perception Lab.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <SectionHeader title="Experience" />
              <div className="space-y-6">
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <div className="text-sm text-[var(--primary)] font-medium">2022 - Present</div>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                    Senior UX Researcher
                  </h3>
                  <p className="mt-1 text-[var(--text-secondary)]">
                    Tech Company • San Francisco, CA
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    Leading research strategy for core product teams. Established research
                    operations and mentored junior researchers.
                  </p>
                </div>
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <div className="text-sm text-[var(--primary)] font-medium">2020 - 2022</div>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                    UX Researcher
                  </h3>
                  <p className="mt-1 text-[var(--text-secondary)]">
                    Design Agency • Seattle, WA
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    Conducted end-to-end research for clients across healthcare, finance,
                    and e-commerce industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section className="bg-[var(--surface)]">
        <Container>
          <SectionHeader
            title="Skills & Expertise"
            subtitle="A comprehensive toolkit for understanding users and driving product decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Research Methods */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Research Methods
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" size="md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" size="md">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" size="md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              I&apos;m always interested in hearing about new research challenges and
              opportunities to help teams better understand their users.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Get in Touch
                </Button>
              </Link>
              <Link href="/#work">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
