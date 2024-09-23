/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {
        1: 'var(--whys-background-default)',
        2: 'var(--whys-background-secondary)',
        gray: {
          DEFAULT: 'var(--whys-surface-soft-gray-default)',
          hover: 'var(--whys-surface-soft-gray-hover)',
          active: 'var(--whys-surface-soft-gray-active)',
        },
        solid: {
          DEFAULT: 'var(--whys-surface-solid-gray-default)',
          hover: 'var(--whys-surface-solid-gray-hover)',
        },
      },
      borderColor: {
        DEFAULT: 'var(--whys-border-gray-default)',
        hover: 'var(--whys-border-gray-hover)',
        active: 'var(--whys-border-gray-active)',
      },
      ringColor: {
        DEFAULT: 'var(--whys-border-gray-default)',
        hover: 'var(--whys-border-gray-hover)',
        active: 'var(--whys-border-gray-active)',
      },
      textColor: {
        primary: 'var(--whys-text-primary-gray)',
        secondary: 'var(--whys-text-secondary-gray)',
      },
    },
  },
  plugins: [],
};
