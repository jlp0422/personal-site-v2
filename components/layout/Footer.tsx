export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16" style={{ background: 'var(--color-foreground)', borderTop: '4px solid var(--color-accent3)' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="font-body text-sm mb-2" style={{ color: 'var(--color-text)' }}>
            Built with Next.js 15 · Powered by 80s vibes ✨
          </p>
          <p className="font-heading text-xs" style={{ color: 'var(--color-primary)' }}>
            © {currentYear} JEREMY PHILIPSON
          </p>
          <p className="font-body text-xs mt-2" style={{ color: 'var(--color-textMuted)' }}>
            Saved by the Bell theme · Because the 80s never went out of style
          </p>
        </div>
      </div>
    </footer>
  );
}
