'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ArcadeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pink' | 'cyan' | 'yellow' | 'orange' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  pink: 'bg-neonPink text-deepBlack border-neonPink hover:shadow-neonStrong',
  cyan: 'bg-neonCyan text-deepBlack border-neonCyan hover:shadow-neonStrong',
  yellow: 'bg-neonYellow text-deepBlack border-neonYellow hover:shadow-neonStrong',
  orange: 'bg-arcadeOrange text-deepBlack border-arcadeOrange hover:shadow-neonStrong',
  green: 'bg-screenGreen text-deepBlack border-screenGreen hover:shadow-neonStrong',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const ArcadeButton = forwardRef<HTMLButtonElement, ArcadeButtonProps>(
  ({ className, variant = 'pink', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'arcade-button font-pixel',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ArcadeButton.displayName = 'ArcadeButton';
