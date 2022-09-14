/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{md,html,js,jsx,ts,tsx}",
    "./{docs,blog}/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'wp-small': 'var(--wp--custom--spacing--small)',
        'wp-medium': 'var(--wp--custom--spacing--medium)',
        'wp-large': 'var(--wp--custom--spacing--large)',
        'wp-outer': 'var(--wp--custom--spacing--outer)',
      }
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  plugins: []
}