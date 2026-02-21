'use client';

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-neonPink focus:text-deepBlack focus:font-pixel focus:text-sm focus:border-4 focus:border-neonCyan"
    >
      SKIP TO CONTENT
    </a>
  );
}
