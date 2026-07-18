/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm paper aesthetic: stone neutrals + muted green accent.
        // Adjust here to rebrand the whole site.
        brand: {
          50: '#f0f7f2',
          100: '#dcefe3',
          200: '#bbdfc9',
          300: '#8ec7a6',
          400: '#5da97f',
          500: '#3d8d62',
          600: '#2b724d',
          700: '#235c40',
          800: '#1e4a35',
          900: '#1a3d2d',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
