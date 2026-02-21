'use client';

import { ReactNode } from 'react';
import { useFadeIn } from '@/hooks';
import { cn } from '@/lib/utils';

export interface FadeSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function FadeSection({
  children,
  delay = 0,
  className,
  threshold = 0.1,
}: FadeSectionProps) {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>({ threshold, delay });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}
