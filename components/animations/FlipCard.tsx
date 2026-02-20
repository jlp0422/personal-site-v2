'use client';

import { ReactNode } from 'react';
import { useFlipCard } from '@/hooks';
import { cn } from '@/lib/utils';

export interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

export function FlipCard({
  front,
  back,
  className,
  frontClassName,
  backClassName,
}: FlipCardProps) {
  const { isFlipped, flip } = useFlipCard();

  return (
    <div
      className={cn('group perspective-1000 cursor-pointer', className)}
      onClick={flip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? 'Flip card to front' : 'Flip card to back'}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 transform-style-3d',
          isFlipped && 'rotate-y-180'
        )}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0 backface-hidden',
            frontClassName
          )}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0 backface-hidden rotate-y-180',
            backClassName
          )}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
