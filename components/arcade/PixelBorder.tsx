import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface PixelBorderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?: 'pink' | 'cyan' | 'yellow' | 'orange' | 'green' | 'purple';
  thickness?: number;
}

const colorStyles = {
  pink: 'text-neonPink',
  cyan: 'text-neonCyan',
  yellow: 'text-neonYellow',
  orange: 'text-arcadeOrange',
  green: 'text-screenGreen',
  purple: 'text-arcadePurple',
};

export function PixelBorder({
  children,
  color = 'pink',
  thickness = 4,
  className,
  ...props
}: PixelBorderProps) {
  return (
    <div
      className={cn(
        'pixel-border relative',
        colorStyles[color],
        className
      )}
      style={{
        borderWidth: `${thickness}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
