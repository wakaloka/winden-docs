/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{md,html,js,jsx,ts,tsx}",
    "./{docs,blog}/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'small': 'var(--wp--custom--spacing--small)',
        'medium': 'var(--wp--custom--spacing--medium)',
        'large': 'var(--wp--custom--spacing--large)',
        'outer': 'var(--wp--custom--spacing--outer)',
      }
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  plugins: []
}