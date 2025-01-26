/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Vite serves this file
    "./src/**/*.{js,jsx,ts,tsx}", // Scan React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
