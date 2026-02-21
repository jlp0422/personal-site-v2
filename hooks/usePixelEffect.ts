'use client';

import { useState, useEffect } from 'react';

export interface PixelEffectOptions {
  interval?: number;
  enabled?: boolean;
}

/**
 * Custom hook for pixel-based effects and animations
 * Can be used for glitch effects, pixel transitions, etc.
 */
export function usePixelEffect(options: PixelEffectOptions = {}) {
  const { interval = 100, enabled = true } = options;
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, enabled]);

  return { tick };
}

/**
 * Hook for glitch text effect
 * Returns a random offset for glitch animations
 */
export function useGlitchEffect(enabled = false) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const glitch = () => {
      const shouldGlitch = Math.random() > 0.9; // 10% chance
      if (shouldGlitch) {
        setOffset({
          x: Math.random() * 4 - 2, // -2 to 2
          y: Math.random() * 4 - 2,
        });
        setTimeout(() => setOffset({ x: 0, y: 0 }), 50);
      }
    };

    const interval = setInterval(glitch, 100);
    return () => clearInterval(interval);
  }, [enabled]);

  return offset;
}
