import type { Config } from 'tailwindcss'

// Tailwind v4: ALL theme customisation lives in globals.css @theme block.
// This file intentionally contains NO theme config.
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // No theme, no plugins — v4 handles everything via CSS @theme
}

export default config