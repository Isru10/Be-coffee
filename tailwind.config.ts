// tailwind.config.ts (CREATE THIS FILE IN YOUR PROJECT ROOT)
import type { Config } from 'tailwindcss';

const config: Config = {
  // Ensure content points to all components and pages
  darkMode: 'class', 
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom Color Palette: Clean, warm, elegant
      colors: {
        'bg-primary': '#F9F7F0', // Warm Off-White/Cream (White space)
        'bg-dark': '#1C1C1C',    // Near Black (For footer/dark sections)
        'text-dark': '#302C23',  // Dark Earthy Brown (WCAG friendly contrast)
        'accent-gold': '#A3885C', // Subtle Gold Accent (Elegant touch)
        'accent-green': '#5A7758', // Earthy Green Accent (Sustainability/Coffee)
        'dm-bg': '#1C1C1C',
        'dm-text': '#F9F7F0',

      },
      // Custom Typography: Modern serif + sans combo
      fontFamily: {
        // Mapped to the variables defined in app/layout.tsx
        serif: ['var(--font-serif)'], 
        sans: ['var(--font-sans)'], 
      },
    },
  },
  plugins: [],
};

export default config;