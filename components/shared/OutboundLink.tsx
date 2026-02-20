import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface OutboundLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'neon';
}

export function OutboundLink({
  href,
  children,
  variant = 'default',
  className,
  ...props
}: OutboundLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  const variantClasses = {
    default: 'text-neonCyan hover:text-neonPink transition-colors underline',
    neon: 'text-neonPink hover:text-neonCyan transition-all hover:shadow-neon',
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
