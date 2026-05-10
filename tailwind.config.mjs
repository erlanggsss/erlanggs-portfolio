/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        surface: 'var(--bg-primary)',
        'surface-alt': 'var(--bg-secondary)',
        border: 'var(--border-color)',
        'border-light': 'var(--border-color-light)',
        accent: 'var(--accent)',
        chip: 'var(--chip-bg)',
        'chip-border': 'var(--chip-border)',
      },
    },
  },
  plugins: [],
};
