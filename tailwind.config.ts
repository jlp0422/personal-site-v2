import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 80s Arcade Color Palette
        neonPink: '#FF10F0',
        neonCyan: '#00FFFF',
        neonYellow: '#FFFF00',
        arcadeOrange: '#FF6600',
        deepBlack: '#0D0208',
        screenGreen: '#00FF41',
        coinGold: '#FFD700',
        arcadePurple: '#9D00FF',
        hotMagenta: '#FF006E',
        electricBlue: '#0066FF',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        arcade: ['VT323', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        glitch: 'glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        scanline: 'scanline 8s linear infinite',
        pixelPulse: 'pixelPulse 2s ease-in-out infinite',
        neonGlow: 'neonGlow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pixelPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        neonGlow: {
          from: {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
          to: {
            textShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 50px currentColor',
          },
        },
      },
      boxShadow: {
        neon: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
        neonStrong: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
        arcade: 'inset 0 0 0 8px currentColor, 0 0 0 8px currentColor',
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
