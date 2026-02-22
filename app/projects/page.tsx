import Link from 'next/link';
import { FadeSection } from '@/components/animations';
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
    <main className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      {/* Fun geometric background decorations */}
      <div className="theme-decoration absolute top-10 left-10 w-40 h-40 opacity-15 hidden lg:block"
           style={{ background: 'var(--color-accent3)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      <div className="theme-decoration absolute top-40 right-20 w-28 h-28 opacity-20 rounded-full hidden lg:block" style={{ background: 'var(--color-accent2)' }}></div>
      <div className="theme-decoration absolute bottom-20 left-1/4 w-24 h-24 opacity-15 rotate-12 hidden lg:block" style={{ background: 'var(--color-secondary)' }}></div>
      <div className="theme-decoration absolute top-1/2 right-10 w-20 h-20 opacity-10 hidden lg:block"
           style={{ background: 'var(--color-primary)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="theme-decoration absolute bottom-40 right-1/3 w-16 h-16 opacity-20 rounded-full hidden lg:block" style={{ background: 'var(--color-accent4)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeSection>
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent4)' }}>
              Things I Built.
            </h1>
            <div className="flex gap-3 mb-4">
              <div className="w-20 h-2" style={{ background: 'var(--color-accent4)' }}></div>
              <div className="w-14 h-2" style={{ background: 'var(--color-accent3)' }}></div>
              <div className="w-10 h-2" style={{ background: 'var(--color-accent2)' }}></div>
            </div>
            <p className="text-xl max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
              I build things for fun — some useful, some not, and at least one that started as &quot;this&apos;ll only take an hour.&quot; Also how I explain to my wife why I need another domain name.
            </p>
          </div>
        </FadeSection>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <FadeSection delay={100}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">⭐</span>
                <h2 className="text-3xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}>
                  Featured Work
                </h2>
                <div className="flex-1 h-1" style={{ background: 'linear-gradient(to right, var(--color-secondary), var(--color-accent2), transparent)' }}></div>
              </div>
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
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent4)' }}>
                  More Projects
                </h2>
                <div className="flex-1 h-1" style={{ background: 'linear-gradient(to right, var(--color-accent4), var(--color-accent3), transparent)' }}></div>
              </div>
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
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <button className="sbtb-button text-white hover:!bg-[var(--color-secondary)] hover:!border-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-heading)', background: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                Back to Home
              </button>
            </Link>
            <Link href="/experience">
              <button className="sbtb-button text-white hover:!bg-[var(--color-accent4)] hover:!border-[var(--color-accent4)]" style={{ fontFamily: 'var(--font-heading)', background: 'var(--color-accent3)', borderColor: 'var(--color-accent3)' }}>
                See My Experience
              </button>
            </Link>
          </div>
        </FadeSection>
      </div>
    </main>
  );
}
