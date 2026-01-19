import { Metadata } from 'next';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Abby Shamelashvili for UX research collaborations, consulting, or just to say hello.',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@abbyshamelashvili.com',
    href: 'mailto:hello@abbyshamelashvili.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    username: '@abbyshamelashvili',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/',
    username: '@abbyshamelashvili',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/',
    username: '@abbyshamelashvili',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[var(--primary)] font-medium">Contact</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Let&apos;s Connect
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Have a research project in mind? Want to discuss UX research strategies?
              Or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-[var(--surface)] rounded-2xl">
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-4 bg-[var(--surface)] rounded-xl">
                        <div className="p-2 bg-[var(--primary)]/10 rounded-lg">
                          <Icon className="w-5 h-5 text-[var(--primary)]" />
                        </div>
                        <div>
                          <div className="text-sm text-[var(--text-secondary)]">{item.label}</div>
                          <div className="font-medium text-[var(--text-primary)]">{item.value}</div>
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block hover:opacity-80 transition-opacity"
                        >
                          {content}
                        </a>
                      );
                    }

                    return <div key={item.label}>{content}</div>;
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Connect Online
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-xl hover:bg-[var(--border)] transition-colors"
                      >
                        <Icon className="w-5 h-5 text-[var(--text-secondary)]" />
                        <div>
                          <div className="font-medium text-[var(--text-primary)]">{link.label}</div>
                          <div className="text-sm text-[var(--text-secondary)]">{link.username}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-[var(--primary)]/10 rounded-xl border border-[var(--primary)]/20">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Currently Available
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  I&apos;m currently open to freelance research projects and consulting
                  opportunities. Let&apos;s discuss how I can help with your next project.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
