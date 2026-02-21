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
      <div className="absolute top-20 right-10 w-32 h-32 bg-sbtbYellow opacity-20 rotate-45 hidden lg:block"></div>
      <div className="absolute top-60 left-20 w-24 h-24 bg-sbtbPink opacity-20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-sbtbCyan opacity-20 hidden lg:block"
           style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-sbtbPurple opacity-10 hidden lg:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeSection>
          <div className="mb-12">
            <h1 className="font-heading text-5xl md:text-6xl text-sbtbPurple mb-4"
                style={{ textShadow: '5px 5px 0px rgba(255, 107, 157, 0.3)' }}>
              My Journey 🚀
            </h1>
            <div className="flex gap-3 mb-4">
              <div className="w-16 h-2 bg-sbtbYellow"></div>
              <div className="w-12 h-2 bg-sbtbPink"></div>
              <div className="w-8 h-2 bg-sbtbCyan"></div>
            </div>
            <p className="font-body text-xl text-darkText max-w-2xl">
              From sports marketing to software engineering - here&apos;s how I got here! ✨
            </p>
          </div>
        </FadeSection>

        {/* Work Experience */}
        <div className="mb-16">
          <FadeSection delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-3xl text-sbtbOrange">
                Work Experience
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-sbtbOrange via-sbtbPink to-transparent"></div>
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
              <h2 className="font-heading text-3xl text-sbtbCyan">
                Education
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-sbtbCyan via-sbtbBlue to-transparent"></div>
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
              <button className="sbtb-button bg-sbtbPink border-sbtbPink text-white hover:bg-sbtbRed hover:border-sbtbRed">
                Back to Home
              </button>
            </Link>
            <Link href="/projects">
              <button className="sbtb-button bg-sbtbYellow border-sbtbYellow text-darkText hover:bg-sbtbOrange hover:border-sbtbOrange">
                Check Out Projects
              </button>
            </Link>
          </div>
        </FadeSection>
      </div>
    </main>
  );
}
