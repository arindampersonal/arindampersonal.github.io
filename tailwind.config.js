/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090C',
          900: '#0A0D10', // Deep obsidian canvas
          850: '#0E1317',
          800: '#11161B', // Elevated card surface
          750: '#171F26', // High elevated / borders
          700: '#1F2933',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E5ECE8',
          200: '#CAD8D0',
          300: '#A8BFB3',
          400: '#8BA89B', // Muted sage signature
          500: '#6E8F81',
          600: '#547366',
          700: '#435C52',
          800: '#354841',
          900: '#2A3A34',
        },
        azure: {
          50: '#F0F9FF',
          400: '#38BDF8', // Azure Sky
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
        paper: {
          50: '#FFFFFF',
          100: '#FBFBFA', // Editorial light canvas
          200: '#F3F4F1',
          300: '#E6E8E3',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
