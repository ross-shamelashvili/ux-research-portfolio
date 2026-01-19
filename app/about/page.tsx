import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Abby Shamelashvili, a UX Researcher with a Master\'s degree passionate about understanding user behavior and creating impactful experiences.',
};

export default function AboutPage() {
  return <AboutContent />;
}
