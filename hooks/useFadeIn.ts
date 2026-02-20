'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

export interface FadeInOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

/**
 * Custom hook for fade-in animations on scroll using IntersectionObserver
 * Returns a ref to attach to the element and the visible state
 */
export function useFadeIn<T extends HTMLElement>(
  options: FadeInOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          // Once visible, we can stop observing
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return [ref, isVisible];
}
