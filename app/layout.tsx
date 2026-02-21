import type { Metadata } from 'next';
import { Righteous, Poppins, Fredoka } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { SkipToContent } from '@/components/shared/SkipToContent';
import './globals.css';

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const fredoka = Fredoka({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jeremy Philipson | Software Engineer',
  description: 'Personal portfolio of Jeremy Philipson - Software Engineer specializing in full-stack development with a retro 80s arcade aesthetic.',
  keywords: ['Jeremy Philipson', 'Software Engineer', 'Full Stack Developer', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Jeremy Philipson' }],
  openGraph: {
    title: 'Jeremy Philipson | Software Engineer',
    description: 'Personal portfolio with retro 80s arcade theme',
    url: 'https://www.jeremyphilipson.com',
    siteName: 'Jeremy Philipson Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremy Philipson | Software Engineer',
    description: 'Personal portfolio with retro 80s arcade theme',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${righteous.variable} ${poppins.variable} ${fredoka.variable}`}>
      <body className="flex flex-col min-h-screen">
        <SkipToContent />
        <Header />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
