'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function ThemeSwitcher() {
  const { currentTheme, themeId, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Theme toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
        style={{
          background: 'var(--color-foreground)',
          border: `2px solid var(--color-primary)`,
          color: 'var(--color-text)',
        }}
        aria-label="Change theme"
      >
        <span className="text-xl">{currentTheme.emoji}</span>
        <span className="hidden md:inline font-heading text-sm">Theme</span>
      </button>

      {/* Theme selector dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="absolute right-0 mt-2 p-4 rounded-lg z-50 min-w-[320px] max-h-[80vh] overflow-y-auto"
            style={{
              background: 'var(--color-foreground)',
              border: `3px solid var(--color-primary)`,
              boxShadow: 'var(--effect-cardShadow)',
            }}
          >
            <h3 className="font-heading text-lg mb-4" style={{ color: 'var(--color-primary)' }}>
              Choose Your Vibe
            </h3>

            <div className="grid gap-3">
              {availableThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'group relative p-4 rounded-lg transition-all text-left',
                    'hover:scale-[1.02] active:scale-[0.98]',
                    themeId === theme.id && 'ring-2 ring-offset-2'
                  )}
                  style={{
                    background: 'var(--color-cardBg)',
                    border: `2px solid ${theme.colors.primary}`,
                  }}
                >
                  {/* Theme preview colors */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{theme.emoji}</span>
                    <div className="flex-1">
                      <div className="font-heading text-sm" style={{ color: theme.colors.text }}>
                        {theme.name}
                      </div>
                      <div className="flex gap-1 mt-1">
                        {[
                          theme.colors.primary,
                          theme.colors.secondary,
                          theme.colors.accent1,
                          theme.colors.accent2,
                        ].map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-sm"
                            style={{ background: color }}
                          />
                        ))}
                      </div>
                    </div>
                    {themeId === theme.id && (
                      <span className="text-xl">✓</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs opacity-70" style={{ color: theme.colors.textMuted }}>
                    {theme.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
