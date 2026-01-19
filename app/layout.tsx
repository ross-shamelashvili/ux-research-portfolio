import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abbyshamelashvili.com'),
  title: {
    default: 'Abby Shamelashvili | UX Researcher',
    template: '%s | Abby Shamelashvili',
  },
  description:
    'UX Researcher passionate about understanding user behavior and creating impactful experiences through research-driven design. Explore my portfolio of user research, usability testing, and design research projects.',
  keywords: [
    'UX Research',
    'User Research',
    'Usability Testing',
    'UX Designer',
    'User Experience',
    'Design Research',
    'Product Research',
  ],
  authors: [{ name: 'Abby Shamelashvili' }],
  creator: 'Abby Shamelashvili',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abbyshamelashvili.com',
    siteName: 'Abby Shamelashvili Portfolio',
    title: 'Abby Shamelashvili | UX Researcher',
    description:
      'UX Researcher crafting insights that drive product decisions. Explore my portfolio of research projects.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abby Shamelashvili - UX Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abby Shamelashvili | UX Researcher',
    description:
      'UX Researcher crafting insights that drive product decisions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
