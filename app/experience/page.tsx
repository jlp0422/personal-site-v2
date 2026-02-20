import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Jeremy Philipson',
  description: 'Work experience and professional background of Jeremy Philipson.',
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-pixel text-4xl text-neonYellow mb-8 neon-glow">
          EXPERIENCE_
        </h1>

        <div className="crt-effect p-8 border-4 border-arcadeOrange bg-deepBlack/80">
          <p className="font-arcade text-2xl mb-4">
            &gt; LEVEL UP YOUR CAREER
          </p>
          <p className="text-lg">
            Experience cards coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}
