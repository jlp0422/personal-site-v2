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
      <div className="absolute top-10 left-10 w-40 h-40 bg-sbtbCyan opacity-15 hidden lg:block"
           style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      <div className="absolute top-40 right-20 w-28 h-28 bg-sbtbYellow opacity-20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-sbtbPink opacity-15 rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-sbtbPurple opacity-10 hidden lg:block"
           style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-sbtbGreen opacity-20 rounded-full hidden lg:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeSection>
          <div className="mb-12">
            <h1 className="font-heading text-5xl md:text-6xl text-sbtbBlue mb-4"
                style={{ textShadow: '5px 5px 0px rgba(255, 141, 66, 0.3)' }}>
              Cool Stuff I Built 💡
            </h1>
            <div className="flex gap-3 mb-4">
              <div className="w-20 h-2 bg-sbtbBlue"></div>
              <div className="w-14 h-2 bg-sbtbCyan"></div>
              <div className="w-10 h-2 bg-sbtbYellow"></div>
            </div>
            <p className="font-body text-xl text-darkText max-w-2xl">
              From sports apps to love letters - check out what I&apos;ve been working on! 🎨
            </p>
          </div>
        </FadeSection>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <FadeSection delay={100}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">⭐</span>
                <h2 className="font-heading text-3xl text-sbtbPink">
                  Featured Work
                </h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-sbtbPink via-sbtbYellow to-transparent"></div>
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
                <h2 className="font-heading text-3xl text-sbtbGreen">
                  More Projects
                </h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-sbtbGreen via-sbtbCyan to-transparent"></div>
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
              <button className="sbtb-button bg-sbtbPurple border-sbtbPurple text-white hover:bg-sbtbPink hover:border-sbtbPink">
                Back to Home
              </button>
            </Link>
            <Link href="/experience">
              <button className="sbtb-button bg-sbtbCyan border-sbtbCyan text-white hover:bg-sbtbBlue hover:border-sbtbBlue">
                See My Experience
              </button>
            </Link>
          </div>
        </FadeSection>
      </div>
    </main>
  );
}
