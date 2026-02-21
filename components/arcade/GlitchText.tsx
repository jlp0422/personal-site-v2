'use client';

import { HTMLAttributes } from 'react';
import { useGlitchEffect } from '@/hooks';
import { cn } from '@/lib/utils';

export interface GlitchTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  enabled?: boolean;
}

export function GlitchText({
  text,
  enabled = true,
  className,
  ...props
}: GlitchTextProps) {
  const offset = useGlitchEffect(enabled);

  return (
    <span
      className={cn('inline-block transition-transform duration-50', className)}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      {...props}
    >
      {text}
    </span>
  );
}
