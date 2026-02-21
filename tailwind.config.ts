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
        // 80s "Saved by the Bell" Memphis Design Palette
        sbtbPurple: '#9B59B6',    // Bright purple (Screech vibes)
        sbtbPink: '#FF6B9D',      // Hot pink (Kelly's locker)
        sbtbYellow: '#FFD93D',    // Bright yellow (Lisa's style)
        sbtbCyan: '#00D9FF',      // Bright cyan (Zack's phone)
        sbtbOrange: '#FF8C42',    // Tangerine orange
        sbtbGreen: '#6BCF7F',     // Fresh mint green
        sbtbBlue: '#4E8EF7',      // Electric blue
        sbtbRed: '#FF5757',       // Bold red
        lightBg: '#FFF5F7',       // Soft white background
        darkText: '#2C3E50',      // Dark readable text
        accentBg: '#F0F0F0',      // Light accent background
      },
      fontFamily: {
        heading: ['"Righteous"', 'cursive'],           // Bold 80s headings
        body: ['"Poppins"', 'sans-serif'],             // Clean, readable body
        accent: ['"Fredoka One"', 'cursive'],          // Fun accent font
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
          '-webkit-backface-visibility': 'hidden',
          'backface-visibility': 'hidden',
        },
        '.transform-style-3d': {
          '-webkit-transform-style': 'preserve-3d',
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          '-webkit-perspective': '1000px',
          'perspective': '1000px',
        },
        '.rotate-y-180': {
          '-webkit-transform': 'rotateY(180deg)',
          'transform': 'rotateY(180deg)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
