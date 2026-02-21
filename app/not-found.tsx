import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="p-12 memphis-border" style={{ background: 'var(--color-foreground)', border: '4px solid var(--color-secondary)' }}>
          <h1 className="font-heading text-7xl md:text-9xl mb-6"
              style={{ color: 'var(--color-primary)', textShadow: '6px 6px 0px rgba(255, 107, 157, 0.3)' }}>
            404
          </h1>

          <p className="font-accent text-3xl mb-4" style={{ color: 'var(--color-accent1)' }}>
            Whoa, Totally Bogus!
          </p>

          <p className="font-body text-xl mb-8" style={{ color: 'var(--color-text)' }}>
            This page is like... totally not here, dude! 🤙
          </p>

          <p className="font-body text-lg mb-8" style={{ color: 'var(--color-textMuted)' }}>
            Looks like this page went to detention and never came back.
          </p>

          <Link href="/">
            <button className="sbtb-button text-white hover:!bg-[var(--color-primary)] hover:!border-[var(--color-primary)]" style={{ background: 'var(--color-accent3)', borderColor: 'var(--color-accent3)' }}>
              Take Me Home
            </button>
          </Link>
        </div>

        {/* Fun 80s decorations */}
        <div className="mt-8 flex justify-center gap-4 text-4xl">
          <span className="animate-bounce">🎸</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>📻</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
        </div>
      </div>
    </main>
  );
}
