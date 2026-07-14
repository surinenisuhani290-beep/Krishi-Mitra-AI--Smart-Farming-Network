/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'krishi-green': '#22c55e',
        'krishi-green-light': '#84cc16',
        'krishi-sky': '#0ea5e9',
        'krishi-orange': '#f97316',
        'krishi-earth': '#92400e',
        'krishi-danger': '#ef4444',
        'krishi-warning': '#eab308',
      },
      fontFamily: {
        heading: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
