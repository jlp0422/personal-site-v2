'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/theme';

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 shadow-lg transition-colors"
      style={{
        borderBottom: `4px solid var(--color-primary)`,
        background: 'var(--color-foreground)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl md:text-3xl transition-all hover:scale-105"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)',
            }}
          >
            JP
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-base md:text-lg transition-all hover:scale-110',
        className
      )}
      style={{
        fontFamily: 'var(--font-heading)',
        color: 'var(--color-text)',
      }}
    >
      {children}
    </Link>
  );
}
