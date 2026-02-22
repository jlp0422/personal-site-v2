import Link from 'next/link';
import { FadeSection } from '@/components/animations';
import { contactInfo, socialLinks } from '@/data';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Jeremy Philipson | Staff Software Engineer',
  description: 'Personal portfolio of Jeremy Philipson - Staff Software Engineer at FanDuel specializing in full-stack development.',
  path: '/',
});

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <FadeSection>
          <h1 className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
            Hi, I&apos;m Jeremy.
          </h1>
          <div className="w-24 h-2 mb-8" style={{ background: 'var(--color-accent2)', clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}></div>
        </FadeSection>

        <FadeSection delay={100}>
          <div className="p-8 md:p-10 mb-8 memphis-border" style={{ background: 'var(--color-foreground)', border: '4px solid var(--color-secondary)' }}>
            <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
              <p>
                I build software at <span className="font-bold" style={{ color: 'var(--color-accent4)' }}>FanDuel</span> as a{' '}
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Staff Software Engineer</span> and side projects that nobody asked for but I built anyway.
              </p>

              <p>
                Bootcamp grad turned Staff Engineer — proof that it&apos;s never too late to completely change what you&apos;re doing.
              </p>

              <p>
                I specialize in <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>React</span>,{' '}
                <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>TypeScript</span>,{' '}
                <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>Python</span>, and{' '}
                <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>C#</span> — building full-stack applications
                that are clean, performant, and maintainable.
              </p>

              <p>
                Off the clock I&apos;m a{' '}
                <Link
                  href="/game"
                  className="underline decoration-dotted underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'inherit' }}
                >
                  McLaren fan
                </Link>
                , a golfer who&apos;s very optimistic about his handicap,
                and a reader of whatever book I can finish before the next one arrives. There are always two more on deck.
              </p>
            </div>
          </div>
        </FadeSection>

        <FadeSection delay={200}>
          <div className="p-8 mb-8"
               style={{ background: 'var(--color-foreground)', border: '4px solid var(--color-accent2)', boxShadow: '8px 8px 0px rgba(155, 89, 182, 0.3)' }}>
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent1)' }}>
              Get in Touch
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-medium transition-colors hover:!text-[var(--color-secondary)]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent4)' }}
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
                  {contactInfo.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-3 text-white text-sm transition-all transform hover:scale-105 hover:!bg-[var(--color-secondary)] hover:!border-[var(--color-secondary)]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    background: 'var(--color-primary)',
                    borderColor: 'var(--color-primary)',
                    boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </FadeSection>

        <FadeSection delay={300}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/experience">
              <button className="sbtb-button text-white hover:!bg-[var(--color-accent4)] hover:!border-[var(--color-accent4)]" style={{ fontFamily: 'var(--font-heading)', background: 'var(--color-accent3)', borderColor: 'var(--color-accent3)' }}>
                View Experience
              </button>
            </Link>
            <Link href="/projects">
              <button className="sbtb-button hover:!bg-[var(--color-accent1)] hover:!border-[var(--color-accent1)]" style={{ fontFamily: 'var(--font-heading)', background: 'var(--color-accent2)', borderColor: 'var(--color-accent2)', color: 'var(--color-text)' }}>
                View Projects
              </button>
            </Link>
          </div>
        </FadeSection>

        {/* Fun geometric decorations */}
        <div className="theme-decoration absolute top-20 right-10 w-16 h-16 opacity-20 rotate-45 hidden lg:block" style={{ background: 'var(--color-secondary)' }}></div>
        <div className="theme-decoration absolute bottom-40 left-10 w-12 h-12 opacity-20 rounded-full hidden lg:block" style={{ background: 'var(--color-accent2)' }}></div>
        <div className="theme-decoration absolute top-60 left-1/4 w-8 h-8 opacity-20 hidden lg:block" style={{ background: 'var(--color-accent3)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>
    </main>
  );
}
