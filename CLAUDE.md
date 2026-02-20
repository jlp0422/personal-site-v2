# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jeremy Philipson built with Gatsby v2, deployed on Netlify at [jeremyphilipson.com](https://www.jeremyphilipson.com).

## Development Commands

```bash
# Start development server (localhost:8000)
npm run develop
# or
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clean Gatsby cache and public directory
gatsby clean

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Format all files with Prettier
npm run format
```

**Note:** Prettier runs automatically on pre-commit via Husky hook.

## Architecture

### Component Structure

Each component follows a consistent folder structure:
- `ComponentName/ComponentName.js` - Main component implementation
- `ComponentName/index.js` - Export file
- `ComponentName/styles.js` - Emotion styled components
- `ComponentName/test.js` - Jest tests
- `ComponentName/__snapshots__/` - Jest snapshot files

Components are either in `src/components/` (main components) or `src/components/shared/` (reusable utilities).

### Styling System

Uses **Emotion** (@emotion/core, @emotion/styled) with a theme system:
- Theme configuration in `src/helpers/palette.js` (colors) and `src/helpers/fonts.js`
- ThemeWrapper component (`src/components/shared/ThemeWrapper.js`) provides theme context
- Access theme in styled components via `props.theme`
- GlobalStyle component (`src/components/GlobalStyle.js`) for global CSS

### Data Management

Static data lives in `src/data/`:
- `contact.js` - Contact information
- `education.js` - Education history
- `experience.js` - Work experience
- `projects.js` - Portfolio projects
- `emoji.js` - Emoji mappings
- `index.js` - Central export point

GraphQL queries (via `useStaticQuery`) are used for:
- Site metadata (configured in `gatsby-config.js`)
- Images (via `gatsby-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`)

### Page Structure

Pages in `src/pages/` map to routes:
- `/about` - Main landing page (root `/` redirects here via `gatsby-node.js`)
- `/experience` - Work experience
- `/projects` - Portfolio projects
- `/404` - Error page

The redirect from `/` to `/about` is configured in `gatsby-node.js` using `createRedirect`.

### Layout System

`Layout` component (`src/components/Layout/`) wraps all pages:
- Provides Header, Footer, and main container
- Wrapped in ThemeWrapper for theme access
- Includes GlobalStyle for global CSS
- Uses GraphQL query for site metadata

### Testing

Jest configuration (`jest.config.js`):
- Snapshot testing for component UI
- File mocks for static assets
- Custom setup files: `jest-preprocess.js`, `loadershim.js`
- Mocked Gatsby data in `__mocks__/` directory

When writing tests:
- Create snapshots for visual components
- Place mocks in `__mocks__/` directory
- Run tests before committing

### Image Handling

Images stored in `src/images/`, queried via GraphQL using:
- `gatsby-image` for optimized images
- `gatsby-plugin-sharp` and `gatsby-transformer-sharp` for processing
- Custom `Image` component wraps Gatsby image functionality

### Custom Hooks

Located in `src/hooks/`:
- `useRotation.js` - Animation/rotation logic
- `useSiteMetadata.js` - Site metadata hook

## Key Files

- `gatsby-config.js` - Gatsby configuration and plugins
- `gatsby-node.js` - Build-time node APIs (creates `/` → `/about` redirect)
- `gatsby-browser.js` - Browser APIs
- `netlify.toml` - Netlify deployment configuration
- `.prettierrc` - Prettier configuration
- `jest.config.js` - Jest configuration
