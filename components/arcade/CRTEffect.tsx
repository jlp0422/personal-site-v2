import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CRTEffectProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
}

const intensityStyles = {
  light: 'before:opacity-30',
  medium: 'before:opacity-50',
  heavy: 'before:opacity-70',
};

export function CRTEffect({
  children,
  intensity = 'medium',
  className,
  ...props
}: CRTEffectProps) {
  return (
    <div
      className={cn(
        'crt-effect',
        intensityStyles[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
