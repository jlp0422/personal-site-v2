import type { Metadata } from 'next';
import { Press_Start_2P, VT323, Orbitron } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-arcade',
  display: 'swap',
});

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
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
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable} ${orbitron.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
