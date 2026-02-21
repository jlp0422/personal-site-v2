import { Theme } from '../types';

export const cyberpunk: Theme = {
  id: 'cyberpunk',
  name: 'Cyberpunk',
  description: 'Dark futuristic with neon accents and glowing effects',
  emoji: '🌃',

  colors: {
    background: '#0A0E27',
    foreground: '#1A1F3A',
    text: '#E0E7FF',
    textMuted: '#8B92B0',

    primary: '#00F0FF',
    secondary: '#FF006E',
    accent1: '#8B5CF6',
    accent2: '#FFBE0B',
    accent3: '#00FF88',
    accent4: '#FF3864',

    success: '#00FF88',
    warning: '#FFBE0B',
    error: '#FF3864',

    cardBg: '#1A1F3A',
    cardBorder: '#00F0FF',
    buttonBg: '#00F0FF',
    buttonText: '#0A0E27',
    buttonHover: '#FF006E',
  },

  fonts: {
    heading: 'Orbitron, sans-serif',
    body: 'Rajdhani, sans-serif',
    accent: 'Share Tech Mono, monospace',
    mono: 'Fira Code, monospace',
  },

  effects: {
    cardShadow: '0 0 30px rgba(0, 240, 255, 0.3), 0 10px 40px rgba(0, 0, 0, 0.5)',
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
    glow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
    border: '2px solid',
    borderRadius: '4px',
    buttonShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
  },

  special: {
    scanlines: true,
    gradient: 'linear-gradient(180deg, #0A0E27 0%, #1A1F3A 100%)',
    backgroundPattern: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 240, 255, 0.03) 2px,
      rgba(0, 240, 255, 0.03) 4px
    )`,
  },
};
