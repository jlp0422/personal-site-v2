'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeId, ThemeContextValue } from '@/lib/themes/types';
import { themes, themeList } from '@/lib/themes';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>('savedByTheBell');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as ThemeId;
    if (stored && themes[stored]) {
      setThemeId(stored);
    }
  }, []);

  // Save to localStorage and apply CSS variables when theme changes
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('theme', themeId);
    applyThemeVariables(themes[themeId]);
    document.documentElement.setAttribute('data-theme', themeId);
  }, [themeId, mounted]);

  const value: ThemeContextValue = {
    currentTheme: themes[themeId],
    themeId,
    setTheme: setThemeId,
    availableThemes: themeList,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

function applyThemeVariables(theme: Theme) {
  const root = document.documentElement;

  // Apply color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  // Apply font variables
  Object.entries(theme.fonts).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--font-${key}`, value);
    }
  });

  // Apply effect variables
  Object.entries(theme.effects).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--effect-${key}`, value);
    }
  });

  // Apply special effect variables
  if (theme.special) {
    Object.entries(theme.special).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--special-${key}`, value);
      }
    });
  }
}
