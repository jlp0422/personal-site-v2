import type { Metadata } from 'next';
import {
  Righteous,
  Poppins,
  Fredoka,
  Orbitron,
  Rajdhani,
  Share_Tech_Mono,
  VT323,
  Courier_Prime,
  Monoton,
  Quicksand,
  Bungee_Shade,
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { SkipToContent } from '@/components/shared/SkipToContent';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

// Saved by the Bell fonts
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sbtb-heading',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sbtb-body',
  display: 'swap',
});

const fredoka = Fredoka({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sbtb-accent',
  display: 'swap',
});

// Cyberpunk fonts
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-cyber-heading',
  display: 'swap',
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cyber-body',
  display: 'swap',
});

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cyber-accent',
  display: 'swap',
});

// Retro Terminal fonts
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-terminal-heading',
  display: 'swap',
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-terminal-body',
  display: 'swap',
});

// Vaporwave fonts
const monoton = Monoton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vapor-heading',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-vapor-body',
  display: 'swap',
});

const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vapor-accent',
  display: 'swap',
});

// Brutalist fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-brutal-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-brutal-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-brutal-accent',
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
  const fontVariables = `
    ${righteous.variable} ${poppins.variable} ${fredoka.variable}
    ${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable}
    ${vt323.variable} ${courierPrime.variable}
    ${monoton.variable} ${quicksand.variable} ${bungeeShade.variable}
    ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}
  `.trim();

  return (
    <html lang="en" className={fontVariables}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <SkipToContent />
          <Header />
          <div id="main-content" className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
