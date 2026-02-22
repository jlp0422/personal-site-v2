'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { currentTheme } = useTheme();

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
            {currentTheme.emoji} {currentTheme.name} theme · Because the 80s never went out of style
          </p>
          <Link
            href="/game"
            className="text-xs inline-block mt-3 opacity-30 hover:opacity-70 transition-opacity duration-300"
            style={{ color: 'var(--color-textMuted)', letterSpacing: '0.25em' }}
            title="🏎️"
          >
            · · ·
          </Link>
        </div>
      </div>
    </footer>
  );
}
