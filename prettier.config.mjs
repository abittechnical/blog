/** @type {import("prettier").Config} */

export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  plugins: [],
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      options: {
        printWidth: 42,
      },
    },
  ],
}
