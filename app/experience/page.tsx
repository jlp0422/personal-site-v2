import Link from 'next/link';
import { FadeSection } from '@/components/animations';
import { ExperienceCard, EducationCard } from '@/components/cards';
import { experience, education } from '@/data';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Experience | Jeremy Philipson',
  description: 'Work experience and professional background of Jeremy Philipson - Staff Software Engineer at FanDuel.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      {/* Fun geometric background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20 rotate-45 hidden lg:block" style={{ background: 'var(--color-accent2)' }}></div>
      <div className="absolute top-60 left-20 w-24 h-24 opacity-20 rounded-full hidden lg:block" style={{ background: 'var(--color-secondary)' }}></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 opacity-20 hidden lg:block"
           style={{ background: 'var(--color-accent3)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10 hidden lg:block" style={{ background: 'var(--color-primary)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeSection>
          <div className="mb-12">
            <h1 className="font-heading text-5xl md:text-6xl mb-4"
                style={{ color: 'var(--color-primary)', textShadow: '5px 5px 0px rgba(255, 107, 157, 0.3)' }}>
              My Journey 🚀
            </h1>
            <div className="flex gap-3 mb-4">
              <div className="w-16 h-2" style={{ background: 'var(--color-accent2)' }}></div>
              <div className="w-12 h-2" style={{ background: 'var(--color-secondary)' }}></div>
              <div className="w-8 h-2" style={{ background: 'var(--color-accent3)' }}></div>
            </div>
            <p className="font-body text-xl max-w-2xl" style={{ color: 'var(--color-text)' }}>
              From sports marketing to software engineering - here&apos;s how I got here! ✨
            </p>
          </div>
        </FadeSection>

        {/* Work Experience */}
        <div className="mb-16">
          <FadeSection delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-3xl" style={{ color: 'var(--color-accent1)' }}>
                Work Experience
              </h2>
              <div className="flex-1 h-1" style={{ background: 'linear-gradient(to right, var(--color-accent1), var(--color-secondary), transparent)' }}></div>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, idx) => (
              <FadeSection key={exp.id} delay={150 + idx * 50}>
                <ExperienceCard experience={exp} />
              </FadeSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <FadeSection delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-3xl" style={{ color: 'var(--color-accent3)' }}>
                Education
              </h2>
              <div className="flex-1 h-1" style={{ background: 'linear-gradient(to right, var(--color-accent3), var(--color-accent4), transparent)' }}></div>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <FadeSection key={edu.id} delay={150 + idx * 50}>
                <EducationCard education={edu} />
              </FadeSection>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <FadeSection delay={300}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <button className="sbtb-button text-white" style={{ background: 'var(--color-secondary)', borderColor: 'var(--color-secondary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-primary)';
                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-secondary)';
                        e.currentTarget.style.borderColor = 'var(--color-secondary)';
                      }}>
                Back to Home
              </button>
            </Link>
            <Link href="/projects">
              <button className="sbtb-button" style={{ background: 'var(--color-accent2)', borderColor: 'var(--color-accent2)', color: 'var(--color-text)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-accent1)';
                        e.currentTarget.style.borderColor = 'var(--color-accent1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-accent2)';
                        e.currentTarget.style.borderColor = 'var(--color-accent2)';
                      }}>
                Check Out Projects
              </button>
            </Link>
          </div>
        </FadeSection>
      </div>
    </main>
  );
}
