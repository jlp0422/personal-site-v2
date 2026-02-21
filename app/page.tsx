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
          <h1 className="font-heading text-5xl md:text-6xl text-sbtbPurple mb-4"
              style={{ textShadow: '4px 4px 0px rgba(255, 107, 157, 0.3)' }}>
            Hey there! 👋
          </h1>
          <div className="w-24 h-2 bg-sbtbYellow mb-8" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}></div>
        </FadeSection>

        <FadeSection delay={100}>
          <div className="bg-white border-4 border-sbtbPink p-8 md:p-10 mb-8 memphis-border">
            <p className="font-heading text-2xl md:text-3xl mb-6 text-sbtbCyan">
              I&apos;m Jeremy Philipson
            </p>

            <div className="space-y-4 text-darkText text-lg leading-relaxed">
              <p>
                Hey! I&apos;m a <span className="font-bold text-sbtbPurple">Staff Software Engineer</span> at{' '}
                <span className="font-bold text-sbtbBlue">FanDuel</span>, where I build features
                for millions of daily fantasy sports and sportsbook users.
              </p>

              <p>
                My journey into software engineering started in 2018 at Fullstack Academy, after
                pivoting from a career in sports marketing. I fell in love with
                building things people actually use, and I haven&apos;t looked back since!
              </p>

              <p>
                I specialize in <span className="font-semibold text-sbtbCyan">React</span>,{' '}
                <span className="font-semibold text-sbtbCyan">TypeScript</span>,{' '}
                <span className="font-semibold text-sbtbCyan">Python</span>, and{' '}
                <span className="font-semibold text-sbtbCyan">Java</span> - building full-stack applications
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
          <div className="bg-white border-4 border-sbtbYellow p-8 mb-8"
               style={{ boxShadow: '8px 8px 0px rgba(155, 89, 182, 0.3)' }}>
            <h2 className="font-heading text-2xl text-sbtbOrange mb-6">
              Let&apos;s Connect! 📬
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-body text-sbtbBlue hover:text-sbtbPink transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="font-body text-darkText font-medium">
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
                  className="px-6 py-3 border-3 border-sbtbPurple bg-sbtbPurple text-white font-heading text-sm hover:bg-sbtbPink hover:border-sbtbPink transition-all transform hover:scale-105"
                  style={{ boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)' }}
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
              <button className="sbtb-button bg-sbtbCyan border-sbtbCyan text-white hover:bg-sbtbBlue hover:border-sbtbBlue">
                View Experience
              </button>
            </Link>
            <Link href="/projects">
              <button className="sbtb-button bg-sbtbYellow border-sbtbYellow text-darkText hover:bg-sbtbOrange hover:border-sbtbOrange">
                View Projects
              </button>
            </Link>
          </div>
        </FadeSection>

        {/* Fun geometric decorations */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-sbtbPink opacity-20 rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 bg-sbtbYellow opacity-20 rounded-full hidden lg:block"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-sbtbCyan opacity-20 hidden lg:block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>
    </main>
  );
}
