# Refactoring Brief for Jules

Hello Jules! I've been working on the CretoWorks landing project, and it's time for a general refactoring to improve maintainability and architectural integrity. Here is a guide on what needs attention.

## Project Context
- **Tech Stack**: React, Vite, Vanilla CSS, i18next.
- **Languages**: KR (Default), EN, ZH. (JA is currently disabled).
- **Core Design**: Premium dark theme with glassmorphism and smooth animations.

## Key Refactoring Areas

### 1. CSS Reorganization (High Priority)
Currently, `src/index.css` has grown to over 500 lines. It contains many component-specific styles (e.g., `.services`, `.custom-dev-card`, `.bento-grid`, `.consultancy-box`).
- **Goal**: Move component-specific styles from `index.css` back to their respective component CSS files (e.g., `Services.css`, `Hero.css`).
- **Maintain**: Keep global design tokens in `:root` and global resets/utility classes in `index.css`.

### 2. Component Refinement
- **Services.jsx**: This component is becoming large and handles a lot of manual layout. Consider if any sub-parts (like the bento grid or the consultancy box) should be extracted into smaller functional components.
- **App.jsx**: Currently contains the `ErrorBoundary` class and main application logic. Consider moving `ErrorBoundary` to its own file in `src/components/common/`.

### 3. Localization Consistency
- Ensure all hardcoded strings (if any) are moved to the `translation.json` files.
- Verify that the `privacy` section updates I recently made are consistent across all languages (though Japanese is disabled, the data is still there).

### 4. Code Cleanup & Linting
- Run `npm run lint` and address any outstanding warnings or errors.
- Remove any lingering unused imports or commented-out code from previous iterations (e.g., residual `Partners` references).

### 5. Asset Optimization
- We've moved to SVG for the main logos (`logo.svg`, `logo-icon.svg`), which is great.
- Check other assets in `src/assets/generated/` and `public/assets/` to see if they can be optimized or if SVGs could be used for recurring graphic elements (like the hexagon nodes).

## Recent Major Changes (Reference)
- Added `PrivacyModal` and integrated it with `Footer` and `CookieConsent`.
- Disabled Japanese locale but kept the data in `i18n.js` and `translation.json`.
- Scaled the footer logo and added a logo icon to the `ContactCTA`.

Good luck with the refactoring!
