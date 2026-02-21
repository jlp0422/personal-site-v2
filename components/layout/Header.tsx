import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="border-b-4 border-sbtbPurple bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-2xl md:text-3xl text-sbtbPurple hover:text-sbtbPink transition-colors"
            style={{ textShadow: '2px 2px 0px rgba(255, 107, 157, 0.3)' }}
          >
            JP
          </Link>

          <div className="flex gap-4 md:gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/projects">Projects</NavLink>
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
        'font-heading text-base md:text-lg text-darkText hover:text-sbtbPink transition-all hover:scale-110',
        className
      )}
    >
      {children}
    </Link>
  );
}
