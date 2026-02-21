export type ThemeId = 'savedByTheBell' | 'cyberpunk' | 'retroTerminal' | 'vaporwave' | 'brutalist';

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  emoji: string;

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
    buttonHover: string;
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
    buttonShadow: string;
  };

  special?: {
    backgroundPattern?: string;
    scanlines?: boolean;
    glitch?: boolean;
    gradient?: string;
    noise?: boolean;
  };
}

export interface ThemeContextValue {
  currentTheme: Theme;
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
  availableThemes: Theme[];
}
