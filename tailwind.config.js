const defaultTheme = require('tailwindcss/defaultTheme')
const { radixToTailwind } = require('./lib/utils/radixToTailwind')
const {
  crimson,
  crimsonDark,
  olive,
  oliveDark,
  lime,
  limeDark,
  sky,
  skyDark,
  grass,
  grassDark,
  red,
  redDark,
  mint,
  mintDark,
  amber,
  amberDark,
} = require('@radix-ui/colors')
const { typography } = require('./styles/tailwind.typography')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        1: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
        2: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
        3: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
        4: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
        5: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
        6: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)',
      },
      colors: {
        neutral: radixToTailwind(olive),
        neutralDark: radixToTailwind(oliveDark),
        primary: radixToTailwind(lime),
        primaryDark: radixToTailwind(limeDark),
        info: radixToTailwind(sky),
        infoDark: radixToTailwind(skyDark),
        warning: radixToTailwind(amber),
        warningDark: radixToTailwind(amberDark),
        success: radixToTailwind(grass),
        successDark: radixToTailwind(grassDark),
        danger: radixToTailwind(red),
        dangerDark: radixToTailwind(redDark),
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.sans],
        display: [
          'var(--font-display),var(--font-sans)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      typography,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
