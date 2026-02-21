import { Theme } from '../types';

export const vaporwave: Theme = {
  id: 'vaporwave',
  name: 'Vaporwave',
  description: 'A E S T H E T I C 90s nostalgia with pastels and grids',
  emoji: '🌊',

  colors: {
    background: '#FFF0F5',
    foreground: '#FFFFFF',
    text: '#4A154B',
    textMuted: '#8E44AD',

    primary: '#FF6AD5',
    secondary: '#00E0FF',
    accent1: '#C724B1',
    accent2: '#FFB8D1',
    accent3: '#9D84B7',
    accent4: '#01CDFE',

    success: '#01CDFE',
    warning: '#FFB8D1',
    error: '#FF006E',

    cardBg: '#FFFFFF',
    cardBorder: '#FF6AD5',
    buttonBg: '#FF6AD5',
    buttonText: '#FFFFFF',
    buttonHover: '#00E0FF',
  },

  fonts: {
    heading: 'Monoton, cursive',
    body: 'Quicksand, sans-serif',
    accent: 'Bungee Shade, cursive',
  },

  effects: {
    cardShadow: '8px 8px 0px #00E0FF, 12px 12px 0px #FF6AD5',
    textShadow: '3px 3px 0px #00E0FF, 6px 6px 0px #FF6AD5',
    border: '3px solid',
    borderRadius: '0px',
    buttonShadow: '4px 4px 0px #00E0FF',
  },

  special: {
    glitch: true,
    gradient: 'linear-gradient(135deg, #FFF0F5 0%, #E0BBFF 50%, #FFE5F5 100%)',
    backgroundPattern: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 40px,
      rgba(255, 106, 213, 0.1) 40px,
      rgba(255, 106, 213, 0.1) 80px
    ), repeating-linear-gradient(
      90deg,
      transparent,
      transparent 40px,
      rgba(0, 224, 255, 0.1) 40px,
      rgba(0, 224, 255, 0.1) 80px
    )`,
  },
};
