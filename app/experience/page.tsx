import Link from 'next/link';
import { FadeSection } from '@/components/animations';
import { ArcadeButton } from '@/components/arcade';
import { ExperienceCard, EducationCard } from '@/components/cards';
import { experience, education } from '@/data';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Experience | Jeremy Philipson',
  description: 'Work experience and professional background of Jeremy Philipson - Lead Software Engineer at FanDuel.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <div className="mb-12">
            <h1 className="font-pixel text-3xl md:text-4xl text-neonYellow mb-4 neon-glow">
              EXPERIENCE_
            </h1>
            <p className="font-arcade text-xl text-screenGreen">
              &gt; LEVEL UP YOUR CAREER
            </p>
          </div>
        </FadeSection>

        {/* Work Experience */}
        <div className="mb-16">
          <FadeSection delay={100}>
            <h2 className="font-pixel text-xl text-neonPink mb-6">
              WORK HISTORY
            </h2>
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
            <h2 className="font-pixel text-xl text-neonCyan mb-6">
              EDUCATION
            </h2>
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
          <div className="flex gap-4 justify-center">
            <Link href="/about">
              <ArcadeButton variant="pink" size="lg">
                BACK TO ABOUT
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
