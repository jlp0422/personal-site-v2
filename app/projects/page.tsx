import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Jeremy Philipson',
  description: 'Portfolio of projects built by Jeremy Philipson.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-pixel text-4xl text-coinGold mb-8 neon-glow">
          PROJECTS_
        </h1>

        <div className="crt-effect p-8 border-4 border-neonCyan bg-deepBlack/80">
          <p className="font-arcade text-2xl mb-4">
            &gt; SELECT YOUR GAME
          </p>
          <p className="text-lg">
            Project cards coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}
