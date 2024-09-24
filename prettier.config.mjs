/** @type {import("prettier").Config} */

export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      options: {
        printWidth: 42,
      },
    },
  ],
}
