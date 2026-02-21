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
          <h1 className="font-heading text-5xl md:text-6xl mb-4"
              style={{ color: 'var(--color-primary)', textShadow: '4px 4px 0px rgba(255, 107, 157, 0.3)' }}>
            Hey there! 👋
          </h1>
          <div className="w-24 h-2 mb-8" style={{ background: 'var(--color-accent2)', clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}></div>
        </FadeSection>

        <FadeSection delay={100}>
          <div className="p-8 md:p-10 mb-8 memphis-border" style={{ background: 'var(--color-foreground)', border: '4px solid var(--color-secondary)' }}>
            <p className="font-heading text-2xl md:text-3xl mb-6" style={{ color: 'var(--color-accent3)' }}>
              I&apos;m Jeremy Philipson
            </p>

            <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
              <p>
                Hey! I&apos;m a <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Staff Software Engineer</span> at{' '}
                <span className="font-bold" style={{ color: 'var(--color-accent4)' }}>FanDuel</span>, where I build features
                for millions of daily fantasy sports and sportsbook users.
              </p>

              <p>
                My journey into software engineering started in 2018 at Fullstack Academy, after
                pivoting from a career in sports marketing. I fell in love with
                building things people actually use, and I haven&apos;t looked back since!
              </p>

              <p>
                I specialize in <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>React</span>,{' '}
                <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>TypeScript</span>,{' '}
                <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>Python</span>, and{' '}
                <span className="font-semibold" style={{ color: 'var(--color-accent3)' }}>Java</span> - building full-stack applications
                that are clean, performant, and maintainable.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me watching Formula 1 🏎️, playing trivia 🧠,
                or building fun side projects like this totally rad portfolio!
              </p>
            </div>
          </div>
        </FadeSection>

        <FadeSection delay={200}>
          <div className="p-8 mb-8"
               style={{ background: 'var(--color-foreground)', border: '4px solid var(--color-accent2)', boxShadow: '8px 8px 0px rgba(155, 89, 182, 0.3)' }}>
            <h2 className="font-heading text-2xl mb-6" style={{ color: 'var(--color-accent1)' }}>
              Let&apos;s Connect! 📬
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-body font-medium transition-colors hover:!text-[var(--color-secondary)]"
                  style={{ color: 'var(--color-accent4)' }}
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="font-body font-medium" style={{ color: 'var(--color-text)' }}>
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
                  className="px-6 py-3 border-3 text-white font-heading text-sm transition-all transform hover:scale-105 hover:!bg-[var(--color-secondary)] hover:!border-[var(--color-secondary)]"
                  style={{
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
              <button className="sbtb-button text-white hover:!bg-[var(--color-accent4)] hover:!border-[var(--color-accent4)]" style={{ background: 'var(--color-accent3)', borderColor: 'var(--color-accent3)' }}>
                View Experience
              </button>
            </Link>
            <Link href="/projects">
              <button className="sbtb-button hover:!bg-[var(--color-accent1)] hover:!border-[var(--color-accent1)]" style={{ background: 'var(--color-accent2)', borderColor: 'var(--color-accent2)', color: 'var(--color-text)' }}>
                View Projects
              </button>
            </Link>
          </div>
        </FadeSection>

        {/* Fun geometric decorations */}
        <div className="absolute top-20 right-10 w-16 h-16 opacity-20 rotate-45 hidden lg:block" style={{ background: 'var(--color-secondary)' }}></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 opacity-20 rounded-full hidden lg:block" style={{ background: 'var(--color-accent2)' }}></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 opacity-20 hidden lg:block" style={{ background: 'var(--color-accent3)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>
    </main>
  );
}
