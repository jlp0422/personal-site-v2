import Link from 'next/link';
import { FadeSection } from '@/components/animations';
import { ArcadeButton } from '@/components/arcade';
import { ProjectCard } from '@/components/cards';
import { projects } from '@/data';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Projects | Jeremy Philipson',
  description: 'Portfolio of projects built by Jeremy Philipson - from F1 fantasy leagues to trivia apps.',
  path: '/projects',
});

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <div className="mb-12">
            <h1 className="font-pixel text-3xl md:text-4xl text-coinGold mb-4 neon-glow">
              PROJECTS_
            </h1>
            <p className="font-arcade text-xl text-screenGreen">
              &gt; SELECT YOUR GAME
            </p>
          </div>
        </FadeSection>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <FadeSection delay={100}>
              <h2 className="font-pixel text-xl text-neonYellow mb-6 flex items-center gap-2">
                <span className="animate-blink">⭐</span>
                FEATURED
              </h2>
            </FadeSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, idx) => (
                <FadeSection key={project.id} delay={150 + idx * 50}>
                  <ProjectCard project={project} />
                </FadeSection>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-12">
            <FadeSection delay={100}>
              <h2 className="font-pixel text-xl text-neonCyan mb-6">
                MORE PROJECTS
              </h2>
            </FadeSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, idx) => (
                <FadeSection key={project.id} delay={150 + idx * 50}>
                  <ProjectCard project={project} />
                </FadeSection>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <FadeSection delay={300}>
          <div className="flex gap-4 justify-center">
            <Link href="/about">
              <ArcadeButton variant="pink" size="lg">
                BACK TO ABOUT
              </ArcadeButton>
            </Link>
            <Link href="/experience">
              <ArcadeButton variant="cyan" size="lg">
                VIEW EXPERIENCE
              </ArcadeButton>
            </Link>
          </div>
        </FadeSection>
      </div>
    </main>
  );
}
