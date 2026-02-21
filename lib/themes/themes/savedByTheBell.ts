import { Theme } from '../types';

export const savedByTheBell: Theme = {
  id: 'savedByTheBell',
  name: 'Saved by the Bell',
  description: '80s Memphis design with bright colors and geometric shapes',
  emoji: '📺',

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

    success: '#6BCF7F',
    warning: '#FFD93D',
    error: '#FF5757',

    cardBg: '#FFFFFF',
    cardBorder: '#9B59B6',
    buttonBg: '#9B59B6',
    buttonText: '#FFFFFF',
    buttonHover: '#FF6B9D',
  },

  fonts: {
    heading: 'Righteous, cursive',
    body: 'Poppins, sans-serif',
    accent: 'Fredoka, cursive',
  },

  effects: {
    cardShadow: '10px 10px 0px rgba(155, 89, 182, 0.4)',
    textShadow: '3px 3px 0px rgba(255, 107, 157, 0.3)',
    border: '4px solid',
    borderRadius: '0px',
    buttonShadow: '6px 6px 0px rgba(0, 0, 0, 0.2)',
  },

  special: {
    backgroundPattern: `radial-gradient(circle at 20% 50%, rgba(155, 89, 182, 0.05) 1px, transparent 1px),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 157, 0.05) 1px, transparent 1px),
      radial-gradient(circle at 40% 20%, rgba(0, 217, 255, 0.05) 1px, transparent 1px)`,
  },
};
