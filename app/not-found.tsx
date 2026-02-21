import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="p-12 memphis-border" style={{ background: 'var(--color-foreground)', border: '4px solid var(--color-secondary)' }}>
          <h1 className="text-7xl md:text-9xl mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
            404
          </h1>

          <p className="text-3xl mb-4" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-accent1)' }}>
            Whoa, Totally Bogus!
          </p>

          <p className="text-xl mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
            This page is like... totally not here, dude! 🤙
          </p>

          <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-textMuted)' }}>
            Looks like this page went to detention and never came back.
          </p>

          <Link href="/">
            <button className="sbtb-button text-white hover:!bg-[var(--color-primary)] hover:!border-[var(--color-primary)]" style={{ fontFamily: 'var(--font-heading)', background: 'var(--color-accent3)', borderColor: 'var(--color-accent3)' }}>
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
