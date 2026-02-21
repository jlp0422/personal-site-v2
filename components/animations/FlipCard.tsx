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
          'relative w-full h-full transition-transform duration-700',
          isFlipped && 'rotate-y-180'
        )}
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
        } as React.CSSProperties}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0',
            frontClassName
          )}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0',
            backClassName
          )}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            WebkitTransform: 'rotateY(180deg)',
          } as React.CSSProperties}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
