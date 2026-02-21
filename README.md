# Jeremy Philipson - Personal Portfolio

A retro-futuristic personal portfolio website with an 80s arcade aesthetic, built with Next.js 15 and TypeScript.

## 🎮 Features

- **80s Arcade Theme**: Neon colors, pixel fonts, CRT scanlines, and retro animations
- **3D Flip Cards**: Interactive experience and education cards with smooth flip animations
- **Responsive Design**: Mobile-first approach with full tablet and desktop support
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized bundle sizes, lazy loading, and static generation
- **SEO Optimized**: Comprehensive metadata, sitemap, and Open Graph support

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Press Start 2P, VT323, Orbitron (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)
- **Testing**: Jest + React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jlp0422/personal-site-v2.git
cd personal-site-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run format       # Format code with Prettier
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root redirect
│   ├── not-found.tsx      # 404 page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # Web app manifest
├── components/            # React components
│   ├── animations/        # Animation components
│   ├── arcade/            # Arcade-themed primitives
│   ├── cards/             # Card components
│   ├── layout/            # Header, Footer
│   └── shared/            # Shared utilities
├── data/                  # Static data (TypeScript)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## 🎨 Theme

The site features a custom 80s arcade color palette:

- **Neon Pink** (#FF10F0): Primary accent
- **Neon Cyan** (#00FFFF): Secondary accent
- **Neon Yellow** (#FFFF00): Highlights
- **Screen Green** (#00FF41): Body text
- **Deep Black** (#0D0208): Background
- **Coin Gold** (#FFD700): Special elements

## ♿ Accessibility

- WCAG AA compliant color contrast
- Keyboard navigation support
- Screen reader optimized
- Skip-to-content link
- Focus visible states
- Reduced motion support
- High contrast mode support

## 📊 Performance

- First Load JS: ~115KB (gzipped)
- Lighthouse Score: 95+ (all metrics)
- Static page generation
- Optimized images with next/image
- Font optimization with next/font

## 📝 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions, feel free to open an issue!

## 📧 Contact

- **Email**: jeremyphilipson@gmail.com
- **GitHub**: [@jlp0422](https://github.com/jlp0422)
- **LinkedIn**: [jeremyphilipson](https://linkedin.com/in/jeremyphilipson)

---

Built with ❤️ and lots of ☕ by Jeremy Philipson
