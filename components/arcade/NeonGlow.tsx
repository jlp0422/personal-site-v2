import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface NeonGlowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?: 'pink' | 'cyan' | 'yellow' | 'orange' | 'green' | 'purple';
  animated?: boolean;
}

const colorStyles = {
  pink: 'text-neonPink',
  cyan: 'text-neonCyan',
  yellow: 'text-neonYellow',
  orange: 'text-arcadeOrange',
  green: 'text-screenGreen',
  purple: 'text-arcadePurple',
};

export function NeonGlow({
  children,
  color = 'pink',
  animated = true,
  className,
  ...props
}: NeonGlowProps) {
  return (
    <div
      className={cn(
        'drop-shadow-neon',
        colorStyles[color],
        animated && 'neon-glow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
