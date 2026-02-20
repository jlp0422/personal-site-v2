import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Jeremy Philipson',
  description: 'Learn about Jeremy Philipson - Software Engineer passionate about building great web experiences.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-pixel text-4xl text-neonPink mb-8 neon-glow">
          ABOUT_
        </h1>

        <div className="crt-effect p-8 border-4 border-neonCyan bg-deepBlack/80">
          <p className="font-arcade text-2xl mb-4">
            &gt; PLAYER ONE: JEREMY PHILIPSON
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to my retro-futuristic corner of the web! I&apos;m a software engineer
            who believes the best code is like a perfectly timed combo move - clean,
            efficient, and satisfying to execute.
          </p>
          <p className="text-lg leading-relaxed">
            This site is under construction as I migrate to Next.js 15 with an 80s arcade theme.
            Press START to continue...
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="arcade-button bg-neonPink text-deepBlack border-neonPink">
            PRESS START
          </button>
        </div>
      </div>
    </main>
  );
}
