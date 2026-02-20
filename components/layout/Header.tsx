import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="border-b-4 border-neonPink bg-deepBlack/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/about" className="font-pixel text-lg md:text-xl text-neonPink hover:text-neonCyan transition-colors neon-glow">
            JP_
          </Link>

          <div className="flex gap-4 md:gap-8">
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/experience">EXPERIENCE</NavLink>
            <NavLink href="/projects">PROJECTS</NavLink>
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
        'font-pixel text-xs md:text-sm text-screenGreen hover:text-neonYellow transition-colors',
        className
      )}
    >
      {children}
    </Link>
  );
}
