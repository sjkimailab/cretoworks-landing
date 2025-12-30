# Figma Migration Guide

To migrate the current website design to Figma efficiently, follow these steps:

## 1. Automated Migration (Recommended)
This is the fastest way to get the exact layout into Figma.

1.  **Start your local server**: Run `npm run dev` in your terminal.
2.  **Open the site**: Usually at `http://localhost:5173`.
3.  **Use `html.to.design` Plugin**:
    -   In Figma, go to **Resources > Plugins**.
    -   Search for and run **html.to.design**.
    -   Enter the URL of your local development server.
    -   Select the device (Desktop 1440px is recommended).
    -   Click **Import**.
    -   *Note: This will recreate the layers, images, and text automatically.*

## 2. Manual Asset Migration
If you need specific assets:

### SVG Assets
You can find these in the project and drag them directly into Figma:
- `src/assets/react.svg`
- `public/vite.svg`

### Layout Components
Recreate these frames in Figma using the [Design Tokens](./figma_design_tokens.md):
- **Hero**: Use `Navy` background, `Pretendard` bold text, and the `Accent Gradient` for the "AI for Everyone" text.
- **Glass Cards**: Apply the `Glass BG`, `Glass Border`, and `Blur Amount` (12px) to frames.

## 3. Style Setup
To keep the design consistent, create **Styles** or **Variables** in Figma for:
- All colors listed in the [Tokens Guide](./figma_design_tokens.md).
- Typography (H1, H2, H3, Base).
- Effects (Card shadows and blurs).
