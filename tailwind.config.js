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
        emerald: {
          400: '#00FF66',
          500: '#10B981',
          600: '#059669',
        },
        amber: {
          400: '#FFD700',
          500: '#F59E0B',
        },
        cyan: {
          400: '#06B6D4',
          500: '#0891B2',
        }
      }
    },
  },
  plugins: [],
}
