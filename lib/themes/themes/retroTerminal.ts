import { Theme } from '../types';

export const retroTerminal: Theme = {
  id: 'retroTerminal',
  name: 'Retro Terminal',
  description: 'Green monochrome CRT terminal aesthetic',
  emoji: '💻',

  colors: {
    background: '#0C1810',
    foreground: '#0F1F15',
    text: '#00FF41',
    textMuted: '#00AA2E',

    primary: '#00FF41',
    secondary: '#00DD38',
    accent1: '#00FF41',
    accent2: '#00DD38',
    accent3: '#00BB30',
    accent4: '#00992A',

    success: '#00FF41',
    warning: '#FFAA00',
    error: '#FF4444',

    cardBg: '#0F1F15',
    cardBorder: '#00FF41',
    buttonBg: '#00FF41',
    buttonText: '#0C1810',
    buttonHover: '#00DD38',
  },

  fonts: {
    heading: 'VT323, monospace',
    body: 'Courier Prime, monospace',
    accent: 'Share Tech Mono, monospace',
    mono: 'VT323, monospace',
  },

  effects: {
    cardShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
    textShadow: '0 0 8px #00FF41',
    glow: '0 0 10px #00FF41, 0 0 20px #00FF41',
    border: '2px solid',
    borderRadius: '0px',
    buttonShadow: '0 0 15px rgba(0, 255, 65, 0.5)',
  },

  special: {
    scanlines: true,
    backgroundPattern: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    )`,
  },
};
