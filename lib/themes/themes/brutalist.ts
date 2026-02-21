import { Theme } from '../types';

export const brutalist: Theme = {
  id: 'brutalist',
  name: 'Brutalist',
  description: 'Stark minimalism with heavy typography',
  emoji: '⬛',

  colors: {
    background: '#FFFFFF',
    foreground: '#F5F5F5',
    text: '#000000',
    textMuted: '#666666',

    primary: '#000000',
    secondary: '#FF0000',
    accent1: '#000000',
    accent2: '#333333',
    accent3: '#666666',
    accent4: '#999999',

    success: '#000000',
    warning: '#000000',
    error: '#FF0000',

    cardBg: '#FFFFFF',
    cardBorder: '#000000',
    buttonBg: '#000000',
    buttonText: '#FFFFFF',
    buttonHover: '#FF0000',
  },

  fonts: {
    heading: 'Space Grotesk, sans-serif',
    body: 'Inter, sans-serif',
    accent: 'JetBrains Mono, monospace',
    mono: 'JetBrains Mono, monospace',
  },

  effects: {
    cardShadow: '8px 8px 0px #000000',
    border: '3px solid',
    borderRadius: '0px',
    buttonShadow: '4px 4px 0px #000000',
  },

  special: {
    // No special effects - pure minimalism
  },
};
