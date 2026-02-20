import type { Metadata } from 'next';
import Link from 'next/link';
import { CRTEffect, PixelBorder, ArcadeButton } from '@/components/arcade';
import { FadeSection } from '@/components/animations';
import { contactInfo, socialLinks } from '@/data';

export const metadata: Metadata = {
  title: 'About | Jeremy Philipson',
  description: 'Learn about Jeremy Philipson - Lead Software Engineer at FanDuel specializing in full-stack development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <FadeSection>
          <h1 className="font-pixel text-3xl md:text-4xl text-neonPink mb-8 neon-glow">
            ABOUT_
          </h1>
        </FadeSection>

        <FadeSection delay={100}>
          <CRTEffect className="mb-8">
            <PixelBorder color="cyan" className="p-8 bg-deepBlack/90">
              <p className="font-arcade text-xl md:text-2xl mb-6 text-neonCyan">
                &gt; PLAYER ONE: JEREMY PHILIPSON
              </p>

              <div className="space-y-4 text-screenGreen">
                <p className="text-base md:text-lg leading-relaxed">
                  Hey there! I&apos;m a <span className="text-neonPink font-bold">Lead Software Engineer</span> at{' '}
                  <span className="text-neonYellow font-bold">FanDuel</span>, where I build features
                  for millions of daily fantasy sports and sportsbook users.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  My journey into software engineering started in 2018 at Fullstack Academy, after
                  pivoting from a career in sports marketing and email campaigns. I fell in love with
                  building things people actually use, and I haven&apos;t looked back since.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  I specialize in <span className="text-neonCyan">React</span>,{' '}
                  <span className="text-neonCyan">TypeScript</span>,{' '}
                  <span className="text-neonCyan">Python</span>, and{' '}
                  <span className="text-neonCyan">Java</span> - building full-stack applications
                  that are clean, performant, and maintainable. I&apos;m passionate about mentoring engineers,
                  establishing best practices, and shipping quality code.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me watching Formula 1, playing trivia, or building
                  side projects (like this retro-futuristic portfolio you&apos;re currently exploring).
                </p>
              </div>
            </PixelBorder>
          </CRTEffect>
        </FadeSection>

        <FadeSection delay={200}>
          <PixelBorder color="pink" className="p-6 bg-deepBlack/90 mb-8">
            <h2 className="font-pixel text-xl text-neonYellow mb-4">
              CONTACT_INFO
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-arcade text-neonCyan">📧</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-arcade text-screenGreen hover:text-neonPink transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-arcade text-neonCyan">📍</span>
                <span className="font-arcade text-screenGreen">
                  {contactInfo.location}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-neonCyan text-neonCyan font-arcade text-sm hover:bg-neonCyan hover:text-deepBlack transition-all"
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>
          </PixelBorder>
        </FadeSection>

        <FadeSection delay={300}>
          <div className="flex gap-4 justify-center">
            <Link href="/experience">
              <ArcadeButton variant="cyan" size="lg">
                VIEW EXPERIENCE
              </ArcadeButton>
            </Link>
            <Link href="/projects">
              <ArcadeButton variant="yellow" size="lg">
                VIEW PROJECTS
              </ArcadeButton>
            </Link>
          </div>
        </FadeSection>
      </div>
    </main>
  );
}
