import type { Config } from 'tailwindcss';
import typographyPlugin from '@tailwindcss/typography';
import typography from './typography';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    // borderRadius: {
    //   DEFAULT: 'var(--whys-radius-5)',
    //   sm: 'var(--whys-radius-3)',
    //   lg: 'var(--whys-radius-6)',
    //   full: '9999px',
    // },
    typography,
    extend: {
      colors: {
        gray: {
          1: 'var(--whys-gray-100)',
          2: 'var(--whys-gray-200)',
          3: 'var(--whys-gray-300)',
          4: 'var(--whys-gray-400)',
          5: 'var(--whys-gray-500)',
          6: 'var(--whys-gray-600)',
          7: 'var(--whys-gray-700)',
          8: 'var(--whys-gray-800)',
          9: 'var(--whys-gray-900)',
          10: 'var(--whys-gray-1000)',
        },
      },
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
  plugins: [typographyPlugin],
} satisfies Config;
