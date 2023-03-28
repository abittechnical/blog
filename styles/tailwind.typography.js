/** TODO: styles
 *
 * - base
 * - headings
 * - Images
 * - Inline Elements
 *    - a [a,a:hover]
 *    - strong
 *    - code [code,a code, :is(h2,h3) code]
 * - Quotes
 * - Figures
 * - Lists
 * - Code blocks
 *
 */
const typography = theme => ({
  invert: {
    css: {
      // TODO: Add styles for inverted typography using variables defined below
      '--tw-prose-body': 'var(--tw-prose-invert-body)',
      '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
      '--tw-prose-links': 'var(--tw-prose-invert-links)',
      '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
      '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
      '--tw-prose-underline-hover': 'var(--tw-prose-invert-underline-hover)',
      '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
      '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
      '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
      '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
      '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
      '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
      '--tw-prose-code': 'var(--tw-prose-invert-code)',
      '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
      '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
      '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
      '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
      '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
      '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
    },
  },
  DEFAULT: {
    css: {
      //  TODO: base variables
      '--tw-prose-body': theme('colors.neutral.11'),
      '--tw-prose-headings': theme('colors.neutral.12'),
      '--tw-prose-links': theme('colors.primary.9'),
      '--tw-prose-links-hover': theme('colors.primary.10'),
      '--tw-prose-underline': theme('colors.neutral.6'),
      '--tw-prose-underline-hover': theme('colors.neutral.7'),
      '--tw-prose-bold': theme('colors.neutral.12'),
      '--tw-prose-counters': theme('colors.neutral.12'),
      '--tw-prose-bullets': theme('colors.neutral.12'),
      '--tw-prose-hr': theme('colors.neutral.5'),
      '--tw-prose-quote-borders': theme('colors.neutral.5'),
      '--tw-prose-captions': theme('colors.neutral.7'),
      '--tw-prose-code': theme('colors.info.9'),
      '--tw-prose-code-bg': theme('colors.neutral.5'),
      '--tw-prose-pre-code-bg': theme('colors.neutral.12'),
      '--tw-prose-pre-border': 'transparent',
      '--tw-prose-th-border': theme('colors.neutral.6'),
      '--tw-prose-td-border': theme('colors.neutral.5'),

      '--tw-prose-invert-body': theme('colors.neutralDark.11'),
      '--tw-prose-invert-headings': theme('colors.neutralDark.12'),
      '--tw-prose-invert-links': theme('colors.primaryDark.9'),
      '--tw-prose-invert-links-hover': theme('colors.primary.10'),
      '--tw-prose-invert-underline': theme('colors.neutralDark.6'),
      '--tw-prose-invert-underline-hover': theme('colors.neutralDark.7'),
      '--tw-prose-invert-bold': theme('colors.neutralDark.12'),
      '--tw-prose-invert-counters': theme('colors.neutralDark.12'),
      '--tw-prose-invert-bullets': theme('colors.neutralDark.12'),
      '--tw-prose-invert-hr': theme('colors.neutralDark.5'),
      '--tw-prose-invert-quote-borders': theme('colors.neutralDark.5'),
      '--tw-prose-invert-captions': theme('colors.neutralDark.7'),
      '--tw-prose-invert-code': theme('colors.infoDark.9'),
      '--tw-prose-invert-code-bg': theme('colors.neutralDark.5'),
      '--tw-prose-invert-pre-code-bg': theme('colors.neutralDark.12'),
      '--tw-prose-invert-pre-border': 'transparent',
      '--tw-prose-invert-th-border': theme('colors.neutralDark.6'),
      '--tw-prose-invert-td-border': theme('colors.neutralDark.5'),
      // Base
      color: 'var(--tw-prose-body)',

      'h2,h3': {
        color: 'var(--tw-prose-headings)',
      },
    },
  },
})

module.exports = { typography }
