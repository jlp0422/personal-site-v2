# Theme Switcher Implementation Plan

## Overview
Implement a dynamic theme switcher allowing users to choose between 5 distinct visual themes:
1. **Saved by the Bell** (current) - Memphis 80s design
2. **Cyberpunk** - Dark neon futuristic
3. **Retro Terminal** - Green monochrome command-line
4. **Vaporwave** - Pink/purple/cyan aesthetic
5. **Brutalist** - Stark black/white minimal

## Architecture

### Theme System Structure
```
lib/
  themes/
    index.ts           # Theme definitions and exports
    types.ts           # TypeScript types
    themes/
      savedByTheBell.ts
      cyberpunk.ts
      retroTerminal.ts
      vaporwave.ts
      brutalist.ts
contexts/
  ThemeContext.tsx     # React context for theme state
components/
  theme/
    ThemeSwitcher.tsx  # UI for switching themes
    ThemePreview.tsx   # Visual preview thumbnails
```

## Phase 1: Theme Type System & Definitions

### 1.1 Create Theme Type (lib/themes/types.ts)
```typescript
export type ThemeId = 'savedByTheBell' | 'cyberpunk' | 'retroTerminal' | 'vaporwave' | 'brutalist';

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;

  colors: {
    // Base colors
    background: string;
    foreground: string;
    text: string;
    textMuted: string;

    // Accent colors
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;

    // Semantic colors
    success: string;
    warning: string;
    error: string;

    // Component colors
    cardBg: string;
    cardBorder: string;
    buttonBg: string;
    buttonText: string;
  };

  fonts: {
    heading: string;
    body: string;
    accent: string;
    mono?: string;
  };

  effects: {
    cardShadow: string;
    textShadow?: string;
    glow?: string;
    border: string;
    borderRadius: string;
  };

  special?: {
    backgroundPattern?: string;
    scanlines?: boolean;
    glitch?: boolean;
    gradient?: string;
  };
}
```

### 1.2 Define Each Theme

#### Saved by the Bell Theme
```typescript
{
  id: 'savedByTheBell',
  name: 'Saved by the Bell',
  description: '80s Memphis design with bright colors and geometric shapes',
  colors: {
    background: '#FFF5F7',
    foreground: '#FFFFFF',
    text: '#2C3E50',
    textMuted: '#64748B',
    primary: '#9B59B6',
    secondary: '#FF6B9D',
    accent1: '#FFD93D',
    accent2: '#00D9FF',
    accent3: '#FF8C42',
    accent4: '#6BCF7F',
    // ... etc
  },
  fonts: {
    heading: 'Righteous',
    body: 'Poppins',
    accent: 'Fredoka',
  },
  // ... etc
}
```

#### Cyberpunk Theme
```typescript
{
  id: 'cyberpunk',
  name: 'Cyberpunk',
  description: 'Dark futuristic with neon accents and glowing effects',
  colors: {
    background: '#0A0E27',
    foreground: '#1A1F3A',
    text: '#E0E7FF',
    textMuted: '#8B92B0',
    primary: '#00F0FF',  // Neon cyan
    secondary: '#FF006E', // Neon pink
    accent1: '#8B5CF6',   // Purple
    accent2: '#FFBE0B',   // Yellow
    accent3: '#00FF88',   // Green
    accent4: '#FF3864',   // Red
    // ... etc
  },
  fonts: {
    heading: 'Orbitron',
    body: 'Rajdhani',
    accent: 'Share Tech Mono',
    mono: 'Fira Code',
  },
  effects: {
    glow: '0 0 20px currentColor, 0 0 40px currentColor',
    // ... etc
  },
  special: {
    scanlines: true,
    gradient: 'linear-gradient(180deg, #0A0E27 0%, #1A1F3A 100%)',
  }
}
```

#### Retro Terminal Theme
```typescript
{
  id: 'retroTerminal',
  name: 'Retro Terminal',
  description: 'Green monochrome CRT terminal aesthetic',
  colors: {
    background: '#0C1810',
    foreground: '#0F1F15',
    text: '#00FF41',        // Matrix green
    textMuted: '#00AA2E',
    primary: '#00FF41',
    secondary: '#00DD38',
    accent1: '#00FF41',
    accent2: '#00DD38',
    accent3: '#00BB30',
    accent4: '#00992A',
    // ... etc (all green variations)
  },
  fonts: {
    heading: 'VT323',
    body: 'Courier Prime',
    accent: 'Share Tech Mono',
    mono: 'VT323',
  },
  effects: {
    textShadow: '0 0 8px #00FF41',
    glow: '0 0 10px #00FF41',
  },
  special: {
    scanlines: true,
    backgroundPattern: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)',
  }
}
```

#### Vaporwave Theme
```typescript
{
  id: 'vaporwave',
  name: 'Vaporwave',
  description: 'A E S T H E T I C 90s nostalgia with pastels and grids',
  colors: {
    background: '#FFF0F5',
    foreground: '#FFFFFF',
    text: '#4A154B',
    textMuted: '#8E44AD',
    primary: '#FF6AD5',     // Hot pink
    secondary: '#00E0FF',   // Cyan
    accent1: '#C724B1',     // Magenta
    accent2: '#FFB8D1',     // Pastel pink
    accent3: '#9D84B7',     // Lavender
    accent4: '#01CDFE',     // Bright cyan
    // ... etc
  },
  fonts: {
    heading: 'Monoton',
    body: 'Quicksand',
    accent: 'Bungee Shade',
  },
  effects: {
    textShadow: '3px 3px 0px #00E0FF, 6px 6px 0px #FF6AD5',
  },
  special: {
    glitch: true,
    gradient: 'linear-gradient(135deg, #FFF0F5 0%, #E0BBFF 50%, #FFE5F5 100%)',
    backgroundPattern: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,106,213,0.1) 40px, rgba(255,106,213,0.1) 80px)',
  }
}
```

#### Brutalist Theme
```typescript
{
  id: 'brutalist',
  name: 'Brutalist',
  description: 'Stark minimalism with heavy typography',
  colors: {
    background: '#FFFFFF',
    foreground: '#F5F5F5',
    text: '#000000',
    textMuted: '#666666',
    primary: '#000000',
    secondary: '#FF0000',   // Accent red
    accent1: '#000000',
    accent2: '#333333',
    accent3: '#666666',
    accent4: '#999999',
    // ... etc
  },
  fonts: {
    heading: 'Space Grotesk',
    body: 'Inter',
    accent: 'JetBrains Mono',
    mono: 'JetBrains Mono',
  },
  effects: {
    cardShadow: '8px 8px 0px #000000',
    border: '3px solid #000000',
    borderRadius: '0px',
  },
  special: {
    // No special effects - pure minimalism
  }
}
```

## Phase 2: Theme Context & Provider

### 2.1 Create ThemeContext (contexts/ThemeContext.tsx)
```typescript
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeId } from '@/lib/themes/types';
import { themes } from '@/lib/themes';

interface ThemeContextValue {
  currentTheme: Theme;
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>('savedByTheBell');

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeId;
    if (stored && themes[stored]) {
      setThemeId(stored);
    }
  }, []);

  // Save to localStorage and apply CSS variables when theme changes
  useEffect(() => {
    localStorage.setItem('theme', themeId);
    applyThemeVariables(themes[themeId]);
  }, [themeId]);

  const value = {
    currentTheme: themes[themeId],
    themeId,
    setTheme: setThemeId,
    availableThemes: Object.values(themes),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
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
    root.style.setProperty(`--font-${key}`, value);
  });

  // Apply effect variables
  Object.entries(theme.effects).forEach(([key, value]) => {
    root.style.setProperty(`--effect-${key}`, value);
  });
}
```

### 2.2 Update app/layout.tsx
Wrap the app in ThemeProvider and dynamically load fonts based on theme.

## Phase 3: Theme Switcher UI

### 3.1 Create ThemeSwitcher Component
Visual selector with theme preview cards showing:
- Theme name
- Mini preview of colors
- Description
- Click to activate

### 3.2 Add to Header
Dropdown or modal trigger in header navigation.

## Phase 4: Update Global Styles

### 4.1 Update globals.css
Replace hardcoded colors with CSS variables:
```css
body {
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-body);
}

/* Add theme-specific effects */
body[data-theme="retroTerminal"]::before {
  content: '';
  position: fixed;
  inset: 0;
  background: var(--special-backgroundPattern);
  pointer-events: none;
  z-index: 9999;
}
```

### 4.2 Update Tailwind Config
Extend Tailwind to use theme CSS variables:
```typescript
theme: {
  extend: {
    colors: {
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      // ... etc
    }
  }
}
```

## Phase 5: Component Updates

### 5.1 Update Components to Use Theme Variables
- ExperienceCard
- ProjectCard
- EducationCard
- Buttons
- Header/Footer

### 5.2 Add Theme-Specific Effects
- Scanlines for Terminal/Cyberpunk
- Glitch effect for Vaporwave
- Remove all effects for Brutalist

## Phase 6: Testing & Polish

### 6.1 Testing Checklist
- [ ] All themes apply correctly
- [ ] Theme persists on page reload
- [ ] All components work in all themes
- [ ] Text contrast meets WCAG AA standards
- [ ] Smooth transitions between themes
- [ ] Mobile responsive

### 6.2 Accessibility
- Add prefers-color-scheme detection
- Ensure proper contrast ratios
- Add reduced-motion support

## Implementation Order

1. **Step 1**: Create theme type definitions and all 5 theme objects
2. **Step 2**: Create ThemeContext and provider
3. **Step 3**: Update layout.tsx to use ThemeProvider
4. **Step 4**: Update globals.css with CSS variables
5. **Step 5**: Create ThemeSwitcher UI component
6. **Step 6**: Update all components to use theme variables
7. **Step 7**: Add theme-specific special effects
8. **Step 8**: Test and polish

## Estimated Timeline
- Phase 1-2: Theme system (1-2 hours)
- Phase 3: Theme switcher UI (30 min)
- Phase 4: Global styles (30 min)
- Phase 5: Component updates (1-2 hours)
- Phase 6: Polish & testing (1 hour)

**Total: 4-6 hours of development**

---

Ready to build! 🎨
