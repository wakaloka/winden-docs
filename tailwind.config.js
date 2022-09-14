/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{md,html,js,jsx,ts,tsx}",
    "./{docs,blog}/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  plugins: []
}