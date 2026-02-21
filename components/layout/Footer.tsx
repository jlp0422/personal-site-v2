export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16" style={{ background: 'var(--color-foreground)', borderTop: '4px solid var(--color-accent3)' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
            Built with Next.js 15 · Powered by 80s vibes ✨
          </p>
          <p className="text-xs" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
            © {currentYear} JEREMY PHILIPSON
          </p>
          <p className="text-xs mt-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-textMuted)' }}>
            Saved by the Bell theme · Because the 80s never went out of style
          </p>
        </div>
      </div>
    </footer>
  );
}
