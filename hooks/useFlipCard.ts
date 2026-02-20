'use client';

import { useState, useCallback } from 'react';

export interface FlipCardState {
  isFlipped: boolean;
  flip: () => void;
  reset: () => void;
}

/**
 * Custom hook for managing 3D flip card state
 * Returns flipped state and controls for flipping the card
 */
export function useFlipCard(initialFlipped = false): FlipCardState {
  const [isFlipped, setIsFlipped] = useState(initialFlipped);

  const flip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const reset = useCallback(() => {
    setIsFlipped(false);
  }, []);

  return {
    isFlipped,
    flip,
    reset,
  };
}
